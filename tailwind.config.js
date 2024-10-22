/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        city: "city 2s forwards",
        myName: "myName 4s ease infinite",
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
        myName: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "top left",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "bottom right",
          },
        },
      },
    },
  },
  plugins: [],
};
