<? include("template.php");
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
                            <h2 class="title">Your customers are searching. We make sure they find you.</h2>
                            <h5>Alongside our existing services, Axiotrix now builds the digital side of your business: the website that brings enquiries in, and the tools and automations that handle them for you.</h5>
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
                        <li class="nav-item"><a class="nav-link" href="#website-creation">Get found online</a></li>
                        <li class="nav-item"><a class="nav-link" href="#tool-development">Custom tools</a></li>
                        <li class="nav-item"><a class="nav-link" href="#reports">Know your numbers</a></li>
                        <li class="nav-item"><a class="nav-link" href="#automation">Automatic follow-ups</a></li>
                        <li class="nav-item"><a class="nav-link" href="#whatsapp-integration">Messaging and WhatsApp</a></li>
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
                            <h6 class="subtitle text-theme-colored1">How we help</h6>
                            <h2 class="title text-theme-colored2">Five things we can set up for your business</h2>
                            <p>Start with the one you need most. Each one fixes a real, everyday problem.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-content">
            <div class="about-style-current-theme">
                <div class="row ax-grid justify-content-center">
                    <div class="col-md-6 col-lg-4">
                        <div class="icon-box iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate mb-30 p-20 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="icon-wrapper">
                                <a class="icon icon-dark icon-lg icon-rounded mb-2" href="#website-creation"> <i class="flaticon-business-002-graph"></i> </a>
                                <h5 class="icon-box-title">Get found online</h5>
                            </div>
                            <div class="icon-text">
                                <div class="content">
                                    <p>People search online before they choose who to buy from. We build a fast, clear site that shows up in that search, reads as credible, and makes it one click to enquire, book or buy. If you sell products, we can set up a webstore that fits the way you already take orders.</p>
                                    <p><b>Impact:</b> People who never knew about you start calling, enquiring and ordering.</p>
                                    <a class="text-theme-colored1" href="#website-creation"><b>See the use cases &#10230;</b></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="icon-box iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate mb-30 p-20 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="icon-wrapper">
                                <a class="icon icon-dark icon-lg icon-rounded mb-2" href="#tool-development"> <i class="flaticon-business-013-idea"></i> </a>
                                <h5 class="icon-box-title">Custom tools</h5>
                            </div>
                            <div class="icon-text">
                                <div class="content">
                                    <p>Estimates, customer records, status tracking: if your team does it by hand every day, we can build a simple tool that does it for them. Where it genuinely helps, we add AI to the tool, so it reads, sorts and drafts the repetitive parts instead of your team doing it.</p>
                                    <p><b>Impact:</b> Work that used to fill an afternoon now takes minutes, and nothing gets missed.</p>
                                    <a class="text-theme-colored1" href="#tool-development"><b>See the use cases &#10230;</b></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="icon-box iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate mb-30 p-20 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="icon-wrapper">
                                <a class="icon icon-dark icon-lg icon-rounded mb-2" href="#reports"> <i class="flaticon-business-016-world"></i> </a>
                                <h5 class="icon-box-title">Know your numbers</h5>
                            </div>
                            <div class="icon-text">
                                <div class="content">
                                    <p>Revenue, orders, outstanding payments, where your best customers come from: one simple screen, updated automatically. No spreadsheet wrangling, no month-end surprises.</p>
                                    <p><b>Impact:</b> You catch problems the same week they start, not at month end when it is too late.</p>
                                    <a class="text-theme-colored1" href="#reports"><b>See the use cases &#10230;</b></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="icon-box iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate mb-30 p-20 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="icon-wrapper">
                                <a class="icon icon-dark icon-lg icon-rounded mb-2" href="#automation"> <i class="flaticon-business-035-helpline"></i> </a>
                                <h5 class="icon-box-title">Automatic follow-ups</h5>
                            </div>
                            <div class="icon-text">
                                <div class="content">
                                    <p>Acknowledgements, payment reminders, appointment and renewal alerts: set them once, and they go out at the right time to the right person. Nobody has to remember.</p>
                                    <p><b>Impact:</b> Customers stop slipping away just because the team had a busy week.</p>
                                    <a class="text-theme-colored1" href="#automation"><b>See the use cases &#10230;</b></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="icon-box iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate mb-30 p-20 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="icon-wrapper">
                                <a class="icon icon-dark icon-lg icon-rounded mb-2" href="#whatsapp-integration"> <i class="flaticon-business-002-graph"></i> </a>
                                <h5 class="icon-box-title">Messaging and WhatsApp</h5>
                            </div>
                            <div class="icon-text">
                                <div class="content">
                                    <p>Customers text and message more than they call. We set up WhatsApp and SMS properly: one-tap contact buttons, instant replies to common questions, and every conversation logged where your team can see it.</p>
                                    <p><b>Impact:</b> Reaching you takes one tap, and no message goes unanswered, even after hours.</p>
                                    <a class="text-theme-colored1" href="#whatsapp-integration"><b>See the use cases &#10230;</b></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--=============== How We Help End Here ===============-->

