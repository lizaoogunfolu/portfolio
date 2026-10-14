import { contact, education, experience, skillGroups } from "@/data/profile";

export const metadata = { title: "About | Elizabeth Klamm" };

export default function About() {
  return (
    <div className="space-y-12 pt-14">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">
          About <span className="text-sky-700 dark:text-sky-400">me</span>
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          I&apos;m a Technical Project Manager at Adidas in Portland, OR, with
          7 years in technology delivery across Adidas and BMO Financial
          Group. I&apos;ve delivered $3M+ in cost savings and cost avoidance
          by leading cloud migrations, SAP integrations, and data platform
          modernization, and I get hands-on, querying data in SQL and
          Databricks to ask the right technical questions.
        </p>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          I believe the best way to understand AI is to build with it. Beyond
          leading an agentic PO-reroute solution at work, I ship my own
          products with AI-assisted development and document what I learn
          along the way.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
          Experience
        </h2>
        <div className="space-y-3">
          {experience.map((job) => (
            <div
              key={job.role + job.time}
              className="flex flex-wrap items-baseline justify-between gap-2 rounded-xl border border-zinc-100 px-5 py-4 dark:border-zinc-800"
            >
              <div>
                <p className="font-bold">{job.role}</p>
                <p className="text-sm text-zinc-500">{job.org}</p>
              </div>
              <p className="text-sm font-medium text-zinc-400">{job.time}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
          Education
        </h2>
        <div className="space-y-3">
          {education.map((ed) => (
            <div
              key={ed.degree}
              className="rounded-xl border border-zinc-100 px-5 py-4 dark:border-zinc-800"
            >
              <p className="font-bold">{ed.degree}</p>
              <p className="text-sm text-zinc-500">{ed.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-sm font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
          Skills
        </h2>
        {skillGroups.map((group) => (
          <div key={group.label} className="space-y-2">
            <h3 className="text-sm font-semibold text-zinc-500">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-zinc-200 px-3 py-1 text-sm font-medium text-zinc-700 transition hover:border-sky-400 dark:border-zinc-800 dark:text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
          Get in touch
        </h2>
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${contact.email}`}
            className="rounded-xl bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-700/20 transition hover:bg-sky-800"
          >
            Email me
          </a>
          <a
            href={contact.resume}
            className="rounded-xl border-2 border-zinc-200 px-5 py-2.5 text-sm font-semibold transition hover:border-sky-400 dark:border-zinc-800 dark:hover:border-sky-600"
          >
            Download resume
          </a>
        </div>
      </section>
    </div>
  );
}
