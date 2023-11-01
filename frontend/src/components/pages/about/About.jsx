import { useState } from "react";
import { Link } from "react-router-dom";
import CardAbout from "./CardAbout";
import CounterInfo from "./CounterInfo";
import ScrollTrigger from "react-scroll-trigger";
import { useFetch } from "../../../customHooks/useFetch";

import DogCat from "/assets/bg-001.jpg";
import "./About.css";

const About = () => {
  const [counterOn, setCounterOn] = useState(false);

  const { data, loading, errorFetch } = useFetch(
    "https://doggyhouse.azurewebsites.net/api/branches"
  );

  // Cards
  const cards = [
    {
      id: 1,
      title: "¿Quienes Somos?",
      desc: "Doggy’s House es la unión de distintas guarderías con sede en Buenos Aires y sucursales a lo largo del país; para que tus hijos peludos tengan siempre la mejor atención posible.",
      styles: "md:justify-end pr-4",
      side: "left",
    },
    {
      id: 2,
      title: "¿De donde nace la idea?",
      desc: "Doggy’s House nace de la iniciativa de un grupo de estudiantes de sistemas, viendo un problema en el mercado encontraron esta solución tanto para los dueños de las guarderías como para los dueños de facilitar la reserva y seguridad a la hora de pagar.",
      styles: "md:justify-start pl-4",
      side: "right",
    },
    {
      id: 3,
      title: "¿Por qué elegir Doggy’s House?",
      desc: "En Doogy’s house sabemos que la vida a veces puede complicarse. Nuestro objetivo es que viajes con tranquilidad y disfrutes de tus actividades favoritas sin la preocupación de quién cuidará a tu perro. Con cobertura veterinaria, fotos y videos semanales que recibirás y cuidadores verificados por el equipo de Doogy’s house. No volverás a tener dudas sobre dónde dejar a tu mascota cuando no te pueda acompañar.",
      styles: "md:justify-end pr-4",
      side: "left",
    },
  ];

  // Estilos
  const mainStyle = {
    backgroundImage: `url(${DogCat})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <main>
      <section style={mainStyle} className="px-4 py-8 md:px-0">
        <div className="container mx-auto">
<<<<<<< HEAD
          <h1 className="py-32 text-center text-white text-6xl">
=======
          <h1 className="py-16 text-center text-black text-4xl font-bold font-roboto">
>>>>>>> origin/frontend
            Sobre Nosotros
          </h1>
        </div>
        <div className="flex flex-col gap-16 mx-auto">
          {cards.map((card) => (
            <CardAbout
              key={card.id}
              title={card.title}
              text={card.desc}
              styles={card.styles}
              side={card.side}
            />
          ))}
        </div>
      </section>
      <section className="p-16 container flex flex-col items-center mx-auto mt-8">
        <h2 className="mb-16 text-4xl text-center font-bold font-roboto">
          Doggy’s House en números
        </h2>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          {counterOn && (
            <article className="mb-16 flex flex-col md:flex-row gap-16 justify-center">
              <CounterInfo text="Días reservados" topCounter={50} />
              <CounterInfo
                text="Sucursales Habilitadas"
                topCounter={data?.result?.length}
              />
              <CounterInfo text="Reseñas de 5 estrellas" topCounter={100} />
            </article>
          )}
        </ScrollTrigger>
        <Link id="search" to="/#searchForm">
          Buscar una guardería
        </Link>
      </section>
    </main>
  );
};

export default About;
