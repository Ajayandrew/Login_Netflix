import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img9 from "../assets/9.jpeg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.png";
import img7 from "../assets/7.jpeg";
import img8 from "../assets/8.jpeg";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any stored session data if needed
    localStorage.removeItem("token");
    // Redirect back to login
    navigate("/login");
  };

  const images = [
    img9,
    img1,
    img2,
    img3,
    img8,
    img5,
    img6,
    img7,
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-red-950 via-black to-black text-white">
      {/* Navbar line only */}
      <nav className="w-full px-4 md:px-12 py-6 border-b border-gray-700 flex justify-between items-center">
        <h1 className="text-red-600 text-2xl md:text-3xl font-bold">NETFLIX</h1>
        <div className="hidden md:flex md:space-x-6 md:items-center">
          <button className="hover:text-red-500">Home</button>
          <button className="hover:text-red-500">Gallery</button>

          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-semibold"
          >
            Logout
          </button>
        </div>
        {/* Mobile logout button */}
        <button
          onClick={handleLogout}
          className="md:hidden bg-red-600 hover:bg-red-700 px-3 py-2 rounded font-semibold text-sm"
        >
          Logout
        </button>
      </nav>

      {/* Hero Section */}
      <div className="text-center mt-8 md:mt-12 px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Women’s Day Showcase</h2>
        <p className="text-gray-300 mb-6 md:mb-8 text-sm md:text-base px-2">
          Celebrating strength, creativity, and inspiration through images.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 px-4 md:px-12">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={src}
              alt={`Women's Day ${index + 1}`}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500">
              <p className="text-white font-semibold">View Details</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-4 text-center text-gray-400 text-sm mt-12">
        © 2026 Women’s Day Gallery — Designed by Ajay
      </footer>
    </div>
  );
}