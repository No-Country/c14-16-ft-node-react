import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
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
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
                <h2 className="text-2xl font-semibold mb-6">Registrarse</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-600 font-medium">
                            Nombre de usuario
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${errors.username ? "border-red-500" : ""
                                }`}
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                        {errors.username && (
                            <p className="text-red-500 text-sm mt-2">{errors.username}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 font-medium">
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${errors.email ? "border-red-500" : ""
                                }`}
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600 font-medium">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${errors.password ? "border-red-500" : ""
                                }`}
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-2">{errors.password}</p>
                        )}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block text-gray-600 font-medium">
                            Confirmar contraseña
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${errors.confirmPassword ? "border-red-500" : ""
                                }`}
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-sm mt-2">{errors.confirmPassword}</p>
                        )}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="mx-auto block w-4/5 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            Registrarse
                        </button>
                    </div>
                    <div className="mt-4 text-sm text-gray-600">
                        ¿Ya estás registrado?{" "}
                        <Link to="/login" className="text-blue-500 hover:underline">
                            Inicia sesión aquí
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
