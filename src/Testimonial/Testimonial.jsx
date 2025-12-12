import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aarav Mehta",
    title: "Food Enthusiast",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "The self-ordering system is super easy to use! I could place my order in seconds without waiting for the staff. The food was delicious and the service was fast!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    title: "Regular Customer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "Absolutely love this concept! It’s modern and convenient. The touchscreen menu made customization easy and payments were hassle-free.",
    rating: 4,
  },
  {
    name: "Rahul Kumar",
    title: "Tech Lover",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
    feedback:
      "Being a tech person, I appreciate how smooth the interface is. It’s like dining meets technology. Highly recommend this restaurant!",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    title: "Food Blogger",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    feedback:
      "The self-ordering kiosks are clean, responsive, and very user-friendly. The UI design is visually appealing and makes dining more fun!",
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-950 via-black to-gray-950 text-gray-200 py-16 px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 drop-shadow-lg">
          ⭐ What Our Customers Say
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
          Our guests love the convenience and modern dining experience we
          provide. Here’s what they have to say about our self-ordering system!
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-gray-900/80 border border-gray-700 hover:border-yellow-500 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-all hover:scale-105 duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-yellow-400 shadow-md"
            />
            <h3 className="text-xl font-semibold text-white">
              {testimonial.name}
            </h3>
            <p className="text-sm text-yellow-400 mb-2">{testimonial.title}</p>
            <p className="text-gray-400 italic mb-4">
              “{testimonial.feedback}”
            </p>
            <div className="flex justify-center">
              {[...Array(testimonial.rating)].map((_, i) => (
                <i
                  key={i}
                  className="fas fa-star text-yellow-400 text-lg mx-1"
                ></i>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-20 text-center max-w-3xl mx-auto bg-linear-to-r from-yellow-500 via-yellow-400 to-amber-500 rounded-3xl p-0.5 shadow-[0_0_20px_rgba(255,215,0,0.4)]"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <div className="bg-gray-950 rounded-3xl py-10 px-6 md:px-12">
          <h3 className="text-3xl font-bold text-white mb-3">
            💬 Loved Your Experience?
          </h3>
          <p className="text-gray-400 mb-6 text-lg">
            We’d love to hear your thoughts! Help us serve you better by sharing
            your feedback or rating your dining experience.
          </p>

          <motion.button
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
            whileTap={{ scale: 0.95 }}
          >
            Write a Review ✍️
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonial;
