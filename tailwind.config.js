/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { min: "200px", max: "550px" },
      md: { min: "551px", max: "1023px" },
      lg: "1024px",
    },
    extend: {
      backgroundImage: {
        homepage: "url('https://i.imgur.com/qYbOGzU.png')",
        workspace: "url('https://i.imgur.com/ME6XqAI.jpg')",
        guestroom: "url('https://i.imgur.com/qoZRxip.png')",
        eventhall: "url('https://i.imgur.com/aZIagXl.png')",
      },
      listStyleImage: {
        tick: "url('./asset/clarity_success-standard-solid.png')",
        white: "url('./asset/Vector.png')",
      },
    },
  },
  plugins: [],
};
