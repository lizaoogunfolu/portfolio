export const metadata = { title: "AI Projects — Elizabeth Klamm" };

const projects = [
  {
    title: "Agentic AI for Supply Chain",
    context: "Adidas · Enterprise initiative",
    stack: "Agentic AI · Human-in-the-loop design · Stakeholder alignment",
    summary:
      "Kicked off an Agentic AI initiative for Supply Chain — aligning tech and business stakeholders to design a human-in-the-loop solution.",
    highlights: [
      "Mapped the end-to-end process with flowcharts to identify where agents add value and where humans stay in the loop",
      "Built the delivery timeline and presented the initiative to executives",
      "Bridged AI capability conversations between engineering and business teams",
    ],
    link: null as string | null,
  },
  {
    title: "The Hungry Globe 🌍",
    context: "Personal build · Live product",
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
    title: "This portfolio site",
    context: "Personal build",
    stack: "Next.js · Tailwind CSS · AI-assisted development",
    summary:
      "The site you're reading — designed, built, and iterated with AI as a pair programmer, applying the same PM discipline I use at work: scope it, ship it, improve it.",
    highlights: [
      "From blank repo to deployed site with real content in short iterations",
      "Every design decision reviewed and directed by me",
    ],
    link: null as string | null,
  },
];

export default function Projects() {
  return (
    <div className="space-y-10 pt-14">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">
          AI{" "}
          <span className="text-blue-700 dark:text-blue-400">
            Projects
          </span>
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
            className="rounded-2xl border border-zinc-100 p-7 transition hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/5 dark:border-zinc-800 dark:hover:border-blue-900"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-xl font-bold">{p.title}</h2>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
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
                  <span className="text-blue-500">▸</span>
                  {h}
                </li>
              ))}
            </ul>
            {p.link && (
              <a
                href={p.link}
                className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400"
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
