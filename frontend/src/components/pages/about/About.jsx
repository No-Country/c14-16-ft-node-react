
const About = () => {
    return (
        <div className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-semibold text-center mb-8">
                    En Dog Garden, ¡Tu Mascota Está en Buenas Manos!
                </h1>
                <p className="text-lg text-center mb-8">
                    En Dog Garden queremos que siempre estés tranquilo y confiado de que
                    tu mascota está en buenas manos con nosotros. Por eso, queremos
                    contarte un poco sobre lo que tenemos para ofrecer.
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    {/* Box 1 */}
                    <div className="md:w-1/3 bg-white rounded-lg shadow-md p-4 text-center">
                        <img
                            src="imagen1.jpg"
                            alt="Imagen 1"
                            className="w-32 h-32 mx-auto rounded-full"
                        />
                        <p className="mt-4">
                            Nuestro equipo de expertos está dedicado al cuidado de tu mascota.
                        </p>
                    </div>

                    {/* Box 2 */}
                    <div className="md:w-1/3 bg-white rounded-lg shadow-md p-4 text-center">
                        <img
                            src="imagen2.jpg"
                            alt="Imagen 2"
                            className="w-32 h-32 mx-auto rounded-full"
                        />
                        <p className="mt-4">
                            Ofrecemos un ambiente seguro y divertido para que tu mascota se
                            sienta como en casa.
                        </p>
                    </div>

                    {/* Box 3 */}
                    <div className="md:w-1/3 bg-white rounded-lg shadow-md p-4 text-center">
                        <img
                            src="imagen3.jpg"
                            alt="Imagen 3"
                            className="w-32 h-32 mx-auto rounded-full"
                        />
                        <p className="mt-4">
                            Nos preocupamos por la salud y el bienestar de cada animalito que
                            llega a nosotros.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
