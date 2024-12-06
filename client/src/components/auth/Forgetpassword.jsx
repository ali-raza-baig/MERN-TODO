import React, { useState } from "react";

function Forgetpassword() {
  const [email, setEmail] = useState(""); // State for storing email input
  const [error, setError] = useState(""); // State for storing validation error message

  // Handle input change
  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setError(""); // Clear error when user starts typing
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (!email) {
      setError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
    } else {
      console.log("Reset link sent to:", email);
      // Add API call or logic to send reset link here
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-6 max-w-sm w-full rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-lg font-semi-bold mb-4">
          Find your Account
        </h1>
        <hr />
        <p className="text-lg font-semibold text-center text-black mb-4">
          Please enter your email address to search for your account.
        </p>
        <div className="relative mb-4">
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm text-sm"
          />
          {error && (
            <p className="text-red-500 text-sm mt-1">{error}</p> // Display error message if any
          )}
        </div>
        <button
          type="submit"
          className="w-full py-3 px-6 bg-indigo-600 text-white text-sm font-medium rounded-lg uppercase"
        >
          Send reset link
        </button>
      </form>
    </div>
  );
}

export default Forgetpassword;
