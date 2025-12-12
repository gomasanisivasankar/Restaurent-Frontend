import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./CartContext/CartContext"; // ✅ Correct import
import { AuthProvider } from "./AuthContext/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </AuthProvider>
);
