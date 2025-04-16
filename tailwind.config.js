/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./packages/**/*.{ts,tsx,js,jsx,html}",  // scan toàn bộ packages
    "./styles/**/*.{scss}",                  // scan shared style
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
