import React from "react";
import Navbar from "../components/Navbar";

const PhysicalHealthPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex flex-col items-center justify-center p-6 min-h-[calc(100vh-64px)]">
        <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-6xl font-bold text-green-600 mb-4">
            Work Under Progress
          </h1>

          <div className="mt-6 flex justify-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-200"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhysicalHealthPage;
