"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

const LINKS = [
  { href: "#legend", label: "The Legend" },
  { href: "#sightings", label: "Sightings" },
  { href: "#witnesses", label: "Witnesses" },
  { href: "#theory", label: "Theory" },
  { href: "#timeline", label: "Timeline" },
  { href: "#report", label: "Report" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header>
      <div className="topbar">
        <div className="topbar-inner">
          <span className="pulse-dot" aria-hidden="true" />
          <span className="topbar-tag">One mystery. One place. Every Trip sighting.</span>
        </div>
      </div>

      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`} aria-label="Main">
        <div className="navbar-inner">
          <a href="#top" className="brand">
            <span className="brand-mark" aria-hidden="true">◆</span>
            <span>
              THE TRIP FILES
              <span className="brand-sub">Case 001 — Open</span>
            </span>
          </a>

          <button
            type="button"
            className="nav-burger"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          <ul className={`nav-links ${open ? "nav-links-open" : ""}`}>
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  className="nav-link"
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-cta">
              <Button href="#report" variant="ghost" onClick={() => setOpen(false)}>
                Submit a Report
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}