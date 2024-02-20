// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      home: 'font-sans',
      h1: 'Arvo',
    },
    extend: {
      screens: {
        xl: '1920px',
      },
      height: {
        '850': '850px',
      },
      
    },
  },
  plugins: [],
}
