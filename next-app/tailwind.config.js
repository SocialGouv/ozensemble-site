/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "oz-blue": "#4030a5",
        "oz-green": "#115F3D", //color changed for more contrast
        "oz-pink": "#de285e",
        "oz-gray": "#f7f7f7",
      },
    },
  },
  plugins: [],
}
