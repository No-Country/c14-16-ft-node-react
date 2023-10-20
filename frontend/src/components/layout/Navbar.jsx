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

  const isAboutPage = location.pathname === "/about";

  const navbarStyle = {
    background: "#F0A225",
    borderBottom: "2px solid #ff8c00",
  };

  return (
    <nav
      style={navbarStyle}
      className={`navbar py-3 px-6 flex justify-between items-center ${
        isAboutPage ? "transparent-background" : ""
      }`}
    >
      <div className="flex items-center">
        <Link to="/">
          <img
            src="/assets/icons/icon.png"
            alt="Doggy's House"
            className="w-12 h-12 mr-2 text-white "
          />
        </Link>
        <span className="text-[50px] pl-3 font-dancing space-x-2">
          <span className="text-gray-100 font-semibold">Doggy&apos;s</span>
          <span className="text-gray-100 font-semibold">House</span>
        </span>
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
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
        className={`md:flex  ${
          menuOpen
            ? "md:flex-col md:space-y-4 md:items-center menu-open"
            : "hidden"
        }`}
      >
        <div className="box">
          <Link
            to="/"
            className="text-xl text-gray-100 font-roboto hover:underline md:my-2"
            onClick={closeMenu}
          >
            Inicio
          </Link>
        </div>
        <div className="box">
          <Link
            to="/about"
            className="text-xl text-gray-100 font-roboto hover:underline md:my-2"
            onClick={closeMenu}
          >
            Nosotros
          </Link>
        </div>
        {isLoggedIn ? (
          <div className="box">
            <button
              onClick={() => setIsLoggedIn(false)}
              className="text-blue-500 font-roboto hover:underline md:my-2"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="box">
            <Link
              to="/login"
              className="text-xl text-gray-100 font-semibold hover:underline md:my-2"
              onClick={closeMenu}
            >
              Iniciar Sesión
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
