/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors:{
      'dark-mode-element':'hsl(209, 23%, 22%)',
      'dark-mode-background':'hsl(207, 26%, 17%)',
      'dark-mode-text':'hsl(0, 0%, 100%)',
      'light-mode-element':'hsl(0, 0%, 100%)',
      'light-mode-input':'hsl(0, 0%, 52%)',
      'light-mode-background':'hsl(0, 0%, 98%)',
      'light-mode-text':'hsl(200, 15%, 8%)',
      'translucid-black': '#0000005e',
      'transparent-black': ' #19181F80',
    },
    extend: {},
  },
  plugins: [],
}