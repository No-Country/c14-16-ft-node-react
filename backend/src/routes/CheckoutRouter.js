import express from "express"
import { createPreferences, statusPayment } from "../controllers/CheckoutController.js"

export const CheckoutRouter = express.Router()

CheckoutRouter.post('/', createPreferences)

CheckoutRouter.get('/feedback', statusPayment) 