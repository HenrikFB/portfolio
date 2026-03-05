export interface TemplateProfile {
  profileTitle: string;
  highlightSkills: string[];
  highlightProjects: string[];
  toneKeywords: string[];
  textBlocks: {
    intro: string;
    whyMe: string;
    strengths: string[];
  };
}

export interface CompanyConfig {
  slug: string;
  companyName: string;
  role: string;
  accentColor: string;
  accentLight: string;
  template: string;
  date: string;
  language: "da" | "en";
  contactEmail?: string;
  coverLetter: {
    greeting: string;
    opening: string;
    body: string;
    projectProposals?: string;
    closing: string;
  };
}
