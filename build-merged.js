/* Axiotrix | merged build
   Produces a page that uses the REAL axiotrix.com header, footer and
   stylesheets, with the Digital Solutions content dropped in between.
   The result is visually part of the main site, not a lookalike.

   Run:  node build-merged.js
   Out:  dist/digital-solutions-merged.html

   How it works:
   1. Downloads the live axiotrix.com home page (cached in .cache/).
   2. Lifts its <head> assets, <header> block and <footer> block.
   3. Scopes every rule in our stylesheet under .ax-ds so it cannot
      collide with Bootstrap, which the theme is built on.
   4. Wraps our content in <div class="ax-ds"> and assembles the page.

   Because the theme uses relative asset paths (css/..., js/...), the
   output MUST be uploaded to the site root, next to index.php. */

const fs = require('fs');
const path = require('path');
const https = require('https');

const SITE = 'https://www.axiotrix.com/';
const OUT = path.join(__dirname, 'dist');
const CACHE = path.join(__dirname, '.cache');
const read = (f) => fs.readFileSync(path.join(__dirname, f), 'utf8');

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve(d));
    }).on('error', reject);
  });
}

/* ---------- scope a stylesheet under a wrapper class ---------- */
function scopeCss(css, scope) {
  css = css.replace(/\/\*[\s\S]*?\*\//g, '');                    // strip comments first: they
                                                                 // otherwise get swallowed into
                                                                 // the following selector and
                                                                 // invalidate the whole rule
  css = css.replace(/@import url\([^)]+\);?\s*/g, '');           // font import moves to <head>
  let out = '', i = 0;

  while (i < css.length) {
    // at-rules
    if (css[i] === '@') {
      const braceAt = css.indexOf('{', i);
      const semiAt = css.indexOf(';', i);
      if (semiAt !== -1 && (braceAt === -1 || semiAt < braceAt)) {   // @charset etc
        out += css.slice(i, semiAt + 1); i = semiAt + 1; continue;
      }
      const rule = css.slice(i, braceAt).trim();
      const body = extractBlock(css, braceAt);
      if (/^@(media|supports)/.test(rule)) {
        out += rule + '{' + scopeCss(body.inner, scope) + '}';       // recurse
      } else {
        out += rule + '{' + body.inner + '}';                        // keyframes, font-face: leave alone
      }
      i = body.end; continue;
    }
    // normal rule
    const braceAt = css.indexOf('{', i);
    if (braceAt === -1) break;
    const selectors = css.slice(i, braceAt).trim();
    const body = extractBlock(css, braceAt);
    if (selectors) {
      const scoped = selectors.split(',').map(sel => {
        sel = sel.trim();
        if (!sel) return sel;
        if (sel === ':root' || sel === 'html' || sel === 'body') return scope;
        if (sel === '*') return scope + ' *';
        if (sel.startsWith('body ')) return scope + sel.slice(4);
        return scope + ' ' + sel;
      }).join(', ');
      out += scoped + '{' + body.inner + '}';
    }
    i = body.end;
  }
  return out;
}

function extractBlock(css, braceAt) {
  let depth = 0, j = braceAt;
  for (; j < css.length; j++) {
    if (css[j] === '{') depth++;
    else if (css[j] === '}') { depth--; if (depth === 0) break; }
  }
  return { inner: css.slice(braceAt + 1, j), end: j + 1 };
}

