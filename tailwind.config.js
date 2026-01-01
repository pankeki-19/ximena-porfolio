/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--bg)',
        panel: 'var(--panel)',
        stroke: 'var(--stroke)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
        accent2: 'var(--accent2)',
        purple: 'var(--purple)',
      },
      boxShadow: {
        glow: '0 0 30px rgba(56, 242, 255, 0.35)',
        panel: '0 0 40px rgba(56, 242, 255, 0.08)',
        panelHover: '0 0 60px rgba(56, 242, 255, 0.16)',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(600px 300px at 20% 10%, rgba(56, 242, 255, 0.25), transparent 60%)',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'scan-slow': {
          '0%': { transform: 'translateY(-10%)' },
          '100%': { transform: 'translateY(10%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'pulse-soft': 'pulse-soft 6s ease-in-out infinite',
        'scan-slow': 'scan-slow 12s linear infinite',
        float: 'float 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
