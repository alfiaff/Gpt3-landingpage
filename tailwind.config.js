/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        baseCustom: '#040C18',
        buttonColor: '#FF4820',
        textParagraph: '#749FCA',
        emailField: '#062D56'
      },
      
    },
  },
  plugins: [],
}