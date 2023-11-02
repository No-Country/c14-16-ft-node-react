import express from "express";
import { createCompany, deleteCompany, getCompany, getOneCompany, updateCompany } from '../controllers/CompanyController.js';
import { checkSession } from "../middlewares/session.js";

export const CompanyRouter = express.Router(); 

CompanyRouter.use(checkSession)

/**
 * @openapi
 * /api/companies:
 *   get:
 *     tags:
 *       - Companies
 *     summary: Obtiene todos las empresas.
 *     description: Obtiene una lista de todos las empresas disponibles.
 *     responses:
 *       200:
 *         description: Lista de empresas exitosamente obtenida.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: array
 *                   items:
 *                    type: string
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
CompanyRouter.get('/', getCompany);

/**
 * @openapi
 * /api/companies/{id}:
 *   get:
 *     tags:
 *       - Companies
 *     summary: Obtener una compañía por ID.
 *     description: Obtiene información sobre una compañía específica utilizando su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la compañía que se desea obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Información de la compañía obtenida con éxito.
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
 *         description: Compañía no encontrada.
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
CompanyRouter.get('/:id', getOneCompany);

/**
 * @openapi
 * /api/companies:
 *   post:
 *     tags:
 *       - Companies
 *     summary: Crear una nueva compañía.
 *     description: Crea una nueva compañía con el nombre proporcionado en el cuerpo de la solicitud.
 *     requestBody:
 *       description: Datos para crear una nueva compañía.
 *       required: true
 *       content:
 *         application/json:
 *           example:  # Ejemplo del cuerpo de la solicitud
 *             {
 *               "name": "Doggy House"
 *             }
 *     responses:
 *       201:
 *         description: Compañía creada con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       400:
 *         description: Solicitud incorrecta. Puede ocurrir si el cuerpo de la solicitud está incompleto o contiene datos incorrectos.
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
CompanyRouter.post('/', createCompany);

/**
 * @openapi
 * /api/companies/{id}:
 *   put:
 *     tags:
 *       - Companies
 *     summary: Actualizar una compañía por ID.
 *     description: Actualiza la información de una compañía específica utilizando su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la compañía que se desea actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Datos para actualizar la compañía.
 *       required: true
 *       content:
 *         application/json:
 *           example:  # Ejemplo del cuerpo de la solicitud
 *             {
 *               "name": "Doggy's House"
 *             }
 *     responses:
 *       200:
 *         description: Compañía actualizada con éxito.
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
 *         description: Compañía no encontrada.
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
CompanyRouter.put('/:id', updateCompany);

/**
 * @openapi
 * /api/companies/{id}:
 *   delete:
 *     tags:
 *       - Companies
 *     summary: Eliminar una compañía por ID.
 *     description: Elimina una compañía específica utilizando su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la compañía que se desea eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Compañía eliminada con éxito.
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
CompanyRouter.delete('/:id', deleteCompany);