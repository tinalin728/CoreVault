/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all relevant files
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      fontFamily: {
        roboto: ['roboto', 'sans-serif'],
        awaken: ['awaken', 'sans-serif'],
      },
      colors: {
        blue: '#8284B7',
        'nude-red': '#D58D8D',
        'nude-white': '#f5f5f5',
        'darker-white': '#E1DCD0',
        'light-peach': '#FFDFDF',
        'light-purple': '#E2D8FF',
        'accent': '#32302f',
        'text-gray': '#505457'
      },

      boxShadow: {
        'custom': '0 2px 10px rgba(0, 0, 0, 0.1)',
        'glow': '0 0px 10px rgba(238, 81, 255, 0.25)',
        'tag': 'inset 4px 3px 8px rgba(0, 0, 0, 0.15)',
        'inner': 'inset 4px 3px 8px rgba(0, 0, 0, 0.15), inset -2px -2px 2px rgba(251,248,249,0.8)',
        'icon': 'inset 4px 4px 8px rgba(0, 0, 0, 0.25)',
        'inset-2xs': 'inset 0 1px rgb(0 0 0 / 0.05)',
        'inset-xs': 'inset 0 1px 1px rgb(0 0 0 / 0.05)',
        'inset-sm': 'inset 0 2px 4px rgb(0 0 0 / 0.05)',
        'inset-white/20': 'inset 0 4px 8px rgba(255, 255, 255, 0.2)',
      },
      ringColor: {
        'white/15': 'rgba(255, 255, 255, 0.15)',
      },

      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, #f5f5f5, #eeeeee)',
      },
    },
  },
  plugins: [],
});
