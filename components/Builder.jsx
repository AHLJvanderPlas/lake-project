/* global React */

function Builder() {
  const outputs = [
    {
      id: "B.01",
      context: "Logistics product · DSV",
      label: "The distribution catalogue",
      description:
        "A book of bespoke per-customer deals — cost-plus, renegotiated annually — turned into a modular, governed, value-priced product portfolio. Served B2B and B2C demand across 60,000 m² and 150 FTE. Built with the same rigour as any software product: catalogue definition, change control, pricing discipline, service KPIs.",
      tags: ["Product design", "Pricing model", "Governance framework"],
    },
    {
      id: "B.02",
      context: "Logistics SaaS · podfy.net",
      label: "Podfy",
      description:
        "Proof of delivery without an app. Scoped from a single, specific problem — CMR documentation is broken for small carriers — and shipped as a single, specific product. No scope creep. No feature factory. A link, a photo, a stamped GPS-tagged record in 11 seconds.",
      tags: ["Product build", "Benelux logistics", "Zero-install"],
    },
    {
      id: "B.03",
      context: "AI fitness SaaS · justfit.cc",
      label: "JustFit",
      description:
        "Adaptive training coach. The product insight was simple: most fitness apps assume you have the same 60 minutes every day. JustFit doesn't. Bad sleep, twenty-five minutes, sore knee — it generates a session that fits. Four governed training paths, one clear pricing model.",
      tags: ["AI product", "Adaptive UX", "Value-based pricing"],
    },
  ];

  return (
    <section className="lp-builder" id="builder">
      <div className="lp-builder__inner">

        <header className="lp-builder__head">
          <div className="lp-section-eyebrow">
            <span className="lp-section-eyebrow__line" />
            <span className="lp-section-eyebrow__num">// Builder</span>
            <span>The through-line</span>
          </div>
          <h2 className="lp-builder__title">
            One discipline.<br />
            <em>Three products.</em>
          </h2>
          <p className="lp-builder__lead">
            Whether the output is a freight-product catalogue or a proof-of-delivery SaaS, the work is the same: define the scope precisely, govern the catalogue, price on value, and ship something you can stand behind. Format changes. Method doesn't.
          </p>
        </header>

        <div className="lp-builder__grid">
          {outputs.map((o) => (
            <article key={o.id} className="lp-builder__card" data-id={o.id}>
              <div className="lp-builder__card-meta">
                <span className="lp-builder__card-context">{o.context}</span>
              </div>
              <h3 className="lp-builder__card-label">{o.label}</h3>
              <p className="lp-builder__card-desc">{o.description}</p>
              <ul className="lp-builder__card-tags">
                {o.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

window.Builder = Builder;
