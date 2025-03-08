const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}", // Inclui arquivos dentro de src/pages
    "./src/components/**/*.{js,ts,jsx,tsx}", // Inclui arquivos dentro de src/components
    "./src/app/**/*.{js,ts,jsx,tsx}", // Inclui arquivos dentro de src/app (se você usar app folder)
    flowbite.content(), // Inclui Flowbite
  ],
  theme: {
    extend: {
      colors: {
        // Defina suas cores customizadas aqui se necessário
      },
    },
  },
  plugins: [
    flowbite.plugin(), // Inclui Flowbite
  ],
};
