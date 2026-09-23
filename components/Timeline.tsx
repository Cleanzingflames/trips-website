import SectionHeading from "@/components/ui/SectionHeading";
import { timelineEntries } from "@/data/timeline";

export default function Timeline() {
  return (
    <section className="section section-subtle" id="timeline">
      <div className="container">
        <SectionHeading
          eyebrow="Case Log"
          title="Investigation Timeline"
          description="Every report filed, in order. The gaps matter as much as the sightings — Trip only shows up when he chooses to."
          center
        />

        <div className="timeline">
          {timelineEntries.map((entry) => (
            <div
              key={entry.id}
              className={`tl-item ${entry.kind === "silence" ? "silence" : ""}`}
            >
              <span className="tl-dot" aria-hidden="true" />
              <div className="tl-card">
                <time>{entry.kind === "silence" ? `~${entry.year}` : entry.date}</time>
                <h4>{entry.title}</h4>
                <p>
                  {entry.location !== "—" && (
                    <span style={{ color: "var(--ember-hi)", fontSize: "0.8rem" }}>
                      ◎ {entry.location} ·{" "}
                    </span>
                  )}
                  {entry.detail}
                </p>
              </div>
            </div>
          ))}
          <div className="tl-open">
            <span className="pulse-dot" aria-hidden="true" /> Status — Still Open
          </div>
        </div>
      </div>
    </section>
  );
}