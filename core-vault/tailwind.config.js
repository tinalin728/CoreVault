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
      lineHeight: {
        normal: '1.618',
      },
      colors: {
        blue: '#8284B7',
        'light-blue': '#e6e6f0',
        'bright-blue': '#868AF3',
        'nude-white': '#f5f5f5',
        'darker-white': '#E1DCD0',
        'accent': '#32302f',
        'text-gray': '#505457'
      },

      ringColor: {
        'white/15': 'rgba(255, 255, 255, 0.15)',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },

      boxShadow: {
        'custom-btn': 'inset 4px 4px 8px rgba(255, 255, 255, 0.2), inset -2px -2px 4px rgba(0, 0, 0, 0.2)',
        'custom-hover': 'inset 3px 3px 5px rgba(0, 0, 0, 0.2)',
        'hover-white': 'inset 3px 3px 5px rgba(255, 255, 255, 0.75)',
        'custom': '0 2px 10px rgba(0, 0, 0, 0.1)',
        'glow': '0 0px 10px rgba(238, 81, 255, 0.25)',

        'inner': 'inset 4px 4px 10px rgba(0, 0, 0, 0.1), inset -2px -2px 2px rgba(255, 255, 255, 0.5)',

        'icon': 'inset 4px 4px 8px rgba(0, 0, 0, 0.25)',

        'feature': 'inset 5px 5px 10px rgba(255, 255, 255, 0.2), inset -2px -2px 8px rgba(0, 0, 0, 0.1)',

        'card-glow': 'inset 2px 2px 6px rgba(255, 255, 255, 0.5), inset -2px -2px 4px rgba(0, 0, 0, 0.2), 0px 0px 15px rgba(175, 183, 210, .5)',

        faq: '3px 3px 2px rgba(0,0,0,0.1),inset 2px 3px 4px rgba(255,255,255,0.5)'

      },
    },
  },
  plugins: [],
});
