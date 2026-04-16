/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        stripe: {
          purple: '#635bff',
          dark: '#0a2540',
          slate: '#425466',
          light: '#ad6bff',
        }
      },
      transitionTimingFunction: {
        'stripe-ease': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      },
    },
  },
  plugins: [],
}
