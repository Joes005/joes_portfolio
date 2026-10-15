export const projects = [
  {
    id: "loan-management-system",
    slug: "loan-management-system",
    altSlug: "finvels",
    title: "Loan Management System",
    brandName: "FINVELS",
    status: "Completed",
    tagline: "High-Throughput Loan & Financial Operations Platform",
    category: "FinTech & Distributed Systems",
    year: "2024",
    client: "Microfinance & Branch Network Client",
    description:
      "Enterprise financial portal managing end-to-end loan lifecycles, real-time collection reconciliation, automated EMI amortization schedules, KYC verification pipelines, and multi-tenant audit logs across 12 branch locations.",
    problem:
      "Legacy micro-lending operations suffered from paper-based receipts, duplicate disbursements across branches, calculation discrepancies in compound interest, and desynchronized collection ledgers that required days of manual audit reconciliation.",
    solution:
      "Engineered an automated financial backend with strict role-based access control, parameterized interest amortization engines, immutable transaction audit logs, row-level locks on balance tables, and real-time delinquency tracking.",
    highlights: [
      "Backend business logic for complex reducing-balance EMI calculations",
      "Multi-branch loan approval and disbursement workflows",
      "Strict MySQL InnoDB ACID transactions with row-level locks",
      "Real-time collection reconciliation and delinquency alerts"
    ],
    features: [
      "Automated Amortization Engine (Flat vs Reducing rate schedules)",
      "Role-Based Access Control (Branch Officer, Credit Manager, Auditor, Super Admin)",
      "Multi-Branch Double-Entry Accounting Ledger with zero drift",
      "KYC Verification & Document Vault with encrypted storage",
      "Real-time SMS & WhatsApp repayment notifications"
    ],
    tech: ["React 19", "Node.js", "Express", "MySQL 8.0 (InnoDB)", "Redis", "JWT / RBAC", "Tailwind CSS"],
    color: "#F59E0B",
    featured: true,
    accentGlow: "rgba(245, 158, 11, 0.25)",
    metrics: [
      { label: "P99 Response Time", value: "38ms", change: "-78%" },
      { label: "Accounts Managed", value: "5,000+", change: "+120%" },
      { label: "Disbursement Cycle", value: "< 4 hrs", change: "-85%" },
      { label: "Ledger Integrity", value: "100.0%", change: "Zero Drift" }
    ],
    tradeoffs: [
      {
        question: "Why MySQL with row-level locks over MongoDB / DynamoDB?",
        answer: "Financial balance calculations cannot tolerate eventual consistency. A single desynchronized write across concurrent repayment deposits would corrupt accounting ledgers. MySQL 8.0 InnoDB with SELECT ... FOR UPDATE provides strict ACID guarantees."
      },
      {
        question: "Why Redis cache-aside for branch dashboards?",
        answer: "Branch managers poll active delinquency dashboards every 30 seconds. In-memory caching with a 60s TTL cut recurring analytical read queries to MySQL by 84% without stale balance risk."
      }
    ],
    schemaSnippet: `-- Multi-branch Loan Repayment Ledger
CREATE TABLE loan_repayments (
    repayment_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    loan_account_id BIGINT UNSIGNED NOT NULL,
    branch_id INT UNSIGNED NOT NULL,
    amount_paid DECIMAL(14, 2) NOT NULL,
    principal_component DECIMAL(14, 2) NOT NULL,
    interest_component DECIMAL(14, 2) NOT NULL,
    penalty_applied DECIMAL(10, 2) DEFAULT 0.00,
    recorded_by_officer_id INT UNSIGNED NOT NULL,
    status ENUM('PENDING', 'COMMITTED', 'REVERSED') DEFAULT 'COMMITTED',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_loan_account FOREIGN KEY (loan_account_id) 
        REFERENCES loan_accounts(id) ON DELETE RESTRICT,
    INDEX idx_branch_created (branch_id, created_at),
    INDEX idx_account_status (loan_account_id, status)
) ENGINE=InnoDB ROW_FORMAT=COMPRESSED;`,
    architectureFlow: [
      { step: "01", name: "Client Ingress", desc: "Authenticated HTTPS with Bearer JWT token verification" },
      { step: "02", name: "RBAC Middleware", desc: "Granular permission check (Admin vs Branch Collection Officer)" },
      { step: "03", name: "Transaction Block", desc: "START TRANSACTION -> SELECT ... FOR UPDATE on ledger balance" },
      { step: "04", name: "Ledger Commit", desc: "Amortization recalculation & immutable audit event logged" },
      { step: "05", name: "Cache Invalidation", desc: "Targeted Redis cache-aside invalidation for branch metrics" }
    ],
    benchmarkComparison: {
      metricA: { label: "Disbursement Latency", before: "4 Days (Manual)", after: "3.8 Hours (Automated)" },
      metricB: { label: "P99 Query Latency", before: "420ms (Legacy)", after: "38ms (Indexed InnoDB)" },
      metricC: { label: "Concurrent Branch Submissions", before: "12 req/s (Lock Deadlocks)", after: "185 req/s (Row-level Locks)" }
    },
    links: {
      live: "https://github.com",
      github: "https://github.com"
    },
    previewDetails: {
      engine: "Express.js REST APIs",
      db: "MySQL 8.0 InnoDB",
      caching: "Redis In-Memory",
      security: "Granular RBAC + Row-Level Locks"
    }
  },
  {
    id: "catering-job-platform",
    slug: "catering-job-platform",
    altSlug: "freelancer-marketplace",
    title: "Catering Job Platform",
    brandName: "CATERFLOW",
    status: "Completed",
    tagline: "On-Demand Event Staffing & Job Management Marketplace",
    category: "Web Application & Job Management",
    year: "2024",
    client: "Hospitality & Event Services Network",
    description:
      "End-to-end catering event staffing and job management platform connecting event caterers, head chefs, and skilled service crew with automated shift scheduling, attendance GPS verification, and real-time payout workflows.",
    problem:
      "Catering managers faced last-minute worker dropouts, chaotic phone call coordination for large wedding banquets, unverified attendance records, and delayed cash payouts that led to severe staff shortages during peak wedding seasons.",
    solution:
      "Built a unified platform featuring instant shift broadcast APIs, real-time worker application workflows, biometric/GPS check-in confirmation, automated payroll reconciliation, and multi-tier rating systems.",
    highlights: [
      "Job dispatch and real-time worker application workflows",
      "High-speed REST API endpoints for event lifecycle tracking",
      "Granular user workflows for Caterers, Crew Members, and Admin Coordinators",
      "Automated wage settlement calculations based on verified hours"
    ],
    features: [
      "Event Shift Broadcaster with push notification dispatch to matching talent",
      "Live Application Pipeline (Applied -> Shortlisted -> Confirmed -> Checked In)",
      "Geo-fenced Check-In and Check-Out timestamp verification",
      "Dynamic Wage Engine calculating base pay, overtime, and conveyance allowances",
      "Two-way Performance Rating & Crew Reliability Index"
    ],
    tech: ["React 19", "Node.js", "Express", "MySQL 8.0", "Redis", "REST APIs", "Tailwind CSS"],
    color: "#6366F1",
    featured: true,
    accentGlow: "rgba(99, 102, 241, 0.25)",
    metrics: [
      { label: "Shift Fill Rate", value: "96.4%", change: "+42%" },
      { label: "Time to Staff Event", value: "45 mins", change: "Was 2 Days" },
      { label: "Active Crew Members", value: "3,200+", change: "Verified" },
      { label: "Payout Latency", value: "Instant", change: "Direct Settlement" }
    ],
    tradeoffs: [
      {
        question: "Why REST APIs with Redis Pub/Sub for shift broadcasting?",
        answer: "Catering shifts are posted in bursts during event season. Redis Pub/Sub enabled instant broadcast of shift slots to active mobile sessions without putting polling pressure on MySQL."
      },
      {
        question: "How is race condition prevented when 50 workers claim 5 open slots?",
        answer: "Utilized Redis distributed atomic counters (DECRBY) with Lua scripting to reserve slot capacity instantaneously before committing worker contracts to MySQL relational tables."
      }
    ],
    schemaSnippet: `-- Event Shifts and Worker Booking Pipeline
CREATE TABLE catering_shifts (
    shift_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    event_id BIGINT UNSIGNED NOT NULL,
    caterer_id INT UNSIGNED NOT NULL,
    role_type ENUM('HEAD_CHEF', 'SOUS_CHEF', 'SERVICE_CREW', 'BARISTA', 'LOGISTICS') NOT NULL,
    open_slots INT UNSIGNED NOT NULL,
    filled_slots INT UNSIGNED DEFAULT 0,
    hourly_rate DECIMAL(8, 2) NOT NULL,
    event_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    status ENUM('OPEN', 'FILLED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED') DEFAULT 'OPEN',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_event_date_role (event_date, role_type, status)
) ENGINE=InnoDB;`,
    architectureFlow: [
      { step: "01", name: "Event Publish", desc: "Caterer defines shift roles, uniforms, and hourly wage rates" },
      { step: "02", name: "Slot Broadcast", desc: "Targeted push notification dispatched to qualified crew in vicinity" },
      { step: "03", name: "Atomic Claim", desc: "Worker clicks Accept; Redis atomic decrement locks slot without conflict" },
      { step: "04", name: "Geo Verification", desc: "QR code scan on-site confirms presence at event venue" },
      { step: "05", name: "Auto Settlement", desc: "Event conclusion generates verified invoice and automated payout ledger" }
    ],
    benchmarkComparison: {
      metricA: { label: "Shift Fulfillment Speed", before: "36-48 Hours (Calls)", after: "45 Minutes (Automated)" },
      metricB: { label: "No-Show Rate", before: "28% Industry Avg", after: "3.2% with Reliability Scoring" }
    },
    links: {
      live: "https://github.com",
      github: "https://github.com"
    },
    previewDetails: {
      backend: "Node.js REST API Architecture",
      database: "MySQL 8.0 Normalized Schema",
      concurrency: "Redis Slot Locking",
      status: "Production Live"
    }
  },
  {
    id: "school-management-system",
    slug: "school-management-system",
    altSlug: "ksc",
    title: "School Management System",
    brandName: "ACADEMIX / STUDY PORTAL",
    status: "Completed",
    tagline: "Role-Based Academic Administration & High-Concurrency Exam Engine",
    category: "EdTech & Institutional Management",
    year: "2023",
    client: "Coaching Academy & Educational Institutions",
    description:
      "Comprehensive academic administration portal serving 2,400+ students and educators with multi-role access control, daily attendance tracking, automated student grading, and a high-throughput timed examination engine.",
    problem:
      "Physical coaching academy struggled with manual paper attendance registers, slow 3-day turnaround times for OMR test evaluation, chaotic fee receipt books, and poor communication channels between parents and faculty.",
    solution:
      "Architected a centralized school operating system with role-based access for Admins, Teachers, Students, and Parents. Included instant mock exam evaluation with negative-marking logic, attendance tracking, and automated report card generation.",
    highlights: [
      "Granular Role-Based Access Control (Admin, Faculty, Student, Parent)",
      "Daily biometric & digital attendance management system",
      "High-concurrency exam engine evaluating 600+ simultaneous submissions",
      "Automated percentile rankings, subject weakness diagnosis, and report cards"
    ],
    features: [
      "Role-Based Dashboards with isolated permissions for teachers and administrators",
      "Digital Student Registry with academic history, batch tracking, and fee status",
      "Attendance Tracker with automatic WhatsApp notification to parents for absentees",
      "Timed Online Examination Portal with anti-tab switch detection",
      "Instant Score Card & State-Wide Percentile Analytics"
    ],
    tech: ["Laravel (PHP)", "React PWA", "MySQL 8.0", "Redis", "REST APIs", "Tailwind CSS"],
    color: "#3B82F6",
    featured: true,
    accentGlow: "rgba(59, 130, 246, 0.25)",
    metrics: [
      { label: "Active Students", value: "2,400+", change: "Enrolled" },
      { label: "Concurrent Submissions", value: "600+", change: "Peak Window" },
      { label: "Result Turnaround", value: "1.2s", change: "Was 3 Days" },
      { label: "System Uptime", value: "99.9%", change: "High Availability" }
    ],
    tradeoffs: [
      {
        question: "How to handle 600 simultaneous test submissions within 30 seconds?",
        answer: "Submission payloads were written to an asynchronous Redis queue first, returning instant 200 OK to students, while background workers safely batch-calculated percentiles and updated MySQL records without connection pool exhaustion."
      },
      {
        question: "Why Laravel for school backend administrative logic?",
        answer: "Laravel provides built-in authorization policies, robust migration rollbacks, eloquent relationships for complex student-batch-exam mappings, and enterprise-grade security against CSRF, SQLi, and unauthorized access."
      }
    ],
    schemaSnippet: `-- Role-Based Academic Exam Submissions
CREATE TABLE exam_submissions (
    submission_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    exam_id INT UNSIGNED NOT NULL,
    student_id BIGINT UNSIGNED NOT NULL,
    batch_id INT UNSIGNED NOT NULL,
    raw_score DECIMAL(6, 2) NOT NULL,
    percentile_rank DECIMAL(5, 2) NULL,
    submission_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    tab_switch_count SMALLINT UNSIGNED DEFAULT 0,
    status ENUM('SUBMITTED', 'EVALUATED', 'FLAGGED') DEFAULT 'EVALUATED',
    INDEX idx_exam_score (exam_id, raw_score DESC),
    INDEX idx_student_batch (student_id, batch_id)
) ENGINE=InnoDB;`,
    architectureFlow: [
      { step: "01", name: "Exam Ingress", desc: "Student completes test in locked browser PWA container" },
      { step: "02", name: "Queue Ingestion", desc: "Submissions dispatched to Redis stream to buffer burst traffic" },
      { step: "03", name: "Score Calculation", desc: "Worker calculates negative marking and raw score" },
      { step: "04", name: "Rank Generation", desc: "Percentile curves updated and instant report card generated" }
    ],
    benchmarkComparison: {
      metricA: { label: "Result Generation Time", before: "3 Days (OMR)", after: "1.2 Seconds" },
      metricB: { label: "Concurrent Submission Stability", before: "Crash at 80 users", after: "600+ without dropped requests" }
    },
    links: {
      live: "https://github.com",
      github: "https://github.com"
    },
    previewDetails: {
      framework: "Laravel REST + React PWA",
      database: "Indexed MySQL 8.0",
      security: "Role-Based Access Control",
      status: "Production Live"
    }
  },
  {
    id: "ai-business-copilot",
    slug: "ai-business-copilot",
    altSlug: "ai-copilot",
    title: "AI Business Copilot",
    brandName: "COPILOT.AI",
    status: "Completed",
    tagline: "Autonomous Metric Ingestion & Executive Intelligence Copilot",
    category: "AI SaaS & Workflow Automation",
    year: "2023",
    client: "SaaS Innovation Lab & Enterprise Founders",
    description:
      "Autonomous business intelligence copilot ingesting multi-channel operational data, revenue flows, and CRM signals to synthesize daily executive briefs, predict churn risks, and automate routine client communications.",
    problem:
      "Founders and executives spent 10+ hours weekly compiling fragmented metrics from Stripe, Google Analytics, database queries, and customer tickets to understand daily company health and catch revenue drops.",
    solution:
      "Engineered an automated intelligence copilot that connects to business data sources, detects statistical anomalies in real-time, generates plain-language executive summaries with AI, and prepares 1-click draft responses for urgent customer inquiries.",
    highlights: [
      "AI API integration with prompt guardrails and deterministic schema outputs",
      "Business automation pipelines connecting multi-source analytics",
      "Modern application architecture with background queue workers",
      "Executive summaries and anomaly detection delivered automatically"
    ],
    features: [
      "Multi-Source Ingestion Pipeline (Stripe, Postgres, CRM, Support Tickets)",
      "Automated Anomaly Detection flagging churn risks and revenue spikes",
      "Daily Executive Brief Synthesizer formatted for rapid mobile consumption",
      "AI-Powered Customer Response Drafter with contextual memory",
      "Asynchronous Background Queue Dispatch preventing API timeouts"
    ],
    tech: ["Python FastAPI", "React 19", "OpenAI API", "Redis Queues", "MySQL 8.0", "Tailwind CSS"],
    color: "#EC4899",
    featured: true,
    accentGlow: "rgba(236, 72, 153, 0.25)",
    metrics: [
      { label: "Hours Saved / Wk", value: "16+ hrs", change: "Autonomous Workflows" },
      { label: "Briefs Generated", value: "10,000+", change: "Zero Failure" },
      { label: "Queue Dispatch", value: "< 25ms", change: "Redis Horizon" },
      { label: "Accuracy Rate", value: "98.2%", change: "Pydantic Guardrails" }
    ],
    tradeoffs: [
      {
        question: "Why Redis Queues for AI background jobs?",
        answer: "AI LLM inference takes 3 to 10 seconds. Offloading analytical prompt construction and API dispatch to isolated background queue workers ensured web request latency stayed under 40ms."
      },
      {
        question: "How do you avoid LLM hallucination in business financial metrics?",
        answer: "Calculations (revenue delta, customer counts, churn rate) are executed in pure SQL and Python first. The LLM receives strictly computed numbers and only synthesizes narrative summary."
      }
    ],
    schemaSnippet: `-- Business Intelligence Brief Records
CREATE TABLE executive_briefs (
    brief_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    organization_id BIGINT UNSIGNED NOT NULL,
    generated_for_date DATE NOT NULL,
    executive_summary TEXT NOT NULL,
    revenue_delta_percent DECIMAL(6, 2) NOT NULL,
    churn_risk_flagged INT UNSIGNED DEFAULT 0,
    action_items JSON NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uk_org_date (organization_id, generated_for_date)
) ENGINE=InnoDB;`,
    architectureFlow: [
      { step: "01", name: "Nightly Cron", desc: "Scheduled cron triggers daily telemetry aggregator at 04:00 UTC" },
      { step: "02", name: "Queue Dispatch", desc: "Batch telemetry jobs queued to Redis with exponential backoff" },
      { step: "03", name: "Brief Synthesis", desc: "LLM synthesizes anomalies and outputs structured JSON brief" },
      { step: "04", name: "Delivery", desc: "Executive brief pushed to web dashboard and email notification" }
    ],
    benchmarkComparison: {
      metricA: { label: "Daily Report Prep Time", before: "45 Minutes", after: "0 Minutes (Automated)" },
      metricB: { label: "Anomaly Detection Speed", before: "24-48 Hours", after: "Real-time Notification" }
    },
    links: {
      live: "https://github.com",
      github: "https://github.com"
    },
    previewDetails: {
      framework: "FastAPI + React 19",
      aiIntegration: "Batch Inference Queues",
      dataPipeline: "Structured Pydantic v2",
      status: "Production Live"
    }
  },
  {
    id: "universal-inventory-management-system",
    slug: "universal-inventory-management-system",
    altSlug: "inventory-system",
    title: "Universal Inventory Management System",
    brandName: "STOCKSYNC CORE",
    status: "In Progress",
    tagline: "Multi-Warehouse Stock Governance, Barcode Tracking & Sales Workflows",
    category: "Business Applications & ERP",
    year: "2024",
    client: "Retail & Wholesale Enterprise Initiative",
    description:
      "Enterprise stock governance and point-of-sale platform providing multi-warehouse inventory tracking, automated reorder thresholds, barcode scanning, purchase order workflows, and real-time sales profit analytics.",
    problem:
      "Growing wholesale and retail businesses experience costly stockouts, overstocking of dead inventory, manual barcode mismatches, and delayed sales profit reconciliation across dispersed warehouse locations.",
    solution:
      "Developing a high-performance inventory hub that unifies multi-location stock movements, generates automated Purchase Orders when stock reaches safety thresholds, and tracks sales margins at the SKU level with barcode scanner compatibility.",
    highlights: [
      "Real-time stock synchronization across multiple warehouse locations",
      "Sales workflows with instant invoice and receipt generation",
      "Automated safety stock calculations and low-inventory reorder alerts",
      "Barcode/QR code scanning support for seamless goods intake"
    ],
    features: [
      "Multi-Warehouse Stock Mapping with inter-facility transfer audit logs",
      "Dynamic Safety Stock Reorder Alerts with customizable minimum thresholds",
      "Barcode & QR Code Scanner support for lightning-fast item check-in",
      "Sales Order & POS Workflow with instant PDF tax invoice generation",
      "Supplier Management & Purchase Order Lifecycle (Draft -> Sent -> Received)"
    ],
    tech: ["React 19", "Node.js", "Express", "MySQL 8.0", "Redis", "Tailwind CSS"],
    color: "#10B981",
    featured: true,
    accentGlow: "rgba(16, 185, 129, 0.25)",
    metrics: [
      { label: "Development Status", value: "Active", change: "In Progress" },
      { label: "SKU Capacity", value: "50,000+", change: "Indexed" },
      { label: "Stock Sync Latency", value: "< 50ms", change: "Redis Buffer" },
      { label: "Stockout Reduction", value: "-65%", change: "Target Projected" }
    ],
    tradeoffs: [
      {
        question: "Why normalize inventory ledger into separate stock_movements table?",
        answer: "Directly modifying a single 'quantity' column creates race conditions and lacks accountability. Every addition, subtraction, damaged item, or transfer is recorded as an immutable ledger movement row, ensuring total financial auditability."
      },
      {
        question: "How is barcode scanning handled without slowing the POS screen?",
        answer: "Hardware barcode scanners emit rapid keyboard events followed by Enter. A specialized lightweight event buffer captures the 13-digit EAN code and queries local cached index in under 8ms."
      }
    ],
    schemaSnippet: `-- Multi-Warehouse Inventory Movement Ledger
CREATE TABLE stock_movements (
    movement_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    product_sku VARCHAR(64) NOT NULL,
    warehouse_id INT UNSIGNED NOT NULL,
    movement_type ENUM('PURCHASE_RECEIPT', 'SALE_DEDUCTION', 'TRANSFER_IN', 'TRANSFER_OUT', 'DAMAGE_WRITE_OFF') NOT NULL,
    quantity_delta INT NOT NULL,
    unit_cost DECIMAL(12, 2) NOT NULL,
    reference_invoice_id VARCHAR(64) NULL,
    recorded_by_user_id INT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_sku_warehouse (product_sku, warehouse_id),
    INDEX idx_created (created_at)
) ENGINE=InnoDB;`,
    architectureFlow: [
      { step: "01", name: "Stock Ingress", desc: "Warehouse staff scans incoming shipment barcode using hand terminal" },
      { step: "02", name: "Movement Entry", desc: "System writes immutable movement record to stock_movements ledger" },
      { step: "03", name: "Balance Update", desc: "Current warehouse stock aggregate incremented with atomic lock" },
      { step: "04", name: "Threshold Check", desc: "Safety threshold evaluated; alerts triggered if stock touches reorder point" }
    ],
    benchmarkComparison: {
      metricA: { label: "Stock Audit Duration", before: "2 Weeks (Manual)", after: "15 Minutes (Digital)" },
      metricB: { label: "Discrepancy Rate", before: "8.4% Average", after: "< 0.2% Target" }
    },
    links: {
      live: "https://github.com",
      github: "https://github.com"
    },
    previewDetails: {
      framework: "React 19 + Node.js",
      database: "MySQL 8.0 Ledger Architecture",
      status: "In Progress (Development Active)"
    }
  },
  {
    id: "heart-attack-risk-prediction-system",
    slug: "heart-attack-risk-prediction-system",
    altSlug: "cardio-risk-ml",
    title: "Heart Attack Risk Prediction System",
    brandName: "CARDIO-PREDICT AI",
    status: "Completed",
    tagline: "Clinical Parameter Machine Learning & Risk Stratification Engine",
    category: "Machine Learning & Healthcare AI",
    year: "2023",
    client: "Healthcare Data Science Capstone",
    description:
      "Predictive clinical analysis application leveraging supervised Machine Learning models to assess patient cardiovascular parameters, evaluate coronary risk probabilities, and generate visual risk factor breakdowns for preventative care.",
    problem:
      "Cardiovascular conditions are frequently caught too late due to subtle, multi-variable symptom interactions (age, blood pressure, cholesterol levels, fasting sugar, resting ECG) that are difficult to evaluate without computational risk modeling.",
    solution:
      "Built a machine learning pipeline utilizing Python, Scikit-Learn, Pandas, and NumPy to preprocess medical datasets, engineer clinical features, train predictive classifiers, and provide an interactive web dashboard for real-time risk assessment.",
    highlights: [
      "Machine Learning model training, evaluation, and hyperparameter tuning",
      "Exploratory data analysis with NumPy, Pandas, and Matplotlib",
      "Feature importance ranking identifying top cardiovascular risk drivers",
      "Interactive prediction interface with risk scoring and clinical explanations"
    ],
    features: [
      "Interactive Medical Parameter Input (Serum Cholesterol, Max Heart Rate, ST Depression)",
      "Multi-Model Comparison Engine (Random Forest, Logistic Regression, Decision Trees)",
      "Instant Cardiovascular Risk Percentage Calculation with confidence intervals",
      "Visual Feature Correlation Heatmaps & Risk Factor Contribution Charts",
      "Preventative Lifestyle & Clinical Advisory Recommendations based on score"
    ],
    tech: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-Learn", "FastAPI", "React", "Tailwind CSS"],
    color: "#EF4444",
    featured: true,
    accentGlow: "rgba(239, 68, 68, 0.25)",
    metrics: [
      { label: "Model Accuracy", value: "88.6%", change: "Cross-Validated" },
      { label: "Prediction Latency", value: "< 60ms", change: "FastAPI Model Serving" },
      { label: "Clinical Parameters", value: "14 Factors", change: "Analyzed" },
      { label: "ROC-AUC Score", value: "0.92", change: "High Sensitivity" }
    ],
    tradeoffs: [
      {
        question: "Why Random Forest Classifier over a Black-Box Deep Neural Network?",
        answer: "In healthcare predictions, explainability is paramount. Random Forest provides clear Gini feature importance metrics, allowing physicians to see exactly which biomarkers (e.g. ST depression vs chest pain type) contributed to the risk score."
      },
      {
        question: "How were skewed clinical variables and missing patient data handled?",
        answer: "Applied median imputation for clinical outliers and standardized continuous parameters using StandardScaler to prevent dominant scaling bias in logistic classifiers."
      }
    ],
    schemaSnippet: `# Python Scikit-Learn Predictive Model Inference Pipeline
import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler

class CardioRiskPredictor:
    def __init__(self, model, scaler):
        self.model = model
        self.scaler = scaler
        self.feature_names = [
            'age', 'sex', 'cp_type', 'resting_bp', 'cholesterol',
            'fasting_bs', 'rest_ecg', 'max_hr', 'exercise_angina',
            'oldpeak', 'st_slope'
        ]

    def predict_risk(self, patient_features: dict) -> dict:
        input_data = np.array([[patient_features[f] for f in self.feature_names]])
        scaled_data = self.scaler.transform(input_data)
        probability = self.model.predict_proba(scaled_data)[0][1]
        
        return {
            "risk_score_percent": round(probability * 100, 2),
            "risk_tier": "HIGH" if probability > 0.65 else ("MODERATE" if probability > 0.35 else "LOW"),
            "primary_driver": "Elevated ST Depression" if patient_features.get('oldpeak', 0) > 2.0 else "Cholesterol Ratio"
        }`,
    architectureFlow: [
      { step: "01", name: "Clinical Ingestion", desc: "User inputs physiological telemetry (BP, Cholesterol, ECG)" },
      { step: "02", name: "Feature Scaling", desc: "StandardScaler transforms inputs to normalized feature space" },
      { step: "03", name: "Model Inference", desc: "Pre-trained ensemble model computes risk probability" },
      { step: "04", name: "Feature Ranking", desc: "Top contributing risk factors extracted via tree feature importance" },
      { step: "05", name: "Visual Report", desc: "Interactive gauge, risk tier badge, and advisory checklist displayed" }
    ],
    benchmarkComparison: {
      metricA: { label: "Inference Speed", before: "Manual Analysis (Hours)", after: "45ms (Automated Model)" },
      metricB: { label: "Prediction Sensitivity", before: "72% Baseline", after: "88.6% Optimized Model" }
    },
    links: {
      live: "https://github.com",
      github: "https://github.com"
    },
    previewDetails: {
      engine: "Python Machine Learning Pipeline",
      libraries: "Scikit-Learn, Pandas, NumPy, Matplotlib",
      serving: "FastAPI REST Endpoint",
      status: "Completed (Academic & Portfolio Showcase)"
    }
  }
];
