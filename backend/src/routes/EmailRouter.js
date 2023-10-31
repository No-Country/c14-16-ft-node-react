import express from "express";
import { sendMail } from "../controllers/EmailController.js";

export const EmailRouter = express.Router()


EmailRouter.post("/send" , sendMail)
