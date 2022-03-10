module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      }
    },
    colors: {
      primary: "var(--theme-primary)",
      secondary: "var(--theme-secondary)",
      "text-base": "var(--theme-text-base)",
    },
  },
  plugins: [],
}