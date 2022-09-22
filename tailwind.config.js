/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#ff6363",
        secondry: {
          100: "#e2e2d5",
          200: "#888883"
        }
      },
      fontFamily: {
        body: ["Nunito"]
      }
    },
  },
  plugins: [],
}
