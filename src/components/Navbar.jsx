import React from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar({ isDarkMode, toggleDarkMode }) {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">
          <Link to="/dashboard" className="hover:text-yellow-300">
            VRV Security
          </Link>
        </h1>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li>
            <Link to="/users" className="hover:text-yellow-300">
              Users
            </Link>
          </li>
          <li>
            <Link to="/roles" className="hover:text-yellow-300">
              Roles
            </Link>
          </li>
          <li>
            <Link to="/permissions" className="hover:text-yellow-300">
              Permissions
            </Link>
          </li>
        </ul>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200 p-2 rounded-full shadow hover:bg-gray-400 dark:hover:bg-gray-600 transition"
        >
          {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
