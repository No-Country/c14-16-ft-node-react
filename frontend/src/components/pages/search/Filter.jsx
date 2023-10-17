import { useEffect, useState } from "react";

import "./Filter.css";

const Filter = ({ branchList, updateBranches }) => {
  const [filteredBranches, setFilteredBranches] = useState(branchList);

  useEffect(() => {
    updateBranches(filteredBranches);
  }, [filteredBranches]);

  return (
    <div className="container mx-auto p-8 bg-[#F0A225] sm:rounded-xl">
      <h2 className="mb-8 text-xl text-center text-white font-bold">
        Filtros de búsqueda
      </h2>
      <form id="filter-form" className="flex flex-col items-center">
        <div className="w-[70%]">
          <h3 className="mb-4 text-md text-white font-bold">
            Servicios Disponibles
          </h3>
          <div className="mb-8 grid grid-cols-2 gap-4 md:flex md:flex-wrap md:flex-row ">
            <label htmlFor="peluqueria">
              <input
                id="peluqueria"
                type="checkbox"
                value="peluqueria"
                className="mr-2"
              />
              Peluquería
            </label>
            <label htmlFor="dieta">
              <input
                id="dieta"
                type="checkbox"
                value="dieta"
                className="mr-2"
              />
              Dietas especiales
            </label>
            <label htmlFor="actividades">
              <input
                id="actividades"
                type="checkbox"
                value="actividades"
                className="mr-2"
              />
              Juegos y actividades
            </label>
            <label htmlFor="paseo-personal">
              <input
                id="paseo-personal"
                type="checkbox"
                value="paseo personal"
                className="mr-2"
              />
              Paseos personales
            </label>
            <label htmlFor="veterinaria">
              <input
                id="veterinaria"
                type="checkbox"
                value="veterinaria"
                className="mr-2"
              />
              Veterinaria
            </label>
            <label htmlFor="paseo-manada">
              <input
                id="paseo-manada"
                type="checkbox"
                value="paseo-manada"
                className="mr-2"
              />
              Paseos en manada
            </label>
          </div>
        </div>
        <div className="w-[70%] mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="mb-4 text-md text-white font-bold">
              Tipo de mascota
            </h3>
            <div>
              <select type="select" className="w-full">
                <option value="">Selecciona una mascota</option>
                <option value="">Perro Grande</option>
                <option value="">Perro Mediano</option>
                <option value="">Perro Chico</option>
                <option value="">Gato</option>
                <option value="">Animales Exóticos</option>
              </select>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-md text-white font-bold">Ciudad</h3>
            <div>
              <select type="select" className="w-full">
                <option value="">Selecciona tu Ciudad</option>
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="Parana">Paraná</option>
                <option value="La Plata">La Plata</option>
                <option value="Montevideo">Montevideo</option>
              </select>
            </div>
          </div>
        </div>
        <button className="w-full max-w-lg py-4 md:mx-auto text-xl font-bold bg-amber-600 rounded-md">
          Buscar
        </button>
      </form>
    </div>
  );
};

export default Filter;
