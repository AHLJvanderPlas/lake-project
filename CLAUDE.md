# Lake Project — studio site

## SECURITY GUARDRAILS (read before writing any code)

Standing rules for new work in this repo. Each one exists because it already cost
real time somewhere in this codebase family. Skip a rule only if it plainly does
not apply (no mail, no `_headers`, no D1), never because it is inconvenient.

**Styling: no new inline styles.** Put styling in a CSS class, not in a `style=`
attribute or a React `style={{ }}` prop. Inline styles are the single reason a
Content-Security-Policy has to keep `style-src 'unsafe-inline'`, and the cost is
not recoverable later: one sibling project reached ~3400 instances across 134
files, which turned a one-line header fix into a multi-day refactor. Three things
that look like escapes and are not: a **nonce** only covers `<style>` elements,
never `style=` attributes; **`'unsafe-hashes'`** needs a hash per distinct value;
and a **CSS custom property is still an attribute** (`style={{'--w': x}}` does not
help). For dynamic values on SVG use presentation attributes (`fill`, `x`,
`width`), which are not CSS and cost nothing.

**Cloudflare Pages combines every matching `_headers` rule.** The most specific
rule does NOT win, and a browser enforces the intersection of every CSP it
receives. Any per-path header that `/*` also sets must be unset first:

```txt
/admin/*
  ! Content-Security-Policy
  Content-Security-Policy: <the policy you actually want>
```

Without the unset, `/*` silently cancels the per-path policy. This disabled a
WebAssembly transcoder for weeks with no error anywhere, and separately served
`X-Content-Type-Options: nosniff, nosniff`, which is not a valid value. Verify by
counting what is served, never by reading the file:
`curl -sI <url> | grep -ci content-security-policy` must be 1.

**A new third-party origin is a security decision, not a convenience.** Any new
CDN, font host, embed or API must be added to the CSP explicitly and justified in
the commit message. Never widen a directive to a bare scheme such as `https:` to
make something work.

**Code and database must agree.** Every table and column a query touches must
exist. Schema drift has caused more expensive incidents here than any other class
of bug: a dropped table still being written to, a column that never existed, 18
migrations missing from the tracking table. **If several repos share one D1
database, a schema change must update every one of them in the same pass** (a
portal kept writing to tables an admin-side migration had already dropped, and
customer-facing signing broke silently). Migration files are not a reliable
source of truth for what exists; check the live schema.

**Verify the deploy, do not trust the deploy command.** Confirm the deployed
artifact actually changed. A sibling project served a three-week-old build because
the local git branch did not match the Pages production branch, so every deploy
silently became a preview. A success message is not evidence.

**Secrets never live in code or in git.** Use `wrangler secret` / Pages secrets,
or a settings table. If a value must be recoverable, it belongs in the secrets
vault outside every repo, never in a source file or a CLAUDE.md.

**Mail, if this project sends any.** Keep DMARC alignment relaxed (`adkim=r;
aspf=r`) when a provider sends from a subdomain (Resend and SES do); strict
alignment fails every outgoing message. Never point a reporting address at a
mailbox with no routing rule if the zone has a catch-all drop, or the reports
vanish silently.

**DNS and certificates, if this project owns a zone.** Never narrow CAA to a
subset of the CAs Cloudflare uses; it picks the issuer itself and changes it
without notice, and a CAA naming only one CA nearly blocked a live renewal. If
HSTS carries `includeSubDomains` with `preload`, a new hostname must serve valid
HTTPS before it goes live, or it is unreachable rather than merely insecure.

**Prefer an enforced rule over a written one.** Where a rule can be a test, make
it a test: a source-scanning assertion, or a ratchet that only allows a number to
fall. A rule in a document is a rule people forget. When you write such a guard,
temporarily break the rule and confirm the guard actually fails, because a guard
that cannot fail looks like coverage while providing none.

Lake-Project studio site (React + CDN), live at lake-project.pages.dev, GitHub AHLJvanderPlas/lake-project. Contact form backed by a Cloudflare Pages Function (`functions/api/contact.js`) using Turnstile + Resend.

## Secrets

No secret files exist in this repo (no `.env*`, `.dev.vars`, `.claude/settings.local.json`, or `wrangler.toml`/`.jsonc`). `TURNSTILE_SECRET` and `RESEND_API_KEY` are configured only as Cloudflare Pages environment variables/secrets in the dashboard.

See `/Users/alexander/Documents/Projects/Notes/.secrets/lake-project.md` for the actual value(s) — never paste secret values into this file.
