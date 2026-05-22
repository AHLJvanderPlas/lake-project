/* global React */
const { useState: useStateContact } = React;

function Contact() {
  const [sent, setSent] = useStateContact(false);
  const [topic, setTopic] = useStateContact("contract");
  const [form, setForm] = useStateContact({ name: "", company: "", email: "", note: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    const topicLabel = topics.find((t) => t.id === topic)?.label || topic;
    const subject = encodeURIComponent(`[Lake-Project] ${topicLabel} — ${form.company || form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company || "—"}\nReply-to: ${form.email}\n\n${form.note}`
    );
    window.open(`mailto:hello@lake-project.com?subject=${subject}&body=${body}`);
    setSent(true);
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
          {!sent ? (
            <form className="lp-contact__form" onSubmit={onSubmit}>
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

              <div className="lp-contact__submit">
                <button type="submit" className="btn btn--primary">
                  Transmit →
                </button>
                <span className="lp-contact__legal">
                  Opens your mail client · read only by Alexander
                </span>
              </div>
            </form>
          ) : (
            <div className="lp-contact__sent">
              <div className="lp-contact__sent-mark">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="lp-contact__form-prompt">Transmission acknowledged</div>
              <h3 className="lp-contact__sent-title">Received.</h3>
              <p className="lp-contact__sent-text">
                Your mail client should have opened with the message pre-filled. I'll reply within two working days — usually from a Dutch evening. If it's urgent, say so in the subject line.
              </p>
              <button className="btn btn--ghost" onClick={() => { setSent(false); setForm({ name: "", company: "", email: "", note: "" }); }}>
                Send another →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

window.Contact = Contact;
