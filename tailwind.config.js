/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    // screens: {
    //   'md': '769px',
    // },
    extend: {
      backgroundImage: {
  'gradient-radial-to-br': 'linear-gradient(to right, rgba(15,16,20,1) 1%,rgba(15,16,20,1) 3%,rgba(15,16,20,1) 7%,rgba(15,16,20,1) 16%,rgba(15,16,20,1) 27%,rgba(15,16,20,0.65) 33%,rgba(15,16,20,0.65) 34%,rgba(0,0,0,0.04) 51%,rgba(0,0,0,0) 53%,rgba(0,0,0,0) 100%)',
  'radial-gradient': 'radial-gradient(circle farthest-side at right top, hsl(36, 100%, 50%) 1%, hsl(215, 28%, 17%) 40%, hsl(215, 28%, 17%) 100%)'
      }
    },
  },
  plugins: [],
}

