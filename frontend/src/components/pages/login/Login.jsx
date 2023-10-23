import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ImageBlock from '../../ui/image-block';
import Input from '../../ui/Input';
import Button from '../../ui/button';
import { FcGoogle } from 'react-icons/fc';
import { API_LOGIN } from '../../../constants/api';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setErrors({ email: 'Campo requerido', password: 'Campo requerido' });
    } else {
      setLoading(true);
      setErrors({});

      //llamada fetch a la URL 
      fetch(API_LOGIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error en la llamada a la API');
          }
          return response.json();
        })
        .then((data) => {
          // Manejar la respuesta de la API aquí
          console.log('Respuesta de la API:', data);

          navigate('/');
        })
        .catch((error) => {
          console.error('Error en la llamada a la API:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };


  return (
    <div className="min-h-screen container grid grid-cols-1 lg:grid-cols-2 p-5 mx-auto">
      <ImageBlock
        url="/assets/gatito.webp"
        clase="w-[60%]"
        claseSection="h-[100%]"
      />
      <div className="bg-white p-8 rounded shadow-2xl shadow-black/30 w-[80%] mx-auto h-[100%]">
        <h2 className="text-2xl font-semibold mb-6">Iniciar sesión</h2>
        <form onSubmit={handleLogin} className="flex flex-col space-y-5">
          <Input
            type="email"
            name="email"
            label="Correo Electrónico"
            value={formData.email}
            onChange={handleChange}
            errors={errors.email}
          />
          <Input
            type="password"
            name="password"
            label="Contraseña"
            value={formData.password}
            onChange={handleChange}
            errors={errors.password}
          />
          <div className="">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 leading-tight" />
              <span className="text-sm text-gray-600">Recordar contraseña</span>
            </label>
          </div>
          <div>
            {loading ? (
              <div className="text-center">
                <div className="loader" />
              </div>
            ) : (
              <Button type="submit" label="Iniciar sesión" />
            )}
          </div>
          <div className="text-sm text-gray-600">
            ¿No estás registrado?{' '}
            <Link to="/register" className="text-blue-500 hover:underline">
              Regístrate aquí
            </Link>
          </div>
          <div className="">
            <hr className="border-[2px]" />
            <div className="flex justify-center">
              <span className="px-4 -mt-4 bg-white">or</span>
            </div>
          </div>
          <button className="bg-primary text-white font-semibold flex justify-center items-center w-full py-3 gap-4 rounded-lg border-2 hover:bg-transparent hover.border-primary hover.text-primary transition-colors duration-300">
            <FcGoogle className="text-2xl" />
            Iniciar con Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
