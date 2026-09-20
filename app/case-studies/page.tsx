export const metadata = { title: "Case Studies — Elizabeth" };

const caseStudies = [
  {
    title: "Case study coming soon",
    role: "Project Manager",
    summary:
      "This is a placeholder. Each case study will follow the same shape: the problem, the constraints, what I did, and the measurable outcome.",
    outcome: "Outcome metric goes here (e.g. shipped 3 weeks early, +18% adoption).",
  },
  {
    title: "Another case study coming soon",
    role: "Project Manager",
    summary:
      "Strong case studies are specific: name the stakeholders, the risk you managed, the decision you made when things went sideways.",
    outcome: "Outcome metric goes here.",
  },
];

export default function CaseStudies() {
  return (
    <div className="space-y-8 pt-10">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">Case Studies</h1>
        <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
          Selected projects I&apos;ve led — the problem, my approach, and what
          happened as a result.
        </p>
      </div>
      <div className="space-y-5">
        {caseStudies.map((cs) => (
          <article
            key={cs.title}
            className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
              {cs.role}
            </p>
            <h2 className="mt-1 text-lg font-semibold">{cs.title}</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              {cs.summary}
            </p>
            <p className="mt-3 text-sm font-medium text-emerald-700 dark:text-emerald-400">
              {cs.outcome}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
