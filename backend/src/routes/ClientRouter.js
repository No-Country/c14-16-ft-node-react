import express from "express";
import { getClient, getOneClient, updateClient, deleteClient } from '../controllers/ClientController.js';
import { checkSession } from "../middlewares/session.js";
export const ClientRouter = express.Router(); 

//Rutas de mi path clientes
ClientRouter.use(checkSession)
ClientRouter.get('/', getClient);
ClientRouter.get('/:id', getOneClient);
ClientRouter.put('/:id', updateClient);
ClientRouter.delete('/:id', deleteClient);