<!--=============== Get found online Start Here ===============-->
<section id="website-creation" class="our-about">
    <div class="container pt-sm-20 pt-md-40">
        <div class="section-content">
            <div class="row">
                <div class="col-xl-6">
                    <div class="about-box text-center">
                        <div class="thumb"> <img src="images/about/1.jpg" class="img-thumbnail" alt="Get found online"> </div>
                        <div class="help-details text-start">
                            <div class="icon"><img src="images/icon/4.png" alt=""></div>
                            <div class="content">
                                <h5 class="hd-subtitle">Get Expert Consultation</h5>
                                <p class="hd-title">Ready to help <a class="text-theme-colored1" href="tel:+18664220499"><b>+1 866-422-0499</b></a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="about-box-contents">
                        <div class="destails">
                            <h2 class="title">When customers search, they should find you</h2>
                            <p>People search online before they choose who to buy from. We build a fast, clear site that shows up in that search, reads as credible, and makes it one click to enquire, book or buy. If you sell products, we can set up a webstore that fits the way you already take orders.</p>
                            <p>Right now, someone is searching for exactly what you offer. If you are hard to find, they buy from the business that was easier to find, and you never know it happened.</p>
                            <p><b>The impact: People who never knew about you start calling, enquiring and ordering.</b></p>
                            <p><b>What you get</b></p>
                            <div class="tm-sc-unordered-list list-style1">
                                <ul>
                                    <li>Mobile-first design tuned to your brand</li>
                                    <li>Copywriting built around one clear action</li>
                                    <li>Contact and enquiry forms routed to the right inbox</li>
                                    <li>Webstore setup with payments, delivery and stock, if you sell products</li>
                                    <li>Google-ready structure, speed and basic SEO</li>
                                    <li>You own the code and can update it yourself</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="tm-floating-objects"> <span class="tm-animation-floating z-index--1" data-tm-bg-img="images/floating-objects/ob1.png" data-tm-width="459" data-tm-height="523" data-tm-top="0" data-tm-bottom="auto" data-tm-left="0" data-tm-right="auto" data-tm-opacity="-100px"></span> <span class="tm-animation-floating z-index--1" data-tm-bg-img="images/floating-objects/ob2.png" data-tm-width="624" data-tm-height="1094" data-tm-top="100" data-tm-bottom="auto" data-tm-left="auto" data-tm-right="0" data-tm-opacity="1"></span> </div>
</section>
<section class="bg-img-no-repeat bg-img-cover layer-overlay overlay-theme-colored2-9" data-tm-bg-img="images/bg/bg1.jpg">
    <div class="container">
        <div class="section-content">
            <div class="wrapper">
                <div class="row">
                    <div class="col-lg-12 col-xl-12">
                        <div class="agency-wrapper statistics-content mt--0 pl--0">
                            <h2 class="title">Where this makes a difference</h2>
                            <div class="tm-sc-icon-box icon-box icon-left text-start iconbox-centered-in-responsive iconbox-theme-colored1 icon-position-icon-left pb-20 mb-20 border-bottom-light">
                                <div class="icon-box-wrapper">
                                    <a class="icon icon-type-font-icon mt-10 me-4"> <img src="images/icon/10.png" alt=""> </a>
                                    <div class="icon-text">
                                        <h5 class="icon-box-title text-white mt-0">The business customers cannot find</h5>
                                        <div class="content">
                                            <p data-tm-text-color="#9bb6d0">A local business relying on word of mouth gets a fast, clear site with services, pricing guidance and a contact button, so a search turns into a real enquiry.</p>
                                            <p data-tm-text-color="#9bb6d0"><b>Impact:</b> New customers start finding you directly, instead of ending up with the competitor down the road.</p>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                            <div class="tm-sc-icon-box icon-box icon-left text-start iconbox-centered-in-responsive iconbox-theme-colored1 icon-position-icon-left pb-20 mb-20 border-bottom-light">
                                <div class="icon-box-wrapper">
                                    <a class="icon icon-type-font-icon mt-10 me-4"> <img src="images/icon/11.png" alt=""> </a>
                                    <div class="icon-text">
                                        <h5 class="icon-box-title text-white mt-0">The business ready to sell online</h5>
                                        <div class="content">
                                            <p data-tm-text-color="#9bb6d0">We set up a webstore for your products that follows your existing process: your pricing rules, your delivery areas, your payment methods and your stock, so orders arrive the way your team already handles them.</p>
                                            <p data-tm-text-color="#9bb6d0"><b>Impact:</b> You open a second sales channel without changing how the business runs behind the counter.</p>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                            <div class="tm-sc-icon-box icon-box icon-left text-start iconbox-centered-in-responsive iconbox-theme-colored1 icon-position-icon-left pb-20 mb-20 border-bottom-light">
                                <div class="icon-box-wrapper">
                                    <a class="icon icon-type-font-icon mt-10 me-4"> <img src="images/icon/9.png" alt=""> </a>
                                    <div class="icon-text">
                                        <h5 class="icon-box-title text-white mt-0">The company losing enquiries</h5>
                                        <div class="content">
                                            <p data-tm-text-color="#9bb6d0">A firm whose leads arrive through phone tag and scattered emails gets a site with a clear offer and an enquiry form that routes straight to the right person.</p>
                                            <p data-tm-text-color="#9bb6d0"><b>Impact:</b> Every enquiry is captured and answered, so more of the same traffic turns into signed customers.</p>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                            <div class="tm-sc-icon-box icon-box icon-left text-start iconbox-centered-in-responsive iconbox-theme-colored1 icon-position-icon-left pb-20 mb-20 border-bottom-light">
                                <div class="icon-box-wrapper">
                                    <a class="icon icon-type-font-icon mt-10 me-4"> <img src="images/icon/12.png" alt=""> </a>
                                    <div class="icon-text">
                                        <h5 class="icon-box-title text-white mt-0">The established business with a dated site</h5>
                                        <div class="content">
                                            <p data-tm-text-color="#9bb6d0">A business whose site was built years ago gets a rebuild that loads fast, reads well on a phone, and looks as credible as the work they actually do.</p>
                                            <p data-tm-text-color="#9bb6d0"><b>Impact:</b> Trust is set in the first five seconds, so prospects arrive at the call already taking you seriously.</p>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--=============== Get found online End Here ===============-->
