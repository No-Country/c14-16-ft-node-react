import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../../context/SearchContext";
import DogHome from "/assets/Images/DogHome.jpeg";
import StyledImage from "./StyledImage";
import "./Home.css";

import Hero from "../../hero";
import Offer from "../../offer";

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

      <main className="bg-gray-100 py-8  mx-auto">
        <div className="mt-20 mb-10 w-[80%] mx-auto">
          <p className="text-2xl font-semibold text-center text-gray-700 mb-8">
            En Doggy&#39;s queremos que estes tranquilo y confiado de que tu
            mascota está en buenas manos con nosotros. Por eso, queremos
            contarte un poco sobre lo que tenemos para ofrecer.
          </p>
          <Offer />
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
