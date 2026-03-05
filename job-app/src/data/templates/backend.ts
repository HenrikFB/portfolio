import { TemplateProfile } from "../types";

export const backend: TemplateProfile = {
  profileTitle: "Backend Developer",
  highlightSkills: ["backend", "cloud", "automation", "ai"],
  highlightProjects: [
    "accounting-platform",
    "tax-automation",
    "menu-pipeline",
    "payment-integrations",
    "reconciliation-app",
  ],
  toneKeywords: [
    "APIs",
    "data pipelines",
    "scalable",
    "architecture",
    "backend systems",
  ],
  textBlocks: {
    intro:
      "I design and build backend systems — REST APIs, data pipelines, and automation infrastructure. Reliable, scalable, and well-documented.",
    whyMe:
      "I think in systems, not features. I design architectures that are maintainable and scalable, with proper error handling, retry policies, and observability built in from day one.",
    strengths: [
      "System design and API architecture",
      "Data pipelines and document processing",
      "Automation infrastructure (n8n, custom scripts)",
      "Database design (PostgreSQL, Supabase, vector DBs)",
      "Cloud deployment and DevOps (Azure, Docker, CI/CD)",
    ],
  },
};
