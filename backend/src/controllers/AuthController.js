import { compare } from "bcrypt";
import { Client } from "../models/Client.js";
import jwt from "jsonwebtoken"
import dotenv from 'dotenv';

dotenv.config();

export const login = async(req, res) => {
    const {email, pass} = req.body
    if(!email || !pass){
        return res.status( 400 ).json({ message: "El cuerpo de la solicitud está incompleto. Debes proporcionar todos los parámetros requeridos" }); 
    }
    try {
        const client = await Client.findOne({ where: { email },attributes: ['id', 'name' , 'phone' , 'address' , 'email' , 'pass' , 'profile_picture']});
        if (!client) {
            return res.status( 404 ).json({ message: 'Usuario no encontrado' }); 
        }

        const passwordMatch = await compare(pass, client.pass);

        if (!passwordMatch) {
            return res.status( 400 ).json({ message: 'Contraseña incorrecta' }); 
        }

        delete client.dataValues.pass

        const token = jwt.sign({ id: client.id }, process.env.JWT_SECRET);

        res.status(200).json({ result: {"token":token , "client" : client} });
    } catch (error) {
        console.log(error)
        return res.status( 500 ).json({message: error.message }); 
    }
}


export const register = async (req, res) =>{
    try {
        const { name, phone, address, email, pass, profile_picture } = req.body;

        if(!name || !phone || !address || !email || !pass){
            return res.status( 400 ).json({ message: "El cuerpo de la solicitud está incompleto. Debes proporcionar todos los parámetros requeridos" }); 
        }

        const clientExist = await Client.findOne({ where: { email } });

        if(clientExist) {
            return res.status( 400 ).json({ message: "El cliente ya existe"})
        }
        
        const createdClient = await Client.create({ name, phone, address, email, pass, profile_picture });

        return res.status( 201 ).json({ result: createdClient });
    } catch ( error ) {
        return res.status( 500 ).json({message: error.message });
    }
}


