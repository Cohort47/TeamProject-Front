import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AboutUs from "./components/aboutUs/AboutUs";
import HomePage from "./components/homepage/HomePage";
import TourList from "./components/tours/TourList";
import GuideServices from "./components/guideServices/GuideServices";
import PremiumService from "./components/premiumService/PremiumService";
import NotFoundPage from "./components/notFoundPage/NotFoundPage";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/tours" element={<TourList />} />
        <Route path="/services" element={<GuideServices />} />
        <Route path="/premium-Service" element={<PremiumService />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
