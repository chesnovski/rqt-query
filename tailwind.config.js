/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        '22': '5.5rem',
        '26': '6.5rem'
        
      },
      
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
        'ping-short': 'ping 1s cubic-bezier(0, 0, 0.2, 1) 5'
      }
    },
  },
  plugins: [],
}

