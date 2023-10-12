import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const isAboutPage = location.pathname === "/about";

    return (
        <nav className={`p-4 flex justify-between items-center ${isAboutPage ? "transparent-background" : "bg-gray-100"}`} >
            <div className="flex items-center">
                <Link to="/">
                    <img
                        src='/assets/LogoDog.png'
                        alt="Doggy's House"
                        className="w-12 h-12 mr-2"
                    />
                </Link>
                <span className="text-black font-bold text-4xl pl-4">Doggy&rsquo;s House</span>
            </div>
            <div className="md:hidden">
                <button
                    onClick={toggleMenu}
                    className="text-black font-bold focus:outline-none focus:text-white"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {menuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        )}
                    </svg>
                </button>
            </div>
            <div
                className={`md:flex flex-col md:flex-row md:space-x-4 md:items-center ${menuOpen ? "block" : "hidden"
                    }`}
            >
                <Link
                    to="/"
                    className="text-black font-bold hover:underline"
                    onClick={closeMenu}
                >
                    Inicio
                </Link>
                <Link
                    to="/about"
                    className="text-black font-bold hover:underline"
                    onClick={closeMenu}
                >
                    Sobre Nosotros
                </Link>
                <Link
                    to="/login"
                    className="text-black font-bold hover:underline"
                    onClick={closeMenu}
                >
                    Iniciar Sesión
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
