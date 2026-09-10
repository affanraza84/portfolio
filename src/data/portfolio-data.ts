import {
  Project,
  CaseStudy,
  SkillCategory,
  ExperienceItem,
  OpenSourceContribution,
  ServiceItem,
} from "@/types";

export const PERSONAL_INFO = {
  name: "Affan",
  fullName: "Affan Raza",
  title: "Full-Stack Developer",
  tagline: "Building digital products that are fast, scalable, and built to last.",
  bio: "I’m Affan, a Full-Stack Developer focused on building modern web applications, scalable backend systems, and polished digital experiences.",
  positioningStatement:
    "I don’t just build interfaces. I build reliable digital products — from the first line of code to deployment.",
  status: "Available for select freelance & full-time roles",
  location: "Remote / Worldwide (IST)",
  email: "affanraza8081@gmail.com",
  github: "https://github.com/affanraza84",
  linkedin: "https://www.linkedin.com/in/mohammad-affan-raza-b6039b288/",
};

export const CREDIBILITY_BADGES = [
  {
    label: "Full-Stack Developer",
    detail: "End-to-end architecture & implementation",
    badge: "Specialization",
  },
  {
    label: "5 Months Internship",
    detail: "Full-Stack development in production environments",
    badge: "Experience",
  },
  {
    label: "GSSoC’26 Top 1%",
    detail: "GirlScript Summer of Code elite contributor",
    badge: "Recognition",
  },
  {
    label: "SSoC’26 Top 1%",
    detail: "Social Summer of Code elite contributor",
    badge: "Recognition",
  },
];

