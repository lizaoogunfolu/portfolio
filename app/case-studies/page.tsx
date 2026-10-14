export const metadata = { title: "Case Studies | Elizabeth Klamm" };

const caseStudies = [
  {
    tag: "Data Platform",
    title: "Migrating 700+ users to a Databricks Lakehouse",
    org: "Adidas",
    problem:
      "A legacy SQL database served 700+ users across North America, but couldn't support modern analytics at scale.",
    approach:
      "Drove the Waterfall migration of 700+ users to Databricks Lakehouse and Power BI, querying and validating data directly in SQL and Databricks myself to troubleshoot issues and ask the right technical questions between business and engineering.",
    outcome: "95% adoption across North America",
    color: "violet",
  },
  {
    tag: "SAP · World Cup",
    title: "SAP enablement for 140K World Cup soccer balls",
    org: "Adidas",
    problem:
      "Wholesale distribution capability had to be established in SAP in time for the 2026 World Cup, a deadline that doesn't move.",
    approach:
      "Led the cross-functional enablement project across tech and business teams, managing readiness for wholesale partners against a fixed global event date.",
    outcome: "On-time readiness supporting 2026 World Cup net sales",
    color: "orange",
  },
  {
    tag: "Vendor Integration",
    title: "Centralized workplace experience across two vendors",
    org: "Adidas",
    problem:
      "Employee workplace services were split across ServiceNow/Aspen and CBRE's facilities management systems with no central experience.",
    approach:
      "Lead the two-vendor integration, owning the project plan, RACI, and timeline, and running delivery through Scrum.",
    outcome: "A centralized workplace experience for employees",
    color: "violet",
  },
  {
    tag: "Quality Assurance",
    title: "UAT for a 3PL SAP integration across 20+ teams",
    org: "Adidas",
    problem:
      "A third-party logistics SAP integration had to go live with zero operational disruption.",
    approach:
      "Developed the test plan strategy and coordinated 20+ teams through UAT, tracking defects to closure before go-live.",
    outcome: "99% defect closure rate, zero disruptions at go-live",
    color: "fuchsia",
  },
  {
    tag: "Modernization",
    title: "Replacing a 30-year-old manufacturing system",
    org: "Adidas",
    problem:
      "A local manufacturing application ran on 30-year-old technology facing a $2M reinvestment decision.",
    approach:
      "Led a team of 10+ engineers through end-to-end development and launch of the replacement application.",
    outcome: "$2M reinvestment in outdated technology avoided",
    color: "violet",
  },
  {
    tag: "Procurement",
    title: "Telecom contract negotiation for 2,000+ employees",
    org: "Adidas",
    problem:
      "The company-wide telecom contract was up for renewal at significant cost.",
    approach:
      "Ran the telecom RFP as a structured project, coordinating a three-vendor evaluation and reporting status to executives up to the North America President.",
    outcome: "$1.5M in cost savings secured",
    color: "orange",
  },
  {
    tag: "Automation",
    title: "Eliminating 22 manual processes",
    org: "Adidas",
    problem:
      "Manual processes across 70+ systems were consuming thousands of labor hours a year.",
    approach:
      "Acted as RPA business analyst: documented processes in PDDs, designed workflows, and managed build-to-deployment with the RPA team.",
    outcome: "19,000 labor hours and $950K in business value saved",
    color: "fuchsia",
  },
];

const tagColors: Record<string, string> = {
  violet:
    "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
  orange:
    "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
  fuchsia:
    "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
};

export default function CaseStudies() {
  return (
    <div className="space-y-10 pt-14">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Case{" "}
          <span className="text-sky-700 dark:text-sky-400">
            Studies
          </span>
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
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${tagColors[cs.color]}`}
              >
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
