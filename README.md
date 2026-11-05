# Coach Rowling

Website for Coach Henry Rowling's coaching materials, thoughts and history. Built with [Astro](https://astro.build).

## Run it locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs the static site to dist/
```

## Editing without code

Sign in at [app.pagescms.org](https://app.pagescms.org) with GitHub and open this repository. You can edit:

- **Thoughts** and **Playbook**: add, edit or delete posts and materials
- **Site settings**: bio, philosophy, principles, HARD values, career numbers and timeline
- **Photos**: the Media gallery (upload, caption, reorder)
- **Menu tabs**: rename, reorder or hide the tabs across the top
- **Page headers**: the label, title, intro line and background photo at the top of each page

Saving publishes the site in about a minute. The editor's setup is in `.pages.yml`.

## Where things live

| What | Where |
|---|---|
| Bio, philosophy, principles, career numbers, timeline | `src/data/site.json` |
| Photo gallery list | `src/data/photos.json` |
| Menu | `src/data/site.ts` |
| Blog posts (Thoughts) | `src/content/thoughts/*.md` |
| Coaching materials (Playbook) | `src/content/playbook/*.md` |
| Pages | `src/pages/` |
| Colors and fonts | `src/styles/global.css` |

To add a post or a playbook item, copy an existing `.md` file, change the top section (title, date, sport and so on) and write below it.

## Private materials

This repository is public. Do not commit private materials here. Private content will be added later behind a login.
