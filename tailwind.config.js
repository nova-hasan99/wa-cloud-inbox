/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        wa: {
          primary: '#0F766E',
          dark: '#134E4A',
          teal: '#115E59',
          outbound: '#DCF8C6',
          panel: '#EDEDED',
          chat: '#E5DDD5',
          unread: '#0F766E',
          read: '#34B7F1',
          danger: '#DC2626',
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        bubble: '0 1px 0.5px rgba(11,20,26,.13)',
        panel: '0 2px 5px rgba(11,20,26,.16)',
      },
      animation: {
        'fade-in': 'fadeIn 200ms ease-out',
        'slide-up': 'slideUp 200ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(8px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
