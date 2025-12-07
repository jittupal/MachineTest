Full Stack Application – React + Node.js + MongoDB
A full-stack application built using React (Vite) for the frontend and Node.js, Express, and MongoDB Atlas for the backend.
It provides user registration, login, JWT authentication, and a protected dashboard.


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
