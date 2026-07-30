/* Axiotrix | theme-native build
   Generates digital-solutions.php using the SITE THEME's own markup and
   classes, modelled directly on helthcare-services.php.

   Run:  node build-theme.js
   Out:  dist/digital-solutions.php

   Why this replaces the earlier custom-CSS version:
   - The theme's Bootstrap grid is already responsive and tested, so
     mobile works without us hand-rolling breakpoints.
   - We inherit the theme's animations (floating objects, icon hover,
     reveal) for free.
   - No custom stylesheet means no collision with the theme at all.
   - The page is static HTML, so it is crawlable, unlike the previous
     JavaScript-rendered version.

   Content still comes from assets/content.js, so the control panel and
   the standalone builds stay in sync with this one. */

const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, 'dist');
fs.mkdirSync(OUT, { recursive: true });

/* pull DEFAULT_CONTENT out of content.js without a browser */
const contentSrc = fs.readFileSync(path.join(__dirname, 'assets/content.js'), 'utf8');
const objSrc = contentSrc.slice(
  contentSrc.indexOf('const DEFAULT_CONTENT = ') + 'const DEFAULT_CONTENT = '.length,
  contentSrc.indexOf('\n/* --- content loader')
).trim().replace(/;$/, '');
const C = eval('(' + objSrc + ')');

