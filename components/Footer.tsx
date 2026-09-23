const FOOTER_LINKS = [
  { label: "The Legend", href: "#legend" },
  { label: "Sightings", href: "#sightings" },
  { label: "Witnesses", href: "#witnesses" },
  { label: "Theory", href: "#theory" },
  { label: "Timeline", href: "#timeline" },
  { label: "Report", href: "#report" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top" className="brand">
              <span className="brand-mark" aria-hidden="true">◆</span>
              <span>
                THE TRIP FILES
                <span className="brand-sub">Case 001 — Open</span>
              </span>
            </a>
            <p>
              Tracking the legend of Trip, one report at a time. The mystery
              continues.
            </p>
          </div>

          <nav className="footer-col" aria-label="Footer">
            <h5>Dossier</h5>
            {FOOTER_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-base">
          <span>
            © <span className="flicker">◆</span> The Trip Files — all
            sightings, witnesses, and reports are a work of fiction.
          </span>
          <span>Front-end prototype · No data stored · No deploy</span>
        </div>
      </div>
    </footer>
  );
}