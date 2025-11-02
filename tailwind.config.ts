import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "night-sky": "#050C1B",
        "midnight": "#0B1F3A",
        "aqua": "#31C6F4",
        "soft-white": "#F7FAFC",
        "alert-red": "#FF5A5F",
        "calm-green": "#20C997"
      },
      boxShadow: {
        glow: "0 0 40px rgba(49, 198, 244, 0.25)"
      },
      backgroundImage: {
        grid:
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};

export default config;
