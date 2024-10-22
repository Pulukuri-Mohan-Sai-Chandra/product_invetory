/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      header_color:"#0D1282",
      body_bg:"#EEEDED",
      dark_gray:"#0B192C"
    },
  },
  plugins: [],
}