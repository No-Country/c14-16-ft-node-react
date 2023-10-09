import express from "express";
import { getPets, getOnePets, createPets, updatePets, deletePets} from '../controllers/PetsController.js';
export const PetsRouter = express.Router(); 

//Rutas de mi path usuarios
PetsRouter.get('/', getPets);
PetsRouter.get('/:id', getOnePets);
PetsRouter.post('/', createPets);
PetsRouter.put('/:id', updatePets);
PetsRouter.delete('/:id', deletePets);