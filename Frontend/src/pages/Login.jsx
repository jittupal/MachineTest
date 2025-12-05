import { useState } from "react";
import { api } from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const res = await api.post("/auth/login", form);

    if (res.data.success) {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#009688]">
      <div className="relative bg-[#1f283e] w-96 p-8 pb-10 rounded-xl shadow-2xl mt-10 border border-[#0e1a2b]">
        
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#26c6da] w-2/3 py-4 rounded-xl shadow-lg text-center animate-pulse">
          <h2 className="text-xl font-bold text-white tracking-widest uppercase">Login</h2>
        </div>

        <div className="flex justify-center mt-10 mb-8">
          <div className="rounded-full border-2 border-gray-600 p-4 shadow-inner bg-gradient-to-tr from-[#1b2433] to-[#2c3a5a]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <form onSubmit={submit} className="space-y-6">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-500 group-hover:text-[#26c6da] transition-colors duration-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              className="w-full bg-[#151b29] text-gray-200 border-none rounded-lg p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-[#26c6da] placeholder-gray-500 transition-all duration-300 shadow-sm hover:shadow-md"
              placeholder="Email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-500 group-hover:text-[#26c6da] transition-colors duration-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              className="w-full bg-[#151b29] text-gray-200 border-none rounded-lg p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-[#26c6da] placeholder-gray-500 transition-all duration-300 shadow-sm hover:shadow-md"
              type="password"
              placeholder="Password"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>

          <div className="flex justify-between text-xs text-gray-500">
            <label className="flex items-center space-x-1 cursor-pointer hover:text-gray-400 transition-colors duration-200">
              <input type="checkbox" className="form-checkbox h-3 w-3 text-[#26c6da] rounded bg-[#151b29] border-gray-600 focus:ring-0"/>
              <span>Remember me</span>
            </label>
            <a href="#" className="hover:text-gray-400 transition-colors duration-200">Forgot your password?</a>
          </div>

          <button className="w-full bg-[#26c6da] text-white p-3 rounded-lg font-bold uppercase tracking-wide hover:bg-[#20a8ba] transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Login
          </button>

          <p className="text-center text-gray-500 text-sm">
            Don't have an account? <a href="/" className="text-[#26c6da] hover:text-[#20a8ba] transition-colors duration-300">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}
