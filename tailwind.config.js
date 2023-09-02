/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/js/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        progress: 'progress 30s cubic-bezier(.15,.36,.24,.67) 0s 1'
      },
      keyframes: {
        progress: {
          '0%': { width: '5%' },
          '100%': { width: '100%' },
        },
      },
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
