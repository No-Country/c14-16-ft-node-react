import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ImageBlock from "../../ui/image-block";
import Input from "../../ui/inputs";
import Button from "../../ui/button";
import { FcGoogle } from "react-icons/fc";
import Label from "../../ui/label";
import AlertaContext from "../../../context/alertas/alertaContext";
import Modal from "../../ui/modal";

function Login() {
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (email.trim() === "" || password.trim() === "") {
      mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
      return;
    }
    if (password.length < 6) {
      mostrarAlerta(
        "La contraseña debe tener al menos 6 caracteres.",
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
    setFormData({
      password: "",
      email: "",
    });
  };
  const { password, email } = formData;
  return (
    <div className="min-h-screen container grid grid-cols-1 lg:grid-cols-2 p-5 mx-auto">
      <ImageBlock
        url="/assets/gatito.webp"
        clase="w-[60%]"
        claseSection="h-[100%]"
      />
      <div className="bg-white p-8 rounded shadow-2xl shadow-black/30 w-[80%] mx-auto h-[100%]">
        <h2 className="text-2xl font-semibold mb-6">Iniciar sesión</h2>
        {alerta ? <Modal title="Error" msg={alerta.msg} tipo="error" /> : null}
        <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
          <Label label="Correo Electronico" />
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <Label label="Contraseña" />
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <div className="">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 leading-tight" />
              <span className="text-sm text-gray-600">Recordar contraseña</span>
            </label>
          </div>
          <div>
            <Button type="submit" label="Iniciar sesión" />
          </div>
          <div className="text-sm text-gray-600">
            ¿No estás registrado?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Regístrate aquí
            </Link>
            <span className="text-sm mx-2">|</span>
            <Link
              to="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          <div className="">
            <hr className="border-[2px]" />
            <div className="flex justify-center">
              <span className="px-4 -mt-4 bg-white">or</span>
            </div>
          </div>
          <button className="bg-primary text-white font-semibold flex justify-center items-center w-full py-3 gap-4 rounded-lg border-2 hover:bg-transparent hover:border-primary hover:text-primary  transition-colors duration-300 ">
            <FcGoogle className="text-2xl" />
            Inciar con Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
