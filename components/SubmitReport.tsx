"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const FIELDS = [
  { name: "name", label: "Name", type: "text", placeholder: "What should we call you?" },
  { name: "location", label: "Location", type: "text", placeholder: "Town, road, region" },
  { name: "date", label: "Date", type: "text", placeholder: "e.g. March 2, 2026" },
] as const;

export default function SubmitReport() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries()) as Record<string, string>;
    if (!values.location && !values.date && !values.details) {
      return;
    }
    setSubmitted(true);
  }

  return (
    <section className="section" id="report">
      <div className="container">
        <div className="report-wrap">
          {submitted ? (
            <div className="report-success" role="status">
              <h3>Report filed.</h3>
              <p>
                Thank you. Your account has been added to the pending stack for
                review. If it matches the pattern — unexpected figure, hard to
                describe clothing, gone before anyone can photograph it — it may
                end up on the map.
              </p>
              <p style={{ marginTop: 14, fontSize: "0.8rem", color: "var(--faint)" }}>
                (This is a front-end prototype. Nothing was actually stored.)
              </p>
            </div>
          ) : (
            <>
              <span className="report-eyebrow">Submission Form</span>
              <h2>
                Seen <span className="accent">Trip?</span>
              </h2>
              <p className="lead-small">
                If you&rsquo;ve seen something that matches the stories, add
                your report and help track the legend.
              </p>

              <form className="report-form" onSubmit={handleSubmit}>
                {FIELDS.map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name}>{field.label}</label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
                <div className="full">
                  <label htmlFor="details">What did you see?</label>
                  <textarea
                    id="details"
                    name="details"
                    placeholder="Describe the figure. Clothing, behavior, direction — anything you remember."
                  />
                </div>
                <div className="report-submit">
                  <button type="submit" className="btn btn-primary">
                    Submit Report
                  </button>
                </div>
              </form>

              <div className="report-note">
                <span className="pulse-dot" aria-hidden="true" />
                <span>
                  Front-end prototype — no backend yet, and every sighting is
                  fictional. For now, this form only pretends to file reports.
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}