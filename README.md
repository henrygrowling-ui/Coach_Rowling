# Coach Rowling

Website for Coach Henry Rowling's coaching materials, thoughts and history. Built with [Astro](https://astro.build).

## Run it locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs the static site to dist/
```

## Where things live

| What | Where |
|---|---|
| Menu, philosophy, principles, career numbers, timeline | `src/data/site.ts` |
| Blog posts (Thoughts) | `src/content/thoughts/*.md` |
| Coaching materials (Playbook) | `src/content/playbook/*.md` |
| Pages | `src/pages/` |
| Colors and fonts | `src/styles/global.css` |

To add a post or a playbook item, copy an existing `.md` file, change the top section (title, date, sport and so on) and write below it.

## Private materials

This repository is public. Do not commit private materials here. Private content will be added later behind a login.
