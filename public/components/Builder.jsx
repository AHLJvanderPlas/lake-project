/* global React */

function Builder() {
  const products = [
    {
      id: "P.01",
      status: "LIVE",
      context: "Internal · lake-project.com",
      label: "Financial back-end",
      description:
        "The studio's own infrastructure. Client portal with passkey authentication, invoice administration and PDF generation, billing engine, and document storage. Built on D1, R2, and Workers, the same stack offered to clients. The back-office for Lake-Project's client engagements.",
      tags: ["Client portal", "Billing engine", "Passkey auth"],
      url: null,
    },
    {
      id: "P.02",
      status: "LIVE",
      context: "3PL operations platform",
      label: "EMCT",
      description:
        "Purpose-built for 3PL operations. Automated fuel cost indexation with live scraper feeds from carrier rate publications: no manual entry, no lag. Event registration middleware for operational workflows. Newsletter delivery optimisation engine. High-frequency, zero-human-in-the-loop data flow from source to output.",
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
        "Full SaaS stack: marketing site, driver web-app, customer portal, admin back-end, and billing engine. Proof of delivery for Benelux carriers: send a driver a link, they photograph the CMR, you get a GPS-tagged EU-archived record in 11 seconds. Zero app install, zero onboarding, priced per upload.",
      tags: ["Full SaaS stack", "EU archive", "Billing engine"],
      url: "https://podfy.net",
    },
    {
      id: "P.05",
      status: "LIVE",
      context: "SaaS · skillbank.cc",
      label: "SkillBank",
      description:
        "Multi-tenant competency and examination platform for industrial operators. Structured competence matrices per department, a work-instruction repository with QR machine access, four-eyes approval workflows, and automatic PDF certificate generation. Theory and practical examinations with scoring, sign-off, and LinkedIn-publishable verification links. Cloudflare Workers, D1, and R2, EU-residenced and per-tenant branded.",
      tags: ["Competence matrix", "Work instructions", "Certificate generation"],
      url: "https://skillbank.cc",
    },
    {
      id: "P.06",
      status: "LIVE",
      context: "ESG consultancy platform · farlaneconsulting.com",
      label: "Farlane Consulting",
      description:
        "CSRD and ESG reporting platform for a sustainability consultancy. Double materiality assessment scored against ESRS topics using a configurable rubric, with sector-peer benchmarking. A report builder that assembles versioned deliverables from reusable blocks and data points. Client portal on passwordless magic-link access, with shared documents, threaded comments, and notification preferences. Public site, admin back-end, and portal on three subdomains. Cloudflare Workers, D1, and R2, EU-residenced.",
      tags: ["Double materiality", "Report builder", "Client portal"],
      url: "https://farlaneconsulting.com",
    },
    {
      id: "P.07",
      status: "WIP",
      context: "AI fitness coach · justfit.cc",
      label: "JustFit",
      description:
        "Adaptive AI training coach. Bad night's sleep, twenty-five minutes, a sore knee: the generator builds the workout that actually fits the day instead of the one on the schedule. Four paths (general fitness, running, cycling, and military-test prep) plus a trainer portal with billing for coaches and gyms. Live and in daily use, but carried forward as a personal project rather than a commercial product.",
      tags: ["Adaptive workouts", "Four training paths", "Trainer portal"],
      url: "https://justfit.cc",
    },
    {
      id: "P.08",
      status: "WIP",
      context: "Customisable widgets · alexandervanderplas.com",
      label: "Widgets",
      description:
        "A growing set of self-contained, customisable widgets. Each one is a single standalone page: pin it to a phone home screen and it runs as a mobile web-app, or drop the same URL into a Homey dashboard as a Webframe tile. Flip clock, agenda, birthdays, hourly weather, and Stookwijzer advice, theme-aware and configured entirely through the URL. No app, no account, no build step.",
      tags: ["Homey dashboard", "Mobile web-app", "Theme-aware"],
      url: "https://alexandervanderplas.com/widgets/",
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
            Eight products.<br />
            <em>Six in production.</em>
          </h2>
          <p className="lp-builder__lead">
            Every build in this portfolio started as a precise problem definition. The output in each case is a deployed, running system, not a prototype and not a pilot. Same method, same stack, different domain. Two are marked WIP: they are live and usable, but continue as personal projects rather than commercial products.
          </p>
        </header>

        <div className="lp-builder__grid">
          {products.map((p) => {
            const wip = p.status === "WIP";
            return (
              <article
                key={p.id}
                className={wip ? "lp-builder__card lp-builder__card--wip" : "lp-builder__card"}
                data-id={p.id}
              >
                <div className="lp-builder__card-meta">
                  <span className={wip ? "lp-builder__card-status lp-builder__card-status--wip" : "lp-builder__card-status lp-builder__card-status--live"}>
                    {!wip && <span className="lp-venture__live-dot" />}
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
                    className="lp-venture__visit lp-builder__card-visit"
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit ↗
                  </a>
                )}
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

window.Builder = Builder;
