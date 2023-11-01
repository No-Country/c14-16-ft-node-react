import React, { useState } from "react";
import Input from "../../ui/inputs";
import Button from "../../ui/button";

// Estilos
const filterBg = {
  backgroundImage: `linear-gradient(to right, rgba(240,162,37,0.13) 0%, rgba(0,0,10,0.7035189075630253) 35%, rgba(240,162,37,0.13) 100%)`,
  backgroundPosition: "center",
  backgroundSize: "cover",
};

const AddPet = () => {
  const [pet, setPet] = useState({
    name: "",
    breed: "",
    types: "",
    description: "",
    weight: "0",
  });

  console.log(pet);
  return (
    <div
      style={filterBg}
      className="w-screen py-16 grid place-items-center absolute top-0 left-0"
    >
      <form className="w-full max-w-[550px] p-8 bg-gray-100 border-2 border-primary rounded-md">
        <h2 className="py-4 text-center font-bold font-roboto">
          Agrega tu mascota
        </h2>
        <label htmlFor="name">
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
        <label htmlFor="types">
          ¿Qué animalito tenés?
          <select
            type="select"
            name="types"
            value={pet.types}
            className="w-full p-4 bg-gray-100 border-b-2 border-[#333] rounded-md outline-none"
            onChange={(e) =>
              setPet((pet) => ({
                ...pet,
                [e.target.name]: e.target.value,
              }))
            }
          >
            <option value="">Selecciona una mascota</option>
            <option value="perro">Perro</option>
            <option value="gato">Gato</option>
          </select>
        </label>
        {pet.types === "gato" && (
          <label htmlFor="name">
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
        {pet.types === "perro" && (
          <label htmlFor="name">
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
        <label htmlFor="weight">
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
            errors={""}
          />
        </label>
        <label htmlFor="description">
          Descripción
          <textarea
            name="description"
            sizable="false"
            id="description"
            cols="30"
            rows="10"
            className="w-full p-2 bg-gray-100"
          ></textarea>
        </label>
        <Button type="submit" label="Agregar" clase="" />
      </form>
    </div>
  );
};

export default AddPet;
