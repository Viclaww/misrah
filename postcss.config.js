export const plugins = [
  require("postcss-nesting"),
  require("tailwindcss"),
  require("autoprefixer"),
  {
    "postcss-import": {},
    "tailwindcss/nesting": "postcss-nesting",
    tailwindcss: {},
    autoprefixer: {},
  },
];
