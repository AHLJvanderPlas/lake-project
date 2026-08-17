/* global React */
const { useState: useStateContact, useEffect: useEffectContact, useRef: useRefContact } = React;

const TURNSTILE_SITEKEY = "0x4AAAAAADUvTJOOVICfz1ng";

function Contact() {
  const [status, setStatus] = useStateContact("idle"); // idle | submitting | sent | error
  const [errorMsg, setErrorMsg] = useStateContact("");
  const [topic, setTopic] = useStateContact("contract");
  const [form, setForm] = useStateContact({ name: "", company: "", email: "", note: "" });
  const [tsToken, setTsToken] = useStateContact(null);
  const tsWidgetRef = useRefContact(null);
  const tsIdRef = useRefContact(null);

  // Render Turnstile widget once the script is available
  useEffectContact(() => {
    let attempts = 0;
    const tryRender = () => {
      if (window.turnstile && tsWidgetRef.current && !tsIdRef.current) {
        tsIdRef.current = window.turnstile.render(tsWidgetRef.current, {
          sitekey: TURNSTILE_SITEKEY,
          theme: "dark",
          callback: (token) => setTsToken(token),
          "expired-callback": () => setTsToken(null),
          "error-callback": () => setTsToken(null),
        });
      } else if (attempts < 20) {
        attempts++;
        setTimeout(tryRender, 300);
      }
    };
    tryRender();
    return () => {
      if (tsIdRef.current && window.turnstile) {
        window.turnstile.remove(tsIdRef.current);
        tsIdRef.current = null;
      }
    };
  }, []);

  // Reset Turnstile widget after failed submission
  const resetTurnstile = () => {
    if (tsIdRef.current && window.turnstile) {
      window.turnstile.reset(tsIdRef.current);
    }
    setTsToken(null);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!tsToken) return; // widget not completed yet
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          topic: topics.find((t) => t.id === topic)?.label || topic,
          turnstileToken: tsToken,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        resetTurnstile();
      } else {
        setStatus("sent");
      }
    } catch {
      setErrorMsg("Network error — please email directly.");
      setStatus("error");
      resetTurnstile();
    }
  };

  const reset = () => {
    setStatus("idle");
    setErrorMsg("");
    setForm({ name: "", company: "", email: "", note: "" });
    setTopic("contract");
    resetTurnstile();
  };

  const topics = [
    { id: "contract", label: "Contract" },
    { id: "pricing",  label: "Pricing model" },
    { id: "accounts", label: "Accounts" },
    { id: "product",  label: "Product / SaaS" },
    { id: "other",    label: "Other" },
  ];

  return (
    <section className="lp-contact" id="contact">
      <div className="lp-contact__grid">
        <header>
          <div className="lp-section-eyebrow">
            <span className="lp-section-eyebrow__line" />
            <span className="lp-section-eyebrow__num">// 05</span>
            <span>Open channel</span>
          </div>
          <h2 className="lp-contact__title">
            One conversation,<br />
            <em>no slide deck.</em>
          </h2>
          <p className="lp-contact__lead">
            The best first step is a thirty-minute call. Tell me what the situation looks like — I'll tell you whether it's the kind of thing the studio is useful for. If it isn't, I'll usually know who is.
          </p>

          <dl className="lp-contact__direct">
            <div>
              <dt>// Direct</dt>
              <dd><a href="mailto:hello@lake-project.com">hello@lake-project.com</a></dd>
            </div>
            <div>
              <dt>// Response</dt>
              <dd>Within 2 working days</dd>
            </div>
            <div>
              <dt>// Working hours</dt>
              <dd>CET · evenings &amp; weekends</dd>
            </div>
            <div>
              <dt>// Engagement cap</dt>
              <dd>2–3 clients per year</dd>
            </div>
          </dl>
        </header>

        <div className="lp-contact__form-wrap">
          {status === "sent" ? (
            <div className="lp-contact__sent">
              <div className="lp-contact__sent-mark">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="lp-contact__form-prompt">Transmission acknowledged</div>
              <h3 className="lp-contact__sent-title">Received.</h3>
              <p className="lp-contact__sent-text">
                I'll reply within two working days — usually from a Dutch evening. If it's urgent, say so in any follow-up.
              </p>
              <button className="btn btn--ghost" onClick={reset}>
                Send another →
              </button>
            </div>
          ) : (
            <form className="lp-contact__form" onSubmit={onSubmit} noValidate>
              <div className="lp-contact__form-prompt">Compose transmission</div>

              <div className="lp-contact__topic">
                <span className="lp-contact__topic-label">// What's it about?</span>
                <div className="lp-contact__chips">
                  {topics.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      className={`lp-chip ${topic === t.id ? "is-active" : ""}`}
                      onClick={() => setTopic(t.id)}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="lp-contact__row">
                <label className="lp-field">
                  <span className="lp-field__label">// Name</span>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Doe"
                    required
                  />
                </label>
                <label className="lp-field">
                  <span className="lp-field__label">// Company</span>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Acme Logistics BV"
                  />
                </label>
              </div>

              <label className="lp-field">
                <span className="lp-field__label">// Email</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jane@example.com"
                  required
                />
              </label>

              <label className="lp-field">
                <span className="lp-field__label">// Brief on the situation</span>
                <textarea
                  rows="5"
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  placeholder="A messy contract book. A modular pricing model. A product idea you'd like a second opinion on."
                  required
                />
              </label>

              {/* Turnstile widget */}
              <div ref={tsWidgetRef} style={{ minHeight: "65px" }} />

              {errorMsg && (
                <p className="lp-contact__error">{errorMsg}</p>
              )}

              <div className="lp-contact__submit">
                <button
                  type="submit"
                  className="btn btn--primary"
                  disabled={status === "submitting" || !tsToken}
                >
                  {status === "submitting" ? "Sending…" : "Transmit →"}
                </button>
                <span className="lp-contact__legal">
                  Reads only by Alexander · never shared
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

window.Contact = Contact;
