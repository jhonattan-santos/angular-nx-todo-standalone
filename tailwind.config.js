/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/**/*.{html,ts}",
    "./libs/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      gray: "#1E1E24",
      red: "#92140C",
      white: "#FFF8F0",
      pink: "#FFCF99",
      blue: "#111D4A",
    },
    extend: {},
  },
  plugins: [],
}
