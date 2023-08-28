/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      
      keyframes: {
        ping: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '75%': { transform: 'scale(1.1)', opacity: '0' },
          '100%': { transform: 'scale(1.1)', opacity: '0'  },
        },
      },
      animation: {
        'ping-short': 'ping 1s ease-in-out 5'
      }
    },
  },
  plugins: [],
}

