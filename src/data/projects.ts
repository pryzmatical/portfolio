export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
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
    highlights: [
      "OAuth2 client-credentials auth with JWT-based RBAC",
      "OpenAPI schema wired for Custom GPT Actions",
      "Server-side PDF rendering pipeline (WeasyPrint)",
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
    highlights: [
      "Role-gated session auth (jose + bcryptjs)",
      "Prisma/SQLite data layer",
      "Server components + API routes in one Next.js app",
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
    highlights: [
      "Postgres-native queue (riverqueue/river) instead of Redis",
      "HMAC request signing, idempotency, and explicit dead-lettering",
      "Prometheus metrics and health/ready checks on both binaries",
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
    highlights: [
      "scikit-learn regression pipeline with documented feature/impact model",
      "FastAPI inference endpoint",
      "React/Vite UI that surfaces model uncertainty, not just a single number",
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
    highlights: [
      "ETag conditional polling with dedupe and rate-limit backoff",
      "WebSocket fan-out from a single upstream poller",
      "Real-time charts driven entirely by server-pushed events",
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
    highlights: [
      "JWT auth with Alembic-migrated Postgres schema",
      "Click analytics via TanStack Query + Recharts",
      "SQLAlchemy data layer, Dockerized for local Postgres",
    ],
    stack: ["FastAPI", "PostgreSQL", "JWT", "React"],
    repo: "https://github.com/pryzmatical/linkpulse",
  },
];
