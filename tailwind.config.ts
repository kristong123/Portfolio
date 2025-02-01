import type { Config } from 'tailwindcss'

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        dark1: '#484669',
        dark2: '#54526b',
        light1: '#c7c7db',
        light2: '#a8a7c4',
      },
      spacing: {
        'sidebar': 'var(--sidebar-width)',
        'sidebar-plus': 'calc(var(--sidebar-width) + 1rem)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        DEFAULT: '0 5px 5px rgba(0, 0, 0, 0.3)',
        'lg': '0 7px 7px rgba(0, 0, 0, 0.3)',
      },  
      borderRadius: {
        DEFAULT: '15px',
      },
      textShadow: {
        DEFAULT: '0px 4px 4px rgba(0, 0, 0, 0.3)',
      },
      transition: {
        DEFAULT: 'all duration-300 ease-out'
      },
    }
  },
  plugins: [
    require('tailwindcss-textshadow')
  ]
} satisfies Config