import Link from "next/link";

const stats = [
  { value: "$3M+", label: "Cost savings & efficiency gains delivered" },
  { value: "700+", label: "Users migrated to Databricks, 95% adoption" },
  { value: "20+", label: "Teams coordinated for zero-disruption go-live" },
];

export default function Home() {
  return (
    <div className="space-y-20 pt-14">
      <section className="space-y-6">
        <p className="inline-block rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700 dark:bg-sky-950 dark:text-sky-300">
          Technical Project Manager · Portland, OR
        </p>
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          I turn complex programs into{" "}
          <span className="text-sky-700 dark:text-sky-400">
            shipped outcomes.
          </span>
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          I&apos;m Elizabeth Klamm — a Technical Project Manager with 5+ years
          leading enterprise cloud migrations, SAP integrations, and data
          platform initiatives at Adidas and BMO. I pair PM rigor with hands-on
          fluency in SQL and Databricks, and I&apos;m now building with AI —
          from an Agentic AI initiative for supply chain to shipping my own
          products.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/case-studies"
            className="rounded-xl bg-sky-700 hover:bg-sky-800 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-700/20 transition hover:opacity-90"
          >
            See my work
          </Link>
          <a
            href="/ElizabethKlamm-Resume.pdf"
            className="rounded-xl border-2 border-zinc-200 px-5 py-2.5 text-sm font-semibold transition hover:border-sky-400 dark:border-zinc-800 dark:hover:border-sky-600"
          >
            Download resume
          </a>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div
            key={s.value}
            className="rounded-2xl border border-zinc-100 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <p className="text-4xl font-extrabold text-sky-700 dark:text-sky-400">
              {s.value}
            </p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {s.label}
            </p>
          </div>
        ))}
      </section>

      <section className="space-y-5">
        <h2 className="text-sm font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
          Highlights
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/projects"
            className="group rounded-2xl border border-zinc-100 p-6 transition hover:border-sky-300 hover:shadow-lg hover:shadow-sky-600/10 dark:border-zinc-800 dark:hover:border-sky-700"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              AI at work
            </p>
            <h3 className="mt-2 text-xl font-bold group-hover:text-sky-600 dark:group-hover:text-sky-400">
              Agentic AI for Supply Chain
            </h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Kicked off an Agentic AI initiative at Adidas — aligning tech and
              business stakeholders around a human-in-the-loop design, from
              process flowcharts to executive presentations.
            </p>
          </Link>
          <Link
            href="/projects"
            className="group rounded-2xl border border-zinc-100 p-6 transition hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/10 dark:border-zinc-800 dark:hover:border-sky-700"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Built & shipped
            </p>
            <h3 className="mt-2 text-xl font-bold group-hover:text-sky-600 dark:group-hover:text-sky-400">
              The Hungry Globe 🌍
            </h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              My own web app for eating your way around the world — built
              end-to-end with AI-assisted development, deployed on Vercel with
              analytics-driven success metrics.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
