import { notFound } from "next/navigation";
import { getApplication, getApplicationSlugs } from "@/data/applications";
import { loadIllustrationSvg } from "@/data/illustration";
import { CompanyBrand } from "@/components/shared/CompanyBrand";
import { PrintButton } from "@/components/shared/PrintWrapper";
import { LetterPage } from "@/components/letter/LetterPage";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return getApplicationSlugs().map((slug) => ({ slug }));
}

export default async function LetterRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const config = await getApplication(slug);
  if (!config) notFound();

  const illustrationSvg = await loadIllustrationSvg(config.coverLetter?.illustration);

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
        </div>
        <LetterPage config={config} illustrationSvg={illustrationSvg} />
        <PrintButton />
      </div>
    </CompanyBrand>
  );
}
