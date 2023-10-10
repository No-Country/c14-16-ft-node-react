import express from "express";
import { login, register } from "../controllers/AuthController.js";
export const AuthRouter = express.Router(); 

AuthRouter.post("/login", login)
AuthRouter.post("/register", register)


