import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Navbar from "../components/Navbar";
import { FaSmile, FaMeh, FaFrown, FaBed } from "react-icons/fa";
import axios from "axios";

const MoodTracker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [moodData, setMoodData] = useState({});
  const [selectedMood, setSelectedMood] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token")); // Assume token is stored on login

  useEffect(() => {
    fetchMoodHistory();
  }, []);

  const moods = [
    { emoji: <FaSmile className="text-yellow-500" />, label: "Happy" },
    { emoji: <FaMeh className="text-gray-500" />, label: "Neutral" },
    { emoji: <FaFrown className="text-red-500" />, label: "Sad" },
    { emoji: <FaBed className="text-blue-500" />, label: "Tired" },
  ];

  const fetchMoodHistory = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/mood/history",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = response.data.reduce((acc, mood) => {
        acc[new Date(mood.date).toDateString()] = moods.find(
          (m) => m.label === mood.mood
        );
        return acc;
      }, {});
      setMoodData(data);
    } catch (err) {
      console.error("Error fetching mood history:", err);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const dateStr = date.toDateString();
    setSelectedMood(moodData[dateStr] || null);
  };

  const handleMoodSelect = async (mood) => {
    const dateStr = selectedDate.toDateString();
    try {
      await axios.post(
        "http://localhost:5000/api/mood",
        { date: selectedDate, mood: mood.label },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMoodData((prev) => ({ ...prev, [dateStr]: mood }));
      setSelectedMood(mood);
    } catch (err) {
      console.error("Error saving mood:", err);
    }
  };

  const tileContent = ({ date }) => {
    const dateStr = date.toDateString();
    const mood = moodData[dateStr];
    return mood ? <span className="text-lg">{mood.emoji}</span> : null;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-8">
          Mood Tracker
        </h1>
        <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            tileContent={tileContent}
            className="mb-6 w-full border-none"
          />
          <div className="text-center mb-6">
            <h2 className="text-lg text-gray-700 font-medium">
              Selected Date: {selectedDate.toDateString()}
            </h2>
            {selectedMood && (
              <p className="text-xl mt-2 flex items-center justify-center">
                Current Mood: {selectedMood.emoji}{" "}
                <span className="ml-2">{selectedMood.label}</span>
              </p>
            )}
          </div>
          <div className="flex justify-center space-x-4">
            {moods.map((mood, index) => (
              <button
                key={index}
                onClick={() => handleMoodSelect(mood)}
                className="w-12 h-12 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-gray-100 transition transform hover:scale-110"
              >
                {mood.emoji}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodTracker;
