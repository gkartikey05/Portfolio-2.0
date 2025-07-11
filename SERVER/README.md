# Portfolio-2.0 Server

This is the backend server for the Portfolio-2.0 project, built with Node.js and Express. It handles contact form submissions, email sending, and provides API endpoints for the portfolio frontend.

---

## 🌟 Highlights

- Express.js REST API for portfolio backend
- Handles contact form submissions and email notifications
- Modular structure for controllers, routes, middlewares, and utilities
- Easy integration with the frontend
- Environment variable support for secure configuration

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

- Contact form API endpoint
- Email sending via Nodemailer
- Error handling middleware
- Scalable and maintainable codebase

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express
- **Email:** Nodemailer

---

## 📁 Project Structure

```
SERVER/
├── Controllers/
├── Middlewares/
├── Routes/
├── Utils/
├── app.js
├── server.js
├── package.json
```

---

## ⚡ Setup & Installation

### Prerequisites

- Node.js & npm

### Steps

1. **Navigate to the SERVER folder:**
   ```bash
   cd SERVER
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure environment variables:**
   - Create a `.env` file in the `SERVER` directory with the following variables:
     ```env
     PORT=5000
     SMTP_HOST= <your_smtp_host>
     SMTP_PORT= <your_smtp_port>
     SMTP_USERNAME= <your_smtp_username>
     SMTP_PASSWORD= <your_smtp_password>
     SMTP_FROM_EMAIL= <your_smtp_email>
     CONTACT_US_EMAIL= <your_contact_us_email>
     ```
   - Replace the values with your actual email credentials and desired port.
4. **Start the server:**
   ```bash
   npm start
   ```

---

## 🗝️ Environment Variables

| Variable         | Description                                |
| ---------------- | ------------------------------------------ |
| PORT             | Port number for the Express server         |
| SMTP_HOST        | SMTP host for sending emails               |
| SMTP_PORT        | SMTP port for sending emails               |
| SMTP_USERNAME    | SMTP username for authentication           |
| SMTP_PASSWORD    | SMTP password for authentication           |
| SMTP_FROM_EMAIL  | Email address used as the "from" address   |
| CONTACT_US_EMAIL | Destination email address for contact form |

---

## 🖥️ Usage

- The server runs on `http://localhost:5000` by default
- API endpoint for contact form: `POST /api/contact`
- Integrate with the frontend for full portfolio functionality

---

## 🛠️ Customization

- Update email logic in `Utils/sendEmail.util.js`
- Modify routes in `Routes/routes.js`
- Add new controllers or middlewares as needed

---

## 📬 Contact

For questions or support, reach out:

- **Email:** [gkartikey05@gmail.com](mailto:gkartikey05@gmail.com)
- **GitHub:** [gkartikey05](https://github.com/gkartikey05)

---
