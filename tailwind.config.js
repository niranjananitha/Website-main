import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        // Brand & Default Palette (Mapped to CSS variables for dynamic Dark Mode)
        "surface-container-high": "var(--surface-container-high)",
        "on-error-container": "#93000a",
        "background": "var(--bg-color)",
        "primary-fixed": "#e3e3de",
        "on-error": "#ffffff",
        "error": "#ba1a1a",
        "secondary": "#5f5e5e",
        "on-primary-fixed": "#1b1c19",
        "surface-container-highest": "var(--surface-container-highest)",
        "on-secondary-fixed-variant": "#474646",
        "surface-container": "var(--surface-container)",
        "surface-dim": "#dcdbcd",
        "on-background": "var(--on-background)",
        "secondary-fixed-dim": "#c9c6c5",
        "inverse-surface": "#303128",
        "error-container": "#ffdad6",
        "on-secondary-container": "#656464",
        "primary-fixed-dim": "#c7c7c2",
        "primary": "var(--primary)",
        "secondary-fixed": "#e5e2e1",
        "on-surface": "var(--on-surface)",
        "surface-container-lowest": "var(--surface-container-lowest)",
        "on-secondary": "#ffffff",
        "primary-container": "#f5f4ef",
        "surface-bright": "var(--surface-bright)",
        "tertiary": "#7d5700",
        "tertiary-fixed-dim": "#f4be5d",
        "outline": "var(--outline)",
        "on-surface-variant": "var(--on-surface-variant)",
        "on-secondary-fixed": "#1c1b1b",
        "tertiary-container": "#fff2e3",
        "on-tertiary-fixed": "#271900",
        "on-primary-fixed-variant": "#464744",
        "on-primary": "var(--on-primary)",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#926706",
        "secondary-container": "#e5e2e1",
        "surface-variant": "#e4e3d5",
        "on-primary-container": "#6f6f6c",
        "surface-tint": "#5e5f5b",
        "surface-container-low": "var(--surface-container-low)",
        "inverse-primary": "#c7c7c2",
        "tertiary-fixed": "#ffdeab",
        "inverse-on-surface": "#f3f1e3",
        "surface": "var(--surface-color)",
        "on-tertiary-fixed-variant": "#5f4100",
        "outline-variant": "var(--outline-variant)",

        // High Contrast Design System Tokens
        "at-heading":    "var(--at-heading-color)",
        "at-subheading": "var(--at-subheading-color)",
        "at-body":       "var(--at-body-color)",
        "at-muted":      "var(--at-muted-color)",
        "at-label":      "var(--at-label-color)",
      },
      "borderRadius": {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      "spacing": {
        "unit": "4px",
        "gutter": "24px",
        "margin-mobile": "20px",
        "margin-desktop": "64px",
        "max-width": "1440px",

        // Safe spacing rhythms
        "section-mobile":  "48px",
        "section-tablet":  "72px",
        "section-desktop": "96px",
        "safe-x":          "max(16px, env(safe-area-inset-left))"
      },
      "fontFamily": {
        "label-caps": ["DM Mono", "monospace"],
        "headline-lg-mobile": ["Sora", "sans-serif"],
        "label-mono": ["DM Mono", "monospace"],
        "body-lg": ["Sora", "sans-serif"],
        "display-xl": ["Sora", "sans-serif"],
        "headline-lg": ["Sora", "sans-serif"],
        "headline-md": ["Sora", "sans-serif"],
        "body-md": ["Sora", "sans-serif"]
      },
      "fontSize": {
        "label-caps": ["12px", { "lineHeight": "1.0", "letterSpacing": "0.1em", "fontWeight": "500" }],
        "headline-lg-mobile": ["32px", { "lineHeight": "1.2", "fontWeight": "700" }],
        "label-mono": ["14px", { "lineHeight": "1.4", "fontWeight": "400" }],
        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "display-xl": ["72px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800" }],
        "headline-lg": ["48px", { "lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "700" }],
        "headline-md": ["24px", { "lineHeight": "1.3", "fontWeight": "600" }],
        "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],

        // Typography scale clamp enhancements
        "hero":    ["clamp(2rem, 5vw, 4rem)",  { lineHeight: "1.1",  letterSpacing: "-0.03em" }],
        "h2":      ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.25", letterSpacing: "-0.015em" }],
        "h3":      ["clamp(1.15rem, 2vw, 1.5rem)", { lineHeight: "1.3" }],
        "section": ["clamp(1.25rem, 2.5vw, 1.75rem)", { lineHeight: "1.3", fontWeight: "700" }],
      },
      "height": {
        "ticker":        "44px",
        "ticker-mobile": "40px",
      },
      "lineHeight": {
        "heading": "1.15",
        "body":    "1.7",
        "relaxed-body": "1.75",
      }
    }
  },
  plugins: [
    containerQueries,
    // Custom layout & scrollbar utility classes
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
}