<section class="bg1">
    <div class="container pt-40 pb-40">
        <div class="section-title">
            <div class="row">
                <div class="col-lg-12">
                    <div class="tm-sc-section-title section-title">
                        <div class="title-wrapper">
                            <h3 class="title">How we deliver: Get found online</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-content">
            <div class="about-style-current-theme">
                <div class="row ax-grid justify-content-center">
                    <div class="col-md-6 col-lg-4">
                        <div class="icon-box iconbox-theme-colored1 mb-30 p-30 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="ax-step-num">1</div>
                            <h5 class="icon-box-title mt-0">Discovery</h5>
                            <div class="icon-text">
                                <div class="content">
                                    <p>A short call to understand your business, your ideal client, and the one thing the site must do.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="icon-box iconbox-theme-colored1 mb-30 p-30 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="ax-step-num">2</div>
                            <h5 class="icon-box-title mt-0">Design draft</h5>
                            <div class="icon-text">
                                <div class="content">
                                    <p>We send a working draft in days. You react, we refine.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="icon-box iconbox-theme-colored1 mb-30 p-30 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="ax-step-num">3</div>
                            <h5 class="icon-box-title mt-0">Build and launch</h5>
                            <div class="icon-text">
                                <div class="content">
                                    <p>We connect your domain, forms and analytics, then go live.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="icon-box iconbox-theme-colored1 mb-30 p-30 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="ax-step-num">4</div>
                            <h5 class="icon-box-title mt-0">Handover</h5>
                            <div class="icon-text">
                                <div class="content">
                                    <p>You get the keys, a walkthrough, and a simple way to edit content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!--=============== Custom tools Start Here ===============-->
<section id="tool-development" class="our-about">
    <div class="container pt-sm-20 pt-md-40">
        <div class="section-content">
            <div class="row">
                <div class="col-xl-6">
                    <div class="about-box-contents">
                        <div class="destails">
                            <h2 class="title">Stop doing the same work again and again</h2>
                            <p>Estimates, customer records, status tracking: if your team does it by hand every day, we can build a simple tool that does it for them. Where it genuinely helps, we add AI to the tool, so it reads, sorts and drafts the repetitive parts instead of your team doing it.</p>
                            <p>Hours disappear into spreadsheets, re-typing and chasing status. That is time your team could spend on customers. A small tool built around your exact workflow takes it off their plate.</p>
                            <p><b>The impact: Work that used to fill an afternoon now takes minutes, and nothing gets missed.</b></p>
                            <p><b>What you get</b></p>
                            <div class="tm-sc-unordered-list list-style1">
                                <ul>
                                    <li>A tool scoped to your exact workflow</li>
                                    <li>AI built in where it earns its keep, not for the sake of it</li>
                                    <li>Works on phone and desktop</li>
                                    <li>Connects to the systems you already use</li>
                                    <li>Clean, simple interface anyone can use</li>
                                    <li>Yours to keep and grow over time</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="about-box text-center">
                        <div class="thumb"> <img src="images/health-ser/2.jpg" class="img-thumbnail" alt="Custom tools"> </div>
                        <div class="help-details text-start">
                            <div class="icon"><img src="images/icon/4.png" alt=""></div>
                            <div class="content">
                                <h5 class="hd-subtitle">Get Expert Consultation</h5>
                                <p class="hd-title">Ready to help <a class="text-theme-colored1" href="tel:+18664220499"><b>+1 866-422-0499</b></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="tm-floating-objects"> <span class="tm-animation-floating z-index--1" data-tm-bg-img="images/floating-objects/ob8.png" data-tm-width="807" data-tm-height="939" data-tm-top="-200px" data-tm-bottom="auto" data-tm-left="auto" data-tm-right="-200px" data-tm-opacity="1"></span> </div>
</section>
<section class="bg1">
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
                    <div class="col-md-6 col-xl-3">
                        <div class="icon-box iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate mb-30 p-20 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="icon-wrapper">
                                <a class="icon icon-dark icon-lg icon-rounded mb-2" href="#tool-development"> <i class="flaticon-business-002-graph"></i> </a>
                                <h5 class="icon-box-title">The instant quote or estimate tool</h5>
                            </div>
                            <div class="icon-text">
                                <div class="content">
                                    <p>A service business lets customers pick what they need and see an accurate price right away, then emails the estimate as a branded PDF, with no back-and-forth.</p>
                                    <p><b>Impact:</b> Estimates go out in minutes instead of days, so customers decide while their interest is still high.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-3">
                        <div class="icon-box iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate mb-30 p-20 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="icon-wrapper">
                                <a class="icon icon-dark icon-lg icon-rounded mb-2" href="#tool-development"> <i class="flaticon-business-013-idea"></i> </a>
                                <h5 class="icon-box-title">The internal tracker that replaces the spreadsheet</h5>
                            </div>
                            <div class="icon-text">
                                <div class="content">
                                    <p>Your team tracks jobs, follow-ups and outstanding balances in one shared screen instead of a spreadsheet only one person understands.</p>
                                    <p><b>Impact:</b> Outstanding balances actually get chased and nothing depends on one person's memory or their laptop.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-3">
                        <div class="icon-box iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate mb-30 p-20 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="icon-wrapper">
                                <a class="icon icon-dark icon-lg icon-rounded mb-2" href="#tool-development"> <i class="flaticon-business-016-world"></i> </a>
                                <h5 class="icon-box-title">The AI assistant built into your workflow</h5>
                            </div>
                            <div class="icon-text">
                                <div class="content">
                                    <p>AI handles the reading and typing nobody enjoys: sorting incoming enquiries, pulling details out of documents, drafting replies and summarising long threads. It sits inside the tool your team already opens, so there is nothing new to learn.</p>
                                    <p><b>Impact:</b> Your team adopts it without training, because it fits the process they already follow instead of replacing it.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-3">
                        <div class="icon-box iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate mb-30 p-20 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="icon-wrapper">
                                <a class="icon icon-dark icon-lg icon-rounded mb-2" href="#tool-development"> <i class="flaticon-business-035-helpline"></i> </a>
                                <h5 class="icon-box-title">The customer-facing portal</h5>
                            </div>
                            <div class="icon-text">
                                <div class="content">
                                    <p>Customers get a simple screen to check status, upload what you need or update their details, instead of emailing your team for every small thing.</p>
                                    <p><b>Impact:</b> Routine status calls and document chasing drop sharply, without adding headcount.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--=============== Custom tools End Here ===============-->
