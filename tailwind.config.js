/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/js/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      width: {
        '128': '32rem',
      },
      height: {
        '128': '32rem',
      },
      screens: {
        'xs': '475px',
        'max-xl': {'max': '1279px'},
        'max-lg': {'max': '1023px'},
        'max-md': {'max': '767px'},
        'max-sm': {'max': '639px'},
        'max-xs': {'max': '475px'},
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
