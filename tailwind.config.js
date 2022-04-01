module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cchm-indigo": "#211F5C",
        "cchm-blue": "#0090D4",
        "cchm-black": "#000D22",
      },
    },
  },
  plugins: [],
};
