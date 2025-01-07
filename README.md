# 4todos
Todo List Application

Overview

The Todo List Application is a task management tool built with Angular, featuring user authentication, registration, and task management capabilities. Users can register, log in, and securely manage their tasks with features like priority settings, due date tracking, and overdue task highlighting.

Features

User Authentication

Login Page: Authenticate users with stored credentials and provide error messages for invalid attempts.

Registration Page: Allow new users to sign up with necessary details (name, email, password).

Protected Routes

Restrict access to certain pages for authenticated users only.

Redirect unauthenticated users to the login page when accessing restricted routes.

Task Management

Create, update, and delete tasks.

Set task priorities (High, Medium, Low) with corresponding colors (Red, Orange, Green).

Mark tasks as completed and update their status.

Highlight tasks that are overdue based on due dates.

Local Storage Integration

Store user login email and task data in local storage for persistence.

Retrieve and display tasks from local storage.

Getting Started

Prerequisites

Node.js

Angular CLI

Firebase Firestore (for user data management)

Installation

Clone the repository:

git clone <repository_url>

Navigate to the project directory:

cd <project_name>

Install dependencies:

npm install

Run the Angular application:

ng serve

Open the application in your browser at:

http://localhost:4200

Usage

Register as a new user to create an account.

Log in with your registered credentials to access the to-do list.

Manage tasks:

Create new tasks with a title, priority, and due date.

Update or delete existing tasks.

Mark tasks as completed.

View overdue tasks highlighted for easy identification.

License

This project is licensed under the MIT License.

Contact

For any questions or suggestions, feel free.