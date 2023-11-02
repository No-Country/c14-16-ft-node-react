import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";
import Modal from "react-modal";
import emailjs from "@emailjs/browser";

Modal.setAppElement("#root");

const Footer = () => {
  const refForm = useRef();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_u911zeg";
    const templateId = "template_3i8w50b";
    const apikey = "C3LoktKQHrny5PP2Q";

    setLoading(true);

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apikey)
      .then((result) => {
        console.log(result.text);
        resetForm();
        closeModal();
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const resetForm = () => {
    // Limpia los campos del formulario
    refForm.current.reset();
  };
  const phoneNumber = "+5491127805550";

  const getWhatsAppLink = () => {
    const message = "Hola, ¿en qué puedo ayudarte?";
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const googleMapsUrl =
    "https://www.google.com/maps?q=Av.+Pres.+Figueroa+Alcorta+5200+CABA+Argentina";

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="container mx-auto px-3">
        <div className="md:flex md:justify-between items-center">
          <div className="mb-4 text-center md:text-left md:w-1/2 md:pr-8">
            <h2 className="text-2xl text-center font-bold mb-2 font-roboto">
              Sobre Doggy&apos;s House
            </h2>
            <p className="mb-6 font-josefin">
              En Doggy&apos;s House, nos preocupamos por tus mascotas como si
              fueran de tu familia. Nuestro equipo apasionado por los animales
              proporciona un ambiente seguro y acogedor para tus amigos peludos.
              Nos comprometemos a cuidar de su bienestar, asegurándonos de que
              estén felices y saludables. Si deseas saber más sobre nosotros y
              te invitamos a explorar nuestra historia y lo que ofrecemos.
            </p>
          </div>
          <div className="mb-4 md:w-1/2">
            <h3 className="text-xl font-semibold mb-2 font-roboto">Enlaces</h3>
            <ul className="mb-4 md:mb-0">
              <li className="mb-2">
                <Link to="/about" className="hover:underline">
                  Quiénes Somos
                </Link>
              </li>
              <li className="mb-2">
                <button
                  onClick={openModal}
                  className="hover:underline"
                  style={{
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                  }}
                >
                  Envianos un email
                </button>
              </li>
              <li className="mb-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Ubicación en Google Maps
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4 md:w-1/2">
            <h3 className="text-xl font-semibold mb-2">Contacto</h3>
            <p className="mb-2">Tel: +549-12345678 </p>
            <li
              className="mb-2"
              style={{ display: "flex", alignItems: "center" }}
            >
              <a
                href={getWhatsAppLink()}
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span style={{ paddingRight: "5px", display: "flex" }}>
                  {" "}
                  WhatsApp
                  <BsWhatsapp
                    style={{
                      alignItems: "center",
                      textAlign: "center",
                      width: "50px",
                    }}
                  />
                </span>
              </a>
            </li>
            <p>
              Av. Pres. Figueroa Alcorta | 5200 | C1426CBO | CABA | Argentina
            </p>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-4 text-center">
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

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Formulario de Trabaja con nosotros"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            backdropFilter: "blur(5px)",
          },
          content: {
            maxWidth: "80%",
            maxHeight: "70%",
            margin: "0 auto",
            padding: "20px",
            background: "transparent",
            borderRadius: "8px",
            color: "#000",
            fontSize: "1em",
            backdropFilter: "blur(2px)",
          },
        }}
      >
        <h2
          style={{
            color: "white",
            fontFamily: "Serif",
            fontWeight: "bolder",
            fontSize: "24px",
            textAlign: "center",
          }}
        >
          En que te podemos ayudar ?
        </h2>

        <form ref={refForm} action="" onSubmit={handleSubmit}>
          <div
            className="mb-4"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <label htmlFor="name" style={{ width: "80%" }}>
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              name="username"
              placeholder="Ingrese su nombre"
              required
              style={{
                width: "80%",
                padding: "8px",
                margin: "4px 0",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div
            className="mb-4"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <label htmlFor="email" style={{ width: "80%" }}>
              Correo Electrónico:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="ingresa_tu@email.com"
              style={{
                width: "80%",
                padding: "8px",
                margin: "4px 0",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div
            className="mb-4"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <label htmlFor="message" style={{ width: "80%" }}>
              Mensaje:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Ingresa aquí tu mensaje"
              style={{
                width: "80%",
                padding: "8px",
                margin: "4px 0",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div>
            {loading ? (
              <div className="sk-cube-grid">
                <div className="sk-cube sk-cube1"></div>
                <div className="sk-cube sk-cube2"></div>
                <div className="sk-cube sk-cube3"></div>
                <div className="sk-cube sk-cube4"></div>
                <div className="sk-cube sk-cube5"></div>
                <div className="sk-cube sk-cube6"></div>
                <div className="sk-cube sk-cube7"></div>
                <div className="sk-cube sk-cube8"></div>
                <div className="sk-cube sk-cube9"></div>
              </div>
            ) : (
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover-bg-blue-600"
                style={{
                  display: "block",
                  margin: "20px auto",
                  minWidth: "30%",
                }}
              >
                Enviar
              </button>
            )}
          </div>
        </form>
        <br />
        <button
          onClick={closeModal}
          className="bg-red-500 hover-bg-red-600 text-white px-4 py-2 rounded"
          style={{ display: "block", margin: "auto", minWidth: "30%" }}
        >
          Cerrar
        </button>
      </Modal>
    </footer>
  );
};

export default Footer;
