Full Stack Application – React + Node.js + MongoDB
A full-stack application built using React (Vite) for the frontend and Node.js, Express, and MongoDB Atlas for the backend.
It provides user registration, login, JWT authentication, and a protected dashboard.

<img width="1890" height="847" alt="Screenshot 2025-12-07 123822" src="https://github.com/user-attachments/assets/69492c36-8a93-44a4-b366-011e13df07e3" />


🚀 Tech Stack
Frontend: React, Vite, Tailwind CSS, Axios, React Router
Backend: Node.js, Express, MongoDB Atlas, Mongoose, JWT, bcryptjs


📁 Folder Structure
MachineTest/
 ├── Frontend/   (React Application)
 └── Backend/    (Node.js API)
 

⚛️ Frontend Setup
cd Frontend
npm install
npm run dev
<img width="783" height="788" alt="Screenshot 2025-12-07 123424" src="https://github.com/user-attachments/assets/9f2e71a7-7a3e-4577-9057-301a7beb5368" />

<img width="656" height="693" alt="Screenshot 2025-12-07 123955" src="https://github.com/user-attachments/assets/1f79449c-2cba-48c7-87c5-5037b9ecf300" />


🔧 Backend Setup
cd Backend
npm install


Create a .env file:
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
PORT=5000


Start backend:
node server.js


✨ Features
User Registration
User Login
Password Hashing
JWT Authentication
Protected Dashboard

LocalStorage session handling

🔗 API Endpoints

POST /api/auth/register

POST /api/auth/login
