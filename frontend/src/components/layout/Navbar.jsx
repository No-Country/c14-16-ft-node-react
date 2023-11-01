import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import { TOKEN_KEY } from "../../constants/api";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isAboutPage = location.pathname === "/";
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const isLoggedIn = sessionStorage.getItem(TOKEN_KEY) !== null;
  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.removeItem(TOKEN_KEY);
    navigate("/login", { replace: true });
  };
  const buttonLabel = isLoggedIn ? (
    <button className="box" onClick={logout}>
      <Link className="box" to="/login" onClick={closeMenu}>
        Cerrar Sesión
      </Link>
    </button>
  ) : (
    <Link className="box" to="/login" onClick={closeMenu}>
      Iniciar Sesión
    </Link>
  );

  return (
    <nav
      id="container-global"
      className={`navbar px-4 py-6 text-xl md:text-2xl flex text-black-100 font-semibold justify-between items-center ${
        isAboutPage ? "bg-yellow-400" : ""
      }`}
    >
      <div className="flex items-center">
        <Link to="/">
          <img
            src="/assets/LogoDog.png"
            alt="Doggy's House"
            className="w-12 h-12 mr-2"
          />
        </Link>
        <span className="text-xl md:text-2xl lg:text-4xl xl:text-5xl pl-3">
          <span className="text-gray-100 font-bold">Doggy&apos;s</span>
          <span className="text-gray-100 font-bold">House</span>
        </span>
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-blue-500 font-bold focus:outline-none focus:text-white"
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
        className={`md:flex ${
          menuOpen
            ? "md:flex-col md:space-y-4 md:items-center menu-open"
            : "hidden"
        }`}
      >
        <Link className="box" to="/" onClick={closeMenu}>
          Inicio
        </Link>
        <Link className="box" to="/about" onClick={closeMenu}>
          Nosotros
        </Link>

        <Link className="box" to="/mybookings" onClick={closeMenu}>
          Mis Reservas
        </Link>

        <Link className="box" to="/mypets" onClick={closeMenu}>
          Mis Mascotas
        </Link>
        {buttonLabel}
      </div>
    </nav>
  );
};

export default Navbar;
