import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthContext"; // ✅ for login status

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // ✅ Handle "Order Now" navigation
  const handleOrderNow = () => {
    if (user) {
      navigate("/cart"); // Logged in → go to cart
    } else {
      navigate("/signup"); // Not logged in → go to signup
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* 🍽️ Logo */}
            <div
              className="flex items-center cursor-pointer"
              onClick={() => navigate("/")}
            >
              <span className="text-3xl font-bold tracking-wide">
                <span className="text-yellow-400">SS</span>{" "}
                <span className="text-white">Restaurant 🍽️</span>
              </span>
            </div>

            {/* 💻 Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => navigate("/")}
                className="hover:text-yellow-400 transition"
              >
                Home
              </button>
              <button
                onClick={() => navigate("/menu")}
                className="hover:text-yellow-400 transition"
              >
                Menu
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="hover:text-yellow-400 transition"
              >
                Contact
              </button>

              {/* Show only for admin */}
              {user?.role === "admin" && (
                <button
                  onClick={() => navigate("/admin")}
                  className="hover:text-yellow-400 transition"
                >
                  Admin
                </button>
              )}

              {/* 🛒 ORDER NOW Button */}
              <button
                onClick={handleOrderNow}
                className="bg-linear-to-r from-yellow-400 via-orange-400 to-red-500 text-black font-semibold px-5 py-2 rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                Order Now
              </button>

              {/* 👤 Auth Buttons */}
              {user ? (
                <button
                  onClick={logout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="hover:text-yellow-400 transition"
                >
                  Login
                </button>
              )}
            </div>

            {/* 📱 Mobile Menu Icon */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                {menuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* 📱 Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="flex flex-col items-center py-4 space-y-3">
              <button
                onClick={() => {
                  navigate("/");
                  setMenuOpen(false);
                }}
                className="hover:text-yellow-400 transition"
              >
                Home
              </button>
              <button
                onClick={() => {
                  navigate("/menu");
                  setMenuOpen(false);
                }}
                className="hover:text-yellow-400 transition"
              >
                Menu
              </button>
              <button
                onClick={() => {
                  navigate("/contact");
                  setMenuOpen(false);
                }}
                className="hover:text-yellow-400 transition"
              >
                Contact
              </button>

              {user?.role === "admin" && (
                <button
                  onClick={() => {
                    navigate("/admin");
                    setMenuOpen(false);
                  }}
                  className="hover:text-yellow-400 transition"
                >
                  Admin
                </button>
              )}

              {/* 🛒 Order Now */}
              <button
                onClick={() => {
                  handleOrderNow();
                  setMenuOpen(false);
                }}
                className="bg-linear-to-r from-yellow-400 via-orange-400 to-red-500 text-black font-semibold px-5 py-2 rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                Order Now
              </button>

              {/* Auth Buttons */}
              {user ? (
                <button
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => {
                    navigate("/login");
                    setMenuOpen(false);
                  }}
                  className="hover:text-yellow-400 transition"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
