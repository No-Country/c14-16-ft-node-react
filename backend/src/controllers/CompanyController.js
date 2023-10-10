import { Company } from '../models/Company.js';
import BusinessError from '../middlewares/BusinessError.js';

export const getCompany = async (req ,res) =>{
    try {
        const getCompany = await Company.findAll();
        return res.status( 200 ).json({ result: getCompany }); 
    } catch ( error ) {
         next();
    }
}
export const getOneCompany = async (req ,res) =>{
    try {
        const { id } = req.params;
        if( !id ) {
            throw new BusinessError({message:'El id es obligatorio', code: 400});
        }
        const getOneCompany = await Company.findByPk( id );

        if( !getOneCompany ) {
            throw new BusinessError({message:'La compañia no existe', code: 404});
        }
        return res.status( 200 ).json({ result: getOneCompany }); 
    } catch ( error ) {
        return res.status( 500 ).json({ message: error });
    }
}
export const createCompany = async (req ,res) =>{
    try {
        const { name } = req.body;

        const companyExist = await Company.findOne({ where: { name } });
        if(companyExist) {
            throw new BusinessError({message:'La compañia ya existe', code: 400});
        }

        const createCompany = await Company.create({ name });
        return res.status( 200 ).json({ result: createCompany });
    } catch ( error ) {
        return res.status( 500 ).json({ message: error.message });
    }
}
export const updateCompany = async (req ,res) =>{
    try {
        const { id } = req.params;
        const updateCompany = await Company.findByPk( id );
        updateCompany.set( req.body );
        updateCompany.save();
        return res.status( 200 ).json({ result: updateCompany });
    } catch ( error ) {
        return res.status( 500 ).json({ message: error });
    }
}
export const deleteCompany = async (req ,res) =>{
    try {
        const { id } = req.params;
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