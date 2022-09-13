/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '786px',
      lg: '1024px',
      xl: '1440px'
    },
    extend: {
      colors: {
        tealed: 'hsl(164, 37%, 71%)',
        yellowed: 'hsl(45, 100%, 69%)',
        blued: 'hsl(246, 40%, 24%)',
        tealedlight: 'hsl(158, 34%, 86%)'
      }
    },
  },
  plugins: [],
}
