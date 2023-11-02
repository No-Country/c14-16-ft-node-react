import CardServices from "./ui/card-services";

function Services() {
  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="container">
        <h2 className="text-4xl text-gray-700 font-bold text-center pt-5 mb-4">
          Servicios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          <CardServices
            name="Peluqueria"
            url={"/assets/Images/Peluqueria.png"}
          />
          <CardServices
            name="Paseos individuales"
            url={"/assets/Images/PaseosIndividuales.png"}
          />
          <CardServices
            name="Paseos grupales"
            url={"/assets/Images/PaseosGrupales.png"}
          />
          <CardServices
            name="Veterinario"
            url={"/assets/Images/Veterinario.png"}
          />
          <CardServices
            name="Dietas especiales"
            url={"/assets/Images/DietasEspeciales.png"}
          />
          <CardServices
            name="Juegos y actividades"
            url={"/assets/Images/JuegosActividades.png"}
          />
        </div>
      </div>
    </section>
  );
}

export default Services;