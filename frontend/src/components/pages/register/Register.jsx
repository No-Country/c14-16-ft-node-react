import { useState } from "react";
import { Link } from "react-router-dom";
import ImageBlock from "../../ui/image-block";
import Input from "../../ui/Input";
import Button from "../../ui/button";
import { FcGoogle } from "react-icons/fc";
import Label from "../../ui/label";
import { RiImageAddLine } from "react-icons/ri";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    adress: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = "Por favor, ingresa un nombre de usuario.";
    }
    if (!formData.email) {
      newErrors.email = "Por favor, ingresa un correo electrónico válido.";
    }
    if (!formData.phone) {
      newErrors.phone = "Por favor, ingresa un telefono.";
    }
    if (!formData.adress) {
      newErrors.adress = "Por favor, ingresa una dirección.";
    }
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres.";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Aquí puedes agregar la lógica para enviar los datos de registro al servidor
      console.log("Datos enviados:", formData);
    }
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
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 ">
          <Label label="Nombre de Usuario" clase="mb-0 text-lg" />
          <Input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            errors={errors.username}
            classInput="py-2"
          />
          <Label label="Telefono" clase="mb-0 text-lg" />
          <Input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            errors={errors.username}
            classInput="py-2"
          />
          <Label label="Direccion" clase="mb-0 text-lg" />
          <Input
            type="text"
            name="adress"
            value={formData.adress}
            onChange={handleChange}
            errors={errors.username}
            classInput="py-2"
          />
          <div className="flex justify-end">
            <button className="flex items-center gap-3 py-2 px-3 bg-primary rounded-lg cursor-pointer">
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
            errors={errors.email}
            classInput="py-2"
          />
          <Label label="Contraseña" clase="mb-0 text-lg" />
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            errors={errors.password}
            classInput="py-2"
          />
          <Label label="Confirmar contraseña" clase="mb-0 text-lg" />
          <Input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            errors={errors.confirmPassword}
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
        </form>
      </div>
    </div>
  );
}

export default Register;
