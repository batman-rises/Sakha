import React from "react";
import { useNavigate } from "react-router-dom";

const ImmediateSupportPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Immediate Support</h1>
      <p className="text-red-600 mb-4">
        <i>Not a substitute for clinical help</i>
      </p>
      <div className="mb-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2">Emergency Helplines</h2>
        <ul className="list-disc pl-5">
          <li>
            India:{" "}
            <a href="tel:+918800498333" className="text-blue-600">
              +91-8800-498-333
            </a>
            (AASRA)
          </li>
          <li>
            USA:
            <a href="tel:+18002738255" className="text-blue-600">
              1-800-273-8255
            </a>{" "}
            (National Suicide Prevention Lifeline)
          </li>
        </ul>
      </div>
      <div className="mb-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2">Certified Therapists</h2>
        <ul className="list-disc pl-5">
          <li>
            <a
              href="https://www.betterhelp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              BetterHelp
            </a>
          </li>
          <li>
            <a
              href="https://www.talkspace.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              Talkspace
            </a>
          </li>
        </ul>
      </div>
      <div className="mb-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2">Calming Videos</h2>
        <iframe
          width="100%"
          height="200"
          src="https://www.youtube.com/embed/Yb4H-VwYf2A" // Example meditation video
          title="Calming Meditation"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          width="100%"
          height="200"
          src="https://www.youtube.com/embed/ZToicYcHIOU" // Example talkdown video
          title="Calming Talkdown"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="mt-4"
        ></iframe>
      </div>
      <div className="mb-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2">Quick Contact</h2>
        <textarea
          className="w-full p-2 border border-gray-300 rounded mb-2"
          rows="4"
          placeholder="Type your message here..."
        ></textarea>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => alert("Message sent! (Simulated)")}
        >
          Send
        </button>
      </div>
      <button
        onClick={() => navigate("/category-selection")}
        className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
      >
        Back to Category Selection
      </button>
    </div>
  );
};

export default ImmediateSupportPage;
