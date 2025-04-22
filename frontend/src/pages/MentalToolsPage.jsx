import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MentalToolsPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Meditation Guides");
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Define render functions inside the component
  const renderMeditation = () => (
    <div>
      <h2 className="text-xl font-semibold mb-4">Meditation Guides</h2>
      <p className="text-gray-600 mb-4">
        Discover calm and clarity through guided meditation
      </p>
      <div className="bg-blue-50 p-4 rounded-lg mb-4">
        <h3 className="text-lg font-medium mb-2">
          Mindful Breathing (5 minutes)
        </h3>
        <p className="text-gray-700 mb-2">
          A simple meditation focusing on your breath, perfect for beginners.
        </p>
        <ol className="list-decimal list-inside text-gray-700 mb-4">
          <li>Find a comfortable seated position</li>
          <li>Close your eyes or maintain a soft gaze</li>
          <li>Notice your breath without trying to change it</li>
          <li>When your mind wanders, gently return focus to your breath</li>
          <li>
            Continue for 5 minutes, gradually increasing time as you practice
          </li>
        </ol>
        <button
          onClick={() => setTimer(300)} // 5 minutes in seconds
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Start Meditation
        </button>
        <div className="mt-4">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/Yb4H-VwYf2A"
            title="Mindful Breathing Guide"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-medium mb-2">
          Body Scan Meditation (10 minutes)
        </h3>
        <p className="text-gray-700 mb-2">
          Progressively relax your body from head to toe.
        </p>
        <ol className="list-decimal list-inside text-gray-700 mb-4">
          <li>Lie down in a comfortable position</li>
          <li>Bring awareness to your body, starting with your toes</li>
          <li>Slowly move attention up through each part of your body</li>
          <li>Notice sensations without judging them</li>
          <li>Complete the scan by bringing awareness to your whole body</li>
        </ol>
        <button
          onClick={() => setTimer(600)} // 10 minutes in seconds
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Start Meditation
        </button>
      </div>
    </div>
  );

  const renderBreathing = () => (
    <div>
      <h2 className="text-xl font-semibold mb-4">Breathing Exercises</h2>
      <p className="text-gray-600 mb-4">
        Practice calming techniques with guided visuals
      </p>
      <div className="bg-blue-50 p-4 rounded-lg mb-4">
        <h3 className="text-lg font-medium mb-2">
          4-7-8 Breathing (4 minutes)
        </h3>
        <p className="text-gray-700 mb-2">
          A technique to reduce anxiety and improve focus.
        </p>
        <img
          src="https://media.giphy.com/media/l0HlRnAWXxn0vfyC0/giphy.gif" // Replace with actual GIF URL
          alt="4-7-8 Breathing GIF"
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <button
          onClick={() => setTimer(240)} // 4 minutes in seconds
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Start Breathing
        </button>
        {timer > 0 && (
          <div className="mt-4 text-lg font-medium">
            Time Remaining: {Math.floor(timer / 60)}:
            {timer % 60 < 10 ? "0" : ""}
            {timer % 60}
          </div>
        )}
      </div>
    </div>
  );

  const renderTips = () => (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Tips for stress, burnout, etc
      </h2>
      <p className="text-gray-600 mb-4">
        Practical advice to manage stress and improve well-being
      </p>
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-medium mb-2">Stress Management</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Take short breaks every hour to stretch or walk</li>
          <li>Practice deep breathing for 2-3 minutes when overwhelmed</li>
          <li>Set boundaries to avoid overcommitting</li>
        </ul>
        <h3 className="text-lg font-medium mb-2">Burnout Prevention</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Prioritize sleep and maintain a consistent schedule</li>
          <li>Engage in hobbies to recharge mentally</li>
          <li>Seek support from friends or professionals if needed</li>
        </ul>
      </div>
    </div>
  );

  const tabs = [
    { name: "Meditation Guides", content: renderMeditation },
    { name: "Breathing Exercises", content: renderBreathing },
    { name: "Tips for stress, burnout, etc", content: renderTips },
  ];

  useEffect(() => {
    let interval;
    if (isRunning && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else if (timer === 0 && isRunning) {
      setIsRunning(false);
      alert("Exercise complete!");
    }
    return () => clearInterval(interval);
  }, [isRunning, timer]);

  const handleStart = () => {
    setIsRunning(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-blue-600">Mental Health</h1>
        <button
          onClick={() => navigate("/")}
          className="px-3 py-1 bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300"
        >
          Home
        </button>
      </div>
      <div className="flex space-x-4 mb-4 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-4 py-2 rounded-t-lg ${
              activeTab === tab.name
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        {tabs.find((tab) => tab.name === activeTab).content()}
      </div>
      {isRunning && timer > 0 && (
        <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
          <button onClick={() => setIsRunning(false)} className="mr-2">
            Stop
          </button>
          Time Remaining: {Math.floor(timer / 60)}:{timer % 60 < 10 ? "0" : ""}
          {timer % 60}
        </div>
      )}
    </div>
  );
};

export default MentalToolsPage;
