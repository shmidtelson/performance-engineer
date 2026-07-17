export const site = {
  name: "Roman Sapezhko",
  role: "Performance Engineer & IT Consultant",
  tagline:
    "I help SaaS and e-commerce teams cut latency, remove bottlenecks, and make critical flows fast and reliable.",
  email: "roman@sapezhko.com",
  website: "https://sapezhko.com",
  linkedin: "https://www.linkedin.com/in/romua1d/",
  github: "https://github.com/shmidtelson",
  location: "Seville, Spain · Remote EU / worldwide",
  years: "10+",
  bookingUrl: "https://calendly.com/romua1d",
  cta: "Book a free 30-min diagnostic call",
  ctaSub: "No pitch deck. We map what’s slowing you down and what to fix first.",
  calendlyHint:
    "Before the call, note your URL, what’s slow, and what “fixed” looks like — it makes the 30 minutes count.",
};

export const proofMetrics = [
  { value: 92, suffix: "", prefix: "~", label: "Lighthouse mobile", detail: "from ~38" },
  { value: 1.7, suffix: "s", prefix: "", label: "LCP", detail: "from ~5.4s", decimals: 1 },
  { value: 35, suffix: "%", prefix: "+", label: "Throughput", detail: "B2B platform" },
  { value: 99.9, suffix: "%", prefix: "", label: "API uptime", detail: "under load", decimals: 1 },
];

export const forYouIf = {
  yes: [
    "SaaS or e-commerce with live traffic and slow critical flows",
    "Latency spikes, unstable performance under load, or recurring incidents",
    "Checkout, dashboard, or API paths that hurt conversion or support",
    "Systems that got harder to scale after growth, legacy, or AI-assisted shipping",
  ],
  no: [
    "You need a brand-new marketing site from scratch",
    "You’re looking for junior mentoring or pure UI design",
    "You want a Lighthouse score chase with no production access later",
  ],
};

export const processSteps = [
  {
    n: "01",
    title: "Find what’s actually slow",
    body: "Profile, traces, and production signals — not guesswork or generic audit checklists.",
  },
  {
    n: "02",
    title: "Prioritize by business impact",
    body: "Rank fixes by conversion, reliability, and cost — so the first wins matter.",
  },
  {
    n: "03",
    title: "Fix and harden",
    body: "Implement where needed, then add monitoring, CI budgets, and delivery guardrails so it doesn’t regress.",
  },
];

