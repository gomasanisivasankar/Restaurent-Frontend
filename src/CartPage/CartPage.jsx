import React from "react";
import { useCart } from "../CartContext/CartContext";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { TrashIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotal } = useCart();

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-linear-to-b from-gray-950 via-black to-gray-950 text-gray-100 pt-28 pb-16 px-6">
        <h1 className="text-center text-4xl font-extrabold text-yellow-400 mb-8 drop-shadow-lg">
          🛒 Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-400 text-lg">
            Your cart is empty. Add some delicious dishes from the menu 🍽️
          </p>
        ) : (
          <div className="max-w-5xl mx-auto bg-gray-900/80 border border-gray-700 rounded-2xl p-6 shadow-lg">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row justify-between items-center gap-6 border-b border-gray-700 py-5"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-lg shadow-md"
                />
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl font-semibold text-white">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    ₹{item.price} × {item.quantity} ={" "}
                    <span className="text-yellow-400 font-bold">
                      ₹{item.price * item.quantity}
                    </span>
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition"
                  >
                    <MinusIcon className="w-5 h-5 text-white" />
                  </button>
                  <span className="text-lg font-semibold text-yellow-400">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, +1)}
                    className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition"
                  >
                    <PlusIcon className="w-5 h-5 text-white" />
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="flex items-center gap-2 text-red-500 hover:text-red-400 transition"
                >
                  <TrashIcon className="w-5 h-5" />
                  Remove
                </button>
              </div>
            ))}
            <div className="flex justify-between items-center mt-8 text-xl font-semibold">
              <span className="text-gray-300">Total:</span>
              <span className="text-yellow-400">₹{getTotal()}</span>
            </div>
            <div className="text-center mt-10">
              <button className="bg-linear-to-r from-yellow-400 via-orange-400 to-red-500 text-black font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform shadow-lg">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
