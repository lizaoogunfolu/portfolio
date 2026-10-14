export type Project = {
  title: string;
  context: string;
  stack: string;
  summary: string;
  highlights: string[];
  link: string | null;
};

export const projects: Project[] = [
  {
    title: "Agentic PO-Reroute Solution",
    context: "Adidas · Enterprise initiative",
    stack: "SAP · UiPath agents · RPA · Human-in-the-loop design",
    summary:
      "Led project planning for an agentic purchase-order reroute solution integrating SAP, UiPath agents, and RPA with human-in-the-loop controls.",
    highlights: [
      "Aligned global and local stakeholders through process mapping, timelines, and executive presentations",
      "Bridged AI capability conversations between engineering and business teams",
    ],
    link: null,
  },
  {
    title: "The Hungry Globe 🌍",
    context: "Personal build · Live product",
    stack: "Next.js · Vercel · Vercel Analytics · AI-assisted development",
    summary:
      "A web app that helps you eat your way around the world, surfacing top-rated global cuisine spots near you, with a quality floor and cuisine-relevance keyword enrichment.",
    highlights: [
      "Defined success metrics up front and instrumented them with analytics events",
      "Managed dev/preview/production environments like a real product",
      "Built end-to-end with AI as a pair programmer, reviewing every change",
    ],
    link: null,
  },
  {
    title: "This portfolio site",
    context: "Personal build",
    stack: "Next.js · Tailwind CSS · AI-assisted development",
    summary:
      "The site you're reading, designed, built, and iterated with AI as a pair programmer, applying the same PM discipline I use at work: scope it, ship it, improve it.",
    highlights: [
      "From blank repo to deployed site with real content in short iterations",
      "Every design decision reviewed and directed by me",
    ],
    link: "https://github.com/lizaoogunfolu/portfolio",
  },
];
