/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Neue Montreal', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        body: ['Neue Montreal', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        bayon: ['Bayon', 'Arial', 'sans-serif'],
        serif: ['Times New Roman', 'Georgia', 'serif'],
      },
      colors: {
        cream: '#F3F3E9',
        eggshell: '#EDE2E2',
        softPink: '#F4CED3',
        palePink: '#F0B5BE',
        rose: '#F3C3CB',
        redAccent: '#E33529',
        royalBlue: '#0000EE',
        linkBlue: '#007AFF',
        warmBrown: '#854720',
        deepBrown: '#925026',
      },
    },
  },
  plugins: [],
};