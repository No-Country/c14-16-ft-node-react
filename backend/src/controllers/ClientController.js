import { Client } from '../models/Client.js';
import bcrypt from 'bcrypt';

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
        const getOneClient = await Client.findByPk( id );
        return res.status( 200 ).json({ result: getOneClient }); 
    } catch ( error ) {
        return res.status( 500 ).json({ message: error }); 
    }
}
export const createClient = async (req, res) =>{
    try {
        const { name, phone, address, email, pass, profile_picture } = req.body;
        
        const passHashed = await bcrypt.hash(pass, 10);

        const clientExist = await Client.findOne({ where: { email } });
        if(clientExist) return res.status( 400 ).json({ message: 'El usuario ya existe' });

        const createClient = await Client.create({ name, phone, address, email, pass: passHashed, profile_picture });
        return res.status( 200 ).json({ result: createClient });
    } catch ( error ) {
        return res.status( 500 ).json({ message: error.message });
    }
}
export const updateClient = async (req, res) =>{
    try {
        const { id } = req.params;
        const updateClient = await Client.findByPk( id );
        updateClient.set( req.body );
        updateClient.save();
        return res.status( 200 ).json({ result: updateClient });
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