/* global React, ReactDOM, Header, Hero, Practice, Builder, Contact, Footer */
const { useEffect, useState, useCallback } = React;

function App() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const ids = ["top", "services", "work", "contact"];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        let best = null;
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          if (!best || e.intersectionRatio > best.intersectionRatio) best = e;
        }
        if (best) setActive(best.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const onNav = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
  }, []);

  return (
    <div>
      <Header active={active} onNav={onNav} />
      <main>
        <Hero onNav={onNav} />
        <Practice />
        <Builder />
        <Contact />
      </main>
      <Footer />
      <nav className="lp-mobile-nav" aria-label="Mobile navigation">
        {["services", "work", "contact"].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? "is-active" : ""}
            onClick={(e) => { e.preventDefault(); onNav(id); }}
          >
            {id}
          </a>
        ))}
        <a href="/about">about</a>
      </nav>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
