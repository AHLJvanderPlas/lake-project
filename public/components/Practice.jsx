/* global React */

function Practice() {
  const services = [
    {
      num: "S.01",
      title: "Custom SaaS architecture",
      blurb: "Back-end systems scoped to one problem and built to last. Cloudflare Workers, D1, and R2 as the default stack: globally distributed, zero cold-starts, no infrastructure to manage. Modular in design so features can be added without rewriting the foundation.",
      meta: ["Cloudflare Workers", "D1 · R2 storage", "Modular architecture"],
    },
    {
      num: "S.02",
      title: "Admin & client portals",
      blurb: "Internal dashboards and client-facing portals built for real operational use: passkey authentication, role-based access, billing, document management, and audit trails. Designed to be handed to operations and run without a developer in the loop.",
      meta: ["Passkey auth", "Billing & invoicing", "Document management"],
    },
    {
      num: "S.03",
      title: "Automation & integration",
      blurb: "Real-time data scrapers, event-driven middleware, and queue-based processing pipelines. Things that run without being watched: fuel index feeds, newsletter engines, registration middleware, scheduled publishing. Built with Cloudflare Queues and Workers Cron so they survive load spikes and silent failures.",
      meta: ["Live scrapers", "Queue consumers", "Event middleware"],
    },
    {
      num: "S.04",
      title: "Full-stack product delivery",
      blurb: "From brief to deployed, running product. React frontends, Worker-based APIs, D1 databases, R2 file storage. Design thinking applied throughout: understand the problem analytically before writing code, build something modular, hand over something that operations can run the day the engagement ends.",
      meta: ["React · Vite", "End-to-end delivery", "Hand-over level"],
    },
  ];

  return (
    <section className="lp-practice" id="services">
      <header className="lp-practice__head">
        <div>
          <div className="lp-section-eyebrow">
            <span className="lp-section-eyebrow__line" />
            <span className="lp-section-eyebrow__num">// 02</span>
            <span>Services</span>
          </div>
          <h2 className="lp-practice__title">
            One stack.<br />
            Four shapes.<br />
            <em>Delivered to hand-over.</em>
          </h2>
        </div>
        <p className="lp-practice__lead">
          Every engagement starts the same way: define the problem precisely before deciding what to build. The output is always a deployed, running product: not a prototype, not a recommendation deck, and not something that needs a developer in the room to keep it alive.
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
        <div className="lp-practice__aside-eyebrow t-micro">⌑ The stack</div>
        <p className="lp-practice__aside-text">
          Cloudflare Workers, D1, R2, and Pages are the default platform, not because they're fashionable but because they remove the infrastructure layer entirely. <strong>No servers, no containers, no DevOps overhead.</strong> The build is the product; the edge network handles the rest. Every product in the work portfolio runs on this stack.
        </p>
      </aside>

      <aside className="lp-practice__aside lp-practice__aside--builder">
        <div className="lp-practice__aside-eyebrow t-micro">⌑ Scope</div>
        <p className="lp-practice__aside-text">
          Lake-Project takes on <strong>a small number of builds at a time</strong>, not because of capacity but because each one deserves the full analytical pass before a line of code is written. If you need a large agency with dedicated project managers and weekly status decks, this isn't the right shop. If you need one studio that can scope, build, and hand over a running product, we should talk.
        </p>
      </aside>
    </section>
  );
}

window.Practice = Practice;
