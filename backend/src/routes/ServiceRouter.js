import express from "express"
import { getServices, getService } from "../controllers/ServiceController";
const ServiceRouter = express.Router()


ServiceRouter.get('/', getServices);
ServiceRouter.get('/:id', getService);