/* ---------- main ---------- */
(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  fs.mkdirSync(CACHE, { recursive: true });

  const cacheFile = path.join(CACHE, 'axiotrix-home.html');
  let live;
  if (fs.existsSync(cacheFile) && !process.argv.includes('--refresh')) {
    live = fs.readFileSync(cacheFile, 'utf8');
    console.log('Using cached copy of axiotrix.com (pass --refresh to re-download)');
  } else {
    console.log('Downloading axiotrix.com ...');
    live = await fetch(SITE);
    fs.writeFileSync(cacheFile, live);
  }

  /* head: keep their stylesheet and favicon links, drop their meta/title */
  const headInner = live.slice(live.indexOf('<head'), live.indexOf('</head>'));
  const headLinks = (headInner.match(/<link[^>]*>/g) || [])
    .filter(l => /stylesheet|icon/.test(l))
    .join('\n');

  /* header block */
  const hStart = live.indexOf('<header');
  const hEnd = live.indexOf('</header>') + '</header>'.length;
  const headerBlock = live.slice(hStart, hEnd);

  /* footer block */
  const fStart = live.indexOf('<footer');
  const fEnd = live.indexOf('</footer>') + '</footer>'.length;
  const footerBlock = live.slice(fStart, fEnd);

  /* their scripts, so the menu actually works */
  const bodyScripts = (live.slice(live.indexOf('</footer>')).match(/<script[^>]*src="[^"]*"[^>]*><\/script>/g) || []).join('\n');

  /* our assets */
  const css = read('assets/styles.css');
  const fontUrl = (css.match(/@import url\('([^']+)'\)/) || [])[1] || '';
  const scoped = scopeCss(css, '.ax-ds');

  const contentJs = read('assets/content.js');
  const siteJs = read('assets/site.js');

  /* our home markup, minus our own header and footer */
  const homeScript = read('index.html')
    .split('<script>')[1].split('</script>')[0]
    .replace(/document\.getElementById\('app'\)\.innerHTML = `/, 'return `')
    .replace(/\$\{window\.axHeader\('[^']*'\)\}/g, '')
    .replace(/\$\{window\.axFooter\(\)\}/g, '')
    .replace(/window\.axReveal\(\);/g, '')
    .replace(/window\.axStartCarousel\(\);/g, '')
    .replace(/href="submit\.html"/g, 'href="#/contact"')
    .replace(/href="service\.html\?s=\$\{s\.slug\}"/g, 'href="#/service/${s.slug}"')
    .replace(/href="#services"/g, 'href="#/#services"');

  const page = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Digital Solutions | Axiotrix Global</title>
<meta name="description" content="Axiotrix Digital Solutions: websites, webstores, custom tools, AI, reports, automation and messaging that help businesses get found and capture more enquiries.">

<!-- the live site's own stylesheets, so the header and footer look identical -->
${headLinks}

<!-- our fonts -->
<link rel="stylesheet" href="${fontUrl}">

<!-- our styles, every rule scoped under .ax-ds so they cannot touch the theme -->
<style>
${scoped}
.ax-ds { font-family: 'Poppins', system-ui, sans-serif; color: #4a5468; line-height: 1.7; }
.ax-ds img { max-width: 100%; }
</style>
</head>
<body class="tm-container-1340px">

${headerBlock}

<div class="main-content-area">
  <div class="ax-ds" id="app"></div>
</div>

${footerBlock}

<script>
/* ---------- content ---------- */
${contentJs}

/* ---------- rendering engine ---------- */
${siteJs}

/* ---------- router: renders into the theme's content area ---------- */
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

  function localise(html) {
    return html
      .replace(/href="index\\.html"/g, 'href="#/"')
      .replace(/href="about\\.html"/g, 'href="#/about"')
      .replace(/href="submit\\.html"/g, 'href="#/contact"')
      .replace(/href="service\\.html\\?s=([a-z-]+)"/g, 'href="#/service/$1"');
  }

  /* Our service and about renderers include our own header/footer,
     so strip those out: the theme supplies them here. */
  function stripChrome(html) {
    return html
      .replace(/<div class="topbar">[\\s\\S]*?<\\/header>/, '')
      .replace(/<footer class="footer">[\\s\\S]*?<\\/footer>/, '')
      .replace(/<a class="wa-float"[\\s\\S]*?<\\/a>/, '');
  }

  function route() {
    const hash = location.hash.replace(/^#\\/?/, '');
    let body;
    if (hash.startsWith('service/')) {
      body = stripChrome(window.axRenderService(hash.split('/')[1]));
    } else if (hash.startsWith('about')) {
      body = stripChrome(window.axRenderAbout());
    } else if (hash.startsWith('contact')) {
      body = contactHtml();
      document.title = 'Contact | Axiotrix Global';
    } else {
      body = homeHtml() + stripChrome(window.axCta());
      document.title = 'Digital Solutions | Axiotrix Global';
    }
    app.innerHTML = localise(body);
    wireForm();
    window.axReveal();
    window.axStartCarousel();
    if (!location.hash.includes('#services')) window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', route);
  route();
})();
</script>

<!-- the theme's own scripts, so its menu and effects work -->
${bodyScripts}
</body>
</html>
`;

  fs.writeFileSync(path.join(OUT, 'digital-solutions-merged.html'), page);
  console.log('Built: dist/digital-solutions-merged.html');
  console.log('Upload to the SITE ROOT (next to index.php) so css/ and js/ paths resolve.');
})();
