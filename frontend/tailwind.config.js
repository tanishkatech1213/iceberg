/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cute: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        pastel: {
          pink: '#ffb3d9',
          purple: '#d4b3ff',
          blue: '#b3d9ff',
          yellow: '#fff2b3',
          green: '#b3ffd9',
          orange: '#ffd9b3',
        },
        soft: {
          pink: '#ffeef7',
          purple: '#f4f0ff',
          blue: '#f0f8ff',
          yellow: '#fffef0',
          green: '#f0fff4',
          orange: '#fff8f0',
        }
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sparkle: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.1) rotate(180deg)' },
        }
      },
      fontFamily: {
        'cute': ['Comic Sans MS', 'cursive'],
      }
    },
  },
  plugins: [],
}
