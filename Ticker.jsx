/**
 * Ticker.jsx  — CORRECTED COMPONENT
 *
 * Root causes fixed:
 *   1. Wrapper had no explicit height → text clipped on mobile
 *   2. Inner track used `position: absolute; top: 50%` → misaligned at small sizes
 *   3. Items used `line-height: inherit` → descenders clipped
 *   4. No overflow:hidden on wrapper → content visible outside bounds
 *
 * Usage:
 *   <Ticker items={["AI Solutions", "Cloud Architecture", "Digital Transformation"]} />
 */

import { useRef, useEffect } from "react";

const TICKER_HEIGHT_PX = 44;          // px — matches CSS var(--at-ticker-height)
const ITEM_GAP_PX      = 48;          // horizontal padding per item (24px each side)
const SEPARATOR        = " · ";

export default function Ticker({
  items = [],
  speed = 40,          // px per second
  pauseOnHover = true,
  className = "",
}) {
  const trackRef = useRef(null);
  const rafRef   = useRef(null);
  const posRef   = useRef(0);
  const paused   = useRef(false);

  // Duplicate items to create seamless loop
  const displayItems = [...items, ...items];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2;   // half = one set of items

    let lastTime = null;

    function step(ts) {
      if (!paused.current) {
        if (lastTime !== null) {
          const delta = (ts - lastTime) / 1000;  // seconds
          posRef.current -= speed * delta;

          // Reset when we've scrolled one full set
          if (Math.abs(posRef.current) >= totalWidth) {
            posRef.current = 0;
          }
        }
        lastTime = ts;
        track.style.transform = `translateX(${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed]);

  return (
    <div
      className={`ticker-wrapper ${className}`}
      style={{
        /* ── CRITICAL: explicit height + overflow:hidden prevents clipping ── */
        height:     `${TICKER_HEIGHT_PX}px`,
        overflow:   "hidden",
        display:    "flex",
        alignItems: "center",   /* vertically center track in wrapper */
        width:      "100%",
        position:   "relative",
      }}
      onMouseEnter={pauseOnHover ? () => (paused.current = true)  : undefined}
      onMouseLeave={pauseOnHover ? () => (paused.current = false) : undefined}
      aria-hidden="true"       /* decorative — screen readers skip */
    >
      <div
        ref={trackRef}
        style={{
          display:     "flex",
          alignItems:  "center",   /* vertical center of each item */
          height:      "100%",
          whiteSpace:  "nowrap",
          willChange:  "transform",
        }}
      >
        {displayItems.map((item, i) => (
          <span
            key={i}
            style={{
              display:        "inline-flex",
              alignItems:     "center",
              paddingLeft:    `${ITEM_GAP_PX / 2}px`,
              paddingRight:   `${ITEM_GAP_PX / 2}px`,
              lineHeight:     1,          /* prevents descender clip */
              whiteSpace:     "nowrap",
            }}
          >
            {item}
            <span style={{ opacity: 0.4, marginLeft: "24px" }}>{SEPARATOR.trim()}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
