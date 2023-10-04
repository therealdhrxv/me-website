/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      keyframes: {
        bgMove: {
          "0%, 100%": { backgroundPosition: "top left" },
          "50%": { backgroundPosition: "bottom right" },
        },
      },
      animation: {
        bgMove: "bgMove 5s linear infinite",
      },
    },
  },
  plugins: [],
};
