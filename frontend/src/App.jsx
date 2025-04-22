import React from "react";
import { Routes, Route } from "react-router-dom";
import CategorySelection from "./pages/CategorySelection";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MentalHealthPage from "./pages/MentalHealthPage";
import PhysicalHealthPage from "./pages/PhysicalHealthPage";
import NotFound from "./pages/NotFound";
import ImmediateSupportPage from "./pages/ImmediateSupportPage";
//import Chatbot from "./pages/Chatbot";
import HomePage from "./pages/HomePage";
import MentalToolsPage from "./pages/MentalToolsPage";
import MoodTracker from "./pages/MoodTracker";
import AboutUs from "./pages/AboutUs";
import Journal from "./pages/journal";

//import MentalToolsPage from "./pages/MentalToolsPage";
//import PhysicalToolsPage from "./pages/PhysicalToolsPage";
//import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/category-selection" element={<CategorySelection />} />
      <Route path="/mental-health" element={<MentalHealthPage />} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/physical-health" element={<PhysicalHealthPage />} />
      <Route path="/immediate-support" element={<ImmediateSupportPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/mental-tools" element={<MentalToolsPage />} />
      <Route path="/mood-tracker" element={<MoodTracker />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
