# Elizabeth Klamm — Portfolio

Personal portfolio site for Elizabeth Klamm, Technical Project Manager and AI builder. Built with [Next.js](https://nextjs.org) (App Router) and Tailwind CSS, developed with AI-assisted workflows.

## Project structure

```
app/            Pages (App Router)
  page.tsx        Home
  case-studies/   PM case studies
  projects/       AI projects
  notes/          Learning-journey notes
  about/          Bio, experience, education, skills, contact
data/           All site content lives here; edit these to update the site
  case-studies.ts
  projects.ts
  notes.ts
  profile.ts      Stats, experience, education, skills, contact info
public/         Static assets, including the downloadable resume PDF
```

Content and presentation are separated: to add a case study, project, or note, edit the matching file in `data/` — no layout code changes needed.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Deployment

Deployed on [Vercel](https://vercel.com); pushes to `main` trigger a production deploy.
