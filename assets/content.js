/* Axiotrix — content model (single source of truth)
   The website renders from this object. The Control Panel (admin.html)
   edits it and saves overrides to localStorage. Swap this layer for
   Supabase later without touching the pages. */

const DEFAULT_CONTENT = {
  global: {
    brand: "Axiotrix",
    tagline: "Get seen. Get chosen.",
    whatsapp: "919000000000",
    email: "hello@axiotrix.com",
    phone: "+91 90000 00000",
    footerBlurb: "Axiotrix builds the websites, tools and automations that make small businesses impossible to miss online."
  },

  home: {
    heroEyebrow: "Digital visibility studio",
    heroTitle: "Make your business impossible to miss.",
    heroText: "We build the website, tools, reports and automations that turn strangers into customers, and keep them coming back, without you chasing anyone.",
    heroCtaPrimary: "Tell us what you need",
    heroCtaSecondary: "See how it works",
    heroNote: "Free 15-minute plan for your business, no obligation.",
    servicesEyebrow: "What we build",
    servicesTitle: "Five ways we grow your visibility",
    servicesText: "Pick one, or let us combine them into a system that runs itself.",
    whyEyebrow: "Why Axiotrix",
    whyTitle: "One partner for the whole visibility engine",
    whyText: "Most agencies hand you a design and disappear. We build things that keep working: sites that convert, tools that save hours, and automation that follows up for you.",
    stats: [
      { n: "48h", l: "First working draft" },
      { n: "5", l: "Services, one team" },
      { n: "100%", l: "You own everything" },
      { n: "24/7", l: "Automations never sleep" }
    ]
  },

  services: [
    {
      slug: "website-creation",
      nav: "Websites",
      icon: "globe",
      eyebrow: "Website creation",
      title: "A website that sells while you sleep",
      text: "Not a brochure nobody visits, a fast, clean site built around the one action you want visitors to take.",
      heroNote: "Live in days, not months.",
      impact: "Turns Google searches and shared links into enquiries you were never getting before.",
      problem: "You have a business but no home online, or an old site that loads slowly, looks dated on phones, and never brings you a single enquiry.",
      usecases: [
        { t: "The local shop with no online presence", d: "A cloud kitchen or boutique that lives on word of mouth gets a clean one-page site with menu, photos and a WhatsApp order button, so a Google search turns into an order.",
          i: "Found on Google, first direct orders within weeks, and zero commission paid to aggregator apps." },
        { t: "The service business losing leads", d: "A consultant or contractor whose leads slip through DMs gets a site with a clear offer and an enquiry form that lands straight in their inbox and WhatsApp.",
          i: "Every enquiry is captured and answered; nothing slips, so more of the same traffic becomes paying work." },
        { t: "The brand that looks bigger than it is", d: "A new venture that needs to look credible to investors or partners gets a polished, trustworthy presence that punches above its size.",
          i: "Trust is built in the first five seconds; meetings start warmer and negotiations start stronger." }
      ],
      deliverables: [
        "Mobile-first design tuned to your brand",
        "Copywriting built around one clear action",
        "Contact and enquiry forms wired to email or WhatsApp",
        "Google-ready structure, speed and basic SEO",
        "You own the code and can update it yourself"
      ],
      steps: [
        { t: "Discovery", d: "A short call to understand your business, your customer, and the one thing the site must do." },
        { t: "Design draft", d: "We send a working draft in days. You react, we refine." },
        { t: "Build and launch", d: "We connect your domain, forms and analytics, then go live." },
        { t: "Handover", d: "You get the keys, a walkthrough, and a simple way to edit content." }
      ]
    },
    {
      slug: "tool-development",
      nav: "Tools",
      icon: "wrench",
      eyebrow: "Custom tools",
      title: "Tools that do the boring work for you",
      text: "The calculator, tracker or mini-app your business needs but no off-the-shelf product sells. Built exactly for how you work.",
      heroNote: "One tool can save hours every week.",
      impact: "Replaces spreadsheets and manual back-and-forth, giving you back hours every single week.",
      problem: "You are stuck in spreadsheets, copy-pasting between apps, or paying for bloated software you use ten percent of. The exact tool you need does not exist yet.",
      usecases: [
        { t: "The quote or estimate calculator", d: "A curtains or interiors business lets customers pick options and get an instant price, then sends the estimate as a branded PDF, no back-and-forth.",
          i: "Quotes go out in two minutes instead of two days, so customers decide while their interest is still hot." },
        { t: "The internal tracker", d: "A route salesman tracks follow-ups, udhaar and reorders on his phone instead of a diary, so nothing and nobody gets forgotten.",
          i: "Pending udhaar actually gets recovered and reorders are caught on the day they are due, not weeks later." },
        { t: "The customer-facing mini-app", d: "A subscription business gives customers a simple screen to pause, renew or upgrade, cutting the messages you handle by hand.",
          i: "Renewals happen by themselves and daily support messages drop sharply, without hiring anyone." }
      ],
      deliverables: [
        "A tool scoped to your exact workflow",
        "Works on phone and desktop",
        "Connects to your sheet, database or WhatsApp",
        "Clean, simple interface anyone can use",
        "Yours to keep and grow over time"
      ],
      steps: [
        { t: "Map the workflow", d: "We watch how you do it today and find the slow, repetitive parts." },
        { t: "Prototype", d: "A clickable version so you feel it before we build the full thing." },
        { t: "Build and test", d: "We build it, load your real data, and fix what feels off." },
        { t: "Roll out", d: "We train your team and stay on hand for the first weeks." }
      ]
    },
    {
      slug: "reports",
      nav: "Reports",
      icon: "chart",
      eyebrow: "Reports and dashboards",
      title: "Know what's working, in one glance",
      text: "Stop guessing. A single live dashboard that pulls your numbers together and tells you what to do next.",
      heroNote: "Numbers, refreshed automatically.",
      impact: "You decide from live numbers instead of month-old guesswork, and catch problems the day they start.",
      problem: "Your data is scattered across WhatsApp, sheets, ads and payment apps. By the time you total it up, the month is over and the moment to act has passed.",
      usecases: [
        { t: "The daily sales snapshot", d: "A kitchen owner opens one link each morning and sees yesterday's orders, top items and repeat customers, no spreadsheet needed.",
          i: "A bad day is spotted the same day, not at month end when the damage is already four weeks deep." },
        { t: "The investor or loan report", d: "A founder raising money or a bank loan gets a clean, credible report of traction and unit economics, generated on demand.",
          i: "The funding conversation moves faster because the numbers look professional and check out instantly." },
        { t: "The campaign scorecard", d: "A marketer sees which channel actually brought paying customers, so the next rupee goes where it works.",
          i: "Ad money shifts to the channel that pays and the silent budget leak simply stops." }
      ],
      deliverables: [
        "One live dashboard, always up to date",
        "Pulls from your sheets, database and tools",
        "The three or four numbers that actually matter",
        "Auto-generated PDF reports on a schedule",
        "Shareable link for your team or investors"
      ],
      steps: [
        { t: "Pick the metrics", d: "We agree on the handful of numbers that drive your decisions." },
        { t: "Connect sources", d: "We plug in your data wherever it already lives." },
        { t: "Design the view", d: "A clean layout that answers your questions at a glance." },
        { t: "Automate delivery", d: "Reports refresh and arrive on schedule, no manual work." }
      ]
    },
    {
      slug: "automation",
      nav: "Automation",
      icon: "bolt",
      eyebrow: "Automation",
      title: "Set it once, let it run",
      text: "The follow-ups, reminders and hand-offs you keep forgetting, handled automatically, every time, without you.",
      heroNote: "Works while you sleep.",
      impact: "Follow-ups happen every single time, so leads and renewals stop dying silently in your inbox.",
      problem: "Leads go cold because nobody followed up. Renewals lapse because nobody reminded the customer. You are the bottleneck, and there are only so many hours in a day.",
      usecases: [
        { t: "The follow-up that never gets forgotten", d: "A new enquiry automatically gets a thank-you, a reminder after two days, and a nudge after a week, until they reply.",
          i: "Most sales come from the second or third touch nobody was making; those touches now happen automatically." },
        { t: "The renewal and reorder nudge", d: "A subscription or repeat-order business reminds customers before they run out, lifting renewals without a single manual message.",
          i: "Revenue stops leaking from forgotten renewals, and it costs nothing extra per month to keep it that way." },
        { t: "The behind-the-scenes hand-off", d: "A paid order automatically updates your sheet, alerts your team, and thanks the customer, all in the same second.",
          i: "Zero manual handoffs: the team knows about an order the second it happens, and nothing depends on your memory." }
      ],
      deliverables: [
        "Trigger-based flows mapped to your business",
        "Runs on WhatsApp, email or SMS",
        "Smart timing and stop rules, no spam",
        "Connects your forms, tools and sheets",
        "A dashboard to watch it working"
      ],
      steps: [
        { t: "Find the leaks", d: "We spot where leads, renewals and tasks slip through today." },
        { t: "Design the flow", d: "We map each trigger, message and timing rule with you." },
        { t: "Build and connect", d: "We wire it to your tools and test with real cases." },
        { t: "Watch and tune", d: "We monitor the first runs and tighten what needs it." }
      ]
    },
    {
      slug: "whatsapp-integration",
      nav: "WhatsApp",
      icon: "chat",
      eyebrow: "WhatsApp integration",
      title: "Meet customers where they already are",
      text: "India runs on WhatsApp. We turn it into your order desk, support line and follow-up engine, connected to everything else you use.",
      heroNote: "Where 90% of your customers already are.",
      impact: "Buying drops to one tap in the app your customers already open fifty times a day.",
      problem: "Customers message you on WhatsApp but it is chaos: orders lost in chat, the same questions all day, and no record of who needs a follow-up.",
      usecases: [
        { t: "The one-tap order button", d: "Every page and ad has a button that opens WhatsApp with the order details pre-filled, so buying takes one tap.",
          i: "More started orders get finished because there is no form, no app install, no login, just one tap." },
        { t: "The instant auto-reply", d: "After hours or when you are busy, an auto-reply answers common questions and captures the lead so none go cold.",
          i: "No lead dies overnight; every enquiry gets an answer in seconds even when you are asleep or busy." },
        { t: "The order-to-record link", d: "A confirmed order on WhatsApp drops straight into your sheet or dashboard, so nothing lives only in a chat thread.",
          i: "Every order has a record outside the chat, so missed orders and payment disputes drop to near zero." }
      ],
      deliverables: [
        "Click-to-chat buttons with pre-filled messages",
        "Auto-replies and quick-reply menus",
        "Broadcasts and reminders that respect the rules",
        "Orders and leads logged automatically",
        "Setup on the right tool for your scale"
      ],
      steps: [
        { t: "Map the conversation", d: "We list the messages customers actually send you today." },
        { t: "Choose the setup", d: "Simple click-to-chat, or full Business API for scale." },
        { t: "Build the flows", d: "Buttons, auto-replies and logging, wired to your tools." },
        { t: "Launch and refine", d: "We go live and adjust the replies from real chats." }
      ]
    }
  ],

  packages: {
    eyebrow: "Packages",
    title: "Simple pricing. Pick the visibility you need.",
    text: "Start with one service or take the whole engine. Every package is a fixed scope with a clear price, no surprise invoices.",
    note: "Prices are starting points. Send your requirement and we'll confirm an exact quote in one working day.",
    tiers: [
      { name: "Launch", price: "₹15,000", tagline: "Get online, fast", featured: false,
        cta: "Start with Launch",
        features: ["One-page website, mobile-first","WhatsApp order or enquiry button","Google-ready basics","Live in under a week","You own everything"] },
      { name: "Growth", price: "₹45,000", tagline: "The visibility engine", featured: true,
        cta: "Choose Growth",
        features: ["Multi-page website","One custom tool or calculator","WhatsApp auto-replies + logging","Basic automation (follow-ups)","Live reports dashboard"] },
      { name: "Agency", price: "Custom", tagline: "We run it with you", featured: false,
        cta: "Talk to us",
        features: ["Everything in Growth","Full WhatsApp Business API setup","Advanced automations","Monthly reports + optimisation","Priority support on WhatsApp"] }
    ]
  },

  about: {
    eyebrow: "About Axiotrix",
    title: "One team for your whole visibility engine",
    text: "Most agencies hand you a pretty design and vanish. We build things that keep working, and we stay to make sure they do.",
    values: [
      { t: "Use case before design", d: "We start from the one action you need a customer to take, then build backwards. Pretty is a side effect, not the goal." },
      { t: "You own everything", d: "Code, data, accounts, all yours. No lock-in, no ransom. You can run it yourself or grow it with us." },
      { t: "Built to keep working", d: "Sites that convert, tools that save hours, automations that follow up while you sleep. Not a one-time drop and disappear." }
    ]
  },

  testimonials: [
    { quote: "Orders used to get lost in my WhatsApp all day. Now they land straight in a sheet and nothing slips.", name: "Sapna R.", role: "Cloud kitchen owner" },
    { quote: "The estimate tool paid for itself in a month. Customers get a price instantly and I stopped doing manual quotes.", name: "Imran S.", role: "Interiors business" },
    { quote: "One dashboard, opened every morning. I finally know which channel actually brings paying customers.", name: "Neha K.", role: "D2C founder" }
  ],

  faq: [
    { q: "How long does it take?", a: "You see a working first draft within 48 hours for most projects. Full delivery depends on scope, from a few days for a site to a couple of weeks for a full automation system." },
    { q: "Do I own the website and data?", a: "Yes, completely. Code, content, accounts and data are yours. There is no lock-in and you can move or edit anything anytime." },
    { q: "Can I start with just one service?", a: "Absolutely. Most clients start with a website or WhatsApp setup, then add tools, reports and automation once they see the value." },
    { q: "How do payments work?", a: "A fixed scope with a clear price, agreed before we start. Usually part upfront and the rest on delivery. No surprise invoices." },
    { q: "What if I don't know exactly what I need?", a: "That's normal. Submit your problem in plain words and we'll come back with a plan, a recommendation and a price. No pressure." }
  ],

  submit: {
    eyebrow: "Submit your requirement",
    title: "Tell us what you need. We'll send a plan.",
    text: "Answer a few quick questions. Within one working day you get a clear plan, a timeline, and a price, no jargon, no pressure.",
    successTitle: "Got it. Talk soon.",
    successText: "Your requirement is in. We'll reach out on WhatsApp or email within one working day with your plan.",
    services: ["Website", "Custom tool", "Reports / dashboard", "Automation", "WhatsApp setup", "Not sure yet"],
    budgets: ["Under ₹25k", "₹25k – ₹75k", "₹75k – ₹2L", "Above ₹2L", "Let's discuss"]
  }
};

