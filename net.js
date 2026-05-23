(function () {
  "use strict";

  // ── Colour tokens (Night Station)
  const SIG = [111, 227, 209];   // --signal #6FE3D1
  const sig = (a) => `rgba(${SIG[0]},${SIG[1]},${SIG[2]},${a})`;

  // ── Config
  const CFG = {
    countDesktop : 90,
    countMobile  : 45,
    speed        : 0.28,
    maxDist      : 175,
    dotMinR      : 1.2,
    dotMaxR      : 2.8,
    lineAlpha    : 0.09,
    dotAlpha     : 0.55,
    glowR        : 7,     // px radius of dot glow halo
    mouseRadius  : 220,
    mouseBoost   : 0.28,  // extra line alpha near cursor
  };

  // ── Canvas setup
  const canvas = document.createElement("canvas");
  canvas.setAttribute("aria-hidden", "true");
  Object.assign(canvas.style, {
    position       : "fixed",
    inset          : "0",
    width          : "100%",
    height         : "100%",
    zIndex         : "0",
    pointerEvents  : "none",
    display        : "block",
  });
  document.body.prepend(canvas);
  const ctx = canvas.getContext("2d");

  let W = 0, H = 0;
  const mouse = { x: -9999, y: -9999 };
  let particles = [];
  let raf;

  // ── Particle class
  function Particle() {
    this.reset(true);
  }
  Particle.prototype.reset = function (initial) {
    this.x = initial ? Math.random() * W : (Math.random() < 0.5 ? -10 : W + 10);
    this.y = initial ? Math.random() * H : Math.random() * H;
    // random velocity, minimum magnitude
    do { this.vx = (Math.random() - 0.5) * CFG.speed * 2; } while (Math.abs(this.vx) < 0.04);
    do { this.vy = (Math.random() - 0.5) * CFG.speed * 2; } while (Math.abs(this.vy) < 0.04);
    this.r     = CFG.dotMinR + Math.random() * (CFG.dotMaxR - CFG.dotMinR);
    this.phase = Math.random() * Math.PI * 2;
    this.freq  = 0.018 + Math.random() * 0.018;
  };
  Particle.prototype.update = function () {
    this.x     += this.vx;
    this.y     += this.vy;
    this.phase += this.freq;
    if (this.x < -20) this.x = W + 20;
    if (this.x > W + 20) this.x = -20;
    if (this.y < -20) this.y = H + 20;
    if (this.y > H + 20) this.y = -20;
  };

  // ── Init / resize
  function init() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    const count = W < 768 ? CFG.countMobile : CFG.countDesktop;
    if (particles.length !== count) {
      particles = [];
      for (let i = 0; i < count; i++) particles.push(new Particle());
    }
  }

  // ── Squared distance helper
  const dSq = (ax, ay, bx, by) => (ax - bx) ** 2 + (ay - by) ** 2;
  const MAX_SQ    = CFG.maxDist    * CFG.maxDist;
  const MOUSE_SQ  = CFG.mouseRadius * CFG.mouseRadius;

  // ── Draw loop
  function draw() {
    raf = requestAnimationFrame(draw);
    ctx.clearRect(0, 0, W, H);

    for (const p of particles) p.update();

    // ── Lines between particles
    ctx.lineWidth = 0.75;
    for (let i = 0; i < particles.length; i++) {
      const a = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j];
        const sq = dSq(a.x, a.y, b.x, b.y);
        if (sq > MAX_SQ) continue;
        let alpha = (1 - sq / MAX_SQ) * CFG.lineAlpha;
        // boost near cursor
        const nearMouse = Math.min(dSq(a.x, a.y, mouse.x, mouse.y),
                                   dSq(b.x, b.y, mouse.x, mouse.y));
        if (nearMouse < MOUSE_SQ) alpha += (1 - nearMouse / MOUSE_SQ) * CFG.mouseBoost;
        ctx.beginPath();
        ctx.strokeStyle = sig(Math.min(alpha, 0.45));
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      // ── Line from particle to mouse
      const mSq = dSq(a.x, a.y, mouse.x, mouse.y);
      if (mSq < MOUSE_SQ) {
        const alpha = (1 - mSq / MOUSE_SQ) * 0.32;
        ctx.beginPath();
        ctx.strokeStyle = sig(alpha);
        ctx.lineWidth = 0.9;
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
        ctx.lineWidth = 0.75;
      }
    }

    // ── Dots (glow + core)
    ctx.shadowColor = sig(0.7);
    ctx.shadowBlur  = CFG.glowR;
    for (const p of particles) {
      // pulse radius ±12%
      const r = p.r * (0.88 + Math.sin(p.phase) * 0.12);
      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.fillStyle = sig(CFG.dotAlpha);
      ctx.fill();
    }
    ctx.shadowBlur = 0;

    // ── Cursor dot (small active node at mouse)
    if (mouse.x > 0 && mouse.y > 0) {
      ctx.shadowColor = sig(0.9);
      ctx.shadowBlur  = 14;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = sig(0.8);
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  // ── Events
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(init, 120);
  });
  window.addEventListener("mousemove",  (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener("mouseleave", ()  => { mouse.x = -9999;      mouse.y = -9999; });

  // ── Boot
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => { init(); draw(); });
  } else {
    init(); draw();
  }
})();
