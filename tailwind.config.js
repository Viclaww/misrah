/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { min: "300px", max: "499px" },
      md: { min: "500px", max: "1023px" },
      lg: "1024px",
    },
    extend: {
      backgroundImage: {
        homepage: "url('./asset/Rectangle 2.png')",
        workspace: "url('./asset/workspace_hero.jpg')",
        guestroom: "url('./asset/guestroom.png')",
        eventhall: "url('./asset/eventhall.png')",
      },
      listStyleImage: {
        tick: "url('./asset/clarity_success-standard-solid.png')",
        white: "url('./asset/Vector.png')",
      },
    },
  },
  plugins: [],
};
