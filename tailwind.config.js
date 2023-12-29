/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/customers/*.liquid",
    "./templates/*.liquid",
  ],
  theme: {
    colors: {
      secondary_400: "#0468DB",
      secondary_600: "#004289",
      background: "#F5F6F4",
    },
  },
  plugins: [],
};