export const cases = [
  {
    title: "Strapi + Next.js tile shop",
    org: "E-commerce (confidential)",
    summary:
      "Slow production storefront with weak caching, manual deploys, and no performance gate. Built a foundation so releases stay fast.",
    metrics: [
      { label: "Lighthouse mobile", before: "~38", after: "~92" },
      { label: "LCP", before: "~5.4s", after: "~1.7s" },
      { label: "TTFB", before: "~2.6s", after: "~350ms" },
      { label: "Deploy time", before: "40–60 min", after: "~12 min" },
    ],
  },
  {
    title: "High-load B2B digital goods platform",
    org: "GDS Group",
    summary:
      "Analytics took hours, throughput was capped, and deploys were slow — while holding a 99.9% API uptime bar.",
    metrics: [
      { label: "Report generation", before: "4 hours", after: "15 min" },
      { label: "Throughput", before: "baseline", after: "+35%" },
      { label: "API load", before: "—", after: "500+ RPS" },
      { label: "Deploy time", before: "baseline", after: "−65%" },
    ],
  },
  {
    title: "24/7 IoT warehouse platform",
    org: "Trust Box",
    summary:
      "Stabilized an always-on booking system after a contractor left: queues, payments, QR access, and observability.",
    metrics: [
      { label: "Message volume", before: "fragile", after: "2,500+/min" },
      { label: "Delivery", before: "at risk", after: "99.9%" },
      { label: "Edge uptime", before: "unstable", after: "99.8%" },
      { label: "Alert response", before: "15 min", after: "30 sec" },
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Roman took our Django monolith from “works in staging” to predictable releases. API latency dropped, on-call got quieter, and we finally trust the deploy pipeline.",
    context: "B2B SaaS · backend reliability",
  },
  {
    quote:
      "We needed real-time device telemetry without losing messages at peak load. Queues, monitoring, and clear runbooks — production stopped being a black box.",
    context: "IoT / logistics · throughput & delivery",
  },
  {
    quote:
      "Clear scope, no architecture theatre. Weekly updates, tests in CI, and backend decisions explained in business terms — not slide-deck jargon.",
    context: "Platform team · delivery clarity",
  },
];

export const packages = [
  {
    name: "Performance diagnostic",
    price: "Free · 30 min",
    blurb: "Symptoms → impact → priority order. Leave with a next-step list even if we don’t continue.",
    includes: ["Problem framing", "Bottleneck hypotheses", "Priority order", "Honest fit check"],
    cta: "Book the call",
    href: "#book",
    featured: true,
  },
  {
    name: "Focused audit sprint",
    price: "Scoped after call",
    blurb: "Deep dive on one critical path (checkout, API, dashboard) with a written findings pack and fix plan.",
    includes: ["Measurement plan", "Root-cause notes", "Impact-ranked backlog", "Handoff or build option"],
    cta: "Discuss after diagnostic",
    href: "#book",
    featured: false,
  },
  {
    name: "Fix & harden engagement",
    price: "Scoped after call",
    blurb: "Implement the highest-leverage fixes and add guardrails so performance doesn’t regress on the next release.",
    includes: ["Hands-on fixes", "CI / monitoring budgets", "Release checks", "Weekly progress"],
    cta: "Discuss after diagnostic",
    href: "#book",
    featured: false,
  },
];

/** Sample deliverable — anonymized, for trust on the landing */
export const sampleReport = {
  title: "Sample diagnostic summary",
  subtitle: "Example output shape — not a free full audit. Numbers illustrative of a typical SaaS checkout path.",
  product: "Acme SaaS · checkout + billing API",
  findings: [
    {
      severity: "P0",
      title: "Checkout TTFB dominated by uncached pricing service",
      detail: "p95 ~1.8s on pricing dependency; no edge cache; retries amplify peak latency.",
      impact: "Abandonment risk on mobile checkout",
    },
    {
      severity: "P1",
      title: "N+1 queries on order history dashboard",
      detail: "Avg 40+ queries/request under load; missing composite index on (org_id, created_at).",
      impact: "Support tickets during month-end",
    },
    {
      severity: "P2",
      title: "No performance budget in CI",
      detail: "LCP regressions ship unnoticed; Lighthouse only run ad-hoc.",
      impact: "Slow drift after each release",
    },
  ],
  nextSteps: [
    "Cache pricing responses at edge (short TTL) + circuit breaker",
    "Fix dashboard query + index; verify with EXPLAIN under prod-like data",
    "Add LCP/TTFB budgets to CI for checkout templates",
  ],
};

export const offerAgenda = [
  { time: "0–3 min", item: "Frame: mutual fit, not a sales pitch" },
  { time: "3–20 min", item: "Diagnose: symptoms → business impact → constraints" },
  { time: "20–27 min", item: "Hypotheses + priority order for what to fix first" },
  { time: "27–30 min", item: "Honest fit + clear next step (or a polite decline)" },
];

export const offerOutcomes = [
  "Clear problem framing — what’s slow and where the business feels it",
  "Likely bottleneck hypotheses (frontend, DB, queues, deploys, observability)",
  "A priority order by impact vs effort",
  "An honest read on whether an engagement makes sense",
];

export const nextSteps = [
  { n: "1", title: "30-min diagnostic", body: "Goals, symptoms, stack, constraints." },
  { n: "2", title: "Scope & approach", body: "Audit sprint, fix engagement, or a polite no." },
  { n: "3", title: "Kickoff", body: "Access, milestones, and how we measure “faster”." },
];

export const faq = [
  {
    q: "Is this just a sales call?",
    a: "No. It’s a diagnostic. You’ll leave with a priority list even if we don’t work together. No pitch deck.",
  },
  {
    q: "Do I need to give full production access for the call?",
    a: "Not for the 30-minute diagnostic. A URL, stack notes, and what’s broken are enough. Deeper access comes later if we engage.",
  },
  {
    q: "What stacks do you work with?",
    a: "Django/Postgres/Redis/Celery, Next.js/Vue, nginx, Docker, CI/CD, Core Web Vitals, and production reliability practices. The method transfers across stacks.",
  },
  {
    q: "Will you hand me a 40-page audit and disappear?",
    a: "I don’t stop at recommendations. I identify real bottlenecks, prioritize by business impact, and can support implementation.",
  },
  {
    q: "What won’t this call include?",
    a: "A full audit, code fixes, or a guaranteed Lighthouse score. Those are scoped engagements after we know the problem.",
  },
  {
    q: "What happens after the diagnostic?",
    a: "If there’s a fit, we scope a focused audit sprint or a fix-and-harden engagement. If not, you still keep the priority list — no retainer pressure.",
  },
];
