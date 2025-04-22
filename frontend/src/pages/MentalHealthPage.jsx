import React, { useState } from "react";
import API from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";
import MentalHealthChatbot from "../components/MentalHealthChatbot";

const MentalHealthPage = () => {
  const [issues, setIssues] = useState([]);
  const [savedIssues, setSavedIssues] = useState([]);
  const [showChatbot, setShowChatbot] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setIssues((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleSave = async () => {
    try {
      await API.post("/auth/user/save-issues", { issues });
      alert("Issues Saved Successfully");
      setSavedIssues(issues);
      setShowChatbot(true);
    } catch (err) {
      alert("Failed to save issues");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Mental Health Self-Check</h1>
      <p className="text-red-600 mb-4">
        <i>Not a substitute for professional clinical help.</i>
      </p>

      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-6">
        {/* Left column: Checkboxes */}
        <div className="w-full md:w-1/2">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">
              Check all that apply to you:
            </h2>

            <div className="space-y-3">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value="stress"
                  onChange={handleCheckboxChange}
                  className="h-5 w-5"
                />
                <span>Stress – Constant tension, feeling overwhelmed</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value="anxiety"
                  onChange={handleCheckboxChange}
                  className="h-5 w-5"
                />
                <span>Anxiety – Excessive worry, restlessness, or panic</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value="depression"
                  onChange={handleCheckboxChange}
                  className="h-5 w-5"
                />
                <span>
                  Depression – Persistent sadness, hopelessness, lack of
                  motivation
                </span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value="loneliness"
                  onChange={handleCheckboxChange}
                  className="h-5 w-5"
                />
                <span>Loneliness – Feeling isolated, even around others</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value="sleep_issues"
                  onChange={handleCheckboxChange}
                  className="h-5 w-5"
                />
                <span>
                  Sleep Issues – Insomnia, oversleeping, or disturbed sleep
                </span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value="mood_swings"
                  onChange={handleCheckboxChange}
                  className="h-5 w-5"
                />
                <span>Mood Swings – Rapid, intense emotional shifts</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value="irritability"
                  onChange={handleCheckboxChange}
                  className="h-5 w-5"
                />
                <span>Irritability – Easily angered or frustrated</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value="low_energy"
                  onChange={handleCheckboxChange}
                  className="h-5 w-5"
                />
                <span>Low Energy – Constant fatigue, even after rest</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value="concentration_problems"
                  onChange={handleCheckboxChange}
                  className="h-5 w-5"
                />
                <span>
                  Concentration Problems – Trouble focusing or making decisions
                </span>
              </label>

              <label className="flex items-center space-x-2 text-red-600">
                <input
                  type="checkbox"
                  value="self_harm_thoughts"
                  onChange={handleCheckboxChange}
                  className="h-5 w-5"
                />
                <span>
                  Self-Harm/Suicidal Thoughts – Thoughts of hurting oneself
                </span>
              </label>
            </div>

            <div className="mt-6 flex space-x-4">
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Save Issues
              </button>
              <button
                onClick={() => navigate("/category-selection")}
                className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
              >
                Back
              </button>
            </div>
          </div>
        </div>

        {/* Right column: Chatbot */}
        <div className="w-full md:w-1/2">
          {showChatbot ? (
            <MentalHealthChatbot issues={savedIssues} />
          ) : (
            <div className="bg-white p-6 rounded-lg shadow h-full flex items-center justify-center">
              <p className="text-gray-500 text-center">
                Select your concerns and save them to start a conversation with
                our AI assistant
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-row items-center justify-between gap-2 ">
        <button
          onClick={() => navigate("/mental-tools")}
          className="mt-5 px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition"
        >
          Access Mental Tools
        </button>
        <button
          onClick={() => navigate("/immediate-support")}
          className="mt-5 px-6 py-2 bg-red-400 text-white rounded-lg hover:bg-red-500 transition"
        >
          Immediate Support
        </button>
      </div>
    </div>
  );
};

export default MentalHealthPage;
