/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      screens: {
        'min-res-60': { raw: '(min-resolution: 60dpi)' }, // 50%
        'min-res-80': { raw: '(min-resolution: 80dpi)' },  // 67%
        'min-res-100': { raw: '(min-resolution: 100dpi)' },// 75%
        'min-res-120': { raw: '(min-resolution: 120dpi)' },// 90%
        'min-res-140': { raw: '(min-resolution: 140dpi)' },// 100%
        'min-res-180': { raw: '(min-resolution: 180dpi)' },// 125%
        'min-res-220': { raw: '(min-resolution: 220dpi)' },// 175%
        'min-res-260': { raw: '(min-resolution: 260dpi)' },// 200%
        'min-res-380': { raw: '(min-resolution: 380dpi)' },// 300%
        'min-res-480': { raw: '(min-resolution: 480dpi)' },// 400%
        'min-res-580': { raw: '(min-resolution: 580dpi)' },// 500%
      }
    },
  },
  plugins: [],
}

