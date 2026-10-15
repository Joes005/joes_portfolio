/* =========================================================================
   DEVELOPERFOLIO CONFIGURATION - LEVIN JOESHWA
   Personal Portfolio Configuration powering all sections and links.
   ========================================================================= */

export const splashScreen = {
  enabled: true,
  duration: 1600, // milliseconds
  text: "< Levin Joeshwa />",
  subText: "Loading portfolio..."
};

export const illustration = {
  animated: true
};

export const greeting = {
  username: "Levin Joeshwa",
  name: "Levin Joeshwa",
  title: "Hi, I'm Levin Joeshwa.",
  heroHeadline: "I Build Digital Products That Solve Real Problems.",
  role: "Full Stack Developer focused on building modern web applications, scalable backend systems, and AI-powered solutions.",
  subTitle:
    "Full Stack Developer focused on building modern web applications, scalable backend systems, and AI-powered solutions.",
  resumeLink: "/resume",
  displayGreeting: true
};

export const socialMediaLinks = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  gmail: "levinjoeshwa.dev@gmail.com",
  whatsapp: "https://wa.me/918838415403",
  gitlab: "",
  twitter: "https://twitter.com",
  medium: "",
  display: true
};

export const skillsSection = {
  title: "Skills & Technologies",
  subTitle: "CORE TECHNICAL CAPABILITIES & DEVELOPMENT TOOLS",
  skills: [
    "⚡ Develop highly responsive, accessible web applications using React, HTML5, CSS3, JavaScript, and Tailwind CSS",
    "⚡ Architect resilient backends & RESTful APIs using Java & Spring Boot, Python & FastAPI, Node.js, and PHP & Laravel",
    "⚡ Design normalized relational schemas and data integrity layers with MySQL, SQL, and MongoDB",
    "⚡ Implement Machine Learning pipelines and data workflows using Python, NumPy, Pandas, Matplotlib, and AI API Integrations",
    "⚡ Streamline development with Git, GitHub, VS Code, Postman, Composer, and npm"
  ],

  softwareSkills: [
    // Frontend Development
    { skillName: "HTML5", icon: "Layout", color: "#E34F26", category: "Frontend" },
    { skillName: "CSS3", icon: "Sparkles", color: "#1572B6", category: "Frontend" },
    { skillName: "JavaScript", icon: "Code2", color: "#F7DF1E", category: "Frontend" },
    { skillName: "React", icon: "Atom", color: "#06B6D4", category: "Frontend" },
    { skillName: "Tailwind CSS", icon: "Palette", color: "#38BDF8", category: "Frontend" },
    // Backend Development
    { skillName: "Java", icon: "Coffee", color: "#F97316", category: "Backend" },
    { skillName: "Spring Boot", icon: "Layers", color: "#6DB33F", category: "Backend" },
    { skillName: "Python", icon: "Terminal", color: "#EAB308", category: "Backend" },
    { skillName: "FastAPI", icon: "Zap", color: "#009688", category: "Backend" },
    { skillName: "Node.js", icon: "Server", color: "#22C55E", category: "Backend" },
    { skillName: "PHP", icon: "Boxes", color: "#777BB4", category: "Backend" },
    { skillName: "Laravel", icon: "Boxes", color: "#FF2D20", category: "Backend" },
    { skillName: "REST API", icon: "Code2", color: "#2563EB", category: "Backend" },
    // Database
    { skillName: "MySQL", icon: "Database", color: "#3B82F6", category: "Database" },
    { skillName: "MongoDB", icon: "Layers", color: "#10B981", category: "Database" },
    { skillName: "SQL", icon: "Database", color: "#F59E0B", category: "Database" },
    // AI & Data Science
    { skillName: "NumPy", icon: "Cpu", color: "#4DABCF", category: "AI & Data Science" },
    { skillName: "Pandas", icon: "FileCode", color: "#150458", category: "AI & Data Science" },
    { skillName: "Matplotlib", icon: "Sparkles", color: "#11557C", category: "AI & Data Science" },
    { skillName: "Machine Learning", icon: "Bot", color: "#8B5CF6", category: "AI & Data Science" },
    { skillName: "AI API Integration", icon: "Bot", color: "#EC4899", category: "AI & Data Science" },
    // Tools & Workflow
    { skillName: "Git", icon: "GitBranch", color: "#F05032", category: "Tools" },
    { skillName: "GitHub", icon: "GitBranch", color: "#24292E", category: "Tools" },
    { skillName: "VS Code", icon: "Terminal", color: "#007ACC", category: "Tools" },
    { skillName: "Postman", icon: "Zap", color: "#FF6C37", category: "Tools" },
    { skillName: "Composer", icon: "Boxes", color: "#885630", category: "Tools" },
    { skillName: "npm", icon: "Layers", color: "#CB3837", category: "Tools" }
  ],
  display: true
};

