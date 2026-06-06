/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        'k-gray-10': '#F6F6F9',
        'k-gray-20': '#EFF0F6',
        'k-gray-21': '#EEEDED',
        'k-gray-25': '#E0E0E0',
        'k-gray-40': '#A7A7A7',
        'k-gray-60': '#686868',
        'k-red': '#FF3D4A',
        'k-red-lighter': '#F1E1E4',
        'k-primary': '#00E3C2',
        'k-primary-light': '#5BE2C4',
        'k-primary-ultra-light': '#B2E7DF',
        'k-secondary': '#060F26',
        'k-secondary-light': '#2D313D',
        'k-secondary-lighter': '#606B89',
      },
      backgroundImage: {
        'k-blue-gradient': 'linear-gradient(20.06deg, #182233 26.91%, #1D2744 45.75%, #293571 83.1%, #344197 110.93%)',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

