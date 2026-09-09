export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "AI / LLM",
    items: [
      "Custom GPT & agent development",
      "Prompt & instruction engineering",
      "Knowledge-base tuning",
      "SharePoint-grounded RAG",
    ],
  },
  {
    label: "Languages & Frameworks",
    items: ["Python", "TypeScript / JavaScript", "Go", "Flask", "FastAPI", "Next.js", "Express"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "SQLite", "Prisma", "SQLAlchemy", "Alembic"],
  },
  {
    label: "Cloud & DevOps",
    items: ["Azure App Service", "Azure Blob Storage", "Docker", "GitHub Actions CI"],
  },
  {
    label: "Auth & Security",
    items: ["OAuth2", "JWT", "RBAC", "HMAC signing", "CompTIA Security+"],
  },
  {
    label: "Other",
    items: ["HubSpot CMS", "Microsoft Graph API", "IT & network support"],
  },
];

export type ExperienceEntry = {
  title: string;
  org: string;
  dates: string;
  location: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    title: "AI Solutions Architect (formerly IT Projects Analyst, AI Development Manager)",
    org: "Foundation Specialty Finance",
    dates: "Jul 2025 – Aug 2026",
    location: "Goodyear, AZ",
    bullets: [
      "Designed and built aiGENT, an internal GPT-based agent connected to SharePoint to pull underwriting knowledge from the shared drive as needed.",
      "Identified that the ChatGPT Agent runtime couldn't make outbound HTTP GET requests, and designed an inline POST-based proxy/relay pattern to work around it.",
      "Built the Flask/Python backend powering aiGENT, plus the Docker container and launch sequence needed to pass Azure's Oryx build process without crashing or timing out.",
      "Set up Azure Blob Storage to host images parsed from PDFs, served back to the agent via SAS URLs for assembly into a standardized memo template.",
      "Worked directly with the Senior Underwriter to train the agent and build out its underwriting knowledge base.",
      "Position eliminated in August 2026 as part of a company-wide restructuring toward AI-managed IT infrastructure.",
    ],
  },
  {
    title: "Account Executive, Office & Warehouse Operations, Lead Technician",
    org: "AverUS West LLC",
    dates: "Aug 2016 – Jun 2025",
    location: "Goodyear, AZ",
    bullets: [
      "Progressed over ~9 years from field technician to office/warehouse operations to B2B account management for a commercial services company, while also providing light in-house IT support (network troubleshooting, computer and peripheral support).",
    ],
  },
];

export const education = [
  { name: "High School Diploma", org: "Agua Fria High School, Avondale, AZ", year: "2015" },
];

export const certifications = ["CompTIA Security+"];
