import { CompanyConfig } from "./types";

const configs: Record<string, () => Promise<{ config: CompanyConfig }>> = {
  "auxo-ai-automation": () => import("../../applications/auxo-ai-automation/config"),
  "auxo-udvikler": () => import("../../applications/auxo-udvikler/config"),
};

export function getApplicationSlugs(): string[] {
  return Object.keys(configs);
}

export async function getApplication(slug: string): Promise<CompanyConfig | null> {
  const loader = configs[slug];
  if (!loader) return null;
  const mod = await loader();
  return mod.config;
}

export interface ApplicationSummary {
  slug: string;
  companyName: string;
  role: string;
  date: string;
  template: string;
}

export async function getAllApplications(): Promise<ApplicationSummary[]> {
  const results: ApplicationSummary[] = [];
  for (const slug of getApplicationSlugs()) {
    const config = await getApplication(slug);
    if (config) {
      results.push({
        slug: config.slug,
        companyName: config.companyName,
        role: config.role,
        date: config.date,
        template: config.template,
      });
    }
  }
  return results.sort((a, b) => b.date.localeCompare(a.date));
}
