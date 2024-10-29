/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  printWidth: 120,
  tabWidth: 2,
  trailingComma: "all",
  bracketSpacing: true,
};

export default config;
