import express from "express";
import { getTypes, getType, createType,updateType ,deleteType } from "../controllers/AnimalTypeController.js";
import { checkSession } from "../middlewares/session.js";
export const AnimalTypesRouter = express.Router()

AnimalTypesRouter.use(checkSession)
AnimalTypesRouter.get("/", getTypes)
AnimalTypesRouter.get("/:id", getType)
AnimalTypesRouter.post("/", createType)
AnimalTypesRouter.put("/:id", updateType)
AnimalTypesRouter.delete("/:id", deleteType)