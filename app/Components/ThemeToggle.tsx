"use client";

import { useContext } from "react";
 // Adjust the path accordingly
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { ThemeContext } from "./ThemeProvider";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed top-40 right-3 md:right-10 p-2 bg-gray-100 dark:bg-gray-900 dark:border border border-gray-400 dark:border-gray-500 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none z-50 animate-bounce duration-3000"
    >
      {theme === "light" ? (
        <MdLightMode className="w-6 h-6 text-yellow-500" />
      ) : (
        <MdDarkMode className="w-6 h-6 text-[#73c0fc]" />
      )}
    </button>
  );
};

export default ThemeToggle;
