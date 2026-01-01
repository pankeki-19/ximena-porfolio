/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Background system (purple theme)
        bg0: "var(--bg0)",
        bg1: "var(--bg1)",

        // Surfaces
        panel: "var(--card)",     // glass panel background
        stroke: "var(--stroke)",  // glass border stroke

        // Text
        text: "var(--text)",
        muted: "var(--muted)",

        // Accents
        violet: "var(--violet)",
        magenta: "var(--magenta)",
        cyan: "var(--cyan)",
      },

      boxShadow: {
        // General glow presets (purple)
        glowViolet: "0 0 40px rgba(124, 58, 237, 0.35)",
        glowMagenta: "0 0 40px rgba(217, 70, 239, 0.30)",
        glass: "0 20px 60px rgba(0, 0, 0, 0.45)",
        glassHover: "0 0 70px rgba(124, 58, 237, 0.22)",
      },

      backgroundImage: {
        // Use on hero panels or ribbons
        "hero-violet":
          "radial-gradient(900px 500px at 40% 10%, rgba(124,58,237,.35), transparent 60%)",
        "hero-magenta":
          "radial-gradient(800px 500px at 80% 40%, rgba(217,70,239,.18), transparent 55%)",
        "violet-gradient":
          "linear-gradient(90deg, rgba(124,58,237,1), rgba(217,70,239,1))",
      },

      keyframes: {
        "pulse-soft": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        // optional: slow “glow drift” feel
        "glow-drift": {
          "0%": { transform: "translate3d(-2%, -1%, 0)" },
          "50%": { transform: "translate3d(2%, 1%, 0)" },
          "100%": { transform: "translate3d(-2%, -1%, 0)" },
        },
      },

      animation: {
        "pulse-soft": "pulse-soft 6s ease-in-out infinite",
        float: "float 7s ease-in-out infinite",
        "glow-drift": "glow-drift 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
