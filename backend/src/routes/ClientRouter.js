import express from "express";
import { getClient, getOneClient, updateClient, deleteClient } from '../controllers/ClientController.js';
import { checkSession } from "../middlewares/session.js";
export const ClientRouter = express.Router(); 

ClientRouter.use(checkSession)

/**
 * @openapi
 * /api/clients:
 *   get:
 *     tags:
 *       - Users
 *     summary: Obtener todos los clientes.
 *     description: Obtiene una lista de todos los clientes disponibles.
 *     responses:
 *       200:
 *         description: Lista de clientes obtenida con éxito.
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
ClientRouter.get('/', getClient);

/**
 * @openapi
 * /api/clients/{id}:
 *   get:
 *     tags:
 *       - Users
 *     summary: Obtener un cliente por ID.
 *     description: Obtiene información sobre un cliente específico utilizando su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del cliente que se desea obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Información del cliente obtenida con éxito.
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
 *       404:
 *         description: Cliente no encontrado.
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
ClientRouter.get('/:id', getOneClient);

/**
 * @openapi
 * /api/clients/{id}:
 *   put:
 *     tags:
 *       - Users
 *     summary: Actualizar un cliente por ID.
 *     description: Actualiza la información de un cliente específico utilizando su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del cliente que se desea actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Datos para actualizar el cliente.
 *       required: true
 *       content:
 *         application/json:
 *           example:  # Ejemplo del cuerpo de la solicitud
 *             {
 *               "name": "Adrian de los Reyes"
 *             }
 *     responses:
 *       200:
 *         description: Cliente actualizado con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
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
 *         description: Cliente no encontrado.
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
ClientRouter.put('/:id', updateClient);

/**
 * @openapi
 * /api/clients/{id}:
 *   delete:
 *     tags:
 *       - Users
 *     summary: Eliminar un cliente por ID.
 *     description: Elimina un cliente específico utilizando su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del cliente que se desea eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cliente eliminado con éxito.
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
ClientRouter.delete('/:id', deleteClient);