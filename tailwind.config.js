/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./src/*/*.{js,jsx,ts,tsx}"
  ],
  safelist: [
    'bg-*',
    'text-*'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

