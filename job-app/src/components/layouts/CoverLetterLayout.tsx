import { profile } from "@/data/profile";
import { CompanyConfig } from "@/data/types";

export function CoverLetterLayout({ config }: { config: CompanyConfig }) {
  return (
    <div className="a4-page">
      {/* Accent bar */}
      <div
        className="mb-6 h-[3px] w-16 rounded-full"
        style={{ background: "var(--accent)" }}
      />

      {/* Header row */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{profile.name}</h1>
          <p className="mt-1 text-[0.78rem] text-[var(--muted)]">
            {profile.email} · {profile.phone}
          </p>
          <p className="text-[0.78rem] text-[var(--muted)]">
            {profile.links.portfolio}
          </p>
        </div>
        <div className="text-right text-[0.78rem] text-[var(--muted)]">
          <p className="font-medium text-[var(--foreground)]">
            {config.companyName}
          </p>
          {config.contactEmail && <p>{config.contactEmail}</p>}
          <p className="mt-1">
            {new Date(config.date).toLocaleDateString(
              config.language === "da" ? "da-DK" : "en-US",
              { year: "numeric", month: "long", day: "numeric" }
            )}
          </p>
        </div>
      </div>

      {/* Role */}
      <p className="mb-5 text-[0.84rem]">
        <span className="text-[var(--muted)]">
          {config.language === "da" ? "Vedr.:" : "Re:"}
        </span>{" "}
        <span className="font-medium">{config.role}</span>
      </p>

      {/* Body — greeting + opening + main body + project proposals + closing all in one flow */}
      <div className="space-y-3 text-[0.82rem] leading-relaxed text-[var(--foreground)]">
        <p>{config.coverLetter.greeting}</p>
        <p>{config.coverLetter.opening}</p>
        <div className="whitespace-pre-line">{config.coverLetter.body}</div>

        {/* Inline project proposals — the key differentiator */}
        {config.coverLetter.projectProposals && (
          <div className="my-4 rounded-lg border border-[var(--border)] bg-[var(--accent-light)] p-4">
            <div className="whitespace-pre-line text-[0.8rem] leading-relaxed">
              {config.coverLetter.projectProposals}
            </div>
          </div>
        )}

        <p>{config.coverLetter.closing}</p>
      </div>

      {/* Signature */}
      <div className="mt-8">
        <p className="font-medium">{profile.name}</p>
        <p className="text-[0.78rem] text-[var(--muted)]">
          {profile.email} · {profile.links.linkedin}
        </p>
      </div>
    </div>
  );
}
