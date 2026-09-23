import SectionHeading from "@/components/ui/SectionHeading";
import { theories } from "@/data/theories";

export default function Speculation() {
  return (
    <section className="section" id="theory">
      <div className="container">
        <SectionHeading
          eyebrow="Theory"
          title="Pirate, Suit, or Something Else?"
          description="One witness saw a pirate. Another saw a suit. Both were describing the same man."
          center
        />

        <div
          className="copy"
          style={{ maxWidth: 720, margin: "-26px auto 0", textAlign: "center" }}
        >
          <p>
            One of the strangest parts of the Trip mystery is how often
            witnesses struggle to describe what he was wearing. Some say
            pirate. Some say suit. Some say a mix of both. Some can only say it
            looked <em>wrong</em> for the place and time.
          </p>
          <p>
            That contradiction has become part of the legend itself. The
            uncertainty may be exactly why the stories keep spreading — a
            detail nobody can settle, so it keeps getting retold.
          </p>
        </div>

        <div className="theory-grid">
          {theories.map((t, i) => (
            <article className="theory-card" key={t.id}>
              <div className="theory-index">{String(i + 1).padStart(2, "0")}</div>
              <h3>{t.title}</h3>
              <p>{t.body}</p>
              <div className="theory-odds" aria-label="Shared support estimate">
                <span>
                  <i style={{ width: `${t.odds}%` }} />
                </span>
              </div>
              <div className="theory-status">
                <span>
                  <i>◇</i> {t.status}
                </span>
                <span style={{ color: "var(--ember-hi)" }}>{t.odds}%</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}