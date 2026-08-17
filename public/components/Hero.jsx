/* global React */

function Hero({ onNav }) {
  return (
    <section className="lp-hero" id="top">
      <div className="lp-hero__coords" aria-hidden="true">
        <div><span className="lp-hero__coords-tick" /> N 51°55′21″ · E 4°28′45″</div>
        <div>SIG · 442.MHz · RX <span className="lp-hero__coords-tick" /></div>
      </div>

      <div className="lp-hero__inner">
        <div className="lp-hero__eyebrow">
          <span className="lp-hero__eyebrow-num">// 01</span>
          <span className="lp-hero__eyebrow-dot" />
          <span className="lp-hero__eyebrow-text">Rotterdam, NL · Studio</span>
        </div>

        <h1 className="lp-hero__title">
          <span className="lp-hero__title-line">The studio behind</span>
          <span className="lp-hero__title-line"><em>quiet,</em> well-built things.<span className="lp-hero__title-cursor"></span></span>
        </h1>

        <p className="lp-hero__lead">
          Lake-Project designs and builds <strong>custom web-based SaaS products</strong>: back-end systems, automation tooling, and full-stack applications. Each build is scoped to one problem, engineered to run without ongoing involvement, and handed over as a working product.
        </p>

        <div className="lp-hero__actions">
          <button className="btn btn--primary" onClick={() => onNav("work")}>
            View work →
          </button>
          <button className="btn btn--ghost" onClick={() => onNav("contact")}>
            Open channel
          </button>
        </div>

        <dl className="lp-hero__facts">
          <div>
            <dt>Stack</dt>
            <dd>Cloudflare Workers · D1 · R2</dd>
          </div>
          <div>
            <dt>Frontend</dt>
            <dd>React · Vite · Pages</dd>
          </div>
          <div>
            <dt>Products in production</dt>
            <dd><span className="lp-hero__fact-tick" />4 en groeiend</dd>
          </div>
          <div>
            <dt>Based</dt>
            <dd>Rotterdam · NL</dd>
          </div>
        </dl>
      </div>

      <div className="lp-hero__ticker" aria-hidden="true">
        <span>Last sync · 14:37 CET</span>
        <span className="lp-hero__ticker-arrow">→</span>
        <span>Podfy uptime · 99.97%</span>
        <span className="lp-hero__ticker-arrow">→</span>
        <span>EMCT fuel index · real-time</span>
        <span className="lp-hero__ticker-arrow">→</span>
        <span>Harry auto-publish · live</span>
      </div>
    </section>
  );
}

window.Hero = Hero;
