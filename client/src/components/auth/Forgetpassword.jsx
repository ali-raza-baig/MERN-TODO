import React from "react";

function Forgetpassword() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 max-w-sm w-full rounded-lg shadow-lg">
        <h1 className="text-center text-lg font-semi-bold mb-4">Find your Account</h1>
        <hr />
        <p className="text-lg font-semibold text-center text-black mb-4">
          Please enter your email address to search for your account.
        </p>
        <div className="relative mb-4">
          <input
            type="email"
            placeholder="Enter email"
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm text-sm"
          />
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
