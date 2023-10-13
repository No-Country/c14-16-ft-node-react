import { Client } from '../models/Client.js';

export const getClient = async ( req, res ) =>{
    try {
        const getClient = await Client.findAll();
        return res.status( 200 ).json({ result: getClient }); 
    } catch ( error ) {
        return res.status( 500 ).json({ message: error }); 
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

        return res.status( 200 ).json({ result: getOneClient }); 
    } catch ( error ) {
        return res.status( 500 ).json({ message: error }); 
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

        clientToUpdate.set( req.body );
        clientToUpdate.save();
        return res.status( 200 ).json({ result: clientToUpdate });
    } catch ( error ) {
        return res.status( 500 ).json({ message: error });
    }
}

export const deleteClient = async (req, res) =>{
    try {
        const { id } = req.params;

        if(!id){
            return res.status( 400 ).json({ message: "El id es obligatorio" }); 
        }
        
        const deleteClient = await Client.destroy({
            where: {
                id
            }
        });
        return res.status( 200 ).json({ result: deleteClient })
    } catch ( error ) {
        return res.status( 500 ).json({ message: error });
    }
}