export const metadata = { title: "About | Elizabeth Klamm" };

const skillGroups = [
  {
    label: "Project & Delivery",
    skills: [
      "Agile / Scrum",
      "Waterfall / Hybrid",
      "Scope & Requirements Management",
      "RAID & Dependency Management",
      "Risk Management",
      "Change Management",
      "RACI & Governance",
      "Budget & Resource Planning",
      "Vendor / SOW Management",
      "Stakeholder Management",
      "Executive Status Reporting",
      "Test Management",
    ],
  },
  {
    label: "Technical",
    skills: [
      "SQL",
      "Databricks Lakehouse",
      "SAP AFS",
      "Power BI",
      "SSRS",
      "Spotfire",
      "Cloud & Infrastructure Migration",
      "RPA / UiPath",
      "AI-assisted development",
    ],
  },
  {
    label: "Tools",
    skills: [
      "Jira",
      "Confluence",
      "Smartsheet",
      "Planview",
      "Clarity PPM",
      "Excel",
    ],
  },
];

export default function About() {
  return (
    <div className="space-y-12 pt-14">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">
          About{" "}
          <span className="text-sky-700 dark:text-sky-400">
            me
          </span>
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
          products
          with AI-assisted development and document what I learn along the
          way.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
          Experience
        </h2>
        <div className="space-y-3">
          {[
            {
              role: "Technical Project Manager",
              org: "Adidas · Portland, OR",
              time: "2024 – Present",
            },
            {
              role: "Assistant Technical Project Manager",
              org: "Adidas · Portland, OR",
              time: "2022 – 2024",
            },
            {
              role: "Technology Analyst",
              org: "Adidas · Portland, OR",
              time: "2021 – 2022",
            },
            {
              role: "Technology Analyst",
              org: "BMO Financial Group · Chicago, IL",
              time: "2019 – 2021",
            },
          ].map((job) => (
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
          <div className="rounded-xl border border-zinc-100 px-5 py-4 dark:border-zinc-800">
            <p className="font-bold">
              M.S. Management Information Systems
            </p>
            <p className="text-sm text-zinc-500">
              University of Illinois Springfield · Graduate Certificate in IT
              Project Management · 2023
            </p>
          </div>
          <div className="rounded-xl border border-zinc-100 px-5 py-4 dark:border-zinc-800">
            <p className="font-bold">B.S. Industrial Technology</p>
            <p className="text-sm text-zinc-500">
              Illinois State University · 2019
            </p>
          </div>
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
            href="mailto:liza.oogunfolu@gmail.com"
            className="rounded-xl bg-sky-700 hover:bg-sky-800 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-700/20 transition hover:opacity-90"
          >
            Email me
          </a>
          <a
            href="/ElizabethKlamm-Resume.pdf"
            className="rounded-xl border-2 border-zinc-200 px-5 py-2.5 text-sm font-semibold transition hover:border-sky-400 dark:border-zinc-800 dark:hover:border-sky-600"
          >
            Download resume
          </a>
        </div>
      </section>
    </div>
  );
}
