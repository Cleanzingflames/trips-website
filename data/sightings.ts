export interface Sighting {
  id: string;
  date: string;
  dateISO: string;
  location: string;
  region: string;
  note: string;
  tag?: "first" | "latest" | null;
}

export const sightings: Sighting[] = [
  {
    id: "ok-2010",
    date: "June 18, 2010",
    dateISO: "2010-06-18",
    location: "Northwestern Oklahoma",
    region: "Northwestern Oklahoma",
    note: "First known modern report. A lone figure seen at a distance on a county road, walking with no destination in sight.",
    tag: "first",
  },
  {
    id: "mo-2012",
    date: "September 3, 2012",
    dateISO: "2012-09-03",
    location: "Missouri",
    region: "Missouri",
    note: "Seen near dusk, standing alone by the roadside. When approached, he was simply no longer there.",
  },
  {
    id: "in-2016",
    date: "April 27, 2016",
    dateISO: "2016-04-27",
    location: "Indiana",
    region: "Indiana",
    note: "Multiple witnesses described unusual clothing and an abrupt disappearance near a closed fairground.",
  },
  {
    id: "fl-2021",
    date: "October 14, 2021",
    dateISO: "2021-10-14",
    location: "Florida",
    region: "Florida",
    note: "Reported near a parking lot close to the coast. Gone within moments, before anyone could photograph him.",
  },
  {
    id: "ok-2024",
    date: "August 9, 2024",
    dateISO: "2024-08-09",
    location: "Northwestern Oklahoma",
    region: "Northwestern Oklahoma",
    note: "Latest major reported sighting. Same region as the 2010 report — the only area where Trip has returned.",
    tag: "latest",
  },
];

export interface LastReported {
  date: string;
  dateISO: string;
  location: string;
  note: string;
}

export const lastReported: LastReported = {
  date: "August 9, 2024",
  dateISO: "2024-08-09",
  location: "Northwestern Oklahoma",
  note: "The only known location where Trip has appeared more than once. Witnesses again described contradictory clothing.",
};