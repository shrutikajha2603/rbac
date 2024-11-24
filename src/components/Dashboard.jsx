import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa"; // Import Moon and Sun icons
import Navbar from "../components/Navbar";

function Dashboard() {
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

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
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}`}>
      <Navbar />
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          {/* Toggle Button with Icon */}
          <button
            onClick={toggleDarkMode}
            className="bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200 p-2 rounded-full shadow hover:bg-gray-400 dark:hover:bg-gray-600 transition"
          >
            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-4 border-b-2 border-gray-300 pb-2">
          <button
            className={`px-4 py-2 rounded ${
              isDarkMode
                ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            Users
          </button>
          <button
            className={`px-4 py-2 rounded ${
              isDarkMode
                ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            Roles
          </button>
          <button
            className={`px-4 py-2 rounded ${
              isDarkMode
                ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            Permissions
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

