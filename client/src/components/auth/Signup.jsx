
const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 max-w-sm w-full rounded-lg shadow-lg">
        <p className="text-lg font-semibold text-center text-black mb-4">
          Sign Up
        </p>
        <div className="relative mb-4">
          <input
            type="Name"
            placeholder="Enter Name"
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm text-sm"
          />
        </div>
        <div className="relative mb-4">
          <input
            type="email"
            placeholder="Enter email"
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm text-sm"
          />
        </div>
        <div className="relative mb-4">
          <input
            type="password"
            placeholder="Enter password"
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm text-sm"
          />
        </div>
        <div className="relative mb-6">
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 px-6 bg-indigo-600 text-white text-sm font-medium rounded-lg uppercase"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;
