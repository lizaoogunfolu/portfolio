import { projects } from "@/data/projects";

export const metadata = { title: "AI Projects | Elizabeth Klamm" };

export default function Projects() {
  return (
    <div className="space-y-10 pt-14">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">
          AI <span className="text-sky-700 dark:text-sky-400">Projects</span>
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          AI work on both sides of the fence: leading enterprise AI initiatives,
          and building my own products hands-on.
        </p>
      </div>
      <div className="space-y-5">
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-2xl border border-zinc-100 p-7 transition hover:border-sky-200 hover:shadow-lg hover:shadow-sky-600/5 dark:border-zinc-800 dark:hover:border-sky-900"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-xl font-bold">{p.title}</h2>
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                {p.context}
              </span>
            </div>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-400">
              {p.stack}
            </p>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">{p.summary}</p>
            <ul className="mt-3 space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="text-sky-500">▸</span>
                  {h}
                </li>
              ))}
            </ul>
            {p.link && (
              <a
                href={p.link}
                className="mt-4 inline-block text-sm font-semibold text-sky-600 hover:underline dark:text-sky-400"
              >
                Visit project →
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
