/* global React */

function Practice() {
  const services = [
    {
      num: "P.01",
      title: "Contract restructuring",
      blurb: "Take a book of bespoke per-customer deals and turn it into a catalogued, governed product portfolio. The work that moves freight from a cost-plus line to a defined commercial proposition.",
      meta: ["8–12 weeks", "Joint w/ leadership", "Fixed scope"],
    },
    {
      num: "P.02",
      title: "Modular pricing models",
      blurb: "Value-based pricing for freight, warehousing, and contract logistics. Tiered service catalogues that scale across a customer base without eroding margin or service consistency.",
      meta: ["6–10 weeks", "Pricing + finance", "Catalogue + pricebook"],
    },
    {
      num: "P.03",
      title: "Strategic account architecture",
      blurb: "Restructure engagement with your largest accounts around a long-term agenda — sustainability, network resilience, cost-to-serve — turning annual renegotiations into multi-year partnerships.",
      meta: ["Ongoing · retainer", "C-suite + procurement", "Multi-year plays"],
    },
    {
      num: "P.04",
      title: "Product governance for B2B SaaS",
      blurb: "For founders shipping into logistics, freight, or fleet markets. Catalogue definition, change control, pricing discipline, service KPIs — borrowed from regulated supply-chain ops and applied to software.",
      meta: ["Advisory · monthly", "Founder + product lead", "Governance framework"],
    },
  ];

  return (
    <section className="lp-practice" id="practice">
      <header className="lp-practice__head">
        <div>
          <div className="lp-section-eyebrow">
            <span className="lp-section-eyebrow__line" />
            <span className="lp-section-eyebrow__num">// 02</span>
            <span>Practice</span>
          </div>
          <h2 className="lp-practice__title">
            Modular commercial models<br />
            for logistics businesses<br />
            that <em>still price by the kilo.</em>
          </h2>
        </div>
        <p className="lp-practice__lead">
          Four engagement shapes. Always joint with your leadership — never a slide-deck-and-leave. Lake-Project repositions propositions from cost-plus to value-based, then hands you something your commercial team can actually sell.
        </p>
      </header>

      <ol className="lp-practice__list">
        {services.map((s) => (
          <li key={s.num} className="lp-service">
            <div className="lp-service__num">{s.num}</div>
            <div className="lp-service__body">
              <h3 className="lp-service__title">{s.title}</h3>
              <p className="lp-service__blurb">{s.blurb}</p>
            </div>
            <ul className="lp-service__meta">
              {s.meta.map((m, i) => (
                <li key={i}>
                  <span className="lp-service__meta-dot" />
                  {m}
                </li>
              ))}
            </ul>
            <div className="lp-service__chev" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="13 6 19 12 13 18" />
              </svg>
            </div>
          </li>
        ))}
      </ol>

      <aside className="lp-practice__aside">
        <div className="lp-practice__aside-eyebrow t-micro">⌑ A note on scope</div>
        <p className="lp-practice__aside-text">
          I take on <strong>two to three engagements a year</strong>, alongside a full-time commercial role at DSV. That's a deliberate cap. If you need a team and a project plan with thirty workstreams, this isn't the right shop — you need a Big-Four consultancy. If you need one person who has actually owned the P&amp;L and can sit across from your CFO at the contract table, we should talk.
        </p>
      </aside>
    </section>
  );
}

window.Practice = Practice;
