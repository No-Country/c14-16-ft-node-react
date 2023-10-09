import express from "express";
import { login } from "../controllers/AuthController.js";
export const AuthRouter = express.Router(); 

AuthRouter.post("/login", login)


