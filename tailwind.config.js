/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tealbrand: {
          DEFAULT: "#2c7a7b",
          light: "#94d9bc",
        },
      },
      boxShadow: {
        brand: "0 12px 28px rgba(0,0,0,0.16)",
      },
      borderRadius: {
        xl2: "14px",
      },
    },
  },
  plugins: [],
}
