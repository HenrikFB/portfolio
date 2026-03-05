import { profile } from "@/data/profile";

export function EducationBlock() {
  return (
    <div className="space-y-3">
      {profile.education.degrees.map((d) => (
        <div key={d.title} className="avoid-break">
          <h4 className="text-[0.88rem] font-semibold">{d.title}</h4>
          <p className="text-[0.78rem] text-[var(--muted)]">
            {d.institution} · {d.period}
          </p>
        </div>
      ))}
      <div className="avoid-break">
        <h4 className="mb-1 text-[0.72rem] font-semibold uppercase tracking-wide text-[var(--muted)]">
          Key courses
        </h4>
        <p className="text-[0.72rem] leading-relaxed text-[var(--muted)]">
          {profile.education.courses.join(" · ")}
        </p>
      </div>
      <div className="avoid-break">
        <h4 className="mb-1 text-[0.72rem] font-semibold uppercase tracking-wide text-[var(--muted)]">
          Languages
        </h4>
        <p className="text-[0.72rem] text-[var(--muted)]">
          {profile.languages.map((l) => `${l.language} (${l.level})`).join(" · ")}
        </p>
      </div>
    </div>
  );
}
