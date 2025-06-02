/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ms-gray-10': '#f3f2f1',
        'ms-gray-20': '#edebe9',
        'ms-gray-30': '#e1dfdd',
        'ms-gray-40': '#d2d0ce',
        'ms-gray-50': '#bdbdbd',
        'ms-gray-60': '#a19f9d',
        'ms-gray-70': '#605e5c',
        'ms-gray-80': '#3b3a39',
        'ms-gray-90': '#323130',
        'ms-gray-100': '#201f1e',
      },
    },
  },
  plugins: [],
}; 