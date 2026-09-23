export interface Witness {
  id: string;
  quote: string;
  attribution: string;
  place: string;
  redacted?: boolean;
}

export const witnesses: Witness[] = [
  {
    id: "w-01",
    quote:
      "I swear he was there one second and gone the next. He didn't run. He just wasn't there anymore.",
    attribution: "Witness 07",
    place: "County road, near Alva, OK",
  },
  {
    id: "w-02",
    quote:
      "He looked too dressed up for the place, but not modern either. That's what stuck with me.",
    attribution: "Witness 12",
    place: "Gas station lot, NW Missouri",
  },
  {
    id: "w-03",
    quote:
      "My brother said he looked like a pirate. I thought it looked more like some kind of suit.",
    attribution: "Witness 03",
    place: "Closed fairgrounds, Indiana",
  },
  {
    id: "w-04",
    quote:
      "Nobody could agree on what he was wearing, but everyone agreed it was him.",
    attribution: "Witness 19",
    place: "Parking lot near the coast, FL",
  },
  {
    id: "w-05",
    quote:
      "He didn't act lost. He looked like he knew exactly where he was supposed to be.",
    attribution: "Witness 21",
    place: "Field edge, dusk, NW Oklahoma",
  },
  {
    id: "w-06",
    quote:
      "I've told this story a hundred times and it still sounds wrong when I say it. But I know what I saw.",
    attribution: "Witness 26",
    place: "Overpass, eastbound, Missouri",
  },
  {
    id: "w-07",
    quote: "This one was harder to place. The details got no further than this page.",
    attribution: "Witness 09",
    place: "Unverified, redacted at source",
    redacted: true,
  },
];