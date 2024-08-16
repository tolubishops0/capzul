/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "right-bggradient":
          "linear-gradient(324.93deg, #007aff 0.74%, #0f70da 100%)",
        "circle-bggradient":
          "linear-gradient(324.93deg, #0F70DA 0.74%, #007AFF 100%)",
      },
    },
  },
  plugins: [],
};
