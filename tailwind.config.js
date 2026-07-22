/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Triangle Import Repair's real identity IS its own hand-built shop
        // sign: a maroon-and-cream triangle badge mounted on the building at
        // 1700 Seabeck Hwy NW. Every value below was sampled directly with a
        // pixel-color picker from photos of that real sign
        // (public/images/shop-sign.jpg) and the shop's Facebook logo
        // (public/images/logo-circle.png) — nothing here is an invented
        // "automotive brand" palette.
        brick: {
          // Sampled from the solid maroon phone-number banner at the bottom
          // of the real sign (~rgb(108,25,35)).
          50: '#fbeced',
          100: '#f3cdd1',
          200: '#e5a1a9',
          300: '#d0707c',
          400: '#ac4552',
          500: '#7a2230', // core brand red — the sign's phone banner
          600: '#6c1e2b', // the sign's triangle border/lettering
          700: '#571724',
          800: '#41121b',
          900: '#2c0c12',
        },
        // Warm stone/olive sampled from the actual cinderblock shop wall
        // the sign is mounted on (~rgb(96,93,87)).
        stone: {
          50: '#f6f5f2',
          100: '#eae8e2',
          200: '#d3cfc4',
          300: '#b3ada0',
          400: '#8f8878',
          500: '#6f6a5c', // real wall color
          600: '#5a564a',
          700: '#46433a',
          800: '#302e28',
          900: '#1c1b17',
        },
        cream: '#faf7f0', // the sign's own off-white background panel
        ink: '#241714', // near-black, sampled from the mascot's line art
      },
      fontFamily: {
        // The real sign uses a bold, slightly condensed serif-slab display
        // face for "TRIANGLE / IMPORT / REPAIR" — Fraunces (a condensed
        // slab-serif) is the closest web-font match to that hand-lettered
        // sign look. Inter is the clean body face. JetBrains Mono renders
        // the small stamped/plate details (est. year, phone, spec labels).
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(36,23,20,0.05), 0 20px 40px -24px rgba(36,23,20,0.35)',
        badge: '0 1px 0 rgba(255,255,255,0.12) inset, 0 18px 40px -18px rgba(44,12,18,0.55)',
      },
      backgroundImage: {
        // A faint repeating triangle motif, echoing the real sign's own
        // triangle-badge shape, used as a subtle section texture.
        triangles:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='56'%3E%3Cpath d='M32 4l28 48H4z' fill='none' stroke='%236c1e2b' stroke-opacity='0.06' stroke-width='1.5'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
