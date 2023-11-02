import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.MAP_API_KEY;

const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=`;

const getGeocode = async(address) => {
  try {
    const response = await axios.get(geocodeUrl + encodeURI(address) + `&key=${apiKey}`);
    return response.data.results[0].geometry.location;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const getDistance = async(address, addressBranch) => {
  try {
    const originLocation = await getGeocode(address);
    const destinationLocation = await getGeocode(addressBranch);

    const distanceUrl = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${originLocation.lat},${originLocation.lng}&destinations=${destinationLocation.lat},${destinationLocation.lng}&key=${apiKey}`;

    console.log(distanceUrl)
    const response = await axios.get(distanceUrl);
    const distance = response.data.rows[0].elements[0].distance.value /1000;

    return distance
  } catch (error) {
    console.error('Error al calcular la distancia:', error);
  }
}


export const calculateTransportPrice = async (address, addresBranch, priceByKm) => {
    const distance = await getDistance(address, addresBranch)
    return parseInt(distance) * parseInt(priceByKm)
}