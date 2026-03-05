import { CompanyConfig } from "@/data/types";

export const config: CompanyConfig = {
  slug: "fake-contoso-dotnet",
  companyName: "Contoso Solutions",
  role: ".NET Backend Developer",
  accentColor: "#7c3aed",
  accentLight: "#ede9fe",
  template: "dotnet-developer",
  date: "2025-08-01",
  language: "en",
  coverLetter: {
    greeting: "Dear Hiring Team,",
    opening:
      "I'm writing about the .NET Backend Developer position. My experience spans Blazor, .NET MVC, Azure Functions, Docker, and SQL — and I bring a product-oriented mindset to backend engineering.",
    body: `With a MSc in IT Product Development, I approach development holistically — not just writing code, but understanding the system it lives in. At Powercare I worked with Docker, Blazor, and .NET MVC. At Aisel Health I built Azure Functions APIs with Angular frontends and raw SQL. At Dynatest I evaluated GIS SDKs and built native WinUI applications.

I write clean, testable code and care about architecture: interfaces, dependency injection, adapter patterns, and DRY principles. I'm comfortable across the full .NET ecosystem — from ASP.NET Core APIs to Blazor Server and desktop apps.

I also bring an AI/automation angle: I can identify where AI-assisted tooling, automated pipelines, or intelligent data processing can save time and improve quality — and I can build those solutions myself.`,
    closing:
      "Looking forward to discussing how I can contribute. I'm available to start immediately.",
  },
};
