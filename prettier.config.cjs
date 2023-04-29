/** @type {import("prettier").Config} */
const config = {
  endOfLine: "lf",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  arrowParens: "always",
  jsxSingleQuote: false,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};

module.exports = config;
