import { CompanyConfig } from "@/data/types";

export function LetterPage({
  config,
  illustrationSvg,
}: {
  config: CompanyConfig;
  illustrationSvg?: string | null;
}) {
  const { coverLetter } = config;
  const hasSections = coverLetter.sections && coverLetter.sections.length > 0;
  const useLegacyProposals =
    !hasSections && coverLetter.projectProposals;

  return (
    <div className="page px-[22mm] pt-[18mm] pb-[16mm] flex flex-col">
      {/* Content only — no header/footer, starts with greeting */}
      <div className="space-y-3.5 text-[0.86rem] leading-[1.7]">
        <p>{coverLetter.greeting}</p>
        <p>{coverLetter.opening}</p>
      </div>

      {/* Quote snippets (badges) */}
      {coverLetter.quoteSnippets && coverLetter.quoteSnippets.length > 0 && (
        <div className="my-5 flex flex-wrap gap-1.5">
          {coverLetter.quoteSnippets.map((q) => (
            <span
              key={q}
              className="rounded-full border px-2.5 py-1 text-[0.7rem] font-medium"
              style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
            >
              {q}
            </span>
          ))}
        </div>
      )}

      {/* Optional body */}
      {coverLetter.body && (
        <div className="mb-4 text-[0.86rem] leading-[1.7] whitespace-pre-line">
          {coverLetter.body}
        </div>
      )}

      {/* Sections */}
      {hasSections && (
        <div className="space-y-5 mb-6">
          {coverLetter.sections!.map((section, i) => (
            <div key={i}>
              <h3
                className="mb-2 text-[0.82rem] font-bold"
                style={{ color: "var(--accent)" }}
              >
                {section.title}
              </h3>
              <ul className="space-y-1 text-[0.8rem] leading-[1.55] text-[var(--foreground)]">
                {section.items.map((item, j) => (
                  <li key={j} className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-[var(--muted)]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Legacy project proposals (fallback) */}
      {useLegacyProposals && (
        <div
          className="my-5 rounded-lg border-2 px-5 py-4 flex-1"
          style={{
            borderColor: "var(--accent)",
            background: "var(--accent-light)",
          }}
        >
          <div className="whitespace-pre-line text-[0.84rem] leading-[1.65]">
            {coverLetter.projectProposals}
          </div>
        </div>
      )}

      {/* Closing */}
      <p className="text-[0.86rem] leading-[1.7]">{coverLetter.closing}</p>

      {/* Illustration — right after closing (inline SVG for reliable render/print) */}
      {(illustrationSvg || coverLetter.illustration) && (
        <div className="mt-6 w-full max-w-[140mm]" style={{ maxWidth: "140mm" }}>
          {illustrationSvg ? (
            <div
              className="[&_svg]:w-full [&_svg]:h-auto [&_svg]:block"
              dangerouslySetInnerHTML={{ __html: illustrationSvg }}
            />
          ) : (
            <img
              src={coverLetter.illustration!}
              alt=""
              className="w-full h-auto block"
              style={{ maxWidth: "140mm" }}
            />
          )}
        </div>
      )}
    </div>
  );
}
