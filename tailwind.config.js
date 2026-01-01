/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0f0d',
        neon: '#7CFF8C',
        cyan: '#6EE7FF',
        ember: '#FF8A65',
        steel: '#1c2320',
      },
      boxShadow: {
        glow: '0 0 18px rgba(124, 255, 140, 0.35)',
      },
      backgroundImage: {
        'radial-void':
          'radial-gradient(1200px 600px at 70% 0%, rgba(110, 231, 255, 0.12), transparent 60%), radial-gradient(900px 500px at 0% 20%, rgba(124, 255, 140, 0.14), transparent 55%)',
      },
    },
  },
  plugins: [],
}
