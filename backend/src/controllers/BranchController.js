import { Branch } from "../models/Branch.js"
import { Company } from "../models/Company.js";
import { createImages } from "./ImageController.js";


export const getBranches = async ( req, res ) => {
    try {
        const branches = await Branch.findAll();
        return res.status( 200 ).json({ result: branches }); 
    } catch ( error ) {
        return res.status( 500 ).json({ message: error }); 
    }
}

export const getBranch = async (req, res ) => {
    try {
        const { id } = req.params;
        if(!id){
            return res.status( 400 ).json({ message: "El id es obligatorio" }); 
        }
        const getBranch = await Branch.findByPk( id );

        if(!getBranch){
            return res.status( 404 ).json({ message: "La sucursal no existe" }); 
        }

        return res.status( 200 ).json({ result: getBranch }); 
    } catch (error) {
        return res.status( 500 ).json({ message: error }); 
    }
}

export const getBranchesByCompany = async(req, res) => {
    try {
        const { id } = req.params

        if(!id){
            return res.status( 400 ).json({ message: "El id es obligatorio" }); 
        }

        const branchesByCompany = await Branch.findAll({where: id});

        return res.status( 200 ).json({ result: branchesByCompany }); 
    } catch ( error ) {
        return res.status( 500 ).json({ message: error }); 
    }
}

export const createBranch = async(req, res) => {
    try {
        const { name, description, city, capacity, amount, phone, address, rate, company_id, images } = req.body


        if(!name || !description || !city || !capacity || !phone || !address || !rate || !company_id){
            return res.status( 400 ).json({ message: "El cuerpo de la solicitud está incompleto. Debes proporcionar todos los parámetros requeridos" }); 
        }

        const company = await Company.findByPk( company_id );

        const branchExist = await Branch.findOne({ where: { name, address, company_id } });

        if (!company) {
            return res.status(404).json({ message: 'Empresa no encontrada' });
          }

        if(branchExist) {
            return res.status( 400 ).json({ message: "La sucursal ya existe"})
        }

        let createdBranch = await Branch.create({ name, description, city, capacity, amount, phone, address, rate, company_id: company.id });

        if (createdBranch) {
            if (images && Array.isArray(images)) {
                createdBranch = createImages(images, createdBranch)
            }
        }
        return res.status( 201 ).json({ result: createdBranch });
    } catch (error) {
        return res.status( 500 ).json({ message: error }); 
    }
}

export const updateBranch = async ( req, res ) =>{
    try {
        const { id } = req.params;

        if(!id){
            return res.status( 400 ).json({ message: "El id es obligatorio" }); 
        }

        const branchToUpdate = await Branch.findByPk( id );

        if(!branchToUpdate){
            return res.status( 404 ).json({ message: 'La sucursal no existe' });
        }

        branchToUpdate.set( req.body );
        branchToUpdate.save();
        return res.status( 200 ).json({ result: branchToUpdate });
    } catch ( error ) {
        return res.status( 500 ).json({ message: error });
    }
}

export const deleteBranch = async ( req, res ) =>{
    try {
        const { id } = req.params;

        if(!id){
            return res.status( 400 ).json({ message: "El id es obligatorio" }); 
        }

        await Branch.destroy({
            where: {
                id
            }
        });
        
        return res.status( 200 ).json({ result: `Sucursal ${id} eliminada correctamente` })
    } catch ( error ) {
        return res.status( 500 ).json({ message: error });
    }
}