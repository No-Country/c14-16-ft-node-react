import { AnimalTypes } from "../models/AnimalTypes.js"


export const getTypes = async ( req, res ) =>{
    try {
        const getTypes = await AnimalTypes.findAll();
        return res.status( 200 ).json({ result: getTypes }); 
    } catch ( error ) {
        return res.status( 500 ).json({ message: error.message }); 
    }
}

export const getType = async ( req, res ) =>{
    try {
        const { id } = req.params;

        if(!id){
            return res.status( 400 ).json({ message: "El id es obligatorio" }); 
        }
        
        const getType = await Type.findByPk( id );

        return res.status( 200 ).json({ result: getType }); 
    } catch (error) {
        return res.status( 500 ).json({ message: error.message });
    }
}
export const createType = async ( req, res ) =>{
    try {
        const { name } =  req.body

        const typeExist = await AnimalTypes.findOne( { where: { name } } );

        if (typeExist) {
            return res.status(404).json({ message: 'El tipo ya existe' });
        }
        
        const createdType = await AnimalTypes.create({name})

        return res.status( 201 ).json({ result: createdType });
    } catch (error) {
        return res.status( 500 ).json({ message: error.message });
    }
}
export const updateType = async ( req, res ) =>{
    try {
        const { id } = req.params;

        if(!id){
            return res.status( 400 ).json({ message: "El id es obligatorio" }); 
        }

        const typeToUpdate = await AnimalTypes.findByPk( id );

        if(!typeToUpdate){
            return res.status( 404 ).json({ message: 'El tipo no existe' });
        }

        typeToUpdate.set( req.body );
        typeToUpdate.save();
        return res.status( 200 ).json({ result: typeToUpdate });
    } catch ( error ) {
        return res.status( 500 ).json({ message: error.message });
    }
}
export const deleteType = async ( req, res ) =>{
    try {
        const { id } = req.params;

        if(!id){
            return res.status( 400 ).json({ message: "El id es obligatorio" }); 
        }
        
        const deleteType = await AnimalTypes.destroy({
            where: {
                id
            }
        });
        return res.status( 200 ).json({ result: deleteType })
    } catch ( error ) {
        return res.status( 500 ).json({ message: error.message });
    }
}