export const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend / React / UI-UX",
      progressPercentage: 92,
      color: "from-cyan-500 to-blue-600"
    },
    {
      Stack: "Backend / Microservices / APIs",
      progressPercentage: 88,
      color: "from-emerald-500 to-teal-600"
    },
    {
      Stack: "Database Architecture / MySQL / SQL",
      progressPercentage: 85,
      color: "from-amber-500 to-orange-600"
    },
    {
      Stack: "AI & Machine Learning / Python",
      progressPercentage: 82,
      color: "from-purple-500 to-indigo-600"
    }
  ],
  displayCodersrank: false
};

export const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "B.Tech — Artificial Intelligence & Data Science",
      degree: "B.Tech in Artificial Intelligence and Data Science",
      subHeader: "Bachelor of Technology with Honors in AI & Data Science",
      duration: "2020 — 2024",
      location: "Tamil Nadu, India",
      desc: "Comprehensive academic qualification in Artificial Intelligence, Machine Learning, Data Science, Algorithms & Data Structures, Distributed Systems, Relational Database Engineering, and Software Development.",
      descBullets: [
        "Core coursework in Machine Learning, Deep Learning, Mathematical Foundations & Statistics",
        "Algorithmic problem-solving, Relational Database Normalization, and ACID Systems",
        "Final year capstone engineering project applying Machine Learning algorithms to predictive healthcare datasets"
      ]
    }
  ]
};

export const workExperiences = {
  display: true,
  experience: [
    {
      role: "Full Stack Developer & Software Builder",
      company: "Client Delivery & Independent Solutions",
      date: "2023 — Present",
      location: "Tamil Nadu, India / Remote",
      badge: "Active",
      desc: "Engineering modern web applications, scalable backend systems, business software, and AI-enabled workflows.",
      descBullets: [
        "Engineered multi-branch Loan Management System with automated amortization and zero ledger drift",
        "Architected on-demand Catering Job Platform with real-time shift workflows and automated wage settlements",
        "Built AI Business Copilot ingesting operational metrics to synthesize executive briefs and anomaly reports"
      ],
      tech: ["React", "Node.js", "Laravel", "Python", "FastAPI", "MySQL", "Tailwind CSS"]
    },
    {
      role: "Software Engineering Intern / Project Developer",
      company: "Web & Enterprise Applications",
      date: "2022 — 2023",
      location: "Tamil Nadu, India",
      badge: "Project Delivery",
      desc: "Delivered production portals including School Management System (Karur Study Centre) and high-concurrency exam engines.",
      descBullets: [
        "Architected role-based student and examination portal serving 2,400+ students",
        "Implemented high-concurrency exam submission queue processing 600+ simultaneous tests",
        "Integrated attendance tracking and automated report card generation"
      ],
      tech: ["Laravel", "PHP", "MySQL", "JavaScript", "REST APIs", "Tailwind CSS"]
    },
    {
      role: "Academic Project & Systems Foundations",
      company: "B.Tech AI & Data Science Projects",
      date: "2021 — 2022",
      location: "Tamil Nadu, India",
      badge: "Foundations",
      desc: "Extensive practical implementation of Machine Learning algorithms, predictive modeling, Java backend systems, and database architectures.",
      descBullets: [
        "Developed Heart Attack Risk Prediction System with clinical feature extraction and ML classifiers",
        "Built Java & Spring Boot enterprise REST services with ACID database normalization",
        "Conducted numerical computing and exploratory data analysis using Python, NumPy, Pandas, and Matplotlib"
      ],
      tech: ["Python", "Machine Learning", "NumPy", "Pandas", "Java", "Spring Boot", "MySQL"]
    }
  ]
};