<section class="bg1">
    <div class="container pt-40 pb-40">
        <div class="section-title">
            <div class="row">
                <div class="col-lg-12">
                    <div class="tm-sc-section-title section-title">
                        <div class="title-wrapper">
                            <h3 class="title">How we deliver: Custom tools</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-content">
            <div class="about-style-current-theme">
                <div class="row ax-grid justify-content-center">
                    <div class="col-md-6 col-lg-4">
                        <div class="icon-box iconbox-theme-colored1 mb-30 p-30 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="ax-step-num">1</div>
                            <h5 class="icon-box-title mt-0">Map the workflow</h5>
                            <div class="icon-text">
                                <div class="content">
                                    <p>We watch how you do it today and find the slow, repetitive parts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="icon-box iconbox-theme-colored1 mb-30 p-30 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="ax-step-num">2</div>
                            <h5 class="icon-box-title mt-0">Pick the right approach</h5>
                            <div class="icon-text">
                                <div class="content">
                                    <p>We decide where plain automation is enough and where AI genuinely pays for itself, so you are not buying technology you do not need.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="icon-box iconbox-theme-colored1 mb-30 p-30 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="ax-step-num">3</div>
                            <h5 class="icon-box-title mt-0">Prototype</h5>
                            <div class="icon-text">
                                <div class="content">
                                    <p>A clickable version so you feel it before we build the full thing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="icon-box iconbox-theme-colored1 mb-30 p-30 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="ax-step-num">4</div>
                            <h5 class="icon-box-title mt-0">Build and test</h5>
                            <div class="icon-text">
                                <div class="content">
                                    <p>We build it, load your real data, and fix what feels off.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="icon-box iconbox-theme-colored1 mb-30 p-30 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="ax-step-num">5</div>
                            <h5 class="icon-box-title mt-0">Roll out</h5>
                            <div class="icon-text">
                                <div class="content">
                                    <p>We train your team and stay on hand for the first weeks.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!--=============== Know your numbers Start Here ===============-->
<section id="reports" class="our-about">
    <div class="container pt-sm-20 pt-md-40">
        <div class="section-content">
            <div class="row">
                <div class="col-xl-6">
                    <div class="about-box text-center">
                        <div class="thumb"> <img src="images/health-ser/3.jpg" class="img-thumbnail" alt="Know your numbers"> </div>
                        <div class="help-details text-start">
                            <div class="icon"><img src="images/icon/4.png" alt=""></div>
                            <div class="content">
                                <h5 class="hd-subtitle">Get Expert Consultation</h5>
                                <p class="hd-title">Ready to help <a class="text-theme-colored1" href="tel:+18664220499"><b>+1 866-422-0499</b></a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="about-box-contents">
                        <div class="destails">
                            <h2 class="title">Know exactly how the business is doing, today</h2>
                            <p>Revenue, orders, outstanding payments, where your best customers come from: one simple screen, updated automatically. No spreadsheet wrangling, no month-end surprises.</p>
                            <p>The real numbers only surface at month end, once nothing can be changed. Your revenue moves every day, so you should be able to see it every day.</p>
                            <p><b>The impact: You catch problems the same week they start, not at month end when it is too late.</b></p>
                            <p><b>What you get</b></p>
                            <div class="tm-sc-unordered-list list-style1">
                                <ul>
                                    <li>One live dashboard, always up to date</li>
                                    <li>Pulls from your sheets, database and tools</li>
                                    <li>The three or four numbers that actually matter</li>
                                    <li>Auto-generated PDF reports on a schedule</li>
                                    <li>Shareable link for your team or investors</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="tm-floating-objects"> <span class="tm-animation-floating z-index--1" data-tm-bg-img="images/floating-objects/ob1.png" data-tm-width="459" data-tm-height="523" data-tm-top="0" data-tm-bottom="auto" data-tm-left="0" data-tm-right="auto" data-tm-opacity="-100px"></span> <span class="tm-animation-floating z-index--1" data-tm-bg-img="images/floating-objects/ob2.png" data-tm-width="624" data-tm-height="1094" data-tm-top="100" data-tm-bottom="auto" data-tm-left="auto" data-tm-right="0" data-tm-opacity="1"></span> </div>
</section>
<section class="bg-img-no-repeat bg-img-cover layer-overlay overlay-theme-colored2-9" data-tm-bg-img="images/bg/bg1.jpg">
    <div class="container">
        <div class="section-content">
            <div class="wrapper">
                <div class="row">
                    <div class="col-lg-12 col-xl-12">
                        <div class="agency-wrapper statistics-content mt--0 pl--0">
                            <h2 class="title">Where this makes a difference</h2>
                            <div class="tm-sc-icon-box icon-box icon-left text-start iconbox-centered-in-responsive iconbox-theme-colored1 icon-position-icon-left pb-20 mb-20 border-bottom-light">
                                <div class="icon-box-wrapper">
                                    <a class="icon icon-type-font-icon mt-10 me-4"> <img src="images/icon/10.png" alt=""> </a>
                                    <div class="icon-text">
                                        <h5 class="icon-box-title text-white mt-0">The daily business snapshot</h5>
                                        <div class="content">
                                            <p data-tm-text-color="#9bb6d0">An owner opens one link each morning and sees yesterday's sales, new enquiries, cancellations and unpaid invoices, without waiting for a report to be built.</p>
                                            <p data-tm-text-color="#9bb6d0"><b>Impact:</b> A bad week is spotted while it can still be fixed, not at month end when the damage is done.</p>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                            <div class="tm-sc-icon-box icon-box icon-left text-start iconbox-centered-in-responsive iconbox-theme-colored1 icon-position-icon-left pb-20 mb-20 border-bottom-light">
                                <div class="icon-box-wrapper">
                                    <a class="icon icon-type-font-icon mt-10 me-4"> <img src="images/icon/11.png" alt=""> </a>
                                    <div class="icon-text">
                                        <h5 class="icon-box-title text-white mt-0">The lender or partner report</h5>
                                        <div class="content">
                                            <p data-tm-text-color="#9bb6d0">A business preparing for a loan, an audit or a partner review gets a clean, credible summary of performance, generated on demand.</p>
                                            <p data-tm-text-color="#9bb6d0"><b>Impact:</b> The conversation moves faster because the numbers look professional and hold up to questions.</p>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                            <div class="tm-sc-icon-box icon-box icon-left text-start iconbox-centered-in-responsive iconbox-theme-colored1 icon-position-icon-left pb-20 mb-20 border-bottom-light">
                                <div class="icon-box-wrapper">
                                    <a class="icon icon-type-font-icon mt-10 me-4"> <img src="images/icon/9.png" alt=""> </a>
                                    <div class="icon-text">
                                        <h5 class="icon-box-title text-white mt-0">The marketing scorecard</h5>
                                        <div class="content">
                                            <p data-tm-text-color="#9bb6d0">You see which channel actually produced paying customers, not just clicks, so the next dollar goes where it works.</p>
                                            <p data-tm-text-color="#9bb6d0"><b>Impact:</b> Spend shifts to what converts, and the quiet budget leak stops.</p>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--=============== Know your numbers End Here ===============-->
