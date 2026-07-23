/* global React */

function Builder() {
  const products = [
    {
      id: "P.01",
      status: "LIVE",
      context: "Internal · lake-project.com",
      label: "Financial back-end",
      description:
        "The studio's own infrastructure. Client portal with passkey authentication, invoice administration and PDF generation, billing engine, and document storage. Built on D1, R2, and Workers — the same stack offered to clients. The back-office for Lake-Project's client engagements.",
      tags: ["Client portal", "Billing engine", "Passkey auth"],
      url: null,
    },
    {
      id: "P.02",
      status: "LIVE",
      context: "3PL operations platform",
      label: "EMCT",
      description:
        "Purpose-built for 3PL operations. Automated fuel cost indexation with live scraper feeds from carrier rate publications — no manual entry, no lag. Event registration middleware for operational workflows. Newsletter delivery optimisation engine. High-frequency, zero-human-in-the-loop data flow from source to output.",
      tags: ["Live fuel scrapers", "Event middleware", "Newsletter engine"],
      url: null,
    },
    {
      id: "P.03",
      status: "LIVE",
      context: "LinkedIn publishing platform · harryvanderplas.com",
      label: "Harry van der Plas",
      description:
        "Fully automated LinkedIn publishing pipeline. AI content generation from source documents, research, and repository items. Multi-stage approval workflow with email notifications. Timed auto-publish with randomised slots to avoid detectable posting patterns. Engagement analytics and a full admin back-end. React + Cloudflare Workers + D1.",
      tags: ["AI content pipeline", "Auto-publish", "Analytics"],
      url: "https://harryvanderplas.com",
    },
    {
      id: "P.04",
      status: "LIVE",
      context: "SaaS · podfy.net",
      label: "Podfy",
      description:
        "Full SaaS stack: marketing site, driver web-app, customer portal, admin back-end, and billing engine. Proof of delivery for Benelux carriers — send a driver a link, they photograph the CMR, you get a GPS-tagged EU-archived record in 11 seconds. Zero app install, zero onboarding, priced per upload.",
      tags: ["Full SaaS stack", "EU archive", "Billing engine"],
      url: "https://podfy.net",
    },
  ];

  return (
    <section className="lp-builder" id="work">
      <div className="lp-builder__inner">

        <header className="lp-builder__head">
          <div className="lp-section-eyebrow">
            <span className="lp-section-eyebrow__line" />
            <span className="lp-section-eyebrow__num">// 03</span>
            <span>Work</span>
          </div>
          <h2 className="lp-builder__title">
            Four products.<br />
            <em>All in production.</em>
          </h2>
          <p className="lp-builder__lead">
            Every build in this portfolio started as a precise problem definition. The output in each case is a deployed, running system — not a prototype, not a pilot. Same method, same stack, different domain.
          </p>
        </header>

        <div className="lp-builder__grid">
          {products.map((p) => (
            <article key={p.id} className="lp-builder__card" data-id={p.id}>
              <div className="lp-builder__card-meta">
                <span className="lp-venture__live" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginRight: "10px" }}>
                  <span className="lp-venture__live-dot" />
                  {p.status}
                </span>
                <span className="lp-builder__card-context">{p.context}</span>
              </div>
              <h3 className="lp-builder__card-label">{p.label}</h3>
              <p className="lp-builder__card-desc">{p.description}</p>
              <ul className="lp-builder__card-tags">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {p.url && (
                <a
                  className="lp-venture__visit"
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "16px" }}
                >
                  Visit ↗
                </a>
              )}
            </article>
          ))}
        </div>

        <div style={{ marginTop: "48px", padding: "20px 24px", border: "1px solid var(--border-hairline)", borderRadius: "4px" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-faint)" }}>// Also built</span>
          <div style={{ marginTop: "10px", display: "flex", alignItems: "baseline", gap: "16px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "13px", color: "var(--fg-muted)" }}>
              <strong style={{ color: "var(--fg)", fontWeight: 500 }}>JustFit</strong>
              {" "}— AI fitness coaching app. Adaptive workout generation for general fitness, running, cycling, and military prep.{" "}
              <a href="https://justfit.cc" target="_blank" rel="noopener noreferrer" style={{ color: "var(--fg-subtle)" }}>justfit.cc ↗</a>
              {" "}<span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--fg-faint)", letterSpacing: "0.1em" }}>· development paused</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

window.Builder = Builder;
