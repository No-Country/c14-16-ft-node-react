import { useState } from "react";
import Input from "../../ui/inputs";
import Button from "../../ui/button";
import { useFetch } from "../../../customHooks/useFetch";

// Estilos
const filterBg = {
  backgroundImage: `linear-gradient(to right, rgba(240,162,37,0.13) 0%, rgba(0,0,10,0.7035189075630253) 35%, rgba(240,162,37,0.13) 100%)`,
  backgroundPosition: "center",
  backgroundSize: "cover",
};

const AddPet = ({ id, token, handleModalAdd }) => {
  const [pet, setPet] = useState({
    name: "",
    breed: "",
    type_id: "",
    client_id: id,
    weight: "0",
  });

  const { data } = useFetch(
    `https://doggyhouse.azurewebsites.net/api/animaltypes`
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    pet.type_id = Number(pet.type_id);
    try {
      await fetch(`https://doggyhouse.azurewebsites.net/api/pets`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(pet),
      });
      handleModalAdd();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      style={filterBg}
      className="w-screen py-16 grid place-items-center absolute top-0 left-0"
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[550px] p-8 bg-gray-100 border-2 border-primary rounded-md"
      >
        <h2 className="py-4 text-center text-lg font-bold font-roboto">
          Agrega tu mascota
        </h2>
        <label htmlFor="name" className="block mb-6">
          ¿Cómo se llama tu mascota?
          <Input
            id="name"
            name="name"
            type="text"
            value={pet.name}
            place="Ingresa su nombre"
            onChange={(e) =>
              setPet((pet) => ({ ...pet, [e.target.name]: e.target.value }))
            }
            errors={""}
          />
        </label>
        <label htmlFor="types" className="block mb-6">
          ¿Qué animalito tenés?
          <select
            type="select"
            name="type_id"
            value={pet.type_id}
            className="w-full p-4 bg-gray-100 border-b-2 border-[#333] rounded-md outline-none"
            onChange={(e) =>
              setPet((pet) => ({
                ...pet,
                [e.target.name]: e.target.value,
              }))
            }
          >
            <option value="">Selecciona una mascota</option>
            {data?.result?.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </label>
        {pet.type_id === "3" && (
          <label htmlFor="name" className="block mb-6">
            ¿Que raza es?
            <select
              type="select"
              name="breed"
              value={pet.breed}
              className="w-full p-4 bg-gray-100 border-b-2 border-[#333] rounded-md outline-none"
              onChange={(e) =>
                setPet((pet) => ({
                  ...pet,
                  [e.target.name]: e.target.value,
                }))
              }
            >
              <option value="">Selecciona una raza</option>
              <option value="Persa">Persa</option>
              <option value="Siamés">Siamés</option>
              <option value="Bombay">Bombay</option>
              <option value="British">British</option>
              <option value="Angora">Angora</option>
              <option value="Exótico">Exótico</option>
            </select>
          </label>
        )}
        {pet.type_id === "2" && (
          <label htmlFor="name" className="block mb-6">
            ¿Que raza es?
            <select
              type="select"
              name="breed"
              value={pet.breed}
              className="w-full p-4 bg-gray-100 border-b-2 border-[#333] rounded-md outline-none"
              onChange={(e) =>
                setPet((pet) => ({
                  ...pet,
                  [e.target.name]: e.target.value,
                }))
              }
            >
              <option value="">Selecciona una raza</option>
              <option value="Caniche">Caniche</option>
              <option value="Yorkshire">Yorkshire</option>
              <option value="Dogo">Dogo</option>
              <option value="Pitbull">Pitbull</option>
              <option value="Bulldog/Francés">Bulldog/Francés</option>
              <option value="Labrador">Labrador</option>
              <option value="Exótico">Exótico</option>
            </select>
          </label>
        )}
        <label htmlFor="weight" className="block mb-6">
          ¿Cuanto Pesa?
          <Input
            id="weight"
            name="weight"
            type="number"
            value={pet.weight}
            place="Peso aproximado"
            onChange={(e) =>
              setPet((pet) => ({
                ...pet,
                [e.target.name]: e.target.value,
              }))
            }
            clase="bg-gray-100"
            errors={""}
          />
        </label>
        <div className="flex gap-4 items-center">
          <Button type="submit" label="Agregar" clase="" />
          <Button
            type="button"
            label="Cancelar"
            clase=""
            click={handleModalAdd}
          />
        </div>
      </form>
    </div>
  );
};

export default AddPet;