/* global React */
const { useEffect, useState } = React;

function Header({ active, onNav }) {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, "0");
      const mm = String(d.getMinutes()).padStart(2, "0");
      setTime(`${hh}:${mm} CET`);
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { id: "practice",  label: "Practice"  },
    { id: "ventures",  label: "Ventures"  },
    { id: "resume",    label: "Resume"    },
    { id: "contact",   label: "Contact"   },
  ];

  return (
    <header className={`lp-header ${scrolled ? "is-scrolled" : ""}`}>
      <a href="#top" className="lp-header__brand" onClick={(e) => { e.preventDefault(); onNav("top"); }} aria-label="Lake-Project">
        <span className="lp-logo lp-logo--header" aria-hidden="true">
          <span className="lp-logo__lake">LAKE</span>
          <span className="lp-logo__project">PROJECT</span>
        </span>
      </a>

      <nav className="lp-header__nav" aria-label="Primary">
        {items.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            className={`lp-header__link ${active === it.id ? "is-active" : ""}`}
            onClick={(e) => { e.preventDefault(); onNav(it.id); }}
          >
            {it.label}
          </a>
        ))}
      </nav>

      <div className="lp-header__meta">
        <span className="lp-header__loc">
          <span className="lp-header__dot" />
          <span>Moerdijk · NL</span>
          <span className="lp-header__coord">51.6705° N · 4.6111° E</span>
          <span className="lp-header__coord">· {time}</span>
        </span>
      </div>
    </header>
  );
}

window.Header = Header;
