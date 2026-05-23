/* global React */

function Hero({ onNav }) {
  return (
    <section className="lp-hero" id="top">
      <div className="lp-hero__coords" aria-hidden="true">
        <div><span className="lp-hero__coords-tick" /> N 51°40′13″ · E 4°36′40″</div>
        <div>SIG · 442.MHz · RX <span className="lp-hero__coords-tick" /></div>
      </div>

      <div className="lp-hero__inner">
        <div className="lp-hero__eyebrow">
          <span className="lp-hero__eyebrow-num">// 01</span>
          <span className="lp-hero__eyebrow-dot" />
          <span className="lp-hero__eyebrow-text">Transmission from Moerdijk, NL</span>
        </div>

        <h1 className="lp-hero__title">
          <span className="lp-hero__title-line">The studio behind</span>
          <span className="lp-hero__title-line"><em>quiet,</em> well-built things.<span className="lp-hero__title-cursor"></span></span>
        </h1>

        <p className="lp-hero__lead">
          Lake-Project is the practice of <strong>Alexander van der Plas</strong> — logistics engineer, operations architect, and product builder. TU Delft analytical foundations. Eight years across the full width of DSV's contract-logistics business — operational and commercial. Design thinking as the default method: every engagement ends at hand-over level.
        </p>

        <div className="lp-hero__actions">
          <button className="btn btn--primary" onClick={() => onNav("practice")}>
            View practice →
          </button>
          <button className="btn btn--ghost" onClick={() => onNav("contact")}>
            Open channel
          </button>
        </div>

        <dl className="lp-hero__facts">
          <div>
            <dt>Education</dt>
            <dd>TU Delft · Engineering</dd>
          </div>
          <div>
            <dt>Current post</dt>
            <dd>FOM · DSV Moerdijk</dd>
          </div>
          <div>
            <dt>Products built</dt>
            <dd><span className="lp-hero__fact-tick" />3 — and counting</dd>
          </div>
          <div>
            <dt>Languages</dt>
            <dd>NL · EN · DE</dd>
          </div>
        </dl>
      </div>

      <div className="lp-hero__ticker" aria-hidden="true">
        <span>Last sync · 14:37 CET</span>
        <span className="lp-hero__ticker-arrow">→</span>
        <span>Podfy uptime · 99.97%</span>
        <span className="lp-hero__ticker-arrow">→</span>
        <span>JustFit users · climbing</span>
        <span className="lp-hero__ticker-arrow">→</span>
        <span>Engagement slots · 1 of 3 open</span>
      </div>
    </section>
  );
}

window.Hero = Hero;