export const PHILOSOPHY_PILLARS = [
  {
    title: "Product-Driven Thinking",
    description:
      "Code is a means to deliver business value. I design and architect every feature with user experience, conversion, and product longevity in mind.",
    icon: "Boxes",
  },
  {
    title: "Scalable Backend Architecture",
    description:
      "Engineered for high concurrent throughput with efficient database indexing, connection pooling, caching strategies, and resilient API contracts.",
    icon: "Server",
  },
  {
    title: "Security-Conscious Development",
    description:
      "Proactive security at every layer: strict JWT validation, HTTP-only secure cookies, rate limiting against brute force, input sanitization, and CORS isolation.",
    icon: "ShieldCheck",
  },
  {
    title: "Performance & Maintainability",
    description:
      "Writing clean, modular TypeScript with strict type boundaries, low latency response times, minimal bundle footprint, and clear documentation.",
    icon: "Zap",
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "realtime-chat-platform",
    title: "Real-Time Chat & Collaboration Engine",
    tagline: "Low-latency bidirectional messaging system with distributed room state and strict security safeguards.",
    description:
      "A production-ready full-stack real-time communication platform supporting instant messaging, live presence tracking, media sharing, and automated rate-limiting.",
    category: "Full-Stack / Distributed Real-Time",
    isFeatured: true,
    problem:
      "Traditional polling causes excessive server load and high latency. Building a responsive communication platform requires seamless bidirectional socket synchronization, secure session state across reconnection attempts, and defense against spam or packet flooding.",
    solution:
      "Implemented an event-driven architecture using WebSockets/Socket.io, Node.js, Express, MongoDB, and Redis pub/sub. Coupled with rate-limiting algorithms, JWT session authentication, and an optimistic UI update layer.",
    keyFeatures: [
      "Sub-50ms message propagation with WebSocket channels",
      "Live typing indicators and heartbeat-based presence detection",
      "Token-based authentication with secure HTTP-only cookies",
      "Granular IP & user-level rate limiting preventing spam/DDoS",
      "Persistent conversation history with MongoDB indexing",
      "Responsive, keyboard-accessible conversation workspace",
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "Socket.io",
      "React",
      "TypeScript",
      "MongoDB",
      "Redis",
      "Tailwind CSS",
    ],
    myRole:
      "Architected end-to-end system: designed socket event schemas, built the backend API & rate-limiting middleware, structured MongoDB schemas, and implemented the responsive UI with optimistic state updates.",
    architectureHighlights: [
      "WebSocket connection lifecycle management with graceful reconnect backoff",
      "Redis caching for active session records & volatile presence flags",
      "Express middleware pipeline with helmet, CORS, and token verification",
    ],
    metricsOrHighlights: [
      "Instant message dispatch under 50ms",
      "Zero message drop during socket reconnection",
      "Granular rate limiting preventing flood attacks",
    ],
    liveUrl: "https://github.com/affanraza84",
    githubUrl: "https://github.com/affanraza84",
    caseStudyId: "realtime-chat",
  },
  {
    id: "fullstack-saas-platform",
    title: "Modular SaaS & Workflow Platform",
    tagline: "High-performance web application with role-based access control and structured database workflows.",
    description:
      "A complete full-stack web application designed for multi-tenant data management, secure user onboarding, and granular permission handling.",
    category: "Full-Stack Web App",
    isFeatured: true,
    problem:
      "Managing complex client workflows requires resilient relational data integrity, clean authorization guards across API routes, and instantaneous client-side navigation without layout shifts.",
    solution:
      "Built with Next.js App Router, TypeScript, PostgreSQL, Prisma ORM, and Tailwind CSS. Implemented Server Actions, optimistic state mutations, and server-side data fetching with fine-grained caching.",
    keyFeatures: [
      "Role-Based Access Control (RBAC) across protected routes",
      "Structured relational data modeling with PostgreSQL & Prisma",
      "Server-side rendered dashboards with sub-second page loads",
      "Form validation pipelines with Zod schema verification",
      "Interactive analytics & data visualization tables",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "REST APIs",
    ],
    myRole:
      "Led full-stack implementation: schema design, API endpoint authoring, role authentication logic, and frontend component composition.",
    architectureHighlights: [
      "Next.js App Router for hybrid server-rendered pages and fast interactive components",
      "Prisma client with connection pooling and query optimization",
    ],
    metricsOrHighlights: [
      "Clean TypeScript strict typing across client-server boundary",
      "Lighthouse performance score 95+",
    ],
    liveUrl: "https://github.com/affanraza84",
    githubUrl: "https://github.com/affanraza84",
  },
  {
    id: "scalable-backend-microservices",
    title: "High-Throughput REST API & Microservices",
    tagline: "Resilient backend service layer with Redis caching, Docker containerization, and automated CI/CD.",
    description:
      "Engineered backend infrastructure providing reliable, validated endpoints for high-concurrency client applications with structured logging and error handling.",
    category: "Backend & Cloud Infrastructure",
    isFeatured: true,
    problem:
      "Unoptimized database queries and monolithic bottlenecks degrade response times under concurrent loads and lack automated deployment resilience.",
    solution:
      "Designed a clean layered backend with Node.js and Express, integrated Redis for caching read-heavy endpoints, configured Docker containers for consistent staging/production parity, and established GitHub Actions CI workflows.",
    keyFeatures: [
      "Layered controller-service-repository backend architecture",
      "Redis caching layer reducing database read load by up to 70%",
      "Comprehensive error boundary handling & centralized logging",
      "Dockerized container environments for deterministic deployment",
      "Automated GitHub Actions CI testing pipeline",
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "Redis",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
    ],
    myRole:
      "Designed API schemas, developed Redis caching policies, containerized services with Docker, and configured CI/CD build verification.",
    architectureHighlights: [
      "Cache-aside pattern with TTL invalidation for volatile records",
      "Multi-stage Docker builds minimizing production container size",
    ],
    metricsOrHighlights: [
      "Consistent sub-100ms API response latency on cached routes",
      "Automated linting and test coverage checks on pull requests",
    ],
    liveUrl: "https://github.com/affanraza84",
    githubUrl: "https://github.com/affanraza84",
  },
];

