import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

// Define route for "/login"

router.post("/signup",signup);

router.post("/login",login);

router.post("/logout",logout);

export default router;
