module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "rocket-brand": "#8257E5",
        "rocket-brand-hover": "#996dff",
        "rocket-brand-text": "#fff",
      },
      borderRadius: {
        md: "4px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