export const FLAGSHIP_CASE_STUDY: CaseStudy = {
  id: "realtime-chat",
  title: "Real-Time Chat Engine: Architectural Case Study",
  subtitle:
    "Engineering a low-latency, secure, and resilient bidirectional communication platform.",
  overview:
    "A deep technical breakdown of the architectural decisions, security defenses, and scalability strategies employed in building a production-grade real-time messaging platform.",
  problem:
    "Modern digital communication requires zero-friction instantaneous message dispatch without polling overhead. The core technical hurdles include maintaining stateful bidirectional socket connections across volatile network conditions, securing message streams against unauthorized interception, preventing denial-of-service spam floods, and rendering large conversational histories without frontend freezing.",
  solution:
    "Engineered a resilient event-driven architecture utilizing WebSocket/Socket.io backed by Node.js/Express, MongoDB persistence, and Redis for volatile state tracking. Layered with custom rate-limiting middleware, token-based authentication with cryptographic verification, and an optimistic UI update model.",
  architecture: {
    title: "System Flow & Component Distribution",
    description:
      "Decoupled architecture separating WebSocket connection handling, persistence queries, volatile session storage, and client-side optimistic reconciliation.",
    components: [
      {
        name: "Client UI Layer",
        role: "State reconciliation, optimistic message appending, typing indicators, auto-scroll management",
        tech: "React, TypeScript, Tailwind CSS",
      },
      {
        name: "Socket Gateway",
        role: "Bidirectional event broker, connection handshake authentication, room subscription dispatch",
        tech: "Socket.io / WebSockets, Node.js",
      },
      {
        name: "Security & Validation Middleware",
        role: "JWT verification on socket handshake, rate limiting token-bucket algorithm, input sanitization",
        tech: "Express.js, Helmet, Express-Rate-Limit",
      },
      {
        name: "Persistent Storage",
        role: "Indexed conversation logs, user profiles, message timestamps, relationship graphs",
        tech: "MongoDB / Mongoose",
      },
      {
        name: "Volatile State & Caching",
        role: "Active socket-to-user mapping, heartbeat presence tracking, cached recent channel logs",
        tech: "Redis In-Memory Store",
      },
    ],
  },
  keyDecisions: [
    {
      decision: "Event-Driven WebSockets over HTTP Long Polling",
      rationale:
        "Long polling incurs excessive HTTP header overhead and continuous TCP connection re-establishment, saturating server resources.",
      impact:
        "Reduced client-server communication latency from 400ms+ to sub-50ms with a persistent bidirectional TCP stream.",
    },
    {
      decision: "Optimistic UI State Mutations on the Frontend",
      rationale:
        "Waiting for database persistence confirmation before displaying a message to the sender causes a perceived lag.",
      impact:
        "Instantaneous 0ms perceived feedback for users; messages are tagged with a pending status and reconciled once socket acknowledgment returns.",
    },
    {
      decision: "Redis for Presence & Volatile Socket Registry",
      rationale:
        "Querying disk-backed databases for frequent heartbeat pings causes unnecessary I/O saturation.",
      impact:
        "Handled online/offline presence toggles entirely in-memory with sub-millisecond lookups.",
    },
  ],
  securityMeasures: [
    "Handshake Authentication: Verified JWT tokens inside the initial WebSocket handshake before allowing socket connection upgrade.",
    "Granular Rate Limiting: Configured sliding-window rate limiting on both HTTP endpoints and socket event emitters to neutralize brute-force and message flood attacks.",
    "Data Sanitization: Strict escaping and schema validation on all incoming payload strings to prevent Cross-Site Scripting (XSS) and injection attacks.",
    "CORS & Secure Headers: Strict origin whitelisting and HTTP-only cookie flags with SameSite protection against CSRF.",
  ],
  performanceOptimizations: [
    "MongoDB Compound Indexing: Created compound indices on `[roomId, createdAt]` to ensure conversation history queries execute in O(log N) time.",
    "Paginated Message Fetching: Cursor-based pagination on conversation histories to prevent memory bloat on heavy chat threads.",
    "Debounced Typing Broadcasts: Throttle user typing events to prevent socket message spamming during rapid keystrokes.",
  ],
  challenges: [
    "Handling Unannounced Disconnections: Addressed silent mobile network drops by implementing a heartbeat ping/pong mechanism with an automatic 3-retry backoff algorithm.",
    "Message Ordering Under Network Jitter: Utilized monotonic timestamps and client sequence IDs to reorder messages correctly if packets arrived out of sequence.",
  ],
  outcome:
    "Delivered a dependable, highly responsive real-time platform capable of instant messaging, reliable presence tracking, and stable long-running socket connections with zero reported vulnerabilities.",
  techStack: [
    "Node.js",
    "Express.js",
    "Socket.io",
    "TypeScript",
    "React",
    "MongoDB",
    "Redis",
    "Tailwind CSS",
  ],
  githubUrl: "https://github.com/affanraza84",
  liveUrl: "https://github.com/affanraza84",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend Engineering",
    description:
      "Crafting performant, accessible, and responsive user interfaces with modern component architectures.",
    skills: [
      { name: "React", highlight: true, note: "Hooks, Context, State Design" },
      { name: "Next.js", highlight: true, note: "App Router, SSR, Server Actions" },
      { name: "TypeScript", highlight: true, note: "Strict Type Safety & Generics" },
      { name: "JavaScript (ES6+)", highlight: false, note: "Async/Await, DOM APIs" },
      { name: "Tailwind CSS", highlight: true, note: "Design Systems & Custom Configs" },
      { name: "HTML5 & CSS3", highlight: false, note: "Semantic Structure & Modern CSS" },
    ],
  },
  {
    category: "Backend & Systems",
    description:
      "Architecting reliable server environments, high-throughput APIs, and real-time streaming services.",
    skills: [
      { name: "Node.js", highlight: true, note: "Event Loop, Streams, Performance" },
      { name: "Express.js", highlight: true, note: "Middleware, Routing, Error Boundaries" },
      { name: "REST APIs", highlight: true, note: "Resource Modeling, Versioning, Auth" },
      { name: "WebSockets", highlight: true, note: "Socket.io, Bidirectional Channels" },
      { name: "Authentication", highlight: true, note: "JWT, Session Cookies, OAuth" },
    ],
  },
  {
    category: "Databases & Caching",
    description:
      "Designing structured relational and document databases with optimized indexing and in-memory caches.",
    skills: [
      { name: "MongoDB", highlight: true, note: "Document Modeling, Mongoose, Aggregations" },
      { name: "PostgreSQL", highlight: true, note: "Relational Schemas, Constraints, SQL" },
      { name: "Redis", highlight: true, note: "In-Memory Caching, Pub/Sub, Key Eviction" },
    ],
  },
  {
    category: "DevOps & Infrastructure",
    description:
      "Building reproducible containerized environments, version control practices, and deployment pipelines.",
    skills: [
      { name: "Docker", highlight: true, note: "Multi-stage Builds, Containerization" },
      { name: "Git & GitHub", highlight: true, note: "Git Flow, Code Review, Branching" },
      { name: "CI / CD", highlight: false, note: "GitHub Actions, Automated Testing" },
      { name: "Cloud Deployment", highlight: false, note: "Vercel, Render, AWS/Cloud VPS" },
    ],
  },
  {
    category: "Core Foundations & AI",
    description:
      "Deep foundational understanding of computer science principles and modern AI tool integrations.",
    skills: [
      { name: "Data Structures & Algorithms", highlight: true, note: "Optimized Problem Solving" },
      { name: "Computer Networks", highlight: false, note: "TCP/IP, HTTP/1.1-2-3, WebSockets" },
      { name: "Operating Systems", highlight: false, note: "Processes, Concurrency, Memory" },
      { name: "AI / LLM Integrations", highlight: true, note: "Prompt Engineering, API Integrations" },
    ],
  },
];

