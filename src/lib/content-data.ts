/**
 * Blog posts and case studies data.
 *
 * Kept in a separate file from site-data.ts to keep the main content file
 * focused on services + industries.
 */

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Engineering" | "AI / ML" | "DevOps" | "Security" | "Industry Insights";
  author: string;
  authorRole: string;
  publishedAt: string; // ISO date
  readingTime: string;
  heroImage: string;
  tags: string[];
  body: { heading?: string; paragraphs?: string[]; bullets?: string[]; quote?: string }[];
};

export type CaseStudy = {
  slug: string;
  client: string;
  clientIndustry: string;
  clientStage: string;
  title: string;
  excerpt: string;
  heroImage: string;
  duration: string;
  team: string;
  metrics: { value: string; label: string }[];
  stack: string[];
  problem: string[];
  solution: string[];
  outcomes: string[];
  quote: { text: string; author: string; role: string };
  tags: string[];
};

/* -------------------------------------------------------------------------- */
/* Blog posts                                                                  */
/* -------------------------------------------------------------------------- */

export const blogPosts: BlogPost[] = [
  {
    slug: "soc2-type-2-in-90-days",
    title: "Building a SOC 2 Type II compliant SaaS in 90 days",
    excerpt:
      "How we shipped a multi-tenant healthcare SaaS through a SOC 2 Type II audit in 90 days — the controls, the trade-offs, and what we'd do differently.",
    category: "Security",
    author: "Vikram Iyer",
    authorRole: "Head of AI & Data, Globantis Labs",
    publishedAt: "2026-08-12",
    readingTime: "11 min",
    heroImage: "/images/wp/2025-02/faq00.jpg",
    tags: ["SOC 2", "Compliance", "Healthcare", "Security"],
    body: [
      {
        paragraphs: [
          "Most SaaS founders discover SOC 2 the hard way — a Fortune 500 prospect blocks the deal at the procurement stage because the vendor doesn't have a Type II report. The conversation shifts from product to compliance overnight. We just shipped a multi-tenant healthcare SaaS through a Type II audit in 90 days. Here's how.",
          "There is a myth that SOC 2 takes 6–12 months. It doesn't. It takes 6–12 months if you treat it as a paperwork exercise done after the product is built. If you build the controls into the engineering process from sprint zero, 90 days is realistic. This article walks through the seven control families we built, the audit evidence we automated, and what we'd do differently.",
        ],
      },
      {
        heading: "The seven control families we built",
        paragraphs: [
          "SOC 2 doesn't prescribe specific technology. It prescribes outcomes: confidentiality, availability, processing integrity, privacy, security. Each of those breaks down into control families. We focused on the seven that the auditor would test most heavily:",
        ],
        bullets: [
          "Access control — RBAC, MFA, just-in-time elevation, quarterly access reviews",
          "Change management — pull requests, code review, automated tests, deployment approvals",
          "Risk assessment — quarterly risk register, threat modelling on every new feature",
          "Monitoring — full observability stack (Grafana + Prometheus + OpenTelemetry)",
          "Vendor management — sub-processor list, SOC 2 collection, annual reviews",
          "Incident response — documented runbook, on-call rotation, post-incident reviews",
          "Data retention — automated retention policies, immutable backups, right-to-erasure",
        ],
      },
      {
        heading: "Automating the audit evidence",
        paragraphs: [
          "The single biggest time-saver was automating evidence collection. We built a small internal tool — call it 'audit-bot' — that runs continuously and pulls evidence into a single dashboard. Every control maps to one or more automated checks:",
        ],
        bullets: [
          "RBAC changes → audit log → daily evidence snapshot to S3",
          "Every PR merged → record with reviewer, files changed, tests passed",
          "Every production deploy → record with approver, diff, rollback path",
          "Every access request → recorded with the 4-eyes approval",
          "Quarterly access review → automated user-list + manager attestation",
        ],
        quote:
          "When the auditor asked for 90 days of access-control evidence, we pointed them at a Grafana dashboard. They asked one follow-up question and moved on. That's the bar to aim for.",
      },
      {
        heading: "What we'd do differently",
        paragraphs: [
          "Three things, in hindsight:",
          "First, we'd build audit-bot earlier. We shipped it in week 4 and spent the first three weeks manually collecting evidence for the auditor's pre-audit review. With audit-bot from sprint zero, we'd have skipped those three weeks.",
          "Second, we'd bring the auditor in earlier. We didn't engage them until week 6. Had we engaged them at sprint zero, they could have guided control design and saved us a re-write of two controls.",
          "Third, we'd run a mock audit at week 8, not week 11. The mock surfaced three gaps that took a week each to close. Running it three weeks earlier would have given us breathing room.",
        ],
      },
      {
        heading: "The bottom line",
        paragraphs: [
          "SOC 2 in 90 days is achievable if you treat compliance as an engineering problem, not a documentation problem. Build the controls into the SDLC from day one, automate the evidence, and bring the auditor in early. The report is a side-effect of running a mature engineering organisation — not the goal.",
        ],
      },
    ],
  },
  {
    slug: "redux-to-zustand-migration",
    title: "Why we replaced Redux with Zustand on a 200k-line codebase",
    excerpt:
      "We migrated 87 Redux stores to Zustand in 6 weeks. 41% less state code, 23% faster renders, and zero regressions. Here's the playbook.",
    category: "Engineering",
    author: "Sofia Renaud",
    authorRole: "VP, Engineering, Globantis Labs",
    publishedAt: "2026-07-28",
    readingTime: "9 min",
    heroImage: "/images/wp/2025-02/technology1.png",
    tags: ["React", "Redux", "Zustand", "State management"],
    body: [
      {
        paragraphs: [
          "Redux has been the default state management library for serious React apps for a decade. It's excellent. It also carries a tax — boilerplate, action types, reducers, selectors, middleware configuration. On a 200k-line codebase we inherited from a client, that tax was eating 41% of the front-end code budget. We migrated to Zustand in 6 weeks and the results were striking.",
          "This article isn't a Redux hit-piece. Redux has its place — large teams with strong conventions, time-travel debugging, hot-reload. But for most product code, Zustand gives you 90% of the value with 30% of the code. Here's the migration playbook we used.",
        ],
      },
      {
        heading: "Why we moved off Redux",
        paragraphs: [
          "Three numbers pushed us over the edge:",
        ],
        bullets: [
          "41% of front-end LoC was Redux boilerplate (actions, types, reducers, selectors)",
          "23% of render time was selector re-computation — even with Reselect memoisation",
          "Onboarding new engineers took 2 weeks longer because of the Redux mental model",
        ],
      },
      {
        heading: "The migration in three phases",
        paragraphs: [
          "We didn't rewrite. We migrated, file by file, behind feature flags. The playbook:",
        ],
        bullets: [
          "Phase 1 (week 1–2): Add Zustand alongside Redux. New feature code uses Zustand. Existing Redux stays untouched.",
          "Phase 2 (week 3–4): Migrate one store at a time, starting with the leaf stores (least depended-on). Each migration ships behind a flag.",
          "Phase 3 (week 5–6): Remove the last Redux store. Delete the Redux dependencies. Run the final test pass.",
        ],
        quote:
          "The killer feature of Zustand isn't the API — it's that you can migrate to it gradually. Try that with Redux Toolkit.",
      },
      {
        heading: "The results",
        paragraphs: [
          "After 6 weeks and 87 stores migrated:",
          "Front-end LoC dropped 41%. Render time dropped 23%. Onboarding time for new engineers dropped from 2 weeks to 4 days. And the migration shipped zero regressions — every change was behind a flag and tested in production before the flag flipped.",
        ],
      },
    ],
  },
  {
    slug: "mlops-shipping-models-like-code",
    title: "MLOps: shipping models like code, not experiments",
    excerpt:
      "ML models in production fail differently than application code. Here's the MLOps stack we built to ship 30+ models with the same release discipline as software.",
    category: "AI / ML",
    author: "Vikram Iyer",
    authorRole: "Head of AI & Data, Globantis Labs",
    publishedAt: "2026-07-15",
    readingTime: "13 min",
    heroImage: "/images/wp/2025-01/blog_new_05.jpg",
    tags: ["MLOps", "Machine Learning", "CI/CD", "Production"],
    body: [
      {
        paragraphs: [
          "Most ML models never make it to production. Of those that do, most fail silently — drift, stale features, broken dependencies, broken retraining pipelines. We've shipped 30+ production models over the last three years, and we've made every mistake there is to make. This article is the playbook we built to stop making them.",
          "MLOps is not DevOps with extra steps. It's a different discipline because models fail differently. Code either works or it doesn't. Models degrade. The infrastructure has to assume degradation is a normal operating mode, not an exception.",
        ],
      },
      {
        heading: "The five pieces of the MLOps stack",
        paragraphs: [
          "Every production ML system we ship has these five pieces. None is optional.",
        ],
        bullets: [
          "Feature store — versioned features with point-in-time correctness for training and serving",
          "Model registry — every model versioned with training data hash, code hash, metrics, and approver",
          "Inference API — REST + gRPC with latency budgets and per-model autoscaling",
          "Drift monitoring — input distribution + prediction distribution + ground-truth-vs-prediction",
          "Retraining pipeline — scheduled, with human approval for production rollout",
        ],
      },
      {
        heading: "Models are versioned like code",
        paragraphs: [
          "Every model artifact has a SHA. The SHA is composed of: training code commit, training data hash, hyperparameters, evaluation metrics, approver. The model doesn't ship to production unless all five are recorded and the approver has signed off. This sounds bureaucratic. It's not — it's automated and takes 4 minutes from training run to production deploy.",
        ],
        quote:
          "If you can't tell me which version of which model served which prediction three weeks ago, you don't have a production ML system. You have a notebook with a server in front of it.",
      },
      {
        heading: "Drift is the silent killer",
        paragraphs: [
          "The single most common cause of production ML failure we see is undetected drift. The model was correct at training time. By month 6, the input distribution has shifted 18%. The model is confidently wrong. No one notices because the application code still works and the API still returns 200.",
          "Our drift monitoring tracks three distributions: input features, prediction distribution, and (where ground truth becomes available) actual-vs-predicted. Any of the three breaching a threshold pages the on-call engineer. The threshold is set per-model based on training-time variance.",
        ],
      },
      {
        heading: "The bottom line",
        paragraphs: [
          "Production ML is a discipline, not a notebook. The five-piece stack above has shipped 30+ models for us across fintech, healthcare, and retail. The models that fail are the ones that skipped one of the pieces. The ones that succeed all have all five.",
        ],
      },
    ],
  },
  {
    slug: "kubernetes-migration-40-services",
    title: "Kubernetes migration: what we learned moving 40 services off VMs",
    excerpt:
      "A 9-month migration of 40 services from VMs to managed K8s. The wins, the losses, the things we'd never do again.",
    category: "DevOps",
    author: "Daniel Carter",
    authorRole: "VP, Delivery & Client Success, Globantis Labs",
    publishedAt: "2026-06-30",
    readingTime: "12 min",
    heroImage: "/images/wp/2025-01/project_new_02.jpg",
    tags: ["Kubernetes", "Cloud", "DevOps", "Migration"],
    body: [
      {
        paragraphs: [
          "We just finished a 9-month migration of 40 services from a VM-based platform onto managed Kubernetes. The client is a B2B SaaS serving 12 countries with strict compliance requirements. This article is the unvarnished story — the wins, the losses, and what we'd never do again.",
        ],
      },
      {
        heading: "Why we moved",
        paragraphs: [
          "The VM platform was scaling — but painfully. Deploys took 18 minutes. Autoscaling required provisioning new VMs (5–10 minutes). Each new service meant a Terraform module, a Jenkins job, a Sensu check, and a wiki page. Three of the client's top 10 incidents in the prior year were 'autoscaling didn't kick in fast enough.' Something had to change.",
        ],
      },
      {
        heading: "The wins",
        paragraphs: [
          "After 9 months on managed K8s (EKS):",
        ],
        bullets: [
          "Deploy time: 18 minutes → 90 seconds",
          "Autoscale latency: 5–10 minutes → 30 seconds",
          "Cost: 22% lower (right-sized pods, spot instances on non-prod)",
          "Incidents: P1 count down 47% (autoscaling actually works now)",
          "Time-to-prod for a new service: 2 weeks → 2 hours (Helm chart + Argo CD)",
        ],
      },
      {
        heading: "The losses",
        paragraphs: [
          "Not everything improved:",
        ],
        bullets: [
          "Operational complexity went up — K8s has a steep learning curve and the client's SREs needed 3 months of dedicated training",
          "Debugging got harder — distributed tracing is mandatory, you can't SSH into a pod and tail logs anymore",
          "Some legacy services didn't fit — stateful workloads (Kafka, Postgres) stayed on VMs, which means running two platforms in parallel",
        ],
        quote:
          "If you're going to do this migration, accept that you'll run two platforms for at least 6 months. Anyone who tells you 'rip and replace' has never done it.",
      },
      {
        heading: "What we'd never do again",
        paragraphs: [
          "Three things, in hindsight:",
          "First, we'd start with observability, not infrastructure. We spent the first 6 weeks setting up EKS, Argo CD, and the ingress controller. We should have spent those 6 weeks installing Prometheus, Grafana, Jaeger, and Loki first — and only then started moving services. Without observability, the first migration was flying blind.",
          "Second, we'd never migrate a stateful service to K8s unless we absolutely had to. Kafka and Postgres stayed on VMs and that was the right call. The temptation to put everything on K8s for consistency is real — resist it.",
          "Third, we'd budget 3 months of dedicated training for the client's SRE team, not 3 weeks. K8s is not Jenkins. The mental model is different and the team needs time to internalise it.",
        ],
      },
    ],
  },
  {
    slug: "design-sprint-saves-6-weeks",
    title: "Design sprints: how a 5-day exercise saves 6 weeks",
    excerpt:
      "We ran a 5-day design sprint for a fintech client and killed two bad features before writing any code. The math: 5 days invested, 6 weeks saved.",
    category: "Industry Insights",
    author: "Sofia Renaud",
    authorRole: "VP, Engineering, Globantis Labs",
    publishedAt: "2026-06-12",
    readingTime: "8 min",
    heroImage: "/images/wp/2025-02/about_o01.jpg",
    tags: ["Design", "Product", "Discovery", "UX"],
    body: [
      {
        paragraphs: [
          "The hardest code to write is the code that solves a problem nobody has. We've shipped features that took 6 weeks to build and got 0 user adoption because the underlying assumption was wrong. A design sprint is the cheapest way to avoid that mistake — 5 days, 8 users, and a clickable prototype is enough to kill a bad feature before you commit a sprint to it.",
        ],
      },
      {
        heading: "The 5-day structure",
        paragraphs: [
          "We run a variant of the Google Ventures sprint, tuned for B2B SaaS:",
        ],
        bullets: [
          "Monday: Map — align the team on the problem, the user, the goal",
          "Tuesday: Sketch — every participant sketches solutions individually, then critiques",
          "Wednesday: Decide — pick a solution, build a storyboard for the prototype",
          "Thursday: Prototype — build a clickable Figma prototype (no production code)",
          "Friday: Test — 5–8 user interviews, watch them use the prototype, synthesize",
        ],
      },
      {
        heading: "The fintech case study",
        paragraphs: [
          "Our client — a B2B fintech — wanted to build a 'smart insights' feature for their dashboard. The hypothesis: users would value auto-generated insights on top of their financial data. Estimated effort: 6 weeks of engineering.",
          "We ran a 5-day sprint. By Friday afternoon, we had tested the prototype with 8 users. 6 of 8 didn't open the insights panel. The 2 who did, didn't act on the insights. The hypothesis was wrong. We killed the feature.",
        ],
        quote:
          "5 days of sprint cost saved 6 weeks of engineering. That's a 30x return on time. The math is brutal — there is no scenario where skipping the sprint is the right call.",
      },
      {
        heading: "When NOT to run a sprint",
        paragraphs: [
          "Sprints aren't free — they take 5 days of senior attention from product, design, engineering, and (often) the client. They pay off when the cost of being wrong is high. They don't pay off when the feature is small, the hypothesis is well-tested, or the team has strong existing signal.",
          "Our rule: if the engineering estimate is more than 2 sprints, we run a sprint. If it's less, we ship and measure.",
        ],
      },
    ],
  },
  {
    slug: "slo-driven-engineering",
    title: "Observability for SLO-driven engineering",
    excerpt:
      "SLOs without observability are wishes. Here's the stack we use to turn error budgets into engineering decisions.",
    category: "DevOps",
    author: "Daniel Carter",
    authorRole: "VP, Delivery & Client Success, Globantis Labs",
    publishedAt: "2026-05-28",
    readingTime: "10 min",
    heroImage: "/images/wp/2025-01/project_new_06.jpg",
    tags: ["SLO", "Observability", "Reliability", "DevOps"],
    body: [
      {
        paragraphs: [
          "An SLO is a contract between the service and its users: 'we will be available 99.95% of the time, measured over a 30-day window.' That contract only matters if it drives engineering decisions. Otherwise it's a vanity metric on a dashboard nobody looks at. This article is the stack and process we use to turn SLOs into decisions.",
        ],
      },
      {
        heading: "The stack",
        paragraphs: [
          "Four pieces, none optional:",
        ],
        bullets: [
          "Metrics — Prometheus for scrape, Grafana for dashboards. SLO dashboards show error budget, burn rate, and trend.",
          "Logs — Loki for structured logs, integrated with Grafana so you can pivot from a metric spike to the underlying logs.",
          "Traces — Jaeger for distributed tracing. Every production request has a trace ID. Latency problems are diagnosed in minutes, not hours.",
          "Alerts — alert on burn rate, not on absolute thresholds. A 99.95% SLO with a 2% burn rate over 1 hour pages the on-call. A single 5xx doesn't.",
        ],
      },
      {
        heading: "The error budget decision framework",
        paragraphs: [
          "Every SLO has an error budget. 99.95% availability over 30 days = 21.6 minutes of allowed downtime. When the budget is healthy, the team can take risks — feature work, migrations, refactors. When the budget is depleted, the team shifts to stability work — bug fixes, hardening, no new features.",
          "This decision isn't made by a manager. It's made by the error budget dashboard. The team checks the dashboard every Monday morning. If budget is below 50%, the week is stability. If above 50%, the week is feature work. This removes the political negotiation about 'can we ship this risky change' — the data decides.",
        ],
        quote:
          "SLOs without an error budget decision framework are decoration. The budget is the point.",
      },
      {
        heading: "What we've measured",
        paragraphs: [
          "Across 14 client engagements with SLO-driven engineering, we've measured:",
        ],
        bullets: [
          "MTTR down 64% (from 4.2h to 1.5h average)",
          "P1 incident count down 41%",
          "Engineer on-call fatigue down (subjective, but exit interviews cite it)",
          "Feature velocity unchanged (the worry that 'SLOs slow us down' is wrong — they redirect, not reduce)",
        ],
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* Case studies                                                                */
/* -------------------------------------------------------------------------- */

export const caseStudies: CaseStudy[] = [
  {
    slug: "fintech-fraud-detection",
    client: "Confidential fintech client",
    clientIndustry: "Financial Services",
    clientStage: "Series B",
    title: "Cut fraud false-positives by 60% with a real-time ML scoring engine",
    excerpt:
      "We built a real-time fraud-scoring engine that handles 4,500 transactions/second at 180ms p99 latency — and cut false positives by 60%.",
    heroImage: "/images/wp/2025-01/blog_new_02.jpg",
    duration: "10 weeks",
    team: "1 ML lead, 2 ML engineers, 1 platform engineer, 1 designer",
    metrics: [
      { value: "60%", label: "False-positive reduction" },
      { value: "94%", label: "Model precision" },
      { value: "180ms", label: "p99 inference latency" },
      { value: "4,500/s", label: "Peak throughput" },
    ],
    stack: ["Python", "TensorFlow", "Kafka", "Postgres", "AWS", "Kubernetes"],
    problem: [
      "The client's existing fraud-detection system was rules-based — 700+ hand-written rules that flagged 12% of transactions for manual review. Of those, only 0.3% were actual fraud. The false-positive rate was destroying customer experience and overloading the 24-person fraud-ops team.",
      "The client had tried to ship an ML model twice. Both attempts failed in production — the first because the model couldn't keep up with the transaction rate, the second because drift monitoring wasn't built and the model degraded silently over 6 months.",
    ],
    solution: [
      "We built a streaming fraud-scoring engine with a clear architecture: Kafka topic for transactions, consumer that calls the inference API, scoring result written back to Kafka for downstream action.",
      "The model itself was a gradient-boosted-tree ensemble trained on 18 months of historical data. We avoided deep learning because the marginal precision gain (2%) didn't justify the 4x latency cost. The ensemble gives 94% precision at 180ms p99.",
      "On the MLOps side, we built the full stack: feature store, model registry with code+data+metrics hash, drift monitoring on input distribution and prediction distribution, and a quarterly retraining pipeline with human approval for production rollout.",
    ],
    outcomes: [
      "False-positive rate cut 60% (from 12% to 4.8% of flagged transactions)",
      "Fraud-ops team headcount freed for higher-value investigation work",
      "Quarterly retraining keeps precision above 92% with no manual intervention",
      "Latency budget (200ms) never breached in 12 months of production",
    ],
    quote: {
      text: "They shipped our fraud-detection model in 10 weeks. Precision 94%, false-positive rate cut by 60%, ROI in 5 months. The MLOps discipline is what made it stick.",
      author: "Head of Risk",
      role: "Series B Fintech",
    },
    tags: ["Financial Services", "AI / ML", "Real-time", "MLOps"],
  },
  {
    slug: "healthcare-telemedicine-hipaa",
    client: "Confidential healthcare network",
    clientIndustry: "Healthcare",
    clientStage: "Enterprise",
    title: "HIPAA-compliant telemedicine platform shipped in 16 weeks",
    excerpt:
      "A full telemedicine platform — scheduling, video visits, AI-assisted notes, EHR integration — built HIPAA-compliant from sprint zero.",
    heroImage: "/images/wp/2025-02/about_o01.jpg",
    duration: "16 weeks",
    team: "1 tech lead, 4 engineers, 1 designer, 1 compliance lead",
    metrics: [
      { value: "16 weeks", label: "Sprint zero to launch" },
      { value: "12", label: "Providers onboarded at launch" },
      { value: "0", label: "PHI incidents in 18 months" },
      { value: "99.99%", label: "Uptime SLA" },
    ],
    stack: ["Next.js", "Node.js", "Postgres", "WebRTC", "AWS", "Snowflake"],
    problem: [
      "The client — a regional healthcare network with 12 hospitals — needed to scale telemedicine from a 2-hospital pilot to a network-wide rollout. The pilot was built on a third-party SaaS that didn't meet HIPAA BAA requirements and couldn't integrate with the network's EHR (Epic).",
      "The build-vs-buy decision was complex: existing telemedicine SaaS vendors didn't meet compliance or integration needs. Custom build was the only path — but the timeline was 16 weeks before the pilot contract expired.",
    ],
    solution: [
      "We built a custom telemedicine platform with four pillars: scheduling (CalendarCore, our internal scheduling engine), video visits (WebRTC with Twilio as fallback), AI-assisted clinical notes (Whisper for transcription, GPT-4 for SOAP note structuring), and bidirectional EHR integration (FHIR API to Epic).",
      "HIPAA compliance was built into the SDLC from sprint zero: PHI encryption at rest (AES-256) and in transit (TLS 1.3), audit logging of every PHI access, role-based access with quarterly access reviews, BAA signed with every sub-processor (AWS, Twilio, OpenAI).",
      "We brought the compliance lead into the daily standup from day one. Every PR that touched PHI got a compliance review before merge. This sounds heavy — it added 4 hours per PR, not 4 days.",
    ],
    outcomes: [
      "Launched on schedule with 12 providers and 4 specialties",
      "0 PHI incidents in 18 months of production (audited quarterly)",
      "Average visit duration down 22% due to AI-assisted notes",
      "99.99% uptime SLA met in every month since launch",
    ],
    quote: {
      text: "They hit a 16-week deadline that two other firms said was impossible. Compliance was treated as an engineering problem, not a separate workstream.",
      author: "CMIO",
      role: "Regional healthcare network",
    },
    tags: ["Healthcare", "HIPAA", "Telemedicine", "AI"],
  },
  {
    slug: "ecommerce-headless-rebuild",
    client: "Confidential D2C e-commerce brand",
    clientIndustry: "E-commerce & Retail",
    clientStage: "Series C",
    title: "38% conversion uplift on a headless commerce rebuild",
    excerpt:
      "Replaced a monolithic Magento storefront with a headless Next.js + Shopify backend. 38% conversion uplift, 0.8s LCP, 4.8★ on Trustpilot.",
    heroImage: "/images/wp/2025-02/concept.png",
    duration: "14 weeks",
    team: "1 tech lead, 3 engineers, 1 designer, 1 QA",
    metrics: [
      { value: "+38%", label: "Conversion uplift" },
      { value: "0.8s", label: "LCP (was 4.2s)" },
      { value: "4.8★", label: "Trustpilot (was 3.4★)" },
      { value: "-27%", label: "Cart abandonment" },
    ],
    stack: ["Next.js", "Shopify", "Stripe", "Algolia", "Vercel"],
    problem: [
      "The client's Magento storefront was the conversion bottleneck. LCP of 4.2s on mobile. Checkout completion under 60%. Trustpilot rating at 3.4★ driven mostly by site-performance complaints. The team was spending 40% of engineering time on Magento maintenance instead of feature work.",
      "The brief was clear: rebuild the storefront, keep the Shopify backend (already integrated with the warehouse and finance), and ship in one quarter.",
    ],
    solution: [
      "We rebuilt the storefront on Next.js 16 with Shopify as the commerce backend (headless via Storefront API), Stripe for payments, and Algolia for search. The design system was rebuilt from scratch — 38 components, full token set, accessibility AA.",
      "Performance was the primary non-functional requirement. We set budgets: LCP under 1s, JS bundle under 150kb initial, image weight under 300kb on mobile. Every PR that breached a budget failed CI. The 0.8s LCP is the result of those budgets, not a tuning exercise at the end.",
      "We ran a 5-day design sprint in week 2 to test the new checkout flow with 8 users. The sprint killed one bad assumption (a 'one-page checkout' that confused users) and saved 4 weeks of engineering.",
    ],
    outcomes: [
      "Conversion uplift 38% (measured over 90 days post-launch vs 90 days pre-launch)",
      "Mobile LCP 0.8s (was 4.2s) — Google Core Web Vitals all green",
      "Trustpilot rating 4.8★ within 60 days of launch",
      "Cart abandonment down 27%",
      "Engineering time on feature work up from 60% to 92% (no Magento maintenance)",
    ],
    quote: {
      text: "They shipped our headless rebuild in 14 weeks. 38% conversion uplift, 0.8s LCP, 4.8★ on Trustpilot. We've stopped firefighting Magento and started shipping features.",
      author: "VP E-commerce",
      role: "Series C D2C brand",
    },
    tags: ["E-commerce", "Headless", "Performance", "Next.js"],
  },
  {
    slug: "logistics-supply-chain-visibility",
    client: "Confidential 3PL provider",
    clientIndustry: "Logistics",
    clientStage: "Enterprise",
    title: "Real-time supply chain visibility across 12 carriers",
    excerpt:
      "Unified 12 carrier APIs into a single real-time visibility platform. ETA accuracy up from 62% to 94%. Customer-reported exceptions down 71%.",
    heroImage: "/images/wp/2025-01/why_choose01.jpg",
    duration: "22 weeks",
    team: "1 tech lead, 5 engineers, 1 data engineer, 1 designer",
    metrics: [
      { value: "94%", label: "ETA accuracy (was 62%)" },
      { value: "12", label: "Carriers integrated" },
      { value: "-71%", label: "Customer exceptions" },
      { value: "<2min", label: "Status update latency" },
    ],
    stack: ["Go", "Kafka", "Postgres", "Redis", "GCP", "BigQuery"],
    problem: [
      "The client — a top-20 US 3PL — had visibility into 60% of shipments. The other 40% went dark between pickup and delivery. Customer service was reactive, not proactive. ETA accuracy was 62%, meaning customers were surprised by delays more often than not.",
      "Each of the 12 carrier integrations was a snowflake — different API, different data model, different update cadence. The team couldn't add a new carrier in less than 8 weeks.",
    ],
    solution: [
      "We built a unified visibility platform: a normalised data model across all 12 carriers, a streaming pipeline (Kafka) for real-time status updates, an ETA prediction model (gradient-boosted trees on historical lane data), and a customer-facing dashboard.",
      "The carrier integration framework uses a plugin architecture — each carrier is a Go package implementing a Carrier interface. Adding a new carrier dropped from 8 weeks to 2 weeks.",
      "ETA prediction was the highest-leverage piece. The model runs every 5 minutes on every active shipment and pushes updated ETAs to the customer dashboard. Accuracy went from 62% (carrier-reported) to 94% (model-predicted).",
    ],
    outcomes: [
      "ETA accuracy 94% (up from 62%)",
      "Customer-reported exceptions down 71% (proactive alerting catches issues first)",
      "Carrier onboarding time 8 weeks → 2 weeks",
      "Status update latency under 2 minutes (was 15+ minutes for some carriers)",
    ],
    quote: {
      text: "We went from 62% ETA accuracy to 94% in 22 weeks. Customer service became proactive. The framework means new carriers take 2 weeks, not 8.",
      author: "VP Operations",
      role: "Top-20 US 3PL",
    },
    tags: ["Logistics", "Real-time", "Data", "AI"],
  },
  {
    slug: "education-cloud-lms-scale",
    client: "Confidential education publisher",
    clientIndustry: "Education",
    clientStage: "Enterprise",
    title: "Scaled a cloud LMS to 250k concurrent learners",
    excerpt:
      "Rebuilt a legacy on-prem LMS as a cloud-native multi-tenant platform. Scaled to 250k concurrent learners with sub-second response time.",
    heroImage: "/images/wp/2025-04/testimonials.jpg",
    duration: "26 weeks",
    team: "1 tech lead, 6 engineers, 1 architect, 1 designer",
    metrics: [
      { value: "250k", label: "Concurrent learners" },
      { value: "0.6s", label: "p95 response time" },
      { value: "99.95%", label: "Uptime during exam season" },
      { value: "12", label: "Tenants onboarded" },
    ],
    stack: ["Java", "Spring Boot", "Postgres", "Redis", "AWS", "Kubernetes"],
    problem: [
      "The client's on-prem LMS couldn't scale past 40k concurrent learners without falling over. During exam season, the platform degraded visibly — pages took 8+ seconds to load, assignments submission timed out, and the support inbox filled up.",
      "A cloud migration was needed, but the LMS was 12 years old, 480k lines of Java, and 0 test coverage on the hot paths. A rebuild wasn't an option — the business logic was too entangled with 12 years of regulatory compliance work.",
    ],
    solution: [
      "We followed a 'strangle fig' migration: kept the legacy LMS running, extracted services one at a time behind API gateways, and ran both platforms in parallel for 6 months. The last legacy service was decommissioned in week 26.",
      "Multi-tenancy was built into the data layer — every table has a tenant_id, every query is scoped. This let us onboard 12 school districts onto the same platform without code forks.",
      "We built test coverage on the hot paths first (assignment submission, gradebook, content delivery) — 87% line coverage on those paths within 4 weeks. The rest of the codebase got coverage as we extracted each service.",
    ],
    outcomes: [
      "250k concurrent learners sustained (was 40k)",
      "p95 response time 0.6s (was 8s on legacy at peak)",
      "99.95% uptime during exam season (the highest-stress period)",
      "12 school districts onboarded onto the same multi-tenant platform",
      "0 critical incidents in the first exam season post-launch",
    ],
    quote: {
      text: "We survived our first exam season post-launch without a single P1. Last year we had 14. The strangle-fig approach is what made it possible.",
      author: "CIO",
      role: "Education publisher",
    },
    tags: ["Education", "Cloud", "Scale", "Multi-tenancy"],
  },
  {
    slug: "saas-dashboard-12-weeks",
    client: "Confidential B2B SaaS startup",
    clientIndustry: "SaaS",
    clientStage: "Seed",
    title: "$2M ARR SaaS dashboard shipped in 12 weeks",
    excerpt:
      "From Figma to $2M ARR in 12 weeks. A multi-tenant B2B SaaS dashboard with RBAC, audit trails, and SOC 2-ready controls from sprint zero.",
    heroImage: "/images/wp/2025-01/blog_new_03.jpg",
    duration: "12 weeks",
    team: "1 tech lead, 3 engineers, 1 designer, 1 part-time compliance lead",
    metrics: [
      { value: "12 weeks", label: "Sprint zero to first paying customer" },
      { value: "$2M", label: "ARR within 9 months" },
      { value: "92%", label: "On-time delivery" },
      { value: "100%", label: "Code ownership transfer" },
    ],
    stack: ["Next.js", "Node.js", "Postgres", "Stripe", "AWS", "Terraform"],
    problem: [
      "The client — a seed-stage SaaS startup — had raised $4M and needed to ship their MVP in one quarter or run out of runway. The previous founding engineer had left, and the codebase was a 6-week prototype with no tests, no CI, and one user (the founder).",
      "The brief: take it from prototype to production in 12 weeks, with SOC 2 controls built in from sprint zero (their biggest prospect was blocking the deal on SOC 2 readiness).",
    ],
    solution: [
      "We ran a strict 2-week sprint cadence with Friday demos. The founder was in every demo — no surprise scope changes, no end-of-quarter surprises.",
      "Architecture: Next.js 16 front-end, Node.js API, Postgres, Stripe for billing, AWS with Terraform for infra. Multi-tenant from day one — every table has a tenant_id, every query is scoped.",
      "SOC 2 controls were built into the SDLC: RBAC, MFA, audit logging on every PHI-sensitive action, automated access reviews, signed BAA with every sub-processor. The controls weren't a separate workstream — they were part of every PR.",
      "We wrote ADRs (architecture decision records) for every non-trivial decision. The client inherited 23 ADRs — that's the documentation a future team needs to maintain the codebase.",
    ],
    outcomes: [
      "12 weeks from sprint zero to first paying customer",
      "$2M ARR within 9 months of launch",
      "92% on-time delivery across 6 sprints",
      "100% code ownership transferred to the client team",
      "SOC 2 Type I audit passed in month 4 (Type II at month 16)",
    ],
    quote: {
      text: "They shipped our MVP in 12 weeks. $2M ARR within 9 months. The ADRs alone were worth the engagement — we'd have made three bad architectural decisions without them.",
      author: "Founder & CEO",
      role: "Seed-stage SaaS",
    },
    tags: ["SaaS", "MVP", "SOC 2", "Multi-tenancy"],
  },
];
