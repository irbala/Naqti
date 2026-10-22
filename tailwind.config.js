// Tailwind settings for Naqti. Rebuild tailwind.css after adding new classes (see README).
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#3B82F6",
        "background-light": "#F5EFE6",
        "background-dark": "#101922",
        "sky-blue": "#87CEEB",
        "sand-beige": "#F5EFE6",
        "brand-blue": "#2563EB",
        "brand-orange": "#F97316",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
}
