
import { Link } from "react-router-dom";
import CardAbout from "./CardAbout";
import DogCat from "/assets/bg-001.jpg";
import Hero from "/assets/carrusel1.jpg";
import "./About.css";

const About = () => {
  const texts = [
    " Doggy’s House es la unión de distintas guarderías porteñas como “Ciudad mascotera”, “Guardería Canina Belgrano R”, “Moni Guardería Canina”, “Rock&dog guardería canina”, “Ruta canina” y muchas otras más; para que tus hijos peludos tengan siempre la mejor atención posible.",
    "Doggy’s House nace de la iniciativa de un grupo de estudiantes de sistemas, viendo un problema en el mercado encontraron esta solución tanto para los dueños de las guarderías como para los dueños de facilitar la reserva y seguridad a la hora de pagar.",
    "En Doogy’s house sabemos que la vida a veces puede complicarse. Nuestro objetivo es que viajes con tranquilidad y disfrutes de tus actividades favoritas sin la preocupación de quién cuidará a tu perro. Con la cobertura veterinaria (si esta incluida), las fotos y videos semanales que recibirás y los cuidadores verificados por el equipo de Doogy’s house, no volverás a tener dudas sobre dónde dejar a tu mascota cuando no te pueda acompañar",
  ];
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
            <CardAbout
              title="¿Quienes Somos?"
              text={texts[0]}
              styles="md:justify-end pr-4"
            />
            <CardAbout
              title="¿De donde nace la idea?"
              text={texts[1]}
              styles="md:justify-start pl-4"
            />
            <CardAbout
              title="¿Por qué elegir Doggy’s House?"
              text={texts[2]}
              styles="md:justify-end pr-4"
            />
          </div>
        </section>
        <section className="p-16 container flex flex-col items-center mx-auto mt-8">
          <h2 className="mb-16 text-4xl text-center font-bold">
            Doggy’s House en numeros
          </h2>
          <article className="mb-16 flex flex-col md:flex-row gap-16 justify-center">
            <div className="mb-8 md:mb-0"> {/* Añadido un margen inferior */}
              <h4 className="text-4xl text-center font-bold">
                <span>1537</span>
              </h4>
              <p className="text-center">Días reservados el último mes</p>
            </div>
            <div className="mb-8 md:mb-0"> {/* Añadido un margen inferior */}
              <h4 className="text-4xl text-center font-bold">
                <span>8</span>
              </h4>
              <p className="text-center">Sucursales Habilitadas</p>
            </div>
            <div> {/* Eliminado el margen inferior para evitar que la última caja esté muy separada */}
              <h4 className="text-4xl text-center font-bold">
                <span>486</span>
              </h4>
              <p className="text-center">Reseñas de 5 estrellas</p>
            </div>
          </article>
          <Link to="/">Buscar Guardería</Link>
        </section>
        F
      </main>
    </div>
  );
};

export default About;