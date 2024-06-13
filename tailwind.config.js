/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#1464a0",
        "secondary": "#54a494",
        "tartiary": "#707070",
        "pink": "#EE9AE5",
        "bannerBtn": "#9CAB2F"
      },
      boxShadow: {
        '3xl': '0 10px 50px 0px rgba(0,0,0,0.15)'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

