import express from "express"
import { getBranches, getBranch, getBranchesByCompany, createBranch, updateBranch,deleteBranch } from "../controllers/BranchController.js"
export const BranchRouter = express.Router()

/**
 * @openapi
 * /api/branches:
 *   get:
 *     tags:
 *       - Branches
 *     summary: Obtener todas las sucursales.
 *     description: Obtiene una lista de todas las sucursales disponibles, incluyendo información sobre tarifas, servicios y tipos de animales.
 *     responses:
 *       200:
 *         description: Lista de sucursales obtenida con éxito.
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
BranchRouter.get("/", getBranches)

/**
 * @openapi
 * /api/branches/{id}:
 *   get:
 *     tags:
 *       - Branches
 *     summary: Obtener una sucursal por ID.
 *     description: Obtiene información sobre una sucursal específica utilizando su ID, incluyendo detalles sobre tarifas, servicios, tipos de animales y imágenes asociadas.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la sucursal que se desea obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Información de la sucursal obtenida con éxito.
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
 *         description: Sucursal no encontrada.
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
BranchRouter.get("/:id" , getBranch)

/**
 * @openapi
 * /api/branches/byCompany/{id}:
 *   get:
 *     tags:
 *       - Branches
 *     summary: Obtener sucursales por ID de empresa.
 *     description: Obtiene una lista de sucursales de una empresa específica utilizando el ID de la empresa, incluyendo detalles sobre tarifas, servicios, tipos de animales y más.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la empresa para la cual se desean obtener las sucursales.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de sucursales de la empresa obtenida con éxito.
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
 *         description: Empresa no encontrada.
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
BranchRouter.get("/byCompany/:id",getBranchesByCompany)

/**
 * @openapi
 * /api/branches:
 *   post:
 *     tags:
 *       - Branches
 *     summary: Crear una nueva sucursal.
 *     description: Crea una nueva sucursal con la información proporcionada, incluyendo detalles sobre tarifas, servicios, tipos de animales y más.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               city:
 *                 type: string
 *               capacity:
 *                 type: integer
 *               amount:
 *                 type: integer
 *               phone:
 *                 type: string
 *               address:
 *                 type: string
 *               company_id:
 *                 type: integer
 *               rates:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     weightFrom:
 *                       type: number
 *                     weightTo:
 *                       type: number
 *                     price:
 *                       type: number
 *               services:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     name:
 *                       type: string
 *                     description:
 *                       type: string
 *               animalTypes:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     name:
 *                       type: string
 *               images:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     data:
 *                       type: string
 *     responses:
 *       201:
 *         description: Sucursal creada con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       400:
 *         description: Solicitud incorrecta. Puede ocurrir si falta alguno de los parámetros requeridos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Empresa no encontrada.
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
BranchRouter.post("/", createBranch)

/**
 * @openapi
 * /api/branches/{id}:
 *   put:
 *     tags:
 *       - Branches
 *     summary: Actualizar una sucursal por ID.
 *     description: Actualiza una sucursal existente utilizando su ID y la información proporcionada, incluyendo detalles sobre tarifas, servicios, tipos de animales y más.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la sucursal que se desea actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               capacity:
 *                 type: integer
 *               amount:
 *                 type: integer
 *               address:
 *                 type: string
 *               services:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     name:
 *                       type: string
 *                     description:
 *                       type: string
 *               rates:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     weightFrom:
 *                       type: number
 *                     weightTo:
 *                       type: number
 *                     price:
 *                       type: number
 *               animalTypes:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     name:
 *                       type: string
 *               images:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     data:
 *                       type: string
 *     responses:
 *       200:
 *         description: Sucursal actualizada con éxito.
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
 *         description: Sucursal no encontrada.
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
BranchRouter.put("/:id", updateBranch)

/**
 * @openapi
 * /api/branches/{id}:
 *   delete:
 *     tags:
 *       - Branches
 *     summary: Elimina una sucursal por ID.
 *     description: Elimina una sucursal utilizando su ID. Esto también eliminará todas las imágenes asociadas a la sucursal.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la sucursal que se desea eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sucursal eliminada con éxito.
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
 *         description: Sucursal no encontrada.
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
BranchRouter.delete("/:id", deleteBranch)