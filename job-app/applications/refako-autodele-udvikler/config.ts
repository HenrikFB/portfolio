import { CompanyConfig } from "@/data/types";

export const config: CompanyConfig = {
  slug: "refako-autodele-udvikler",
  companyName: "Refako Autodele",
  role: "Full Stack Udvikler",
  accentColor: "#059669",
  accentLight: "#d1fae5",
  template: "fullstack",
  date: "2026-03-06",
  language: "da",
  contactEmail: "Job@refako.dk",
  coverLetter: {
    greeting: "Hej Refako,",
    opening:
      "Jeg skriver angående jeres nye full stack udvikler-stilling i Odense. Jeg vil gerne foreslå et selvstændigt pilotprojekt eller praktik.",
    quoteSnippets: [
      "Ruby on Rails",
      "MVC",
      "webshop",
      "B2B",
      "B2C",
      "logistik",
      "lager",
      "økonomi",
      "full stack",
    ],
    sections: [
      {
        title: "Fra jobbeskrivelsen + tech stack",
        items: [
          "Jeg har ikke direkte erfaring med Ruby on Rails, men jeg kender MVC og server-side web frameworks fra andre stacks – erfaringen er overførbar.",
          "Jeg kan bidrage med optimering af data- og fetch-loading til webshoppen.",
          "Event-driven arkitektur til real-time opdateringer mellem lager og logistik",
          "Integration med økonomi- og lagerstyringssystemer.",
        ],
      },
      {
        title: "Webshop på Refakos domæne",
        items: [
          "Produkt-chatbot til både intern brug og kundeservice – fx hvor kundens ønsker automatisk bliver til en indkøbsliste. Jeg har bygget lignende med RAG, semantisk søgning og dynamisk UI.",
          "Nummerpladesøgning findes allerede på refako.dk. Jeg vil gerne bygge videre på den og udvide funktionaliteten.",
          "Jeg kan hjælpe med at automatisere udtrækning af produkt- og leverandørinformation fra brochures og datasheets – via PDF/CSV-parsing, LlamaIndex, agentic workflows og webscraping.",
        ],
      },
      {
        title: "Omkring firmaet – økonomi, logistik, lager",
        items: [
          "Økonomi: Jeg har erfaring med at automatisere afstemning mellem leverandørbilag og ERP samt hentning af data fra Skat.",
          "Logistik og lager: Event-driven opdateringer mellem systemer, små apps til personale – samt IoT og cloud computing.",
        ],
      },
    ],
    closing: "",
    illustration: "/illustrations/refako-autodele.svg",
    illustrationScale: 1,
    illustrationMarginTop: "0.125rem",
  },
};
