import express from "express";
import { signup, signin } from "../controllers/auth.js";

const router = express.Router();

//Create a User
router.route("/signup").post(signup);

// Sign in
router.route("/signin").post(signin);

// Google Auth
router.route("/google").post();

export default router;
