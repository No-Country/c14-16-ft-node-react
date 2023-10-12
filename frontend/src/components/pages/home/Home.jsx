

const Home = () => {
  const buscarEstablecimientos = () => {
    // agregar la lógica de búsqueda similar a la anterior respuesta.
    // reemplazar la simulación de resultados ficticios con tu lógica real.
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center mb-8">
          Un lugar seguro para tu mascota
        </h1>
        <p className="text-lg font-semibold text-center mb-8">
          En Dog Garden queremos que siempre estés tranquilo y confiado de que
          tu mascota está en buenas manos con nosotros. <br /> Por eso, queremos
          contarte un poco sobre lo que tenemos para ofrecer.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Box 1 */}
          <div className="md:w-1/3 bg-gray-400 rounded-lg shadow-md p-4 text-center">
            <img
              src="/assets/dogWork.jpg"
              alt="Imagen 1"
              className="w-full h-48 mx-auto rounded-lg"
            />
            <h3 className="text-2xl font-semibold text-center m-4">Dog Working</h3>
            <p className="mt-4">
              Nuestro equipo de expertos está dedicado al cuidado de tu mascota.
            </p>
          </div>

          {/* Box 2 */}
          <div className="md:w-1/3 bg-gray-400 rounded-lg shadow-md p-4 text-center">
            <img
              src="/assets/dogOffice.jpg"
              alt="Imagen 2"
              className="w-full h-48 mx-auto rounded-lg"
            />
            <h3 className="text-2xl font-semibold text-center m-4">Dog Office</h3>
            <p className="mt-4">
              Ofrecemos un ambiente seguro y divertido para que tu mascota se
              sienta como en casa.
            </p>
          </div>

          {/* Box 3 */}
          <div className="md:w-1/3 bg-gray-400 rounded-lg shadow-md p-4 text-center">
            <img
              src="/assets/dogHotel.jpg"
              alt="Imagen 3"
              className="w-full h-48 mx-auto rounded-lg"
            />
            <h3 className="text-2xl font-semibold text-center m-4">Dog Hotel</h3>
            <p className="mt-4">
              Nos preocupamos por la salud y el bienestar de cada animalito que
              llega a nosotros.
            </p>
          </div>
        </div>

        {/* Servicios incluidos */}

        <div className="p-4 text-center grid grid-cols-2 md:grid-cols-3 gap-4">
          <h3 className="text-2xl font-bold text-center m-4 col-span-2 md:col-span-3">Servicios incluidos</h3>

          <div className="bg-gray-400 rounded-lg shadow-md p-4 text-center">
            <p className="text-white font-bold py-2 px-4">Peluqueria</p>
            <img src="./assets/pelu.png" alt="peluqueria" width={45} className="pt-2 mx-auto" />
          </div>

          <div className="bg-gray-400 rounded-lg shadow-md p-4 text-center">
            <p className="text-white font-bold py-2 px-4" >
              Dietas especiales
            </p>
            <img src="./assets/food.png" alt="Foot dog" width={70} className=" mx-auto" />
          </div>

          <div className="bg-gray-400 rounded-lg shadow-md p-4 text-center">
            <p className="text-white font-bold py-2 px-4">
              Paseos personales
            </p>
            <img src="./assets/menDogWalk.png" alt="men Dog Walk" width={45} className="mx-auto" />
          </div>


          <div className="bg-gray-400 rounded-lg shadow-md p-4 text-center">
            <p className="text-white font-bold py-2 px-4">
              Paseos sociales
            </p>
            <img src="./assets/walkWithDog.png" alt="walk with dog" width={65} className="mx-auto" />
          </div>

          <div className="bg-gray-400 rounded-lg shadow-md p-4 text-center">
            <p className="text-white font-bold py-2 px-4 " >
              Veterinaria 
            </p>
            <img src="./assets/veterinario.png" alt="Veterinaria" width={50} className="pt-2 mx-auto" />
          </div>

          <div className="bg-gray-400 rounded-lg shadow-md p-4 text-center">
            <p className="text-white font-bold py-2 px-4" >
              Actividades
            </p>
            <img src="./assets/playing.png" alt="Playing" width={70} className="mx-auto" />
          </div>
        </div>

        <div className="p-4 text-center">
          <p className="text-lg font-semibold text-center mt-4 mb-8">
            Guarderías que cuidan cada detalle para que tu peludito se sienta en casa, donde podrán ser bañados, jugar con otras perritos, comer comida balanceada y pasear libremente.
          </p>
        </div>

        {/* Formulario de Búsqueda */}
        <div className="mt-8">
          <p className="text-lg font-semibold text-center mb-4">
            Reserva un lugar para tu peludito donde y cuando quieras
          </p>
          <div className="flex justify-center">
            <form className="w-full max-w-md">
              <div className="flex flex-col items-center">
                <input
                  className="appearance-none bg-transparent border-b-2 border-gray-500 w-full text-gray-700 py-1 px-2 leading-tight mb-4 focus:outline-none"
                  type="text"
                  placeholder="La Plata"
                  id="ciudad"
                  name="ciudad"
                />
                <input
                  className="appearance-none bg-transparent border-b-2 border-gray-500 w-full text-gray-700 py-1 px-2 leading-tight mb-4 focus:outline-none"
                  type="text"
                  placeholder="¿Qué animalito tienes?"
                  id="tipo-animal"
                  name="tipo-animal"
                />
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={buscarEstablecimientos}
                >
                  Buscar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
