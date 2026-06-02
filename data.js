// ============================================================
//  CITY WIKI DATA FILE
//  Edit this file to update your city after each session.
//  Replace [CITY] with your city name when you have one.
// ============================================================

const CITY_NAME = "[CITY]";
const CITY_TAGLINE = "Population: Unknown. Corporations: Countless. Hope: Scarce.";

// ============================================================
//  DISTRICTS — The zones that make up the city map
// ============================================================
const districts = [
  {
    id: "d1",
    name: "The Sprawl",
    type: "Residential",
    description: "A labyrinthine mass of stacked housing blocks, open-air markets, and gang-controlled corridors. The city's beating, rotting heart.",
    controlledBy: "Street gangs / No single power",
    dangerLevel: 3, // 1-5
    notes: "",
    firstSeen: "Session 0"
  },
  {
    id: "d2",
    name: "Apogee Tier",
    type: "Corporate",
    description: "Upper city. Climate-controlled skywalks connect gleaming towers. You need a chip to breathe the filtered air up here.",
    controlledBy: "Megacorp coalition",
    dangerLevel: 2,
    notes: "",
    firstSeen: "Session 0"
  },
  {
    id: "d3",
    name: "The Sump",
    type: "Industrial",
    description: "Flooded lower district. Chemical runoff from decades of unregulated manufacturing. People still live here. Somehow.",
    controlledBy: "Contested",
    dangerLevel: 5,
    notes: "",
    firstSeen: "Session 0"
  },
  {
    id: "d4",
    name: "Neon Row",
    type: "Commercial",
    description: "The entertainment district. Casinos, flesh parlors, black market augmentation clinics, and every vice imaginable behind blinking signs.",
    controlledBy: "Syndicate (The House)",
    dangerLevel: 3,
    notes: "",
    firstSeen: "Session 0"
  },
  {
    id: "d5",
    name: "Coldframe",
    type: "Industrial",
    description: "Old server farms and data infrastructure. The physical bones of the GRID in this city. Mostly automated. Mostly.",
    controlledBy: "Unknown",
    dangerLevel: 4,
    notes: "",
    firstSeen: "Session 0"
  }
];

// ============================================================
//  LOCATIONS — Specific places within districts
// ============================================================
const locations = [
  {
    id: "l1",
    name: "The Oubliette",
    district: "The Sprawl",
    type: "Bar / Safe House",
    description: "A bar sunk below street level, accessible only through a laundry front. Runners drink here. No corp security allowed — enforced by the regulars.",
    tags: ["safe", "neutral ground", "runner hangout"],
    status: "Active",
    notes: "",
    firstSeen: "Session 0"
  },
  {
    id: "l2",
    name: "Pinnacle Arcology",
    district: "Apogee Tier",
    type: "Corporate HQ",
    description: "A self-contained city within a city. 400 floors. The top 50 are rumored to not appear on any official blueprint.",
    tags: ["corporate", "high security", "restricted"],
    status: "Active",
    notes: "",
    firstSeen: "Session 0"
  },
  {
    id: "l3",
    name: "Mira's Chop Shop",
    district: "The Sprawl",
    type: "Augmentation Clinic",
    description: "Street-level augmentation and repair. No questions asked. Cash only. Mira has seen everything and will tell you nothing.",
    tags: ["augmentations", "medical", "black market"],
    status: "Active",
    notes: "",
    firstSeen: "Session 0"
  }
];

// ============================================================
//  CORPORATIONS — Powers that shape the city
// ============================================================
const corporations = [
  {
    id: "c1",
    name: "Vantablack Industries",
    sector: "Security / Military",
    description: "Private military and security contractor. Provides law enforcement for Apogee Tier under contract. Their kill squads operate in the lower city with no oversight.",
    powerLevel: 5, // 1-5
    knownOperations: ["Corporate security contracts", "Weapons R&D", "Mercenary deployment"],
    allies: [],
    rivals: [],
    status: "Active",
    notes: "",
    firstSeen: "Session 0"
  },
  {
    id: "c2",
    name: "Somnium Corp",
    sector: "Biotech / Pharma",
    description: "Produces 80% of the city's augmentations and the drugs that make living with them bearable. Also runs several off-the-books neurological research programs.",
    powerLevel: 4,
    knownOperations: ["Augmentation manufacturing", "Pharmaceutical distribution", "Neural research"],
    allies: [],
    rivals: [],
    status: "Active",
    notes: "",
    firstSeen: "Session 0"
  },
  {
    id: "c3",
    name: "Cascade Networks",
    sector: "Data / Communications",
    description: "Owns the GRID infrastructure in the city. Every packet of data flows through their servers. They know everything. They sell what they know.",
    powerLevel: 4,
    knownOperations: ["ISP monopoly", "Data brokering", "Surveillance contracts"],
    allies: [],
    rivals: [],
    status: "Active",
    notes: "",
    firstSeen: "Session 0"
  }
];

// ============================================================
//  NPCs — Characters encountered in play
// ============================================================
const npcs = [
  {
    id: "n1",
    handle: "OPERATOR",
    realName: "Unknown",
    status: "Active", // Active | Retired | Deceased | Missing | Unknown
    role: "Fixer",
    affiliation: "Independent",
    district: "Unknown",
    description: "An anonymous voice over the comlink. No face. No name. Brokers jobs for Runners and takes a cut. Loyalty to no one.",
    firstSeen: "Session 0",
    appearedIn: ["Session 0"],
    formerRunner: false,
    notes: ""
  },
  {
    id: "n2",
    handle: "Mira",
    realName: "Mira Osei",
    status: "Active",
    role: "Street Doc / Augmentation Tech",
    affiliation: "Independent",
    district: "The Sprawl",
    description: "Runs the chop shop on Level 3. Ex-Somnium Corp researcher who walked away from something she won't talk about. Expert augmentation surgeon.",
    firstSeen: "Session 0",
    appearedIn: ["Session 0"],
    formerRunner: false,
    notes: ""
  }
];

// ============================================================
//  SESSIONS — Log of completed runs
// ============================================================
const sessions = [
  {
    id: "s0",
    title: "Session 0 — City Setup",
    date: "",
    summary: "World established. No run yet.",
    runners: [],
    outcome: "N/A",
    newspaperUrl: ""
  }
];
