import React, { useState, useEffect } from "react";
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
import BookingCars from "./components/bookCars/BookingCars";
import Advantages from "./components/advantages/Advantage";
import OurOffices from "./components/ourOffices/OurOffices";
import Loader from "./components/loader/Loader";
import TourDetailsPage from "./components/tourDetailsPage/TourDetailsPage";


const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500); 
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationForm />} />
            <Route path="/password-recovery" element={<PasswordRecoveryForm />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/tours" element={<TourList />} />
            <Route path="/pools" element={<Pools />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/*" element={<NotFoundPage />} />
            <Route path="/services" element={<Guides />} />
            <Route path="/bookingCars" element={<BookingCars />} />
            <Route path="/advantages" element={<Advantages />} />
            <Route path="/contacts"  element={<OurOffices />} />
            <Route path="/tours" element={<TourList />} />
            <Route path="/tour/:id" element={<TourDetailsPage/>} />
            <Route path="/profile" element={<TourDetailsPage/>}/>
            
          </Routes>  
          <Footer />
        </>
      )}
    </Router>
  );
};


export default App;
