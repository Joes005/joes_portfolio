export const orbitTechs = [
  {
    id: "react",
    name: "React",
    category: "Frontend",
    level: "Advanced / Core",
    icon: "Atom",
    description: "Component-driven architectures, custom hooks, state synchronization, and reactive UI performance optimization.",
    color: "#06B6D4",
    orbitRadius: 130,
    speed: 28,
    angleOffset: 0
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    level: "Proficient",
    icon: "Server",
    description: "Event-driven asynchronous microservices, REST APIs, middleware architectures, and real-time WebSockets.",
    color: "#22C55E",
    orbitRadius: 130,
    speed: 28,
    angleOffset: 72
  },
  {
    id: "laravel",
    name: "Laravel",
    category: "Backend",
    level: "Advanced / Core",
    icon: "Boxes",
    description: "Robust MVC architecture, Eloquent ORM, database migrations, queue management, and secure authentication.",
    color: "#EF4444",
    orbitRadius: 130,
    speed: 28,
    angleOffset: 144
  },
  {
    id: "python",
    name: "Python",
    category: "Backend & AI",
    level: "Proficient",
    icon: "Code2",
    description: "Data processing, machine learning script integrations, automation pipelines, and API services.",
    color: "#EAB308",
    orbitRadius: 130,
    speed: 28,
    angleOffset: 216
  },
  {
    id: "fastapi",
    name: "FastAPI",
    category: "Backend & AI",
    level: "Proficient",
    icon: "Zap",
    description: "Modern, high-speed asynchronous Python microservices with Pydantic validation and automatic OpenAPI documentation.",
    color: "#06B6D4",
    orbitRadius: 130,
    speed: 28,
    angleOffset: 288
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "Database",
    level: "Advanced / Core",
    icon: "Database",
    description: "Relational database schema design, index optimization, complex joins, transactions, and stored routines.",
    color: "#3B82F6",
    orbitRadius: 210,
    speed: 40,
    angleOffset: 30
  },
  {
    id: "ai",
    name: "AI & LLMs",
    category: "AI / SaaS",
    level: "Specialized",
    icon: "Sparkles",
    description: "Prompt engineering, OpenAI / Anthropic APIs, embeddings, vector context, and autonomous tool-calling agents.",
    color: "#A855F7",
    orbitRadius: 210,
    speed: 40,
    angleOffset: 90
  },
  {
    id: "java",
    name: "Java",
    category: "Core / Backend",
    level: "Proficient",
    icon: "Coffee",
    description: "Object-oriented software design, concurrency patterns, collections framework, and clean code practices.",
    color: "#F97316",
    orbitRadius: 210,
    speed: 40,
    angleOffset: 150
  },
  {
    id: "springboot",
    name: "Spring Boot",
    category: "Core / Backend",
    level: "Proficient",
    icon: "Layers",
    description: "Dependency injection, Spring Data JPA, Hibernate, security configurations, and REST controllers.",
    color: "#6DB33F",
    orbitRadius: 210,
    speed: 40,
    angleOffset: 210
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    level: "Advanced / Core",
    icon: "Palette",
    description: "Utility-first CSS, responsive breakpoints, custom theme extensions, dark mode, and design token architectures.",
    color: "#38BDF8",
    orbitRadius: 210,
    speed: 40,
    angleOffset: 270
  },
  {
    id: "git",
    name: "Git & GitHub",
    category: "Tools",
    level: "Advanced / Core",
    icon: "GitBranch",
    description: "Branching workflows, pull requests, semantic versioning, rebasing, and CI/CD pipelines.",
    color: "#F05032",
    orbitRadius: 210,
    speed: 40,
    angleOffset: 330
  }
];

