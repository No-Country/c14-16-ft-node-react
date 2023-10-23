import { schedule } from "node-cron"
import { Branch } from "../models/Branch.js"
import { Booking } from "../models/Booking.js"
import { Op } from "sequelize"
import moment from "moment"

export const updateBookingDaily = async() => {

    try{
        const today = moment().utc().startOf("day")

        await bookingToIncrement(today)
        await bookingToDecrement(today)

    }catch(error){
        console.log(error)
    }
}

schedule('0 0 * * *', () => {
    updateBookingDaily()
});


const bookingToIncrement = async(today) => {
    try{
        const bookings = await Booking.findAll({
            where: {
                from_date: {
                    [Op.eq]: today.toDate()
                }
            }
        })

        if(bookings.length > 0){
            for (const booking of bookings) {
                await Branch.increment("amount", {
                    by: 1,
                    where: {id: booking.branch_id}
                })
            }
        }
    }catch(error){
        console.log(error)
    }
}

const bookingToDecrement = async(today) => {

    try{
        const yesterday = moment(today).subtract(1, 'day');
        const bookings = await Booking.findAll({
            where: {
                to_date: {
                    [Op.eq]: yesterday.toDate()
                }
            }
        })

        if (bookings.length > 0) {
            for (const booking of bookings) {
                await Branch.decrement("amount", {
                    by: 1,
                    where: { id: booking.branch_id }
                });
            }
        }
    }catch(error){
        console.log(error)
    }
}