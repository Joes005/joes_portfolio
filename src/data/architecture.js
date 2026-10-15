export const architecturePipeline = [
  {
    step: "01",
    id: "edge-ingress",
    layer: "EDGE & INGRESS",
    title: "Global Traffic Routing & Perimeter Defense",
    latency: "< 14ms TTFB",
    protocol: "HTTP/3 • Anycast DNS • TLS 1.3",
    description:
      "Every inbound request passes through an edge perimeter orchestrated via Cloudflare Workers. Traffic is sanitized, authenticated, geo-routed to the nearest point of presence, and throttled using an in-memory Token Bucket rate limiter to protect downstream origin instances.",
    specs: [
      { key: "Rate Limiting", val: "Token Bucket (5,000 req/sec ceiling)" },
      { key: "Perimeter", val: "WAF & DDoS Mitigation" },
      { key: "Static Ingress", val: "Brotli Compression & Stale-While-Revalidate" },
      { key: "SSL / TLS", val: "0-RTT Handshake Termination" },
    ],
    tech: ["Cloudflare Workers", "Edge KV", "TLS 1.3", "Anycast DNS"],
    terminalLogs: [
      "200 OK GET /api/v1/healthz [12ms] - edge:sin-01",
      "WAF PASS: Rate limiter token consumed [tokens_left: 4982]",
      "TLS 1.3 0-RTT session resumed successfully"
    ]
  },
  {
    step: "02",
    id: "application-core",
    layer: "APPLICATION LAYER",
    title: "Reactive UI Runtime & Optimistic State Machine",
    latency: "< 35ms Render",
    protocol: "React 19 • Virtual DOM • Client Mutation Pipelines",
    description:
      "The client layer is engineered for instant perceptual speed. Leveraging React 19 primitives, concurrent rendering, and TanStack Query state machines, user actions trigger instantaneous optimistic UI mutations before asynchronous server confirmations resolve.",
    specs: [
      { key: "Rendering", val: "Concurrent Mode + Granular Suspense" },
      { key: "State Pipeline", val: "Optimistic Mutations with Rollback" },
      { key: "Bundle Budget", val: "< 140kB Initial Gzip Transfer" },
      { key: "Asset Strategy", val: "Route-Level Code Splitting & Dynamic Imports" },
    ],
    tech: ["React 19", "TanStack Query", "Framer Motion", "Tailwind CSS"],
    terminalLogs: [
      "Hydration complete in 31ms - zero layout shifts (CLS 0.00)",
      "Optimistic UI mutation: [loan_ledger_update] applied to cache",
      "Chunk prefetch: [ProjectDetails.chunk.js] cached in service worker"
    ]
  },
  {
    step: "03",
    id: "async-ai-engine",
    layer: "SERVICES & AI ORCHESTRATION",
    title: "High-Throughput APIs & Streaming Inference",
    latency: "< 180ms First Token",
    protocol: "FastAPI / Node • Server-Sent Events • Pydantic",
    description:
      "Asynchronous backend services process high-volume business logic and LLM orchestration. FastAPI and Node.js micro-monolith modules stream responses over HTTP/2 Server-Sent Events (SSE). Payloads are strictly validated with JSON Schema guardrails to eliminate malformed outputs.",
    specs: [
      { key: "Concurrency", val: "Asynchronous ASGI Event Loop (uvicorn)" },
      { key: "Streaming Protocol", val: "SSE with Resilient Auto-Reconnect" },
      { key: "Data Guardrails", val: "Strict Pydantic / Zod Runtime Schemas" },
      { key: "Vector Retrieval", val: "Cosine Similarity RAG Pipeline" },
    ],
    tech: ["FastAPI", "Node.js Express", "OpenAI / Claude API", "Pydantic"],
    terminalLogs: [
      "POST /v1/scope-analyzer: token stream initialized",
      "Pydantic validation passed: [MilestoneSchema, Confidence: 0.98]",
      "Worker pool load: 24% active • 8 workers ready"
    ]
  },
  {
    step: "04",
    id: "persistence-cache",
    layer: "DATA PERSISTENCE & CACHE",
    title: "Transactional ACID Storage & In-Memory Redis",
    latency: "< 3ms Cache • < 18ms DB",
    protocol: "MySQL 8.0 InnoDB • Redis Cluster • Connection Pool",
    description:
      "Mission-critical financial and operational data is secured in normalized MySQL relational databases with strict InnoDB foreign keys, ACID transactional compliance, and row-level locking. High-read access patterns are shielded by an in-memory Redis cache-aside layer.",
    specs: [
      { key: "Data Integrity", val: "ACID Guaranteed with Row-Level Locks" },
      { key: "Cache Layer", val: "Redis Key-Value (99.4% Hit Ratio)" },
      { key: "Pooling", val: "HikariCP / MySQL Pool (Max 80 Conns)" },
      { key: "Backups", val: "Continuous WAL Archiving & Point-In-Time" },
    ],
    tech: ["MySQL 8.0", "Redis", "InnoDB", "Connection Pooling"],
    terminalLogs: [
      "CACHE HIT: redis://master/session:usr_981a [1.8ms]",
      "TRANSACTION COMMIT: [finvels_ledger_row_412] locked & released",
      "Read replica sync lag: 0.4ms"
    ]
  },
];