const esc = (s) => String(s).replace(/&(?!\w+;|#\d+;)/g, '&amp;');

/* Portrait images already on the server. The theme's .about-box overlays a
   consultation card on the image, so it needs tall images (roughly 530x756)
   like the healthcare page uses. Landscape images break that overlay. */
const IMG = ['about/1.jpg', 'health-ser/2.jpg', 'health-ser/3.jpg', 'health-ser/6.jpg', 'about/3.jpg'];
const PROCESS_ICONS = ['icon/10.png', 'icon/11.png', 'icon/9.png', 'icon/12.png'];
const FLAT_ICONS = [
  'flaticon-business-002-graph', 'flaticon-business-013-idea',
  'flaticon-business-016-world', 'flaticon-business-035-helpline'
];

const floatingA = `    <div class="tm-floating-objects"> <span class="tm-animation-floating z-index--1" data-tm-bg-img="images/floating-objects/ob1.png" data-tm-width="459" data-tm-height="523" data-tm-top="0" data-tm-bottom="auto" data-tm-left="0" data-tm-right="auto" data-tm-opacity="-100px"></span> <span class="tm-animation-floating z-index--1" data-tm-bg-img="images/floating-objects/ob2.png" data-tm-width="624" data-tm-height="1094" data-tm-top="100" data-tm-bottom="auto" data-tm-left="auto" data-tm-right="0" data-tm-opacity="1"></span> </div>`;
const floatingB = `    <div class="tm-floating-objects"> <span class="tm-animation-floating z-index--1" data-tm-bg-img="images/floating-objects/ob8.png" data-tm-width="807" data-tm-height="939" data-tm-top="-200px" data-tm-bottom="auto" data-tm-left="auto" data-tm-right="-200px" data-tm-opacity="1"></span> </div>`;

/* ---- Section 1 per service: image + intro + impact + deliverables ---- */
function introSection(s, i) {
  const img = IMG[i % IMG.length];
  const list = s.deliverables.map(d => `                                    <li>${esc(d)}</li>`).join('\n');
  const imageLeft = i % 2 === 0;

  const imageCol = `                <div class="col-xl-6">
                    <div class="about-box text-center">
                        <div class="thumb"> <img src="images/${img}" class="img-thumbnail" alt="${esc(s.eyebrow)}"> </div>
                        <div class="help-details text-start">
                            <div class="icon"><img src="images/icon/4.png" alt=""></div>
                            <div class="content">
                                <h5 class="hd-subtitle">Get Expert Consultation</h5>
                                <p class="hd-title">Ready to help <a class="text-theme-colored1" href="tel:+18664220499"><b>+1 866-422-0499</b></a></p>
                            </div>
                        </div>
                    </div>
                </div>`;

  const textCol = `                <div class="col-xl-6">
                    <div class="about-box-contents">
                        <div class="destails">
                            <h2 class="title">${esc(s.title)}</h2>
                            <p>${esc(s.text)}</p>
                            <p>${esc(s.problem)}</p>
                            <p><b>The impact: ${esc(s.impact)}</b></p>
                            <p><b>What you get</b></p>
                            <div class="tm-sc-unordered-list list-style1">
                                <ul>
${list}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>`;

  return `<!--=============== ${s.eyebrow} Start Here ===============-->
<section id="${s.slug}" class="our-about">
    <div class="container pt-sm-20 pt-md-40">
        <div class="section-content">
            <div class="row">
${imageLeft ? imageCol + '\n' + textCol : textCol + '\n' + imageCol}
            </div>
        </div>
    </div>
${imageLeft ? floatingA : floatingB}
</section>`;
}

/* ---- Section 2 per service: use cases. Alternates dark and light. ---- */
function useCaseSection(s, i) {
  const dark = i % 2 === 0;

  if (dark) {
    const boxes = s.usecases.map((u, k) => `                            <div class="tm-sc-icon-box icon-box icon-left text-start iconbox-centered-in-responsive iconbox-theme-colored1 icon-position-icon-left pb-20 mb-20 border-bottom-light">
                                <div class="icon-box-wrapper">
                                    <a class="icon icon-type-font-icon mt-10 me-4"> <img src="images/${PROCESS_ICONS[k % PROCESS_ICONS.length]}" alt=""> </a>
                                    <div class="icon-text">
                                        <h5 class="icon-box-title text-white mt-0">${esc(u.t)}</h5>
                                        <div class="content">
                                            <p data-tm-text-color="#9bb6d0">${esc(u.d)}</p>
                                            <p data-tm-text-color="#9bb6d0"><b>Impact:</b> ${esc(u.i)}</p>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>`).join('\n');

    return `<section class="bg-img-no-repeat bg-img-cover layer-overlay overlay-theme-colored2-9" data-tm-bg-img="images/bg/bg1.jpg">
    <div class="container">
        <div class="section-content">
            <div class="wrapper">
                <div class="row">
                    <div class="col-lg-12 col-xl-12">
                        <div class="agency-wrapper statistics-content mt--0 pl--0">
                            <h2 class="title">Where this makes a difference</h2>
${boxes}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--=============== ${s.eyebrow} End Here ===============-->`;
  }

  const cards = s.usecases.map((u, k) => `                    <div class="col-md-6 col-xl-3">
                        <div class="icon-box iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate mb-30 p-20 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="icon-wrapper">
                                <a class="icon icon-dark icon-lg icon-rounded mb-2" href="#${s.slug}"> <i class="${FLAT_ICONS[k % FLAT_ICONS.length]}"></i> </a>
                                <h5 class="icon-box-title">${esc(u.t)}</h5>
                            </div>
                            <div class="icon-text">
                                <div class="content">
                                    <p>${esc(u.d)}</p>
                                    <p><b>Impact:</b> ${esc(u.i)}</p>
                                </div>
                            </div>
                        </div>
                    </div>`).join('\n');

  return `<section class="bg1">
    <div class="container pt-20 pb-90">
        <div class="section-title">
            <div class="row">
                <div class="col-lg-12">
                    <div class="tm-sc-section-title section-title">
                        <div class="title-wrapper">
                            <h2 class="title">Where this makes a difference</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-content">
            <div class="about-style-current-theme">
                <div class="row ax-grid justify-content-center">
${cards}
                </div>
            </div>
        </div>
    </div>
</section>
<!--=============== ${s.eyebrow} End Here ===============-->`;
}

/* ---- nav pills ---- */
const pills = C.services.map(s =>
  `                        <li class="nav-item"><a class="nav-link" href="#${s.slug}">${esc(s.eyebrow)}</a></li>`).join('\n');

/* ---- each service gets its own process steps, as on the standalone site ---- */
function stepsSection(s) {
  /* A numbered sequence, so the number is the visual anchor rather than an
     icon. The theme only ships four flaticons, so icons repeated on any
     service with five steps. Numbers also read correctly as an order. */
  const cols = s.steps.map((st, k) => `                    <div class="col-md-6 col-lg-4">
                        <div class="icon-box iconbox-theme-colored1 mb-30 p-30 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="ax-step-num">${k + 1}</div>
                            <h5 class="icon-box-title mt-0">${esc(st.t)}</h5>
                            <div class="icon-text">
                                <div class="content">
                                    <p>${esc(st.d)}</p>
                                </div>
                            </div>
                        </div>
                    </div>`).join('\n');

  return `<section class="bg1">
    <div class="container pt-40 pb-40">
        <div class="section-title">
            <div class="row">
                <div class="col-lg-12">
                    <div class="tm-sc-section-title section-title">
                        <div class="title-wrapper">
                            <h3 class="title">How we deliver: ${esc(s.eyebrow)}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-content">
            <div class="about-style-current-theme">
                <div class="row ax-grid justify-content-center">
${cols}
                </div>
            </div>
        </div>
    </div>
</section>`;
}

/* ---- overview cards, mirroring the "How we help" grid on the standalone site ---- */
const overviewCards = C.services.map((s, i) => `                    <div class="col-md-6 col-lg-4">
                        <div class="icon-box iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate mb-30 p-20 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="icon-wrapper">
                                <a class="icon icon-dark icon-lg icon-rounded mb-2" href="#${s.slug}"> <i class="${FLAT_ICONS[i % FLAT_ICONS.length]}"></i> </a>
                                <h5 class="icon-box-title">${esc(s.eyebrow)}</h5>
                            </div>
                            <div class="icon-text">
                                <div class="content">
                                    <p>${esc(s.text)}</p>
                                    <p><b>Impact:</b> ${esc(s.impact)}</p>
                                    <a class="text-theme-colored1" href="#${s.slug}"><b>See the use cases &#10230;</b></a>
                                </div>
                            </div>
                        </div>
                    </div>`).join('\n');

/* ---- why it matters ---- */
const whyPoints = [
  'We explain everything in plain words. No technical jargon.',
  "Built around what your customer needs to do: call, book, or enquire.",
  'You own everything. No lock-in, no monthly fee to keep your own website.'
].map(p => `                                    <li>${esc(p)}</li>`).join('\n');

const trustTiles = [
  ['Everything in your name', 'Website, data, accounts'],
  ['See a demo in 48h', 'Before you pay in full'],
  ['Works while you rest', 'Replies and reminders go out on their own'],
  ['One team for everything', 'The same team you already work with']
].map(([t, d], k) => `                    <div class="col-sm-6 col-xl-3">
                        <div class="icon-box iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate mb-30 p-20 border-radius-5" data-tm-bg-color="#fff">
                            <div class="icon-wrapper">
                                <a class="icon icon-dark icon-lg icon-rounded mb-2" href="#connect"> <i class="${FLAT_ICONS[k % FLAT_ICONS.length]}"></i> </a>
                                <h5 class="icon-box-title">${esc(t)}</h5>
                            </div>
                            <div class="icon-text">
                                <div class="content"><p>${esc(d)}</p></div>
                            </div>
                        </div>
                    </div>`).join('\n');

/* ---- testimonials ---- */
const testimonialItems = C.testimonials.map(t => `                    <div class="col-md-6 col-xl-4">
                        <div class="tm-sc-testimonials testimonials-style-current-theme mb-30">
                            <div class="testimonial-text-holder p-30 border-radius-5" data-tm-bg-color="#fff">
                                <div class="author-text">"${esc(t.quote)}"</div>
                                <div class="wrapper d-flex mt-20">
                                    <div class="testimonial-author-info-holder">
                                        <h5 class="name mb-0">${esc(t.name)}</h5>
                                        <p class="position mb-0">${esc(t.role)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`).join('\n');

/* ---- FAQ, using the theme's bootstrap accordion ---- */
const faqItems = C.faq.map((f, k) => `                    <div class="accordion-item mb-15">
                        <h2 class="accordion-header" id="faqh${k}">
                            <button class="accordion-button${k === 0 ? '' : ' collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#faq${k}" aria-expanded="${k === 0 ? 'true' : 'false'}" aria-controls="faq${k}">
                                ${esc(f.q)}
                            </button>
                        </h2>
                        <div id="faq${k}" class="accordion-collapse collapse${k === 0 ? ' show' : ''}" aria-labelledby="faqh${k}" data-bs-parent="#axFaq">
                            <div class="accordion-body">
                                <p>${esc(f.a)}</p>
                            </div>
                        </div>
                    </div>`).join('\n');

const body = C.services.map((s, i) =>
  introSection(s, i) + '\n' + useCaseSection(s, i) + '\n' + stepsSection(s)).join('\n\n');

const php = `<? include("template.php");
    function main() {
    $heading="Digital Solutions";
?>

<style>
/* Scoped to this page. Fixes three things the theme grid does not handle
   for these card rows:
   1. cards in a row had different heights, leaving a ragged bottom edge
   2. a five-card row left an orphan hanging left in a three-column grid
   3. the step sequence needed a number, not a repeated icon (the theme
      only ships four flaticons) */
.ax-grid > [class*="col-"] { display: flex; }
.ax-grid > [class*="col-"] > .icon-box,
.ax-grid > [class*="col-"] > .tm-sc-testimonials {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.ax-grid .icon-text { flex: 1 1 auto; }
.ax-grid .testimonial-text-holder { height: 100%; display: flex; flex-direction: column; }
.ax-grid .testimonial-text-holder .wrapper { margin-top: auto; }

.ax-step-num {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: #0795fe;
  color: #fff;
  font-family: 'Mulish', sans-serif;
  font-weight: 800;
  font-size: 19px;
  line-height: 46px;
  text-align: center;
  margin-bottom: 16px;
}
.ax-card { transition: box-shadow .25s ease, transform .25s ease; }
.ax-card:hover { box-shadow: 0 12px 30px rgba(9, 42, 73, .10); }

@media (max-width: 767px) {
  .ax-step-num { width: 40px; height: 40px; line-height: 40px; font-size: 17px; }
}
</style>

<!--==================== Breadcrumb Section Start Here ====================-->
<section class="page-title divider layer-overlay overlay-theme-colored2-8 section-typo-light bg-img-center" data-tm-bg-img="images/bg/bg7.jpg">
    <div class="container pt-90 pb-90">
        <div class="section-content">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h1 class="title text-white"><?=$heading;?></h1>
                    <nav role="navigation" class="breadcrumb-trail breadcrumbs">
                        <div class="breadcrumbs">
                            <span class="trail-item trail-begin"><a href="<?=BASE_URL;?>"><span>Home</span></a></span>
                            <span><i class="fa fa-angle-right"></i></span>
                            <span class="trail-item trail-end text-theme-colored1"><?=$heading;?></span>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</section>
<!--==================== Breadcrumb Section End Here ====================-->

<section>
    <div class="container pt-80 pb-20">
        <div class="section-content">
            <div class="row">
                <div class="col-lg-12 col-xl-12">
                    <div class="about-box-contents">
                        <div class="destails">
                            <h6 class="subtitle">Digital Solutions</h6>
                            <h2 class="title">${esc(C.home.heroTitle)}</h2>
                            <h5>${esc(C.home.heroText)}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container-fluid pt-20 pb-10">
        <div class="section-content">
            <div class="row">
                <div class="col-md-12 pt-20">
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
${pills}
                    </ul>
                    <hr>
                </div>
            </div>
        </div>
    </div>
</section>

<!--=============== How We Help Start Here ===============-->
<section>
    <div class="container pt-20 pb-40">
        <div class="section-title">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="tm-sc-section-title section-title text-center">
                        <div class="title-wrapper">
                            <h6 class="subtitle text-theme-colored1">${esc(C.home.servicesEyebrow)}</h6>
                            <h2 class="title text-theme-colored2">${esc(C.home.servicesTitle)}</h2>
                            <p>${esc(C.home.servicesText)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-content">
            <div class="about-style-current-theme">
                <div class="row ax-grid justify-content-center">
${overviewCards}
                </div>
            </div>
        </div>
    </div>
</section>
<!--=============== How We Help End Here ===============-->

${body}

<!--=============== Why It Matters Start Here ===============-->
<section class="bg-img-no-repeat bg-img-cover layer-overlay overlay-theme-colored2-9" data-tm-bg-img="images/bg/bg1.jpg">
    <div class="container">
        <div class="section-content">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="agency-wrapper statistics-content mt--0 pl--0">
                        <h6 class="subtitle text-theme-colored1">${esc(C.home.whyEyebrow)}</h6>
                        <h2 class="title">${esc(C.home.whyTitle)}</h2>
                        <p data-tm-text-color="#9bb6d0">${esc(C.home.whyText)}</p>
                        <div class="tm-sc-unordered-list list-style1">
                            <ul>
${whyPoints}
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="about-box text-center">
                        <div class="thumb"> <img src="images/about/2.jpg" class="img-thumbnail" alt="Axiotrix Digital Solutions"> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="bg1">
    <div class="container pt-60 pb-40">
        <div class="section-content">
            <div class="about-style-current-theme">
                <div class="row ax-grid">
${trustTiles}
                </div>
            </div>
        </div>
    </div>
</section>
<!--=============== Why It Matters End Here ===============-->

<!--=============== Testimonials Start Here ===============-->
<section>
    <div class="container pt-60 pb-40">
        <div class="section-title">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="tm-sc-section-title section-title text-center">
                        <div class="title-wrapper">
                            <h6 class="subtitle text-theme-colored1">What clients say</h6>
                            <h2 class="title text-theme-colored2">Results, in their words</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-content">
            <div class="row ax-grid">
${testimonialItems}
            </div>
        </div>
    </div>
</section>
<!--=============== Testimonials End Here ===============-->

<!--=============== FAQ Start Here ===============-->
<section class="bg1">
    <div class="container pt-60 pb-60">
        <div class="section-title">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="tm-sc-section-title section-title text-center">
                        <div class="title-wrapper">
                            <h6 class="subtitle text-theme-colored1">Questions</h6>
                            <h2 class="title text-theme-colored2">Before you get in touch</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-content">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="accordion accordion-classic" id="axFaq">
${faqItems}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--=============== FAQ End Here ===============-->

<!--=============== Let's Connect Start Here ===============-->
<section id="connect" class="border-bottom">
    <div class="container pt-20 pb-40">
        <div class="section-content">
            <div class="row">
                <div class="col-xl-12">
                    <div class="about-box-contents">
                        <div class="destails">
                            <h3 class="title">${esc(C.submit.title)}</h3>
                            <p>${esc(C.submit.text)}</p>
                            <a href="contactus" class="btn btn-theme-colored1 btn-flat btn-cp-effect text-uppercase"> Get Started  &#10230;</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="tm-floating-objects">
        <span class="tm-animation-spin-half z-index--1" data-tm-bg-img="images/floating-objects/ob7.png" data-tm-width="220" data-tm-height="219" data-tm-top="6%" data-tm-bottom="auto" data-tm-left="5%" data-tm-right="auto" data-tm-opacity="-100px"></span>
    </div>
</section>
<!--=============== Let's Connect End Here ===============-->

<? } ?>
`;

/* The site uses PHP short tags, so a stray "<?" coming from the content
   data would be executed. The template's own <?= tags are intentional,
   so check the content source rather than the assembled file. */
const contentStrings = JSON.stringify(C);
if (contentStrings.includes('<?')) {
  console.error('ABORT: content.js contains "<?", which PHP short tags would execute.');
  process.exit(1);
}

fs.writeFileSync(path.join(OUT, 'digital-solutions.php'), php);
console.log('Built: dist/digital-solutions.php  (' + Math.round(php.length / 1024) + ' KB)');
console.log('Sections: ' + C.services.length + ' services, theme-native markup, no custom CSS.');
