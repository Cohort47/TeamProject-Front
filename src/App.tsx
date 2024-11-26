import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AboutUs from "./components/aboutUs/AboutUs";
import HomePage from "./components/homepage/HomePage";
import TourList from "./components/tours/TourList";
import BookingCars from "./components/bookCars/BookingCars";
import Pools from "./components/pools/Pools";
import Guides from "./components/guides/Guides";
import Premium from "./components/premium/Premium";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/tours" element={<TourList />} />
        <Route path="/booking-cars" element={<BookingCars />} />
        <Route path="/pools" element={<Pools />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/premium" element={<Premium />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
