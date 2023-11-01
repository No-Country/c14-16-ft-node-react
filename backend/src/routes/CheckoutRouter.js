import express from "express"
import { createOrder} from "../controllers/CheckoutController.js"
import { checkSession } from "../middlewares/session.js"
export const CheckoutRouter = express.Router()

CheckoutRouter.use(checkSession)


/**
 * @openapi
 * /api/checkout/create-order:
 *   post:
 *     tags:
 *       - Bookings
 *     summary: Crear una orden de pago.
 *     description: Crea una orden de pago para un servicio y permite al usuario completar el pago en MercadoPago.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *                 description: Descripción del servicio.
 *               from_date:
 *                 type: string
 *                 format: date
 *                 description: Fecha de inicio del servicio.
 *               to_date:
 *                 type: string
 *                 format: date
 *                 description: Fecha de finalización del servicio.
 *               price:
 *                 type: number
 *                 description: Precio del servicio.
 *               transport:
 *                 type: boolean
 *                 description: Indica si se incluye transporte.
 *               comments:
 *                 type: string
 *                 description: Comentarios adicionales.
 *               pet_id:
 *                 type: integer
 *                 description: ID de la mascota para la que se reserva el servicio.
 *               branch_id:
 *                 type: integer
 *                 description: ID de la sucursal donde se reserva el servicio.
 *     responses:
 *       200:
 *         description: Orden de pago creada con éxito. Se proporciona un enlace para completar el pago en MercadoPago.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       description: ID de la orden de pago en MercadoPago.
 *                     sandbox_init_point:
 *                       type: string
 *                       description: Enlace de MercadoPago para completar el pago en el entorno de prueba (sandbox).
 *                     init_point:
 *                       type: string
 *                       description: Enlace de MercadoPago para completar el pago en el entorno de producción.
 *       400:
 *         description: Solicitud incorrecta. Falta el parámetro requerido o la solicitud no cumple con los requisitos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Error del servidor al crear la orden de pago o la reserva.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
*/
CheckoutRouter.post('/create-order' , createOrder)