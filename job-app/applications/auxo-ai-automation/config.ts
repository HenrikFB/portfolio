import { CompanyConfig } from "@/data/types";

export const config: CompanyConfig = {
  slug: "auxo-ai-automation",
  companyName: "Auxo",
  role: "AI & Automations Specialist",
  accentColor: "#059669",
  accentLight: "#d1fae5",
  template: "ai-automation",
  date: "2026-03-05",
  language: "da",
  contactEmail: "job@auxo.dk",
  coverLetter: {
    greeting: "Hej Auxo,",
    opening:
      "Jeg skriver angående AI & Automations Specialist. Jeg vil gerne foreslå et selvstændigt pilotprojekt (ledighedspraktik).",
    quoteSnippets: [
      "n8n",
      "OpenAI API",
      "API-integrationer",
      "skalerbar systemarkitektur",
      "sammenlængende systemer",
      "workflow-automatiseringer",
      "e-mails og kundedialog",
    ],
    sections: [
      {
        title: "Fra jobbeskrivelsen + tech stack",
        items: [
          "n8n workflows og dashboards",
          "OpenAI/Gemini i automatiserede processer",
          "API-integrationer på tværs af systemer",
          "E-mail og kundedialog-automatisering",
          "Skalerbar systemarkitektur, dokumentation",
        ],
      },
      {
        title: "AI og engineering på Auxos domæne/ydelser",
        items: [
          "Foranalyse af henvendelser (kontaktformular → AI-udkast)",
          "SEO: automatisering af analyse og rapportering",
          "E-mail flows: automatiserede nyheder/kampagner",
          "Chatbot til intern support eller kundekontakt",
        ],
      },
      {
        title: "Ideer til andre stillinger/karriere",
        items: [
          "Kundeansvarlig/retention: Clay-agtig outbound — find og reager på relevante kunder",
          "Head of Web & Design: AI til SVG/cases, researcher-writer arkitektur",
          "Webudvikler: software + AI-integrationer",
        ],
      },
    ],
    closing: "",
    illustration: "/illustrations/auxo-ai.svg",
  },
};
