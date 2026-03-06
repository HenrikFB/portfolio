import { CompanyConfig } from "@/data/types";

export const config: CompanyConfig = {
  slug: "auxo-udvikler",
  companyName: "Auxo",
  role: "Frontend / Webudvikler",
  accentColor: "#059669",
  accentLight: "#d1fae5",
  template: "fullstack",
  date: "2026-03-05",
  language: "da",
  contactEmail: "job@auxo.dk",
  coverLetter: {
    greeting: "Hej Auxo,",
    opening:
      "Jeg skriver angående jeres frontend- og webudvikler-stillinger (Esbjerg og Aarhus). Jeg vil gerne foreslå et selvstændigt pilotprojekt eller praktik.",
    quoteSnippets: [
      "Drupal",
      "WordPress",
      "Shopify",
      "HTML",
      "SCSS",
      "JavaScript",
      "CMS",
      "UX/UI",
      "kundedialog",
      "WooCommerce",
    ],
    sections: [
      {
        title: "Fra jobbeskrivelsen + tech stack",
        items: [
          "CMS: Drupal, WordPress, Shopify",
          "HTML, SCSS, JavaScript, Bootstrap",
          "Design/UX, Adobe Creative Cloud",
          "AI til research og udkast",
        ],
      },
      {
        title: "Web & design på Auxos domæne",
        items: [
          "Hjemmesider og webshops (Drupal, WordPress, WooCommerce, Shopify)",
          "AI til design: SVG/animationer (fx Gemini), 3D/video on scroll",
          "CopilotKit til state/context i UI for cases",
          "CMS + AI: knowledge base, researcher-writer arkitektur",
        ],
      },
      {
        title: "Ideer til andre stillinger",
        items: [
          "Kundeansvarlig/retention: outbound — Find prospects → Build demo (20 min) → Show → Close",
          "Head of Web & Design: AI til SVG/cases, researcher-writer arkitektur",
        ],
      },
    ],
    closing: "",
    illustration: "/illustrations/auxo-ai.svg",
  },
};
