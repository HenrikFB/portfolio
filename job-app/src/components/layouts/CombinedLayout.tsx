import { profile } from "@/data/profile";
import { TemplateProfile } from "@/data/types";
import { CompanyConfig } from "@/data/types";
import { Badge } from "../shared/Badge";

export function CombinedLayout({
  template,
  config,
}: {
  template: TemplateProfile;
  config: CompanyConfig;
}) {
  const highlighted = profile.projects.filter((p) =>
    template.highlightProjects.includes(p.slug)
  );

  return (
    <div className="flow-doc">
      {/* ═══ TOP BAR ═══ */}
      <div
        className="mb-12 h-1.5 w-full rounded-full"
        style={{ background: "var(--accent)" }}
      />

      {/* ═══ LETTER HEADER ═══ */}
      <div className="flex items-start justify-between mb-12">
        <div>
          <h1 className="text-[1.6rem] font-bold tracking-tight leading-none">
            {profile.name}
          </h1>
          <div className="mt-3 space-y-0.5 text-sm text-[var(--muted)]">
            <p>{profile.email} · {profile.phone}</p>
            <p>{profile.links.linkedin}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-base font-semibold">
            {config.companyName}
          </p>
          {config.contactEmail && (
            <p className="mt-1 text-sm text-[var(--muted)]">{config.contactEmail}</p>
          )}
          <p className="mt-1 text-sm text-[var(--muted)]">
            {new Date(config.date).toLocaleDateString(
              config.language === "da" ? "da-DK" : "en-US",
              { year: "numeric", month: "long", day: "numeric" }
            )}
          </p>
        </div>
      </div>

      {/* ═══ SUBJECT LINE ═══ */}
      <p className="mb-8 text-base">
        <span className="text-[var(--muted)]">
          {config.language === "da" ? "Vedr.:" : "Re:"}
        </span>{" "}
        <span className="font-semibold">{config.role}</span>
      </p>

      {/* ═══ LETTER BODY ═══ */}
      <div className="space-y-5 text-[0.95rem] leading-[1.8]">
        <p>{config.coverLetter.greeting}</p>
        <p>{config.coverLetter.opening}</p>
        <div className="whitespace-pre-line">{config.coverLetter.body}</div>

        {config.coverLetter.projectProposals && (
          <div
            className="my-8 rounded-xl border-2 px-7 py-6"
            style={{
              borderColor: "var(--accent)",
              background: "var(--accent-light)",
            }}
          >
            <div className="whitespace-pre-line text-[0.92rem] leading-[1.75]">
              {config.coverLetter.projectProposals}
            </div>
          </div>
        )}

        <p>{config.coverLetter.closing}</p>
      </div>

      {/* ═══ SIGNATURE ═══ */}
      <div className="mt-12 mb-16">
        <p className="text-base font-semibold">{profile.name}</p>
        <p className="mt-0.5 text-sm text-[var(--muted)]">{profile.email}</p>
      </div>

      {/* ═══════════════════════════════════════
          CURRICULUM VITAE DIVIDER
      ═══════════════════════════════════════ */}
      <div className="flex items-center gap-6 mb-14">
        <div className="h-[2px] flex-1" style={{ background: "var(--accent)" }} />
        <span
          className="text-xs font-bold uppercase tracking-[0.25em] whitespace-nowrap"
          style={{ color: "var(--accent)" }}
        >
          Curriculum Vitae
        </span>
        <div className="h-[2px] flex-1" style={{ background: "var(--accent)" }} />
      </div>

      {/* ═══════════════════════════════════════
          CV — TWO COLUMN
      ═══════════════════════════════════════ */}
      <div className="flex gap-14">
        {/* ── SIDEBAR ── */}
        <aside className="w-[175px] shrink-0 space-y-8">
          <div
            className="h-[80px] w-[80px] rounded-full flex items-center justify-center text-white text-2xl font-bold"
            style={{ background: "var(--accent)" }}
          >
            HF
          </div>

          <Sidebar title="Personal Profile">
            <p className="text-[0.8rem] leading-[1.6] text-[var(--muted)]">
              {profile.personalProfile}
            </p>
          </Sidebar>

          <Sidebar title="Areas of Experience">
            <ul className="space-y-1.5">
              {profile.areasOfExperience.map((a) => (
                <li key={a} className="text-[0.8rem] leading-snug">
                  {a}
                </li>
              ))}
            </ul>
          </Sidebar>

          <Sidebar title="Key Skills">
            <div className="flex flex-wrap gap-1.5">
              {template.highlightSkills
                .flatMap((cat) => {
                  const items = (profile.skills as Record<string, string[]>)[cat];
                  return items ? items.slice(0, 5) : [];
                })
                .map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[var(--border)] px-2.5 py-1 text-[0.67rem]"
                  >
                    {skill}
                  </span>
                ))}
            </div>
          </Sidebar>

          <Sidebar title="Contact">
            <div className="space-y-1.5 text-[0.8rem]">
              <p>{profile.email}</p>
              <p>{profile.phone}</p>
              <p>{profile.location}</p>
            </div>
          </Sidebar>

          <Sidebar title="Languages">
            <div className="space-y-1 text-[0.8rem]">
              {profile.languages.map((l) => (
                <p key={l.language}>
                  {l.language} — {l.level}
                </p>
              ))}
            </div>
          </Sidebar>
        </aside>

        {/* ── MAIN CONTENT ── */}
        <div className="flex-1 min-w-0 space-y-10">
          <Section title="Experience" major>
            <div className="space-y-7">
              {profile.workExperience.map((job) => (
                <div key={job.company} className="avoid-break">
                  <p
                    className="text-[0.92rem] font-bold"
                    style={{ color: "var(--accent)" }}
                  >
                    {job.role}
                  </p>
                  <p className="mt-1 text-[0.84rem] font-medium">
                    {job.company} — {job.period}
                  </p>
                  <ul className="mt-2.5 space-y-1.5">
                    {job.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="text-[0.84rem] leading-[1.55] text-[var(--muted)] pl-5 relative before:content-['–'] before:absolute before:left-0 before:text-[var(--border)]"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Collaborations">
            <ul className="space-y-2">
              {profile.collaborations.map((c, i) => (
                <li
                  key={i}
                  className="text-[0.84rem] leading-[1.55] text-[var(--muted)] pl-5 relative before:content-['–'] before:absolute before:left-0 before:text-[var(--border)]"
                >
                  {c}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Selected Projects">
            <div className="space-y-6">
              {highlighted.map((p) => (
                <div key={p.slug} className="avoid-break">
                  <p className="text-[0.88rem] font-semibold">{p.title}</p>
                  <p className="mt-1.5 text-[0.82rem] leading-[1.55] text-[var(--muted)]">
                    {p.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Personal Project">
            <p className="text-[0.84rem] leading-[1.55] text-[var(--muted)]">
              {profile.personalProject}
            </p>
          </Section>

          <Section title="Education" major>
            <div className="space-y-4">
              {profile.education.degrees.map((d) => (
                <div key={d.title}>
                  <p className="text-[0.88rem] font-semibold">{d.title}</p>
                  <p className="mt-0.5 text-[0.82rem] text-[var(--muted)]">
                    {d.institution} · {d.period}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[0.76rem] text-[var(--muted)] leading-relaxed">
              Key courses:{" "}
              {profile.education.courses.slice(0, 10).join(", ")}, and more.
            </p>
          </Section>

          <Section title="Previous Jobs & Voluntary Work" major>
            <p className="text-[0.84rem] leading-[1.55] text-[var(--muted)]">
              Jobs: {profile.previousJobs}
            </p>
            <p className="mt-3 text-[0.84rem] leading-[1.55] text-[var(--muted)]">
              Voluntary: {profile.voluntaryWork}
            </p>
          </Section>

          <Section title="Recommendations (upon request)">
            <p className="text-[0.84rem] text-[var(--muted)]">
              {profile.recommendations.join(" · ")}
            </p>
          </Section>
        </div>
      </div>

      {/* ═══ BOTTOM BAR ═══ */}
      <div
        className="mt-14 h-1.5 w-full rounded-full"
        style={{ background: "var(--accent)" }}
      />
    </div>
  );
}

function Sidebar({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
        {title}
      </h3>
      {children}
    </div>
  );
}

function Section({
  title,
  major,
  children,
}: {
  title: string;
  major?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className="avoid-break">
      <h2
        className="mb-5 pb-2 text-[1.1rem] font-bold tracking-tight"
        style={{
          color: "var(--accent)",
          borderBottom: major
            ? "2.5px solid var(--accent)"
            : "1px solid var(--border)",
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
