/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        purple: "hsl(259, 100%, 65%)",
        lightRed: "hsl(0, 100%, 67%)",
        white: "hsl(0, 0%, 100%)",
        offWhite: "hsl(0, 0%, 94%)",
        lightGray: "hsl(0, 0%, 86%)",
        smokeyGray: "hsl(0, 1%, 44%)",
        offBlack: "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        poppins: "'Poppins' , sans-serif",
      },
    },
  },
  plugins: [],
};
