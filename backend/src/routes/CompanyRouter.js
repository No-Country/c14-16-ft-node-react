import express from "express";
import { createCompany, deleteCompany, getCompany, getOneCompany, updateCompany } from '../controllers/CompanyController.js';
import { checkSession } from "../middlewares/session.js";

export const CompanyRouter = express.Router(); 

//Rutas de mi path usuarios
CompanyRouter.use(checkSession)

/**
 * @openapi
 * /api/companies:
 *   get:
 *     tags:
 *       - Company
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
CompanyRouter.get('/:id', getOneCompany);
CompanyRouter.post('/', createCompany);
CompanyRouter.put('/:id', updateCompany);
CompanyRouter.delete('/:id', deleteCompany);