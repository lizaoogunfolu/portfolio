import { caseStudies } from "@/data/case-studies";

export const metadata = { title: "Case Studies | Elizabeth Klamm" };

export default function CaseStudies() {
  return (
    <div className="space-y-10 pt-14">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Case <span className="text-sky-700 dark:text-sky-400">Studies</span>
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Selected programs I&apos;ve led: the problem, my approach, and the
          measurable result.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {caseStudies.map((cs) => (
          <article
            key={cs.title}
            className="flex flex-col rounded-2xl border border-zinc-100 p-6 transition hover:shadow-lg hover:shadow-sky-600/5 dark:border-zinc-800"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-semibold text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                {cs.tag}
              </span>
              <span className="text-xs font-medium text-zinc-400">
                {cs.org}
              </span>
            </div>
            <h2 className="mt-3 text-lg font-bold leading-snug">{cs.title}</h2>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                Problem:
              </span>{" "}
              {cs.problem}
            </p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                Approach:
              </span>{" "}
              {cs.approach}
            </p>
            <p className="mt-auto pt-4 text-sm font-bold text-emerald-600 dark:text-emerald-400">
              ✦ {cs.outcome}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
