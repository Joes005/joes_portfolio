export const engineeringPrinciples = [
  {
    number: "01",
    tag: "PRAGMATISM",
    title: "Boring Technology for Critical Systems",
    quote: "Excitement belongs in product discovery, not in database transaction isolation levels.",
    body: "I prioritize well-understood, battle-tested primitives (MySQL, Linux, Redis, strict schemas) for financial and persistent data. Bleeding-edge tools are evaluated deliberately in isolated layers where failure is non-fatal.",
    badge: "Reliability First",
    metrics: "Zero Unplanned Data Loss"
  },
  {
    number: "02",
    tag: "RESILIENCE",
    title: "Design for Failure Modes First",
    quote: "Networks will partition. Third-party APIs will timeout. Disks will fill up.",
    body: "Mature architecture is defined by how gracefully it degrades. Every external HTTP call is wrapped with sane timeouts, exponential backoff retries, and circuit breakers. User interfaces must never freeze when a downstream service stumbles.",
    badge: "Defensive Engineering",
    metrics: "99.98% Uptime SLA"
  },
  {
    number: "03",
    tag: "OBSERVABILITY",
    title: "Telemetry Before Optimization",
    quote: "Premature optimization is guesswork; telemetry-driven tuning is science.",
    body: "Before optimizing a database query or refactoring a service, I instrument P95 and P99 latency tracking, connection pool saturation, and memory profiling. Systems must emit structured logs and metrics so anomalies are caught before users report them.",
    badge: "Data-Driven Decisions",
    metrics: "P99 Monitored"
  },
  {
    number: "04",
    tag: "CRAFTSMANSHIP",
    title: "Code is a Liability, Not an Asset",
    quote: "The highest craftsmanship is often finding the solution that requires the least code.",
    body: "Every line of code written is code that must be maintained, audited for security, upgraded during framework bumps, and understood by future engineers. I strive for lean abstractions with explicit data flows over tangled magic.",
    badge: "Maintainability",
    metrics: "Lean Architecture"
  }
];
