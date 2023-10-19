import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../../context/SearchContext";
import DogHome from "/assets/Images/DogHome.jpeg";
import StyledImage from "./StyledImage";
import "./Home.css";

import Hero from "../../hero";

const Home = () => {
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

  const imageStyles = {
    background: "#f8d444",
  };

  const textStyles = {
    color: "#000",
    fontSize: "1.5em",
    fontWeight: "bold",
    padding: "2px 4px",
  };

  const boxStyle = {
    background: "#f8d444",
  };

  const HeaderStyle = {
    backgroundImage: `url(${DogHome})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <header style={HeaderStyle}>
        <Hero />
      </header>

      <main className="bg-gray-100 py-8">
        <p className="text-2xl font-semibold text-center text-black mb-8">
          En Doggy&#39;s queremos que estes tranquilo y confiado de que tu
          mascota está en buenas manos con nosotros. Por eso, queremos contarte
          un poco sobre lo que tenemos para ofrecer.
        </p>
        <div className="flex flex-col md:flex-row m-4 justify-center items-center gap-6">
          {/* Box 1 */}
          <div
            className="md:w-1/3 bg-gray-400 rounded-lg shadow-md p-4 text-center"
            style={{
              background: "#f8d444",
            }}
          >
            <img
              src="/assets/Images/Dog-Working.png"
              alt="Imagen 1"
              className="w-full h-48 mx-auto rounded-lg"
            />
            <h3 className="text-2xl font-semibold text-center m-4">
              Dog Working
            </h3>
            <p className="mt-4">
              Nuestro equipo de expertos está dedicado al cuidado de tu mascota.
            </p>
          </div>

          {/* Box 2 */}
          <div
            className="md:w-1/3 bg-gray-400 rounded-lg shadow-md p-4 text-center"
            style={{
              background: "#f8d444",
            }}
          >
            <img
              src="/assets/Images/Dog-Office.png"
              alt="Imagen 2"
              className="w-full h-48 mx-auto rounded-lg"
            />
            <h3 className="text-2xl font-semibold text-center m-4">
              Dog Office
            </h3>
            <p className="mt-4">
              Ofrecemos un ambiente seguro y divertido para que tu mascota se
              sienta como en casa.
            </p>
          </div>

          {/* Box 3 */}
          <div
            className="md:w-1/3 bg-gray-400 rounded-lg shadow-md p-4 text-center"
            style={{
              background: "#f8d444",
            }}
          >
            <img
              src="/assets/Images/Dog-Hotel.png"
              alt="Imagen 3"
              className="w-full h-48 mx-auto rounded-lg"
            />
            <h3 className="text-2xl font-semibold text-center m-4">
              Dog Hotel
            </h3>
            <p className="mt-4">
              Nos preocupamos por la salud y el bienestar de cada animalito que
              llega a nosotros.
            </p>
          </div>
        </div>

        {/* Servicios  */}

        <h2 className="text-4xl text-black font-bold text-center pt-5 mb-4">
          Servicios
        </h2>
        <div className="flex flex-col md:flex-row m-4 justify-center items-center gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div
              className="bg-gray-400 rounded-lg p-4 text-center"
              style={boxStyle}
            >
              <StyledImage
                imageSrc="/assets/Images/Peluqueria.png"
                imageStyle={imageStyles}
                textStyles={textStyles}
                text="Peluqueria"
              />
            </div>

            <div
              className="bg-gray-400 rounded-lg  p-4 text-center"
              style={boxStyle}
            >
              <StyledImage
                imageSrc="/assets/Images/PaseosIndividuales.png"
                imageStyle={imageStyles}
                textStyles={textStyles}
                text="Paseos individuales"
              />
            </div>

            <div
              className="bg-gray-400 rounded-lg  p-4 text-center"
              style={boxStyle}
            >
              <StyledImage
                imageSrc="/assets/Images/PaseosGrupales.png"
                imageStyles={imageStyles}
                textStyles={textStyles}
                text="Paseos grupales"
              />
            </div>

            <div
              className="bg-gray-400 rounded-lg  p-4 text-center"
              style={boxStyle}
            >
              <StyledImage
                imageSrc="/assets/Images/Veterinario.png"
                imageStyles={imageStyles}
                textStyles={textStyles}
                text="Veterinario"
              />
            </div>
            <div
              className="bg-gray-400 rounded-lg  p-4 text-center"
              style={boxStyle}
            >
              <StyledImage
                imageSrc="/assets/Images/DietasEspeciales.png"
                imageStyles={imageStyles}
                textStyles={textStyles}
                text="Dietas especiales"
              />
            </div>

            <div
              className="bg-gray-400 rounded-lg  p-4 text-center"
              style={boxStyle}
            >
              <StyledImage
                imageSrc="/assets/Images/JuegosActividades.png"
                imageStyles={imageStyles}
                textStyles={textStyles}
                text="Juegos y actividades"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
