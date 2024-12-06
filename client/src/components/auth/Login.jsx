import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 max-w-sm w-full rounded-lg shadow-lg">
        <p className="text-lg font-semibold text-center text-black mb-4">
          Sign in to your account
        </p>
        <div className="relative mb-4">
          <input
            type="email"
            placeholder="Enter email"
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm text-sm"
          />
        </div>
        <div className="relative mb-6">
          <input
            type="password"
            placeholder="Enter password"
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm text-sm"
          />
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
            type="submit"
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
