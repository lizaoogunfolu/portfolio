export const metadata = { title: "About — Elizabeth" };

export default function About() {
  return (
    <div className="space-y-10 pt-10">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">About</h1>
        <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
          I&apos;m Elizabeth, a project manager who believes the best way to
          understand AI is to build with it. I bring years of delivery
          experience — scoping, stakeholder management, shipping under
          constraints — and I&apos;m pairing that with hands-on technical
          skills.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Project management",
            "Stakeholder management",
            "Agile / Scrum",
            "Roadmapping",
            "AI-assisted development",
            "Prompt design",
            "Next.js",
            "Vercel",
            "Analytics & metrics",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-zinc-300 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-700 dark:text-zinc-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
          Get in touch
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          The best way to reach me is by email or LinkedIn.
        </p>
        <div className="flex gap-3">
          <a
            href="mailto:hello@example.com"
            className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            Email me
          </a>
          <a
            href="https://www.linkedin.com"
            className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-xs text-zinc-500">
          (Placeholder links — swap in your real email and LinkedIn URL, and
          add a resume PDF link here when ready.)
        </p>
      </section>
    </div>
  );
}
