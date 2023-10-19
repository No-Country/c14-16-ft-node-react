import { Client } from '../models/Client.js';
import { getImage, deleteImage, updateImage } from '../services/ImageService.js';

export const getClient = async ( req, res ) =>{
    try {
        const getClient = await Client.findAll();
        return res.status( 200 ).json({ result: getClient }); 
    } catch ( error ) {
        return res.status( 500 ).json({ message: error.message }); 
    }
}

export const getOneClient = async ( req, res ) =>{
    try {
        const { id } = req.params;
        if(!id){
            return res.status( 400 ).json({ message: "El id es obligatorio" }); 
        }
        const getOneClient = await Client.findByPk( id );

        if(!getOneClient){
            return res.status( 404 ).json({ message: "El cliente no existe" }); 
        }

        if(getOneClient.profile_picture){
            const image = await getImage(getOneClient.profile_picture)
            getOneClient.setDataValue("profile_picture", image)
        }

        return res.status( 200 ).json({ result: getOneClient }); 
    } catch ( error ) {
        return res.status( 500 ).json({ message: error.message }); 
    }
}

export const updateClient = async (req, res) =>{
    try {
        const { id } = req.params;

        if(!id){
            return res.status( 400 ).json({ message: "El id es obligatorio" }); 
        }

        const clientToUpdate = await Client.findByPk( id );

        if(!clientToUpdate){
            return res.status( 404 ).json({ message: 'El cliente no existe' });
        }

        const updatedData = { ...req.body };

        if (updatedData.profile_picture) {
            const route = await updateImage(updatedData.profile_picture, clientToUpdate.profile_picture, clientToUpdate.name)
            updatedData.profile_picture = route
        }

        const updatedClient = await clientToUpdate.update(updatedData,{
            returning: true,
        });

        return res.status( 200 ).json({ result: updatedClient });
    } catch ( error ) {
        return res.status( 500 ).json({ message: error.message });
    }
}

export const deleteClient = async (req, res) =>{
    try {
        const { id } = req.params;

        if(!id){
            return res.status( 400 ).json({ message: "El id es obligatorio" }); 
        }
        
        const clientToDelete = await Client.findByPk( id );
        await Client.destroy({
            where: {
                id
            }
        });

        await deleteImage(clientToDelete.profile_picture)
        return res.status( 200 ).json({ result: `Usuario ${id} eliminado correctamente` })
    } catch ( error ) {
        return res.status( 500 ).json({ message: error.message });
    }
}