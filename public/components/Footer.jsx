/* global React */

function Footer() {
  return (
    <footer className="lp-footer">
      <div className="lp-footer__inner">
        <div className="lp-footer__brand">
          <span className="lp-logo lp-logo--footer" aria-hidden="true">
            <span className="lp-logo__lake">LAKE</span>
            <span className="lp-logo__project">PROJECT</span>
          </span>
          <div className="lp-footer__tag">The studio behind quiet, well-built things.</div>
        </div>

        <nav className="lp-footer__cols" aria-label="Footer">
          <div>
            <div className="lp-footer__col-head">// Services</div>
            <a href="#services">Custom SaaS architecture</a>
            <a href="#services">Admin &amp; client portals</a>
            <a href="#services">Automation &amp; integration</a>
            <a href="#services">Full-stack delivery</a>
          </div>
          <div>
            <div className="lp-footer__col-head">// Work</div>
            <a href="https://podfy.net" target="_blank" rel="noopener noreferrer">Podfy ↗</a>
            <a href="https://harryvanderplas.com" target="_blank" rel="noopener noreferrer">Harry van der Plas ↗</a>
            <a href="#work">EMCT</a>
            <a href="https://justfit.cc" target="_blank" rel="noopener noreferrer">JustFit ↗</a>
          </div>
          <div>
            <div className="lp-footer__col-head">// Studio</div>
            <a href="/about">About</a>
            <a href="#contact">Contact</a>
            <a href="mailto:hello@lake-project.com">hello@lake-project.com</a>
            <a href="/trust">Privacy &amp; legal</a>
            <a href="/algemene-voorwaarden">Algemene voorwaarden</a>
          </div>
        </nav>
      </div>

      <div className="lp-footer__base">
        <div className="lp-footer__base-meta">
          <span>Lake-Project · KvK 29816688</span>
          <span>Rotterdam · NL</span>
          <span>EN · NL · DE</span>
          <span>© 2026</span>
        </div>
        <div className="lp-footer__sig">Signal nominal</div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
