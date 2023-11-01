import {Service} from "../models/Service.js"
import { getImage } from "../services/ImageService.js";

export const getServices = async ( req, res ) =>{
    try {
        const getServices = await Service.findAll();

        for(const service of getServices){
            if(service.route){
                const image = await getImage(service.route)
                service.setDataValue("image", image)
            }
        }
        return res.status( 200 ).json({ result: getServices }); 
    } catch ( error ) {
        return res.status( 500 ).json({ message: error.message }); 
    }
}


export const getService = async (req, res) => {
    try {
        const { id } = req.params;

        if(!id){
            return res.status( 400 ).json({ message: "El id es obligatorio" }); 
        }
        
        const getService = await Service.findByPk( id );

        if(getService.route){
            const image = await getImage( getService.route )
        
            getService.setDataValue("image", image)
        }
        
        return res.status( 200 ).json({ result: getService }); 
    } catch (error) {
        return res.status( 500 ).json({ message: error.message });
    }
}

export const createService = async (req, res) => {
    try {
        const { name, description, route } =  req.body

        if(!name || !description){
            return res.status( 400 ).json({ message: "El cuerpo de la solicitud está incompleto. Debes proporcionar todos los parámetros requeridos" });
        }

        const serviceExist = await Service.findOne( {where: {name}} )

        if(serviceExist){
            return res.status( 400 ).json({ message: 'El servicio ya existe' });
        }
        
        const createdService = await Service.create({name, description, route})

        return res.status( 201 ).json({ result: createdService });
    } catch (error) {
        return res.status( 500 ).json({ message: error.message });
    }
}


export const updateService = async(req, res) => {
    try {
        const { id } = req.params

        if(!id){
            return res.status( 400 ).json({ message: "El id es obligatorio" }); 
        }
        

        const serviceToUpdate = await Service.findByPk( id );
        if(!serviceToUpdate){
            throw new BusinessError({message:'El servicio no existe', code: 404});
        }

        serviceToUpdate.set( req.body );
        serviceToUpdate.save();

        return res.status( 200 ).json({ result: serviceToUpdate });
    } catch (error) {
        return res.status( 500 ).json({ message: error.message });
    }

}

export const deleteService = async(req, res) => {
    try{
        const { id } = req.params;

        if(!id){
            return res.status( 400 ).json({ message: "El id es obligatorio" }); 
        }
        
        await Service.destroy({
            where: {
                id
            }
        });

        return res.status( 200 ).json({ result: `Servicio ${id} eliminado correctamente` })
    }catch(error){
        return res.status( 500 ).json({ message: error.message });
    }
}