<section class="bg1">
    <div class="container pt-40 pb-40">
        <div class="section-title">
            <div class="row">
                <div class="col-lg-12">
                    <div class="tm-sc-section-title section-title">
                        <div class="title-wrapper">
                            <h3 class="title">How we deliver: Know your numbers</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-content">
            <div class="about-style-current-theme">
                <div class="row ax-grid justify-content-center">
                    <div class="col-md-6 col-lg-4">
                        <div class="icon-box iconbox-theme-colored1 mb-30 p-30 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="ax-step-num">1</div>
                            <h5 class="icon-box-title mt-0">Pick the metrics</h5>
                            <div class="icon-text">
                                <div class="content">
                                    <p>We agree on the handful of numbers that drive your decisions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="icon-box iconbox-theme-colored1 mb-30 p-30 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="ax-step-num">2</div>
                            <h5 class="icon-box-title mt-0">Connect sources</h5>
                            <div class="icon-text">
                                <div class="content">
                                    <p>We plug in your data wherever it already lives.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="icon-box iconbox-theme-colored1 mb-30 p-30 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="ax-step-num">3</div>
                            <h5 class="icon-box-title mt-0">Design the view</h5>
                            <div class="icon-text">
                                <div class="content">
                                    <p>A clean layout that answers your questions at a glance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="icon-box iconbox-theme-colored1 mb-30 p-30 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="ax-step-num">4</div>
                            <h5 class="icon-box-title mt-0">Automate delivery</h5>
                            <div class="icon-text">
                                <div class="content">
                                    <p>Reports refresh and arrive on schedule, no manual work.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!--=============== Automatic follow-ups Start Here ===============-->
<section id="automation" class="our-about">
    <div class="container pt-sm-20 pt-md-40">
        <div class="section-content">
            <div class="row">
                <div class="col-xl-6">
                    <div class="about-box-contents">
                        <div class="destails">
                            <h2 class="title">Never forget a follow-up again</h2>
                            <p>Acknowledgements, payment reminders, appointment and renewal alerts: set them once, and they go out at the right time to the right person. Nobody has to remember.</p>
                            <p>Someone meant to follow up, but the day got busy and it slipped. It happens every week, and every time it does, you lose business you had already earned.</p>
                            <p><b>The impact: Customers stop slipping away just because the team had a busy week.</b></p>
                            <p><b>What you get</b></p>
                            <div class="tm-sc-unordered-list list-style1">
                                <ul>
                                    <li>Trigger-based flows mapped to your business</li>
                                    <li>Runs over email, SMS or WhatsApp</li>
                                    <li>Smart timing and stop rules, no spam</li>
                                    <li>Connects your forms, tools and sheets</li>
                                    <li>A dashboard to watch it working</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="about-box text-center">
                        <div class="thumb"> <img src="images/health-ser/6.jpg" class="img-thumbnail" alt="Automatic follow-ups"> </div>
                        <div class="help-details text-start">
                            <div class="icon"><img src="images/icon/4.png" alt=""></div>
                            <div class="content">
                                <h5 class="hd-subtitle">Get Expert Consultation</h5>
                                <p class="hd-title">Ready to help <a class="text-theme-colored1" href="tel:+18664220499"><b>+1 866-422-0499</b></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="tm-floating-objects"> <span class="tm-animation-floating z-index--1" data-tm-bg-img="images/floating-objects/ob8.png" data-tm-width="807" data-tm-height="939" data-tm-top="-200px" data-tm-bottom="auto" data-tm-left="auto" data-tm-right="-200px" data-tm-opacity="1"></span> </div>
</section>
<section class="bg1">
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
                    <div class="col-md-6 col-xl-3">
                        <div class="icon-box iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate mb-30 p-20 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="icon-wrapper">
                                <a class="icon icon-dark icon-lg icon-rounded mb-2" href="#automation"> <i class="flaticon-business-002-graph"></i> </a>
                                <h5 class="icon-box-title">The follow-up that never gets forgotten</h5>
                            </div>
                            <div class="icon-text">
                                <div class="content">
                                    <p>A new enquiry automatically gets an acknowledgement, a reminder after two days, and a further nudge after a week, until they respond.</p>
                                    <p><b>Impact:</b> Most business comes from the second or third touch nobody was making; those touches now happen on their own.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-3">
                        <div class="icon-box iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate mb-30 p-20 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="icon-wrapper">
                                <a class="icon icon-dark icon-lg icon-rounded mb-2" href="#automation"> <i class="flaticon-business-013-idea"></i> </a>
                                <h5 class="icon-box-title">The appointment and renewal reminder</h5>
                            </div>
                            <div class="icon-text">
                                <div class="content">
                                    <p>Customers are reminded before a booking, a renewal or a payment date, without anyone working through a list by hand.</p>
                                    <p><b>Impact:</b> No-shows and lapsed renewals drop, and it costs nothing extra each month to keep it that way.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-3">
                        <div class="icon-box iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate mb-30 p-20 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="icon-wrapper">
                                <a class="icon icon-dark icon-lg icon-rounded mb-2" href="#automation"> <i class="flaticon-business-016-world"></i> </a>
                                <h5 class="icon-box-title">The behind-the-scenes hand-off</h5>
                            </div>
                            <div class="icon-text">
                                <div class="content">
                                    <p>A new enquiry form automatically creates the record, alerts the right team member, and confirms receipt with the customer, all in the same moment.</p>
                                    <p><b>Impact:</b> Nothing waits in someone's inbox, and no step depends on a person remembering to pass it along.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--=============== Automatic follow-ups End Here ===============-->
