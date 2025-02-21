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
      animation: {
        'fade-in': 'fadeIn 3s ease forwards', 
        'bounce-1s': 'bounce 1s ease forwards',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      fontFamily: {
        ubuntu: ["'Ubuntu'", "sans-serif"],
        barlow: ["'Barlow'", "sans-serif"], // Ensure this is correct
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
