# How to use this design system with Claude Code

This folder is a complete design-system package for **Lake-Project** — Alexander van der Plas's parent studio brand (logistics consultancy + Podfy + JustFit). It is structured as a Claude Code **Agent Skill**: once installed, Claude Code will read `SKILL.md` and follow the rules in `README.md` whenever you ask it to design or build something for Lake-Project.

## Quickest setup (recommended) — install as a skill

```bash
# from the root of your codebase
mkdir -p .claude/skills/
cp -r path/to/design_handoff_lake_project .claude/skills/lake-project-design
```

That's it. Next time you open Claude Code in this repo:

- It will see the skill automatically.
- Ask: *"Build me a landing page using the lake-project-design skill"* or simply *"design something for Lake-Project"* and the skill activates.
- The skill front-matter is set to `user-invocable: true`, so it shows up in the `/skills` picker as well.

The skill is **self-contained** — it includes:
- The full README with voice rules, content fundamentals, visual foundations, iconography
- `colors_and_type.css` — every design token, ready to `@import` into any new stylesheet
- `assets/` — the LAKE / PROJECT stacked mark, horizontal wordmark
- `ui_kits/lake-project/` — a complete recreation of the consultancy site (React + JSX + plain CSS). Use as reference for visual fidelity OR lift components from.
- `preview/` — atomic cards showing each token / pattern in isolation. Good for quick reference.

## Alternative setup — drop into project root

If you'd rather it live alongside your app code instead of as a skill:

```bash
cp -r path/to/design_handoff_lake_project src/design-system
```

Then add to your `CLAUDE.md` (or create one at the repo root):

```markdown
## Design system
This project follows the Lake-Project design system. Before any design or UI
work, read `src/design-system/README.md`, `src/design-system/SKILL.md`, and
import tokens from `src/design-system/colors_and_type.css`.
```

## What's where (fast tour)

| Path | What it is | Use when |
|---|---|---|
| `SKILL.md` | The skill front-matter + skill prompt | Claude Code reads this first |
| `README.md` | The brand bible — voice, tokens, foundations, iconography | Read this whenever you need to know "what does Lake-Project sound/look like?" |
| `colors_and_type.css` | All CSS variables — colours, type scale, spacing, radii, shadows, motion | `@import` from any new stylesheet |
| `assets/lake-project-mark.svg` | Stacked LAKE / PROJECT logo (Eurostile / Michroma) | Primary brand mark |
| `assets/lake-project-wordmark.svg` | Same logo + tagline | Footer, signature, full lockup |
| `assets/ripple-pattern.svg` | Legacy v1 motif | Probably skip (v2 uses signal lines, generated in JSX) |
| `ui_kits/lake-project/index.html` | Full consultancy site mockup — hero, practice, ventures, resume, contact, footer | Reference for visual fidelity; lift components |
| `ui_kits/lake-project/components/*.jsx` | Individual React components for each section | Lift wholesale or use as reference |
| `ui_kits/lake-project/site.css` | All page-level styles using the tokens | Source of truth for cards, hover states, etc |
| `preview/*.html` | Atomic preview cards — one per token / pattern | Quick reference if you're not sure what a token looks like |

## How to think about the HTML files

**They are reference, not production code.** The JSX files in `ui_kits/lake-project/components/` are written for an inline-Babel preview environment. When you bring this into a real codebase:

- **Vite / Next.js / React app:** copy a component, rename it, import its CSS tokens, drop into your routing.
- **Astro / static site:** rebuild the markup using the same class names against `site.css`.
- **Vanilla HTML site (e.g. you're shipping to Netlify):** the files work as-is — just `npm run` nothing, deploy `ui_kits/lake-project/` as your site root after copying `colors_and_type.css` into it.
- **A framework that isn't React** (Svelte, Vue, SolidJS, native): use the JSX as **structural reference** — recreate the markup in your framework, lift `site.css` verbatim (it's framework-free), keep the token names.

The point is the *design*: tokens, voice, layout decisions, motion vocabulary. Implementation is up to your codebase.

## Non-negotiable rules (from README)

These are the rules the skill enforces. If Claude Code starts breaking them, push back:

1. **No emoji.** Anywhere.
2. **Sentence case** for everything except brand names.
3. **British English** spelling.
4. **Em dashes** (—) for asides, not hyphens.
5. **Logo is always stacked** (LAKE over PROJECT, widths matched). Use the SVG.
6. **Font stack: Geist + Geist Mono + Michroma (logo) + Instrument Serif italic (sparingly).** All Google Fonts.
7. **Lake-deep `#0B1117` canvas, luminous cyan `#6FE3D1` as the single accent.**
8. **Sharp corners** — 2px buttons, 4px cards. No 8+ px blobs.
9. **No bluish-purple gradients, no emoji cards, no left-coloured-accent borders.**

## Substitutions to confirm with the brand owner

Two fonts in this system are **Google Fonts substitutes**:
- **Eurostile** → substituted with **Michroma** (the closest free analogue). If you have a real Eurostile or Eurostile Extended `.woff2`, drop it in a new `fonts/` folder and the CSS will pick it up — `--font-logo` already lists Eurostile first.
- **Söhne** (the original sans direction) → substituted with **Geist**. Already wired the same way.

If the project gets to production, ask Alexander about font licences and swap.

## Verifying it's working

Once installed, ask Claude Code:

> "Using the lake-project-design skill, build me a one-page case study about a contract restructuring engagement."

You should see it:
- Set up dark canvas, mono labels, luminous cyan
- Write copy in sentence case, British English, with em dashes
- Use the stacked LAKE/PROJECT logo
- Pull from the type scale (`--t-display-md`, etc.)

If any of that drifts, point at this README and the skill will re-anchor.
