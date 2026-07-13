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
    footerBlurb: "Axiotrix builds the system that connects you to your customers: visibility, tools, reports, automation and WhatsApp, working as one machine."
  },

  home: {
    heroEyebrow: "Visibility, engineered",
    heroTitle: "You don't need a website. You need to be impossible to miss.",
    heroText: "A website is old fashioned. What you actually want is a system that connects you to your customers: finds them, wins them, and follows them up, while you run the business.",
    heroCtaPrimary: "Build my system",
    heroCtaSecondary: "See how it works",
    heroNote: "Free 15-minute visibility plan. No jargon, no obligation.",
    servicesEyebrow: "The system",
    servicesTitle: "Five engines. One machine.",
    servicesText: "Each one works alone. Together they find customers, answer them, and follow up, without you in the loop.",
    whyEyebrow: "Why this matters",
    whyTitle: "Your time is the most expensive thing in your business",
    whyText: "Every hour spent chasing leads, totalling sheets and forwarding messages is an hour stolen from the work only you can do. Human attention is precious. Spend it where it pays, and let the system take care of the rest.",
    stats: [
      { n: "48h", l: "First working draft" },
      { n: "5", l: "Engines, one team" },
      { n: "100%", l: "You own everything" },
      { n: "24/7", l: "The system never sleeps" }
    ]
  },

  services: [
    {
      slug: "website-creation",
      nav: "Websites",
      icon: "globe",
      eyebrow: "Online visibility",
      title: "A website is old fashioned. You need a customer magnet.",
      text: "You do not want a website. You want a system that connects you to your customers: found in ten seconds, sharp on every phone, and built around one action, reaching you.",
      heroNote: "Live in days, pulling enquiries from week one.",
      impact: "You stop being the best kept secret in your market.",
      problem: "Your customers search before they buy. If they cannot find you in ten seconds, they buy from the competitor they can. Being good at what you do is no longer enough; being visible is the entry ticket.",
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
      title: "Human attention is precious. Spend it only where it pays.",
      text: "Let tools take care of the repeating work: quotes, tracking, records, reminders. You step in only where a human actually changes the outcome.",
      heroNote: "One tool can buy back a working day every week.",
      impact: "The laptop-and-spreadsheet routine stops eating the hours your business needs from you most.",
      problem: "The old way runs on one laptop and one owner: everything manual, everything waiting for you. That routine quietly consumes your thinking hours, the ones a business owner needs most, on work a tool should be doing.",
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
      title: "Stop running your business on feelings.",
      text: "Guesswork is the most expensive habit in business. One live dashboard tells you what is working, what is leaking, and what to do next.",
      heroNote: "Your numbers, live, in one glance.",
      impact: "Decisions take minutes instead of month-ends, and problems get caught the day they start.",
      problem: "Your numbers live in five different apps and one tired memory. By the time you total them up, the month is over and the moment to act has passed. That is not reporting, that is archaeology.",
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
      title: "Your memory is not a system. Automation is.",
      text: "Follow-ups, reminders and hand-offs should not depend on how busy your day was. Set them once, and they happen every time, without you.",
      heroNote: "Runs 24/7. Never forgets. Never gets tired.",
      impact: "Leads and renewals stop dying silently just because a human was busy.",
      problem: "Right now, you are the engine of your own business: every follow-up, every reminder, every hand-off waits for you. Engines burn out. Systems do not.",
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
      title: "Your real shopfront is inside WhatsApp.",
      text: "India does not browse, it chats. We turn WhatsApp into your order desk, support line and follow-up engine, connected to everything else you run.",
      heroNote: "Where your customers already spend hours every day.",
      impact: "Buying drops to one tap in the app your customers already open fifty times a day.",
      problem: "Customers already message you on WhatsApp, but chaos is not a channel: orders buried in chats, the same questions all day, and no trace of who needs a follow-up.",
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
    title: "Buy back your time. Pick your starting point.",
    text: "Start with one engine or take the whole system. Every package is a fixed scope with a clear price, no surprise invoices.",
    note: "Prices are starting points. Send your requirement and we'll confirm an exact quote in one working day.",
    tiers: [
      { name: "Launch", price: "₹15,000", tagline: "Get found, fast", featured: false,
        cta: "Start with Launch",
        features: ["One-page customer magnet, mobile-first","WhatsApp order or enquiry button","Google-ready basics","Live in under a week","You own everything"] },
      { name: "Growth", price: "₹45,000", tagline: "The full system", featured: true,
        cta: "Choose Growth",
        features: ["Multi-page visibility site","One custom tool or calculator","WhatsApp auto-replies + logging","Follow-up automation","Live reports dashboard"] },
      { name: "Agency", price: "Custom", tagline: "We run it with you", featured: false,
        cta: "Talk to us",
        features: ["Everything in Growth","Full WhatsApp Business API setup","Advanced automations","Monthly reports + optimisation","Priority support on WhatsApp"] }
    ]
  },

  about: {
    eyebrow: "About Axiotrix",
    title: "We don't sell websites. We build the system that connects you to your customers.",
    text: "Most agencies hand you a pretty design and vanish. We build machinery that keeps working: visibility that pulls enquiries, tools that buy back your hours, automation that follows up while you sleep. And we stay to make sure it does.",
    values: [
      { t: "Use case before design", d: "We start from the one action you need a customer to take, then build backwards. Pretty is a side effect, not the goal." },
      { t: "Your attention is the budget", d: "Human intervention is precious. We design so you spend it only where it pays, and the system takes care of the rest." },
      { t: "You own everything", d: "Code, data, accounts, all yours. No lock-in, no ransom. You can run it yourself or grow it with us." }
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
    title: "Tell us what is eating your time. We'll send the fix.",
    text: "Describe the problem in plain words. Within one working day you get a plan, a timeline and a price. No jargon, no pressure.",
    successTitle: "Got it. Your plan is on the way.",
    successText: "Your requirement is in. We'll reach out on WhatsApp or email within one working day with a plan to get those hours back.",
    services: ["Visibility / website", "Custom tool", "Reports / dashboard", "Automation", "WhatsApp setup", "Not sure yet"],
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
