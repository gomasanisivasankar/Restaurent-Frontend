
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import MenuPage from "./MenuPage/MenuPage";
import ContactPage from "./ContactPage/ContactPage";
import "react-toastify/dist/ReactToastify.css";
import "./index.css"; // Tailwind CSS entry point
// import Testimonial from "./Testimonial/Testimonial";
// import CardContext from "./CardContext/CardContext"
import CartPage from "./CartPage/CartPage";
import SignupPage from "./Auth/SignupPage";      // ✅ Add this
import LoginPage from "./Auth/LoginPage"; 

const App = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
        
      <BrowserRouter>
        <Routes>
          {/* Admin Routes */}
          <Route path="/signup" element={<SignupPage />} />  
        <Route path="/login" element={<LoginPage />} />
          
          {/* User Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;
