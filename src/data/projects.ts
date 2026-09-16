export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  architecture: string[];
  highlights: string[];
  limitations: string[];
  stack: string[];
  repo: string;
};

export const projects: Project[] = [
  {
    slug: "briefgenerator",
    title: "BriefGenerator",
    tagline: "PDF upload to LLM extraction to branded PDF briefing",
    description:
      "A secure REST API that pulls text out of an uploaded PDF, asks an LLM to structure it into a title, executive summary, key points, and notable entities, then renders that back into a clean, branded one-page PDF. Also ships an OpenAPI schema so it can be dropped straight into a Custom GPT as an Action.",
    problem:
      "A public, self-contained version of a pattern I use in production: document ingestion into LLM structuring into server-side PDF rendering, sitting behind an OAuth2-secured API. The real version lives inside a regulated finance environment and isn't public, so this rebuilds the same pattern end to end with non-confidential data.",
    architecture: [
      "auth.py implements an OAuth2 client-credentials grant with role claims embedded in a signed JWT, gated per-endpoint with @require_role.",
      "extraction.py pulls text with pdfplumber, then calls an LLM (OpenAI or Anthropic, switchable via LLM_PROVIDER) with a JSON schema so the response comes back guaranteed-structured.",
      "rendering.py plus a Jinja2 template turn that structured data into a styled PDF with WeasyPrint — no headless browser needed.",
      "openapi.yaml describes both endpoints and drops straight into a Custom GPT's Actions configuration.",
    ],
    highlights: [
      "OAuth2 client-credentials auth with JWT-based RBAC",
      "OpenAPI schema wired for Custom GPT Actions",
      "Server-side PDF rendering pipeline (WeasyPrint)",
    ],
    limitations: [
      "Client roles are hardcoded in auth.py rather than backed by a real store",
      "Local file handling only — no Blob storage/SAS delivery for large documents yet",
    ],
    stack: ["Python", "Flask", "OAuth2", "LLM", "OpenAPI"],
    repo: "https://github.com/pryzmatical/BriefGenerator",
  },
  {
    slug: "opsdesk",
    title: "OpsDesk",
    tagline: "An internal-tools console: tickets, jobs, and utilities",
    description:
      "A ticket dashboard, a background job runner, and a handful of single-purpose utilities, all behind role-gated session auth. Built on a deliberately different stack from BriefGenerator to show breadth: Next.js and TypeScript end to end, with human session login instead of machine-to-machine auth.",
    problem:
      "A different-stack version of the same 'internal tools' pattern I build professionally — a ticket dashboard, a background job runner, and standalone utilities behind one auth layer, done in Next.js/TypeScript with human session login instead of BriefGenerator's OAuth2 machine auth.",
    architecture: [
      "lib/auth.ts is pure crypto (bcryptjs + jose) with no framework dependency, directly unit-tested; lib/session.ts wraps it with Next.js cookies.",
      "lib/rbac.ts is a second pure module — requireSession/requireAdmin throw typed errors, converted to 401/403 JSON in Route Handlers or a redirect in Server Components.",
      "proxy.ts (Next.js 16's renamed Middleware) stays a thin coarse gate — cookie read, JWT verify, redirect — with rbac.ts as the real authorization boundary, per Next's own guidance.",
      "The job runner inserts a QUEUED row and drives it through RUNNING to SUCCEEDED/FAILED on timed transitions with no external queue; the UI polls until it hits a terminal state.",
    ],
    highlights: [
      "Role-gated session auth (jose + bcryptjs)",
      "Prisma/SQLite data layer",
      "Server components + API routes in one Next.js app",
    ],
    limitations: [
      "Timer-based job runner only works on a persistent Node process, not serverless/edge",
      "Two seeded demo accounts, no self-serve signup yet",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "Auth"],
    repo: "https://github.com/pryzmatical/OpsDesk",
  },
  {
    slug: "webhookrelay",
    title: "WebhookRelay",
    tagline: "Reliable webhook delivery: fan-out, retries, replay",
    description:
      "A webhook ingestion API and a fan-out delivery worker, running as separate processes that only coordinate through Postgres. Built specifically to show backend and distributed-systems signal that a UI-heavy project can't: queues, retries, idempotency, dead-lettering, and observability.",
    problem:
      "Built specifically to add backend/distributed-systems signal a UI-heavy repo can't: real retries, idempotency, and a queue that survives a crash mid-fan-out. Not modeled on production work — the problem itself (Stripe/Svix/Hookdeck-shaped) is real and common enough to implement properly instead of as a toy.",
    architecture: [
      "API and worker are separate binaries/processes, coordinating only through Postgres — the API only enqueues, the worker only dequeues, so ingestion stays responsive when delivery backs up.",
      "Postgres-native queue (River) — InsertTx commits the event, delivery row, and queued job as one transaction, avoiding a dual-write between business data and the queue.",
      "events.idempotency_key is a unique DB constraint; fan-out only happens on the branch where the event was newly inserted, so retried requests don't double-deliver.",
      "The worker explicitly marks a delivery dead-lettered when a failed attempt was also the last allowed one, backed by a durable deliveries table (open-source River has no DLQ table).",
    ],
    highlights: [
      "Postgres-native queue (riverqueue/river) instead of Redis",
      "HMAC request signing, idempotency, and explicit dead-lettering",
      "Prometheus metrics and health/ready checks on both binaries",
    ],
    limitations: [
      "Rate limiting is one in-memory token bucket per subscriber — doesn't coordinate across horizontally-scaled worker replicas",
      "Single static API key auth — a machine-to-machine ingestion API, not a human-facing app",
    ],
    stack: ["Go", "PostgreSQL", "Distributed Systems", "Webhooks"],
    repo: "https://github.com/pryzmatical/WebhookRelay",
  },
  {
    slug: "frameforecast",
    title: "FrameForecast",
    tagline: "Estimated FPS from your specs, game, and mods",
    description:
      "Takes your PC specs, a game, and a set of mods you're considering, and returns an estimated FPS range from a small regression model trained on a hand-curated dataset, with a feature-importance breakdown showing what's actually driving the estimate.",
    problem:
      "Built out of personal interest in PC hardware and modding, as an excuse to build a small, honest applied-ML feature end to end — curated training data, a documented feature/impact model, and a results UI that surfaces uncertainty and interpretability instead of hiding them.",
    architecture: [
      "A RandomForestRegressor in a scikit-learn Pipeline, trained on ~2,800 synthesized rows combining curated hardware benchmarks with a documented, deterministic mod-impact model.",
      "The FPS range shown to the user comes from the spread of predictions across the forest's individual trees — a genuine, model-native uncertainty measure, not a made-up margin.",
      "The feature-importance breakdown comes straight from feature_importances_, grouped into readable categories.",
      "Stateless FastAPI backend (GET /catalog, GET /games/{id}/mods, POST /predict) with no accounts or database — every request is independent.",
    ],
    highlights: [
      "scikit-learn regression pipeline with documented feature/impact model",
      "FastAPI inference endpoint",
      "React/Vite UI that surfaces model uncertainty, not just a single number",
    ],
    limitations: [
      "Explicitly an estimate, not a simulation — the docs are upfront that real FPS depends on engine internals, shader compilation, and driver behavior no offline tool can compute",
      "Hardware modeled as coarse tiers (3 CPU/5 GPU/3 RAM/3 resolutions) rather than individual part SKUs, by design",
    ],
    stack: ["Python", "FastAPI", "scikit-learn", "React"],
    repo: "https://github.com/pryzmatical/frameforecast",
  },
  {
    slug: "gitticker",
    title: "GitTicker",
    tagline: "A live dashboard for public GitHub activity",
    description:
      "A scrolling event ticker, event-type breakdown, top active repos, and an events-per-minute chart, all updating in real time over WebSocket. One server-side poller hits the rate-limited GitHub events API and fans results out to every connected client, instead of each client polling GitHub itself.",
    problem:
      "The second of two repos built to add React-focused signal, this one demonstrating a real-time streaming pipeline instead of LinkPulse's request/response CRUD shape — one server-side poller fanning a rate-limited upstream source out to many live WebSocket subscribers.",
    architecture: [
      "poller.ts polls GitHub's Events API on an interval, sending If-None-Match so an unchanged 304 response costs nothing against the 60-requests/hour unauthenticated budget.",
      "eventDedupe.ts drops already-seen events across overlapping polls (the Events API is a snapshot, not a cursor) before anything gets broadcast.",
      "rateLimit.ts reads GitHub's X-RateLimit-* headers and switches to a visible 'degraded' state, waiting until the reset time, instead of polling blind or crashing.",
      "wsServer.ts fans results out to every connected browser from exactly one upstream poller per backend process, regardless of subscriber count.",
    ],
    highlights: [
      "ETag conditional polling with dedupe and rate-limit backoff",
      "WebSocket fan-out from a single upstream poller",
      "Real-time charts driven entirely by server-pushed events",
    ],
    limitations: [
      "Everything lives in memory — a backend restart means the dashboard starts fresh with no history",
      "Only one poller instance is supported; no horizontal-scaling story for the backend yet",
    ],
    stack: ["TypeScript", "Express", "WebSocket", "React"],
    repo: "https://github.com/pryzmatical/gitticker",
  },
  {
    slug: "linkpulse",
    title: "LinkPulse",
    tagline: "A link shortener with click analytics",
    description:
      "Paste a URL, get a short one back, and optionally sign in to claim it, pick a custom code, and see who's clicking it. Built to give React its own showcase after BriefGenerator and WebhookRelay's API-only surfaces: full CRUD, auth, and analytics charts.",
    problem:
      "Built specifically to give React its own showcase — a plain Vite + React + TypeScript SPA talking to a separate FastAPI backend, so the component architecture and client-side data flow aren't filtered through a meta-framework's conventions the way OpsDesk's are.",
    architecture: [
      "app/security.py is pure crypto (passlib + python-jose) with no FastAPI dependency, directly unit-tested; app/deps.py wraps it as get_current_user / get_current_user_optional.",
      "Anonymous requests can shorten a URL with no auth at all; an attached JWT associates the link with a user and unlocks a custom vanity code.",
      "url_validation.py rejects non-http(s) schemes and loopback/private/link-local hosts specifically to stop the redirect endpoint from being used as an SSRF pivot into a private network.",
      "Every hit to GET /{code} writes a Click row (timestamp, referrer, parsed user-agent) before issuing the redirect — no raw IP stored, only what the analytics dashboard needs.",
    ],
    highlights: [
      "JWT auth with Alembic-migrated Postgres schema",
      "Click analytics via TanStack Query + Recharts",
      "SQLAlchemy data layer, Dockerized for local Postgres",
    ],
    limitations: [
      "No frontend automated tests yet — backend-only pytest suite",
      "Redirect rate limiting is a simple in-memory per-process bucket, not multi-instance aware",
    ],
    stack: ["FastAPI", "PostgreSQL", "JWT", "React"],
    repo: "https://github.com/pryzmatical/linkpulse",
  },
];
