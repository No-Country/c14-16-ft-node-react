import { useEffect, useState } from "react";
import { useLocation } from "react-router"
import { TOKEN_KEY } from "../../../constants/api";
import Button from "../../ui/button";

export const Confirm = () => {
    const location = useLocation();
    const { reserver } = location.state;

    const [ price, setPrice ] = useState(0) 

    const user = JSON.parse(sessionStorage.getItem('User'))
    const token = sessionStorage.getItem(TOKEN_KEY)

    useEffect( () => {

        const fromDate = new Date(reserver.from_date);
        const toDate = new Date(reserver.to_date);

        const timeDifference = toDate - fromDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        const data = JSON.stringify({
            "branch_id": reserver.branch_id,
            "pet_id": reserver.pet_id,
            "days": daysDifference,
            "transport": reserver.transport,
            "address": user.address
           })
        const calculatePrice = async () =>{
            try {
                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                  };

                  const response = await fetch(`https://doggyhouse.azurewebsites.net/api/bookings/calculatePrice`,{method: 'POST', headers: headers,
                   body: data});
                  const responseData = await response.json();
                  setPrice(responseData.result.price)
            } catch (error) {
                console.log(error)
            }
        }

        calculatePrice()
    }, [])

    const handleConfirm = async (e) =>{
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          };

        reserver.price = price

        const response = await fetch(`https://doggyhouse.azurewebsites.net/api/checkout/create-order`,{method: 'POST', headers: headers,
        body: JSON.stringify(reserver)});
        const responseData = await response.json()
        const route = responseData.result.body.sandbox_init_point

        if(route){
            window.location.href = route
        }
    }

    return(
        <>
            <div className="min-h-screen container bg-gray-100 mx-auto pt-10 ">
                <div>
                    El precio total de la reserva es: {price}
                </div>
                <Button type="submit" label="Confirmar reserva" click={handleConfirm}></Button>
            </div>
        </>
    )
}


export default Confirm;