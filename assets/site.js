/* Axiotrix | site rendering engine (shared by all pages) */
(function () {
  const C = window.AX.loadContent();

  /* --- SVG icon set (Lucide-style, no emojis) --- */
  const ICONS = {
    globe: '<path d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2a15 15 0 010 20 15 15 0 010-20z"/>',
    wrench: '<path d="M14.7 6.3a4 4 0 01-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 015.4-5.4l-2.6 2.6-2-2 2.6-2.6z"/>',
    chart: '<path d="M3 3v18h18"/><path d="M7 15l3-3 3 2 5-6"/>',
    bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>',
    chat: '<path d="M21 11.5a8.5 8.5 0 01-12.5 7.5L3 21l2-5.5A8.5 8.5 0 1121 11.5z"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    check: '<path d="M20 6L9 17l-5-5"/>',
    checkc: '<circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-6"/>',
    spark: '<path d="M12 3v18M3 12h18M6 6l12 12M18 6L6 18"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    mail: '<path d="M4 5h16v14H4z"/><path d="M4 7l8 6 8-6"/>',
    phone: '<path d="M4 4h4l2 5-2.5 1.5a11 11 0 006 6L15 14l5 2v4a2 2 0 01-2 2A16 16 0 012 6a2 2 0 012-2z"/>',
    wa: '<path d="M12 2a10 10 0 00-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1012 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7a11.5 11.5 0 01-4.7-4.2c-.3-.5-1-1.4-1-2.7 0-1.3.7-1.9 1-2.2.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.4.6c-.2.2-.3.4-.1.7.5.8 1 1.4 1.7 1.9.5.4 1 .6 1.3.8.2.1.4.1.6-.1l.7-.9c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.2.5.3.1.3.1.9-.1 1.4z"/>',
    star: '<path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z"/>',
    shield: '<path d="M12 2l8 3v7c0 5-3.5 8-8 9-4.5-1-8-4-8-9V5l8-3z"/><path d="M9 12l2 2 4-4"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'
  };
  function icon(name, cls) {
    const p = ICONS[name] || ICONS.spark;
    return `<svg class="${cls||''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
  }
  window.axIcon = icon;

  const mark = `<svg class="mark" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#4f46e5"/><path d="M9 22l7-13 7 13M11.5 17h9" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  /* --- Header --- */
  function header(active) {
    const isSvc = C.services.some(s => s.slug === active);
    const hi = (k) => (active === k || (k === 'services' && isSvc)) ? ' style="color:var(--indigo)"' : '';
    return `<header class="nav"><div class="wrap">
      <a class="brand" href="index.html">${mark}${C.global.brand}</a>
      <nav class="nav-links">
        <a href="index.html#services"${hi('services')}>Services</a>
        <a href="packages.html"${hi('packages')}>Packages</a>
        <a href="about.html"${hi('about')}>About</a>
        <a href="submit.html"${hi('submit')}>Get a plan</a>
      </nav>
      <div class="nav-cta">
        <a class="btn btn-indigo" href="submit.html">Submit requirement</a>
        <button class="nav-toggle" aria-label="Menu" onclick="document.querySelector('.nav').classList.toggle('open')">${icon('menu')}</button>
      </div>
    </div></header>`;
  }

  /* --- Footer --- */
  function footer() {
    const svc = C.services.map(s => `<a href="service.html?s=${s.slug}">${s.eyebrow}</a>`).join("");
    const wa = `https://wa.me/${C.global.whatsapp}`;
    return `<footer class="footer"><div class="wrap">
      <div class="footer-grid">
        <div>
          <a class="brand" href="index.html" style="margin-bottom:14px">${mark}${C.global.brand}</a>
          <p style="max-width:34ch">${C.global.footerBlurb}</p>
        </div>
        <div><h5>Services</h5>${svc}</div>
        <div><h5>Company</h5>
          <a href="packages.html">Packages</a><a href="about.html">About</a><a href="submit.html">Submit requirement</a>
        </div>
        <div><h5>Talk to us</h5>
          <a href="mailto:${C.global.email}">${C.global.email}</a>
          <a href="tel:${C.global.phone}">${C.global.phone}</a>
          <a href="${wa}" target="_blank" rel="noopener">WhatsApp us</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} ${C.global.brand}. ${C.global.tagline}</span>
        <span>Built for businesses that want to be seen.</span>
      </div>
    </div></footer>
    <a class="wa-float" href="${wa}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${icon('wa')}</a>`;
  }
  window.axHeader = header; window.axFooter = footer; window.axContent = C;

  /* --- CTA band (shared) --- */
  window.axCta = function () {
    return `<section class="section"><div class="wrap"><div class="cta-band reveal">
      <h2>Not sure where to start?</h2>
      <p>Tell us the problem in plain words. We'll come back with a plan, a timeline and a price within one working day.</p>
      <a class="btn btn-primary" href="submit.html">Submit your requirement ${icon('arrow')}</a>
    </div></div></section>`;
  };

  /* --- Service page renderer --- */
  window.axRenderService = function (slug) {
    const s = C.services.find(x => x.slug === slug) || C.services[0];
    const wa = `https://wa.me/${C.global.whatsapp}?text=${encodeURIComponent("Hi Axiotrix, I'm interested in " + s.eyebrow)}`;
    document.title = `${s.eyebrow} | ${C.global.brand}`;

    const usecases = s.usecases.map((u,i) => `
      <div class="usecase reveal">
        <div class="num">${String(i+1).padStart(2,'0')}</div>
        <div><h3>${u.t}</h3><p>${u.d}</p>
          ${u.i ? `<div class="impact">${icon('bolt')}<div><b>Impact</b><span>${u.i}</span></div></div>` : ''}
        </div>
      </div>`).join("");

    const deliverables = s.deliverables.map(d =>
      `<li>${icon('checkc')}<span>${d}</span></li>`).join("");

    const steps = s.steps.map((st,i) => `
      <div class="step reveal"><div class="dot">${i+1}</div>
        <div><h4>${st.t}</h4><p>${st.d}</p></div></div>`).join("");

    return `${header(slug)}
    <section class="hero"><div class="wrap"><div class="hero-grid">
      <div class="reveal">
        <span class="eyebrow">${s.eyebrow}</span>
        <h1>${s.title}</h1>
        <p class="lead">${s.text}</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="submit.html">Get my plan ${icon('arrow')}</a>
          <a class="btn btn-ghost" href="${wa}" target="_blank" rel="noopener">Ask on WhatsApp</a>
        </div>
        <div class="hero-note">${icon('checkc')} ${s.heroNote}</div>
      </div>
      <div class="reveal">
        <div class="panel">
          <div class="panel-row"><div class="ic">${icon(s.icon)}</div><div><b>The problem</b><span>What we're solving</span></div></div>
          <div style="padding:16px 0;color:var(--body);font-size:.98rem;border-bottom:1px solid var(--line)">${s.problem}</div>
          <div class="panel-row" style="border-bottom:0"><div class="ic" style="background:#f0fdf4;color:var(--green)">${icon('bolt')}</div><div><b>The impact</b><span>What changes for you</span></div></div>
          <div style="padding:4px 0 6px;color:var(--ink);font-weight:500;font-size:.98rem">${s.impact || ''}</div>
        </div>
      </div>
    </div></div></section>

    <section class="section"><div class="wrap">
      <div class="sh center"><span class="eyebrow">Use cases</span><h2>Where this makes a real difference</h2>
        <p class="lead">Concrete situations we see every week, and what changes.</p></div>
      <div class="grid" style="gap:18px">${usecases}</div>
    </div></section>

    <section class="section soft"><div class="wrap"><div class="grid grid-2" style="gap:56px;align-items:center">
      <div class="reveal"><span class="eyebrow">What you get</span>
        <h2 style="margin-bottom:22px">Everything, ready to use</h2>
        <ul class="checks">${deliverables}</ul>
      </div>
      <div class="reveal"><span class="eyebrow">How it works</span>
        <h2 style="margin-bottom:26px">Four simple steps</h2>
        <div class="steps">${steps}</div>
      </div>
    </div></div></section>

    ${window.axCta()}
    ${footer()}`;
  };

  /* --- Packages page renderer --- */
  window.axRenderPackages = function () {
    const P = C.packages;
    document.title = `Packages | ${C.global.brand}`;
    const tiers = P.tiers.map(t => {
      const feat = (t.featured === true || t.featured === 'true');
      const feats = t.features.map(f => `<li>${icon('check')}<span>${f}</span></li>`).join("");
      return `<div class="tier ${feat?'tier-featured':''} reveal">
        ${feat?'<span class="tier-badge">Most popular</span>':''}
        <h3>${t.name}</h3>
        <p class="tier-tag">${t.tagline}</p>
        <div class="tier-price">${t.price}</div>
        <ul class="checks tier-feats">${feats}</ul>
        <a class="btn ${feat?'btn-primary':'btn-ghost'}" href="submit.html" style="justify-content:center;width:100%">${t.cta}</a>
      </div>`;
    }).join("");
    return `${header('packages')}
    <section class="hero"><div class="wrap center" style="max-width:720px;margin:0 auto">
      <span class="eyebrow">${P.eyebrow}</span>
      <h1 style="margin-bottom:16px">${P.title}</h1>
      <p class="lead">${P.text}</p>
    </div></section>
    <section class="section"><div class="wrap">
      <div class="grid grid-3 tiers">${tiers}</div>
      <p class="center" style="margin-top:30px;color:var(--muted);font-size:.92rem;max-width:56ch;margin-left:auto;margin-right:auto">${P.note}</p>
    </div></section>
    ${window.axCta()}
    ${footer()}`;
  };

  /* --- About page renderer --- */
  window.axRenderAbout = function () {
    const A = C.about;
    document.title = `About | ${C.global.brand}`;
    const values = A.values.map(v => `
      <div class="card reveal"><div class="ic">${icon('shield')}</div>
        <h3>${v.t}</h3><p>${v.d}</p></div>`).join("");
    const ts = C.testimonials.map(t => `
      <div class="quote reveal">
        <div class="stars">${icon('star')}${icon('star')}${icon('star')}${icon('star')}${icon('star')}</div>
        <p>"${t.quote}"</p>
        <div class="who"><b>${t.name}</b><span>${t.role}</span></div>
      </div>`).join("");
    const faqs = C.faq.map((f,i) => `
      <div class="faq reveal">
        <button class="faq-q" onclick="this.parentElement.classList.toggle('open')">
          <span>${f.q}</span>${icon('arrow','faq-ic')}</button>
        <div class="faq-a"><p>${f.a}</p></div>
      </div>`).join("");
    return `${header('about')}
    <section class="hero"><div class="wrap center" style="max-width:720px;margin:0 auto">
      <span class="eyebrow">${A.eyebrow}</span>
      <h1 style="margin-bottom:16px">${A.title}</h1>
      <p class="lead">${A.text}</p>
    </div></section>
    <section class="section"><div class="wrap">
      <div class="sh center"><span class="eyebrow">How we work</span><h2>Three things we never compromise</h2></div>
      <div class="grid grid-3">${values}</div>
    </div></section>
    <section class="section soft"><div class="wrap">
      <div class="sh center"><span class="eyebrow">Clients</span><h2>What business owners say</h2></div>
      <div class="grid grid-3">${ts}</div>
    </div></section>
    <section class="section"><div class="wrap" style="max-width:760px">
      <div class="sh center"><span class="eyebrow">FAQ</span><h2>Questions, answered</h2></div>
      <div class="faqs">${faqs}</div>
    </div></section>
    ${window.axCta()}
    ${footer()}`;
  };

  /* --- reveal on scroll --- */
  window.axReveal = function () {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach(e=>e.classList.add('in')); return; }
    const io = new IntersectionObserver((ents) => {
      ents.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
    els.forEach(e => io.observe(e));
    // safety net: never leave content invisible
    setTimeout(() => els.forEach(e => e.classList.add('in')), 1400);
  };

  window.axToast = function (msg) {
    let t = document.querySelector('.toast');
    if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
    t.textContent = msg; t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2600);
  };
})();
