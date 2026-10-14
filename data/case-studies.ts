export type CaseStudy = {
  tag: string;
  title: string;
  org: string;
  problem: string;
  approach: string;
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    tag: "Data Platform",
    title: "Migrating 700+ users to a Databricks Lakehouse",
    org: "Adidas",
    problem:
      "A legacy SQL database served 700+ users across North America, but couldn't support modern analytics at scale.",
    approach:
      "Drove the Waterfall migration of 700+ users to Databricks Lakehouse and Power BI, querying and validating data directly in SQL and Databricks myself to troubleshoot issues and ask the right technical questions between business and engineering.",
    outcome: "95% adoption across North America",
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
  },
];
