import dotenv from 'dotenv';
import { MercadoPagoConfig, Preference } from 'MercadoPago';

dotenv.config();

const client = new MercadoPagoConfig({ accessToken: process.env.MERCADO_API_KEY });

export const createPreferences = (req, res) => {
    try{
        const { id, description , price } = req.body

        const preference = new Preference(client)
        preference.create({
            items: [
            {
                id: id,
                title: description,
                currency_id: 'ARG',
                picture_url: 'https://www.mercadopago.com/org-img/MP3/home/logomp3.gif',
                description: description,
                category_id: 'art',
                quantity: 1,
                unit_price: Number(price)
            }
            ],
            back_urls: {
            success: '/api/checkout/feedback',
            failure: '/api/checkout/feedback',
            pending: '/api/checkout/feedback'
            },
            auto_return: 'approved',
            payment_methods: {
            excluded_payment_methods: [
                    {
                                id: "debcabal"
                    }
            ],
            excluded_payment_types: [
                    {
                                id: "credit_card"
                    }
            ],
            installments: 1
            }
        }).then(function (response) {
                res.json({
                    id: response.body.id
                });
            }).catch(function (error) {
                console.log(error);
                res.status(500).json({ error: 'Error al crear la preferencia' });
        });
    }catch(error){
        console.log(error)
    }
}


export const statusPayment = (req, res) => {
    console.log("entro aca")
    res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
}