<section class="bg1">
    <div class="container pt-40 pb-40">
        <div class="section-title">
            <div class="row">
                <div class="col-lg-12">
                    <div class="tm-sc-section-title section-title">
                        <div class="title-wrapper">
                            <h3 class="title">How we deliver: Automatic follow-ups</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-content">
            <div class="about-style-current-theme">
                <div class="row ax-grid justify-content-center">
                    <div class="col-md-6 col-lg-4">
                        <div class="icon-box iconbox-theme-colored1 mb-30 p-30 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="ax-step-num">1</div>
                            <h5 class="icon-box-title mt-0">Find the leaks</h5>
                            <div class="icon-text">
                                <div class="content">
                                    <p>We spot where enquiries, renewals and tasks slip through today.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="icon-box iconbox-theme-colored1 mb-30 p-30 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="ax-step-num">2</div>
                            <h5 class="icon-box-title mt-0">Design the flow</h5>
                            <div class="icon-text">
                                <div class="content">
                                    <p>We map each trigger, message and timing rule with you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="icon-box iconbox-theme-colored1 mb-30 p-30 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="ax-step-num">3</div>
                            <h5 class="icon-box-title mt-0">Build and connect</h5>
                            <div class="icon-text">
                                <div class="content">
                                    <p>We wire it to your tools and test with real cases.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="icon-box iconbox-theme-colored1 mb-30 p-30 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="ax-step-num">4</div>
                            <h5 class="icon-box-title mt-0">Watch and tune</h5>
                            <div class="icon-text">
                                <div class="content">
                                    <p>We monitor the first runs and tighten what needs it.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!--=============== Messaging and WhatsApp Start Here ===============-->
<section id="whatsapp-integration" class="our-about">
    <div class="container pt-sm-20 pt-md-40">
        <div class="section-content">
            <div class="row">
                <div class="col-xl-6">
                    <div class="about-box text-center">
                        <div class="thumb"> <img src="images/about/3.jpg" class="img-thumbnail" alt="Messaging and WhatsApp"> </div>
                        <div class="help-details text-start">
                            <div class="icon"><img src="images/icon/4.png" alt=""></div>
                            <div class="content">
                                <h5 class="hd-subtitle">Get Expert Consultation</h5>
                                <p class="hd-title">Ready to help <a class="text-theme-colored1" href="tel:+18664220499"><b>+1 866-422-0499</b></a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="about-box-contents">
                        <div class="destails">
                            <h2 class="title">Answer every message, without anyone sitting on the phone</h2>
                            <p>Customers text and message more than they call. We set up WhatsApp and SMS properly: one-tap contact buttons, instant replies to common questions, and every conversation logged where your team can see it.</p>
                            <p>Messages arrive across text, WhatsApp and voicemail, and live on whoever's phone received them. Then one gets buried, a customer feels ignored, and nobody can tell what was promised.</p>
                            <p><b>The impact: Reaching you takes one tap, and no message goes unanswered, even after hours.</b></p>
                            <p><b>What you get</b></p>
                            <div class="tm-sc-unordered-list list-style1">
                                <ul>
                                    <li>Click-to-message buttons with pre-filled text</li>
                                    <li>Auto-replies and quick-reply menus</li>
                                    <li>Reminders and updates that follow messaging rules</li>
                                    <li>Enquiries logged automatically to your system</li>
                                    <li>Setup on the right platform for your size</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="tm-floating-objects"> <span class="tm-animation-floating z-index--1" data-tm-bg-img="images/floating-objects/ob1.png" data-tm-width="459" data-tm-height="523" data-tm-top="0" data-tm-bottom="auto" data-tm-left="0" data-tm-right="auto" data-tm-opacity="-100px"></span> <span class="tm-animation-floating z-index--1" data-tm-bg-img="images/floating-objects/ob2.png" data-tm-width="624" data-tm-height="1094" data-tm-top="100" data-tm-bottom="auto" data-tm-left="auto" data-tm-right="0" data-tm-opacity="1"></span> </div>
