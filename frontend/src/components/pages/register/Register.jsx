import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ImageBlock from "../../ui/image-block";
import Input from "../../ui/inputs";
import Button from "../../ui/button";
import { FcGoogle } from "react-icons/fc";
import Label from "../../ui/label";
import { RiImageAddLine } from "react-icons/ri";
import AlertaContext from "../../../context/alertas/alertaContext";
import Modal from "../../ui/modal";
import Confetti from "../../ui/confetti";

function Register() {
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const [exito, setExito] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    adress: "",
    password: "",
    confirmPassword: "",
    profile_picture: null,
  });
  const {
    username,
    email,
    phone,
    adress,
    password,
    confirmPassword,
    profile_picture,
  } = formData;

  const handleChange = (e) => {
    if (e.target.name === "profile_picture") {
      const file = e.target.files ? e.target.files[0] : null;
      setFormData({ ...formData, [e.target.name]: file });
    } else setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneRegex = /^\d{1,10}$/;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (
      username.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === "" ||
      adress.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      console.log("Campos obligatorios vacíos");
      mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
      return;
    }
    if (password.length < 6 || confirmPassword.length < 6) {
      mostrarAlerta(
        "La contraseña debe tener al menos 6 caracteres.",
        "alerta-error"
      );
      return;
    }
    if (password !== confirmPassword) {
      mostrarAlerta("Las contraseñas no coinciden.");
      return;
    }
    if (!phoneRegex.test(phone)) {
      mostrarAlerta(
        "El teléfono debe contener solo números y tener un máximo de 10 dígitos.",
        "alerta-error"
      );
      return;
    }
    if (!emailRegex.test(email)) {
      mostrarAlerta(
        "La dirección de correo electrónico no es válida.",
        "alerta-error"
      );
      return;
    }

    setExito(true);

    setFormData({
      username: "",
      email: "",
      phone: "",
      adress: "",
      password: "",
      confirmPassword: "",
      profile_picture: null,
    });

    setTimeout(() => {
      setExito(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen  container grid grid-cols-1 lg:grid-cols-2 p-5 mx-auto">
      <ImageBlock
        url="/assets/labrador.webp"
        clase="w-[100%]"
        claseSection="h-[100%]"
      />

      <div className="bg-white px-8 shadow-2xl shadow-black/30 h-[100%] w-[80%] mx-auto ">
        <h2 className="text-2xl font-semibold mb-6">Registrarse</h2>
        {alerta ? <Modal title="Error" msg={alerta.msg} tipo="error" /> : null}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 ">
          <Label label="Nombre de Usuario" clase="mb-0 text-lg" />
          <Input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            classInput="py-2"
          />
          <Label label="Telefono" clase="mb-0 text-lg" />
          <Input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            classInput="py-2"
          />
          <Label label="Direccion" clase="mb-0 text-lg" />
          <Input
            type="text"
            name="adress"
            value={formData.adress}
            onChange={handleChange}
            classInput="py-2"
          />
          <div className="flex justify-end items-center space-x-2">
            {profile_picture ? (
              <p className="text-gray-500">{profile_picture.name}</p>
            ) : null}
            <input
              type="file"
              id="imageInput"
              style={{ display: "none" }}
              accept="image/png, image/jpg"
              name="profile_picture"
              onChange={handleChange}
            />
            <button
              className="flex items-center gap-3 py-2 px-3 bg-primary rounded-lg cursor-pointer"
              onClick={() => document.getElementById("imageInput").click()}
              type="button"
            >
              <RiImageAddLine className="text-white text-lg" />
              <span className="text-gray-200 font-semibold hover:text-white">
                Selecciona una imagen
              </span>
            </button>
          </div>
          <Label label="Correo electrónico" clase="mb-0 text-lg" />
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            classInput="py-2"
          />
          <Label label="Contraseña" clase="mb-0 text-lg" />
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            classInput="py-2"
          />
          <Label label="Confirmar contraseña" clase="mb-0 text-lg" />
          <Input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            classInput="py-2"
          />

          <div>
            <Button type="submit" label="Registrase" clase="py-2" />
          </div>
          <div className="mt-4 text-sm text-gray-600">
            ¿Ya estás registrado?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Inicia sesión aquí
            </Link>
          </div>
          <div className="">
            <hr className="border-[2px]" />
            <div className="flex justify-center">
              <span className="px-4 -mt-4 bg-white">or</span>
            </div>
          </div>
          <button className="bg-primary text-white font-semibold flex justify-center items-center w-full py-2 gap-4 rounded-lg border-2 hover:bg-transparent hover:border-primary hover:text-primary  transition-colors duration-300">
            <FcGoogle className="text-2xl" />
            Registrarse con Google
          </button>
          {exito ? (
            <>
              <Modal
                title="Registro exitoso"
                msg="Gracias, ya eres parte de la familia"
                tipo="OK"
              />
              <Confetti />
            </>
          ) : null}
        </form>
      </div>
    </div>
  );
}

export default Register;
