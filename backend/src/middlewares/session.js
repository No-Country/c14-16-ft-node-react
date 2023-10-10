import jwt from "jsonwebtoken"
import dotenv from 'dotenv';
import { Client } from "../models/Client.js";

dotenv.config();

export const checkSession = async(req, res, next) => {
    const tokenByUser = req.headers.authorization || null

    if (!tokenByUser) {
        return res.status(401).json({ message: 'No se proporcionó un token' });
    }

    try {
        const token = tokenByUser.substring(7);

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await Client.findByPk( decoded.id )
        
        if(!user){
            throw new Error()
        }
        next()
    } catch (error) {
        console.log(error)
        return res.status(401).json({ message: 'Token inválido' });
    }
    
}