import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    // Apply the current theme to the document body
    document.documentElement.className = theme;

    // Save the theme to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-xl p-2 rounded-full focus:outline-none transition"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <FaMoon className="text-gray-800" />
      ) : (
        <FaSun className="text-yellow-400" />
      )}
    </button>
  );
}

export default ThemeToggle;
