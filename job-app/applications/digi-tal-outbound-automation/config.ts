import { CompanyConfig } from "@/data/types";

export const config: CompanyConfig = {
  slug: "digi-tal-outbound-automation",
  companyName: "Digi-Tal",
  role: "Outbound Automation Specialist",
  accentColor: "#2563eb",
  accentLight: "#dbeafe",
  template: "ai-automation",
  date: "2025-06-15",
  language: "da",
  coverLetter: {
    greeting: "Hej Digi-Tal,",
    opening:
      "Udover stillingen som \"Outbound Automation Specialist\" kommer jeg i min private fritid til at være firmaets AI Engineering, fordi jeg finder domænet spændende. Jeg vil også gerne foreslå et selvstændigt 4-ugers pilotprojekt — uden behov for ressourcer fra jeres side (ledighedspraktik).",
    body: `Jeg er uddannet i IT-Produktudvikling med en tværfaglig profil der dækker alt fra funktionel programmering til designtænkning. Jeg kan hoppe ind og fikse problemer end-to-end — fra brugerundersøgelser til produktion.

Min baggrund gør mig egnet til:
— Softwareudvikling fra interne krav, skalerbart og vedligeholdeligt.
— Interfaces, strategy, adapter og factory patterns + DRY-principper.
— Integrationer, API'er og datamodeller.
— Automatiseret DevOps og CI/CD med AI rules.
— Funktionel programmering til sikkerhed ved mange variabler og flows.`,
    projectProposals: `Projekter til firmaet:

— Automatisere udkast/analyse af regnskabspakker: Multi-agent workflow (Researcher + Writer) der finder lignende cases, genererer rapporter, og opdaterer intern knowledge base automatisk.
— Automatisere brugerfeedback og kvalitative data med LLM-analyse. Opdatere prompts automatisk.
— Chatbot/automatiseret support — tilpasset jeres kontaktflow.

AI og automatisering projekt ideer:
— Dokumentekstraktion: Azure AI, LlamaIndex/Landing AI (agentic extraction).
— Konvertering af ustrukturerede data til strukturerede data (billeder, dokumenter, regneark, databaser).
— Grafdatabaser til semantisk søgning.
— Protokoller som MCP og Agent2Agent — modulært og duplikeringsfrit.`,
    closing:
      "Jeg ser frem til at høre mere — og foreslår gerne et konkret pilotprojekt som første skridt.",
  },
};
