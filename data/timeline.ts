export type TimelineKind = "report" | "silence";

export interface TimelineEntry {
  id: string;
  date: string;
  year: string;
  location: string;
  title: string;
  detail: string;
  kind: TimelineKind;
}

export const timelineEntries: TimelineEntry[] = [
  {
    id: "t-2010",
    date: "June 18, 2010",
    year: "2010",
    location: "Northwestern Oklahoma",
    title: "First known modern report",
    detail:
      "A lone figure seen on a county road at a distance. No vehicle, no walking route that makes sense. This is where the modern record begins.",
    kind: "report",
  },
  {
    id: "t-2013",
    date: "2013",
    year: "2013",
    location: "—",
    title: "A quiet stretch",
    detail:
      "No verified reports for years. People who lived through the first sighting start convincing themselves they imagined it.",
    kind: "silence",
  },
  {
    id: "t-2012",
    date: "September 3, 2012",
    year: "2012",
    location: "Missouri",
    title: "The roadside report",
    detail:
      "Seen near dusk, standing alone by the roadside. Approached, and he was simply no longer there.",
    kind: "report",
  },
  {
    id: "t-2016",
    date: "April 27, 2016",
    year: "2016",
    location: "Indiana",
    title: "The fairground sighting",
    detail:
      "Multiple witnesses described unusual clothing and an abrupt disappearance near a closed fairground. The clothing dispute begins in earnest.",
    kind: "report",
  },
  {
    id: "t-2021",
    date: "October 14, 2021",
    year: "2021",
    location: "Florida",
    title: "The parking lot sighting",
    detail:
      "Reported near a parking lot close to the coast. Gone within moments, before anyone could photograph him.",
    kind: "report",
  },
  {
    id: "t-2024",
    date: "August 9, 2024",
    year: "2024",
    location: "Northwestern Oklahoma",
    title: "A return to the start",
    detail:
      "Latest major reported sighting, in the same region as the 2010 sighting — the only place Trip has been seen twice.",
    kind: "report",
  },
];