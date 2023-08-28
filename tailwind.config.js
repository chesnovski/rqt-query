/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      
      keyframes: {
        ping: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '25%': { transform: 'scale(1)', opacity: '0.5' },
          '50%': { transform: 'scale(1.1)', opacity: '0' },
          '75%': { transform: 'scale(1)', opacity: '0.75'  },
          '100%': { transform: 'scale(1)', opacity: '1'  },
        },
      },
      animation: {
        'ping-short': 'ping 1s cubic-bezier(0, 0, 0.2, 1) 8'
      }
    },
  },
  plugins: [],
}

