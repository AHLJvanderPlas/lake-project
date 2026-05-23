export async function onRequestPost({ request, env }) {
  // Only accept JSON
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return json({ error: "Bad request." }, 400);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Bad request." }, 400);
  }

  const { name, company, email, note, topic, turnstileToken } = body;

  // Basic field validation
  if (!name || !email || !note || !turnstileToken) {
    return json({ error: "Missing required fields." }, 400);
  }

  // Verify Turnstile token
  const tsRes = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: env.TURNSTILE_SECRET,
        response: turnstileToken,
        remoteip: request.headers.get("CF-Connecting-IP"),
      }),
    }
  );
  const ts = await tsRes.json();
  if (!ts.success) {
    return json({ error: "Verification failed — please try again." }, 403);
  }

  // Build email content
  const topicLabel = topic || "General";
  const subject = `[Lake-Project] ${topicLabel} — ${company || name}`;
  const textBody = [
    `Name:    ${name}`,
    `Company: ${company || "—"}`,
    `Email:   ${email}`,
    `Topic:   ${topicLabel}`,
    "",
    note,
  ].join("\n");
  const htmlBody = `
    <table style="font-family:sans-serif;font-size:14px;color:#1a1a1a;border-collapse:collapse;width:100%;max-width:600px">
      <tr><td style="padding:8px 0;border-bottom:1px solid #eee"><strong>Name</strong></td><td style="padding:8px 0;border-bottom:1px solid #eee">${esc(name)}</td></tr>
      <tr><td style="padding:8px 0;border-bottom:1px solid #eee"><strong>Company</strong></td><td style="padding:8px 0;border-bottom:1px solid #eee">${esc(company || "—")}</td></tr>
      <tr><td style="padding:8px 0;border-bottom:1px solid #eee"><strong>Email</strong></td><td style="padding:8px 0;border-bottom:1px solid #eee"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
      <tr><td style="padding:8px 0;border-bottom:1px solid #eee"><strong>Topic</strong></td><td style="padding:8px 0;border-bottom:1px solid #eee">${esc(topicLabel)}</td></tr>
    </table>
    <p style="font-family:sans-serif;font-size:14px;color:#1a1a1a;margin-top:24px;white-space:pre-wrap">${esc(note)}</p>
  `;

  // Send via Resend
  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "Lake-Project <hello@lake-project.com>",
      to: ["hello@lake-project.com"],
      reply_to: email,
      subject,
      text: textBody,
      html: htmlBody,
    }),
  });

  if (!resendRes.ok) {
    const err = await resendRes.text();
    console.error("Resend error:", err);
    return json({ error: "Failed to send — please email directly." }, 502);
  }

  return json({ ok: true }, 200);
}

// Disallow non-POST
export function onRequest() {
  return json({ error: "Method not allowed." }, 405);
}

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function esc(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
