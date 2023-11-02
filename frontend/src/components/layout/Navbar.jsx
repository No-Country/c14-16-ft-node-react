import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { LoginContext } from "../../context/login/LoginContext";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLogin, handleLogin } = useContext(LoginContext);

  const location = useLocation();
  const isAboutPage = location.pathname === "/";
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("User");
    handleLogin(false);
    navigate("/login", { replace: true });
  };

  return (
    <nav
      id="container-global"
      className={`navbar px-4 py-6 text-xl md:text-2xl flex text-black-100 font-semibold justify-between items-center ${isAboutPage ? "bg-yellow-400" : ""
        }`}
    >
      <div className="flex items-center">
        <Link to="/">
          <img
            src="/assets/LogoDog.png"
            alt="Doggy's House"
            className="w-10 h-10 items-center mr-4 ml-4"
          />
        </Link>
        <div className="mb-1.5  top-1/3 sm-text-sm text-center  md:text-2xl lg:text-3xl xl:text-4xl p-1">
          <span className="text-gray-100 text-3xl font-bold ">Doggy&apos;s </span>
          <span className="text-gray-100 text-3xl font-bold"> House</span>
        </div>
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
        className={`md:flex ${menuOpen
          ? "md:flex-col md:space-y-4 md:items-center menu-open"
          : "hidden"
          }`}
      >
        <Link className="box" to="/" onClick={closeMenu}>
          <span className="links-nav">
            Inicio
          </span>
        </Link>
        <Link className="box" to="/about" onClick={closeMenu}>
          <span className="links-nav">
            Nosotros
          </span>
        </Link>
        {isLogin && (
          <Link className="box" to="/mybookings" onClick={closeMenu}>
            <span className="links-nav">
              Mis Reservas
            </span>
          </Link>
        )}
        {isLogin && (
          <Link className="box" to="/mypets" onClick={closeMenu}>
            <span className="links-nav">
              Mis Mascotas
            </span>
          </Link>
        )}
        {isLogin ? (
          <button className="box" onClick={logout}>
            <Link className="box" to="/login" onClick={closeMenu}>
              <span className="links-nav">
                Cerrar Sesión
              </span>
            </Link>
          </button>
        ) : (
          <Link className="box" to="/login" onClick={closeMenu}>
            <span className="links-nav">
              Iniciar Sesión
            </span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
