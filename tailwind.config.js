/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1E365D',
          700: '#1A2F52',
          800: '#152744',
          900: '#0F1D33',
        },
        ink: '#0A0A0A',
        body: '#757575',
        'body-dark': '#656565',
        surface: '#F0F0F0',
        'surface-2': '#E8E8E6',
        line: 'rgba(0,0,0,0.08)',
      },
      fontFamily: {
        // Open Sauce One = display/headings, Open Sauce Two = body
        display: ['"Open Sauce One"', 'system-ui', 'sans-serif'],
        sans: ['"Open Sauce Two"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // captured from live site type scale (desktop)
        label: ['13px', { lineHeight: '1.4', letterSpacing: '0.08em' }],
      },
      maxWidth: {
        container: '1280px',
        content: '1200px',
      },
      borderRadius: {
        pill: '999px',
        card: '24px',
        '4xl': '32px',
      },
      boxShadow: {
        pill: '0 1px 2px rgba(0,0,0,0.06), 0 6px 16px rgba(0,0,0,0.06)',
        card: '0 1px 2px rgba(0,0,0,0.04), 0 10px 30px rgba(0,0,0,0.05)',
        navy: '0 6px 18px rgba(30,54,93,0.28), inset 0 1px 0 rgba(255,255,255,0.18)',
        nav: '0 8px 30px rgba(0,0,0,0.08)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
      },
      transitionTimingFunction: {
        framer: 'cubic-bezier(0.44, 0, 0.07, 1)',
      },
    },
  },
  plugins: [],
}
