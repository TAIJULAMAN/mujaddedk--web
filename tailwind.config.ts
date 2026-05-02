/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B5876',
        chromeDark: '#1E3A5F',
        accent: '#F59E0B',
        surface: '#FFFFFF',
        surfaceSunken: '#F3F5F8',
        divider: '#DCE3ED',
        textPrimary: '#111827',
        textSecondary: '#4B5563',
        textTertiary: '#9CA3AF',
        textDisabled: '#D1D5DB',
        textOnDark: '#FFFFFF',
        textLink: '#2563EB',
      },
      transitionTimingFunction: {
        'stripe-ease': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      },
    },
  },
  plugins: [],
}
