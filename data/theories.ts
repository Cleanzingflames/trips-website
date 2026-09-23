export interface TheoryCard {
  id: string;
  title: string;
  body: string;
  status: string;
  odds: number;
}

export const theories: TheoryCard[] = [
  {
    id: "pirate",
    title: "The Pirate Theory",
    body: "The costume crowd argues Trip is dressed like an old-timey pirate — tricorn, long coat, worn boots. It's the default answer whenever a witness can only describe 'something wrong' about the clothing. A figure like that wouldn't belong anywhere, which may be exactly the point.",
    status: "Most often reported in Oklahoma & Missouri",
    odds: 34,
  },
  {
    id: "suit",
    title: "The Suit Theory",
    body: "The suit theory insists it's an old-fashioned, slightly off formal suit — the kind you'd expect at a funeral or in a decades-old photograph. The witnesses who can describe Trip at all usually lean formal, clean, and out of place.",
    status: "Most often reported in Indiana & Florida",
    odds: 34,
  },
  {
    id: "neither",
    title: "The “Neither” Theory",
    body: "Some researchers argue Trip isn't clothing-specific at all. The point is that he looks anachronistic and out of place, and the brain reaches for whatever frame fits in the moment. The disguise changes; the strangeness doesn't.",
    status: "Held by the researchers keeping this dossier",
    odds: 32,
  },
];