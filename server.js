//* IMPORTING REQUIRED MODULES
require("dotenv").config();
const express = require("express");
const app = express();
path = require("path");
const { logger, logEvents } = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const mongoose = require("mongoose");
const connectBD = require("./config/dbConn");
const PORT = process.env.PORT || 3500;

// console.log(process.env.NODE_ENV);

connectBD(); // - Connect to MongoDB

app.use("/", express.static(path.join(__dirname, "public")));

//* | MIDDLEWARE
app.use(logger); // - Logger Middleware
app.use(cors(corsOptions)); // - CORS Middleware
app.use(express.json()); // - JSON Middleware
app.use(cookieParser()); // - Cookie Middleware

//* | ROUTES
app.use("/", require("./routes/root"));

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accept("json")) {
    res.json({ message: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
}); // - 404 route

//* | ERROR HANDLER MIDDLEWARE
app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("Connected to mongoDB...");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
}); // - Connect to MongoDB and start the server

mongoose.connection.on("error", (err) => {
  console.log(err);
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoDBLog.log"
  );
}); // - Log MongoDB connection errors
