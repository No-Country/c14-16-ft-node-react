<<<<<<< HEAD
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { SearchContext } from "../../../context/SearchContext";

const Home = () => {
  const navigate = useNavigate();

  const { handleSearchTerm } = useContext(SearchContext);

  const userSearch = {
    place: "",
    petType: "",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(userSearch).includes("")) {
      alert("Todos los campos son obligatorios");
      return;
    }
    handleSearchTerm(userSearch);
    navigate("/search");
=======
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DogHome from '/assets/Images/DogHome.jpeg'
import StyledImage from './StyledImage';
import './Home.css';

const Home = () => {
  // const [tipoAnimal, setTipoAnimal] = useState("Perro");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/search');
  };

  const imageStyles = {
    background: '#FFA500',
  };

  const textStyles = {
    color: '#000',
    fontSize: '1.5em',
    fontWeight: 'bold',
    padding: '2px 4px',
  };

  const boxStyle = {
    background: '#FFA500',
  };

  const HeaderStyle = {
    backgroundImage: `url(${DogHome})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const HeaderContainerStyle = {
    height: "100vh",
>>>>>>> 6172c3eb16743b25e10d3e29fdda9257ab008752
  };

  return (
    <>
      <header style={HeaderStyle}>
        <div className="container mx-auto px-4 " style={HeaderContainerStyle}>
          <h1 className="text-4xl text-white font-semibold text-center pt-5 mb-4">
            Un lugar seguro para tu mascota
          </h1>
          <p className="text-2xl font-semibold text-center text-white mb-8">
            Guarderias que cuidan cada detalle para que tu mascota se sienta en como en casa,
            sin preocupaciones ni inquietudes. Aquí tendran un espacio para jugar, tambien tendran ricas comidas, jugaran y pasearan libremente.
            con los mejores profesionales y servicios de calidad.
          </p>
        </div>
        {/* Formulario de Búsqueda */}
        <div className="bg-gray-200 rounded-lg p-6 text-center w-full sm:w-3/5 md:w-2/5 mx-auto bg-opacity-5 backdrop-blur-md">
          <h2 className="text-lg font-semibold text-black mb-4">
            Reserva un lugar para tu peludito donde y cuando quieras
          </h2>
          <div className="flex justify-center">
            <form className="w-full max-w-md mb-8">
              <div className="flex flex-col items-center">
                <input
                  className="input-field"
                  type="text"
                  placeholder="Provincia, ciudad, localidad"
                  id="ciudad"
                  name="ciudad"
                />
                {/* <select
                  className="input-field"
                  id="tipo-animal"
                  name="tipo-animal"
                  value={tipoAnimal}
                  onChange={(e) => setTipoAnimal(e.target.value)}
                >
                  <option value="Perro">Perro</option>
                  <option value="Gato">Gato</option>
                  <option value="Otros">Otros</option>
                </select> */}

                <div className="fx-block">
                  <div className="toggle">
                    <div>
                      <input type="checkbox" id="toggles" />
                      <div data-unchecked="Perro" data-checked="Gato">
                      </div>
                    </div>
                  </div>
                </div>


                <button
                  className="w-full max-w-lg py-4 text-xl font-bold"
                  style={{
                    background: '#FFA500',
                    color: 'black',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '1rem 2rem',
                    fontSize: '1.5rem',
                    transition: 'background 0.3s',
                  }}
                  type="submit"
                  onClick={handleClick}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#c98405';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#FFA500';
                    e.currentTarget.style.color = 'black';
                  }}
                >
                  Buscar
                </button>


              </div>
            </form>
          </div>
        </div>
      </header>

      <main className="bg-gray-100 py-8">
        <p className="text-2xl font-semibold text-center text-black mb-8">
          En Doggy&#39;s queremos que estes tranquilo y confiado de que
          tu mascota está en buenas manos con nosotros. Por eso, queremos
          contarte un poco sobre lo que tenemos para ofrecer.
        </p>
        <div className="flex flex-col md:flex-row m-4 justify-center items-center gap-6">
          {/* Box 1 */}
          <div
            className="md:w-1/3 bg-gray-400 rounded-lg shadow-md p-4 text-center"
            style={{
              background: '#FFA500',
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
              background: '#FFA500',
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
              background: '#FFA500',
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

<<<<<<< HEAD
        <div className="p-4 text-center grid grid-cols-2 md:grid-cols-3 gap-4">
          <h3 className="text-2xl font-bold text-center m-4 col-span-2 md:col-span-3">
            Servicios incluidos
          </h3>

          <div className="bg-gray-400 rounded-lg shadow-md p-4 text-center">
            <p className="text-white font-bold py-2 px-4">Peluqueria</p>
            <img
              src="./assets/pelu.png"
              alt="peluqueria"
              width={45}
              className="pt-2 mx-auto"
            />
          </div>

          <div className="bg-gray-400 rounded-lg shadow-md p-4 text-center">
            <p className="text-white font-bold py-2 px-4">Dietas especiales</p>
            <img
              src="./assets/food.png"
              alt="Foot dog"
              width={70}
              className=" mx-auto"
            />
          </div>

          <div className="bg-gray-400 rounded-lg shadow-md p-4 text-center">
            <p className="text-white font-bold py-2 px-4">Paseos personales</p>
            <img
              src="./assets/menDogWalk.png"
              alt="men Dog Walk"
              width={45}
              className="mx-auto"
            />
          </div>

          <div className="bg-gray-400 rounded-lg shadow-md p-4 text-center">
            <p className="text-white font-bold py-2 px-4">Paseos sociales</p>
            <img
              src="./assets/walkWithDog.png"
              alt="walk with dog"
              width={65}
              className="mx-auto"
            />
          </div>

          <div className="bg-gray-400 rounded-lg shadow-md p-4 text-center">
            <p className="text-white font-bold py-2 px-4 ">Veterinaria</p>
            <img
              src="./assets/veterinario.png"
              alt="Veterinaria"
              width={50}
              className="pt-2 mx-auto"
            />
          </div>

          <div className="bg-gray-400 rounded-lg shadow-md p-4 text-center">
            <p className="text-white font-bold py-2 px-4">Actividades</p>
            <img
              src="./assets/playing.png"
              alt="Playing"
              width={70}
              className="mx-auto"
            />
          </div>
        </div>

        <div className="p-4 text-center">
          <p className="text-lg font-semibold text-center mt-4 mb-8">
            Guarderías que cuidan cada detalle para que tu peludito se sienta en
            casa, donde podrán ser bañados, jugar con otras perritos, comer
            comida balanceada y pasear libremente.
          </p>
        </div>

        {/* Formulario de Búsqueda */}
        <div className="mt-8">
          <p className="text-lg font-semibold text-center mb-4">
            Reserva un lugar para tu peludito donde y cuando quieras
          </p>
          <div className="flex justify-center">
            <form className="w-full max-w-md" onSubmit={handleSubmit}>
              <div className="flex flex-col items-center">
                <input
                  className="input-field"
                  type="text"
                  placeholder="Provincia, ciudad, localidad"
                  id="ciudad"
                  name="ciudad"
                  onChange={(e) => {
                    userSearch.place = e.target.value;
                  }}
                />
                <select
                  className="input-field"
                  id="tipo-animal"
                  name="tipo-animal"
                  onChange={(e) => (userSearch.petType = e.target.value)}
                >
                  <option value="">Seleccione una Mascota</option>
                  <option value="Perro">Perro</option>
                  <option value="Gato">Gato</option>
                  <option value="Otros">Otros</option>
                </select>
                <button
                  className="w-full max-w-lg py-4 md:mx-auto text-xl font-bold bg-amber-600 rounded-md"
                  type="submit"
                >
                  Buscar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
=======
        <h2 className="text-4xl text-black font-bold text-center pt-5 mb-4">Servicios</h2>
        <div className="flex flex-col md:flex-row m-4 justify-center items-center gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-400 rounded-lg p-4 text-center" style={boxStyle}>
              <StyledImage
                imageSrc="/assets/Images/Peluqueria.png"
                imageStyle={imageStyles}
                textStyles={textStyles}
                text="Peluqueria"
              />
            </div>

            <div className="bg-gray-400 rounded-lg  p-4 text-center" style={boxStyle}>
              <StyledImage
                imageSrc="/assets/Images/PaseosIndividuales.png"
                imageStyle={imageStyles}
                textStyles={textStyles}
                text="Paseos individuales"
              />
            </div>

            <div className="bg-gray-400 rounded-lg  p-4 text-center" style={boxStyle}>
              <StyledImage
                imageSrc="/assets/Images/PaseosGrupales.png"
                imageStyles={imageStyles}
                textStyles={textStyles}
                text="Paseos grupales"
              />
            </div>

            <div className="bg-gray-400 rounded-lg  p-4 text-center" style={boxStyle}>
              <StyledImage
                imageSrc="/assets/Images/Veterinario.png"
                imageStyles={imageStyles}
                textStyles={textStyles}
                text="Veterinario"
              />
            </div>
            <div className="bg-gray-400 rounded-lg  p-4 text-center" style={boxStyle}>
              <StyledImage
                imageSrc="/assets/Images/DietasEspeciales.png"
                imageStyles={imageStyles}
                textStyles={textStyles}
                text="Dietas especiales"
              />
            </div>

            <div className="bg-gray-400 rounded-lg  p-4 text-center" style={boxStyle}>
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
>>>>>>> 6172c3eb16743b25e10d3e29fdda9257ab008752
  );
};

export default Home;
