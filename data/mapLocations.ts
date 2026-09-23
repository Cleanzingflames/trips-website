export interface MapPin {
  id: string;
  label: string;
  year: string;
  date: string;
  note: string;
  x: number;
  y: number;
  labelDx: number;
  labelDy: number;
  latest?: boolean;
  first?: boolean;
}

export const mapPins: MapPin[] = [
  {
    id: "ok-2010",
    label: "Oklahoma",
    year: "2010",
    date: "June 18, 2010",
    note: "First known modern report",
    x: 448,
    y: 304,
    labelDx: 12,
    labelDy: -6,
    first: true,
  },
  {
    id: "mo-2012",
    label: "Missouri",
    year: "2012",
    date: "September 3, 2012",
    note: "Seen near dusk, standing alone by the roadside",
    x: 555,
    y: 267,
    labelDx: 12,
    labelDy: -6,
  },
  {
    id: "in-2016",
    label: "Indiana",
    year: "2016",
    date: "April 27, 2016",
    note: "Multiple witnesses described unusual clothing and abrupt disappearance",
    x: 665,
    y: 231,
    labelDx: 12,
    labelDy: -6,
  },
  {
    id: "fl-2021",
    label: "Florida",
    year: "2021",
    date: "October 14, 2021",
    note: "Reported near a parking lot, gone within moments",
    x: 735,
    y: 530,
    labelDx: -8,
    labelDy: -30,
  },
  {
    id: "ok-2024",
    label: "Oklahoma",
    year: "2024",
    date: "August 9, 2024",
    note: "Latest major reported sighting",
    x: 455,
    y: 312,
    labelDx: -4,
    labelDy: 18,
    latest: true,
  },
];

export interface RouteSegment {
  id: string;
  fromId: string;
  toId: string;
}

/** Chronological travel order of Trip's reported movement. */
export const routeOrder: string[] = [
  "ok-2010",
  "mo-2012",
  "in-2016",
  "fl-2021",
  "ok-2024",
];