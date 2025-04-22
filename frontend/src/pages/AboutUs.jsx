import React from "react";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold text-center text-cyan-600 mb-12">
          About Us
        </h1>
        <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg space-y-12">
          {/* Mission Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At SAKHA, our mission is to empower individuals to take charge of
              their mental and physical well-being through innovative,
              accessible, and user-friendly tools. We aim to create a supportive
              ecosystem that promotes holistic health, helping users thrive in
              their daily lives.
            </p>
          </section>

          {/* Approach Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Approach
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We combine cutting-edge technology with evidence-based practices
              to deliver personalized wellness solutions. Our approach focuses
              on mindfulness, physical activity tracking, and community support,
              ensuring a balanced and sustainable health journey for everyone.
            </p>
          </section>

          {/* Team Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Team
            </h2>
            <ul className="text-gray-600 space-y-2">
              <li>
                <strong>Binayak Panda</strong> - Developer
              </li>
              <li>
                <strong>Abhraneel Dhar</strong> - Developer
              </li>
              <li>
                <strong>Harsh Vardhan Seth</strong> - Researcher
              </li>
              <li>
                <strong>Anubhav Das</strong> - Researcher
              </li>
              <li>
                <strong>Ayushman Bal</strong> - Advisor
              </li>
              <li>
                <strong>Aditya Shaw</strong> - Advisor
              </li>
            </ul>
          </section>

          {/* Get in Touch Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We’d love to hear from you! Reach out to us at{" "}
              <a
                href="mailto:support@sakha.com"
                className="text-blue-600 hover:underline"
              >
                support@sakha.com
              </a>{" "}
              or call us at{" "}
              <a
                href="tel:+1234567890"
                className="text-blue-600 hover:underline"
              >
                +1-234-567-890
              </a>
              . We’re here to assist you with any questions or feedback.
            </p>
          </section>

          {/* Socials Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Socials
            </h2>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/company/sakha-health"
                className="text-blue-600 hover:text-blue-800"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/sakhahealth"
                className="text-blue-600 hover:text-blue-800"
              >
                Twitter
              </a>
              <a
                href="https://github.com/sakhahealth"
                className="text-blue-600 hover:text-blue-800"
              >
                GitHub
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
