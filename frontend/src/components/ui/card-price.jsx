import PropTypes from "prop-types";
import Utils from "../../libs/Utils";
import Button from "./button";
import { RiStarFill, RiBaiduLine } from "react-icons/ri";

function CardPrice({ title, price, services, active }) {
  return (
    <div
      className={Utils(
        "border-2 border-gray-900 p-7 rounded-2xl hover:bg-gray-900 hover:text-white transition-all duration-300 hover:-translate-y-7 mx-auto w-[70%] sm:w-[90%] h-[600px] relative",
        active && "bg-gray-900  text-white"
      )}
    >
      <div className="space-y-5">
        <RiStarFill className="text-primary text-2xl" />
        <h2 className="text-2xl font-bold">{title}</h2>

        <div className=" flex items-end gap-4">
          <h2 className="text-4xl font-bold">${price}</h2>
          <h5 className="text-md text-gray-400">/Semanal</h5>
        </div>
      </div>
      <hr className="border-gray-300 my-5" />
      <div className="space-y-5">
        <ul className="space-y-3">
          {services.map((ser, index) => (
            <li key={index} className="flex gap-2 items-center text-sm">
              <RiBaiduLine className="text-primary text-sm" />

              {ser.feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute bottom-1 w-[83%]">
        <Button type="submit" label="Reservar" />
      </div>
    </div>
  );
}

CardPrice.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  services: PropTypes.array.isRequired,
  active: PropTypes.bool,
};

export default CardPrice;