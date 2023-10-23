import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const isAboutPage = location.pathname === "/";

    const navbarStyle = {
        background: '#F0A225',
        borderBottom: "2px solid #ff8c00",
    };

    const loginButtonText = isLoggedIn ? "Cerrar Sesión" : "Iniciar Sesión";

    const handleLogin = () => {
        setIsLoggedIn(true); // Cambia esta línea para controlar el inicio de sesión
    };

    const handleLogout = () => {
        setIsLoggedIn(false); // Cambia esta línea para controlar el cierre de sesión
    };

    return (
        <nav style={navbarStyle} className={`navbar px-4 py-6 flex justify-between items-center ${isAboutPage ? "transparent-background" : ""}`}>
            <div className="flex items-center">
                <Link to="/">
                    <img src="/assets/LogoDog.png" alt="Doggy's House" className="w-12 h-12 mr-2" />
                </Link>
                <span className="text-xl md:text-2xl lg:text-4xl xl:text-5xl pl-3">
                    <span className="text-gray-100 font-bold">Doggy&apos;s</span>
                    <span className="text-gray-100 font-bold">House</span>
                </span>
            </div>
            <div className="md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-blue-500 font-bold focus:outline-none focus:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </div>
            <div className={`md:flex ${menuOpen ? "md:flex-col md:space-y-4 md:items-center menu-open" : "hidden"}`}>
                <div className="box">
                    <Link to="/" className="text-xl text-gray-100 font-semibold hover:underline md:my-2" onClick={closeMenu}>
                        Inicio
                    </Link>
                </div>
                <div className="box">
                    <Link to="/about" className="text-xl text-gray-100 font-semibold hover:underline md:my-2" onClick={closeMenu}>
                        Nosotros
                    </Link>
                </div>
                {isLoggedIn ? (
                    <div className="box">
                        <button onClick={handleLogout} className="text-blue-500 font-semibold hover:underline md:my-2">
                            Cerrar Sesión
                        </button>
                    </div>
                ) : (
                    <div className="box">
                        <Link to="/login" className="text-xl text-gray-100 font-semibold hover:underline md:my-2" onClick={handleLogin}>
                            {loginButtonText}
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

