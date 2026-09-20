export const metadata = { title: "Notes — Elizabeth" };

const notes = [
  {
    date: "2026-09-19",
    title: "Why I'm building my own portfolio site",
    summary:
      "First note: what I'm learning by building this site itself with Next.js and AI-assisted development.",
  },
];

export default function Notes() {
  return (
    <div className="space-y-8 pt-10">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">Notes</h1>
        <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
          A working log of my AI learning journey — what I&apos;m building,
          what broke, and what I&apos;d do differently.
        </p>
      </div>
      <div className="space-y-4">
        {notes.map((n) => (
          <article
            key={n.title}
            className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <time className="text-xs text-zinc-500">{n.date}</time>
            <h2 className="mt-1 font-semibold">{n.title}</h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {n.summary}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
