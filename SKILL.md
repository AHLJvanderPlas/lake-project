---
name: lake-project-design
description: Use this skill to generate well-branded interfaces and assets for Lake-Project (the parent studio of Alexander van der Plas — logistics consultancy + Podfy + JustFit), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

# Lake-Project Design Skill

Read the `README.md` file within this skill, and explore the other available files. The README documents the brand's voice, type and colour system, motion vocabulary, iconography rules, and the structure of the parent studio's identity (Lake-Project) versus its product brands (Podfy, JustFit).

## Map of this skill
- `README.md` — voice, content fundamentals, visual foundations, iconography rules
- `colors_and_type.css` — all design tokens; import this from every artefact you create
- `assets/` — the Lake-Project mark, wordmark, and ripple motif
- `ui_kits/lake-project/` — a working recreation of the consultancy / studio site; lift components from here
- `preview/` — atomic cards demonstrating individual tokens & components (good reference, not for direct reuse)

## When working as a designer
If creating visual artefacts (slides, mocks, throwaway prototypes, marketing pages, etc.), copy assets out and create static HTML files for the user to view. Import `colors_and_type.css` at the top of every stylesheet. Pull components from `ui_kits/lake-project/components/` when their shape fits.

## When working on production code
You can copy assets and read the rules here to become an expert in designing with this brand. The token names in `colors_and_type.css` are stable; treat them as the source of truth. The voice rules in README's CONTENT FUNDAMENTALS section are non-negotiable for any Lake-Project-branded copy.

## Defaults you should respect without being asked
- **No emoji.** Anywhere.
- **Sentence case** for everything except brand names.
- **British English** spelling.
- **Em dashes** (—) for asides, not hyphens.
- **Instrument Serif** display + **Geist** sans + **Geist Mono** (Google Fonts, all three).
- **Lake-deep #0E2A36** on **Shore-paper #F5F1EA**, with **Amber #C8965A** as the single accent.
- **Editorial-tight corner radii**: 4px buttons, 8px cards. No 16+ px blobs.
- **No bluish-purple gradients, no emoji cards, no left-coloured-accent borders.**

## If invoked without further guidance
Ask the user what they want to build or design. Ask several questions — at minimum: which surface (consultancy site, Podfy, JustFit, resume, a slide deck, a deliverable to a client), audience, length, whether variations are wanted, and whether they have copy ready or need it written in the studio's voice. Then act as an expert designer who outputs HTML artefacts or production code, depending on the need.
