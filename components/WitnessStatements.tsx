import SectionHeading from "@/components/ui/SectionHeading";
import { witnesses } from "@/data/witnesses";

export default function WitnessStatements() {
  return (
    <section className="section section-subtle" id="witnesses">
      <div className="container">
        <SectionHeading
          eyebrow="Witness Accounts"
          title="Eyewitness Statements"
          description="Notes pulled from interviews, town-history forums, and reports sent in after the fact. Names withheld to keep phone calls polite."
        />

        <div className="witness-grid">
          {witnesses.map((w) => (
            <figure
              key={w.id}
              className={`witness-card ${w.redacted ? "witness-redacted" : ""}`}
            >
              <blockquote className="witness-quote">{w.quote}</blockquote>
              <figcaption className="witness-meta">
                <span>
                  <b>{w.attribution}</b>
                </span>
                <span>{w.redacted ? <span className="redacted-bar" aria-hidden="true" /> : w.place}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}