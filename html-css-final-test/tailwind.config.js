/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      padding: "1rem",
      center: true,
    },
    extend: {
      colors: {
        body: "#f8f8f8",
        accent: "#a5c926",
        darkText: "#111",
        brand: "#333",
        gray: "#999",
        orange: "#ffc12c",
        pink: "#fb416b",
        border: "#e5e5e5",
      },
      backgroundImage: {
        hero: "url(../imgs/hero.jpg)",
        about:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(../imgs/about.jpg)",
      },
      fontFamily: {
        open: ["Open Sans", "sans-serif"],
        varela: ["Varela Round", "sans-serif"],
      },
      boxShadow: {
        header: "1px 1px 15px 0 rgba(0, 0, 0, 0.12)",
        "accent-btn-hover": "0 8px 8px -4px rgba(165, 201, 38, 0.5)",
        "white-btn-hover": "0 8px 8px -4px rgba(17, 17, 17, 0.2)",
        "scroll-btn": "0 1px 2px 0 rgba(0, 0, 0, 0.15)",
        "card-hover": "0 8px 20px -4px rgba(0, 0, 0, 0.15)",
      },
      animation: {
        scroll: "scrolling 1.2s infinite ease-in-out",
        fadeIn: "fade_in 1.2s  ease-in-out forwards",
      },
      keyframes: {
        scrolling: {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "20%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(12px)" },
        },
        fade_in: {
          "0%": { opacity: 0, transform: "scale(0)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
