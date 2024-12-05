import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-sm bg-[#f1f7fe] overflow-hidden rounded-lg text-[#010101]">
        <form className="relative flex flex-col p-8 gap-4 text-center">
          <span className="font-bold text-xl">Sign up</span>
          <span className="text-base text-[#666]">Create a free account with your email.</span>
          
          <div className="overflow-hidden rounded-md bg-white my-4 w-full">
            <input type="text" className="bg-transparent border-0 outline-none h-10 w-full border-b border-[#eee] text-sm px-4" placeholder="Full Name" />
            <input type="email" className="bg-transparent border-0 outline-none h-10 w-full border-b border-[#eee] text-sm px-4" placeholder="Email" />
            <input type="password" className="bg-transparent border-0 outline-none h-10 w-full border-b border-[#eee] text-sm px-4" placeholder="Password" />
          </div>

          <button className="bg-[#0066ff] text-white border-0 rounded-full py-2 px-4 text-lg font-semibold cursor-pointer transition-all hover:bg-[#005ce6]">Sign up</button>
        </form>

        <div className="py-4 text-sm bg-[#e0ecfb] shadow-md">
          <p>Have an account? <Link to="/login" className="font-bold text-[#0066ff] transition-all hover:text-[#005ce6] hover:underline">Log in</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
