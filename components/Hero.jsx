/* global React */
const { useEffect: useEffectHero, useState: useStateHero } = React;

function Hero({ onNav }) {
  const [t, setT] = useStateHero(0);
  useEffectHero(() => {
    let raf;
    const start = performance.now();
    const tick = (now) => {
      setT((now - start) / 1000);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const lines = [];
  for (let i = 0; i < 28; i++) {
    const base = 30 + i * 14;
    const amp = 4 + Math.sin(i * 0.4) * 3;
    const freq = 1.4 + (i % 5) * 0.2;
    const phase = i * 0.5 + t * (0.3 + (i % 3) * 0.05);
    const points = [];
    for (let x = 0; x <= 720; x += 12) {
      const y = base + Math.sin((x / 720) * Math.PI * 2 * freq + phase) * amp;
      points.push(`${x},${y.toFixed(1)}`);
    }
    const opacity = 0.5 - (i / 28) * 0.45;
    lines.push(
      <polyline
        key={i}
        points={points.join(" ")}
        fill="none"
        stroke="rgba(111,227,209,1)"
        strokeOpacity={opacity}
        strokeWidth="0.7"
      />
    );
  }

  return (
    <section className="lp-hero" id="top">
      <div className="lp-hero__coords" aria-hidden="true">
        <div><span className="lp-hero__coords-tick" /> N 51°40′13″ · E 4°36′40″</div>
        <div>SIG · 442.MHz · RX <span className="lp-hero__coords-tick" /></div>
      </div>

      <svg className="lp-hero__signal" viewBox="0 0 720 440" preserveAspectRatio="none" aria-hidden="true">
        {lines}
      </svg>

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
          Lake-Project is the practice of <strong>Alexander van der Plas</strong> — commercial operator and product builder. In logistics, he turns bespoke contract books into modular, governed product catalogues. Outside it, he ships software. The discipline is the same in both.
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
            <dt>Products built</dt>
            <dd>3 — and counting</dd>
          </div>
          <div>
            <dt>Current post</dt>
            <dd>FOM · DSV Moerdijk</dd>
          </div>
          <div>
            <dt>Ventures · LIVE</dt>
            <dd><span className="lp-hero__fact-tick" />Podfy <span className="lp-hero__fact-soft">/</span> JustFit</dd>
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
