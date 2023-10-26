import { Booking } from "../models/Booking.js"
import { Branch } from "../models/Branch.js";
import { Pet } from "../models/Pet.js"
import { Rate } from "../models/Rate.js";
import { calculateTransportPrice } from "../services/BookingService.js";

export const getBookings = async( req, res ) => {
    try {
        const bookings = await Booking.findAll();
        return res.status( 200 ).json({ result: bookings }); 
    } catch (error) {
        return res.status( 500 ).json({ message: error.message }); 
    }
}

export const getBooking = async( req, res ) => {
    try {
        const { id } = req.params;

        if(!id){
            return res.status( 400 ).json({ message: "El id es obligatorio" }); 
        }

        const booking = await Booking.findByPk( id )

        return res.status( 200 ).json({ result: booking }); 
    } catch (error) {
        return res.status( 500 ).json({ message: error.message }); 
    }
}

export const createBooking = async( req, res) => {
    try {
        const { from_date, to_date, price, transport, comments, pet_id, branch_id } = req.body;

        if( !from_date || !to_date || !price || !pet_id || !branch_id ){
            return res.status( 400 ).json({ message: "El cuerpo de la solicitud está incompleto. Debes proporcionar todos los parámetros requeridos" }); 
        }

        const pet = await Pet.findByPk( pet_id )

        if (!pet) {
            return res.status(404).json({ message: 'Mascota no encontrada' });
        }
        
        const branch = await Branch.findByPk( branch_id )

        if (!branch) {
            return res.status(404).json({ message: 'Sucursal no encontrada' });
        }

        const createdBooking = await Booking.create({ from_date, to_date, price, transport, comments, pet_id: pet.id, branch_id: branch.id })

        return res.status( 201 ).json({ result: createdBooking });
    } catch (error) {
        return res.status( 500 ).json({ message: error.message });
    }
}


export const updateBooking = async(req, res) => {
    try {
        const { id } = req.params;
        
        if(!id){
            return res.status( 400 ).json({ message: "El id es obligatorio" }); 
        }

        const bookingToUpdate = await Booking.findByPk( id );

        if(!bookingToUpdate){
            return res.status( 404 ).json({ message: 'La reserva no existe' });
        }

        bookingToUpdate.set( req.body );
        bookingToUpdate.save();

        return res.status( 200 ).json({ result: bookingToUpdate });
    } catch (error) {
        return res.status( 500 ).json({ message: error.message });
    }
}

export const deleteBooking = async(req, res) => {
    try {
        const { id } = req.params;

        if(!id){
            return res.status( 400 ).json({ message: "El id es obligatorio" }); 
        }

        const bookingToDelete = await Booking.findByPk( id )

        if(!bookingToDelete){
            return res.status( 404 ).json({ message: "La reserva no existe" }); 
        }
        await Booking.destroy({
            where: {
                id
            }
        });
        
        return res.status( 200 ).json({ result: `Reserva ${id} eliminada correctamente` })
    } catch ( error ) {
        return res.status( 500 ).json({ message: error.message });
    }
}

export const calculatePrice = async(req, res) => {
    try {
        const {branch_id , pet_id, days, transport, address} = req.body
        let price = 0

        if(!branch_id || !pet_id || !days){
            return res.status( 400 ).json({ message: "El cuerpo de la solicitud está incompleto. Debes proporcionar todos los parámetros requeridos" }); 
        }

        if(transport && !address){
            return res.status( 400 ).json({ message: "Para incluir transporte la direccion es necesaria" }); 
        }
        
        const branch = await Branch.findByPk( branch_id,{
            include: [
                {
                  model: Rate,
                  as: 'rates',
                }
            ]}
        )

        if(!branch) {
            return res.status( 404 ).json({ message: "La sucursal no existe" }); 
        }

        const pet = await Pet.findByPk( pet_id )

        if(!pet) {
            return res.status( 404 ).json({ message: "La mascota no existe" }); 
        }

        let petWeightInRange = false;
        branch.rates.map(rate => {
            if(pet.weight >= rate.weightFrom && pet.weight < rate.weightTo){
                petWeightInRange = true;
                price = rate.price * days
            }
        })

        if(!petWeightInRange){
            return res.status( 404 ).json({ message: "No se encontro una tarifa para ese peso" }); 
        }

        if(transport){
            const priceTransport = await calculateTransportPrice(address , branch.address, branch.price_km)
            price += priceTransport 
        }

        return res.status( 200 ).json({ result: { price: price } })

    } catch (error) {
        return res.status( 500 ).json({ message: error.message });
    }
    
}