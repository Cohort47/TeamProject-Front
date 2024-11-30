import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AboutUs from "./components/aboutUs/AboutUs";
import HomePage from "./components/homepage/HomePage";
import TourList from "./components/tours/TourList";



import LoginPage from "./components/login/LoginPage";
import RegistrationForm from "./components/registrationForm/RegistrationForm";
import PasswordRecoveryForm from "./components/passwordRecoveryForm/PasswordRecoveryForm";
import Pools from "./components/pools/Pools";
import Premium from "./components/premium/Premium";
import NotFoundPage from "./components/notFoundPage/NotFoundPage";
import Guides from "./components/guides/Guides";
import TransportRental from "./components/transportRental/TransportRental";


const App: React.FC = () => {
  return ( 
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/password-recovery" element={<PasswordRecoveryForm />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/tours" element={<TourList />} />
        <Route path="/pools" element={<Pools />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/transport-Rental" element={<TransportRental />} />
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
