import express from "express"
import {getBookings, getBooking, createBooking, updateBooking, deleteBooking} from "../controllers/BookingController.js"
import { checkSession } from "../middlewares/session.js"

export const BookingRouter = express.Router()

BookingRouter.use(checkSession)

BookingRouter.get("/", getBookings)
BookingRouter.get("/:id", getBooking)
BookingRouter.post("/", createBooking)
BookingRouter.put("/:id", updateBooking)
BookingRouter.delete("/:id", deleteBooking)