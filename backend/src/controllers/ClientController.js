import { Client } from '../models/Client.js';
import BusinessError from '../middlewares/BusinessError.js';


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
            throw new BusinessError({message:'El id es obligatorio', code: 400});
        }
        const getOneClient = await Client.findByPk( id );
        if(!getOneClient){
            throw new BusinessError({message:'El cliente no existe', code: 404});
        }
        return res.status( 200 ).json({ result: getOneClient }); 
    } catch ( error ) {
        return res.status( 500 ).json({ message: error }); 
    }
}

export const createClient = async (req, res) =>{
    try {
        const { name, phone, address, email, pass, profile_picture } = req.body;

        const clientExist = await Client.findOne({ where: { email } });

        if(clientExist) {
            console.log("entro")
            throw new BusinessError({message:'El cliente ya existe', code: 400});
        }
        
        const createdClient = await Client.create({ name, phone, address, email, pass, profile_picture });

        return res.status( 201 ).json({ result: createdClient });
    } catch ( error ) {
        return res.status( 500 ).json({ message: error.message });
    }
}

export const updateClient = async (req, res) =>{
    try {
        const { id } = req.params;
        const clientToUpdate = await Client.findByPk( id );

        if(!clientToUpdate){
            throw new BusinessError({message:'El cliente no existe', code: 404});
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