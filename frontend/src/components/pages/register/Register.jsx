import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ImageBlock from "../../ui/image-block";
import Input from "../../ui/inputs";
import Button from "../../ui/button";
import { FcGoogle } from "react-icons/fc";
// import { RiImageAddLine } from "react-icons/ri";
import { API_REGISTER } from "../../../constants/api";
import './Register.css';
function Register() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    profile_picture: null,
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === 'file' ? files[0] : value;

    if (name === 'confirmPassword') {
      if (formData.password !== newValue) {
        setErrors({ confirmPassword: 'Las contraseñas no coinciden' });
      } else {
        setErrors({ confirmPassword: '' });
      }
    }

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      setErrors({
        email: 'Campo requerido',
        password: 'Campo requerido',
        confirmPassword: 'Campo requerido',
      });
      return;
    } else if (formData.password !== formData.confirmPassword) {
      setErrors({ confirmPassword: 'Las contraseñas no coinciden' });
      return;
    }
    // Datos válidos, procede con la llamada fetch a la API
    setLoading(true);
    setErrors({});
    // Llamada fetch a la URL
    try {
      const response = await fetch(API_REGISTER, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error en la llamada a la API');
      }
      const data = await response.json();
      // Manejar la respuesta de la API aquí
      console.log('Respuesta de la API:', data);
      navigate('/login');
    } catch (error) {
      console.error('Error en la llamada a la API:', error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen container grid grid-cols-1 lg:grid-cols-2 p-5 mx-auto">
      <ImageBlock
        url="/assets/labrador.webp"
        clase="w-[100%]"
        claseSection="h-[100%]"
      />
      <div className="bg-white px-8 shadow-2xl shadow-black/30 h-[100%] w-[80%] mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Registrarse</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
          <Input
            type="text"
            name="name"
            label="Nombre de Usuario"
            value={formData.name}
            onChange={handleChange}
            errors={errors.name}
            classInput="py-2"
          />

          <Input
            type="text"
            name="phone"
            label="Telefono"
            value={formData.phone}
            onChange={handleChange}
            errors={errors.phone}
            classInput="py-2"
          />
          <Input
            type="text"
            name="address"
            label="Direccion"
            value={formData.address}
            onChange={handleChange}
            errors={errors.address}
            classInput="py-2"
          />
          <div className="flex justify-end">
            <input
              type="file"
              name="profile_picture"
              accept="image/*"
              onChange={handleChange}
            />
          </div>
          <Input
            type="email"
            name="email"
            label="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            errors={errors.email}
            classInput="py-2"
          />
          <Input
            type="password"
            name="password"
            label="Contraseña"
            value={formData.password}
            onChange={handleChange}
            errors={errors.password}
            classInput="py-2"
          />

          <Input
            type="password"
            name="confirmPassword"
            label="Confirmar contraseña"
            value={formData.confirmPassword}
            onChange={handleChange}
            errors={errors.confirmPassword}
            classInput="py-2"

          />
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
              <Button type="submit" label="Registrarse" />
            )}
          </div>
          <div className="mt-4 text-sm text-gray-600">
            ¿Ya estás registrado?{' '}
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
          <button className="bg-primary text-white font-semibold flex justify-center items-center w-full py-2 gap-4 rounded-lg border-2 hover:bg-transparent hover:border-primary hover:text-primary transition-colors duration-300">
            <FcGoogle className="text-2xl" />
            Registrarse con Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;