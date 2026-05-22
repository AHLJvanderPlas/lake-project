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
            <div className="lp-footer__col-head">// Practice</div>
            <a href="#practice">Contract restructuring</a>
            <a href="#practice">Modular pricing</a>
            <a href="#practice">Account architecture</a>
            <a href="#practice">Product governance</a>
          </div>
          <div>
            <div className="lp-footer__col-head">// Ventures</div>
            <a href="https://podfy.net" target="_blank" rel="noopener noreferrer">Podfy ↗</a>
            <a href="https://justfit.cc" target="_blank" rel="noopener noreferrer">JustFit ↗</a>
          </div>
          <div>
            <div className="lp-footer__col-head">// Studio</div>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
            <a href="mailto:hello@lake-project.com">hello@lake-project.com</a>
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
