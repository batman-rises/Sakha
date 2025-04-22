import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "CategorySelection", path: "/category-selection" },
    { name: "Mood Tracker", path: "/mood-tracker" },
    { name: "Journal", path: "/journal" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="bg-gray-50 p-4 shadow">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div
          className="text-2xl font-bold text-green-600"
          onClick={() => navigate("/")}
        >
          SAKHA
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`text-gray-600 hover:text-blue-600 ${
                location.pathname === item.path ? "font-bold" : ""
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
        {isOpen && (
          <div className="md:hidden absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  setIsOpen(false);
                }}
                className={`block w-full text-left text-gray-600 hover:text-blue-600 ${
                  location.pathname === item.path ? "font-bold" : ""
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
