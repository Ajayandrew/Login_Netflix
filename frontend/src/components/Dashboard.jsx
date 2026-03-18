import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

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
  const [selectedImage, setSelectedImage] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const images = [img9, img1, img2, img3, img8, img5, img6, img7];

  const handleDownload = (img) => {
    const link = document.createElement("a");
    link.href = img;
    link.download = "image.jpg";
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-950 via-black to-black text-white">
      
      {/* Navbar */}
      <nav className="w-full px-4 md:px-12 py-6 border-b border-gray-700 flex justify-between items-center">
        <h1 className="text-red-600 text-2xl md:text-3xl font-bold">NETFLIX</h1>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-semibold"
        >
          Logout
        </button>
      </nav>

      {/* Hero */}
      <div className="text-center mt-10">
        <h2 className="text-3xl font-bold mb-4">Women’s Day Showcase</h2>
        <p className="text-gray-300">
          Celebrating strength and inspiration.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 mt-8">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={src}
              alt=""
              className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-4 transition">
              
              {/* View Icon */}
              <button
                onClick={() => setSelectedImage(src)}
                className="bg-white text-black p-3 rounded-full hover:scale-110 transition"
              >
                👁️
              </button>

              {/* Download Icon */}
              <button
                onClick={() => handleDownload(src)}
                className="bg-red-600 text-white p-3 rounded-full hover:scale-110 transition"
              >
                <FaDownload size={18} />
              </button>

            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

          <div className="relative">

            <img
              src={selectedImage}
              alt=""
              className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-lg"
            />

            {/* Close Icon */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 bg-red-600 p-2 rounded-full text-white hover:scale-110 transition"
            >
              <IoClose size={24} />
            </button>

            {/* Download Icon */}
            <button
              onClick={() => handleDownload(selectedImage)}
              className="absolute bottom-3 right-3 bg-white text-black p-2 rounded-full hover:scale-110 transition"
            >
              <FaDownload size={20} />
            </button>

          </div>

        </div>
      )}

      {/* Footer */}
      <footer className="text-center text-gray-400 mt-10 pb-4">
        © 2026 Women’s Day Gallery — Designed by Ajay
      </footer>
    </div>
  );
}