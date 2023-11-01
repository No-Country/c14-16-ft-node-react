import DogHome from "/assets/Images/DogHome.webp";
import "./Home.css";

import Hero from "../../hero";
import Offer from "../../offer";
import Services from "../../services";
import Prices from "../../prices";

const Home = () => {
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
          <p className="text-lg sm:text-2xl font-semibold font-josefin text-center text-gray-700 mb-8">
            En Doggy&#39;s queremos que estes tranquilo y confiado de que tu
            mascota está en buenas manos con nosotros. Por eso, queremos
            contarte un poco sobre lo que tenemos para ofrecer.
          </p>
          <Offer />
        </div>
        <hr className="border-2 border-primary mb-10" />
        {/* Servicios  */}
        <Services />
      </main>
    </>
  );
};

export default Home;
