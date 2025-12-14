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
        quantify : [ 'quantify' , 'san-serif'],
      },
      keyframes: {
        softBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        softBounce: 'softBounce 2s ease-in-out infinite',
        softBounceDelay: 'softBounce 2s ease-in-out infinite 0.3s',
      },
    },
  },
  plugins: [],
}

