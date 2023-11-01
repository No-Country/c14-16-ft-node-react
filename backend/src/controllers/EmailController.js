import { sendMailService } from "../services/EmailService.js";


export const sendMail = (req, res) => {
    try{
        const {to, subject, html} = req.body

        if(!to || !subject || !html){
            return res.status( 400 ).json({ message: "El cuerpo de la solicitud está incompleto. Debes proporcionar todos los parámetros requeridos" });
        }

        sendMailService({to: to , subject: subject, html: html})

        res.status(200).json({ result: ""})
    }catch(error){
        return res.status( 500 ).json({ message: error.message }); 
    }
}