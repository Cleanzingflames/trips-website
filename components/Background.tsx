"use client";

import { useEffect, useRef } from "react";

interface EmberSpec {
  left: string;
  delay: string;
  duration: string;
  size: number;
}

const EMBERS: EmberSpec[] = [
  { left: "7%", delay: "0s", duration: "9.5s", size: 5 },
  { left: "21%", delay: "3.2s", duration: "11.5s", size: 4 },
  { left: "36%", delay: "1.4s", duration: "8.5s", size: 3 },
  { left: "54%", delay: "5s", duration: "12s", size: 5 },
  { left: "67%", delay: "2.2s", duration: "10s", size: 4 },
  { left: "80%", delay: "6.5s", duration: "13s", size: 3 },
  { left: "91%", delay: "0.8s", duration: "9.2s", size: 4 },
  { left: "47%", delay: "7.5s", duration: "11s", size: 3 },
];

/**
 * Fixed, layered background rendered behind all content:
 * deep vignette base, film-grain noise, a scrolling cracked-earth /
 * ember-vein texture layer, floating ember motes, and a soft vignette.
 */
export default function Background() {
  const veinsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let last = 0;
    const update = (time: number) => {
      if (time - last > 80) {
        last = time;
        const y = window.scrollY;
        if (veinsRef.current) {
          veinsRef.current.style.transform = `translate3d(0, ${y * 0.06}px, 0)`;
        }
      }
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-scene" aria-hidden="true">
      <div className="bg-glow" />
      <div className="bg-grain" />
      <div className="bg-veins" ref={veinsRef} />
      <div className="bg-embers">
        {EMBERS.map((e, i) => (
          <span
            key={i}
            className="ember"
            style={{
              left: e.left,
              bottom: "-24px",
              width: `${e.size}px`,
              height: `${e.size}px`,
              animationDelay: e.delay,
              animationDuration: e.duration,
            }}
          />
        ))}
      </div>
      <div className="bg-vignette" />
    </div>
  );
}