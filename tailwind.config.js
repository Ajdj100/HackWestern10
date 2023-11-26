/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        titleBar: '#0A191F',
        background: '#FBFBFB',
        darkBackground: '#E9E9E9',
        brandColor: "#F886D1",
        UIGreen: "#18B758",
        UIGreenHover: "#169B4B",
        UIRed: "#BF0B0B",
      }
    },
  },
  plugins: [],
}