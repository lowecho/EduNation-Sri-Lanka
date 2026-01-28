export type UpdateItem = {
  id: string;
  date: string; // YYYY-MM-DD
  title: string;
  summary: string;
  tags?: string[];
};

export type MediaItem = {
  src: string;
  alt: string;
  caption: string;
  date?: string;
};

export const updates: UpdateItem[] = [
  {
    id: "kickoff",
    date: "2026-01-10",
    title: "Project kickoff",
    summary: "Breathing Letters launches with the goal of building a school library with community support.",
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

export const gallery: MediaItem[] = [
  {
    src: "/placeholder.svg",
    alt: "Volunteers organizing book donations on tables",
    caption: "Sorting day — labeling and organizing by grade",
    date: "2026-01-25",
  },
  {
    src: "/placeholder.svg",
    alt: "Stacked boxes ready for transport",
    caption: "Packed boxes ready for transport",
    date: "2026-01-26",
  },
  {
    src: "/placeholder.svg",
    alt: "A classroom corner prepared for library shelves",
    caption: "Preparing space for shelves (before)",
    date: "2026-01-27",
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
