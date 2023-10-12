import express from "express";
import { getPets, getOnePets, createPets, updatePets, deletePets} from '../controllers/PetsController.js';
import { checkSession } from "../middlewares/session.js";
export const PetRouter = express.Router(); 

PetRouter.use(checkSession)
PetRouter.get('/', getPets);
PetRouter.get('/:id', getOnePets);
PetRouter.post('/', createPets);
PetRouter.put('/:id', updatePets);
PetRouter.delete('/:id', deletePets);