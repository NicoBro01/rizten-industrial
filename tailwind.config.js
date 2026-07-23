/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  // Le classi stagger-N vengono composte dinamicamente (`stagger-${i + 1}`) nelle pagine
  // che animano liste di card: la stringa completa non compare mai letteralmente nel
  // sorgente, quindi vanno indicate esplicitamente per non essere rimosse in build.
  safelist: ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4', 'stagger-5', 'stagger-6'],
  theme: {
    extend: {
      colors: {
        // Primary brand navy scale
        navy: {
          50: '#EEF3FA',
          100: '#D7E3F3',
          200: '#AFC7E7',
          300: '#87ABDB',
          400: '#5F8FCF',
          500: '#3D6FB0',
          600: '#1F4E86',
          700: '#123566',
          800: '#0B2545',
          900: '#071A32',
          950: '#040F1D',
          DEFAULT: '#0B2545',
        },
        // Neutral steel greys used for text / surfaces
        steel: {
          50: '#F6F8FA',
          100: '#EDF1F5',
          200: '#DCE3EA',
          300: '#BFCAD5',
          400: '#93A2B2',
          500: '#67788C',
          600: '#4C5C70',
          700: '#3A4757',
          800: '#28323F',
          900: '#181F28',
        },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        growLine: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fadeUp .7s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fadeIn .9s ease-out both',
        'grow-line': 'growLine .5s ease-out both',
        'pulse-soft': 'pulseSoft 2.5s ease-in-out infinite',
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,37,69,0.06), 0 1px 3px rgba(11,37,69,0.08)',
        'card-hover': '0 12px 24px -8px rgba(11,37,69,0.25), 0 4px 8px -2px rgba(11,37,69,0.1)',
      },
    },
  },
  plugins: [],
}
