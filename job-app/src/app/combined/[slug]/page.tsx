import { notFound } from "next/navigation";
import { getApplication, getApplicationSlugs } from "@/data/applications";
import { templates } from "@/data/templates";
import { CompanyBrand } from "@/components/shared/CompanyBrand";
import { PrintButton } from "@/components/shared/PrintWrapper";
import { CoverLetterLayout } from "@/components/layouts/CoverLetterLayout";
import { CVLayout } from "@/components/layouts/CVLayout";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return getApplicationSlugs().map((slug) => ({ slug }));
}

export default async function CombinedPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const config = await getApplication(slug);
  if (!config) notFound();

  const template = templates[config.template];
  if (!template) notFound();

  return (
    <CompanyBrand config={config}>
      <div className="print-wrapper min-h-screen bg-gray-50 py-10">
        <div className="no-print mx-auto mb-6 max-w-[210mm] px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            <ArrowLeft size={14} /> Tilbage til oversigt
          </Link>
          <p className="mt-2 text-xs text-[var(--muted)]">
            Samlet visning — Cmd+P → Margener: Ingen → Slå sidehoved/sidefod
            fra.
          </p>
        </div>

        <CoverLetterLayout config={config} />
        <div className="page-break" />
        <CVLayout template={template} config={config} />

        <PrintButton />
      </div>
    </CompanyBrand>
  );
}
