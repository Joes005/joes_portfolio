export const queryStrategies = {
  scan: {
    id: "scan",
    name: "Full Table Scan",
    description: "Unindexed sequential scan across all disk blocks. CPU spikes linearly with table size.",
    baseLatency: 340,
    latencyMultiplier: 0.045,
    cpuBase: 65,
    cpuMultiplier: 0.0018,
    memoryMb: 850,
    color: "#EF4444",
    tag: "High Friction / Anti-pattern"
  },
  index: {
    id: "index",
    name: "Composite B-Tree Index",
    description: "Logarithmic O(log N) traversal via clustered primary & compound secondary indexes.",
    baseLatency: 18,
    latencyMultiplier: 0.0012,
    cpuBase: 14,
    cpuMultiplier: 0.0004,
    memoryMb: 240,
    color: "#3B82F6",
    tag: "Optimized Relational"
  },
  redis: {
    id: "redis",
    name: "In-Memory Redis Cache",
    description: "Sub-millisecond O(1) in-memory key-value lookups with LRU eviction and cache-aside pattern.",
    baseLatency: 2.4,
    latencyMultiplier: 0.00015,
    cpuBase: 4,
    cpuMultiplier: 0.0001,
    memoryMb: 110,
    color: "#10B981",
    tag: "Ultra-Low Latency"
  }
};
