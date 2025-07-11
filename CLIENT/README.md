# Portfolio-2.0 Client

This is the frontend client for the Portfolio-2.0 project, built with React and Vite. It provides a modern, responsive user interface to showcase your skills, projects, and contact information.

---

## 🌟 Highlights

- Responsive and modern UI/UX
- Dynamic skills and projects sections
- Integrated contact form
- Downloadable resume
- Easy customization and modular codebase
- Connects to backend for contact form functionality

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Customization](#customization)
- [Contact](#contact)

---

## ✨ Features

- Hero, About, Skills, Projects, and Contact sections
- Screenshots for visual reference
- Contact form integrated with backend
- Resume download button

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Tailwind CSS

---

## 📁 Project Structure

```
CLIENT/
├── src/
│   ├── Components/
│   ├── Constants/
│   ├── Helpers/
│   ├── Layouts/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   ├── favicon.png
│   ├── profile.jpeg
│   ├── resume.pdf
│   └── vite.svg
├── package.json
├── vite.config.js
├── jsconfig.json
```

---

## ⚡ Setup & Installation

### Prerequisites

- Node.js & npm

### Steps

1. **Navigate to the CLIENT folder:**
   ```bash
   cd CLIENT
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure environment variables (optional):**
   - If you need to set custom backend API URLs, create a `.env` file in the `CLIENT` directory:
     ```env
     VITE_API_URL=http://localhost:5000
     ```
   - Adjust the value to match your backend server address.
4. **Start the frontend:**
   ```bash
   npm run dev
   ```

---

## 🗝️ Environment Variables

| Variable     | Description                           |
| ------------ | ------------------------------------- |
| VITE_API_URL | Backend API base URL for contact form |

---

## 🖥️ Usage

- Visit the frontend at `http://localhost:5173` (default Vite port)
- Fill out the contact form to send messages (requires backend running)
- Download resume from the profile section

---

## 🛠️ Customization

- Update your skills and projects in `src/Constants/Skills/Skills.jsx` and `src/Constants/Projects/Projects.js`
- Change profile image and resume in `public/`
- Modify layout and styles in `src/`

---

## 📬 Contact

For questions or support, reach out:

- **Email:** [gkartikey05@gmail.com](mailto:gkartikey05@gmail.com)
- **GitHub:** [gkartikey05](https://github.com/gkartikey05)

---
