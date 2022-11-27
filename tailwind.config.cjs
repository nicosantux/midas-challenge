/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      screens: {
        mobile: '320px',
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px',
      },
      colors: {
        primary: colors.purple,
        success: colors.green,
        error: colors.red,
        warning: colors.amber,
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'loading-pulse': 'loading-pulse 1s linear infinite',
      },
      keyframes: {
        'loading-pulse': {
          '0%': { transform: 'scale(0); opacity: 1;' },
          '100%': { transform: 'scale(1); opacity: 0' },
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: 'min(1920px, 90%)',
          marginInline: 'auto',
        },
      })
    },
  ],
}