</section>
<section class="bg-img-no-repeat bg-img-cover layer-overlay overlay-theme-colored2-9" data-tm-bg-img="images/bg/bg1.jpg">
    <div class="container">
        <div class="section-content">
            <div class="wrapper">
                <div class="row">
                    <div class="col-lg-12 col-xl-12">
                        <div class="agency-wrapper statistics-content mt--0 pl--0">
                            <h2 class="title">Where this makes a difference</h2>
                            <div class="tm-sc-icon-box icon-box icon-left text-start iconbox-centered-in-responsive iconbox-theme-colored1 icon-position-icon-left pb-20 mb-20 border-bottom-light">
                                <div class="icon-box-wrapper">
                                    <a class="icon icon-type-font-icon mt-10 me-4"> <img src="images/icon/10.png" alt=""> </a>
                                    <div class="icon-text">
                                        <h5 class="icon-box-title text-white mt-0">The one-tap contact button</h5>
                                        <div class="content">
                                            <p data-tm-text-color="#9bb6d0">Every page and ad has a button that opens a message with the details already filled in, so reaching you takes one tap and no typing.</p>
                                            <p data-tm-text-color="#9bb6d0"><b>Impact:</b> More enquiries actually get sent, because there is no form to fill and no phone queue to sit through.</p>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                            <div class="tm-sc-icon-box icon-box icon-left text-start iconbox-centered-in-responsive iconbox-theme-colored1 icon-position-icon-left pb-20 mb-20 border-bottom-light">
                                <div class="icon-box-wrapper">
                                    <a class="icon icon-type-font-icon mt-10 me-4"> <img src="images/icon/11.png" alt=""> </a>
                                    <div class="icon-text">
                                        <h5 class="icon-box-title text-white mt-0">The instant auto-reply</h5>
                                        <div class="content">
                                            <p data-tm-text-color="#9bb6d0">After hours or when the team is busy, an automatic reply answers common questions and captures the enquiry so none go cold.</p>
                                            <p data-tm-text-color="#9bb6d0"><b>Impact:</b> No enquiry dies overnight; every one gets an answer in seconds, even when the office is closed.</p>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                            <div class="tm-sc-icon-box icon-box icon-left text-start iconbox-centered-in-responsive iconbox-theme-colored1 icon-position-icon-left pb-20 mb-20 border-bottom-light">
                                <div class="icon-box-wrapper">
                                    <a class="icon icon-type-font-icon mt-10 me-4"> <img src="images/icon/9.png" alt=""> </a>
                                    <div class="icon-text">
                                        <h5 class="icon-box-title text-white mt-0">The message-to-record link</h5>
                                        <div class="content">
                                            <p data-tm-text-color="#9bb6d0">A confirmed enquiry or booking drops straight into your system, so nothing lives only in one person's chat thread.</p>
                                            <p data-tm-text-color="#9bb6d0"><b>Impact:</b> Every conversation has a record outside the phone, so missed requests and he-said-she-said disputes fall away.</p>
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!--=============== Messaging and WhatsApp End Here ===============-->
<section class="bg1">
    <div class="container pt-40 pb-40">
        <div class="section-title">
            <div class="row">
                <div class="col-lg-12">
                    <div class="tm-sc-section-title section-title">
                        <div class="title-wrapper">
                            <h3 class="title">How we deliver: Messaging and WhatsApp</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-content">
            <div class="about-style-current-theme">
                <div class="row ax-grid justify-content-center">
                    <div class="col-md-6 col-lg-4">
                        <div class="icon-box iconbox-theme-colored1 mb-30 p-30 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="ax-step-num">1</div>
                            <h5 class="icon-box-title mt-0">Map the conversation</h5>
                            <div class="icon-text">
                                <div class="content">
                                    <p>We list the messages customers actually send you today.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="icon-box iconbox-theme-colored1 mb-30 p-30 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="ax-step-num">2</div>
                            <h5 class="icon-box-title mt-0">Choose the setup</h5>
                            <div class="icon-text">
                                <div class="content">
                                    <p>Simple click-to-message, or full Business API where you need scale.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="icon-box iconbox-theme-colored1 mb-30 p-30 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="ax-step-num">3</div>
                            <h5 class="icon-box-title mt-0">Build the flows</h5>
                            <div class="icon-text">
                                <div class="content">
                                    <p>Buttons, auto-replies and logging, wired into your systems.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="icon-box iconbox-theme-colored1 mb-30 p-30 border-radius-5 ax-card" data-tm-bg-color="#fff">
                            <div class="ax-step-num">4</div>
                            <h5 class="icon-box-title mt-0">Launch and refine</h5>
                            <div class="icon-text">
                                <div class="content">
                                    <p>We go live and tune the replies using real conversations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!--=============== Why It Matters Start Here ===============-->
