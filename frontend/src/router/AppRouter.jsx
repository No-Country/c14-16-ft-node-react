import { Route, Routes } from "react-router-dom";

import Login from "../components/pages/login/Login";
import NotFound from "../components/NotFound/NotFound";
import Home from "../components/pages/home/Home";
import Register from "../components/pages/register/Register";
import Navbar from "../components/layout/Navbar";
import About from "../components/pages/about/About";
import ForgotPass from "../components/pages/forgot-pass/forgot-pass";
import Reserver from "../components/pages/reserver/reserver";
import Footer from "../components/Footer/Footer";
const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/forgot-pass" element={<ForgotPass />} />
        <Route path="/reserver" element={<Reserver />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );

};

export default AppRouter;
