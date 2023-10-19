import { Link } from "react-router-dom";
import ImageBlock from "../../ui/image-block";
import Input from "../../ui/Input";
import Button from "../../ui/button";
import Label from "../../ui/label";

function ForgotPass() {
  return (
    <div className="min-h-screen container grid grid-cols-1 lg:grid-cols-2 p-5 mx-auto">
      <ImageBlock
        url="/assets/gatito-perrito.webp"
        clase="w-full"
        claseSection="h-[80%]"
      />
      <div className="bg-white rounded px-5 shadow-2xl shadow-black/30 w-[80%] h-[80%] flex flex-col justify-center mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-6">
            ¿Olvidaste tu contraseña?
          </h2>
          <p>Por favor ingresa tu email y confirmar</p>
        </div>
        <form className="flex flex-col space-y-5">
          <Label label="Correo Electronico" />
          <Input type="email" name="email" />
          <div>
            <Button type="submit" label="Enviar" />
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-600">
              ¿No estás registrado?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Regístrate aquí
              </Link>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              ¿Ya estás registrado?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Inicia sesión aquí
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPass;
