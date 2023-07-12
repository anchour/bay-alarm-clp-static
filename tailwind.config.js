/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          sm: "2rem",
        },
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      colors: {
        primary: {
          black: "#010d14",
          white: "#fff",
          red: "#da291c",
          navy: "#082a42",
        },
        secondary: {
          tints: {
            red: "#e15449",
            navy: "#395568",
            blue: "#336f8d",
            gold: "#f1a833",
          },
          shades: {
            red: "#922920",
            navy: "#161f28",
            blue: "#0c2e3f",
            gold: "#b46b04",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
