import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="container mx-auto">
        <div className="md:flex md:justify-between items-center">
          <div className="mb-4 text-center md:text-left md:w-1/2 md:pr-8">
            <h2 className="text-2xl text-center font-bold mb-2 font-roboto">
              Sobre Doggy&apos;s House
            </h2>

            <p className="mb-6 font-josefin">
              En Doggy&apos;s House, entendemos que tus mascotas son parte de tu
              familia, y nuestro compromiso es garantizar que reciban el amor,
              cuidado y atención que merecen. Nuestro equipo de apasionados
              amantes de los animales está dedicado a brindar un entorno seguro
              y acogedor para tus peludos amigos. Estamos comprometidos a cuidar
              de su bienestar, asegurándonos de que estén felices y saludables
              en todo momento. Si deseas conocer más acerca de quiénes somos y
              cómo trabajamos, te invitamos a explorar nuestra historia y
              servicios.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center md:w-1/2">
            <div className="mb-4 md:mb-0 md:w-1/2">
              <h3 className="text-xl font-semibold mb-2 font-roboto">
                Enlaces
              </h3>
              <ul className="mb-4 md:mb-0">
                <li className="mb-2">
                  <Link to="/contacto" className="font-josefin hover:underline">
                    Contáctenos
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/about" className="font-josefin hover:underline">
                    Quiénes Somos
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/trabaja-con-nosotros"
                    className="font-josefin hover:underline"
                  >
                    Trabajá con nosotros
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-4 ml-3 md:mb-0 md:w-1/2 md:text-center font-josefin">
              <h3 className="text-xl font-semibold mb-2 text-center font-roboto">
                Contacto
              </h3>
              <p className="mb-2 text-justify">Tel: +54 11 2345-6789</p>
              <p className="mb-2 text-justify">
                Av. Paseo Colón 746 Piso 1 | 1063ACU | CABA | Argentina
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-4 text-center font-josefin">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Doggy&apos;s House.com. Todos los
            derechos reservados.
            <a
              href="/assets/files/Terminos.pdf"
              target="_blank"
              className="ml-2 hover:underline"
            >
              Términos y Condiciones
            </a>
            <a
              href="/assets/files/Privacidad.pdf"
              target="_blank"
              className="ml-2 hover:underline"
            >
              Política de Privacidad
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
