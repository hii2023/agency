/* Axiotrix | content model (single source of truth)
   The website renders from this object. The Control Panel (admin.html)
   edits it and saves overrides to localStorage. Swap this layer for
   Supabase later without touching the pages. */

const DEFAULT_CONTENT = {
  global: {
    brand: "Axiotrix",
    tagline: "Solutions Simplified",
    whatsapp: "18664220499",
    email: "info@axiotrix.com",
    phone: "+1 866-422-0499",
    footerBlurb: "Axiotrix helps businesses get found online, capture more enquiries, and cut the manual work out of the working day."
  },

  home: {
    heroEyebrow: "Digital Solutions",
    heroTitle: "Your customers are searching. We make sure they find you.",
    heroText: "Alongside our existing services, Axiotrix now builds the digital side of your business: the website that brings enquiries in, and the tools and automations that handle them for you.",
    heroCtaPrimary: "Request a free consultation",
    heroCtaSecondary: "See how it works",
    heroNote: "Free 15-minute consultation. No cost, no obligation.",
    servicesEyebrow: "How we help",
    servicesTitle: "Five things we can set up for your business",
    servicesText: "Start with the one you need most. Each one fixes a real, everyday problem.",
    whyEyebrow: "Why it matters",
    whyTitle: "Your team should be serving customers, not doing repetitive admin",
    whyText: "Most teams lose hours every day answering the same questions, chasing paperwork and re-keying information between systems. We set up simple systems that do this work for you, so your team's time goes where it earns."
  },

  services: [
    {
      slug: "website-creation",
      nav: "Websites",
      icon: "globe",
      eyebrow: "Get found online",
      title: "When customers search, they should find you",
      text: "People search online before they choose who to buy from. We build a fast, clear site that shows up in that search, reads as credible, and makes it one click to enquire, book or buy. If you sell products, we can set up a webstore that fits the way you already take orders.",
      heroNote: "Ready in days. Enquiries and orders route straight to your team.",
      impact: "People who never knew about you start calling, enquiring and ordering.",
      problem: "Right now, someone is searching for exactly what you offer. If you are hard to find, they buy from the business that was easier to find, and you never know it happened.",
      usecases: [
        { t: "The business customers cannot find", d: "A local business relying on word of mouth gets a fast, clear site with services, pricing guidance and a contact button, so a search turns into a real enquiry.",
          i: "New customers start finding you directly, instead of ending up with the competitor down the road." },
        { t: "The business ready to sell online", d: "We set up a webstore for your products that follows your existing process: your pricing rules, your delivery areas, your payment methods and your stock, so orders arrive the way your team already handles them.",
          i: "You open a second sales channel without changing how the business runs behind the counter." },
        { t: "The company losing enquiries", d: "A firm whose leads arrive through phone tag and scattered emails gets a site with a clear offer and an enquiry form that routes straight to the right person.",
          i: "Every enquiry is captured and answered, so more of the same traffic turns into signed customers." },
        { t: "The established business with a dated site", d: "A business whose site was built years ago gets a rebuild that loads fast, reads well on a phone, and looks as credible as the work they actually do.",
          i: "Trust is set in the first five seconds, so prospects arrive at the call already taking you seriously." }
      ],
      deliverables: [
        "Mobile-first design tuned to your brand",
        "Copywriting built around one clear action",
        "Contact and enquiry forms routed to the right inbox",
        "Webstore setup with payments, delivery and stock, if you sell products",
        "Google-ready structure, speed and basic SEO",
        "You own the code and can update it yourself"
      ],
      steps: [
        { t: "Discovery", d: "A short call to understand your business, your ideal client, and the one thing the site must do." },
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
      text: "Estimates, customer records, status tracking: if your team does it by hand every day, we can build a simple tool that does it for them. Where it genuinely helps, we add AI to the tool, so it reads, sorts and drafts the repetitive parts instead of your team doing it.",
      heroNote: "Saves hours every week, from the first day.",
      impact: "Work that used to fill an afternoon now takes minutes, and nothing gets missed.",
      problem: "Hours disappear into spreadsheets, re-typing and chasing status. That is time your team could spend on customers. A small tool built around your exact workflow takes it off their plate.",
      usecases: [
        { t: "The instant quote or estimate tool", d: "A service business lets customers pick what they need and see an accurate price right away, then emails the estimate as a branded PDF, with no back-and-forth.",
          i: "Estimates go out in minutes instead of days, so customers decide while their interest is still high." },
        { t: "The internal tracker that replaces the spreadsheet", d: "Your team tracks jobs, follow-ups and outstanding balances in one shared screen instead of a spreadsheet only one person understands.",
          i: "Outstanding balances actually get chased and nothing depends on one person's memory or their laptop." },
        { t: "The AI assistant built into your workflow", d: "AI handles the reading and typing nobody enjoys: sorting incoming enquiries, pulling details out of documents, drafting replies and summarising long threads. It sits inside the tool your team already opens, so there is nothing new to learn.",
          i: "Your team adopts it without training, because it fits the process they already follow instead of replacing it." },
        { t: "The customer-facing portal", d: "Customers get a simple screen to check status, upload what you need or update their details, instead of emailing your team for every small thing.",
          i: "Routine status calls and document chasing drop sharply, without adding headcount." }
      ],
      deliverables: [
        "A tool scoped to your exact workflow",
        "AI built in where it earns its keep, not for the sake of it",
        "Works on phone and desktop",
        "Connects to the systems you already use",
        "Clean, simple interface anyone can use",
        "Yours to keep and grow over time"
      ],
      steps: [
        { t: "Map the workflow", d: "We watch how you do it today and find the slow, repetitive parts." },
        { t: "Pick the right approach", d: "We decide where plain automation is enough and where AI genuinely pays for itself, so you are not buying technology you do not need." },
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
      title: "Know exactly how the business is doing, today",
      text: "Revenue, orders, outstanding payments, where your best customers come from: one simple screen, updated automatically. No spreadsheet wrangling, no month-end surprises.",
      heroNote: "Open one link, see everything.",
      impact: "You catch problems the same week they start, not at month end when it is too late.",
      problem: "The real numbers only surface at month end, once nothing can be changed. Your revenue moves every day, so you should be able to see it every day.",
      usecases: [
        { t: "The daily business snapshot", d: "An owner opens one link each morning and sees yesterday's sales, new enquiries, cancellations and unpaid invoices, without waiting for a report to be built.",
          i: "A bad week is spotted while it can still be fixed, not at month end when the damage is done." },
        { t: "The lender or partner report", d: "A business preparing for a loan, an audit or a partner review gets a clean, credible summary of performance, generated on demand.",
          i: "The conversation moves faster because the numbers look professional and hold up to questions." },
        { t: "The marketing scorecard", d: "You see which channel actually produced paying customers, not just clicks, so the next dollar goes where it works.",
          i: "Spend shifts to what converts, and the quiet budget leak stops." }
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
      text: "Acknowledgements, payment reminders, appointment and renewal alerts: set them once, and they go out at the right time to the right person. Nobody has to remember.",
      heroNote: "Works day and night, even on holidays.",
      impact: "Customers stop slipping away just because the team had a busy week.",
      problem: "Someone meant to follow up, but the day got busy and it slipped. It happens every week, and every time it does, you lose business you had already earned.",
      usecases: [
        { t: "The follow-up that never gets forgotten", d: "A new enquiry automatically gets an acknowledgement, a reminder after two days, and a further nudge after a week, until they respond.",
          i: "Most business comes from the second or third touch nobody was making; those touches now happen on their own." },
        { t: "The appointment and renewal reminder", d: "Customers are reminded before a booking, a renewal or a payment date, without anyone working through a list by hand.",
          i: "No-shows and lapsed renewals drop, and it costs nothing extra each month to keep it that way." },
        { t: "The behind-the-scenes hand-off", d: "A new enquiry form automatically creates the record, alerts the right team member, and confirms receipt with the customer, all in the same moment.",
          i: "Nothing waits in someone's inbox, and no step depends on a person remembering to pass it along." }
      ],
      deliverables: [
        "Trigger-based flows mapped to your business",
        "Runs over email, SMS or WhatsApp",
        "Smart timing and stop rules, no spam",
        "Connects your forms, tools and sheets",
        "A dashboard to watch it working"
      ],
      steps: [
        { t: "Find the leaks", d: "We spot where enquiries, renewals and tasks slip through today." },
        { t: "Design the flow", d: "We map each trigger, message and timing rule with you." },
        { t: "Build and connect", d: "We wire it to your tools and test with real cases." },
        { t: "Watch and tune", d: "We monitor the first runs and tighten what needs it." }
      ]
    },
    {
      slug: "whatsapp-integration",
      nav: "WhatsApp",
      icon: "chat",
      eyebrow: "Messaging and WhatsApp",
      title: "Answer every message, without anyone sitting on the phone",
      text: "Customers text and message more than they call. We set up WhatsApp and SMS properly: one-tap contact buttons, instant replies to common questions, and every conversation logged where your team can see it.",
      heroNote: "Meet clients on the channel they already use.",
      impact: "Reaching you takes one tap, and no message goes unanswered, even after hours.",
      problem: "Messages arrive across text, WhatsApp and voicemail, and live on whoever's phone received them. Then one gets buried, a customer feels ignored, and nobody can tell what was promised.",
      usecases: [
        { t: "The one-tap contact button", d: "Every page and ad has a button that opens a message with the details already filled in, so reaching you takes one tap and no typing.",
          i: "More enquiries actually get sent, because there is no form to fill and no phone queue to sit through." },
        { t: "The instant auto-reply", d: "After hours or when the team is busy, an automatic reply answers common questions and captures the enquiry so none go cold.",
          i: "No enquiry dies overnight; every one gets an answer in seconds, even when the office is closed." },
        { t: "The message-to-record link", d: "A confirmed enquiry or booking drops straight into your system, so nothing lives only in one person's chat thread.",
          i: "Every conversation has a record outside the phone, so missed requests and he-said-she-said disputes fall away." }
      ],
      deliverables: [
        "Click-to-message buttons with pre-filled text",
        "Auto-replies and quick-reply menus",
        "Reminders and updates that follow messaging rules",
        "Enquiries logged automatically to your system",
        "Setup on the right platform for your size"
      ],
      steps: [
        { t: "Map the conversation", d: "We list the messages customers actually send you today." },
        { t: "Choose the setup", d: "Simple click-to-message, or full Business API where you need scale." },
        { t: "Build the flows", d: "Buttons, auto-replies and logging, wired into your systems." },
        { t: "Launch and refine", d: "We go live and tune the replies using real conversations." }
      ]
    }
  ],

  about: {
    eyebrow: "About Axiotrix",
    title: "The same Axiotrix approach, applied to your digital front door",
    text: "Axiotrix already simplifies the operations running behind the scenes. This service extends that to the front: the site that brings enquiries in, and the tools and reminders that make sure none are dropped. Built once, then kept working.",
    values: [
      { t: "We start with your problem", d: "First we understand what is costing you customers or time. Then we build only what fixes it, nothing extra." },
      { t: "Simple enough to use daily", d: "If your team can use email, they can use what we build. No training programme, no technical knowledge needed." },
      { t: "You own everything", d: "The website, the data and the accounts stay in your name. No lock-in, and no monthly fee just to keep hold of your own assets." }
    ]
  },

  testimonials: [
    { quote: "Enquiries used to sit in three different inboxes. Now every one is logged and answered the same day.", name: "Operations Manager", role: "Multi-location service business" },
    { quote: "The estimate tool paid for itself in a month. Customers get a number right away and we stopped rebuilding quotes by hand.", name: "Managing Partner", role: "Professional services firm" },
    { quote: "One dashboard, opened every morning. We finally know which channels actually bring paying customers.", name: "Founder", role: "Retail and wholesale company" }
  ],

  faq: [
    { q: "How long does it take?", a: "You see a working first draft within 48 hours for most projects. Full delivery depends on scope, from a few days for a site to a couple of weeks for a full automation system." },
    { q: "Do we own the website and data?", a: "Yes, completely. Code, content, accounts and data are yours. There is no lock-in and you can move or edit anything at any time." },
    { q: "Can we start with just one service?", a: "Absolutely. Most clients start with the website or the messaging setup, then add tools, reports and automation once they see the value." },
    { q: "How do payments work?", a: "A fixed scope with a clear price, agreed before we start. Usually part upfront and the rest on delivery. No surprise invoices." },
    { q: "What if we are not sure what we need?", a: "That is normal. Describe the problem in plain words and we will come back with a recommendation, a plan and a price. No pressure." },
    { q: "Do we actually need AI in this?", a: "Only where it pays for itself. We look at your process first, then use AI for the parts that involve reading, sorting or drafting at volume. Everywhere else, plain automation is cheaper and more reliable. Either way it goes inside the tool your team already uses, so adoption does not depend on anyone changing how they work." },
    { q: "How does this fit with the rest of Axiotrix?", a: "It is the same team and the same account. If Axiotrix already supports your operations, this simply extends that to your website, customer messaging and reporting." }
  ],

  submit: {
    eyebrow: "Tell us what you need",
    title: "Tell us about your business. We will tell you what helps.",
    text: "Write it in your own words. Within one working day we come back with a clear recommendation, a timeline and a price.",
    successTitle: "Got it. We will be in touch shortly.",
    successText: "We will reach out by email or phone within one working day with a simple plan for your business.",
    services: ["Website / get found online", "Webstore / sell products online", "A tool for our daily work", "AI in our existing process", "Reports and dashboards", "Automatic follow-ups", "Messaging and WhatsApp", "Not sure yet"],
    budgets: ["Under $2,500", "$2,500 to $7,500", "$7,500 to $20,000", "Above $20,000", "Let us discuss"]
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
