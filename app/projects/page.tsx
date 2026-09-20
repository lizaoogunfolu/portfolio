export const metadata = { title: "AI Projects — Elizabeth" };

const projects = [
  {
    title: "The Hungry Globe 🌍",
    stack: "Next.js · Vercel · Vercel Analytics · AI-assisted development",
    summary:
      "A web app that helps you eat your way around the world — surfacing top-rated global cuisine spots near you, with a quality floor and cuisine-relevance keyword enrichment.",
    highlights: [
      "Defined success metrics up front and instrumented them with analytics events",
      "Managed dev/preview/production environments like a real product",
      "Built end-to-end with AI as a pair programmer, reviewing every change",
    ],
    link: null as string | null,
  },
  {
    title: "Next project coming soon",
    stack: "TBD",
    summary:
      "Placeholder for your next build. Each project entry pairs what it does with what you learned building it.",
    highlights: ["What I learned goes here"],
    link: null as string | null,
  },
];

export default function Projects() {
  return (
    <div className="space-y-8 pt-10">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">AI Projects</h1>
        <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
          Things I&apos;ve built with AI — not just prompts, but shipped
          products with real users and real metrics.
        </p>
      </div>
      <div className="space-y-5">
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <h2 className="text-lg font-semibold">{p.title}</h2>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-500">
              {p.stack}
            </p>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">{p.summary}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            {p.link && (
              <a
                href={p.link}
                className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
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
