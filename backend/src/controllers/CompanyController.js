import { Company } from '../models/Company.js';

export const getCompany = async (req ,res) =>{
    try {
        const getCompany = await Company.findAll();
        return res.status( 200 ).json({ result: getCompany }); 
    } catch ( error ) {
        return res.status( 500 ).json({ message: error });
    }
}
export const getOneCompany = async (req ,res) =>{
    try {
        const { id } = req.params;
        if( !id ) {
            return res.status( 400 ).json({ message: 'El id es obligatorio' });
        }
        const getOneCompany = await Company.findByPk( id );

        if( !getOneCompany ) {
            return res.status( 404 ).json({ message: 'La compañia no existe' });
        }
        return res.status( 200 ).json({ result: getOneCompany }); 
    } catch ( error ) {
        return res.status( 500 ).json({ message: error });
    }
}
export const createCompany = async (req ,res) =>{
    try {
        const { name } = req.body;

        if(!name){
            return res.status( 400 ).json({ message: "El cuerpo de la solicitud está incompleto. Debes proporcionar todos los parámetros requeridos" }); 
        }

        const companyExist = await Company.findOne({ where: { name } });
        if(companyExist) {
            return res.status( 400 ).json({ message: 'La compañia ya existe' });
        }

        const createdCompany = await Company.create({ name });
        return res.status( 200 ).json({ result: createdCompany });
    } catch ( error ) {
        return res.status( 500 ).json({ message: error });
    }
}
export const updateCompany = async (req ,res) =>{
    try {
        const { id } = req.params;
        
        if(!id){
            return res.status( 400 ).json({ message: 'El id es obligatorio' });
        }

        const companyToUpdate = await Company.findByPk( id );

        if(!companyToUpdate){
            return res.status( 404 ).json({ message: 'La empresa no existe' });
        }

        companyToUpdate.set( req.body );

        companyToUpdate.save();
        return res.status( 200 ).json({ result: companyToUpdate });
    } catch ( error ) {
        return res.status( 500 ).json({ message: error });
    }
}
export const deleteCompany = async (req ,res) =>{
    try {
        const { id } = req.params;

        if(!id){
            return res.status( 400 ).json({ message: 'El id es obligatorio' });
        }

        const deleteCompany = await Company.destroy({
            where: {
                id
            }
        });
        
        return res.status( 200 ).json({ result: deleteCompany })
    } catch ( error ) {
        return res.status( 500 ).json({ message: error });
    }
}