export const bigProjects = {
  title: "Featured Projects",
  subtitle: "PROVEN PRODUCTION PLATFORMS, BUSINESS SYSTEMS & MACHINE LEARNING SOLUTIONS",
  projects: [
    {
      id: "loan-management-system",
      projectName: "Loan Management System",
      brandName: "FINVELS",
      tagline: "High-Throughput Loan & Financial Operations Platform",
      projectDesc:
        "Enterprise financial portal managing loan lifecycles, real-time collection reconciliation, automated EMI amortization schedules, KYC verification pipelines, and multi-tenant audit logs across 12 branch locations.",
      category: "FinTech & Distributed Systems",
      status: "Completed",
      color: "#F59E0B",
      tech: ["React 19", "Node.js", "Express", "MySQL 8.0 (InnoDB)", "Redis", "JWT"],
      metrics: [
        { label: "P99 Response", value: "38ms" },
        { label: "Accounts", value: "5,000+" },
        { label: "Disbursement", value: "< 4 hrs" }
      ],
      footerLink: [
        { name: "Live Demo", url: "https://github.com" },
        { name: "GitHub", url: "https://github.com" }
      ]
    },
    {
      id: "catering-job-platform",
      projectName: "Catering Job Platform",
      brandName: "CATERFLOW",
      tagline: "On-Demand Event Staffing & Job Management Marketplace",
      projectDesc:
        "End-to-end event staffing platform connecting event caterers, head chefs, and skilled service crew with automated shift scheduling, attendance GPS verification, and real-time payout workflows.",
      category: "Web Application & Job Management",
      status: "Completed",
      color: "#6366F1",
      tech: ["React 19", "Node.js", "Express", "MySQL 8.0", "Redis", "REST APIs"],
      metrics: [
        { label: "Shift Fill Rate", value: "96.4%" },
        { label: "Staffing Time", value: "45 mins" },
        { label: "Active Crew", value: "3,200+" }
      ],
      footerLink: [
        { name: "Live Demo", url: "https://github.com" },
        { name: "GitHub", url: "https://github.com" }
      ]
    },
    {
      id: "school-management-system",
      projectName: "School Management System",
      brandName: "STUDY PORTAL",
      tagline: "Role-Based Academic Administration & High-Concurrency Exam Engine",
      projectDesc:
        "Comprehensive academic administration portal serving 2,400+ students and educators with multi-role access control, daily attendance tracking, automated student grading, and a high-throughput timed examination engine.",
      category: "EdTech & Institutional Management",
      status: "Completed",
      color: "#3B82F6",
      tech: ["Laravel", "PHP", "MySQL", "React PWA", "REST APIs", "Tailwind CSS"],
      metrics: [
        { label: "Active Students", value: "2,400+" },
        { label: "Concurrent Tests", value: "600+" },
        { label: "Result Latency", value: "1.2s" }
      ],
      footerLink: [
        { name: "Live Demo", url: "https://github.com" },
        { name: "GitHub", url: "https://github.com" }
      ]
    },
    {
      id: "ai-business-copilot",
      projectName: "AI Business Copilot",
      brandName: "COPILOT.AI",
      tagline: "Autonomous Metric Ingestion & Executive Intelligence Copilot",
      projectDesc:
        "Autonomous intelligence copilot ingesting order flows, CRM signals, and operational logs to synthesize daily executive briefs, predict churn risks, and automate routine client communications.",
      category: "AI SaaS & Workflow Automation",
      status: "Completed",
      color: "#EC4899",
      tech: ["Python FastAPI", "React 19", "OpenAI API", "Redis Queues", "MySQL"],
      metrics: [
        { label: "Hours Saved / Wk", value: "16+ hrs" },
        { label: "Briefs Generated", value: "10,000+" },
        { label: "Queue Dispatch", value: "< 25ms" }
      ],
      footerLink: [
        { name: "Live Demo", url: "https://github.com" },
        { name: "GitHub", url: "https://github.com" }
      ]
    },
    {
      id: "universal-inventory-management-system",
      projectName: "Universal Inventory Management System",
      brandName: "STOCKSYNC",
      tagline: "Multi-Warehouse Stock Governance, Barcode Tracking & Sales Workflows",
      projectDesc:
        "Enterprise stock governance and point-of-sale platform providing multi-warehouse inventory tracking, automated reorder thresholds, barcode scanning, purchase order workflows, and real-time sales profit analytics.",
      category: "Business Applications & ERP",
      status: "In Progress",
      color: "#10B981",
      tech: ["React 19", "Node.js", "Express", "MySQL 8.0", "Redis", "Tailwind CSS"],
      metrics: [
        { label: "SKU Capacity", value: "50,000+" },
        { label: "Sync Latency", value: "< 50ms" },
        { label: "Status", value: "In Progress" }
      ],
      footerLink: [
        { name: "Live Demo", url: "https://github.com" },
        { name: "GitHub", url: "https://github.com" }
      ]
    },
    {
      id: "heart-attack-risk-prediction-system",
      projectName: "Heart Attack Risk Prediction System",
      brandName: "CARDIO-PREDICT",
      tagline: "Clinical Parameter Machine Learning & Risk Stratification Engine",
      projectDesc:
        "Predictive clinical analysis application leveraging supervised Machine Learning models to assess patient cardiovascular parameters, evaluate coronary risk probabilities, and generate visual risk factor breakdowns for preventative care.",
      category: "Machine Learning & Healthcare AI",
      status: "Completed",
      color: "#EF4444",
      tech: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-Learn", "FastAPI"],
      metrics: [
        { label: "Model Accuracy", value: "88.6%" },
        { label: "Prediction Latency", value: "< 60ms" },
        { label: "Parameters", value: "14 Factors" }
      ],
      footerLink: [
        { name: "Live Demo", url: "https://github.com" },
        { name: "GitHub", url: "https://github.com" }
      ]
    }
  ],
  display: true
};

