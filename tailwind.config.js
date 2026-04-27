/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        zinc: {
          50: '#fafafa', 100: '#f4f4f5', 200: '#e4e4e7',
          300: '#d4d4d8', 400: '#a1a1aa', 500: '#71717a',
          600: '#52525b', 700: '#3f3f46', 800: '#27272a',
          900: '#18181b', 950: '#09090b',
        },
        violet: {
          400: '#a78bfa', 500: '#8b5cf6', 600: '#7c3aed',
          700: '#6d28d9', 800: '#5b21b6', 900: '#4c1d95', 950: '#2e1065',
        },
      },
      fontFamily: {
        sans:    ['var(--font-geist-sans)',    'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-geist-mono)',    'monospace'],
      },
      animation: {
        'fade-in':  'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float':    'float 6s ease-in-out infinite',
        'progress': 'progress 1s cubic-bezier(0.4,0,0.2,1) forwards',
      },
      keyframes: {
        fadeIn:   { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp:  { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        float:    { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-16px)' } },
        progress: { '0%': { transform: 'scaleX(0)' }, '100%': { transform: 'scaleX(1)' } },
      },
    },
  },
  plugins: [],
};
