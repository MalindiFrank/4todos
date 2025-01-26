## 4todos

### Todo List Application

#### Overview
The **4todos** application is a task management tool built with Angular, featuring user authentication, registration, and task management capabilities. Users can register, log in, and securely manage their tasks with features like priority settings, due date tracking, and overdue task highlighting.

---

### Features

#### User Authentication
- **Login Page:**
  - Authenticate users with stored credentials.
  - Provide error messages for invalid attempts.
- **Registration Page:**
  - Allow new users to sign up with necessary details (name, email, password).

#### Protected Routes
- Restrict access to certain pages for authenticated users only.
- Redirect unauthenticated users to the login page when accessing restricted routes.

#### Task Management
- **CRUD Operations:** Create, update, and delete tasks.
- **Task Priorities:**
  - Set task priorities (High, Medium, Low) with corresponding colors:
    - High: Red
    - Medium: Orange
    - Low: Green
- **Task Status:**
  - Mark tasks as completed and update their status.
  - Highlight overdue tasks based on due dates for easy identification.

#### Local Storage Integration
- Store user login email and task data in local storage for persistence.
- Retrieve and display tasks from local storage.

---

### Getting Started

#### Prerequisites
- **Node.js**
- **Angular CLI**
- **Firebase Firestore** (for user data management)

#### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MalindiFrank/4todos.git
   ```
2. Navigate to the project directory:
   ```bash
   cd 4todos
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the Angular application:
   ```bash
   ng serve
   ```
5. Open the application in your browser at:
   ```
   http://localhost:4200
   ```

---

### Folder Structure
```
src/
|-- app/
    |-- auth/            // Firebase auth utility services
    |-- components/      // Angular standalone components
    |-- db/              // Firebase database utility services
    |-- models/          // TypeScript models (interface)
    |-- pages/           // Angular page components 
|-- environments/        // Environment configurations
```

---

---

### Usage

1. **Register:**
   - Create an account by signing up with your details.
2. **Log in:**
   - Authenticate yourself using your registered credentials.
3. **Manage Tasks:**
   - **Create Tasks:** Add new tasks with a title, priority, and due date.
   - **Update/Delete Tasks:** Modify or remove existing tasks.
   - **Complete Tasks:** Mark tasks as completed.
   - **Overdue Tasks:** View tasks past their due date highlighted for easy identification.

---

### License
This project is licensed under the **MIT License**.

---

For any questions or suggestions, feel free to reach out.

