/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      lexend: ["Lexend", "sans-serif"],
      mono: ["Space mono", "mono"],
    },
    fontSize: {
      "5xl": "89.8px",
      "4xl": "67.3px",
      "3xl": "50.5px",
      "2xl": "37.9px",
      xl: "28.4px",
      lg: "21.3px",
      base: "16px",
      sm: "12px",
      "5xl-sm": "47.8px",
      "4xl-sm": "39.8px",
      "3xl-sm": "33.2px",
      "2xl-sm": "27.7px",
      "xl-sm": "23px",
      "lg-sm": "19.2px",
      "base-sm": "16px",
      "sm-sm": "13.3px",
    },
    extend: {
      animation: {
        city: "city 2s forwards",
        sheen: "sheen 4s ease infinite",
        glow: "sheen 3s linear infinite",
        tooltip: "tooltip 0.3s forwards",
        resaturate: "saturate 0.6s 1s forwards",
        swipe: "swipe 1.6s infinite;",
      },
      keyframes: {
        city: {
          "0%": {
            color: "white",
          },
          "100%": {
            color: "#c0362c",
          },
        },
        sheen: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "top left",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "bottom right",
          },
        },
        tooltip: {
          "0%": {
            transform: "translateY(60%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(40%)",
            opacity: 1,
          },
        },
        saturate: {
          "0%": {
            filter: "saturate(0)",
          },
          "100%": {
            filter: "saturate(1)",
          },
        },
        swipe: {
          "0%": {
            transform: "none",
            opacity: 0,
            "animation-timing-function": "cubic-bezier(0, 0.3, 0.6, 1)",
          },
          "30%": {
            transform: "translateY(-70%)",
            opacity: 1,
          },
          "100%": {
            transform: "translateY(-100%)",
            opacity: 0,
          },
        },
      },
    },
  },
};
