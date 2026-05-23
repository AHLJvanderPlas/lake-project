export async function onRequestPost({ request, env }) {
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

  const topicLabel = topic || "General";
  const subject = `Transmission received — Lake-Project`;
  const textBody = buildText({ name, company, email, note, topicLabel });
  const htmlBody = buildHtml({ name, company, email, note, topicLabel });

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "Lake-Project <hello@lake-project.com>",
      to: [email],
      cc: ["alexander@lake-project.com"],
      reply_to: "alexander@lake-project.com",
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

export function onRequest() {
  return json({ error: "Method not allowed." }, 405);
}

// ── Plain-text fallback ────────────────────────────────────────────────────────
function buildText({ name, company, email, note, topicLabel }) {
  return [
    "LAKE PROJECT — Transmission received",
    "─────────────────────────────────────",
    "",
    `${name},`,
    "",
    "Your message has been received. Alexander will reply within two working days — usually from a Dutch evening.",
    "",
    "── Your transmission ──────────────────",
    `Name:    ${name}`,
    `Company: ${company || "—"}`,
    `Email:   ${email}`,
    `Topic:   ${topicLabel}`,
    "",
    note,
    "",
    "───────────────────────────────────────",
    "Lake-Project · Rotterdam · KvK 29816688",
    "lake-project.com",
  ].join("\n");
}

// ── HTML email — Night Station aesthetic ──────────────────────────────────────
function buildHtml({ name, company, email, note, topicLabel }) {
  const e = esc;

  // Colours
  const bg       = "#07090C";
  const surface  = "#10171F";
  const border   = "rgba(232,237,242,0.10)";
  const signal   = "#6FE3D1";
  const fg       = "#E8EDF2";
  const fgMuted  = "#8B96A3";
  const fgSubtle = "#5A6675";

  // Font stack (Geist loads from Google Fonts in webmail; falls back gracefully)
  const sans = "'Geist', 'Helvetica Neue', Arial, sans-serif";
  const mono = "'Geist Mono', 'SF Mono', 'Menlo', monospace";

  const row = (label, value) => `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid ${border};
                 font-family:${mono};font-size:10px;letter-spacing:0.14em;
                 text-transform:uppercase;color:${fgSubtle};width:120px;
                 vertical-align:top">
        // ${e(label)}
      </td>
      <td style="padding:10px 0 10px 20px;border-bottom:1px solid ${border};
                 font-family:${sans};font-size:14px;color:${fg};
                 vertical-align:top">
        ${e(value)}
      </td>
    </tr>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Transmission received — Lake-Project</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500&family=Geist+Mono:wght@400;500&display=swap');
  body,table,td,p,h1,h2{margin:0;padding:0;border:0}
  body{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}
  img{border:0;height:auto;line-height:100%;outline:none;text-decoration:none}
  table{border-collapse:collapse!important}
</style>
</head>
<body style="background:${bg};margin:0;padding:0;min-width:100%">

<!-- Outer wrapper -->
<table width="100%" cellpadding="0" cellspacing="0" role="presentation"
       style="background:${bg};padding:40px 16px">
  <tr><td align="center">

    <!-- Card -->
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
           style="max-width:600px;background:${surface};
                  border:1px solid ${border};border-radius:4px">

      <!-- Header bar -->
      <tr>
        <td style="padding:0;border-bottom:1px solid ${border}">
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
            <tr>
              <!-- Signal stripe -->
              <td width="3" style="background:${signal};border-radius:4px 0 0 0">&nbsp;</td>
              <td style="padding:28px 32px">
                <!-- Logo -->
                <p style="font-family:${mono};font-size:9px;letter-spacing:0.28em;
                           text-transform:uppercase;color:${signal};margin:0 0 4px">
                  LAKE
                </p>
                <p style="font-family:${mono};font-size:9px;letter-spacing:0.28em;
                           text-transform:uppercase;color:${fgMuted};margin:0">
                  PROJECT
                </p>
              </td>
              <td style="padding:28px 32px;text-align:right">
                <p style="font-family:${mono};font-size:9px;letter-spacing:0.14em;
                           text-transform:uppercase;color:${fgSubtle};margin:0">
                  // Transmission received
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="padding:40px 32px">

          <!-- Greeting -->
          <p style="font-family:${sans};font-size:28px;font-weight:300;
                     letter-spacing:-0.02em;color:${fg};margin:0 0 8px;
                     line-height:1.1">
            Received, ${e(name)}.
          </p>
          <p style="font-family:${sans};font-size:15px;font-weight:300;
                     color:${fgMuted};margin:0 0 36px;line-height:1.6">
            Your message is in. Alexander will reply within two working days —
            usually from a Dutch evening.
          </p>

          <!-- Divider with signal glow -->
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
                 style="margin-bottom:28px">
            <tr>
              <td width="56" style="border-top:1px solid ${signal};padding:0">&nbsp;</td>
              <td style="border-top:1px solid ${border};padding:0">&nbsp;</td>
            </tr>
          </table>

          <!-- Eyebrow -->
          <p style="font-family:${mono};font-size:10px;letter-spacing:0.18em;
                     text-transform:uppercase;color:${fgSubtle};margin:0 0 16px">
            // Your transmission
          </p>

          <!-- Data table -->
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
            ${row("Name",    name)}
            ${row("Company", company || "—")}
            ${row("Email",   email)}
            ${row("Topic",   topicLabel)}
          </table>

          <!-- Note -->
          <p style="font-family:${mono};font-size:10px;letter-spacing:0.14em;
                     text-transform:uppercase;color:${fgSubtle};
                     margin:28px 0 10px">
            // Message
          </p>
          <p style="font-family:${sans};font-size:14px;font-weight:300;
                     color:${fg};line-height:1.65;white-space:pre-wrap;
                     margin:0;padding:20px 24px;
                     background:${bg};border:1px solid ${border};
                     border-radius:2px">
${e(note)}
          </p>

        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="padding:24px 32px;border-top:1px solid ${border}">
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
            <tr>
              <td>
                <p style="font-family:${mono};font-size:9.5px;letter-spacing:0.14em;
                           text-transform:uppercase;color:${fgSubtle};margin:0">
                  Lake-Project &middot; Rotterdam &middot; KvK 29816688
                </p>
                <p style="font-family:${mono};font-size:9.5px;letter-spacing:0.14em;
                           color:${signal};margin:4px 0 0">
                  <a href="https://lake-project.com"
                     style="color:${signal};text-decoration:none">
                    lake-project.com
                  </a>
                </p>
              </td>
              <td style="text-align:right">
                <!-- Signal indicator -->
                <p style="font-family:${mono};font-size:9px;letter-spacing:0.12em;
                           text-transform:uppercase;color:${fgSubtle};margin:0">
                  Signal nominal &bull;
                  <span style="color:${signal}">&bull;</span>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>

    </table>
    <!-- /Card -->

  </td></tr>
</table>

</body>
</html>`;
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
