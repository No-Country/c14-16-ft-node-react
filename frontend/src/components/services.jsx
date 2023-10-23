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
        {/*    <div className="flex flex-col md:flex-row m-4 justify-center items-center gap-6">
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
      </div> */}
      </div>
    </section>
  );
}

export default Services;
