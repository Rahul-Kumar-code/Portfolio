/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#58ffe2',
        'accent-dark': '#3dd1b5',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 60px rgba(88, 255, 226, 0.35)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        floatReverse: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(14px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        pulsate: {
          '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
          '50%': { opacity: 0.9, transform: 'scale(1.08)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        cursor: {
          '0%, 40%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'float-slow': 'float 14s ease-in-out infinite',
        'float-reverse': 'floatReverse 10s ease-in-out infinite',
        pulsate: 'pulsate 6s ease-in-out infinite',
        shimmer: 'shimmer 18s linear infinite',
        'cursor-blink': 'cursor 1s steps(2, start) infinite',
      },
    },
  },
  plugins: [],
}

