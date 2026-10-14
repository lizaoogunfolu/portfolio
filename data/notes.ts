export type Note = {
  date: string;
  title: string;
  summary: string;
};

export const notes: Note[] = [
  {
    date: "2026-09-19",
    title: "Why I'm building my own portfolio site",
    summary:
      "First note: what I'm learning by building this site itself with Next.js and AI-assisted development, and why a PM should ship her own products.",
  },
];
