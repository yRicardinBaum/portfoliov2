/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./node_modules/flowbite-react/**/*.js",
      "./src/**/*.{html,js,svelte,ts,tsx,jsx}",
      "./src/**/**/*.{html,js,svelte,ts,tsx,jsx}"
    ],
  theme: {
    extend: {},
  },
  plugins: [
        require('flowbite/plugin'),
        require('@tailwindcss/line-clamp'),
  ]
}
