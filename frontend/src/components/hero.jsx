import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import Input from "./ui/inputs";
import Select from "./ui/select";
import Button from "./ui/button";

function Hero() {
  const [place, setPlace] = useState("");
  const [pet, setPet] = useState("");
  const navigate = useNavigate();
  const userSearch = {
    place,
    pet,
  };

  const { handleSearchTerm } = useContext(SearchContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userSearch);
    // if (Object.values(userSearch).includes("")) {
    //   alert("Todos los campos son obligatorios");
    //   return;
    // }
    handleSearchTerm(userSearch);
    setPet("");
    setPlace("");
    navigate("/search");
  };
  return (
    <>
      <div className="container mx-auto px-4 h-[70vh]">
        <h1 className="text-4xl text-gray-100 font-semibold text-center pt-5 mb-4">
          Un lugar seguro para tu mascota
        </h1>
        <p className="text-2xl font-semibold text-center text-gray-100 ">
          Guarderias que cuidan cada detalle para que tu mascota se sienta en
          como en casa, sin preocupaciones ni inquietudes. Aquí tendran un
          espacio para jugar, tambien tendran ricas comidas, jugaran y pasearan
          libremente. con los mejores profesionales y servicios de calidad.
        </p>
      </div>
      {/* Formulario de Búsqueda */}
      <section className=" py-6 sm:py-8 lg:py-0">
        <div className="bg-[rgb(250,250,250)] backdrop-blur-md rounded-t-lg px-6 pt-5 pb-10 text-center w-[90%] sm:w-3/5 md:w-2/5 mx-auto mt-0">
          <h2 className="text-lg font-semibold text-black mb-4">
            Reserva un lugar para tu peludito donde y cuando quieras
          </h2>
          <div className="flex justify-center">
            <form className="w-full max-w-md " onSubmit={handleSubmit}>
              <div className="flex flex-col items-center w-full space-y-3">
                <Input
                  name="ciudad"
                  type="text"
                  place="Ingresa una localidad"
                  value={place}
                  onChange={(e) => {
                    //userSearch.place = e.target.value;
                    setPlace(e.target.value);
                  }}
                />
                <div className="w-full">
                  <Select
                    name="tipo-animal"
                    values={["", "dog", "cat", "other"]}
                    options={[
                      "Seleccione una mascota",
                      "Perro",
                      "Gato",
                      "Otro",
                    ]}
                    onChange={(e) => {
                      //userSearch.pet = e.target.value;
                      setPet(e.target.value);
                    }}
                  />
                </div>
                <Button label="Buscar" type="submit" />
                {/* <button
                    className="w-full max-w-lg py-4 md:mx-auto text-xl font-bold bg-amber-600 rounded-md hover:bg-amber-400"
                    type="submit"
                  >
                    Buscar
                  </button> */}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
