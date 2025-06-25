/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './apps/frontend/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './apps/frontend/src/**/*.{js,ts,jsx,tsx,mdx}',
    './apps/frontend/components/**/*.{js,ts,jsx,tsx,mdx}',
    './libs/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
