/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor:{
        flat:{
          yellow: "#f39d11",
          lightyellow: "#f5b141",
          red: "#f14937",
          lightred: "#f46d5f",
          green: "#2fcd5a",
          lightgreen: "#59d77b",
          blue: "#0faac3",
          lightblue: "#3fbbcf",
          dark: "#213040",
        }
      },
      fontSize:{
        vs: "0.5rem"
      }
    },
  },
  plugins: [],
}
