import express from "express";
import { getUser } from '../controllers/AuthController.js'
export const AuthRouter = express.Router(); 

//Rutas de mi path usuarios
AuthRouter.get('/', getUser);