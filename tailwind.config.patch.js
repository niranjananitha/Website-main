// tailwind.config.js — PATCH (merge these extensions into your existing config)
//
// Add the contents of `theme.extend` and `plugins` sections below
// into your existing tailwind.config.js. Do NOT replace the whole file.
//
// Changes:
//   · Adds explicit text color tokens for heading/body/muted hierarchy
//   · Adds `ticker` height utility
//   · Adds safe-area padding for mobile notch/home-bar support
//   · Adds `no-scrollbar` utility for ticker overflow
// ─────────────────────────────────────────────────────────────

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // ── Text Contrast Tokens ──────────────────────────────
      colors: {
        "at-heading":    "#111111",   // H1 — strongest contrast
        "at-subheading": "#1a1a1a",   // H2/H3
        "at-body":       "#3d3d3d",   // paragraph text
        "at-muted":      "#5a5a5a",   // secondary / caption
        "at-label":      "#6b6b6b",   // placeholder / nav
      },

      // ── Typography scale ──────────────────────────────────
      fontSize: {
        "hero":    ["clamp(2rem, 5vw, 4rem)",  { lineHeight: "1.1",  letterSpacing: "-0.03em" }],
        "h2":      ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.25", letterSpacing: "-0.015em" }],
        "h3":      ["clamp(1.15rem, 2vw, 1.5rem)", { lineHeight: "1.3" }],
        "section": ["clamp(1.25rem, 2.5vw, 1.75rem)", { lineHeight: "1.3", fontWeight: "700" }],
      },

      // ── Ticker height ─────────────────────────────────────
      height: {
        "ticker":        "44px",
        "ticker-mobile": "40px",
      },

      // ── Spacing additions ─────────────────────────────────
      spacing: {
        "section-mobile":  "48px",
        "section-tablet":  "72px",
        "section-desktop": "96px",
        "safe-x":          "max(16px, env(safe-area-inset-left))",
      },

      // ── Line heights ──────────────────────────────────────
      lineHeight: {
        "heading": "1.15",
        "body":    "1.7",
        "relaxed-body": "1.75",
      },
    },
  },
  plugins: [
    // Utility: hide scrollbar (used on ticker container)
    function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width":    "none",
          "&::-webkit-scrollbar": { display: "none" },
        },
        ".ticker-flex": {
          display:        "flex",
          "align-items":  "center",
          "white-space":  "nowrap",
          overflow:       "hidden",
        },
        ".overflow-x-safe": {
          "overflow-x": "hidden",
          "max-width":  "100vw",
        },
      });
    },
  ],
};
