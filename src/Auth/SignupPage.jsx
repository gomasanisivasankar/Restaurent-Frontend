import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthContext";

const SignupPage = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(1); 
  const [formData, setFormData] = useState({ name: "", mobile: "", otp: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      alert("OTP sent successfully! (Use 1234)");
      setStep(2);
    } else if (step === 2 && formData.otp === "1234") {
      signup(formData.name, formData.mobile);
      alert("Signup successful!");
      navigate("/login");
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-950 via-black to-gray-950 text-gray-100 flex items-center justify-center px-6">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-6">
          {step === 1 ? "Sign Up" : "Verify OTP"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 && (
            <>
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-yellow-400"
                required
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-yellow-400"
                required
              />
            </>
          )}

          {step === 2 && (
            <input
              type="text"
              placeholder="Enter OTP"
              value={formData.otp}
              onChange={(e) =>
                setFormData({ ...formData, otp: e.target.value })
              }
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-yellow-400"
              required
            />
          )}

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 rounded-full shadow-lg transition-transform hover:scale-105"
          >
            {step === 1 ? "Send OTP" : "Verify & Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