export const skillsCategorized = [
  {
    id: "frontend",
    category: "Frontend Development",
    tagline: "Modern UI, Reactive State & Accessible Design",
    description: "Building responsive, silky-smooth, and conversion-focused web interfaces with component-driven architecture.",
    color: "#06B6D4",
    items: [
      { name: "HTML5", level: "Advanced", note: "Semantic structure, ARIA accessibility, Core Web Vitals" },
      { name: "CSS3", level: "Advanced", note: "Flexbox, CSS Grid, keyframe animations, responsive styling" },
      { name: "JavaScript", level: "Advanced", note: "ES6+, Async/Await, closures, DOM APIs, event loop" },
      { name: "React", level: "Advanced", note: "React 19, custom hooks, context, state management, SPA" },
      { name: "Tailwind CSS", level: "Expert", note: "Utility-first design tokens, custom themes, responsive layouts" }
    ]
  },
  {
    id: "backend",
    category: "Backend Development",
    tagline: "Scalable APIs, Server Architectures & Business Logic",
    description: "Architecting resilient application backends, transactional integrity, authentication layers, and RESTful microservices.",
    color: "#22C55E",
    items: [
      { name: "Java", level: "Proficient", note: "Object-oriented design, collections, multi-threading, clean code" },
      { name: "Spring Boot", level: "Proficient", note: "Spring MVC, Spring Data JPA, REST controllers, security" },
      { name: "Python", level: "Proficient", note: "Backend services, scripting, data automation, async libraries" },
      { name: "FastAPI", level: "Proficient", note: "High-speed ASGI, Pydantic validation, automatic OpenAPI specs" },
      { name: "Node.js", level: "Proficient", note: "Express.js, asynchronous I/O, middleware, REST APIs" },
      { name: "PHP", level: "Proficient", note: "Modern PHP 8+, server-side logic, object patterns" },
      { name: "Laravel", level: "Advanced", note: "Eloquent ORM, queues, migrations, authentication, MVC" },
      { name: "REST API Development", level: "Advanced", note: "RESTful architecture, status codes, JWT auth, rate limiting" }
    ]
  },
  {
    id: "database",
    category: "Database",
    tagline: "Relational Schemas, ACID Transactions & Fast Queries",
    description: "Designing normalized data models, indexing strategies, complex analytical queries, and reliable data persistence.",
    color: "#3B82F6",
    items: [
      { name: "MySQL", level: "Advanced", note: "InnoDB, schema design, 3NF normalization, row-level locks, foreign keys" },
      { name: "MongoDB", level: "Proficient", note: "NoSQL document collections, aggregation pipelines, flexible schemas" },
      { name: "SQL", level: "Advanced", note: "Complex multi-table JOINs, subqueries, indexing plans, aggregations" }
    ]
  },
  {
    id: "ai-ds",
    category: "AI & Data Science",
    tagline: "Machine Learning, Numerical Analysis & Intelligent APIs",
    description: "Harnessing data pipelines, statistical modeling, machine learning fundamentals, and cutting-edge LLM API integrations.",
    color: "#A855F7",
    items: [
      { name: "Python (Data Science)", level: "Proficient", note: "Scripting, algorithm implementations, scientific computing" },
      { name: "NumPy", level: "Proficient", note: "Multi-dimensional arrays, vectorized computations, linear algebra" },
      { name: "Pandas", level: "Proficient", note: "DataFrames, data cleaning, feature engineering, statistical grouping" },
      { name: "Matplotlib", level: "Proficient", note: "Data visualization, feature correlation plots, metric charts" },
      { name: "Machine Learning Fundamentals", level: "Proficient", note: "Supervised learning, classification, regression, model evaluation" },
      { name: "AI API Integration", level: "Specialized", note: "OpenAI API, structured outputs, prompt engineering, RAG workflows" }
    ]
  },
  {
    id: "tools",
    category: "Tools & Workflow",
    tagline: "Developer Productivity, Version Control & API Testing",
    description: "Utilizing professional engineering tools to maintain version integrity, streamline testing, and automate project delivery.",
    color: "#F97316",
    items: [
      { name: "Git", level: "Advanced", note: "Branch management, merging, commit discipline, rebasing" },
      { name: "GitHub", level: "Advanced", note: "Repository hosting, PR code reviews, issues, workflow automation" },
      { name: "VS Code", level: "Expert", note: "Debugging, extensions, workspace productivity, terminal integration" },
      { name: "Postman", level: "Advanced", note: "API testing, environment variables, collection runners, mock servers" },
      { name: "Composer", level: "Proficient", note: "PHP package management, autoloader, dependency resolution" },
      { name: "npm", level: "Advanced", note: "Node package manager, scripts, semver versioning, dependencies" }
    ]
  }
];
