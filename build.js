/* Axiotrix | build script
   Produces drop-in files for attaching this Digital Solutions section
   to an existing website.

   Run:  node build.js
   Out:  dist/axiotrix-digital-solutions.html   one self-contained file
         dist/embed-snippet.html                iframe snippet to paste

   The single file contains every page (home, 5 service pages, about,
   contact form), all CSS, all content and all logic, with no external
   requests except Google Fonts. Navigation happens through the URL hash
   so it works from any location, including inside a subfolder. */

const fs = require('fs');
const path = require('path');

const read = (f) => fs.readFileSync(path.join(__dirname, f), 'utf8');
const OUT = path.join(__dirname, 'dist');

const css = read('assets/styles.css');
const contentJs = read('assets/content.js');
const siteJs = read('assets/site.js');

/* Pull the font @import out of the CSS so it can be a <link> in <head>.
   @import must come first in a stylesheet, which is fragile when inlined. */
const fontUrl = (css.match(/@import url\('([^']+)'\)/) || [])[1] || '';
const cssBody = css.replace(/@import url\('[^']+'\);?\s*/, '');

/* ---- home page markup, lifted from index.html ---- */
const indexHtml = read('index.html');
const homeScript = indexHtml
  .split('<script>')[1]
  .split('</script>')[0]
  .replace(/document\.getElementById\('app'\)\.innerHTML = `/, 'return `')
  .replace(/\$\{window\.axHeader\('[^']*'\)\}/g, '')
  .replace(/\$\{window\.axFooter\(\)\}/g, '')
  .replace(/window\.axReveal\(\);/g, '')
  .replace(/href="submit\.html"/g, 'href="#/contact"')
  .replace(/href="service\.html\?s=\$\{s\.slug\}"/g, 'href="#/service/${s.slug}"')
  .replace(/href="#services"/g, 'href="#/#services"');

fs.mkdirSync(OUT, { recursive: true });

const page = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Digital Solutions | Axiotrix</title>
<meta name="description" content="Axiotrix Digital Solutions: websites, webstores, custom tools, AI, reports, automation and messaging that help businesses get found and capture more enquiries.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="${fontUrl}">
<style>
${cssBody}
</style>
</head>
<body>
<div id="app"></div>

<script>
/* ---------- content ---------- */
${contentJs}

/* ---------- rendering engine ---------- */
${siteJs}

/* ---------- single-file router ---------- */
(function () {
  const C = window.axContent, I = window.axIcon;
  const app = document.getElementById('app');

  function homeHtml() {
    ${homeScript}
  }

  function contactHtml() {
    const S = C.submit;
    const chips = S.services.map((s, i) =>
      '<div class="chip"><input type="checkbox" id="sv' + i + '" name="services" value="' + s + '">' +
      '<label for="sv' + i + '">' + s + '</label></div>').join('');
    const budgets = S.budgets.map(b => '<option>' + b + '</option>').join('');
    return \`
    <section class="section"><div class="wrap" style="max-width:760px">
      <div class="sh center reveal">
        <span class="eyebrow">\${S.eyebrow}</span>
        <h2>\${S.title}</h2>
        <p class="lead">\${S.text}</p>
      </div>
      <div class="panel reveal" id="formwrap" style="padding:30px">
        <form class="form" id="reqform">
          <div class="field-row">
            <div class="field"><label for="name">Your name <span class="req">*</span></label>
              <input id="name" name="name" required placeholder="e.g. Jordan Smith"></div>
            <div class="field"><label for="business">Business name</label>
              <input id="business" name="business" placeholder="e.g. Lakeside Photography"></div>
          </div>
          <div class="field-row">
            <div class="field"><label for="phone">Phone number <span class="req">*</span></label>
              <input id="phone" name="phone" required inputmode="tel" placeholder="e.g. (866) 422-0499"></div>
            <div class="field"><label for="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@yourbusiness.com"></div>
          </div>
          <div class="field"><label>What do you need? <span class="req">*</span></label>
            <div class="chips">\${chips}</div></div>
          <div class="field-row">
            <div class="field"><label for="budget">Rough budget</label>
              <select id="budget" name="budget"><option value="">Select...</option>\${budgets}</select></div>
            <div class="field"><label for="timeline">How soon?</label>
              <select id="timeline" name="timeline"><option value="">Select...</option>
                <option>This week</option><option>This month</option>
                <option>Next 1-3 months</option><option>Just exploring</option></select></div>
          </div>
          <div class="field"><label for="msg">Describe the problem in your own words <span class="req">*</span></label>
            <textarea id="msg" name="msg" required placeholder="e.g. Customers call and message us but enquiries get lost between the phone and email, and follow-ups do not happen."></textarea></div>
          <button class="btn btn-primary" type="submit" style="justify-content:center">Send my requirement</button>
          <p style="font-size:.82rem;color:var(--muted);text-align:center;margin-top:-4px">One working day to a plan. No spam, ever.</p>
        </form>
      </div>
      <div class="panel reveal" id="success" style="display:none;padding:44px;text-align:center">
        <div style="width:64px;height:64px;border-radius:50%;background:var(--indigo-50);color:var(--indigo);display:grid;place-items:center;margin:0 auto 18px">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
        </div>
        <h2 style="margin-bottom:10px">\${S.successTitle}</h2>
        <p class="lead" style="margin:0 auto 24px">\${S.successText}</p>
        <a class="btn btn-indigo" href="mailto:\${C.global.email}">Email us directly</a>
      </div>
    </div></section>\`;
  }

  function wireForm() {
    const f = document.getElementById('reqform');
    if (!f) return;
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      const picked = [...f.querySelectorAll('input[name="services"]:checked')].map(x => x.value);
      if (!picked.length) { window.axToast('Please pick at least one thing you need.'); return; }
      window.AX.addLead({
        id: Date.now(), at: new Date().toISOString(),
        name: f.name.value.trim(), business: f.business.value.trim(),
        phone: f.phone.value.trim(), email: f.email.value.trim(),
        services: picked, budget: f.budget.value, timeline: f.timeline.value,
        msg: f.msg.value.trim(), status: 'new'
      });
      document.getElementById('formwrap').style.display = 'none';
      document.getElementById('success').style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* Strip the multi-page links the shared engine emits so every link
     stays inside this single file. */
  function localise(html) {
    return html
      .replace(/href="index\\.html"/g, 'href="#/"')
      .replace(/href="about\\.html"/g, 'href="#/about"')
      .replace(/href="submit\\.html"/g, 'href="#/contact"')
      .replace(/href="service\\.html\\?s=([a-z-]+)"/g, 'href="#/service/$1"')
      .replace(/href="index\\.html#services"/g, 'href="#/"');
  }

  function route() {
    const hash = location.hash.replace(/^#\\/?/, '');
    let body;
    if (hash.startsWith('service/')) {
      body = window.axRenderService(hash.split('/')[1]);
    } else if (hash.startsWith('about')) {
      body = window.axRenderAbout();
    } else if (hash.startsWith('contact')) {
      body = window.axHeader('submit') + contactHtml() + window.axFooter();
      document.title = 'Contact | ' + C.global.brand;
    } else {
      body = window.axHeader('') + homeHtml() + window.axCta() + window.axFooter();
      document.title = 'Digital Solutions | ' + C.global.brand;
    }
    app.innerHTML = localise(body);
    wireForm();
    window.axReveal();
    if (window.axStartCarousel) window.axStartCarousel();
    if (!location.hash.includes('#services')) window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', route);
  route();
})();
</script>
</body>
</html>
`;

fs.writeFileSync(path.join(OUT, 'axiotrix-digital-solutions.html'), page);

/* ---- iframe snippet ---- */
fs.writeFileSync(path.join(OUT, 'embed-snippet.html'), `<!-- Axiotrix Digital Solutions: paste this into any page or Custom HTML block.
     Upload axiotrix-digital-solutions.html first, then point src at it.
     The iframe keeps your existing site styles completely separate. -->
<iframe
  src="/axiotrix-digital-solutions.html"
  title="Axiotrix Digital Solutions"
  style="width:100%;border:0;display:block;min-height:100vh"
  loading="lazy"
  id="axiotrix-frame"></iframe>

<script>
/* Grows the iframe to fit its content so there is no inner scrollbar. */
(function () {
  var f = document.getElementById('axiotrix-frame');
  window.addEventListener('message', function (e) {
    if (e.data && e.data.axiotrixHeight) f.style.height = e.data.axiotrixHeight + 'px';
  });
})();
</script>
`);

console.log('Built:');
console.log('  dist/axiotrix-digital-solutions.html');
console.log('  dist/embed-snippet.html');
