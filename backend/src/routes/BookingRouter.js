import express from "express"
import {getBookings, getBooking, createBooking, updateBooking, deleteBooking, calculatePrice} from "../controllers/BookingController.js"
import { checkSession } from "../middlewares/session.js"

export const BookingRouter = express.Router()

BookingRouter.use(checkSession)

/**
 * @openapi
 * /api/bookings:
 *   get:
 *     tags:
 *       - Bookings
 *     summary: Obtener todas las reservas.
 *     description: Obtiene una lista de todas las reservas disponibles.
 *     responses:
 *       200:
 *         description: Lista de reservas obtenida con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: array
 *                   items:
 *                    type: object
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
BookingRouter.get("/", getBookings)

/**
 * @openapi
 * /api/bookings/{id}:
 *   get:
 *     tags:
 *       - Bookings
 *     summary: Obtener una reserva por ID.
 *     description: Obtiene información sobre una reserva específica utilizando su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la reserva que se desea obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Información de la reserva obtenida con éxito.
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
BookingRouter.get("/:id", getBooking)

/**
 * @openapi
 * /api/bookings:
 *   post:
 *     tags:
 *       - Bookings
 *     summary: Crear una nueva reserva.
 *     description: Crea una nueva reserva con los datos proporcionados en el cuerpo de la solicitud.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:  # Ejemplo del cuerpo de la solicitud
 *             {
 *               "from_date": "2023-10-01",
 *               "to_date": "2023-10-10",
 *               "price": 200,
 *               "transport": false,
 *               "comments": "Tiene alergia a x remedio",
 *               "pet_id": 1,
 *               "branch_id": 2
 *             }
 *     responses:
 *       201:
 *         description: Reserva creada con éxito.
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
 *       404:
 *         description: Mascota o sucursal no encontrada.
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
BookingRouter.post("/", createBooking)

/**
 * @openapi
 * /api/bookings/{id}:
 *   put:
 *     tags:
 *       - Bookings
 *     summary: Actualizar una reserva por ID.
 *     description: Actualiza la información de una reserva específica utilizando su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la reserva que se desea actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       description: Datos para actualizar la reserva.
 *       required: true
 *       content:
 *         application/json:
 *           example:  # Ejemplo del cuerpo de la solicitud
 *             {
 *               "to_date": "2023-10-21",
 *               "price": 1500
 *             }
 *     responses:
 *       200:
 *         description: Reserva actualizada con éxito.
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
 *         description: Reserva no encontrada.
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
BookingRouter.put("/:id", updateBooking)

/**
 * @openapi
 * /api/bookings/{id}:
 *   delete:
 *     tags:
 *       - Bookings
 *     summary: Eliminar una reserva por ID.
 *     description: Elimina una reserva específica utilizando su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la reserva que se desea eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Reserva eliminada con éxito.
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
BookingRouter.delete("/:id", deleteBooking)


/**
 * @openapi
 * /api/bookings/calculatePrice:
 *   post:
 *     tags:
 *       - Bookings
 *     summary: Calcular el precio de una reserva.
 *     description: Calcula el precio de una reserva en función de la sucursal, la mascota, los días y la opción de transporte.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               branch_id:
 *                 type: integer
 *                 description: ID de la sucursal.
 *               pet_id:
 *                 type: integer
 *                 description: ID de la mascota.
 *               days:
 *                 type: integer
 *                 description: Número de días de la reserva.
 *               transport:
 *                 type: boolean
 *                 description: Opción de transporte (true o false).
 *               address:
 *                 type: string
 *                 description: Dirección para el transporte (obligatorio si el transporte está habilitado).
 *     responses:
 *       200:
 *         description: Precio calculado con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 price:
 *                   type: number
 *       400:
 *         description: Solicitud incorrecta. Falta uno o más parámetros requeridos o la solicitud no cumple con los requisitos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Sucursal o mascota no encontrada. La sucursal o la mascota con el ID proporcionado no existe.
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
BookingRouter.post("/calculatePrice" , calculatePrice)