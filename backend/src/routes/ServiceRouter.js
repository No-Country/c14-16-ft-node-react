import express from "express"
import { getServices, getService, createService, updateService, deleteService } from "../controllers/ServiceController.js";
import { checkSession } from "../middlewares/session.js";
export const ServiceRouter = express.Router()

ServiceRouter.use(checkSession)
ServiceRouter.get('/', getServices);
ServiceRouter.get('/:id', getService);
ServiceRouter.post("/", createService)
ServiceRouter.put("/:id", updateService)
ServiceRouter.delete("/:id", deleteService)