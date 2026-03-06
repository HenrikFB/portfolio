import { profile } from "@/data/profile";
import { TemplateProfile } from "@/data/types";
import { CompanyConfig } from "@/data/types";
import { Badge } from "../shared/Badge";

export function CVLayout({
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
    <div className="a4-page cv-page !p-0 overflow-hidden">
      {/* Two-column layout */}
      <div className="cv-inner flex min-h-[297mm]">
        {/* LEFT SIDEBAR */}
        <div
          className="w-[72mm] shrink-0 px-6 py-10 text-white"
          style={{ background: "var(--accent)" }}
        >
          {/* Photo placeholder */}
          <div className="mx-auto mb-6 h-32 w-32 rounded-full border-4 border-white/30 bg-white/10 flex items-center justify-center">
            <span className="text-4xl font-bold text-white/40">HF</span>
          </div>

          {/* Name */}
          <div className="text-center mb-8">
            <h1 className="text-xl font-bold tracking-tight leading-tight uppercase">
              {profile.name}
            </h1>
            <p className="mt-1 text-[0.7rem] uppercase tracking-[0.2em] text-white/70">
              {profile.cvTitle}
            </p>
            <div
              className="mx-auto mt-3 h-[2px] w-12"
              style={{ background: "rgba(255,255,255,0.3)" }}
            />
          </div>

          {/* Personal Profile */}
          <div className="mb-6">
            <h2 className="mb-2 text-[0.68rem] font-bold uppercase tracking-wider">
              Personal Profile
            </h2>
            <p className="text-[0.68rem] leading-relaxed text-white/80">
              {profile.personalProfile}
            </p>
          </div>

          {/* Areas of Experience */}
          <div className="mb-6">
            <h2 className="mb-2 text-[0.68rem] font-bold uppercase tracking-wider">
              Areas of Experience
            </h2>
            <ul className="space-y-1">
              {profile.areasOfExperience.map((a) => (
                <li
                  key={a}
                  className="text-[0.68rem] text-white/80"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* Key Skills for this role */}
          <div className="mb-6">
            <h2 className="mb-2 text-[0.68rem] font-bold uppercase tracking-wider">
              Key Skills
            </h2>
            <div className="flex flex-wrap gap-1">
              {template.highlightSkills.flatMap((cat) => {
                const items = (profile.skills as Record<string, string[]>)[cat];
                return items ? items.slice(0, 4) : [];
              }).map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/30 px-2 py-0.5 text-[0.58rem] text-white/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="mb-2 text-[0.68rem] font-bold uppercase tracking-wider">
              Contact Information
            </h2>
            <div className="space-y-1.5 text-[0.68rem] text-white/80">
              <p>{profile.email}</p>
              <p>{profile.phone}</p>
              <p>LinkedIn: <a href={profile.links.linkedin} className="underline">link</a></p>
              <p>GitHub: <a href={profile.links.github} className="underline">link</a></p>
            </div>
          </div>
        </div>

        {/* RIGHT MAIN CONTENT */}
        <div className="flex-1 px-8 py-10">
          {/* Experience */}
          <section className="mb-6">
            <h2
              className="mb-4 border-b-2 pb-1 text-lg font-bold tracking-tight"
              style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
            >
              Experience
            </h2>
            {profile.workExperience.map((job) => (
              <div key={job.company} className="mb-4 avoid-break">
                <h3
                  className="text-[0.78rem] font-bold uppercase tracking-wide"
                  style={{ color: "var(--accent)" }}
                >
                  {job.role}
                </h3>
                <p className="text-[0.72rem] font-semibold">
                  {job.company} - {job.period}
                </p>
                <ul className="mt-1 space-y-0.5">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="text-[0.72rem] text-[var(--muted)]">
                      -{b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Collaborations */}
          <section className="mb-6">
            <h3
              className="mb-2 text-[0.78rem] font-bold uppercase tracking-wide"
              style={{ color: "var(--accent)" }}
            >
              Collaborations
            </h3>
            <ul className="space-y-0.5">
              {profile.collaborations.map((c, i) => (
                <li key={i} className="text-[0.72rem] text-[var(--muted)]">
                  -{c}
                </li>
              ))}
            </ul>
          </section>

          {/* Selected Projects from portfolio */}
          <section className="mb-6">
            <h3
              className="mb-2 text-[0.78rem] font-bold uppercase tracking-wide"
              style={{ color: "var(--accent)" }}
            >
              Selected Projects
            </h3>
            {highlighted.map((p) => (
              <div key={p.slug} className="mb-3 avoid-break">
                <p className="text-[0.74rem] font-semibold">{p.title}</p>
                <p className="text-[0.68rem] text-[var(--muted)]">
                  {p.description}
                </p>
                <div className="mt-1 flex flex-wrap gap-1">
                  {p.tags.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Personal Project */}
          <section className="mb-6">
            <h3
              className="mb-2 text-[0.78rem] font-bold uppercase tracking-wide"
              style={{ color: "var(--accent)" }}
            >
              Personal Project
            </h3>
            <p className="text-[0.72rem] text-[var(--muted)]">
              {profile.personalProject}
            </p>
          </section>

          {/* Education */}
          <section className="mb-6">
            <h2
              className="mb-3 border-b-2 pb-1 text-lg font-bold tracking-tight"
              style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
            >
              Education
            </h2>
            {profile.education.degrees.map((d) => (
              <div key={d.title} className="mb-2 avoid-break">
                <p className="text-[0.74rem] font-semibold">
                  {d.title}
                </p>
                <p className="text-[0.68rem] text-[var(--muted)]">
                  {d.institution} · {d.period}
                </p>
              </div>
            ))}
            <p className="mt-1 text-[0.62rem] text-[var(--muted)]">
              Subjects and formal projects on LinkedIn. Key courses: {profile.education.courses.slice(0, 10).join(", ")}, and more.
            </p>
          </section>

          {/* Previous Jobs & Voluntary */}
          <section className="mb-6">
            <h2
              className="mb-3 border-b-2 pb-1 text-lg font-bold tracking-tight"
              style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
            >
              Previous Jobs & Voluntary Work
            </h2>
            <p className="text-[0.72rem] text-[var(--muted)] mb-2">
              Jobs: {profile.previousJobs}
            </p>
            <p className="text-[0.72rem] text-[var(--muted)]">
              Voluntary work: {profile.voluntaryWork}
            </p>
          </section>

          {/* Recommendations */}
          <section>
            <h2
              className="mb-3 border-b-2 pb-1 text-lg font-bold tracking-tight"
              style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
            >
              Recommendations (available upon request)
            </h2>
            <ul className="list-disc list-inside text-[0.72rem] text-[var(--muted)]">
              {profile.recommendations.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
