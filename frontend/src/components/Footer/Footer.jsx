import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto">
                <div className="md:flex md:justify-between items-center">
                    <div className="mb-4 text-center md:text-left md:w-1/2 md:pr-8">
                        <h2 className="text-2xl text-center font-bold mb-2">Sobre Doggy&apos;s House</h2>
                        <p className="mb-6">Somos una empresa dedicada al cuidado de mascotas. Conoce más sobre nosotros.</p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:w-1/2">
                        <div className="mb-4 md:mb-0 md:w-1/2">
                            <h3 className="text-xl font-semibold mb-2">Enlaces</h3>
                            <ul className="mb-4 md:mb-0">
                                <li className="mb-2">
                                    <Link to="/contacto" className="hover:underline">Contáctenos</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/about" className="hover:underline">Quiénes Somos</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/trabaja-con-nosotros" className="hover:underline">Trabajá con nosotros</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-4 ml-3 md:mb-0 md:w-1/2 md:text-center">
                            <h3 className="text-xl font-semibold mb-2 text-center">Contacto</h3>
                            <p className="mb-2 text-justify">Tel: +54 11 2345-6789</p>
                            <p className="mb-2 text-justify">Av. Paseo Colón 746 Piso 1 | 1063ACU | CABA | Argentina</p>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-600 mt-8 pt-4 text-center">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Doggy&apos;s House.com. Todos los derechos reservados.
                        <a href="/assets/files/Terminos.pdf" target="_blank" className="ml-2 hover:underline">
                            Términos y Condiciones
                        </a>
                        <a href="/assets/files/Privacidad.pdf" target="_blank" className="ml-2 hover:underline">
                            Política de Privacidad
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
