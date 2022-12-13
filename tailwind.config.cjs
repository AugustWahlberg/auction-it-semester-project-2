/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
const plugin = require("tailwindcss/plugin");

// eslint-disable-next-line no-undef
module.exports = {
  content: ["./*.{html,js}", "**/*.{html,js,mjs,cjs}"],
  theme: {
    screens: {
      sm: "440px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    container: {
      center: true,
    },

    borderRadius: {
      none: "0",
      sm: ".125rem",
      DEFAULT: ".25rem",
      lg: "2rem",
      full: "9999px",
    },

    opacity: {
      0: "0",
      20: "0.2",
      40: "0.4",
      60: "0.6",
      80: "0.8",
      100: "1",
    },

    minWidth: {
      'myListning': '500px',
    },

    extend: {
      colors: {
        "sea-blue": "#064C56",
        "pool-blue": "#376F77",
        "sky-blue": "#92B0B5",
        "rain-blue": "#D2D8D9",
        "modal-blue": "#92B0B5",
        "input-blue": "#CEDBDD",
        "ctn-white": "#F8F9F8",
        "succ-green": "#73BA98",
        "olive-green": "#A2B2A2",
        "err-red": "#D77579",
      },
      fontFamily: {
        nunito: "'Nunito', sans-serif",
      },

      fontSize: {
        header: "24px",
        "header-md": "21px",
        "header-sm": "18px",
        "header-xs": "16px",
        base: "24px",
        para: "20px",
        "para-sm": "18px",
        "para-xs": "16px",
        button: "18px",
        "button-sm": "15px",
        "button-mini": "14px",
        "hp-slogan": "28px",
        "hp-slogan-sm": "24px",
        nav: "20px",
        "navbar-li": "18px",
        "listing-body": "17px",
      },

      width: {
        "modal-form": "400px",
        "modal-message": "500px",
        "listings-small": "300px",
        "s-container": "700px",
        "bid-input": "200px",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "1000px",
          },
          "@screen md": {
            maxWidth: "450px",
          },
          "@screen lg": {
            maxWidth: "450px",
          },
          "@screen xl": {
            maxWidth: "600px",
          },
          "@screen 2xl": {
            maxWidth: "800px",
          },
        },
      });
    },

    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.2xl") },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
      });
    }),
  ],
};