<section class="bg-img-no-repeat bg-img-cover layer-overlay overlay-theme-colored2-9" data-tm-bg-img="images/bg/bg1.jpg">
    <div class="container">
        <div class="section-content">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="agency-wrapper statistics-content mt--0 pl--0">
                        <h6 class="subtitle text-theme-colored1">Why it matters</h6>
                        <h2 class="title">Your team should be serving customers, not doing repetitive admin</h2>
                        <p data-tm-text-color="#9bb6d0">Most teams lose hours every day answering the same questions, chasing paperwork and re-keying information between systems. We set up simple systems that do this work for you, so your team's time goes where it earns.</p>
                        <div class="tm-sc-unordered-list list-style1">
                            <ul>
                                    <li>We explain everything in plain words. No technical jargon.</li>
                                    <li>Built around what your customer needs to do: call, book, or enquire.</li>
                                    <li>You own everything. No lock-in, no monthly fee to keep your own website.</li>
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
                    <div class="col-sm-6 col-xl-3">
                        <div class="icon-box iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate mb-30 p-20 border-radius-5" data-tm-bg-color="#fff">
                            <div class="icon-wrapper">
                                <a class="icon icon-dark icon-lg icon-rounded mb-2" href="#connect"> <i class="flaticon-business-002-graph"></i> </a>
                                <h5 class="icon-box-title">Everything in your name</h5>
                            </div>
                            <div class="icon-text">
                                <div class="content"><p>Website, data, accounts</p></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-3">
                        <div class="icon-box iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate mb-30 p-20 border-radius-5" data-tm-bg-color="#fff">
                            <div class="icon-wrapper">
                                <a class="icon icon-dark icon-lg icon-rounded mb-2" href="#connect"> <i class="flaticon-business-013-idea"></i> </a>
                                <h5 class="icon-box-title">See a demo in 48h</h5>
                            </div>
                            <div class="icon-text">
                                <div class="content"><p>Before you pay in full</p></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-3">
                        <div class="icon-box iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate mb-30 p-20 border-radius-5" data-tm-bg-color="#fff">
                            <div class="icon-wrapper">
                                <a class="icon icon-dark icon-lg icon-rounded mb-2" href="#connect"> <i class="flaticon-business-016-world"></i> </a>
                                <h5 class="icon-box-title">Works while you rest</h5>
                            </div>
                            <div class="icon-text">
                                <div class="content"><p>Replies and reminders go out on their own</p></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-3">
                        <div class="icon-box iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate mb-30 p-20 border-radius-5" data-tm-bg-color="#fff">
                            <div class="icon-wrapper">
                                <a class="icon icon-dark icon-lg icon-rounded mb-2" href="#connect"> <i class="flaticon-business-035-helpline"></i> </a>
                                <h5 class="icon-box-title">One team for everything</h5>
                            </div>
                            <div class="icon-text">
                                <div class="content"><p>The same team you already work with</p></div>
                            </div>
                        </div>
                    </div>
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
                    <div class="col-md-6 col-xl-4">
                        <div class="tm-sc-testimonials testimonials-style-current-theme mb-30">
                            <div class="testimonial-text-holder p-30 border-radius-5" data-tm-bg-color="#fff">
                                <div class="author-text">"Enquiries used to sit in three different inboxes. Now every one is logged and answered the same day."</div>
                                <div class="wrapper d-flex mt-20">
                                    <div class="testimonial-author-info-holder">
                                        <h5 class="name mb-0">Operations Manager</h5>
                                        <p class="position mb-0">Multi-location service business</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-4">
                        <div class="tm-sc-testimonials testimonials-style-current-theme mb-30">
                            <div class="testimonial-text-holder p-30 border-radius-5" data-tm-bg-color="#fff">
                                <div class="author-text">"The estimate tool paid for itself in a month. Customers get a number right away and we stopped rebuilding quotes by hand."</div>
                                <div class="wrapper d-flex mt-20">
                                    <div class="testimonial-author-info-holder">
                                        <h5 class="name mb-0">Managing Partner</h5>
                                        <p class="position mb-0">Professional services firm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-4">
                        <div class="tm-sc-testimonials testimonials-style-current-theme mb-30">
                            <div class="testimonial-text-holder p-30 border-radius-5" data-tm-bg-color="#fff">
                                <div class="author-text">"One dashboard, opened every morning. We finally know which channels actually bring paying customers."</div>
                                <div class="wrapper d-flex mt-20">
                                    <div class="testimonial-author-info-holder">
                                        <h5 class="name mb-0">Founder</h5>
                                        <p class="position mb-0">Retail and wholesale company</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                    <div class="accordion-item mb-15">
                        <h2 class="accordion-header" id="faqh0">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq0" aria-expanded="true" aria-controls="faq0">
                                How long does it take?
                            </button>
                        </h2>
                        <div id="faq0" class="accordion-collapse collapse show" aria-labelledby="faqh0" data-bs-parent="#axFaq">
                            <div class="accordion-body">
                                <p>You see a working first draft within 48 hours for most projects. Full delivery depends on scope, from a few days for a site to a couple of weeks for a full automation system.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item mb-15">
                        <h2 class="accordion-header" id="faqh1">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="false" aria-controls="faq1">
                                Do we own the website and data?
                            </button>
                        </h2>
                        <div id="faq1" class="accordion-collapse collapse" aria-labelledby="faqh1" data-bs-parent="#axFaq">
                            <div class="accordion-body">
                                <p>Yes, completely. Code, content, accounts and data are yours. There is no lock-in and you can move or edit anything at any time.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item mb-15">
                        <h2 class="accordion-header" id="faqh2">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                                Can we start with just one service?
                            </button>
                        </h2>
                        <div id="faq2" class="accordion-collapse collapse" aria-labelledby="faqh2" data-bs-parent="#axFaq">
                            <div class="accordion-body">
                                <p>Absolutely. Most clients start with the website or the messaging setup, then add tools, reports and automation once they see the value.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item mb-15">
                        <h2 class="accordion-header" id="faqh3">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                                How do payments work?
                            </button>
                        </h2>
                        <div id="faq3" class="accordion-collapse collapse" aria-labelledby="faqh3" data-bs-parent="#axFaq">
                            <div class="accordion-body">
                                <p>A fixed scope with a clear price, agreed before we start. Usually part upfront and the rest on delivery. No surprise invoices.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item mb-15">
                        <h2 class="accordion-header" id="faqh4">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                                What if we are not sure what we need?
                            </button>
                        </h2>
                        <div id="faq4" class="accordion-collapse collapse" aria-labelledby="faqh4" data-bs-parent="#axFaq">
                            <div class="accordion-body">
                                <p>That is normal. Describe the problem in plain words and we will come back with a recommendation, a plan and a price. No pressure.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item mb-15">
                        <h2 class="accordion-header" id="faqh5">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5" aria-expanded="false" aria-controls="faq5">
                                Do we actually need AI in this?
                            </button>
                        </h2>
                        <div id="faq5" class="accordion-collapse collapse" aria-labelledby="faqh5" data-bs-parent="#axFaq">
                            <div class="accordion-body">
                                <p>Only where it pays for itself. We look at your process first, then use AI for the parts that involve reading, sorting or drafting at volume. Everywhere else, plain automation is cheaper and more reliable. Either way it goes inside the tool your team already uses, so adoption does not depend on anyone changing how they work.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item mb-15">
                        <h2 class="accordion-header" id="faqh6">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq6" aria-expanded="false" aria-controls="faq6">
                                How does this fit with the rest of Axiotrix?
                            </button>
                        </h2>
                        <div id="faq6" class="accordion-collapse collapse" aria-labelledby="faqh6" data-bs-parent="#axFaq">
                            <div class="accordion-body">
                                <p>It is the same team and the same account. If Axiotrix already supports your operations, this simply extends that to your website, customer messaging and reporting.</p>
                            </div>
                        </div>
                    </div>
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
                            <h3 class="title">Tell us about your business. We will tell you what helps.</h3>
                            <p>Write it in your own words. Within one working day we come back with a clear recommendation, a timeline and a price.</p>
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
