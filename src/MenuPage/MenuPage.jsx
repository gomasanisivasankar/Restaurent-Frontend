import React, { useState } from "react";
import {
  ShoppingCartIcon,
  PlusIcon,
  MinusIcon,
} from "@heroicons/react/24/solid";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useCart } from "../CartContext/CartContext";


const allMenuItems = [
  {
    id: 1,
    name: "Chicken Biryani",
    category: "Biryani",
    type: "Non-Veg",
    description:
      "Aromatic basmati rice layered with spicy chicken and slow-cooked to perfection.",
    price: 220,
    image:
      "https://images.unsplash.com/photo-1601050690597-7b7fbd0a3f5e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Butter Chicken",
    category: "Main Course",
    type: "Non-Veg",
    description:
      "Tender chicken cooked in a rich creamy tomato gravy with butter and spices.",
    price: 260,
    image:
      "https://images.unsplash.com/photo-1626041281684-7e8e2a0a2b74?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Mutton Biryani",
    category: "Biryani",
    type: "Non-Veg",
    description:
      "Classic Hyderabadi biryani made with fragrant rice and juicy mutton pieces.",
    price: 300,
    image:
      "https://images.unsplash.com/photo-1668236543092-08dd5a77b2c5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Prawn Masala",
    category: "Seafood",
    type: "Non-Veg",
    description:
      "Juicy prawns cooked in a rich, spicy onion-tomato gravy with fresh herbs.",
    price: 270,
    image:
      "https://images.unsplash.com/photo-1635278058852-6d2b9057fcb2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Chicken 65",
    category: "Starters",
    type: "Non-Veg",
    description:
      "Crispy fried chicken bites tossed in spicy and tangy South Indian flavors.",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1598514982588-8e4b468b3dcf?auto=format&fit=crop&w=800&q=80",
  },

  // 🥗 Veg Dishes
  {
    id: 6,
    name: "Paneer Butter Masala",
    category: "Main Course",
    type: "Veg",
    description:
      "Soft paneer cubes simmered in a buttery, spiced tomato gravy — pure indulgence.",
    price: 200,
    image:
      "https://images.unsplash.com/photo-1617196039897-8bdb9d1a8e13?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Veg Biryani",
    category: "Biryani",
    type: "Veg",
    description:
      "Fragrant basmati rice layered with vegetables and cooked with mild spices.",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1625840594980-29a6c1ac47b7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Gobi Manchurian",
    category: "Starters",
    type: "Veg",
    description:
      "Crispy cauliflower florets tossed in Indo-Chinese spicy sauce — a crowd favorite!",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1630851840634-bd94e1c10b69?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Dal Tadka",
    category: "Main Course",
    type: "Veg",
    description:
      "Yellow lentils tempered with ghee, garlic, and cumin — comforting and wholesome.",
    price: 130,
    image:
      "https://images.unsplash.com/photo-1617196039897-8bdb9d1a8e13?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "Paneer Tikka",
    category: "Starters",
    type: "Veg",
    description:
      "Marinated paneer cubes grilled with bell peppers and onions for a smoky taste.",
    price: 190,
    image:
      "https://images.unsplash.com/photo-1625840594980-29a6c1ac47b7?auto=format&fit=crop&w=800&q=80",
  },
];

const MenuPage = () => {
  const { cartItems, addToCart, updateQuantity } = useCart();
  const [selectedVegCategory, setSelectedVegCategory] = useState("All");
  const [selectedNonVegCategory, setSelectedNonVegCategory] = useState("All");

  const vegCategories = ["All", "Starters", "Biryani", "Main Course"];
  const nonVegCategories = ["All", "Starters", "Biryani", "Main Course", "Seafood"];

  const filterItems = (type, category) =>
    category === "All"
      ? allMenuItems.filter((item) => item.type === type)
      : allMenuItems.filter(
          (item) => item.type === type && item.category === category
        );

  const renderItems = (type, category, color) =>
    filterItems(type, category).map((item) => {
      const itemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
      return (
        <div
          key={item.id}
          className="bg-gray-900 border border-gray-700 hover:border-green-400 rounded-2xl shadow-lg overflow-hidden transition-all hover:scale-105 duration-300"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-5 flex flex-col justify-between h-[230px]">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                {item.description}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-lg font-bold ${color}`}>
                ₹{item.price}
              </span>
              {itemInCart ? (
                <div className="flex items-center gap-2 bg-gray-800 rounded-full px-3 py-1">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="bg-gray-700 p-1 rounded-full hover:bg-gray-600 transition"
                  >
                    <MinusIcon className="w-4 h-4 text-white" />
                  </button>
                  <span className="text-white font-semibold">
                    {itemInCart.quantity}
                  </span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-gray-700 p-1 rounded-full hover:bg-gray-600 transition"
                  >
                    <PlusIcon className="w-4 h-4 text-white" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => addToCart(item)}
                  className={`flex items-center gap-2 bg-linear-to-r ${
                    item.type === "Veg"
                      ? "from-green-400 to-lime-500"
                      : "from-yellow-400 via-orange-400 to-red-500"
                  } text-black font-semibold px-4 py-2 rounded-full hover:scale-105 transition-transform`}
                >
                  <ShoppingCartIcon className="w-5 h-5" />
                  Add
                </button>
              )}
            </div>
          </div>
        </div>
      );
    });

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-linear-to-b from-gray-950 via-black to-gray-950 text-gray-100 pt-32 pb-16 px-6">
        <h1 className="text-center text-4xl font-extrabold text-yellow-400 mb-6 drop-shadow-lg">
          🍱 Explore Our Menu
        </h1>
        <div className="w-24 h-1 bg-linear-to-r from-yellow-400 to-red-500 mx-auto mb-10 rounded-full"></div>
        <section className="mb-20">
          <div className="text-center mb-8">
            <img
              src="https://images.unsplash.com/photo-1615486364744-988e1332b67d?auto=format&fit=crop&w=1200&q=80"
              alt="Veg Section"
              className="w-full max-h-80 object-cover rounded-2xl shadow-lg mb-4"
            />
            <h2 className="text-3xl font-semibold text-green-400 mb-2">
              🥗 Veg Dishes
            </h2>
            <p className="text-gray-400 text-sm">
              Fresh, flavorful vegetarian meals crafted with love and tradition.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {vegCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedVegCategory(category)}
                className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
                  selectedVegCategory === category
                    ? "bg-linear-to-r from-green-400 to-lime-500 text-black border-green-400"
                    : "border-gray-600 hover:border-green-400 hover:text-green-400 text-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {renderItems("Veg", selectedVegCategory, "text-green-400")}
          </div>
        </section>
        <section>
          <div className="text-center mb-8">
            <img
              src="https://images.unsplash.com/photo-1625943029887-fc830e68d5d2?auto=format&fit=crop&w=1200&q=80"
              alt="Non-Veg Section"
              className="w-full max-h-80 object-cover rounded-2xl shadow-lg mb-4"
            />
            <h2 className="text-3xl font-semibold text-red-400 mb-2">
              🍗 Non-Veg Dishes
            </h2>
            <p className="text-gray-400 text-sm">
              Juicy, spicy, and full of flavor — the best from our chef’s
              kitchen.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {nonVegCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedNonVegCategory(category)}
                className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
                  selectedNonVegCategory === category
                    ? "bg-linear-to-r from-yellow-400 via-orange-400 to-red-500 text-black border-yellow-400"
                    : "border-gray-600 hover:border-red-400 hover:text-yellow-400 text-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {renderItems("Non-Veg", selectedNonVegCategory, "text-yellow-400")}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default MenuPage;
