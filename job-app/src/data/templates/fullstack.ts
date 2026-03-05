import { TemplateProfile } from "../types";

export const fullstack: TemplateProfile = {
  profileTitle: "Full-Stack Developer",
  highlightSkills: ["frontend", "backend", "cloud", "mobile"],
  highlightProjects: [
    "accounting-platform",
    "reconciliation-app",
    "ai-chatbot",
    "payment-integrations",
    "office-addin",
  ],
  toneKeywords: [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "full-stack",
    "production-ready",
  ],
  textBlocks: {
    intro:
      "I ship full-stack applications from database to deploy — React/Next.js frontends, Node.js/.NET backends, and cloud infrastructure that scales.",
    whyMe:
      "I cover the full stack without handoffs. From designing the data model to building the UI to setting up CI/CD — one person, one vision, faster delivery.",
    strengths: [
      "React, Next.js, TypeScript — modern frontend stack",
      "Node.js and .NET backends with REST APIs",
      "Payment integrations (Stripe, MobilePay)",
      "Mobile development with React Native",
      "End-to-end ownership from UX to deployment",
    ],
  },
};
