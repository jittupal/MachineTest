import express from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
    try {
        const { name, dob, email, password } = req.body;

        let userExists = await User.findOne({ email });
        if (userExists) return res.json({ message: "User already exists" });

        const hashed = await bcrypt.hash(password, 10);

        const newUser = await User.create({ name, dob, email, password: hashed });

        const token = jwt.sign({ id: newUser._id }, JWT_SECRET);

        res.json({ success: true, token, user: newUser });
    } catch (err) {
        res.json({ error: err.message });
    }
});

// LOGIN
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.json({ message: "User not found" });

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.json({ message: "Wrong password" });

        const token = jwt.sign({ id: user._id }, JWT_SECRET);

        res.json({ success: true, token, user });
    } catch (err) {
        res.json({ error: err.message });
    }
});

export default router;
