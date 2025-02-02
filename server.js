//* IMPORTING REQUIRED MODULES
const express = require("express");
const app = express();
path = require("path");
const { logger } = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const PORT = process.env.PORT || 3500;

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
app.listen(PORT, () => console.log(`Server running on port ${PORT}...`)); // - Start the server
