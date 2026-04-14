import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#162032',
        tonal: '#1E293B',
        primary: '#3B82F6',
        accent: '#60A5FA',
        white: '#ffffff',
      },
      fontFamily: {
        norwester: ['Norwester', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        fredoka: ['Fredoka', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