export const OPEN_SOURCE_RECOGNITIONS: OpenSourceContribution[] = [
  {
    program: "GirlScript Summer of Code",
    title: "GSSoC’26 Contributor",
    badge: "Top 1% Contributor",
    rank: "Elite Tier",
    description:
      "Contributed high-impact pull requests across open-source web and backend repositories. Collaborated with maintainers, solved real-world software issues, reviewed community pull requests, and adhered to enterprise-level code standards.",
    highlights: [
      "Placed in the Top 1% of contributors globally based on merged PR complexity and velocity",
      "Resolved frontend accessibility, state management bugs, and responsive UI bottlenecks",
      "Optimized backend route handling and authored comprehensive API documentation",
      "Conducted structured code reviews adhering to repository contribution guidelines",
    ],
    skillsUsed: ["TypeScript", "React", "Node.js", "Git / GitHub", "Open Source Collaboration"],
  },
  {
    program: "Social Summer of Code",
    title: "SSoC’26 Contributor",
    badge: "Top 1% Contributor",
    rank: "Elite Tier",
    description:
      "Participated in the competitive open-source initiative, contributing feature enhancements, performance refactoring, and bug fixes across diverse public tech stacks.",
    highlights: [
      "Achieved Top 1% contributor standing across thousands of active participants",
      "Engineered modular frontend components and reusable utility libraries",
      "Collaborated asynchronously across distributed maintainer teams across timezones",
      "Authored clean commit histories, clear issue descriptions, and verification instructions",
    ],
    skillsUsed: ["Next.js", "Tailwind CSS", "JavaScript", "REST APIs", "Peer Code Reviews"],
  },
];

