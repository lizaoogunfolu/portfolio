export const metadata = { title: "Notes — Elizabeth Klamm" };

const notes = [
  {
    date: "2026-09-19",
    title: "Why I'm building my own portfolio site",
    summary:
      "First note: what I'm learning by building this site itself with Next.js and AI-assisted development — and why a PM should ship her own products.",
  },
];

export default function Notes() {
  return (
    <div className="space-y-10 pt-14">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">
          <span className="text-sky-700 dark:text-sky-400">
            Notes
          </span>
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          A working log of my AI learning journey — what I&apos;m building,
          what broke, and what I&apos;d do differently.
        </p>
      </div>
      <div className="space-y-4">
        {notes.map((n) => (
          <article
            key={n.title}
            className="rounded-2xl border border-zinc-100 p-6 transition hover:border-sky-200 hover:shadow-lg hover:shadow-sky-600/5 dark:border-zinc-800 dark:hover:border-sky-900"
          >
            <time className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              {n.date}
            </time>
            <h2 className="mt-1 text-lg font-bold">{n.title}</h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {n.summary}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
