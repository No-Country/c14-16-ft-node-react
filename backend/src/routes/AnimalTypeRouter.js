import express from "express";
import { getTypes, getType, createType,updateType ,deleteType } from "../controllers/AnimalTypeController.js";
import { checkSession } from "../middlewares/session.js";
export const AnimalTypesRouter = express.Router()

AnimalTypesRouter.use(checkSession)

/**
 * @openapi
 * /api/animaltypes:
 *   get:
 *     tags:
 *       - Animal Types
 *     summary: Obtiene todos los tipos de animales.
 *     description: Obtiene una lista de todos los tipos de animales disponibles.
 *     responses:
 *       200:
 *         description: Lista de tipos de animales exitosamente obtenida.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: array
 *       401:
 *         description: No autorizado.
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
AnimalTypesRouter.get("/", getTypes)
AnimalTypesRouter.get("/:id", getType)
AnimalTypesRouter.post("/", createType)
AnimalTypesRouter.put("/:id", updateType)
AnimalTypesRouter.delete("/:id", deleteType)