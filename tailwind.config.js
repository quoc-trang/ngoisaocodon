/** @type {import('tailwindcss').Config} */

const extendTheme = {
    "colors": {
        "secondary": "#020420",
        "primary": "#00DC82",
    },
    keyframes: {
      'slide-up': {
        '0%': {
          opacity: '0',
          transform: 'translateY(20px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
    },
    animation: {
      'slide-up': 'slide-up 1s ease-in-out',
    },
}

module.exports = {
  content: ['./src/components/**/*.{vue,js,ts}', './src/layouts/**/*.{vue,js,ts}', './src/pages/**/*.{vue,js,ts}'],
  theme: {
    extend: extendTheme,
  },
  plugins: [],
  darkMode: 'class',
}