/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  useTabs: false,
  trailingComma: "all",
  singleQuote: false,
  semi: true,
};

export default config;