/* --- content loader: merge saved overrides over defaults --- */
const AX_KEY = "axiotrix_content_v1";
function loadContent() {
  try {
    const saved = JSON.parse(localStorage.getItem(AX_KEY) || "null");
    if (!saved) return structuredClone(DEFAULT_CONTENT);
    return deepMerge(structuredClone(DEFAULT_CONTENT), saved);
  } catch (e) { return structuredClone(DEFAULT_CONTENT); }
}
function saveContent(obj) { localStorage.setItem(AX_KEY, JSON.stringify(obj)); }
function resetContent() { localStorage.removeItem(AX_KEY); }
function deepMerge(base, over) {
  for (const k in over) {
    if (over[k] && typeof over[k] === "object" && !Array.isArray(over[k])) {
      base[k] = deepMerge(base[k] || {}, over[k]);
    } else { base[k] = over[k]; }
  }
  return base;
}

/* leads store (sample). Swap for Supabase insert later. */
const AX_LEADS = "axiotrix_leads_v1";
function loadLeads() { try { return JSON.parse(localStorage.getItem(AX_LEADS) || "[]"); } catch { return []; } }
function addLead(lead) { const l = loadLeads(); l.unshift(lead); localStorage.setItem(AX_LEADS, JSON.stringify(l)); }

if (typeof window !== "undefined") window.AX = { loadContent, saveContent, resetContent, DEFAULT_CONTENT, loadLeads, addLead };
