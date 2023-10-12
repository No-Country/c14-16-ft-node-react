import { Link } from "react-router-dom";
import ImageBlock from "../../ui/image-block";
import Input from "../../ui/Input";
import Button from "../../ui/button";
import { FcGoogle } from "react-icons/fc";

function Login() {
  return (
    <div className="min-h-screen container grid grid-cols-1 lg:grid-cols-2 p-5 mx-auto">
      <ImageBlock url="/assets/gatito.webp" clase="w-[60%]" />
      <div className="bg-white p-8 rounded shadow-md w-[80%] mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Iniciar sesión</h2>
        <form className="flex flex-col space-y-5">
          <Input type="email" label="Correo Electronico" name="email" />
          <Input type="password" label="Contraseña" name="password" />
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
            <Link to="/forgot-pass" className="text-blue-500 hover:underline">
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
