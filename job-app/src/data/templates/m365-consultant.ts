import { TemplateProfile } from "../types";

export const m365Consultant: TemplateProfile = {
  profileTitle: "Microsoft 365 Consultant",
  highlightSkills: ["backend", "frontend", "compliance", "cloud"],
  highlightProjects: [
    "office-addin",
    "compliance-chatbot",
    "gis-evaluation",
    "accounting-platform",
    "tax-automation",
  ],
  toneKeywords: [
    "M365",
    "Office",
    "Azure",
    "enterprise",
    "compliance",
    "add-in",
  ],
  textBlocks: {
    intro:
      "I extend Microsoft 365 with custom add-ins, Azure integrations, and AI-powered tools that fit into enterprise workflows.",
    whyMe:
      "I understand the M365 ecosystem from add-in development to Azure compliance. I combine technical implementation with governance awareness — building solutions that IT departments approve.",
    strengths: [
      "Office Add-in development (React + Office.js)",
      "Azure OpenAI and Azure cloud services",
      "IT compliance, GDPR, and governance frameworks",
      "Enterprise software architecture (.NET, Blazor)",
      "Third-party SDK evaluation and integration",
    ],
  },
};
