import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaBrain } from "react-icons/fa";
import Navbar from "../components/Navbar";

const CategorySelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
        <div className="flex justify-between w-full max-w-4xl mb-6">
          <h1 className="text-2xl font-bold">Welcome, User</h1>
          <button
            onClick={() => navigate("/logout")} // Replace with actual logout route
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            Logout
          </button>
        </div>
        <div className="text-center mb-8">
          <h2 className="text-lg text-gray-600">
            What would you like to focus on today?
          </h2>
          <p className="text-sm text-gray-500">Choose your wellness path</p>
        </div>

        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 w-full max-w-4xl">
          {/* Physical Health Card */}
          <div className="flex-1 bg-green-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col items-center text-center">
            <div className="mb-4">
              <FaHeart className="text-4xl text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-green-700 mb-2">
              Physical Health
            </h3>
            <p className="text-gray-600 mb-4">
              Workout plans, diet advice, step tracking and BMI calculator
            </p>
            <button
              onClick={() => navigate("/physical-health")}
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Get Started
            </button>
          </div>

          {/* Mental Health Card */}
          <div className="flex-1 bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col items-center text-center">
            <div className="mb-4">
              <FaBrain className="text-4xl text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-blue-700 mb-2">
              Mental Health
            </h3>
            <p className="text-gray-600 mb-4">
              Meditation, breathing exercises, sleep tracking and journaling
            </p>
            <button
              onClick={() => navigate("/mental-health")}
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Get Started
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="#" className="text-blue-600 hover:underline text-sm">
            About Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default CategorySelection;
