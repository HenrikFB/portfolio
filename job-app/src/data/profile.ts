export const profile = {
  name: "Henrik Fog Bunzel",
  title: "Software Developer",
  email: "henrik@fogbunzel.dk",
  phone: "+45 61603125",
  location: "Denmark",
  availability: "Available worldwide",
  links: {
    github: "https://github.com/HenrikFB",
    linkedin: "https://www.linkedin.com/in/henrik-fog-bunzel-894828a5/",
    portfolio: "https://henrikfb.github.io/portfolio/",
  },
  personalProfile:
    "I am a software developer with an interdisciplinary background. It comes from both education and private projects. OOP comes most naturally to me, but I have read books about LISP, Haskell, and Scala for FP and declarative thinking. My hobby is trying out new hobbies. I have previously also done volunteer work.",
  areasOfExperience: [
    "Fullstack development",
    "ESM6 + TS",
    "OOP: Java + C#",
    "Object-Oriented Design",
    "UX & HCI & UCD",
    "Lean & Agil proces",
    "Deep Learning, IoT, AR, Cloud Computing",
  ],
  workExperience: [
    {
      role: "Software Engineer",
      company: "Aisel Health",
      period: "15 January to 17 June, 2025",
      bullets: [
        "Azure Functions web API + Angular, and raw SQL queries",
        "POC & Research for NX, NextJS, and NestJS",
        "Compliance",
      ],
    },
    {
      role: "Software Developer",
      company: "Powercare",
      period: "1/9-23 to 1/1-24 (project stopped)",
      bullets: [
        "Docker and Linux",
        "Blazor + .NET MVC (Razor)",
        "HTTPS certificates",
      ],
    },
    {
      role: "Software Engineer",
      company: "Dynatest",
      period: "Follow-up on sick leave (6 month)",
      bullets: [
        "GIS: ArcGIS, QGIS, Mapbox, and open-source alternatives",
        "Web: Validated GIS SDKs in Blazor",
        "Native: WinUI + MVVM with MapsUI (open-source)",
      ],
    },
  ],
  collaborations: [
    "2024-11 to 1 jan: Payment & Dashboard for Keypitt in Next.js",
    "2 weeks M365/office add-in (React)",
    "6 week course + 4 week internship at an SME",
    "1. july 2025: 2 weeks with NyKapital: Menu cards (PDF) => JSON for POS (AI Engineering)",
    "9-10 weeks at AMU JUUL: Chatbot + dynamic UI, AI Engineering, RAG, vector db, and web",
  ],
  personalProject:
    "I'm always researching something so please ask. It's all the way from marketing/paid SoMe to now LLM and agents. https://github.com/HenrikFB/email-app",
  previousJobs:
    "Voluntary work, warehouse work, Wolt, Swimming coach, package campaigns.",
  voluntaryWork:
    "ReDI (teaching javascript), iMentor (for international students), Idékomitéen (helping companies with cases), and more.",
  recommendations: ["Aisel Health", "Dynatest", "Colleagues & students from ReDI"],

  skills: {
    ai: [
      "RAG Pipelines",
      "OpenAI API",
      "Azure OpenAI",
      "LangChain",
      "LlamaIndex",
      "Vector DBs",
      "Prompt Engineering",
      "Fine-tuning",
      "Agent SDKs",
      "ElevenLabs",
    ],
    automation: [
      "n8n",
      "Zapier",
      "Custom Scripts",
      "Data Pipelines",
      "RPA",
      "Workflow Design",
      "MCP",
      "CI/CD",
    ],
    backend: [
      ".NET",
      "C#",
      "Node.js",
      "Python",
      "REST APIs",
      "Supabase",
      "PostgreSQL",
      "Weaviate",
    ],
    frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML/CSS",
      "Blazor",
    ],
    mobile: ["React Native", "Android"],
    cloud: ["Azure", "Supabase", "Vercel", "Docker"],
    hardware: [
      "Arduino",
      "Raspberry Pi",
      "MQTT",
      "BLE",
      "PCB Design",
      "3D Printing",
      "Sensors",
    ],
    compliance: [
      "GDPR",
      "Risk Assessment",
      "Governance",
      "Security Audits",
      "Azure Compliance",
    ],
  },

  projects: [
    {
      slug: "ai-chatbot",
      title: "AI-Powered Course Chatbot",
      category: "AI Engineering",
      description:
        "Conversational AI with semantic & hybrid search, dynamic course UI rendering, and voice capabilities. RAG pipeline with real-time data sync and streaming UX.",
      tags: ["RAG", "OpenAI", "Supabase", "Voice AI", "Twilio", "ElevenLabs"],
      highlights: [
        "Hybrid search with Supabase + Weaviate",
        "OpenAI Agent SDKs for orchestration",
        "Voice bot with speech-to-text + text-to-speech",
        "Dynamic UI rendering on course match",
        "Streaming responses with skeleton UX",
      ],
    },
    {
      slug: "menu-pipeline",
      title: "Menu-to-JSON Data Pipeline",
      category: "AI + Data Extraction",
      description:
        "Extracts categories, product numbers, and price tiers from restaurant menus (PDF/images) into structured JSON for POS systems.",
      tags: ["LLama Parse", "GPT", "OCR", "Data Pipeline"],
      highlights: [
        "PDF → image → markdown → structured JSON",
        "LLama Parse for document extraction",
        "GPT-based reasoning for accuracy over speed",
        "Handles diverse menu formats and languages",
      ],
    },
    {
      slug: "accounting-platform",
      title: "Accounting & Reconciliation Platform",
      category: "Full-Stack Platform",
      description:
        "Kreditor/Debitor/bank reconciliation software system. Document parsing (bilags parsing) and ERP systems integration.",
      tags: ["Full-Stack", "Automation", "Finance"],
      highlights: [
        "Kreditor/Debitor/bank reconciliation system",
        "Document parsing (bilags parsing)",
        "ERP systems integration",
      ],
    },
    {
      slug: "compliance-chatbot",
      title: "Enterprise Compliance Chatbot",
      category: "Compliance & AI",
      description:
        "Conversational AI built on Azure OpenAI, meeting regulatory requirements and enterprise governance standards.",
      tags: ["Azure OpenAI", "Compliance", "Enterprise"],
      highlights: [
        "Azure OpenAI integration with governance layer",
        "Regulatory compliance built into architecture",
        "Enterprise-grade security and audit trails",
      ],
    },
    {
      slug: "gis-evaluation",
      title: "GIS Platform Evaluation",
      category: "GIS & SDKs",
      description:
        "Validated GIS SDKs across Blazor (web) and WinUI (native). ArcGIS, QGIS, Mapbox, and open-source alternatives.",
      tags: ["ArcGIS", "Mapbox", "Blazor", "WinUI"],
      highlights: [
        "Evaluated 4+ GIS platforms across 2 tech stacks",
        "Built PoC in both Blazor and WinUI",
        "Delivered recommendation report to stakeholders",
      ],
    },
    {
      slug: "payment-integrations",
      title: "Payment Integrations",
      category: "Payments",
      description:
        "Stripe, MobilePay, and digital wallet integrations. End-to-end payment flows for web and mobile applications.",
      tags: ["Stripe", "MobilePay", "Wallets"],
      highlights: [
        "Stripe checkout + webhook handling",
        "MobilePay integration for Danish market",
        "Digital wallet support",
      ],
    },
    {
      slug: "tax-automation",
      title: "Tax Authority Data Automation",
      category: "Automation",
      description:
        "Automated retrieval of tax data from government systems. Replaced a manual compliance process with a reliable pipeline.",
      tags: ["Automation", "Scraping", "Compliance"],
      highlights: [
        "Automated government portal data retrieval",
        "Replaced manual compliance workflow",
        "Retry policies and error handling",
      ],
    },
    {
      slug: "office-addin",
      title: "Office Add-in Development",
      category: "M365",
      description:
        "Microsoft 365 / Office add-in built with React. Extending enterprise productivity tools with custom functionality.",
      tags: ["React", "M365", "Add-in"],
      highlights: [
        "Office.js + React integration",
        "Enterprise deployment via M365 admin center",
        "Custom task pane functionality",
      ],
    },
    {
      slug: "reconciliation-app",
      title: "Reconciliation Web App",
      category: "Finance",
      description:
        "Bookkeeping reconciliation tool with automatic receipt parsing. Streamlined workflows for accounting professionals.",
      tags: ["Full-Stack", "Parsing", "Finance"],
      highlights: [
        "Automatic receipt parsing and categorization",
        "Reconciliation matching algorithm",
        "Streamlined accountant workflows",
      ],
    },
  ],

  researchProjects: [
    {
      title: "Actuasy — Shape-Changing Controller",
      description:
        "Adaptive game controller for people with physical impairments. Shape-changing interfaces to reduce specialized input devices.",
      tags: ["Accessibility", "Hardware", "UX Research"],
    },
    {
      title: "Social Distance Detection",
      description:
        "Vision-based system using object detection in PyTorch to monitor pedestrian distances in public spaces.",
      tags: ["PyTorch", "Computer Vision", "Deep Learning"],
    },
    {
      title: "ADHD & Game Design",
      description:
        "Game-based concept supporting children with ADHD. Focus on mitigating worsened symptoms during COVID-19.",
      tags: ["Game Design", "Health", "UX"],
    },
    {
      title: "FlatSwap — Startup MVP",
      description:
        "Platform for exchange students to swap apartments. MVP and business model built during entrepreneurship course.",
      tags: ["Startup", "MVP", "Entrepreneurship"],
    },
    {
      title: "IoT Table Occupancy Detection",
      description:
        "Scalable sensor system for real-time table usage visualization with local compute and cloud sync.",
      tags: ["IoT", "Cloud", "Sensors"],
    },
    {
      title: "Volkswagen Innovation Project",
      description:
        "Confidential innovation project. User requirements, innovation process, and product design.",
      tags: ["NDA", "Innovation", "Product Design"],
    },
    {
      title: "EksSys — Welfare Tech for Dialysis",
      description:
        "Digital solution for dialysis workflows. Domain research, agile development, user-centric design.",
      tags: ["Health Tech", "Agile", "UX"],
    },
    {
      title: "Badminton Training System",
      description:
        "Training prototype using Arduino and 3D printing. Hardware prototyping with agile methods.",
      tags: ["Arduino", "3D Printing", "Sports Tech"],
    },
    {
      title: "Gesture-Controlled Drone",
      description:
        "Hand-gesture controlled drone with custom PCB, Arduino, and sensors.",
      tags: ["PCB", "Arduino", "Embedded"],
    },
    {
      title: "NorthSide Festival — Physical Computing",
      description:
        "Interactive installations for a music festival. Social interaction and rapid prototyping.",
      tags: ["Physical Computing", "Installation"],
    },
    {
      title: "SAINT — Blockchain Exhibition",
      description:
        "Interactive installation explaining blockchain to the public. Internet Week Denmark 2018.",
      tags: ["Blockchain", "Exhibition"],
    },
  ],

  education: {
    degrees: [
      {
        title: "MSc IT Product Development",
        institution: "Aarhus University",
        period: "2019–2022",
      },
      {
        title: "BSc IT Product Development",
        institution: "Aarhus University",
        period: "2016–2019",
      },
    ],
    courses: [
      "Algorithms & Data Structures",
      "Deep Learning",
      "Augmented Reality (Unity)",
      "IoT & Cloud Computing",
      "Computer Architecture",
      "Software Architecture",
      "Interaction Design",
      "Physical Computing",
      "Mobile Apps (Android)",
      "WPF & ASP.NET Core",
      "Innovation Methods",
      "Web Technology",
      "Multimodal Interaction",
      "Experience Design",
      "Digital Entrepreneurship",
      "Pervasive Computing",
      "Databases",
      "Visualization",
      "Business Models",
      "Calculus",
    ],
  },

  languages: [
    { language: "Danish", level: "Native" },
    { language: "English", level: "Fluent" },
  ],
};
