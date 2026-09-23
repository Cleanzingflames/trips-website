import UsMap from "@/components/UsMap";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Sighting } from "@/data/sightings";
import { lastReported, sightings } from "@/data/sightings";

function tagLabel(tag: Sighting["tag"]) {
  switch (tag) {
    case "first":
      return { text: "First Report", className: "sighting-tag-first" };
    case "latest":
      return { text: "Latest", className: "sighting-tag-latest" };
    default:
      return { text: "On Record", className: "" };
  }
}

export default function SightingsMap() {
  return (
    <section className="section" id="sightings">
      <div className="container">
        <SectionHeading
          eyebrow="Sightings"
          title="Reported Sightings Map"
          description="Every location on the record, connected in the order Trip was reported. The trail drifts east over the years, then circles back to where it began."
        />

        <div className="map-stage">
          <div className="map-frame">
            <UsMap />
            <div className="map-legend">
              <span>
                <i aria-hidden="true" /> Confirmed report
              </span>
              <span>
                <i className="route" aria-hidden="true" /> Reported route
              </span>
            </div>
          </div>

          <aside className="dossier last-seen" id="last-seen">
            <div>
              <span className="last-seen-status">
                <span className="pulse-dot" aria-hidden="true" />
                Last Confirmed Report
              </span>
              <h3>
                Trip has been seen <span className="accent">again.</span>
              </h3>
              <p className="when">{lastReported.date} — {lastReported.location}</p>
              <p>{lastReported.note}</p>
            </div>
            <div className="last-seen-foot">
              <span>Case 001</span>
              <span>Status: Open</span>
            </div>
          </aside>
        </div>

        <div className="divider-ornament">
          <span className="diamond" aria-hidden="true">◆</span>
          <span>All five reports on record</span>
          <span className="diamond" aria-hidden="true">◆</span>
        </div>

        <div className="sightings-grid">
          {sightings.map((s) => {
            const tag = tagLabel(s.tag);
            return (
              <article className="sighting-card" key={s.id}>
                <div className="sighting-date">
                  <time dateTime={s.dateISO}>{s.date}</time>
                  {s.tag && (
                    <span className={`sighting-tag ${tag.className}`.trim()}>
                      {tag.text}
                    </span>
                  )}
                </div>
                <div className="sighting-place">
                  ◎ {s.location}
                </div>
                <p className="sighting-note">{s.note}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}