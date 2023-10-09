import express from "express";
import { createCompany, deleteCompany, getCompany, getOneCompany, updateCompany } from '../controllers/CompanyController.js';
export const CompanyRouter = express.Router(); 

//Rutas de mi path usuarios
CompanyRouter.get('/', getCompany);
CompanyRouter.get('/:id', getOneCompany);
CompanyRouter.post('/', createCompany);
CompanyRouter.put('/:id', updateCompany);
CompanyRouter.delete('/:id', deleteCompany);