import { TemplateProfile } from "../types";

export const dotnetDeveloper: TemplateProfile = {
  profileTitle: ".NET Developer",
  highlightSkills: ["backend", "frontend", "cloud", "compliance"],
  highlightProjects: [
    "accounting-platform",
    "reconciliation-app",
    "gis-evaluation",
    "office-addin",
    "compliance-chatbot",
  ],
  toneKeywords: [
    ".NET",
    "C#",
    "Blazor",
    "WinUI",
    "ASP.NET",
    "Azure",
    "enterprise",
  ],
  textBlocks: {
    intro:
      "I build production .NET systems — from Blazor web apps and WinUI native clients to ASP.NET Core backends with Azure infrastructure.",
    whyMe:
      "I combine strong .NET development skills with a product mindset. I don't just write code — I understand the business context, evaluate third-party SDKs, and deliver solutions that align with enterprise standards.",
    strengths: [
      "Full-stack .NET: Blazor, WinUI, ASP.NET Core, WPF",
      "Azure cloud services and enterprise deployment",
      "Third-party SDK evaluation and integration",
      "IT compliance, GDPR, and governance frameworks",
      "Cross-functional: from user research to production code",
    ],
  },
};
