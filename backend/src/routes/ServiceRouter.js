import express from "express"
import { getServices, getService, createService, updateService, deleteService } from "../controllers/ServiceController.js";
export const ServiceRouter = express.Router()


/**
 * @openapi
 * /api/services:
 *   get:
 *     tags:
 *       - Services
 *     summary: Obtener todos los servicios.
 *     description: Obtiene una lista de todos los servicios disponibles.
 *     responses:
 *       200:
 *         description: Lista de servicios recuperada con éxito.
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
ServiceRouter.get('/', getServices);

/**
 * @openapi
 * /api/services/{id}:
 *   get:
 *     tags:
 *       - Services
 *     summary: Obtener un servicio por ID.
 *     description: Obtiene un servicio específico utilizando su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del servicio a obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detalles del servicio recuperados con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       400:
 *         description: Solicitud incorrecta. Faltan parámetros requeridos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Servicio no encontrado.
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
ServiceRouter.get('/:id', getService);

/**
 * @openapi
 * /api/services:
 *   post:
 *     tags:
 *       - Services
 *     summary: Crear un nuevo servicio.
 *     description: Crea un nuevo servicio con el nombre y la descripción proporcionados.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del servicio a crear.
 *               description:
 *                 type: string
 *                 description: Descripción del servicio.
 *     responses:
 *       201:
 *         description: Servicio creado con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       400:
 *         description: Solicitud incorrecta. Faltan parámetros requeridos o el servicio ya existe.
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
ServiceRouter.post("/", createService)

/**
 * @openapi
 * /api/services/{id}:
 *   put:
 *     tags:
 *       - Services
 *     summary: Actualizar un servicio existente.
 *     description: Actualiza un servicio existente identificado por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del servicio a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *                 description: Nueva descripción del servicio.
 *     responses:
 *       200:
 *         description: Servicio actualizado con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       400:
 *         description: Solicitud incorrecta. Falta el ID o la solicitud no cumple con los requisitos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Servicio no encontrado. El servicio con el ID proporcionado no existe.
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
ServiceRouter.put("/:id", updateService)

/**
 * @openapi
 * /api/services/{id}:
 *   delete:
 *     tags:
 *       - Services
 *     summary: Eliminar un servicio existente.
 *     description: Elimina un servicio existente identificado por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del servicio a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Servicio eliminado con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       400:
 *         description: Solicitud incorrecta. Falta el ID o la solicitud no cumple con los requisitos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Servicio no encontrado. El servicio con el ID proporcionado no existe.
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
ServiceRouter.delete("/:id", deleteService)