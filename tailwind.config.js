/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'regal-blue': '#243c5a',
        'biscay':'#1C3B64',
        'blackPearl':"#030b16",
        'royalBlue':"#3444f1",
        'white': "#FFFFFF",
        'black':"#010101",
        'whiteOpacity35': "#FFFFFF35",
        'red': "#FF0000",
        'gallery': "#ECECEC",
        'alabaster': "#f7f7f7",
        'alabasterDark': "#F5F5F5",
        'mirage': "#181924",
        'gray': "#8E8E8E",
        'codGray': "#0B0B0B",
        "raven":"#212122"
      }
    },
  },
  plugins: [],
}
