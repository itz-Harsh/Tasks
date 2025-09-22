# React Todo App with Firebase Authentication 🚀

This is a Todo application built with React for the frontend and Firebase as authentication. A backend-service is Python Base System use by endpoint Url of My Own [Todo API](https://github.com/itz-harsh/ToDo-API). It features user authentication with Google Sign-In, enabling users to manage their personal todo lists with real-time updates. The application is styled using Tailwind CSS, providing a clean and modern user experience.

---

## ✨ Features

- ✅ **Firebase Authentication**: Secure user sign-in using Google accounts.
- ➕ **Add & Manage Todos**: Easily add new tasks to your list.
- 🔄 **Real-time Updates**: Tasks are instantly synchronized across devices.
- ✏️ **Update & Delete**: Mark tasks as complete or remove them from your list.
- 🔔 **Custom Notifications**: Get instant feedback on your actions with toast notifications.
- 🎨 **Sleek UI**: A responsive and modern design powered by Tailwind CSS.

---

## 📂 Project Structure


```
├── 📁 .git/ 🚫 (auto-hidden)
├── 📁 node_modules/ 🚫 (auto-hidden)
├── 📁 public/
│   ├── 🖼️ favicon.ico
│   ├── 🌐 index.html
│   ├── 🖼️ logo192.png
│   ├── 🖼️ logo512.png
│   ├── 📄 manifest.json
│   └── 📄 robots.txt
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 📄 Clock.js
│   │   ├── 📄 Galaxy.js
│   │   ├── 📄 TodosAdd.js
│   │   ├── 📄 TodosGET.js
│   │   └── 📄 firebase.js
│   ├── 📁 context/
│   │   ├── 📁 authContext/
│   │   │   └── 📄 index.jsx
│   │   └── 📄 messageContext.js
│   ├── 📁 pages/
│   │   └── 📄 Home.js
│   ├── 📄 App.js
│   ├── 🎨 index.css
│   ├── 📄 index.js
│   └── 🖼️ logo.svg
├── 🔒 .env 🚫 (auto-hidden)
├── 🚫 .gitignore
├── 📖 README.md
├── 📄 package-lock.json
├── 📄 package.json
├── 📄 postcss.config.js
└── 📄 tailwind.config.js
```
🛠️ Getting Started

### Prerequisites

- **Node.js**: Make sure you have Node.js and npm installed on your system.
- **Firebase Project**: You must have an active Firebase project with Google Authentication enabled.

---

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/its-harsh/tasks.git
   cd tasks
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a .env file in the root directory and add your Firebase configuration details.

   ```env
   REACT_APP_API_KEY=your-api-key
   REACT_APP_AUTH_DOMAIN=your-auth-domain
   REACT_APP_PROJECT_ID=your-project-id
   REACT_APP_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_MESSAGING_SENDER_ID=your-messaging-sender-id
   REACT_APP_APP_ID=your-app-id
   ```

4. **Start the Development Server**:
   ```bash
   npm start
   ```

💻 Tech Stack

    React: A JavaScript library for building user interfaces.

    Firebase: A powerful backend platform for authentication, databases, and hosting.

    Tailwind CSS: A utility-first CSS framework for rapid UI development.

    @react-three/fiber: A React renderer for Three.js, used for the 3D graphics elements like Clock.js and Galaxy.js in your project.
