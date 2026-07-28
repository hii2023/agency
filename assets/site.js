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

  /* Real Axiotrix Global logo, served from the live site so it always
     matches. LOGO_SRC can be a root-relative path once this page is
     hosted on axiotrix.com. */
  const LOGO_SRC = "https://www.axiotrix.com/images/logo.png";
  const mark = `<img class="mark" src="${LOGO_SRC}" alt="Axiotrix Global, Solutions Simplified">`;
  const caret = `<svg class="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`;

  /* --- Header (topbar + nav, matching axiotrix.com) --- */
  function header(active) {
    const isSvc = C.services.some(s => s.slug === active);
    const cls = (k) => (active === k || (k === 'services' && isSvc)) ? ' class="active"' : '';
    const drop = C.services.map(s =>
      `<a href="service.html?s=${s.slug}"><span class="ar">&#10230;</span>${s.eyebrow}</a>`).join("");
    return `<div class="topbar"><div class="wrap">
      <div class="topbar-left">
        <a href="tel:${C.global.phone}">${icon('phone')}${C.global.phone}</a>
        <span class="sep">|</span>
        <a href="mailto:${C.global.email}">${icon('mail')}${C.global.email}</a>
      </div>
      <a href="submit.html">Request For Demo</a>
    </div></div>
    <header class="nav"><div class="wrap">
      <a class="brand" href="index.html">${mark}</a>
      <nav class="nav-links">
        <a href="https://www.axiotrix.com/">Home</a>
        <a href="https://www.axiotrix.com/">Healthcare</a>
        <a href="https://www.axiotrix.com/">Financial</a>
        <div class="has-drop">
          <a href="index.html"${cls('services')}>Digital Solutions ${caret}</a>
          <div class="drop">${drop}</div>
        </div>
        <a href="about.html"${cls('about')}>About Us</a>
        <a href="submit.html"${cls('submit')}>Contact Us</a>
      </nav>
      <div class="nav-cta">
        <a class="btn btn-primary" href="submit.html">Request a Plan</a>
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
          <a class="brand brand-invert" href="index.html" style="margin-bottom:14px">${mark}</a>
          <p style="max-width:34ch">${C.global.footerBlurb}</p>
        </div>
        <div><h5>Services</h5>${svc}</div>
        <div><h5>Company</h5>
          <a href="about.html">About</a><a href="submit.html">Contact us</a>
        </div>
        <div><h5>Talk to us</h5>
          <a href="mailto:${C.global.email}">${C.global.email}</a>
          <a href="tel:${C.global.phone}">${C.global.phone}</a>
          <a href="${wa}" target="_blank" rel="noopener">WhatsApp us</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} ${C.global.brand}. ${C.global.tagline}</span>
        <span>Solutions Simplified.</span>
      </div>
    </div></footer>
    <a class="wa-float" href="${wa}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${icon('wa')}</a>`;
  }
  window.axHeader = header; window.axFooter = footer; window.axContent = C;

  /* --- CTA band (shared) --- */
  window.axCta = function () {
    return `<section class="section"><div class="wrap"><div class="cta-band reveal">
      <h2>Not sure where to start?</h2>
      <p>Tell us the problem in plain words. We come back with a plan, a timeline and a price within one working day.</p>
      <a class="btn btn-primary" href="submit.html">Request a consultation ${icon('arrow')}</a>
    </div></div></section>`;
  };

  /* --- Service page renderer --- */
  window.axRenderService = function (slug) {
    const s = C.services.find(x => x.slug === slug) || C.services[0];
    const wa = `https://wa.me/${C.global.whatsapp}?text=${encodeURIComponent("Hello Axiotrix, I am interested in " + s.eyebrow)}`;
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

  /* --- Hero carousel: five customer journeys ---
     Edit JOURNEYS to change the examples shown in the hero. */
  const JOURNEYS = [
    { search: "wedding photographer near me", domain: "yourstudio.com",
      name: "Lakeside Photography", btn: "Check my date", cap3: "They enquire",
      ask: "Is 14th June free for a wedding?",
      reply: "It is. Sending you the packages now.",
      badge: "Enquiry logged. Follow-up scheduled." },
    { search: "office cleaning services", domain: "yourcompany.com",
      name: "BrightSpace Cleaning", btn: "Get a free quote", cap3: "They ask for a price",
      ask: "2 floors, 15 desks. What would that cost?",
      reply: "Quote sent to your email just now.",
      badge: "Quote generated. No manual work." },
    { search: "custom furniture maker", domain: "yourworkshop.com",
      name: "Oakline Furniture", btn: "Start my order", cap3: "They order",
      ask: "Want the dining table in walnut, seats 6.",
      reply: "Noted. Deposit link is on its way.",
      badge: "Order saved. Team notified instantly." },
    { search: "driving school in my area", domain: "yourschool.com",
      name: "Greenway Driving School", btn: "Book a lesson", cap3: "They book",
      ask: "Do you have Saturday morning slots?",
      reply: "Yes, booked you for Saturday 9am.",
      badge: "Booking logged. Reminder sends automatically." },
    { search: "same day courier service", domain: "yourbusiness.com",
      name: "Swift Route Couriers", btn: "Request a pickup", cap3: "They request a pickup",
      ask: "Need a parcel collected before 5pm today.",
      reply: "Pickup confirmed for 3:30pm today.",
      badge: "Job created. Driver assigned." }
  ];

  const journeyStage = (j) => `
    <div class="j-step">
      <span class="j-cap">1 &middot; They search</span>
      <div class="j-card j-search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
        <span>${j.search}</span>
      </div>
    </div>
    <div class="j-line"></div>
    <div class="j-step">
      <span class="j-cap">2 &middot; They find you</span>
      <div class="j-card j-site">
        <div class="j-site-bar"><span></span><span></span><span></span><em>${j.domain}</em></div>
        <div class="j-site-body"><b>${j.name}</b><span class="j-btn">${j.btn}</span></div>
      </div>
    </div>
    <div class="j-line"></div>
    <div class="j-step">
      <span class="j-cap">3 &middot; ${j.cap3}</span>
      <div class="j-card j-chat">
        <div class="j-bubble in">${j.ask}</div>
        <div class="j-bubble out">${j.reply}</div>
      </div>
    </div>
    <div class="j-badge">${icon('bolt')} ${j.badge}</div>`;

  window.axJourneyHtml = function () {
    return `<div class="journey">
      <div class="journey-stage" id="jstage">${journeyStage(JOURNEYS[0])}</div>
      <div class="j-dots">${JOURNEYS.map((_, i) =>
        `<button class="j-dot${i === 0 ? ' on' : ''}" data-i="${i}" aria-label="Example ${i + 1}"></button>`).join("")}</div>
    </div>`;
  };

  /* Rotates every 4.5s, pauses on hover, stops on click,
     respects prefers-reduced-motion. Safe to call on every render. */
  window.axStartCarousel = function () {
    const stage = document.getElementById('jstage');
    if (!stage) return;
    const dots = [...document.querySelectorAll('.j-dot')];
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let i = 0, timer = null;

    if (window._axTimer) clearInterval(window._axTimer);

    function show(n) {
      i = (n + JOURNEYS.length) % JOURNEYS.length;
      stage.classList.add('fading');
      setTimeout(() => {
        stage.innerHTML = journeyStage(JOURNEYS[i]);
        stage.classList.remove('fading');
        dots.forEach((d, k) => d.classList.toggle('on', k === i));
      }, reduced ? 0 : 220);
    }
    function start() { if (!reduced && !timer) { timer = setInterval(() => show(i + 1), 4500); window._axTimer = timer; } }
    function stop() { clearInterval(timer); timer = null; }

    dots.forEach(d => d.addEventListener('click', () => { stop(); show(+d.dataset.i); }));
    const j = document.querySelector('.journey');
    if (j) { j.addEventListener('mouseenter', stop); j.addEventListener('mouseleave', start); }
    document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
    start();
  };
})();
