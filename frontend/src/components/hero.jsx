import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../customHooks/useFetch";
import { SearchContext } from "../context/SearchContext";
import Button from "./ui/button";

function Hero() {
  const [userSearch, setUserSearch] = useState({
    city: "",
    animalType: "",
  });

  const { data } = useFetch(
    "https://doggyhouse.azurewebsites.net/api/branches"
  );

  const { handleSearchTerm } = useContext(SearchContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userSearch);
    handleSearchTerm(userSearch);
    setUserSearch({
      city: "",
      animalType: "",
    });
    navigate("/search");
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8 min-h-[50vh]">
        <h1 className="text-4xl font-semibold font-roboto text-center pt-5 mb-4 font-mono">
          Un lugar seguro para tu mascota
        </h1>
        <p
          style={{ textShadow: "2px 2px 2px black" }}
          className="max-w-xl mx-auto text-2xl font-semibold font-josefin text-center text-white"
        >
          Guarderias que cuidan cada detalle para que tu mascota se sienta como
          en casa, sin preocupaciones ni inquietudes. Aquí tendrán un espacio
          para jugar, también tendrán ricas comidas, jugarán y pasearán
          libremente. Contando con la atención de los mejores profesionales y
          servicios de calidad.
        </p>
      </div>
      {/* Formulario de Búsqueda */}
      <section className=" py-6 sm:py-8 lg:py-0">
        <div className="bg-[rgb(250,250,250,0.1)] backdrop-blur-md rounded-t-lg px-6 pt-5 pb-10 text-center w-[90%] sm:w-3/5 md:w-2/5 mx-auto mt-0">
          <h2 className="text-xl font-roboto text-black mb-4">
            Reserva un lugar para tu peludito donde y cuando quieras
          </h2>
          <div className="flex justify-center">
            <form
              id="searchForm"
              className="w-full max-w-md "
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col items-center w-full space-y-3">
                <div className="w-full">
                  <select
                    name="city"
                    value={userSearch.city}
                    required
                    onChange={(e) => {
                      setUserSearch((userSearch) => ({
                        ...userSearch,
                        [e.target.name]: e.target.value,
                      }));
                    }}
                    className="w-full p-4 bg-gray-100 border-b-2 border-[#333] rounded-md outline-none"
                  >
                    <option value="">Seleccione una localidad</option>
                    <option value="todas">Todas</option>
                    {data?.result?.map((branch) => (
                      <option key={branch.id} value={branch.city}>
                        {branch.city}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full">
                  <select
                    disabled={userSearch.city === "todas" ? true : false}
                    name="animalType"
                    value={userSearch.animalType}
                    onChange={(e) => {
                      setUserSearch((userSearch) => ({
                        ...userSearch,
                        [e.target.name]: e.target.value,
                      }));
                    }}
                    className="w-full p-4 bg-gray-100 border-b-2 border-[#333] rounded-md outline-none"
                  >
                    <option value="">Seleccione una mascota</option>
                    <option value="Perro">Perro</option>
                    <option value="Perro">Gato</option>
                    <option value="Otros">Otros</option>
                  </select>
                </div>
                <Button label="Buscar" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
