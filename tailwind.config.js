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
    extend: {
      colors: {
        secondary_light: "#0468DB",
        secondary_dark: "#3004289",
        bg_gray: "#F5F6F4",
      },
    },
  },
  plugins: [],
};
