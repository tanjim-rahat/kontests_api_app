/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#2a2a2a",
        dark2: "#252525",
        dark3: "#333333",

        main: "#3177ff",
      },
    },
  },
  plugins: [],
};
