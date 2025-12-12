/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html",
    "./**/*.html",
    "./**/*.js",],
  theme: {
    extend: {
      fontFamily : {
        poppins : [ 'poppins' , 'san-serif'],
        bebas_neus : [ 'bebas_neus' , 'san-serif'],
      },
    },
  },
  plugins: [],
}