export const EXPERIENCE_HISTORY: ExperienceItem[] = [
  {
    role: "Full-Stack Developer Intern",
    companyPlaceholder: "Technology Company",
    duration: "5 Months",
    location: "Remote / Hybrid",
    type: "Internship",
    summary:
      "Contributed directly to production-ready web application features across both frontend user interfaces and backend API services, collaborating closely with senior engineers in an agile sprint environment.",
    responsibilities: [
      "Developed and shipped responsive, accessible frontend features using React, TypeScript, and modern CSS workflows.",
      "Engineered backend REST endpoints in Node.js and Express, ensuring robust request validation and error propagation.",
      "Integrated database queries and schema updates with MongoDB and PostgreSQL, implementing indexing for common lookups.",
      "Implemented secure user authentication flows using token-based verification and role checks.",
      "Participated in daily standups, sprint planning, and bi-weekly peer code reviews to maintain high codebase quality.",
      "Diagnosed and resolved production bugs, performance bottlenecks, and responsive layout anomalies.",
    ],
    skillsApplied: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Git",
    ],
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "saas-apps",
    title: "SaaS & Web Applications",
    subtitle: "End-to-end product development",
    description:
      "Turn your vision into a scalable, high-converting SaaS product. Built with clean architecture, robust user authentication, and high performance from day one.",
    deliverables: [
      "Full-stack Next.js / React application",
      "Multi-tenant database schema design",
      "Subscription & user management flows",
      "Production-ready deployment & monitoring",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: "realtime-systems",
    title: "Real-Time & Collaborative Systems",
    subtitle: "Low-latency bidirectional streaming",
    description:
      "Live chat engines, real-time collaboration boards, instant notification systems, and presence trackers engineered with WebSockets and Redis pub/sub.",
    deliverables: [
      "Sub-50ms WebSocket event pipeline",
      "Heartbeat presence & typing indicators",
      "Connection reconnection & failover logic",
      "Rate-limited socket protection",
    ],
    technologies: ["Socket.io", "Node.js", "Redis", "MongoDB"],
  },
  {
    id: "backend-apis",
    title: "REST APIs & Backend Infrastructure",
    subtitle: "Resilient server architecture",
    description:
      "High-throughput API microservices with clean controller-service architecture, structured error handling, token security, and caching strategies.",
    deliverables: [
      "Modular RESTful API endpoints",
      "Redis caching layer for read-heavy routes",
      "Rate limiting, input validation & CORS",
      "Automated testing & API documentation",
    ],
    technologies: ["Node.js", "Express.js", "Redis", "Docker"],
  },
  {
    id: "frontend-engineering",
    title: "High-Performance Frontend & UI",
    subtitle: "Fast, responsive, editorial interfaces",
    description:
      "Transform Figma designs or functional requirements into pixel-perfect, accessible, and fast web experiences with perfect Lighthouse scores.",
    deliverables: [
      "Sub-second First Contentful Paint (FCP)",
      "Strict responsive layout across all screen sizes",
      "WCAG-compliant accessible components",
      "Clean TypeScript component libraries",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "auth-security",
    title: "Auth & RBAC Systems",
    subtitle: "Enterprise-grade access control",
    description:
      "Implement impenetrable authentication and authorization systems with JWT, secure HTTP-only cookies, session refresh strategies, and role-based permissions.",
    deliverables: [
      "JWT & refresh token rotation pipelines",
      "Role-Based Access Control (Admin, Member, User)",
      "Password hashing with bcrypt & salt",
      "CSRF & XSS defense mechanisms",
    ],
    technologies: ["Node.js", "TypeScript", "PostgreSQL / MongoDB"],
  },
  {
    id: "ai-integrations",
    title: "AI-Powered Web Features",
    subtitle: "Intelligent LLM application workflows",
    description:
      "Integrate OpenAI, Claude, or open-source LLMs into your product workflows with streaming responses, prompt management, and automated text pipelines.",
    deliverables: [
      "Streaming AI chat & completion interfaces",
      "Context-aware prompt structuring",
      "Token usage & rate management",
      "Robust fallback & error handling",
    ],
    technologies: ["Next.js", "LangChain / AI SDK", "TypeScript"],
  },
];

export const WHY_WORK_WITH_ME = [
  {
    title: "Full-Stack Autonomy",
    description:
      "I bridge the gap between polished UI engineering and scalable backend infrastructure, eliminating coordination friction and accelerating delivery.",
  },
  {
    title: "Engineering Craftsmanship",
    description:
      "I write clean, documented, strictly typed TypeScript that your team can comfortably maintain and extend for years to come.",
  },
  {
    title: "Security & Performance Mindset",
    description:
      "Rate limiting, secure token handling, database indexing, and low latency are built into my work by default — not added as afterthoughts.",
  },
  {
    title: "Reliable & Direct Communication",
    description:
      "Expect transparent updates, clear sprint milestones, proactive problem solving, and zero technical excuses.",
  },
];
