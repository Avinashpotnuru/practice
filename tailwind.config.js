// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'todo-bg': "url('/public/todobg.jpg')",
      }
    },
  },
  plugins: [],
}
