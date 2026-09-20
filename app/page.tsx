import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-16 pt-10">
      <section className="space-y-5">
        <h1 className="text-4xl font-bold tracking-tight">
          Project manager who ships.
          <br />
          Now building with AI.
        </h1>
        <p className="max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
          I&apos;m Elizabeth — a project manager who turns messy problems into
          shipped outcomes. I&apos;m growing my technical skills by building
          real AI products, and documenting the journey as I go.
        </p>
        <div className="flex gap-3 pt-2">
          <Link
            href="/projects"
            className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            See my AI projects
          </Link>
          <Link
            href="/about"
            className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
          >
            About me
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
          Featured project
        </h2>
        <Link
          href="/projects"
          className="block rounded-xl border border-zinc-200 bg-white p-6 transition hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600"
        >
          <h3 className="text-lg font-semibold">The Hungry Globe 🌍</h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            A web app that helps you eat your way around the world — surfacing
            top-rated global cuisine spots near you. Built with AI-assisted
            development, deployed on Vercel with analytics-driven success
            metrics.
          </p>
        </Link>
      </section>

      <section className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
          What I bring
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Delivery",
              body: "Years of leading cross-functional teams from kickoff to launch.",
            },
            {
              title: "AI fluency",
              body: "Hands-on with AI-assisted development, prompt design, and evaluation.",
            },
            {
              title: "Translation",
              body: "I bridge stakeholders and engineers — and now, humans and models.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
