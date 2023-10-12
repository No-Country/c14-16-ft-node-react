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
        const getOneCompany = await Company.findByPk( id );
        return res.status( 200 ).json({ result: getOneCompany }); 
    } catch ( error ) {
        return res.status( 500 ).json({ message: error }); 
    }
}
export const createCompany = async (req ,res) =>{
    try {
        const { name } = req.body;

        const companyExist = await Company.findOne({ where: { name } });
        if(companyExist) return res.status( 400 ).json({ message: 'La compañia ya existe' });

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