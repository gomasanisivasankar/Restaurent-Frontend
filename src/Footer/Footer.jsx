import React from "react";

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-gray-950 via-black to-gray-950 text-gray-300 border-t border-gray-800">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-extrabold text-yellow-400 mb-3">
            🍴 Self Ordering Restaurant
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Redefining dining with modern self-ordering technology. Place your
            order directly, enjoy fresh meals faster — with no waiting time!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-yellow-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/menu" className="hover:text-yellow-400 transition">
                Menu
              </a>
            </li>
            <li>
              <a href="/cart" className="hover:text-yellow-400 transition">
                Cart
              </a>
            </li>
            <li>
              <a href="/adminsignin" className="hover:text-yellow-400 transition">
                Admin Login
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Contact Info
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <i className="fas fa-envelope text-yellow-400"></i>
              <a
                href="mailto:contact@selforderrestaurant.com"
                className="hover:text-yellow-400 transition"
              >
                contact@selforderrestaurant.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <i className="fas fa-phone text-yellow-400"></i>
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-yellow-400"></i>
              <span>Gachibowli, Hyderabad, India</span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-5 mt-6">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-500 text-2xl transition"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-pink-500 text-2xl transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-sky-400 text-2xl transition"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-red-600 text-2xl transition"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-400 mb-4">
            Subscribe to get exclusive offers and updates on new dishes!
          </p>
          <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-4 py-2 w-full text-white outline-none"
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center py-4 bg-black border-t border-gray-800">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Self Ordering Restaurant | All Rights
          Reserved
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Designed & Developed by{" "}
          <span className="text-yellow-400 font-semibold">
            Sivasankar Gomasani
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
