import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../../context/SearchContext";
import DogHome from "/assets/Images/DogHome.jpeg";
import StyledImage from "./StyledImage";
import "./Home.css";

import Hero from "../../hero";
import Offer from "../../offer";
import Services from "../../services";

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
        <div className="mt-5 sm:mt-20 mb-10 w-[95%] sm:w-[80%] mx-auto">
          <p className="text-lg sm:text-2xl font-semibold text-center text-gray-700 mb-8">
            En Doggy&#39;s queremos que estes tranquilo y confiado de que tu
            mascota está en buenas manos con nosotros. Por eso, queremos
            contarte un poco sobre lo que tenemos para ofrecer.
          </p>
          <Offer />
        </div>

        {/* Servicios  */}
        <Services />
      </main>
    </>
  );
};

export default Home;
