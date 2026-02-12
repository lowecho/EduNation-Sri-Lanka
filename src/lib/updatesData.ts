import feb4_1 from "@/assets/feb4/feb4_1.png";
import feb4_2 from "@/assets/feb4/feb4_2.png";

export type UpdateItem = {
  id: string;
  date: string; // YYYY-MM-DD
  title: string;
  summary: string;
  tags?: string[];
};

export type MediaItem = {
  src: string;
  images?: string[]; // Optional array for carousel
  alt: string;
  caption: string;
  date?: string;
};

export type RoadmapStatus = "completed" | "ongoing" | "planned";

export type RoadmapMilestone = {
  id: string;
  dateLabel: string;
  title: string;
  description: string;
  status: RoadmapStatus;
};

export type RoadmapPhase = {
  id: string;
  title: string;
  description: string;
  status: RoadmapStatus;
  bullets: string[];
};

export const updates: UpdateItem[] = [
  {
    id: "kickoff",
    date: "2026-01-10",
    title: "Project kickoff",
    summary: "EduNation Sri Lanka launches with the goal of building a school library with community support.",
    tags: ["announcement"],
  },
  {
    id: "collection-start",
    date: "2026-01-18",
    title: "Book collection opens",
    summary: "We started accepting pledges and organizing collection points across districts.",
    tags: ["books"],
  },
  {
    id: "sorting",
    date: "2026-01-25",
    title: "Sorting & cataloguing day",
    summary: "Volunteers helped sort books by grade and language to prepare for delivery.",
    tags: ["volunteer"],
  },
];

// Master timeline (fixed milestones)
export const roadmapMilestones: RoadmapMilestone[] = [
  {
    id: "press-briefing",
    dateLabel: "Early February",
    title: "Press Briefing",
    description: "Public briefing to introduce the initiative, partners, and the first campaign steps.",
    status: "completed",
  },
  {
    id: "bmich-launch",
    dateLabel: "Feb 4",
    title: "BMICH – Humble Launch Ceremony",
    description: "Official launch event to mark the beginning of the nationwide campaign.",
    status: "completed",
  },
  {
    id: "collection-drive",
    dateLabel: "Feb – March",
    title: "Nationwide Collection Drive",
    description: "Sponsor activations + “Massive Book on the Road” collection campaign across districts.",
    status: "planned",
  },
  {
    id: "badulla-library",
    dateLabel: "April",
    title: "Transport to Badulla & Library Opening",
    description: "Delivery and library opening ceremony (New Year) with documented proof.",
    status: "planned",
  },
  {
    id: "we-create-sl",
    dateLabel: "May – August",
    title: "Drafting & Editing “We Create Sri Lanka”",
    description: "Editorial work for the publication, compiling stories and outcomes from the campaign.",
    status: "planned",
  },
  {
    id: "book-fair-launch",
    dateLabel: "September",
    title: "Official Book Launch (International Book Fair)",
    description: "Book launch milestone aligned with the international book fair for maximum reach.",
    status: "planned",
  },
];

// Phases (high-level roadmap)
export const roadmapPhases: RoadmapPhase[] = [
  {
    id: "phase-1",
    title: "Phase 1 — Pilot",
    description: "Prove the model end-to-end with one school and full transparency.",
    status: "ongoing",
    bullets: ["Identify first school", "Collect books locally", "Build first library"],
  },
  {
    id: "phase-2",
    title: "Phase 2 — Expansion",
    description: "Scale collection points and volunteer capacity across multiple districts.",
    status: "planned",
    bullets: ["Collection points via banks & supermarkets", "Multi-district coverage", "Volunteer network growth"],
  },
  {
    id: "phase-3",
    title: "Phase 3 — Nationwide Impact",
    description: "Sustainable, island-wide system for ongoing school library support.",
    status: "planned",
    bullets: ["Island-wide collection", "Multiple schools supported", "Sustainable library system"],
  },
];

export const gallery: MediaItem[] = [
  {
    src: feb4_1,
    images: [feb4_1, feb4_2],
    alt: "Highlights from the BMICH Launch Ceremony",
    caption: "BMICH – Humble Launch Ceremony",
    date: "2026-02-04",
  },
];

export const proof: MediaItem[] = [
  {
    src: "/placeholder.svg",
    alt: "Delivery photo placeholder for proof of donation",
    caption: "Delivery proof photo (placeholder) — add a caption with school name and date",
    date: "2026-01-28",
  },
];

export function getLatestUpdate() {
  return [...updates].sort((a, b) => (a.date < b.date ? 1 : -1))[0];
}

export function sortByDateDesc<T extends { date: string }>(items: T[]) {
  return [...items].sort((a, b) => (a.date < b.date ? 1 : -1));
}
