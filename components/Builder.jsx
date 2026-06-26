/* global React */

function Builder() {
  const outputs = [
    {
      id: "B.01",
      context: "Logistics product · DSV",
      label: "The distribution catalogue",
      description:
        "Problem: a 60,000 m² multi-site pharma and chemical operation priced freight as a cost line — bespoke per customer, renegotiated annually, with no governed catalogue. Design solution: analyse the full operational width, define a modular product architecture, establish governance and KPI frameworks, lead the commercial change cross-functionally, hand over a running product portfolio priced on delivered value.",
      tags: ["Design thinking", "Modular architecture", "Value pricing"],
    },
    {
      id: "B.02",
      context: "Logistics SaaS · podfy.net",
      label: "Podfy",
      description:
        "Problem: CMR proof-of-delivery is broken for small Benelux carriers — paper-based, slow, and legally fragile. Design solution: scoped tightly to one problem, built as one product. A link, a photo, a stamped GPS-tagged EU-archived CMR back in 11 seconds. Zero app, zero training, zero onboarding friction. Priced per upload.",
      tags: ["Problem definition", "Zero-friction UX", "Per-use pricing"],
    },
    {
      id: "B.03",
      context: "AI fitness SaaS · justfit.cc",
      label: "JustFit",
      description:
        "Problem: fitness apps are rigid — they assume the same sixty minutes every day. Design insight: the real product is adaptability, not a training plan. Engineered four governed training paths (general fitness, running, cycling, military prep) with an AI layer that generates sessions around the day you actually have. Free tier permanent, Pro €4.99.",
      tags: ["Design insight", "Adaptive engineering", "Freemium structure"],
    },
    {
      id: "B.04",
      context: "Personal site · harryvanderplas.com",
      label: "Harry van der Plas",
      description:
        "Brief: a personal site with a blog, file hosting, and authenticated access — built to last, not to be maintained. Design solution: React on Cloudflare Pages, D1 for content, R2 for files, role-based auth. Same Night Station design system as Lake-Project. Handed over running.",
      tags: ["Client build", "Cloudflare stack", "Night Station"],
    },
  ];

  return (
    <section className="lp-builder" id="builder">
      <div className="lp-builder__inner">

        <header className="lp-builder__head">
          <div className="lp-section-eyebrow">
            <span className="lp-section-eyebrow__line" />
            <span className="lp-section-eyebrow__num">// Builder</span>
            <span>Design thinking in practice</span>
          </div>
          <h2 className="lp-builder__title">
            One method.<br />
            <em>Four outputs.</em>
          </h2>
          <p className="lp-builder__lead">
            Design thinking applied at every scale — from a pharmaceutical warehouse workflow to a proof-of-delivery SaaS. Analyse the problem, design an integrated solution, lead the build cross-functionally, price on value, hand over something that runs. The format changes. The discipline doesn't.
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
