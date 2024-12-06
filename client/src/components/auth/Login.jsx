import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validate inputs
  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      // Add login logic here
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-1/2 flex flex-col ">
        <h1 className="text-6xl text-orange-600">Meganum</h1>
        <p className="w-2/3 text-xl font-semibold m-2">
          We are going to develop a MERN Stack Application with senior developer
          Maaz-Irfan, an AI enthusiast well known in this industry.
        </p>
      </div>
      <form
        className="bg-white p-6 max-w-sm rounded-lg shadow-lg w-1/2"
        onSubmit={handleSubmit}
      >
        <p className="text-lg font-semibold text-center text-black mb-4">
          Sign in to your account
        </p>
        <div className="relative mb-4">
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm text-sm"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div className="relative mb-6">
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm text-sm"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full py-3 px-6 bg-indigo-600 text-white text-sm font-medium rounded-lg uppercase"
        >
          Sign in
        </button>
        <p className="text-center m-4 hover:underline hover:cursor-pointer">
          <Link to="/forgetpassword" className="text-indigo-600 underline">
            Forgotten Password?
          </Link>
        </p>
        <hr />
        <div className="flex justify-center items-center">
          <button
            type="button"
            className="mt-4 py-3 px-6 bg-green-600 text-white text-sm font-medium rounded-lg uppercase"
          >
            <Link to="/signup">Create new Account</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
