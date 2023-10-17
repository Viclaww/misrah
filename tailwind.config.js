/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homepage: "url('./asset/Rectangle 2.png')",
        workspace: "url('./asset/workspace_hero.jpg')",
        guestroom: "url('./asset/guestroom.png')",
        eventhall: "url('./asset/eventhall.png')",
      },
      listStyleImage: {
        tick: "url('./asset/clarity_success-standard-solid.png')",
      },
    },
  },
  plugins: [],
};
