import {Service} from "../models/Service.js"

export const getServices = async ( req, res ) =>{
    try {
        const getServices = await Service.findAll();
        return res.status( 200 ).json({ result: getServices }); 
    } catch ( error ) {
        return res.status( 500 ).json({ message: error }); 
    }
}


export const getService = async (req, res) => {
    try {
        const { id } = req.params;
        const getService = await Service.findByPk( id );
        return res.status( 200 ).json({ result: getService }); 
    } catch (error) {
        return res.status( 500 ).json({ message: error });
    }
}

export const createService = async (req, res) => {
    try {
        const { name, description } =  req.body

        const serviceExist = await Service.findOne( {where: {name}} )

        if(serviceExist){
            throw new BusinessError({message:'El servicio ya existe', code: 400});
        }
        
        const cretedService = await Service.create({name, description})

        return res.status( 201 ).json({ result: createService });
    } catch (error) {
        return res.status( 500 ).json({ message: error });
    }
}


export const updateService = async(req, res) => {
    try {
        const { id } = req.params
        const { name, description } = req.body

        const serviceToUpdate = await Service.findByPk( id );
        if(!serviceToUpdate){
            throw new BusinessError({message:'El servicio no existe', code: 404});
        }

        serviceToUpdate.set( {name, description} );
        serviceToUpdate.save();

        return res.status( 200 ).json({ result: serviceToUpdate });
    } catch (error) {
        return res.status( 500 ).json({ message: error });
    }

}

export const deleteService = async(req, res) => {
    try{
        const { id } = req.params;

        const deletedService = await Service.destroy({
            where: {
                id
            }
        });

        return res.status( 200 ).json({ result: deletedService })
    }catch(error){
        return res.status( 500 ).json({ message: error });
    }
}
