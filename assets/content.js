/* Axiotrix | content model (single source of truth)
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
    footerBlurb: "Axiotrix helps small businesses get found online, get more enquiries, and save hours of manual work every week."
  },

  home: {
    heroEyebrow: "For business owners",
    heroTitle: "Customers are searching for what you sell. We make sure they find you.",
    heroText: "We set up your online page, your WhatsApp and your follow-ups, so enquiries keep coming in and get answered, even when you are busy running the business.",
    heroCtaPrimary: "Tell us about your business",
    heroCtaSecondary: "See how it works",
    heroNote: "Free 15-minute chat about your business. No charges, no pressure.",
    servicesEyebrow: "How we help",
    servicesTitle: "Five things we can set up for your business",
    servicesText: "Start with the one you need most. Each one fixes a real, daily problem.",
    whyEyebrow: "Why it matters",
    whyTitle: "You should be running your business, not doing paperwork",
    whyText: "Most owners lose hours every day answering the same questions, chasing payments and updating registers. We set up simple systems that do this work for you, so your time goes where it earns.",
    stats: [
      { n: "48h", l: "First working demo" },
      { n: "5", l: "Services, one team" },
      { n: "100%", l: "You own everything" },
      { n: "24/7", l: "Works even when you're closed" }
    ]
  },

  services: [
    {
      slug: "website-creation",
      nav: "Websites",
      icon: "globe",
      eyebrow: "Get found online",
      title: "When customers search, they should find you",
      text: "People search on Google before they buy anything. We build you a simple, fast page that shows up in that search, looks trustworthy, and makes it one tap to reach you on WhatsApp.",
      heroNote: "Ready in days. Enquiries come straight to your phone.",
      impact: "People who never knew about your business start calling and messaging you.",
      problem: "Right now, someone nearby is searching for exactly what you sell. If you are not online, they find your competitor instead, and you lose that customer without ever knowing it.",
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
      title: "Stop doing the same work again and again",
      text: "Price quotes, customer records, payment tracking: if you do it by hand every day, we can build a simple tool that does it for you. You just check it, instead of doing it.",
      heroNote: "Saves hours every week, from the first day.",
      impact: "Work that used to take your evenings now takes minutes, and nothing gets forgotten.",
      problem: "Every evening goes into diaries, registers and calculations. That is time you could spend with customers, or with family. A small tool built for your exact work can take this off your plate.",
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
      eyebrow: "Know your numbers",
      title: "Know exactly how your business did today",
      text: "Sales, orders, pending payments, best-selling items: one simple screen on your phone, updated automatically. No spreadsheets, no month-end surprises.",
      heroNote: "Open one link, see everything.",
      impact: "You catch problems the same day they start, not at month end when it is too late.",
      problem: "You only find out the real numbers at month end, when nothing can be fixed anymore. Your money moves every day, so you should be able to see it every day.",
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
      eyebrow: "Automatic follow-ups",
      title: "Never forget a follow-up again",
      text: "Thank-you messages, payment reminders, renewal alerts: set them once, and they go out automatically at the right time, to the right customer. You don't have to remember anything.",
      heroNote: "Works day and night, even on holidays.",
      impact: "Customers stop slipping away just because you had a busy day.",
      problem: "You meant to follow up with that customer, but the day got busy and it slipped. It happens every week, and every time it does, you lose business you had already earned.",
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
      eyebrow: "WhatsApp for business",
      title: "Turn your WhatsApp into a proper order counter",
      text: "Your customers already message you on WhatsApp. We organise it: order buttons, instant replies to common questions, and every order saved in one place so nothing gets lost in chats.",
      heroNote: "Your customers are already there. Now make it work for you.",
      impact: "Ordering takes one tap, and no customer message goes unanswered, even at midnight.",
      problem: "Orders come in chats, questions come in chats, everything is in chats. Then a message gets buried, an order gets missed, and a customer feels ignored. Your busiest channel needs some order in it.",
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
    title: "Simple packages, clear prices",
    text: "Start small or take the full setup. The price is fixed and agreed before we start, so there are no surprise bills.",
    note: "Prices are starting points. Send your requirement and we'll confirm an exact quote in one working day.",
    tiers: [
      { name: "Launch", price: "₹15,000", tagline: "Get online this week", featured: false,
        cta: "Start with Launch",
        features: ["One-page site that works on every phone","WhatsApp order or enquiry button","Shows up on Google","Live in under a week","You own everything"] },
      { name: "Growth", price: "₹45,000", tagline: "Most popular", featured: true,
        cta: "Choose Growth",
        features: ["Full website for your business","One tool for your daily work","WhatsApp instant replies + order records","Automatic follow-up messages","Daily business report on your phone"] },
      { name: "Agency", price: "Custom", tagline: "We run it with you", featured: false,
        cta: "Talk to us",
        features: ["Everything in Growth","Full WhatsApp Business API setup","Advanced automations","Monthly reports + optimisation","Priority support on WhatsApp"] }
    ]
  },

  about: {
    eyebrow: "About Axiotrix",
    title: "We help small businesses get more customers, with less daily effort",
    text: "Most agencies deliver a design and disappear. We set up things that keep working for you: a page that brings enquiries, tools that save your time, reminders that go out on their own. And we stay in touch to make sure they keep working.",
    values: [
      { t: "We start with your problem", d: "First we understand what is costing you customers or time. Then we build only what fixes it, nothing extra." },
      { t: "Simple enough to use daily", d: "If you can use WhatsApp, you can use what we build. No training, no technical knowledge needed." },
      { t: "You own everything", d: "The website, the data, the accounts, all in your name. No lock-in, and no monthly fees to hold your own things." }
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
    eyebrow: "Tell us what you need",
    title: "Tell us about your business. We'll tell you what will help.",
    text: "Write it in your own words, the way you would explain it to a friend. Within one working day we send you a simple plan with a clear price.",
    successTitle: "Got it. We'll message you soon.",
    successText: "We'll reach out on WhatsApp or email within one working day with a simple plan for your business.",
    services: ["Website / get found online", "A tool for my daily work", "Business reports", "Automatic follow-ups", "WhatsApp setup", "Not sure yet"],
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
