import { Link } from "react-router-dom";
import CardAbout from "./CardAbout";
import DogCat from "/assets/bg-001.jpg";
import Hero from "/assets/carrusel1.jpg";
import "./About.css";
import { useFetch } from "../../../customHooks/useFetch";
import CounterInfo from "./CounterInfo";

const About = () => {
  const { data, loading, errorFetch } = useFetch(
    "https://doggyhouse.azurewebsites.net/api/branches"
  );

  console.log(data);

  // Cards
  const cards = [
    {
      id: 1,
      title: "¿Quienes Somos?",
      desc: "Doggy’s House es la unión de distintas guarderías con sede en Buenos Aires y sucursales a lo largo del país; para que tus hijos peludos tengan siempre la mejor atención posible.",
      styles: "md:justify-end pr-4",
    },
    {
      id: 2,
      title: "¿De donde nace la idea?",
      desc: "Doggy’s House nace de la iniciativa de un grupo de estudiantes de sistemas, viendo un problema en el mercado encontraron esta solución tanto para los dueños de las guarderías como para los dueños de facilitar la reserva y seguridad a la hora de pagar.",
      styles: "md:justify-start pl-4",
    },
    {
      id: 3,
      title: "¿Por qué elegir Doggy’s House?",
      desc: "En Doogy’s house sabemos que la vida a veces puede complicarse. Nuestro objetivo es que viajes con tranquilidad y disfrutes de tus actividades favoritas sin la preocupación de quién cuidará a tu perro. Con cobertura veterinaria, fotos y videos semanales que recibirás y cuidadores verificados por el equipo de Doogy’s house. No volverás a tener dudas sobre dónde dejar a tu mascota cuando no te pueda acompañar.",
      styles: "md:justify-end pr-4",
    },
  ];

  // Estilos
  const mainStyle = {
    backgroundImage: `url(${DogCat})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const heroStyle = {
    backgroundImage: `url(${Hero})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
      <header style={heroStyle}>
        <div className="py-64 container mx-auto">
          <h1 className=" text-center text-white text-6xl">Sobre Nosotros</h1>
        </div>
      </header>
      <main>
        <section style={mainStyle} className="px-4 py-32 md:px-0">
          <div className="flex flex-col gap-16 mx-auto">
            {cards.map((card) => (
              <CardAbout
                key={card.id}
                title={card.title}
                text={card.desc}
                styles={card.styles}
              />
            ))}
          </div>
        </section>
        <section className="p-16 container flex flex-col items-center mx-auto mt-8">
          <h2 className="mb-16 text-4xl text-center font-bold">
            Doggy’s House en numeros
          </h2>
          <article className="mb-16 flex flex-col md:flex-row gap-16 justify-center">
            <CounterInfo text="Días reservados" topCounter={data} />
            <CounterInfo
              text="Sucursales Habilitadas"
              topCounter={data?.result?.length}
            />
            <CounterInfo text="Reseñas de 5 estrellas" topCounter={data} />
          </article>
          <Link to="/">Buscar Guardería</Link>
        </section>
        F
      </main>
    </div>
  );
};

export default About;
