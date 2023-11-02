import { Route, Routes } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";
import Login from "../components/pages/login/Login";
import NotFound from "../components/NotFound/NotFound";
import Home from "../components/pages/home/Home";
import Register from "../components/pages/register/Register";
import Navbar from "../components/layout/Navbar";
import About from "../components/pages/about/About";
import ForgotPass from "../components/pages/forgot-pass/forgot-pass";
import Reserver from "../components/pages/reserver/reserver";
import Footer from "../components/Footer/Footer";
import SearchPage from "../components/pages/search/SearchPage";
import BranchPage from "../components/pages/branch/BranchPage";
import MyPets from "../components/pages/mypets/MyPets";
import AddPet from "../components/pages/mypets/AddPet";
import MyBookings from "../components/pages/mybookings/MyBookings";


const AppRouter = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/forgot-pass" element={<ForgotPass />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/reserver/:id" element={<Reserver />} />
        <Route path="/branch/:id" element={<BranchPage />} />
        <Route path="/mypets/*" element={<MyPets />}>
          <Route path="add" element={<AddPet />} />
        </Route>
        <Route path="/mybookings/*" element={<MyBookings />}>
          <Route path="add" element={"BOOKING CARD"} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRouter;
