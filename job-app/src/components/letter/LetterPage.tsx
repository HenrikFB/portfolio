import { profile } from "@/data/profile";
import { CompanyConfig } from "@/data/types";

export function LetterPage({ config }: { config: CompanyConfig }) {
  const { coverLetter } = config;
  const hasSections = coverLetter.sections && coverLetter.sections.length > 0;
  const useLegacyProposals =
    !hasSections && coverLetter.projectProposals;

  return (
    <div className="page px-[22mm] pt-[18mm] pb-[16mm] flex flex-col">
      {/* Top accent bar */}
      <div
        className="h-[5px] w-full rounded-full mb-8"
        style={{ background: "var(--accent)" }}
      />

      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-[1.5rem] font-bold tracking-tight leading-none">
            {profile.name}
          </h1>
          <div className="mt-2 space-y-[2px] text-[0.8rem] text-[var(--muted)]">
            <p>{profile.email} · {profile.phone}</p>
            <p>{profile.links.linkedin}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[0.9rem] font-semibold">{config.companyName}</p>
          {config.contactEmail && (
            <p className="mt-[2px] text-[0.8rem] text-[var(--muted)]">
              {config.contactEmail}
            </p>
          )}
          <p className="mt-1 text-[0.8rem] text-[var(--muted)]">
            {new Date(config.date).toLocaleDateString(
              config.language === "da" ? "da-DK" : "en-US",
              { year: "numeric", month: "long", day: "numeric" }
            )}
          </p>
        </div>
      </div>

      {/* Subject */}
      <p className="mb-6 text-[0.88rem]">
        <span className="text-[var(--muted)]">
          {config.language === "da" ? "Vedr.:" : "Re:"}
        </span>{" "}
        <span className="font-semibold">{config.role}</span>
      </p>

      {/* Greeting + Opening */}
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

      {/* Sections (new list-based structure) */}
      {hasSections && (
        <div className="flex-1 space-y-5 mb-6">
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

      {/* Illustration */}
      {coverLetter.illustration && (
        <div className="mt-6 w-full max-w-[180mm]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={coverLetter.illustration}
            alt=""
            className="w-full h-auto"
            style={{ maxWidth: "180mm" }}
          />
        </div>
      )}

      {/* Signature — at bottom */}
      <div className="mt-auto pt-6">
        <div
          className="h-[1.5px] w-10 rounded-full mb-3"
          style={{ background: "var(--accent)" }}
        />
        <p className="text-[0.88rem] font-semibold">{profile.name}</p>
        <p className="text-[0.76rem] text-[var(--muted)]">
          {profile.email}
        </p>
      </div>
    </div>
  );
}
