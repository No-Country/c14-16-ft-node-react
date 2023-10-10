import { compare } from "bcrypt";
import { Client } from "../models/Client.js";
import jwt from "jsonwebtoken"
import dotenv from 'dotenv';
import BusinessError from '../middlewares/BusinessError.js';

dotenv.config();

export const login = async(req, res) => {
    const {email, pass} = req.body

    try {
        const client = await Client.findOne({ where: { email } });
        if (!client) {
            throw new BusinessError({ message: 'Usuario no encontrado', code: 404 });
        }

        const passwordMatch = await compare(pass, client.pass);

        if (!passwordMatch) {
            throw new BusinessError({ message: 'Contraseña incorrecta', code: 400 });
        }

        const token = jwt.sign({ id: client.id }, process.env.JWT_SECRET);

        res.status(200).json({ result: {"token":token , "client" : client} });
    } catch (error) {
        console.log(error)
        return res.status( 500 ).json({ message: error }); 
    }

}


