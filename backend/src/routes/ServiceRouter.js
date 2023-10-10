import express from "express"
import { getServices, getService, createService, updateService, deleteService } from "../controllers/ServiceController";
const ServiceRouter = express.Router()


ServiceRouter.get('/', getServices);
ServiceRouter.get('/:id', getService);
ServiceRouter.post("/", createService)
ServiceRouter.put("/:id", updateService)
ServiceRouter.delete("/:id", deleteService)