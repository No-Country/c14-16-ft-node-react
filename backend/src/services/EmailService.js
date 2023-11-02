import sgMail from "@sendgrid/mail"
import dotenv from 'dotenv';

dotenv.config();

sgMail.setApiKey(process.env.EMAIL_KEY)
  

const mailOptions = {
    to: 'adriandelosreyes2013@gmail.com',
    subject: 'Test',
    html: '<h1>Este es un ejemplo de correo HTML</h1><p>¡Hola, esto es un correo con formato HTML!</p>',
};

export const sendMailService = async(mailOptions) => {
  mailOptions.from = {email: 'doggyshouse23@gmail.com'}
  sgMail.send(mailOptions).then(() => {console.log("Email sent")})
    .catch((error) => { console.error(error);})
}