export const openSource = {
  title: "Open Source Projects",
  subtitle: "OPEN-SOURCE CODEBASES, UTILITIES & TOOLS BUILT FOR DEVELOPERS",
  githubUserName: "levinjoeshwa",
  repos: [
    {
      name: "loan-amortization-core",
      description: "ACID-compliant transactional loan repayment and reducing-balance amortization calculation engine with row-level locks.",
      language: "JavaScript",
      languageColor: "#F7DF1E",
      stars: 48,
      forks: 14,
      url: "https://github.com"
    },
    {
      name: "fastapi-llm-orchestrator",
      description: "Async Python FastAPI boilerplate for streaming LLM responses with tool-calling and structured Pydantic outputs.",
      language: "Python",
      languageColor: "#3572A5",
      stars: 62,
      forks: 21,
      url: "https://github.com"
    },
    {
      name: "cardio-risk-ml-pipeline",
      description: "End-to-end Machine Learning pipeline for patient risk stratification using Random Forest and Pandas feature engineering.",
      language: "Python",
      languageColor: "#3572A5",
      stars: 39,
      forks: 12,
      url: "https://github.com"
    },
    {
      name: "catering-shift-scheduler",
      description: "Concurrent shift reservation and booking algorithm using Redis atomic locks and MySQL transaction boundaries.",
      language: "Node.js",
      languageColor: "#22C55E",
      stars: 31,
      forks: 8,
      url: "https://github.com"
    },
    {
      name: "laravel-rbac-starter",
      description: "Lightweight role-based access control and student exam submission buffer for institutional portals.",
      language: "PHP",
      languageColor: "#4F5D95",
      stars: 29,
      forks: 7,
      url: "https://github.com"
    },
    {
      name: "mysql-inventory-ledger",
      description: "Double-entry multi-warehouse inventory movement ledger schema with automated reorder trigger calculations.",
      language: "SQL",
      languageColor: "#e38c00",
      stars: 41,
      forks: 11,
      url: "https://github.com"
    }
  ],
  display: true
};

export const achievementSection = {
  title: "Achievements & Certifications 🏆",
  subtitle: "Verified milestones, technical credentials, and academic honors",
  achievementsCards: [
    {
      title: "B.Tech in Artificial Intelligence & Data Science",
      subtitle: "Honors degree specializing in Machine Learning, Statistical Inference, and Database Architectures.",
      issuer: "Academic Board",
      date: "2024",
      icon: "Award",
      badge: "Degree Qualification",
      footerLink: [
        { name: "View Qualification", url: "/about" }
      ]
    },
    {
      title: "Full Stack Software Engineering Specialization",
      subtitle: "Mastery in modern React 19, Node.js REST APIs, Laravel, and MySQL database optimization.",
      issuer: "Advanced Engineering Council",
      date: "2024",
      icon: "Award",
      badge: "Verified Competency",
      footerLink: [
        { name: "View Skills", url: "/skills" }
      ]
    },
    {
      title: "AI & Machine Learning Foundations",
      subtitle: "Hands-on implementation of supervised classification, NumPy, Pandas, and LLM API integrations.",
      issuer: "Data Science Institute",
      date: "2023",
      icon: "Brain",
      badge: "Honors",
      footerLink: [
        { name: "View Projects", url: "/projects" }
      ]
    },
    {
      title: "Relational Database Design & ACID Optimization",
      subtitle: "Advanced indexing, query plan profiling, row-level locking, and MySQL performance tuning.",
      issuer: "Database Architecture Board",
      date: "2023",
      icon: "Database",
      badge: "Specialist",
      footerLink: [
        { name: "View Case Studies", url: "/projects/loan-management-system" }
      ]
    }
  ],
  display: true
};

export const contactInfo = {
  title: "Reach Out to Levin Joeshwa! ☎️",
  subtitle: "DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.",
  number: "+91 8838415403",
  email_address: "levinjoeshwa.dev@gmail.com",
  location: "Tamil Nadu, India",
  isHireable: true,
  bio: "Full Stack Developer focused on building modern web applications, scalable backend systems, and AI-powered solutions. Open to full-time roles, freelance projects, and high-impact software engineering opportunities."
};
