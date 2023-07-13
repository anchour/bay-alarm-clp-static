const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents }) {
  addComponents({
    "@screen xl": {
      ".container--wide": {
        maxWidth: 1500,
      },
    },
  });
});
