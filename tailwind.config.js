module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        brand: "#d7004f",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
