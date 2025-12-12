import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthContext";

const LoginPage = () => {
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!otpSent) {
      alert("OTP sent successfully! (Use 1234)");
      setOtpSent(true);
    } else if (otp === "1234") {
      login(mobile);
      alert("Login successful!");
      navigate("/menu");
    } else {
      alert("Invalid OTP");
    }
  };

  if (user) navigate("/menu");

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-950 via-black to-gray-950 text-gray-100 flex items-center justify-center px-6">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-6">
          {otpSent ? "Verify OTP" : "Login"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!otpSent && (
            <input
              type="tel"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-yellow-400"
              required
            />
          )}

          {otpSent && (
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-yellow-400"
              required
            />
          )}

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 rounded-full shadow-lg transition-transform hover:scale-105"
          >
            {!otpSent ? "Send OTP" : "Login"}
          </button>

          {!otpSent && (
            <p className="text-sm text-gray-400 text-center">
              Don’t have an account?{" "}
              <span
                onClick={() => navigate("/signup")}
                className="text-yellow-400 hover:underline cursor-pointer"
              >
                Sign up
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
