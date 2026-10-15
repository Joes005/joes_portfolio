export const adrRecords = [
  {
    id: "ADR-001",
    status: "ACCEPTED",
    date: "2024-Q2",
    title: "ACID Transactions & Row-Level Locking in Multi-Branch Lending",
    system: "FINVELS Core Engine",
    context:
      "When managing simultaneous loan repayments and disbursement schedules across 12 branch locations, multiple collection officers could record transactions on the same ledger simultaneously. Using eventual consistency (NoSQL) created risk of ledger drift, duplicate disbursements, and audit desynchronization.",
    decision:
      "Selected MySQL 8.0 InnoDB engine with strict foreign keys, READ COMMITTED transaction isolation, and explicit row-level locking (SELECT ... FOR UPDATE) inside transactional blocks for all payment ledger updates.",
    consequences:
      "Guaranteed zero calculation drift and 100% audit integrity. The slight trade-off in peak write concurrency was mitigated by connection pooling and read replicas for non-financial reporting dashboards.",
    tags: ["MySQL", "Transactions", "Row-Level Locking", "FinTech", "ACID"],
  },
  {
    id: "ADR-002",
    status: "ACCEPTED",
    date: "2024-Q3",
    title: "Dynamic Vector SVG Parsing & Edge Ingress Caching",
    system: "BRANDVAULT SaaS",
    context:
      "Marketing teams uploaded vector assets (SVGs, brand guidelines, EPS) up to 25MB. Generating multi-format previews (PNG, WebP, optimized SVG) on primary application servers caused CPU throttling and delayed initial page rendering.",
    decision:
      "Implemented a two-tier pipeline: Client-side Web Workers parse and extract SVG color tokens immediately for preview, while an edge worker asynchronously triggers headless vector rasterization and writes to a global CDN with stale-while-revalidate caching.",
    consequences:
      "Reduced asset preview latency from 2.4s to <180ms. Offloaded 92% of CPU-intensive image transcoding away from the core application servers.",
    tags: ["Cloudflare Workers", "CDN Caching", "Web Workers", "SVG Engine", "SaaS"],
  },
  {
    id: "ADR-003",
    status: "ACCEPTED",
    date: "2024-Q4",
    title: "Resilient Server-Sent Events (SSE) & JSON Schema Guardrails for LLMs",
    system: "AI Copilot & Freelancer Engine",
    context:
      "Traditional WebSockets introduced unnecessary bidirectional state overhead for what was essentially unidirectional text streaming. Additionally, raw LLM outputs often deviated from expected JSON structures during client project parsing.",
    decision:
      "Adopted Server-Sent Events (SSE) over HTTP/2 with automatic reconnection logic on the frontend. Paired with Python Pydantic / OpenAI Structured Outputs with strict JSON Schema validation before dispatching to client state machines.",
    consequences:
      "Eliminated WebSocket connection dropouts, reduced memory footprint by 40%, and achieved 99.8% structured parsing reliability for automated milestone generation.",
    tags: ["FastAPI", "SSE", "Pydantic", "Structured Outputs", "AI RAG"],
  },
  {
    id: "ADR-004",
    status: "ACCEPTED",
    date: "2023-Q4",
    title: "Pragmatic Modular Monolith Architecture for High-Velocity SaaS",
    system: "SaaS Platforms & KSC",
    context:
      "Early-stage teams often jump prematurely into distributed microservices, resulting in distributed tracing overhead, network serialization costs, and complex deployments before domain boundaries stabilize.",
    decision:
      "Standardized on a clean Modular Monolith: strictly separated domain modules (Auth, Billing, Processing, Reporting) within a single codebase sharing transactional boundaries, backed by Redis queues for asynchronous background tasks.",
    consequences:
      "Allowed instantaneous full-stack iterations, single-command migrations, and zero distributed failure cascades while preserving an easy migration path to microservices when traffic demands.",
    tags: ["Modular Monolith", "System Design", "Domain Boundaries", "Redis Queues"],
  },
];
