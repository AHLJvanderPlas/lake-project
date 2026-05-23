/* global React */

function Practice() {
  const services = [
    {
      num: "P.01",
      title: "Integrated solution design",
      blurb: "Design thinking applied to operations and commercial problems. From a messy, poorly-defined issue to a detailed, integrated solution — modular in architecture, documented to hand-over level. Not a recommendation deck. Something your operations team can actually run the day after engagement ends.",
      meta: ["Design thinking", "Problem → hand-over", "Modular output"],
    },
    {
      num: "P.02",
      title: "Operational architecture",
      blurb: "Full-width warehousing and contract-logistics expertise — process design, workflow integration, capacity modelling, performance frameworks. Built on TU Delft analytical foundations and tested in regulated, multi-site, high-complexity environments including pharmaceutical and chemical operations under SQAS and PharmaQMS.",
      meta: ["Process design", "Multi-site · regulated", "Performance systems"],
    },
    {
      num: "P.03",
      title: "Gain sharing & value structures",
      blurb: "Commercial structures that align your incentives with your partners'. Gain share, tiered service models, value-based pricing — designed as creative commercial mechanics, not standard rate negotiations. The kind of structure that converts annual renegotiations into multi-year partnerships and that competitors price themselves out of matching.",
      meta: ["Gain share design", "Value-based pricing", "Multi-year plays"],
    },
    {
      num: "P.04",
      title: "Cross-functional leadership to hand-over",
      blurb: "Leading complex change across operations, commercial, IT, and finance — without direct authority over any of them. The engagement ends at a real hand-over: documented, adopted, and running. Not handed to a project manager on day ninety with a slide deck and a good-luck card.",
      meta: ["Cross-functional", "No direct authority", "Delivered to hand-over"],
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
            Design thinking.<br />
            Engineering rigour.<br />
            <em>Delivered to hand-over.</em>
          </h2>
        </div>
        <p className="lp-practice__lead">
          Four engagement shapes — each rooted in the same method: understand the problem analytically, design an integrated and modular solution, lead the change cross-functionally, and leave something that operations can run without you.
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
        <div className="lp-practice__aside-eyebrow t-micro">⌑ The method</div>
        <p className="lp-practice__aside-text">
          Design thinking is not a workshop format. It's <strong>a way of treating every problem as a design problem</strong> — something to be understood deeply before it's solved, and solved in a way that integrates with the system around it. The TU Delft analytical background is what keeps it grounded: every solution is modelled, stress-tested against operational reality, and scoped to what can actually be governed once it's handed over.
        </p>
      </aside>

      <aside className="lp-practice__aside lp-practice__aside--builder">
        <div className="lp-practice__aside-eyebrow t-micro">⌑ A note on scope</div>
        <p className="lp-practice__aside-text">
          I take on <strong>two to three engagements a year</strong>, alongside a full-time operational role at DSV. That's a deliberate cap — not a constraint. If you need a large team and thirty workstreams, this isn't the right shop. If you need one person who can design the solution, lead the change cross-functionally, and still be there at hand-over, we should talk.
        </p>
      </aside>
    </section>
  );
}

window.Practice = Practice;
