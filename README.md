# TaskTrackr 📌  
**A role-based notes management system for teams**  

## 🚀 Project Overview  
TaskTrackr is a digital replacement for sticky notes, designed for employees, managers, and admins to track tasks efficiently. It includes role-based access, note assignment, and an authentication system to ensure security and usability.  

## ✨ Features  
✅ **User Authentication** – Secure login with role-based access.  
✅ **Notes Management** – Create, edit, assign, and complete notes.  
✅ **User Roles** – Employees, Managers, and Admins with different permissions.  
✅ **Access Control** – Only authorized users can manage settings and delete notes.  
✅ **Mobile-Friendly** – Optimized for desktop with mobile support.  
✅ **Security Features** – Weekly login enforcement, instant access revocation.  

## 🏗️ Tech Stack  
- **Frontend:** HTML, CSS, JavaScript (or React, Vue, etc.)  
- **Backend:** Node.js, Express (or Django, Flask, etc.)  
- **Database:** MongoDB / PostgreSQL / MySQL  
- **Authentication:** JWT / OAuth  
- **Hosting:** Vercel, Heroku, or AWS  

## 📌 User Roles & Permissions  
| Role      | Create Notes | Edit Notes | View Notes | Delete Notes | User Management |
|-----------|-------------|------------|------------|--------------|----------------|
| Employee  | ✅ | ✅ (own notes) | ✅ (own notes) | ❌ | ❌ |
| Manager   | ✅ | ✅ | ✅ (all notes) | ✅ (all notes) | ✅ |
| Admin     | ✅ | ✅ | ✅ (all notes) | ✅ (all notes) | ✅ |

## 📜 Requirements  
- Users must log in at least **once per week**.  
- **Only Managers & Admins** can create new users.  
- **Notes have**: Ticket #, Title, Description, Created & Updated Dates.  
- Notes are either **OPEN** or **COMPLETED**.  
- **Employees only see and edit their assigned notes**.  
- **Managers & Admins can manage all notes**.  

## 🔧 Installation & Setup  
1. **Clone the repository:**  
   ```sh
   git clone https://github.com/yourusername/tasktrackr.git
   cd tasktrackr
