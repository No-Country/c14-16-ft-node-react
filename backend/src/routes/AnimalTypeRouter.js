import express from "express";
import { getTypes, getType, createType,updateType ,deleteType } from "../controllers/AnimalTypeController.js";
export const AnimalTypesRouter = express.Router()

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
 *                   items:
 *                    type: object
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

/**
 * @openapi
 * /api/animaltypes/{id}:
 *   get:
 *     tags:
 *       - Animal Types
 *     summary: Obtener un tipo de animal por ID.
 *     description: Obtiene información sobre un tipo de animal específico utilizando su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del tipo de animal que se desea obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Información del tipo de animal obtenida con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: object
 *       400:
 *         description: Solicitud incorrecta. Puede ocurrir si falta el ID.
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
AnimalTypesRouter.get("/:id", getType)

/**
 * @openapi
 * /api/animaltypes:
 *   post:
 *     tags:
 *       - Animal Types
 *     summary: Crear un nuevo tipo de animal.
 *     description: Crea un nuevo tipo de animal con el nombre proporcionado en el cuerpo de la solicitud.
 *     requestBody:
 *       description: Datos para crear un nuevo tipo de animal.
 *       required: true
 *       content:
 *         application/json:
 *           example:  # Ejemplo del cuerpo de la solicitud
 *             {
 *               "name": "Loro"
 *             }
 *     responses:
 *       201:
 *         description: Tipo de animal creado con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: object
 *       400:
 *         description: Solicitud incorrecta. Puede ocurrir si el tipo ya existe.
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
AnimalTypesRouter.post("/", createType)

/**
 * @openapi
 * /api/animaltypes/{id}:
 *   put:
 *     tags:
 *       - Animal Types
 *     summary: Actualizar un tipo de animal por ID.
 *     description: Actualiza la información de un tipo de animal específico utilizando su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del tipo de animal que se desea actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Datos para actualizar el tipo de animal.
 *       required: true
 *       content:
 *         application/json:
 *           example:  # Ejemplo del cuerpo de la solicitud
 *             {
 *               "name": "Gato"
 *             }
 *           schema:
 *             $ref: '#/components/schemas/AnimalType'  # Define el esquema del tipo de animal aquí
 *     responses:
 *       200:
 *         description: Tipo de animal actualizado con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   $ref: '#/components/schemas/AnimalType'  # Define el esquema del tipo de animal aquí
 *       400:
 *         description: Solicitud incorrecta. Puede ocurrir si falta el ID o los datos de actualización son incorrectos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Tipo de animal no encontrado.
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
AnimalTypesRouter.put("/:id", updateType)

/**
 * @openapi
 * /api/animaltypes/{id}:
 *   delete:
 *     tags:
 *       - Animal Types
 *     summary: Eliminar un tipo de animal por ID.
 *     description: Elimina un tipo de animal específico utilizando su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del tipo de animal que se desea eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tipo de animal eliminado con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: string
 *       400:
 *         description: Solicitud incorrecta. Puede ocurrir si falta el ID.
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
AnimalTypesRouter.delete("/:id", deleteType)