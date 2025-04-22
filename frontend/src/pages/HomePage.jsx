import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaBrain,
  FaChartLine,
  FaUserPlus,
  FaSignInAlt,
} from "react-icons/fa";
import heroImage from "../images/hero.png";

// Quotes for display
const quotes = [
  "Self-care is how you take your power back.",
  "Your mental health matters. Always.",
  "Healing is not linear, but it is possible.",
  "A calm mind brings inner strength and self-confidence.",
  "You are not alone. Keep going.",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const LandingPage = () => {
  const navigate = useNavigate();
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Floating background shapes */}
      <div className="absolute w-80 h-80 bg-indigo-200 rounded-full opacity-30 blur-3xl top-0 left-0 -z-10 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-purple-200 rounded-full opacity-30 blur-3xl bottom-0 right-0 -z-10 animate-pulse"></div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 py-4 flex justify-between items-center"
      >
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
          <FaHeartbeat className="text-3xl text-indigo-600 mr-2" />
          <span className="text-2xl font-bold text-indigo-800">SAKHA</span>
        </motion.div>
        <div className="flex space-x-4">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/login"
              className="px-4 py-2 text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
            >
              <FaSignInAlt className="mr-2" /> Login
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/register"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center"
            >
              <FaUserPlus className="mr-2" /> Register
            </Link>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-12 md:mb-0"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
            Your Integrated <span className="text-indigo-600">Mind & Body</span>{" "}
            Wellness Companion
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Track your mental health, discover personalized tools, and build
            sustainable habits with our science-backed platform.
          </p>
          <p className="text-sm italic text-indigo-700 mb-8">"{randomQuote}"</p>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <button
              onClick={() => navigate("/register")}
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium"
            >
              Get Started - It's Free
            </button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <motion.img
            src={heroImage}
            alt="Happy person meditating"
            className="rounded-3xl shadow-2xl w-full max-w-md backdrop-blur-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </motion.div>
      </section>

      {/* Value Proposition */}
      <section className="bg-white/60 backdrop-blur-md py-16 rounded-t-3xl shadow-inner">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-gray-800 mb-16"
          >
            How Sakha Helps You Thrive
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-10"
          >
            {[
              {
                icon: <FaBrain className="text-4xl text-indigo-600 mb-4" />,
                title: "Mental Wellness Tools",
                desc: "Access guided meditations, mood tracking, and CBT-based exercises",
              },
              {
                icon: <FaHeartbeat className="text-4xl text-indigo-600 mb-4" />,
                title: "Physical Health Integration",
                desc: "Sync with wearables to see how body metrics affect your mental state",
              },
              {
                icon: <FaChartLine className="text-4xl text-indigo-600 mb-4" />,
                title: "Personalized Insights",
                desc: "AI-powered recommendations based on your unique patterns",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-white/70 backdrop-blur-md rounded-xl p-6 text-center shadow-md hover:shadow-lg transition"
              >
                <div className="flex justify-center">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-gray-600">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Other sections (Testimonials, CTA, Footer) can stay same or be customized similarly */}

      {/* Testimonials */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Trusted by Thousands
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                quote:
                  "Helped me recognize anxiety patterns I didn't know I had",
                author: "Sarah K., Teacher",
              },
              {
                quote: "The breathing exercises stopped my panic attacks",
                author: "Michael T., Software Engineer",
              },
              {
                quote:
                  "Finally a tool that connects my fitness to my mental health",
                author: "Priya M., Nurse",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <p className="text-gray-600 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="font-medium text-indigo-600">
                  — {testimonial.author}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-600 text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Wellbeing?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands taking control of their holistic health today
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button
              onClick={() => navigate("/register")}
              className="inline-block px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition font-medium text-lg"
            >
              Start Your Journey Now
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gray-800 text-white py-8"
      >
        <div className="container mx-auto px-6 text-center">
          <p>© 2023 Sakha. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  );
};

export default LandingPage;
