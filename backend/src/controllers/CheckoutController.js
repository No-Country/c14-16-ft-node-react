import dotenv from 'dotenv';
import mercadopago from "mercadopago"

dotenv.config();

export const createOrder = async(req, res) => {

    const { description , from_date, to_date, price, transport, comments, pet_id, branch_id } = req.body

    const token = req.get('Authorization') || req.headers['authorization'];
    if(!description || !price){
        return res.status( 400 ).json({ message: "El cuerpo de la solicitud está incompleto. Debes proporcionar todos los parámetros requeridos" }); 
    }

    mercadopago.configure({access_token: process.env.MERCADO_KEY})

    const result = await mercadopago.preferences.create({
        items: [
            {
                title: description,
                currency_id: 'ARG',
                picture_url: 'https://www.mercadopago.com/org-img/MP3/home/logomp3.gif',
                quantity: 1,
                unit_price: Number(price)
            }
            ],
            back_urls: {
                success: "https://c14-16-ft-node-react.vercel.app/",
                failure: "https://c14-16-ft-node-react.vercel.app/"
            },
            auto_return: "approved"
    })

    //se creara directamente la reserva sin espera de la confirmacion del pago
    try{
        await fetch(`${process.env.BACKEND_URL}/api/bookings` , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({
                from_date, to_date, price, transport, comments, pet_id, branch_id
            })
        })
    }catch(error){
        return res.status( 500).json({ result: error.message}); 
    }
    return res.status( 200 ).json({ result: result}); 
}
