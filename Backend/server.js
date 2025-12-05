import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { MONGO_URI } from "./config.js";
import authRoutes from "./routes/auth.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URI).then(() => console.log("MongoDB Connected"));

app.use("/api/auth", authRoutes);

app.listen(5000, () => console.log("Server running on 5000"));
