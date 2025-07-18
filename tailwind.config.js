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
        'min-res-110': { raw: '(min-resolution: 110dpi)' },// 83%
        'min-res-120': { raw: '(min-resolution: 120dpi)' },// 90%
        'min-res-130': { raw: '(min-resolution: 130dpi)' },// 94%
        'min-res-140': { raw: '(min-resolution: 140dpi)' },// 100%
        'min-res-150': { raw: '(min-resolution: 150dpi)' },// 106.67%
        'min-res-155': { raw: '(min-resolution: 155dpi)' },// 111.11%
        'min-res-165': { raw: '(min-resolution: 165dpi)' },// 116.67%
        'min-res-160': { raw: '(min-resolution: 160dpi)' },// 112.5%
        'min-res-175': { raw: '(min-resolution: 175dpi)' },// 120%
        'min-res-180': { raw: '(min-resolution: 180dpi)' },// 125%
        'min-res-185': { raw: '(min-resolution: 185dpi)' },// 133.33%
        'min-res-170': { raw: '(min-resolution: 170dpi)' },// 120%
        'min-res-190': { raw: '(min-resolution: 190dpi)' },// 133.33%
        'min-res-195': { raw: '(min-resolution: 195dpi)' },// 142.86%
        'min-res-205': { raw: '(min-resolution: 205dpi)' },// 156.25%
        'min-res-200': { raw: '(min-resolution: 200dpi)' },// 150%
        'min-res-210': { raw: '(min-resolution: 210dpi)' },// 166.67%
        'min-res-220': { raw: '(min-resolution: 220dpi)' },// 175%
        'min-res-225': { raw: '(min-resolution: 225dpi)' },// 181.82%
        'min-res-230': { raw: '(min-resolution: 230dpi)' },// 187.5%
        'min-res-235': { raw: '(min-resolution: 235dpi)' },// 193.33%
        'min-res-240': { raw: '(min-resolution: 240dpi)' },// 200%
        'min-res-260': { raw: '(min-resolution: 260dpi)' },// 200%
        'min-res-380': { raw: '(min-resolution: 380dpi)' },// 300%
        'min-res-480': { raw: '(min-resolution: 480dpi)' },// 400%
        'min-res-580': { raw: '(min-resolution: 580dpi)' },// 500%
      }
    },
  },
  plugins: [],
}

