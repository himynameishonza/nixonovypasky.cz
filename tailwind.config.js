module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'PressStart2P': ['"Press Start 2P"', 'cursive'] // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}