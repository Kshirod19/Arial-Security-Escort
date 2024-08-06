/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background3: '#7077A1',
        background2: '#424769', 
        background1: '#2D3250', 
      },
    },
  },
  plugins: [],
}