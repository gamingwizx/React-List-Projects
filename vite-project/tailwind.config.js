/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        "layout": "auto 1fr auto",
        "repeat": "min-content"
      },
      fontSize: {
      },
      inset: {
        "1px": "1px"
      }
    },
  },
  plugins: [],
}

