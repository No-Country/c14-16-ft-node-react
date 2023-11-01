import { compare } from "bcrypt";
import { Client } from "../models/Client.js";
import { getImage, saveImage, saveImageDefault } from "../services/ImageService.js";
import jwt from "jsonwebtoken"
import dotenv from 'dotenv';

dotenv.config();

export const login = async(req, res) => {
    const {email, password} = req.body
    if(!email || !password){
        return res.status( 400 ).json({ message: "El cuerpo de la solicitud está incompleto. Debes proporcionar todos los parámetros requeridos" }); 
    }
    try {
        const client = await Client.findOne({ where: { email },attributes: ['id', 'name' , 'phone' , 'address' , 'email' , 'password' , 'profile_picture']});
        if (!client) {
            return res.status( 404 ).json({ message: 'Usuario no encontrado' }); 
        }

        const passwordMatch = await compare(password, client.password);

        if (!passwordMatch) {
            return res.status( 400 ).json({ message: 'Contraseña incorrecta' }); 
        }

        delete client.dataValues.password

        if (client.profile_picture) {
            const image = await getImage(client.profile_picture)
            client.setDataValue("profile_picture", image)
        }

        const token = jwt.sign({ id: client.id }, process.env.JWT_SECRET);

        res.status(200).json({ result: {"token":token , "client" : client} });
    } catch (error) {
        console.log(error)
        return res.status( 500 ).json({message: error.message }); 
    }
}


export const register = async (req, res) =>{
    try {
        const { name, phone, address, email, password, profile_picture } = req.body;

        let route = null
        if(!name || !phone || !address || !email || !password){
            return res.status( 400 ).json({ message: "El cuerpo de la solicitud está incompleto. Debes proporcionar todos los parámetros requeridos" }); 
        }

        const clientExist = await Client.findOne({ where: { email } });

        if(clientExist) {
            return res.status( 400 ).json({ message: "El cliente ya existe"})
        }

        if(profile_picture){
            route = await saveImage(profile_picture, name)
        }else{
            route = saveImageDefault()
        }
        
        const createdClient = await Client.create({ name, phone, address, email, password, profile_picture: route });

        return res.status( 201 ).json({ result: createdClient });
    } catch ( error ) {
        return res.status( 500 ).json({message: error.message });
    }
}


