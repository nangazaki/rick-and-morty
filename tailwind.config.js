/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "background": "#030409",
      "btn-hover": "#190a31",
      "color-grad-from-hover": "rgba(113, 13, 230, 0.33) 1.2%",
      "color-grad-to-hover": "rgba(140, 99, 187, 0) 103.85%",
      "color-grad-from": "rgba(114, 13, 230, 0.616) 1.2%",
      "color-grad-to": "rgba(140, 99, 187, 0) 103.85%",
      "dark": "#030409",
      "dark-op": "#0c0c0ce0",
      "gray": "#ccc",
      "grad-card-from":"rgba(113, 13, 230, 0.33) -37.48%",
      "grad-card-to":"rgba(140, 99, 187, 0) 87.83%",
      "light": "#f9f9f9",
      "primary": "#27124A",
      "secondary": "#e9b208",
      "sh-color": "rgba(44, 4, 90, 0.3)"
    },
    boxShadow: {
      "box-card": "0 0 10px"
    }
    ,
    background: {
      "transparent": "none"
    },
    borderColor: {
      "color-hover": "rgba(114, 13, 230, 0.3)",
      "color": "rgba(114, 13, 230, 0.377)"

    },
    borderWidth: {
      "base": "1.4px"
    },
    fontFamily: {
      raleway: ["Raleway", "Helvetica"]
    },
    transitionProperty: {
      "normal": ""
    },
    transitionDuration: {
      "md": ".5s"
    },
    maxWidth: {
      "default": "360px",
      "card": "300px"
    },
    extend: {},
  },
  plugins: [],
}