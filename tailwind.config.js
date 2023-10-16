/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homepage: "url('./asset/Rectangle 2.png')",
        workspace: "url('./asset/workspace_hero.jpg')",
      },
    },
  },
  plugins: [],
};
