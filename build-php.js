/* Axiotrix | PHP build
   Generates digital-solutions.php in the same shape as the site's other
   pages: include template.php, define main(), let the template render
   the head, header and footer around it.

   Run:  node build-php.js
   Out:  dist/digital-solutions.php        upload next to index.php
         dist/_php-preview.html            local preview only, do not upload

   Notes on safety:
   - The site uses PHP short tags (<?), so the generated content must not
     contain the sequence "<?" anywhere. The build asserts this.
   - Our stylesheet is scoped under .ax-ds so it cannot collide with the
     theme's Bootstrap.
   - <style> and <link> inside the body are valid HTML5 and work in every
     browser, which keeps this independent of whatever template.php does
     with its <head>. */

const fs = require('fs');
const path = require('path');

const read = (f) => fs.readFileSync(path.join(__dirname, f), 'utf8');
const OUT = path.join(__dirname, 'dist');
const CACHE = path.join(__dirname, '.cache');

/* reuse the scoping logic */
function scopeCss(css, scope) {
  css = css.replace(/\/\*[\s\S]*?\*\//g, '');
  css = css.replace(/@import url\([^)]+\);?\s*/g, '');
  let out = '', i = 0;
  while (i < css.length) {
    if (css[i] === '@') {
      const braceAt = css.indexOf('{', i);
      const semiAt = css.indexOf(';', i);
      if (semiAt !== -1 && (braceAt === -1 || semiAt < braceAt)) {
        out += css.slice(i, semiAt + 1); i = semiAt + 1; continue;
      }
      const rule = css.slice(i, braceAt).trim();
      const body = extractBlock(css, braceAt);
      out += /^@(media|supports)/.test(rule)
        ? rule + '{' + scopeCss(body.inner, scope) + '}'
        : rule + '{' + body.inner + '}';
      i = body.end; continue;
    }
    const braceAt = css.indexOf('{', i);
    if (braceAt === -1) break;
    const selectors = css.slice(i, braceAt).trim();
    const body = extractBlock(css, braceAt);
    if (selectors) {
      out += selectors.split(',').map(sel => {
        sel = sel.trim();
        if (!sel) return sel;
        if (sel === ':root' || sel === 'html' || sel === 'body') return scope;
        if (sel === '*') return scope + ' *';
        if (sel.startsWith('body ')) return scope + sel.slice(4);
        return scope + ' ' + sel;
      }).join(', ') + '{' + body.inner + '}';
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

fs.mkdirSync(OUT, { recursive: true });

const css = read('assets/styles.css');
const fontUrl = (css.match(/@import url\('([^']+)'\)/) || [])[1] || '';
const scoped = scopeCss(css, '.ax-ds');
const contentJs = read('assets/content.js');
const siteJs = read('assets/site.js');

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

/* ---------- the body content, shared by the PHP file and the preview ---------- */
const bodyContent = `
<link rel="stylesheet" href="${fontUrl}">
<style>
${scoped}
.ax-ds { font-family: 'Poppins', system-ui, sans-serif; color: #4a5468; line-height: 1.7; }
.ax-ds img { max-width: 100%; }
</style>

<div class="ax-ds" id="app"></div>

<script>
/* ---------- content ---------- */
${contentJs}

/* ---------- rendering engine ---------- */
${siteJs}

/* ---------- router ---------- */
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
            <div class="field"><label for="ax-name">Your name <span class="req">*</span></label>
              <input id="ax-name" name="name" required placeholder="e.g. Jordan Smith"></div>
            <div class="field"><label for="ax-business">Business name</label>
              <input id="ax-business" name="business" placeholder="e.g. Lakeside Photography"></div>
          </div>
          <div class="field-row">
            <div class="field"><label for="ax-phone">Phone number <span class="req">*</span></label>
              <input id="ax-phone" name="phone" required inputmode="tel" placeholder="e.g. (866) 422-0499"></div>
            <div class="field"><label for="ax-email">Email</label>
              <input id="ax-email" name="email" type="email" placeholder="you@yourbusiness.com"></div>
          </div>
          <div class="field"><label>What do you need? <span class="req">*</span></label>
            <div class="chips">\${chips}</div></div>
          <div class="field-row">
            <div class="field"><label for="ax-budget">Rough budget</label>
              <select id="ax-budget" name="budget"><option value="">Select...</option>\${budgets}</select></div>
            <div class="field"><label for="ax-timeline">How soon?</label>
              <select id="ax-timeline" name="timeline"><option value="">Select...</option>
                <option>This week</option><option>This month</option>
                <option>Next 1-3 months</option><option>Just exploring</option></select></div>
          </div>
          <div class="field"><label for="ax-msg">Describe the problem in your own words <span class="req">*</span></label>
            <textarea id="ax-msg" name="msg" required placeholder="e.g. Customers call and message us but enquiries get lost between the phone and email, and follow-ups do not happen."></textarea></div>
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

  /* our renderers ship their own header and footer: the site template
     supplies those here, so strip them out */
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
      body = homeHtml();   /* homeHtml already ends with the CTA band */
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
`;

/* PHP short tags are enabled on this site, so "<?" anywhere in the
   content would be parsed as PHP. Fail loudly rather than ship that. */
if (bodyContent.includes('<?')) {
  console.error('ABORT: content contains "<?", which PHP short tags would execute.');
  process.exit(1);
}

const php = `<? include("template.php");
    function main() {
?>
${bodyContent}
<? } ?>
`;

fs.writeFileSync(path.join(OUT, 'digital-solutions.php'), php);

/* ---- local preview: wrap the same content in the real theme shell ---- */
const cacheFile = path.join(CACHE, 'axiotrix-home.html');
if (fs.existsSync(cacheFile)) {
  const live = fs.readFileSync(cacheFile, 'utf8');
  const headLinks = (live.slice(live.indexOf('<head'), live.indexOf('</head>'))
    .match(/<link[^>]*>/g) || []).filter(l => /stylesheet|icon/.test(l)).join('\n')
    .replace(/href="(?!http)/g, 'href="https://www.axiotrix.com/');
  const headerBlock = live.slice(live.indexOf('<header'), live.indexOf('</header>') + 9)
    .replace(/src="(?!http)/g, 'src="https://www.axiotrix.com/');
  const footerBlock = live.slice(live.indexOf('<footer'), live.indexOf('</footer>') + 9)
    .replace(/src="(?!http)/g, 'src="https://www.axiotrix.com/');

  fs.writeFileSync(path.join(OUT, '_php-preview.html'),
    `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>PREVIEW Digital Solutions | Axiotrix Global</title>
${headLinks}
</head><body class="tm-container-1340px">
${headerBlock}
<div class="main-content-area">
${bodyContent}
</div>
${footerBlock}
</body></html>`);
  console.log('Built: dist/digital-solutions.php');
  console.log('Built: dist/_php-preview.html   (local check only, do not upload)');
} else {
  console.log('Built: dist/digital-solutions.php');
  console.log('(run build-merged.js once to enable the local preview)');
}
