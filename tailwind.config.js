/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        city: "city 2s forwards",
        sheen: "sheen 4s ease infinite",
        glow: "sheen 3s linear infinite",
        tooltip: "tooltip 0.3s ",
        resaturate: "saturate 0.6s 1s forwards",
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
            transform: "translateY(20%)",
            opacity: 0.2,
          },
          "100%": {
            transform: "translateY(0%)",
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
      },
    },
  },
  plugins: [],
};
