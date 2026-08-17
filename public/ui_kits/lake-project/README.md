# Lake-Project · Consultancy + Studio Website UI Kit

A high-fidelity recreation of the proposed `Lake-Project.com` parent-studio site. Editorial single-page layout with five primary sections, sticky header, and a working contact form.

## Sections
1. **Hero** — declarative headline, restraint, ripple motif on dark
2. **Practice** — consultancy services (contract restructuring, modular pricing, etc.)
3. **Ventures** — the product portfolio (Podfy, JustFit)
4. **Resume** — Alexander's CV in editorial form (extracted from LinkedIn)
5. **Contact** — quiet form with British-English helper copy

## Files
- `index.html` — entry point, mounts the whole site
- `components/Header.jsx` — sticky top nav with wordmark
- `components/Hero.jsx`
- `components/Practice.jsx`
- `components/Ventures.jsx`
- `components/Resume.jsx`
- `components/Contact.jsx`
- `components/Footer.jsx`
- `components/Icons.jsx` — Lucide-style inline icons used in this kit

All components read tokens from `../../colors_and_type.css`. No inline colour literals — every visual decision routes through a token so changes to the system cascade.

## Voice notes baked in
- All copy follows the README's CONTENT FUNDAMENTALS
- British spelling, sentence case, em dashes, numerals
- "Alexander" / "I" used on resume; "Lake-Project" used in service descriptions
- No emoji anywhere
