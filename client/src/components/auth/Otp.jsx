import React, { useState } from "react";

function Otp() {
  // State to hold the OTP input values
  const [otp, setOtp] = useState(["", "", "", ""]);

  // Handle input change
  const handleInputChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // Allow only numeric input

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Automatically focus the next input if the current input has a value
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  // Clear all inputs
  const clearOtp = () => {
    setOtp(["", "", "", ""]);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const fullOtp = otp.join(""); // Combine all OTP values
    if (fullOtp.length < otp.length) {
      alert("Please fill out all fields");
    } else {
      console.log("Entered OTP:", fullOtp);
      // Add verification logic here (e.g., API call)
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full relative"
        onSubmit={handleSubmit}
      >
        <span
          className="absolute top-2 right-2 bg-gray-300 text-gray-700 h-8 w-8 flex items-center justify-center rounded-md cursor-pointer font-bold transition-colors duration-300 hover:bg-red-500 hover:text-white"
          onClick={clearOtp}
        >
          X
        </span>
        <div className="text-center mb-6">
          <span className="block text-xl font-extrabold text-gray-800">
            Two-Factor Verification
          </span>
          <p className="text-gray-600 text-sm mt-2">
            Enter the two-factor authentication code provided by the
            authenticator app
          </p>
        </div>
        <div className="flex justify-between gap-3 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className="h-12 w-12 text-center text-xl font-bold border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-700 focus:outline-none transition-transform transform focus:scale-105"
              type="tel"
              maxLength={1}
            />
          ))}
        </div>
        <div className="flex justify-center gap-4">
          <button
            type="submit"
            className="bg-gray-800 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            Verify
          </button>
          <button
            type="button"
            onClick={clearOtp}
            className="border border-gray-800 text-gray-800 py-2 px-4 rounded-md text-sm font-medium hover:text-red-500 hover:border-red-500 transition-colors"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default Otp;
