import { useEffect, useState } from "react";
import { TOKEN_KEY } from "../../../constants/api";
import Button from "../../ui/button";
import { BsXCircle } from "react-icons/bs";

import "./Confirm.css";

export const Confirm = ({ reserver }) => {
  const [price, setPrice] = useState(0);

  const user = JSON.parse(sessionStorage.getItem("User"));
  const token = sessionStorage.getItem(TOKEN_KEY);

  useEffect(() => {
    if (reserver) {
      console.log("entra");
      const fromDate = new Date(reserver.from_date);
      const toDate = new Date(reserver.to_date);

      const timeDifference = toDate - fromDate;
      const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      const data = JSON.stringify({
        branch_id: reserver.branch_id,
        pet_id: reserver.pet_id,
        days: daysDifference,
        transport: reserver.transport,
        address: user.address,
      });
      const calculatePrice = async () => {
        try {
          const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          };

          const response = await fetch(
            `https://doggyhouse.azurewebsites.net/api/bookings/calculatePrice`,
            { method: "POST", headers: headers, body: data }
          );
          const responseData = await response.json();
          setPrice(responseData.result.price);
        } catch (error) {
          console.log(error);
        }
      };

      calculatePrice();
    }
  }, []);

  const handleConfirm = async (e) => {
    e.preventDefault();

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    reserver.price = price;

    const response = await fetch(
      `https://doggyhouse.azurewebsites.net/api/checkout/create-order`,
      { method: "POST", headers: headers, body: JSON.stringify(reserver) }
    );
    const responseData = await response.json();
    const route = responseData.result.body.sandbox_init_point;

    if (route) {
      window.location.href = route;
    }
  };

  return (
    <>
      <div className="popup container max-w-[350px] mx-auto py-10 px-4 flex flex-col gap-4 items-center bg-white border-2 border-primary rounded-md shadow-md">
        <BsXCircle className="text-lg text-primary absolute top-2 right-2" />
        <h2 className="font-bold text-2xl text-center">
          ¿Queres confirmar tu reserva?
        </h2>
        <p className="font-josefin">
          El precio total de la reserva es:{" "}
          <span className="font-roboto font-bold">{price}</span>
        </p>
        <Button
          type="submit"
          label="Confirmar reserva"
          click={handleConfirm}
          clase={"max-w-[40%]"}
        ></Button>
      </div>
    </>
  );
};

export default Confirm;
