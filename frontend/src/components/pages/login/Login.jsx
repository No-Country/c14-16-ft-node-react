import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-6">Iniciar sesión</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 font-medium">
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-600 font-medium">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2 leading-tight" />
                            <span className="text-sm text-gray-600">Recordar contraseña</span>
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="mx-auto ml-4/5 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            Iniciar sesión
                        </button>
                    </div>
                    <div className="mt-4 text-sm text-gray-600">
                        ¿No estás registrado?{" "}
                        <Link to="/register" className="text-blue-500 hover:underline">
                            Regístrate aquí
                        </Link>
                        <span className="text-sm mx-2">|</span>
                        <Link to="/" className="text-blue-500 hover:underline">
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
