import React from "react";

function Otp() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full relative">
        <span className="absolute top-2 right-2 bg-gray-300 text-gray-700 h-8 w-8 flex items-center justify-center rounded-md cursor-pointer font-bold transition-colors duration-300 hover:bg-red-500 hover:text-white">
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
          <input
            className="h-12 w-12 text-center text-xl font-bold border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-700 focus:outline-none transition-transform transform focus:scale-105"
            type="tel"
            maxLength={1}
          />
          <input
            className="h-12 w-12 text-center text-xl font-bold border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-700 focus:outline-none transition-transform transform focus:scale-105"
            type="tel"
            maxLength={1}
          />
          <input
            className="h-12 w-12 text-center text-xl font-bold border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-700 focus:outline-none transition-transform transform focus:scale-105"
            type="tel"
            maxLength={1}
          />
          <input
            className="h-12 w-12 text-center text-xl font-bold border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-700 focus:outline-none transition-transform transform focus:scale-105"
            type="tel"
            maxLength={1}
          />
        </div>
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="bg-gray-800 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            Verify
          </a>
          <a
            href="#"
            className="border border-gray-800 text-gray-800 py-2 px-4 rounded-md text-sm font-medium hover:text-red-500 hover:border-red-500 transition-colors"
          >
            Clear
          </a>
        </div>
      </form>
    </div>
  );
}

export default Otp;
