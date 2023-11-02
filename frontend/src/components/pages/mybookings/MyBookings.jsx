import BookCard from "./BookCard.jsx";
import { TOKEN_KEY } from "../../../constants/api.js";
import { useEffect, useState } from "react";

const MyBookings = () => {
  const user = JSON.parse(localStorage.getItem("User"));
  const token = localStorage.getItem(TOKEN_KEY);
  const [bookings, setBookings] = useState([])


  useEffect(() => {
    const getData = async() => {
      const response = await fetch(`https://doggyhouse.azurewebsites.net/api/bookings/byUser/${user.id}`, { headers: { Authorization: `Bearer ${token}` } })
      const responseData = await response.json();
      setBookings(responseData.result)
    }

    getData()
  }, [token, user.id])

  return (
    <div className="container mx-auto py-4 ">
      {bookings.length !== 0 ?
     <div className="my-8">
      <table className="w-full">
        <thead className="text-white font-bold font-roboto bg-primary">
          <tr>
            <th className="py-6">Sucursal</th>
            <th className="py-6">Dirección</th>
            <th className="py-6">Mascota</th>
            <th className="py-6">Fecha de entrada</th>
            <th className="py-6">Fecha de salida</th>
            <th className="py-6">Precio</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) =>(
            <BookCard key={booking.id} booking={booking} />
          ))}
        </tbody>
      </table>
      </div>
      :
      <div>No hay datos</div>}
    </div>
  );
};

export default MyBookings;
