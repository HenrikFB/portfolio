import { profile } from "@/data/profile";
import { CompanyConfig } from "@/data/types";

export function LetterPage({ config }: { config: CompanyConfig }) {
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

      {/* Body */}
      <div className="space-y-3.5 text-[0.86rem] leading-[1.7] flex-1">
        <p>{config.coverLetter.greeting}</p>
        <p>{config.coverLetter.opening}</p>
        <div className="whitespace-pre-line">{config.coverLetter.body}</div>

        {config.coverLetter.projectProposals && (
          <div
            className="my-5 rounded-lg border-2 px-5 py-4"
            style={{
              borderColor: "var(--accent)",
              background: "var(--accent-light)",
            }}
          >
            <div className="whitespace-pre-line text-[0.84rem] leading-[1.65]">
              {config.coverLetter.projectProposals}
            </div>
          </div>
        )}

        <p>{config.coverLetter.closing}</p>
      </div>

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
