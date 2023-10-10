import jwt from "jsonwebtoken"
import dotenv from 'dotenv';

dotenv.config();

export const checkSession = (req, res, next) => {
    const tokenByUser = req.headers.authorization || null

    if (!tokenByUser) {
        return res.status(401).json({ mensaje: 'No se proporcionó un token' });
    }

    try {
        const token = tokenByUser.substring(7);

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        next()
    } catch (error) {
        console.log(error)
        return res.status(401).json({ mensaje: 'Token inválido' });
    }
    
}