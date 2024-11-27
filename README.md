# Role Based Access Control

This project is a Role-Based Access Control (RBAC) dashboard designed for managing users, roles, and permissions. It combines a sleek landing page with an integrated dashboard and supports a toggle for dark/light mode, making it user-friendly and visually appealing.


## Features
 <ul>
  <li>Landing & Dashboard:
    <ul>  <li> The landing page has been merged with the dashboard, making it a one-stop solution for both showcasing features and accessing functionalities.</li>
          <li>Quick navigation to manage users, roles, and permissions.</li> 
    </ul> </li>
  <li> Role-Based Access Control:
    <ul>  <li>Tabs to manage:
            <ol> <li>Users</li> 
                 <li>Roles</li>
                 <li>Permissions</li>
            </ol> 
          </li>
          <li> Dark/Light Mode: <ul> <li> A reusable toggle component to switch between light and dark themes. </li>
             <li>Theme persistence using localStorage.</li> </ul>
          </li> 
        <li> Responsive Design: Fully responsive for mobile, tablet, and desktop devices. </li> </ul> </li> </ul> 

## Technology Stack
<ul> <li> Frontend:
        <ol> <li> React </li>
             <li> Tailwind CSS </li>
             <li> React Router DOM (for routing) </li>
             <li> React Icons (for dark/light mode icons) </li>
        </ol> </li>
     <li> Tooling:
       <ol><li> Node.js & npm (for dependency management) </li>
           <li> Vite (optional for better development experience) </li>
       </ol> </li> </ul>

## Folder Structure:
![image](https://github.com/user-attachments/assets/0c4d6ce8-2c0f-4766-b372-09babbfc5959)

## Installation and Setup
### Prerequisites
Ensure you have the following installed on your system:
1. Node.js (v16 or later)
2. npm (v8 or later)

### Steps to Run

#### Clone the project:
```bash
  git clone https://github.com/shrutikajha2603/rbac.git
```
#### Install Dependencies:
```bash
  npm install
```

#### Start the Development Server:
``` bash
  npm start
```
The app will be available at http://localhost:3000.

#### Build for Production: To create an optimized build for deployment:
``` bash
  npm run build
```

## Usage
### Navigation
- Start directly at the Dashboard, which acts as both the landing page and the control center for managing users, roles, and permissions.
- Use the tabs within the dashboard to switch between the Users, Roles, and Permissions management sections.
### Dark/Light Mode
- Toggle between dark and light themes using the button in the navbar. The chosen theme will persist across pages and reloads.

## Components
### Dashboard.jsx
The merged component that acts as both the landing page and the dashboard. It contains:
- A hero section for welcoming users and introducing features.
- Navigation tabs for managing users, roles, and permissions.
### ThemeToggle.jsx
- A reusable component for toggling between light and dark themes using icons and localStorage.

### Navbar.jsx
- The navigation bar that connects all sections and includes the theme toggle button.

## Tailwind CSS Configuration
 - Custom Colors: Used Tailwind's default gray, blue, yellow, and purple colors for styling.
 - Responsive Utilities: Classes like md: and lg: are used to ensure responsiveness.

## Future Improvements
- API Integration: Connect the dashboard with a backend API to fetch and manage users, roles, and permissions dynamically.
- Authentication: Add login and role-based authentication.
- Enhanced Features:
  <ul> <li>Pagination for large datasets.</li>
       <li>Search and filter functionality for users, roles, and permissions. </li> </ul>

## Contributing
### Fork the repository.
##### Create a feature branch:
```bash
  git checkout -b feature-name
```
#### Commit your changes:
```bash
  git commit -m "Add feature-name"
```
#### Push to your fork and submit a pull request.

## **Bonus**
Don't forget to star the repository and share your feedback!✨

## Authors
- [@shrutikajha2603](https://github.com/shrutikajha2603)

