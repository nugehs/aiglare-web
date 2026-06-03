# aiglare-web

Marketing site for [aiglare](https://github.com/nugehs/aiglare) — lint your AI
features for governance guardrails.

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com).

## Brand

aiglare's identity is its own — deliberately *not* the repoctx terminal look.
It's a light, precise **"audit report"** aesthetic:

- Slate ink on warm paper, white report cards.
- An **indigo** interactive accent (links, buttons, the logo beam) kept separate
  from meaning-bearing color.
- The **red / amber / green severity triad** as the functional signature —
  shown in a real-looking audit card, used only for audit semantics.
- A soft warm **"glare" beam** behind the hero, and a faint survey grid.
- Display in Space Grotesk, body in Inter, code in JetBrains Mono.
- Original "glare" mark (`public/logo.svg`): a beam of light catching a
  red/amber/green severity readout.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # static output in dist/
npm run preview
```

## Deploy

Fully static — any host works (GitHub Pages, Vercel, Netlify, Cloudflare
Pages). Set the canonical URL in `astro.config.mjs` (`site`) before deploying.
