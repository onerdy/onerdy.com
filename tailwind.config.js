/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
        colors: {
        // Custom color names are not needed yet since we are using the following tailwind default colors:
        // cyan-300 (#67e8f9)
        // blue-950 (#172554)
        // orange-700 (#c2410c)
        // slate-800 (#1e293b)
        'primary': '#1e293b',
        'secondary': '#67e8f9',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      fontFamily: {
        'comfortaa' : 'Comfortaa'
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle .2s ease-in-out 3',
      }
    },
  },
  plugins: [],
}
