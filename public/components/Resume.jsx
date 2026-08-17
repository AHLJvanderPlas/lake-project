/* global React */
const { useState: useStateResume } = React;

function Resume() {
  const [expanded, setExpanded] = useStateResume("fom");

  const roles = [
    {
      id: "fom",
      idLabel: "R.01",
      title: "Freight Operations Manager",
      company: "DSV · Global Transport & Logistics",
      type: "Full-time",
      dates: "Jan 2025 – Present",
      duration: "1 yr 5 mos",
      location: "Moerdijk, North Brabant, NL · On-site",
      range: { from: 0.66, to: 1.00 },
      summary:
        "Operational leadership of DSV's regional freight business. Carrying forward the modular product portfolio defined in the Contract Manager role into day-to-day execution: product governance, carrier performance, commercial discipline.",
      bullets: [
        "Operational accountability for regional freight flows: carrier mix, service KPIs, and escalations.",
        "Embedding the modular pricing catalogue across new customer wins and renewals.",
        "Cross-functional ownership across carrier partners, warehouse operations, IT, and commercial.",
      ],
    },
    {
      id: "kam",
      idLabel: "R.02",
      title: "Key Account Manager",
      company: "DSV · Global Transport & Logistics",
      type: "Full-time",
      dates: "Jan 2023 – Feb 2025",
      duration: "2 yrs 2 mos",
      location: "Moerdijk, North Brabant, NL · On-site",
      range: { from: 0.22, to: 0.70 },
      summary:
        "Full commercial ownership of DSV's strategic regional customer portfolio. Single point of accountability for the customer relationship, the contract, the commercial structure, and the operational outcome: the closest equivalent to a P&L owner inside the regional commercial organisation.",
      bullets: [
        "Portfolio ownership. Owned the commercial relationship and contracted scope for the region's strategic accounts, including the largest by revenue. Single decision-maker on pricing, scope, renewals, and escalations.",
        "Repositioned customer relationships from transactional to strategic. Restructured engagement with the largest accounts around their long-term business agenda: sustainability, network resilience, cost-to-serve, turning annual renegotiations into multi-year partnerships.",
        "Creative commercial structuring as a competitive weapon. Designed and won contract structures (gain-share, tiered service, value-based pricing) that solved customer problems competitors couldn't price for, expanding scope and protecting margin simultaneously.",
        "Led innovation as a commercial lever, not a cost. Made the call to bring sustainability and technology investments to the commercial table as differentiators, converting them into incremental scope and customer commitment.",
        "Influence across the enterprise. Mobilised operations, finance, IT, and senior leadership, none of it reporting to the role, to deliver against commercial commitments to strategic customers.",
        "Trusted counterpart at customer C-suite and procurement leadership level, navigating decisions that determined multi-year contract direction.",
      ],
    },
    {
      id: "cm",
      idLabel: "R.03",
      title: "Contract Manager",
      company: "DSV · Global Transport & Logistics",
      type: "Full-time",
      dates: "May 2022 – Jul 2023",
      duration: "1 yr 3 mos",
      location: "Tholen, Zeeland, NL · On-site",
      range: { from: 0.00, to: 0.30 },
      summary:
        "Commercial and product accountability for DSV Contract Logistics' distribution proposition. Multi-site portfolio of 60,000 m², 150 FTE, SQAS- and PharmaQMS-certified, serving high-value pharmaceutical and chemical customers.",
      bullets: [
        "Took the decision to move freight from bespoke per-customer setups and cost-plus pricing toward a modular product catalogue priced on delivered value, a structural change in how the business goes to market in the segment.",
        "Established the governance framework, catalogue definition, change control, pricing discipline, and service KPIs that allow freight propositions to scale across the customer base without eroding margin or service consistency.",
        "Personally led solution design conversations with customer leadership, translating network, service, and sustainability ambitions into commercially defensible distribution architectures.",
        "Drove a 15% efficiency improvement and a material reduction in compliance issues across the regulated pharma + chemical portfolio.",
        "Deployed cleaning robotics and drone-based inventory systems in a regulated pharmaceutical and chemical environment, delivering a 30% reduction in labour-intensive processes without compromising SQAS or PharmaQMS standing.",
        "Built the leadership layer. Led through site and operational managers across multiple locations, developing the bench that allowed the portfolio to absorb growth and complexity.",
      ],
    },
  ];

  const timelineYears = ["2022", "2023", "2024", "2025", "2026"];

  return (
    <section className="lp-resume" id="resume">
      <header className="lp-resume__head">
        <div className="lp-section-eyebrow">
          <span className="lp-section-eyebrow__line" />
          <span className="lp-section-eyebrow__num">// 04</span>
          <span>Operational record</span>
        </div>
        <h2 className="lp-resume__title">
          Eight years, one company,<br />
          <em>three different jobs.</em>
        </h2>
        <p className="lp-resume__lead">
          TU Delft engineering background. Eight years at DSV across the full operational and commercial width: contract management, key accounts, pharma and chemical operations, freight product design, and current freight operations leadership. Design thinking applied throughout: every role produced something modular, governed, and handed over to operations.
        </p>

        <div className="lp-resume__meta">
          <div>
            <span className="t-micro lp-resume__meta-label">Tenure at DSV</span>
            <span className="lp-resume__meta-value">8 yrs 4 mos</span>
          </div>
          <div>
            <span className="t-micro lp-resume__meta-label">Currently based</span>
            <span className="lp-resume__meta-value">Moerdijk, NL</span>
          </div>
          <div>
            <span className="t-micro lp-resume__meta-label">Core method</span>
            <span className="lp-resume__meta-value">Design thinking · Engineering</span>
          </div>
          <div>
            <span className="t-micro lp-resume__meta-label">Languages</span>
            <span className="lp-resume__meta-value">NL · EN · DE</span>
          </div>
        </div>
      </header>

      <div className="lp-resume__timeline">
        <div className="lp-resume__timeline-label">
          <span>// Tenure ribbon · click a block to expand the role</span>
          <span>2022 – 2026</span>
        </div>
        <div className="lp-resume__timeline-bar">
          {roles.map((r) => {
            const left = r.range.from * 100;
            const width = (r.range.to - r.range.from) * 100;
            return (
              <button
                key={r.id}
                className={`lp-resume__timeline-block ${expanded === r.id ? "is-active" : ""}`}
                style={{ left: `${left}%`, width: `${width}%` }}
                onClick={() => setExpanded(r.id)}
              >
                {r.idLabel}
              </button>
            );
          })}
          {timelineYears.map((y, i) => (
            <React.Fragment key={y}>
              <div className="lp-resume__timeline-tick" style={{ left: `${(i / (timelineYears.length - 1)) * 100}%` }} />
              <div className="lp-resume__timeline-ticklabel" style={{ left: `${(i / (timelineYears.length - 1)) * 100}%` }}>
                {y}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <ol className="lp-resume__list">
        {roles.map((r) => {
          const isOpen = expanded === r.id;
          return (
            <li key={r.id} className={`lp-role ${isOpen ? "is-open" : ""}`}>
              <button
                className="lp-role__head"
                onClick={() => setExpanded(isOpen ? null : r.id)}
                aria-expanded={isOpen}
              >
                <div className="lp-role__id">{r.idLabel}</div>
                <div className="lp-role__head-main">
                  <div className="lp-role__title">{r.title}</div>
                  <div className="lp-role__company">{r.company}</div>
                </div>
                <div className="lp-role__head-meta">
                  <div className="lp-role__dates">{r.dates}</div>
                  <div className="lp-role__duration">{r.duration}</div>
                </div>
                <div className="lp-role__chev" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </button>

              {isOpen && (
                <div className="lp-role__body">
                  <div className="lp-role__loc">▸ {r.type} · {r.location}</div>
                  <p className="lp-role__summary">{r.summary}</p>
                  <ul className="lp-role__bullets">
                    {r.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ol>

      <div className="lp-resume__cta">
        <a
          href="https://www.linkedin.com/in/alexandervanderplas"
          className="lp-resume__linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          ↗ View on LinkedIn
        </a>
      </div>
    </section>
  );
}

window.Resume = Resume;
