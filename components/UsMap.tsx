import { mapPins, routeOrder } from "@/data/mapLocations";

const LAND_PATH = [
  "M 3 0 L 10 26 L 14 48 L 18 74 L 15 120 L 18 150 L 14 178",
  "L 30 215 L 44 250 L 52 285 L 62 320 L 72 345 L 82 372 L 100 390 L 120 398 L 134 404",
  "L 174 406 L 210 420 L 239 438 L 270 445 L 292 440 L 316 428",
  "L 350 470 L 368 498 L 410 505 L 436 530 L 475 566",
  "L 500 560 L 520 545 L 545 500 L 575 492 L 606 494 L 620 486 L 650 462 L 675 468 L 700 476",
  "L 722 492 L 732 512 L 745 545 L 754 590 L 762 560 L 756 515 L 747 468",
  "L 745 438 L 750 415 L 762 390 L 775 372 L 790 352 L 812 338 L 847 345",
  "L 852 320 L 858 300 L 862 262 L 855 240 L 866 230 L 872 214 L 884 204 L 905 198 L 930 192 L 950 165 L 975 150 L 985 130 L 991 106",
  "L 985 92 L 965 80 L 950 70",
  "L 915 105 L 900 120 L 860 132 L 830 142 L 810 160 L 790 168 L 770 176 L 748 172 L 728 160 L 718 150 L 700 120 L 690 90 L 700 70 L 720 55 L 690 38",
  "L 650 36 L 620 40 L 585 42 L 560 32 L 545 26 L 540 16 L 500 10 L 400 8 L 300 6 L 200 4 L 100 4 L 30 2 L 3 0 Z",
].join(" ");

const LAKES = [
  "M 585 46 C 610 34 660 30 697 42 C 706 60 688 74 665 72 C 640 70 615 62 585 46 Z",
  "M 668 116 C 652 96 656 78 676 68 C 700 74 706 100 698 128 C 690 150 674 158 668 116 Z",
  "M 704 88 C 722 96 726 118 716 138 C 700 152 684 148 678 132 C 700 120 706 100 704 88 Z",
  "M 722 152 C 756 150 766 164 754 174 C 734 180 714 168 722 152 Z",
  "M 796 148 C 820 150 828 160 820 168 C 802 172 790 158 796 148 Z",
  "M 848 108 C 856 122 856 130 850 138 C 844 128 843 118 848 108 Z",
];

const GRATICULE_H = [120, 240, 360, 480];
const GRATICULE_V = [220, 380, 540, 700, 860];

export default function UsMap() {
  const pinById = new Map(mapPins.map((p) => [p.id, p]));
  const routeLine = routeOrder
    .map((id) => pinById.get(id))
    .filter((p) => p !== undefined)
    .map((p) => `${p!.x} ${p!.y}`);

  const routeD = `M ${routeLine[0]} C 492 292 520 278 555 267 C 596 250 630 238 665 231 C 700 244 692 330 700 400 C 706 458 700 500 735 530 C 690 470 600 430 520 392 C 492 372 472 336 455 312`;

  return (
    <svg
      className="usmap"
      viewBox="-40 -20 1140 700"
      role="img"
      aria-label="Stylized map of the United States showing reported Trip sightings in Northwestern Oklahoma, Missouri, Indiana, and Florida"
    >
      <defs>
        <filter id="pinGlow" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="3.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <pattern
          id="landDots"
          width="15"
          height="15"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1.1" fill="#d6a66a" opacity="0.4" />
          <circle cx="10" cy="9" r="0.9" fill="#d6a66a" opacity="0.25" />
        </pattern>
      </defs>

      <g className="graticule">
        {GRATICULE_H.map((y) => (
          <line key={`h-${y}`} x1="-20" y1={y} x2="1100" y2={y} />
        ))}
        {GRATICULE_V.map((x) => (
          <line key={`v-${x}`} x1={x} y1="-10" x2={x} y2="620" />
        ))}
      </g>

      <path className="land" d={LAND_PATH} />
      <path d={LAND_PATH} fill="url(#landDots)" />

      {LAKES.map((d, i) => (
        <path key={`lake-${i}`} className="lake" d={d} />
      ))}

      <path className="route-path" d={routeD} />

      {mapPins.map((pin) => (
        <g key={pin.id} className="pin" transform={`translate(${pin.x} ${pin.y})`}>
          <title>
            {`${pin.date} — ${pin.label}: ${pin.note}`}
          </title>
          <circle
            className="pin-ring"
            r="11"
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
          <circle className="pin-core" r="5.5" />
          <circle className="pin-dot" r="2" />
          <text x={pin.labelDx} y={pin.labelDy} textAnchor="start" dominantBaseline="auto">
            {`${pin.year} ${pin.label}`}
          </text>
        </g>
      ))}

      <g
        transform="translate(1045 6)"
        opacity="0.85"
        aria-hidden="true"
      >
        <circle r="16" fill="none" stroke="#6f6553" strokeWidth="1" />
        <path d="M0 -13 L0 13 M-13 0 L13 0" stroke="#6f6553" strokeWidth="1" />
        <path d="M0 -11 L0 -4 M0 -4 L0 4" stroke="#e0743a" strokeWidth="1" />
        <text x="0" y="-20" textAnchor="middle" fill="#a2957e" fontSize="11" letterSpacing="2">
          N
        </text>
      </g>
    </svg>
  );
}