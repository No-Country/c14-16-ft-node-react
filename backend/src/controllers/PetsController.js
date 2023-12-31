import { Pet } from '../models/Pet.js';
import { Client } from '../models/Client.js';
import { AnimalTypes } from '../models/AnimalTypes.js';

export const getPets = async ( req, res ) =>{
    try {
        const getPets = await Pet.findAll({include: [
            {
              model: AnimalTypes,
              as: 'types',
            }]});
        return res.status( 200 ).json({ result: getPets }); 
    } catch ( error ) {
        return res.status( 500 ).json({message: error.message}); 
    }
}

export const getOnePets = async ( req, res ) =>{
    try {
        const { id } = req.params;

        if(!id){
            return res.status( 400 ).json({ message: "El id es obligatorio" }); 
        }
        
        const getPet = await Pet.findByPk( id , {include: [
            {
              model: AnimalTypes,
              as: 'types',
            }]});

        return res.status( 200 ).json({ result: getPet }); 
    } catch (error) {
        return res.status( 500 ).json({message: error.message});
    }
}

export const getPetsByUser = async(req, res) => {
    try {
        const { id } = req.params;
        
        if(!id){
            return res.status( 400 ).json({ message: "El id del usuario es obligatorio" }); 
        }

        const pets = await Pet.findAll({where: {client_id: id}, include: [
            {
              model: AnimalTypes,
              as: 'types',
            }]
        })

        return res.status( 200 ).json({ result: pets }); 
    } catch (error) {
        return res.status( 500 ).json({message: error.message});
    }
}

export const createPets = async ( req, res ) =>{
    try {
        const { name, breed, weight, client_id , type_id } =  req.body

        if(!name || !client_id || !type_id || !weight){
            return res.status( 400 ).json({ message: "El cuerpo de la solicitud está incompleto. Debes proporcionar todos los parámetros requeridos" }); 
        }

        const client = await Client.findByPk( client_id );

        const type = await AnimalTypes.findByPk( type_id );


        if (!client) {
          return res.status(404).json({ message: 'Cliente no encontrado' });
        }

        if (!type) {
            return res.status(404).json({ message: 'Tipo no encontrado' });
          }
        
        const createdPet = await Pet.create({ name, breed, weight, client_id: client.id, type_id: type.id})

        return res.status( 201 ).json({ result: createdPet });
    } catch (error) {
        return res.status( 500 ).json({message: error.message});
    }
}

export const updatePets = async ( req, res ) =>{
    try {
        const { id } = req.params;

        if(!id){
            return res.status( 400 ).json({ message: "El id es obligatorio" }); 
        }

        const petToUpdate = await Pet.findByPk( id );

        if(!petToUpdate){
            return res.status( 404 ).json({ message: 'La mascota no existe' });
        }

        petToUpdate.set( req.body );
        petToUpdate.save();
        return res.status( 200 ).json({ result: petToUpdate });
    } catch ( error ) {
        return res.status( 500 ).json({message: error.message});
    }
}

export const deletePets = async ( req, res ) =>{
    try {
        const { id } = req.params;

        if(!id){
            return res.status( 400 ).json({ message: "El id es obligatorio" }); 
        }
        
        await Pet.destroy({
            where: {
                id
            }
        });
        return res.status( 200 ).json({ result: `Mascota ${id} eliminada correctamente` })
    } catch ( error ) {
        return res.status( 500 ).json({message: error.message});
    }
}