import { compare } from "bcrypt";
import jwt from "jsonwebtoken"
import dotenv from 'dotenv';
import { Client } from "../models/Client.js";

dotenv.config();

export const login = async(req, res) => {
    const {email, pass} = req.body

    try {
        const client = await Client.findOne({ where: { email } });
        if (!client) {
            return res.status(401).json({ message: 'Usuario no encontrado' });
        }

        const passwordMatch = await compare(pass, client.pass);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        const token = jwt.sign({ id: client.id }, process.env.JWT_SECRET);

        res.status(200).json({ result: {"token":token , "client" : client} });
    } catch (error) {
        console.log(error)
        return res.status( 500 ).json({ message: error }); 
    }

}


