import express from "express";
import { getPets, getOnePets, createPets, updatePets, deletePets} from '../controllers/PetsController.js';
import { checkSession } from "../middlewares/session.js";
export const PetRouter = express.Router(); 

PetRouter.use(checkSession)

/**
 * @openapi
 * /api/pets:
 *   get:
 *     tags:
 *       - Pets
 *     summary: Obtiene una lista de mascotas.
 *     description: Obtiene una lista de todas las mascotas registradas.
 *     responses:
 *       200:
 *         description: Lista de mascotas obtenida con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
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
PetRouter.get('/', getPets);

/**
 * @openapi
 * /api/pets/{id}:
 *   get:
 *     tags:
 *       - Pets
 *     summary: Obtiene una mascota por su ID.
 *     description: Obtiene información detallada de una mascota utilizando su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la mascota que se desea obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Información de la mascota obtenida con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
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
PetRouter.get('/:id', getOnePets);

/**
 * @openapi
 * /api/pets:
 *   post:
 *     tags:
 *       - Pets
 *     summary: Crea una nueva mascota.
 *     description: Crea una nueva mascota y la asocia a un cliente y tipo de animal.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               breed:
 *                 type: string
 *               weight:
 *                 type: number
 *               client_id:
 *                 type: integer
 *               type_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Mascota creada con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       400:
 *         description: Solicitud incorrecta. Puede ocurrir si faltan parámetros requeridos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Cliente o tipo de animal no encontrados.
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
PetRouter.post('/', createPets);

/**
 * @openapi
 * /api/pets/{id}:
 *   put:
 *     tags:
 *       - Pets
 *     summary: Actualiza la información de una mascota.
 *     description: Actualiza la información de una mascota existente.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la mascota que se actualizará.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               weight:
 *                 type: number
 *     responses:
 *       200:
 *         description: Mascota actualizada con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       400:
 *         description: Solicitud incorrecta. Puede ocurrir si faltan parámetros requeridos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: La mascota no fue encontrada.
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
PetRouter.put('/:id', updatePets);

/**
 * @openapi
 * /api/pets/{id}:
 *   delete:
 *     tags:
 *       - Pets
 *     summary: Elimina una mascota.
 *     description: Elimina una mascota por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la mascota que se eliminará.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Mascota eliminada con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       400:
 *         description: Solicitud incorrecta. Puede ocurrir si falta el parámetro ID.
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
PetRouter.delete('/:id', deletePets);