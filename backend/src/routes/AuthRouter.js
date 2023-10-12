import express from "express";
import { login, register } from "../controllers/AuthController.js";
export const AuthRouter = express.Router(); 

/**
 * @openapi
 * /api/auth/login:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Login.
 *     description:  Hace el login del usuario.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               pass:
 *                 type: string
 *     responses:
 *       200:
 *         description: Token y el usuario actual.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: array
 *       400:
 *         description: Error de la solicitud.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Error del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
*/
AuthRouter.post("/login", login)

/**
 * @openapi
 * /api/auth/register:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Registrar.
 *     description:  Registrar un nuevo usuario.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               address:
 *                 type: string
 *               email:
 *                 type: string
 *               pass:
 *                 type: string
 *               profile_picture:
 *                 type: string 
 *                 nullable: true
 *     responses:
 *       200:
 *         description: El usuario creado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: object
 *       400:
 *         description: Error de la solicitud.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Error del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
*/
AuthRouter.post("/register", register)


