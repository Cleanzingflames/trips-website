import Button from "@/components/ui/Button";

const QUESTIONS = [
  "Who is Trip?",
  "Why does he keep appearing in different places?",
  "Is he dressed like a pirate?",
  "Is he wearing a suit?",
  "Is he a drifter, a myth, a prank, or something else entirely?",
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-halo" aria-hidden="true" />
      <div className="container">
        <div className="hero-inner">
          <div>
            <span className="eyebrow">Case File 001 — Status: Open</span>
            <h1>
              WHO IS <span className="accent">TRIP?</span>
            </h1>
            <p className="hero-hook">
              A strange figure. A growing trail of sightings. A legend people
              still can&rsquo;t explain.
            </p>

            <div className="copy">
              <p>
                People have been asking the same questions for years. From
                scattered reports in <strong>northwestern Oklahoma</strong> to
                stories out of <strong>Indiana</strong>,{" "}
                <strong>Missouri</strong>, and <strong>Florida</strong>,
                witnesses describe the same unsettling pattern:
              </p>
              <p>
                Trip appears unexpectedly, is noticed just long enough to leave
                an impression, and then seems to <em>vanish</em>.
              </p>
            </div>

            <div className="hero-actions">
              <Button href="#sightings">View Sightings</Button>
              <Button href="#witnesses" variant="ghost">
                Read Witness Reports
              </Button>
              <Button href="#last-seen" variant="ghost">
                Last Reported Sighting
              </Button>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <b>04</b>
                <span>Regions</span>
              </div>
              <div className="hero-stat">
                <b>05</b>
                <span>Reports On Record</span>
              </div>
              <div className="hero-stat">
                <b>0</b>
                <span>Explanations</span>
              </div>
            </div>
          </div>

          <aside className="questions-card" aria-label="Open questions">
            <div className="questions-head">
              <span>Open Questions</span>
              <b>Filed&nbsp;Sep&nbsp;2026</b>
            </div>
            <ul className="questions-list">
              {QUESTIONS.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="cue">
          <span className="cue-bounce" aria-hidden="true">▼</span>
          Scroll the investigation
        </div>
      </div>
    </section>
  );
}