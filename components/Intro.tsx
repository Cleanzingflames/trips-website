import SectionHeading from "@/components/ui/SectionHeading";

const DOSSIER_FACTS = [
  { k: "Case No.", v: "001 — Trip" },
  { k: "First Modern Report", v: "June 18, 2010" },
  { k: "Regions Involved", v: "4" },
  { k: "Confirmed Sightings", v: "5" },
  { k: "Clothing", v: <b>Disputed</b> },
  { k: "Return Pattern", v: "1 repeat location" },
  { k: "Final Status", v: <b>Open</b> },
];

export default function Intro() {
  return (
    <section className="section section-subtle" id="legend">
      <div className="container">
        <div className="map-stage">
          <div>
            <SectionHeading
              eyebrow="The Legend"
              title="A figure that has never quite stayed still."
              description="Some say Trip has been showing up since at least 2010. Others insist he may have been around longer — noticed only in scattered fragments and strange stories that never seemed connected until later."
            />

            <div className="copy" style={{ marginTop: 22 }}>
              <p>
                Descriptions vary just enough to keep the mystery alive. Was he
                dressed like a <strong>pirate</strong>? Was it an old-fashioned{" "}
                <strong>suit</strong>? Was he wearing something in between? Why
                do so many people remember the same strange presence, yet never
                seem able to agree on the details?
              </p>
              <p>
                No one seems to know where he comes from. No one seems to know
                where he goes. But every few years, somewhere down the line
                from the middle of the country to the southern coast, another
                sighting gets reported.
              </p>
            </div>

            <div className="divider-ornament">
              <span className="diamond" aria-hidden="true">◆</span>
              <span>Every few years</span>
              <span className="diamond" aria-hidden="true">◆</span>
            </div>

            <div className="copy">
              <p>
                The pattern is consistent enough that it reads less like
                coincidence and more like a path — a trail someone keeps
                walking, checking in on the places he was last seen. This
                dossier exists to track it, one report at a time.
              </p>
            </div>
          </div>

          <aside className="dossier">
            <div className="dossier-title">
              <span>Field Dossier</span>
              <span className="pulse-dot" aria-hidden="true" />
            </div>
            <ul className="dossier-list">
              {DOSSIER_FACTS.map((f) => (
                <li key={f.k}>
                  <span className="k">{f.k}</span>
                  <span className="v">{f.v}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}