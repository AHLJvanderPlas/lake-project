/* global React */

function Ventures() {
  const ventures = [
    {
      id: "V.01",
      name: "Podfy",
      domain: "podfy.net",
      year: "2024",
      headline: "Proof of delivery, without the app.",
      blurb: "Send a driver a link. They photograph the CMR. You get a stamped, GPS-tagged, EU-archived record back in seconds. No app, no account, no training. Built for Dutch and Benelux carriers and 3PLs.",
      stats: [
        ["Median upload",  "11 s"],
        ["Apps installed", "0"],
        ["EU archive",     "7 yrs"],
      ],
      url: "https://podfy.net",
      role: "Founder · Product",
    },
    {
      id: "V.02",
      name: "JustFit",
      domain: "justfit.cc",
      year: "2024",
      headline: "Adaptive training coach. Geen excuses.",
      blurb: "JustFit adapts to you, not the other way around. Bad sleep, twenty-five minutes, sore knee? The AI generates a workout that fits. Free general-fitness path, Pro for running and cycling, military-test prep always free.",
      stats: [
        ["Training paths",  "4"],
        ["Personalisation", "100%"],
        ["Pricing",         "€4.99"],
      ],
      url: "https://justfit.cc",
      role: "Founder · Product",
    },
  ];

  return (
    <section className="lp-ventures" id="ventures">
      <header className="lp-ventures__head">
        <div>
          <div className="lp-section-eyebrow">
            <span className="lp-section-eyebrow__line" />
            <span className="lp-section-eyebrow__num">// 03</span>
            <span>Ventures</span>
          </div>
          <h2 className="lp-ventures__title">
            Two products.<br />
            Both shipped.<br />
            Both <em>still operated.</em>
          </h2>
        </div>
        <p className="lp-ventures__lead">
          Two software products built outside of DSV: same design-thinking method, same modular discipline, different domain. Podfy and JustFit aren't side projects. They're what happens when you apply an engineer's analytical rigour and a designer's approach to problems you care about solving.
        </p>
      </header>

      <div className="lp-ventures__list">
        {ventures.map((v) => (
          <article key={v.id} className="lp-venture" data-id={v.id}>
            <div className="lp-venture__meta">
              <span className="lp-venture__live">
                <span className="lp-venture__live-dot" />
                LIVE
              </span>
              <span className="lp-venture__sep">·</span>
              <span className="lp-venture__name">{v.name}</span>
              <span className="lp-venture__sep">/</span>
              <a className="lp-venture__domain" href={v.url} target="_blank" rel="noopener noreferrer">{v.domain}</a>
            </div>

            <h3 className="lp-venture__headline">{v.headline}</h3>

            <p className="lp-venture__blurb">{v.blurb}</p>

            <dl className="lp-venture__stats">
              {v.stats.map(([label, val]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{val}</dd>
                </div>
              ))}
            </dl>

            <footer className="lp-venture__foot">
              <span className="lp-venture__role">{v.role}</span>
              <a className="lp-venture__visit" href={v.url} target="_blank" rel="noopener noreferrer">
                Visit ↗
              </a>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}

window.Ventures = Ventures;
