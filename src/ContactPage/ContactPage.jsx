import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We’ll get back to you soon 🍽️");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-linear-to-b from-gray-950 via-black to-gray-950 text-gray-200 pt-28 pb-16 px-6">
        {/* Title */}
        <h1 className="text-center text-4xl md:text-5xl font-extrabold text-yellow-400 drop-shadow-lg mb-6">
          📞 Contact Us
        </h1>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          Have a question, feedback, or special request? We’d love to hear from
          you. Reach out to us anytime — your satisfaction is our top priority.
        </p>

        {/* Contact Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Contact Details */}
          <div className="space-y-8 bg-gray-900/70 border border-gray-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
              🍴 Get in Touch
            </h2>
            <div className="flex items-center gap-4">
              <EnvelopeIcon className="w-6 h-6 text-yellow-400" />
              <p>support@ssrestaurant.com</p>
            </div>
            <div className="flex items-center gap-4">
              <PhoneIcon className="w-6 h-6 text-yellow-400" />
              <p>+91 98765 43210</p>
            </div>
            <div className="flex items-center gap-4">
              <MapPinIcon className="w-6 h-6 text-yellow-400" />
              <p>123 MG Road, Hyderabad, India</p>
            </div>

            <div className="mt-6">
              <iframe
                title="Restaurant Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.686145812936!2d78.48667121535402!3d17.385044988071155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb979c9a80d50d%3A0x30b3a9f8a4218b10!2sMG%20Road%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1672382720832!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: "0", borderRadius: "12px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-900/70 border border-gray-800 rounded-2xl p-8 shadow-xl space-y-6"
          >
            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
              📨 Send Us a Message
            </h2>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:border-yellow-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:border-yellow-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Message</label>
              <textarea
                name="message"
                placeholder="Write your message..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:border-yellow-400 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-linear-to-r from-yellow-400 via-orange-400 to-red-500 text-black font-semibold rounded-full shadow-md hover:scale-105 transition-transform"
            >
              Send Message ✉️
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
