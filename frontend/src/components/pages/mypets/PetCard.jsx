import { FaPaw } from "react-icons/fa";

const PetCard = ({ name, breed, type,weight }) => {
  return (
    <article className="bg-gray-100 rounded-md overflow-hidden">
      <h2 className="px-8 py-4 flex gap-2 items-center text-xl text-white font-bold font-roboto bg-primary">
        <FaPaw />
        {name}
      </h2>
      <div className="px-8 py-4 flex justify-between items-center">
        <div>
          <h3 className="text-md font-bold font-roboto">
            Tipo: <span className="font-normal font-josefin">{type}</span>
          </h3>
          <h3 className="text-md font-bold font-roboto">
            Raza: <span className="font-normal font-josefin">{breed}</span>
          </h3>
          <h3 className="text-md font-bold font-roboto">
            Peso: <span className="font-normal font-josefin">{weight}</span>
          </h3>
        </div>

        <div className="flex flex-col gap-2 items-center justify-around">
          <button
            type="button"
            className="w-24 h-8 text-white bg-blue-400 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Editar
          </button>{" "}
          <button
            type="button"
            className="w-24 h-8 text-white bg-red-400 rounded-md hover:bg-red-600 transition-colors duration-300"
          >
            Eliminar
          </button>{" "}
        </div>
      </div>
    </article>
  );
};

export default PetCard;