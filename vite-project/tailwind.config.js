/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        "layout": "8% 84% 8%",
        "repeat": "min-content"
      },
    },
  },
  plugins: [],
}

