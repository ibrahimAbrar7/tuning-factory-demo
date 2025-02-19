import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Use class-based dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Include all relevant directories
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["'Ubuntu'", "sans-serif"], // Custom font
      },
      colors: {
        background: "hsl(var(--background, 0 0% 100%))", // Default value fallback
        foreground: "hsl(var(--foreground, 0 0% 0%))", // Default value fallback
      },
      borderRadius: {
        lg: "var(--radius, 12px)", // Fallback for --radius
        md: "calc(var(--radius, 12px) - 2px)", // Fallback for --radius
        sm: "calc(var(--radius, 12px) - 4px)", // Fallback for --radius
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // Include animation plugin
  ],
};

export default config;
