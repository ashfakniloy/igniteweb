import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "12px",
        screens: {
          lg: "1268px",
          xl: "1268px",
          "2xl": "1268px",
        },
      },
      colors: {
        "royal-blue": "#2405F2",
        "tint-blue": "#1C1E53",
        "dark-blue": "#282938",
        "custom-yellow": "#FCD980",
        "custom-gray": "#F4F6FC",
        "custom-gray2": "#F9FAFD",
        "custom-gray3": "#F4F5F5",
        accent: "#EEF4FA",
      },
      animation: {
        "bounce-right": "bounce-right 1s infinite",
        background: "background 4s ease infinite",
      },
      keyframes: {
        "bounce-right": {
          "0%, 100%": {
            transform: "translatex(25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translatex(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        background: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
