import { Client } from "../models/Client.js"

const registerUser = async (newClient) => {
    try {
        const {name, phone, address, email, pass , profile_picture} = newClient
        const client = await Client.create({
            name,
            phone,
            address,
            email,
            pass,
            profile_picture
        })
        return client
    } catch (error) {
        console.log(error)
        throw{
            status: 500,
            message: `Error ${error}`
        }
    }
}

export {registerUser}