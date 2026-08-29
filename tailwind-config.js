// Shared Tailwind config, loaded after the Tailwind CDN script on every page.
// Keeps the design tokens (colors, fonts) in one place instead of repeated
// inline in each HTML file.
tailwind.config = {
  theme: {
    extend: {
      colors: {
        ink: '#101B33',   // primary — nav, headlines, dark surfaces
        slate: '#47536B', // body text, borders
        fog: '#EDF0F5',   // alternating section background
        brass: '#A9823D', // sparse accent — credential marks, prices, emphasis
      },
      fontFamily: {
        // English pages use Newsreader (display) + Inter (body).
        // Persian pages override both to Vazirmatn in their own <head>,
        // since one Latin font can't carry Persian glyphs.
        serif: ['Newsreader', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      }
    }
  }
}
