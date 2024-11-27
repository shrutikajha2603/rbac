import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa"; // Import Moon and Sun icons
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [isDarkMode, setIsDarkMode] = useState(false); 

  // Toggle between light and dark modes
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* Hero Section */}
      <section
        className={`bg-gradient-to-r from-blue-600 to-purple-600 py-16 ${
          isDarkMode ? "text-gray-100" : "text-white"
        }`}
      >
        <div className="container mx-auto text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-yellow-300">VRV Security</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Protecting digital assets with AI-powered cybersecurity solutions.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Why Choose <span className="text-blue-400">Us</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div
              className={`p-6 rounded-lg shadow-lg ${
                isDarkMode ? "bg-gray-800" : "bg-gray-200"
              }`}
            >
              <div className="text-yellow-300 text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-semibold mb-2">
                AI-Powered Security
              </h3>
              <p className={`${isDarkMode ? "text-gray-400" : "text-gray-700"}`}>
                Our AI-driven solutions proactively protect your systems from
                threats.
              </p>
            </div>
            {/* Feature 2 */}
            <div
              className={`p-6 rounded-lg shadow-lg ${
                isDarkMode ? "bg-gray-800" : "bg-gray-200"
              }`}
            >
              <div className="text-yellow-300 text-4xl mb-4">☁️</div>
              <h3 className="text-2xl font-semibold mb-2">Cloud Protection</h3>
              <p className={`${isDarkMode ? "text-gray-400" : "text-gray-700"}`}>
                Safeguard your cloud infrastructure with our advanced VAPT
                services.
              </p>
            </div>
            {/* Feature 3 */}
            <div
              className={`p-6 rounded-lg shadow-lg ${
                isDarkMode ? "bg-gray-800" : "bg-gray-200"
              }`}
            >
              <div className="text-yellow-300 text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-semibold mb-2">
                End-to-End Security
              </h3>
              <p className={`${isDarkMode ? "text-gray-400" : "text-gray-700"}`}>
                From endpoints to servers, we provide comprehensive protection.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Dashboard;


