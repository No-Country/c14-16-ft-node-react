import {Service} from "../models/Service.js"

export const getServices = async ( req, res ) =>{
    try {
        const getServices = await Service.findAll();
        return res.status( 200 ).json({ result: getServices }); 
    } catch ( error ) {
        return res.status( 500 ).json({ message: error }); 
    }
}


export const getService = async (req, res) => {
    try {
        const { id } = req.params;
        const getService = await Service.findByPk( id );
        return res.status( 200 ).json({ result: getService }); 
    } catch (error) {
        return res.status( 500 ).json({ message: error }); 
    }
}
