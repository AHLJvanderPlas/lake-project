# Lake-Project — Design System

> *The studio behind quiet, well-built things.*

Lake-Project is the parent studio of **Alexander van der Plas** — a commercial & product leader from the logistics world (DSV Contract Logistics, currently Freight Operations Manager, Moerdijk NL). It houses:

- **Lake-Project itself** — a logistics + product consultancy. Senior commercial advisory for 3PLs, carriers, shippers; modular productisation of bespoke service propositions; contract design and pricing model work.
- **Podfy** — `podfy.net` — proof-of-delivery without an app. Send a driver a link, get a stamped + GPS-tagged CMR back. EU-hosted, built for Benelux carriers and 3PLs.
- **JustFit** — `justfit.cc` — adaptive AI training coach (general fitness, running, cycling, Dutch military-test prep). NL/EN.
- **Resume / personal brand** — Alexander's CV lives under the same roof; the consultancy is the front door, the resume is the back.

The studio's job is to make the parent brand *feel* like the source the products came from — calm, considered, lived-in. Not a startup. Not a corporate. A studio.

---

## Index

- `README.md` — this file. Brand context, content, visual foundations, iconography, index.
- `colors_and_type.css` — all design tokens. Import this from every artefact.
- `SKILL.md` — packageable as a Claude Code Skill.
- `assets/` — logos, mark, ripple motif, generic photography placeholders.
- `preview/` — Design System tab cards (type, color, components, etc.).
- `ui_kits/lake-project/` — consultancy website UI kit (the front door).
- `ui_kits/podfy/` — Podfy product UI kit (referenced; see Podfy's own brand).
- `ui_kits/justfit/` — JustFit product UI kit (referenced; see JustFit's own brand).

The studio brand defined here is for **Lake-Project the parent**. Each product (Podfy, JustFit) has its own distinct identity — they sit *under* the studio but do not inherit its visual language wholesale. Think of Lake-Project as the holding company; each product is its own brand.

### Sources consulted
- `uploads/Alexander van der Plas _ LinkedIn.pdf` — full role history at DSV (Freight Operations Manager, Key Account Manager, Contract Manager). Source of the consultancy positioning.
- `podfy.net` — fetched live during system build (homepage). Product copy, visual references.
- `justfit.cc` — fetched live during system build (homepage, NL). Product copy, visual references.
- `Lake-Project.com` — **could not be reached** at time of build (returned a permissions error from the fetch step). The Lake-Project visual identity here is a *proposal* derived from Alexander's senior logistics-commercial positioning, not a recreation of an existing site. **Flag for review.**

---

## The audience the parent brand is talking to

Three different readers visit Lake-Project, in roughly this order:

1. **A logistics CCO, GM or commercial director** in a 3PL, carrier, or shipper, looking for someone who can take a messy bespoke-pricing-per-customer book and turn it into a modular product portfolio. They have read the LinkedIn, they want to know what engagements look like, what it costs, and whether this person is real.
2. **A product founder or PE / investor** vetting Alexander as an operator behind Podfy / JustFit — checking whether the products are a hobby or a serious venture.
3. **A recruiter or future employer** scanning the resume page.

The brand has to read as credible to all three without leaning startup or corporate. Editorial gravitas.

---

## CONTENT FUNDAMENTALS

How copy is written across Lake-Project surfaces. Use this when writing any new copy.

### Tone
- **Plainspoken senior operator.** No buzzwords, no thought-leader posturing. When a sentence could be a LinkedIn headline ("unlocking value through synergies"), rewrite it.
- **Specific over abstract.** Numbers, role scopes, decisions. *"60,000 m², 150 FTE, SQAS-certified"* — not *"large multi-site operations"*. Borrow Alexander's LinkedIn voice directly.
- **Confident but not loud.** The brand never sells aggressively. It states what it does, who it's for, and lets the reader infer the rest. Podfy is the model: *"Send a link. Get the CMR back the same day."* — declarative, finished.
- **Honest about scope.** If something doesn't apply, say so. JustFit's *"Wat als ik geblesseerd ben? […] We slaan geen dag over — we werken er omheen."* is the template.

### Person & address
- **You / your** when speaking to a reader. Direct, second person.
- **We** when speaking as Lake-Project, *only* in places where the studio acts collectively (commitments, beliefs). Otherwise prefer "Lake-Project" or "Alexander" — first-person plural can feel inflated for a one-person studio. Don't write "we" if it means "I."
- **I / Alexander** on resume and personal pages — drop the studio voice when it's actually him talking.
- Never *the team*, *our team* (we don't have one of those).

### Casing
- **Sentence case** for everything: headings, buttons, navigation, labels. *"What it looks like in practice"* — never *"What It Looks Like In Practice"*. This matches Podfy and JustFit.
- Brand names retain their casing: **Podfy**, **JustFit**, **Lake-Project** (hyphenated, both capitalised).
- ALL CAPS is reserved for eyebrows and micro-labels (e.g. `01 — Driver opens link`). Use sparingly with wider tracking (`letter-spacing: 0.18em`).

### Sentence structure
- **Short sentences first.** Headlines and openers should be ≤ 8 words. Then breathe.
- **Em dashes (—) are the studio's favourite punctuation.** Use them liberally for asides, like Podfy does: *"Any phone — even a four-year-old Android."* Not hyphens, not commas-as-dashes. The actual em dash character.
- **Numerals over words for anything quantitative.** *"7 years EU archive retention"*, not *"seven years"*. *"15% efficiency improvement"*, not *"fifteen percent"*.
- **Lists are common; bullets are dense.** Podfy-style bullet groups (3 items, one line each) > flowing prose paragraphs when the content is a feature list.

### Vocabulary
- **Words the brand uses:** modular, value-based, P&L, scope, contract, propositions, commercial, portfolio, stamped, archived, retention, the call, *took the decision*, *single point of accountability*, *closest equivalent to*. These all come from Alexander's actual writing.
- **Words to avoid:** synergies, leverage (verb), holistic, ecosystem, journey (unless literal), unlock, empower, transformative, world-class, best-in-class, cutting-edge, robust (overused), seamless.
- **Verbs we like:** repositioned, restructured, owned, negotiated, mobilised, drove, anticipated, took the call.
- **British English spelling** (Alexander is NL-based, working with EU and UK clients): *organisation*, *propositions*, *behaviour*, *recognise*. Not American.

### Numbers, units, dates
- **EU formatting.** *2025-04-22*, *14:37 CET*, *€48/jaar*, *60,000 m²*. Comma as thousands separator in English copy.
- **Currency:** `€` before the number, no space: `€4.99`. (NL convention is *€4,99* with a comma — use this only in Dutch-language surfaces; English defaults to a point.)
- Always include units. *25 min*, not *25*. *11 s*, not *11 seconds*. Mono font for inline numerals helps anchor the editorial feel.

### Emoji & symbols
- **No emoji on Lake-Project surfaces.** None. Podfy and JustFit don't use them; the parent brand definitely doesn't.
- **Numerals as section markers are encouraged** — `01`, `02`, `03` with an em dash separator. Borrowed straight from Podfy ("01 — The driver's view"). Mono font, muted colour.
- Unicode dividers are fine: `·` (middle dot) as a separator in metadata strings (*Amsterdam · Algemene fitness*), `→` for inline navigation cues (*Try the demo →*).

### Example copy snippets (use these as templates)

> **Hero, consultancy:**
> *Modular commercial models for logistics businesses that still price by the kilo.*
>
> Lake-Project repositions freight, warehousing, and contract-logistics propositions from cost-plus to value-based — built around portfolios you can scale without renegotiating every customer line by line.

> **Service card:**
> *Contract restructuring.* Take a book of bespoke per-customer deals and turn it into a catalogued, governed product portfolio. Typical engagement: 8–12 weeks, joint with your commercial leadership.

> **Resume opener (first person):**
> *I run commercial and product for distribution at DSV's Benelux contract-logistics business. Before that, contract management, key accounts, and a multi-site pharma + chemical portfolio. The work below covers the last eight years.*

---

## VISUAL FOUNDATIONS

### Colour vibe — v2 "Night Station"
A **lake at 3 a.m.**, viewed from a control-room window. The previous warm-paper / sand / amber palette was retired in favour of a darker, more operator-forward direction:
- **Night canvas** (`--night` #0B1117) as the primary surface, with `--abyss` (#07090C) for footers and `--night-elev-1/2/3` for cards and overlays.
- **Signal cyan-mint** (`--signal` #6FE3D1) is the single accent — used for active states, focus rings, hyperlinks, italic accents, and the glow halo on luminous elements. Never used as a fill across large areas.
- **Ember orange** (`--ember` #FFA86B) survives as a secondary warning/live accent — used sparingly.
- A **fixed 88px grid overlay** sits at 2.5% opacity behind the whole page, giving the layout the feeling of being plotted on graph paper.
- Never bluish-purple gradients. Never glassy colourful UI candy. The brand looks like it could be running on a Bloomberg terminal next to a Helvetica-and-grid magazine.

### Type — v2 "Night Station"
- **Display & body:** *Geist* (Google Fonts) carries almost everything. At huge sizes (≥ 64px) display copy is set in **Geist 200** for the luminous, slightly-haloed feel of monitor type. UI and body use 300–500.
- **Mono:** *Geist Mono* is used heavily as **decoration** — section IDs (`// 02`), coordinates, tickers, eyebrows, button labels, form helpers, footer columns. Mono is not just for code; it's the visual rhythm of the entire system.
- **Italic accent:** *Instrument Serif italic* survives, but only ever as **one or two italic words inside a sans headline** — never an entire phrase. Used like a luminous highlight, almost always coloured `--signal`. Example: "*quiet*, well-built things." This is the brand's single concession to editorial warmth on an otherwise technical surface.
- **Pairing rule:** Geist for everything. Mono for any label or number. Serif italic strictly for surgical accents.

### Spacing
- 4-based scale (2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160, 200px). See `--space-*` tokens.
- **Section rhythm** is large: 96–160px between top-level sections on a marketing page. Editorial whitespace.
- **Card padding** is generous: 32–48px minimum on substantive cards.

### Backgrounds
- **Primary canvas:** `--shore-paper` (#F5F1EA). Warm off-white. Never pure white.
- **Inverse canvas:** `--lake-deep` (#0E2A36). Used for hero sections, footers, full-bleed "deep" passages. About 1 in 4 sections on a typical marketing page should go inverse.
- **No gradients as primary fills.** Subtle vertical fades from `--lake-deep` → `--lake-mid` are allowed at very low contrast for atmospheric depth in hero sections.
- **The ripple motif** (`assets/ripple-pattern.svg`) is the one decorative element: thin horizontal sine waves, very low opacity, anchored to the bottom of dark sections. Used like a watermark.
- **Photography:** treat as cool-warm split — sky/water cool, shore warm. Light grain acceptable. No saturated stock photography. Always with a thin hairline border, not floating.

### Animation
- **Easing:** `--ease-out` for entrances; `--ease-quiet` for state changes.
- **Durations:** 80/160/240/400ms. Nothing slower except ambient loops.
- **No bounces.** No spring physics. No elastic.
- **Vocabulary:** fades + small translations (8–16px), opacity pulses, blinking cursors (1.1s steps), animated SVG sine lines (the "signal" motif), live-status dots with glowing halos, monospaced ticker bars.
- **Hover transitions are always 160ms.**
- The hero has a **terminal-style blinking cursor** after the headline; the location dot in the header pulses every 2s; service rows draw a 2px luminous signal stripe on hover.

### Hover states
- **Links:** colour shift from `--lake-deep` → `--accent-amber`, plus a 1px underline that draws in from the left. Never just blue underline.
- **Buttons (primary):** background darkens by 6–8% (use `color-mix(in oklab, var(--lake-deep), black 8%)`).
- **Buttons (secondary):** border darkens + text shifts to amber.
- **Cards:** lift via `transform: translateY(-2px)` + shadow steps up one level (e.g. `--shadow-1` → `--shadow-2`). No scale.
- **Imagery:** subtle 2% brightness lift, no scale.

### Press states
- **Buttons:** scale to `0.98`, transition `--dur-instant` (80ms). Background darkens a further 4%.
- **Cards:** scale `0.995`, no shadow change. Subtle.
- **No iOS-style ripple animations.**

### Borders
- **Default border:** 1px solid `--border` (warm beige, #DDD3C0).
- **Hairlines:** `--border-hairline` (10% lake-deep) for very subtle dividers — most dividers should use this, not `--border`.
- **Inverse borders:** `--border-on-dark` (14% paper) on dark sections.
- **Borders are preferred over shadows for structure**; shadows are reserved for elevation/lift only.

### Shadow system
Four steps. Each is layered (two box-shadows) for a softer light source. Soft, low-contrast, never deep-grey AI-style drop shadows.

| Token | Use |
|---|---|
| `--shadow-hairline` | Default card resting state (1px outline only) |
| `--shadow-1` | Quiet elevation — input focus, subtle cards |
| `--shadow-2` | Card hover, dropdown menus |
| `--shadow-3` | Modals, popovers |
| `--shadow-4` | Full overlays, command palettes |

`--shadow-inset` adds a 1px top highlight on raised surfaces — a quiet "reflected light" cue on cards over warm canvases.

### Protection vs capsules
- **Protection gradient:** used over a hero image to make overlaid text readable — a vertical `--lake-deep` → transparent fade from the bottom. Roughly 0.6 alpha at base, 0 at 60%. Only when text genuinely sits on imagery.
- **Capsules:** small rounded pills (`--radius-pill`) used for status labels and tags. Filled with `--lake-mist` on light, transparent border on dark. Sparingly.

### Layout rules
- **Fixed elements:** header is fixed at the top of marketing pages, on a thin warm scrim (`rgba(245, 241, 234, 0.9) + backdrop-filter: blur(12px)`). Footer is never fixed.
- **Editorial column width:** `--container-text` (760px max) for any prose. Lines must not exceed ~75 characters.
- **Grid:** 12-col on desktop, 12px gutter at small sizes, 24px gutter at large. Margins are generous — pages breathe.
- **Asymmetric layouts are the studio voice.** Avoid centred-everything pages. Use offset-left headlines, ragged-right pull quotes, hanging eyebrows in the left margin.

### Transparency & blur
- **Used for sticky headers** (warm scrim + 12px backdrop blur) and **modal overlays** (`rgba(14, 42, 54, 0.6)` + 8px blur).
- Otherwise avoided. Frosted glass is a tech-startup trope; the studio doesn't use it for cards or buttons.

### Imagery colour vibe
- **Warm shore + cool water.** Photography skews toward the duotone of the brand — warm sand/stone foregrounds, cool blue-grey water/sky in the background.
- **No bright saturation.** Muted, slightly desaturated, slight grain.
- **Black & white is acceptable** for portrait photography (Alexander on the resume page, for instance).
- **No stock photography clichés** — no handshake-over-laptop, no diverse-people-pointing-at-screen.

### Corner radii
- **Operator-panel sharp.** v2 cut radii roughly in half: buttons `--radius-sm` (2px), cards `--radius-md` (4px), large surfaces `--radius-lg` (6px). No 8+ px corners anywhere.
- **Pills** (`--radius-pill`) reserved for genuinely capsule-shaped elements — the header's navigation chip, status dots, the live-indicator.
- **Imagery** uses `--radius-md` (4px) max, often `--radius-none`.

### Cards (canonical v2)
A Lake-Project card is:
- `--night-elev-1` (#10171F) fill
- 1px `--border` outline (10% white)
- `--radius-md` (4px) corners
- `--shadow-2` resting → `--shadow-2 + --glow-signal-sm` on hover (border shifts to `--border-signal`)
- 32–40px internal padding
- A **monospace corner ID** (e.g. `V.01`, `R.02`) anchored top-right at 9.5px, 20% letter-spacing
- A **2px signal stripe** on the left edge for highlighted/active cards (with cyan glow)

No left-coloured-accent-borders in the AI-slop sense (we use a 2px stripe with luminous halo instead, deliberately). No emoji. No drop-shadow auras.

---

## ICONOGRAPHY

The studio's approach to iconography is **restrained and editorial-first**.

### What we use
- **Lucide** ([lucide.dev](https://lucide.dev)) is the preferred icon set — clean, single stroke (1.5px), rounded line caps. Available via CDN: `https://unpkg.com/lucide-static/icons/{name}.svg`. The visual weight of Lucide pairs well with Geist + Instrument Serif.
- **Custom marks** for brand moments — the Lake-Project mark itself (`assets/lake-project-mark.svg`), the wordmark, the ripple motif. These are the only proprietary glyphs.

### What we don't use
- **No emoji.** Anywhere. Including section markers, navigation, status indicators, list bullets.
- **No filled / 3D / coloured icon sets.** No Fontawesome solid, no Material Icons filled.
- **No icon fonts** (Material Icons font, etc.) — load SVGs individually or via Lucide's CDN. Inline `<svg>` is preferred for anything reused.
- **No iconography substituted for actual content.** A row of mystery icons explaining "what we do" is exactly the kind of thing the brand avoids. Words over pictograms.

### Sizing
- **16px** inline with body text (alignment: vertical-middle).
- **20px** in buttons and field affordances.
- **24px** for navigation and feature lists.
- **32px+** only as decorative accents in headers and empty states.

### Colour
- Icons inherit `currentColor` from their parent text. Don't ever colour-code icons unless they're status indicators (positive / warning / negative / info) — and even then, prefer pairing the icon with a label.

### Substitution flag
**No bespoke icon set was provided.** Lucide is the proposed default. If Alexander has a preferred set or wants a custom one, this is a flagged decision — **see open questions at the bottom of this README.**

---

## Open questions & substitutions to confirm

> **v2 "Night Station" direction.** The system was first built warm-paper-editorial; the user asked for more design, more futuristic. v2 is darker, operator-control-room, mono-forward, with a luminous cyan signal as the single accent. If this is too far the other way, flag it — we can pull back to a hybrid (dark canvas, slightly warmer accent) without rebuilding the system.

1. **`Lake-Project.com` couldn't be reached during the build.** Everything you see here is *proposed* from Alexander's LinkedIn voice and the sibling products. If a live site exists, please drop a link or attach screenshots so we can align.
2. **Fonts are Google Fonts substitutes.** Real production direction would likely use *GT Sectra Display* or *Söhne* (paid foundry licences). Substituted: **Instrument Serif** (closest editorial serif on Google Fonts) and **Geist** (closest neo-grotesque to Söhne). If you have licences for the real fonts, drop the `.woff2` files in `fonts/`.
3. **Icon set is Lucide (CDN).** Confirm or replace.
4. **No photography supplied.** Photo placeholders are used throughout the UI kit; supply real photography (or commit to a stock direction like Unsplash editorial / cool-warm duotone) before launch.
5. **Resume content** — currently sourced verbatim from LinkedIn. Confirm what's public-safe and what should be edited.
