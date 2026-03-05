import { profile } from "@/data/profile";
import { TemplateProfile } from "@/data/types";

export function CVPage1({ template }: { template: TemplateProfile }) {
  return (
    <div className="page flex">
      {/* ── SIDEBAR ── */}
      <div
        className="w-[68mm] shrink-0 flex flex-col px-5 pt-10 pb-8 text-white"
        style={{ background: "var(--accent)" }}
      >
        {/* Photo */}
        <div className="mx-auto mb-5 h-28 w-28 rounded-full border-[3px] border-white/25 bg-white/10 flex items-center justify-center">
          <span className="text-3xl font-bold text-white/40">HF</span>
        </div>

        {/* Name + Links */}
        <div className="text-center mb-7">
          <h1 className="text-[1.15rem] font-bold tracking-tight leading-tight uppercase">
            {profile.name}
          </h1>
          <p className="mt-1 text-[0.62rem] uppercase tracking-[0.18em] text-white/60">
            {template.profileTitle}
          </p>
          <p className="mt-2 text-[0.64rem] text-white/90">
            <a href={profile.links.portfolio} target="_blank" rel="noopener" className="underline font-medium hover:text-white transition-colors">
              Portfolio
            </a>
            {" · "}
            <a href={profile.links.linkedin} target="_blank" rel="noopener" className="underline hover:text-white transition-colors">LinkedIn</a>
            {" · "}
            <a href={profile.links.github} target="_blank" rel="noopener" className="underline hover:text-white transition-colors">GitHub</a>
          </p>
          <div className="mx-auto mt-3 h-[1.5px] w-10 bg-white/25" />
        </div>

        {/* Personal Profile */}
        <SidebarSection title="Personal Profile">
          <p className="text-[0.66rem] leading-[1.55] text-white/75">
            {profile.personalProfile}
          </p>
        </SidebarSection>

        {/* Areas of Experience */}
        <SidebarSection title="Areas of Experience">
          <ul className="space-y-[3px]">
            {profile.areasOfExperience.map((a) => (
              <li key={a} className="text-[0.66rem] leading-snug text-white/75">
                {a}
              </li>
            ))}
          </ul>
        </SidebarSection>

        {/* Contact — pushed to bottom */}
        <div className="mt-auto">
          <SidebarSection title="Contact Information">
            <div className="space-y-[3px] text-[0.66rem] text-white/75">
              <p>{profile.email}</p>
              <p>{profile.phone}</p>
              <p>
                <a href={profile.links.linkedin} target="_blank" rel="noopener" className="underline hover:text-white transition-colors">LinkedIn</a>
                {" · "}
                <a href={profile.links.github} target="_blank" rel="noopener" className="underline hover:text-white transition-colors">GitHub</a>
              </p>
            </div>
          </SidebarSection>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="flex-1 px-7 pt-10 pb-8">
        {/* Experience heading + Portfolio */}
        <div className="mb-5">
          <h2
            className="pb-1.5 text-[1.1rem] font-bold tracking-tight border-b-[2.5px]"
            style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
          >
            Experience
          </h2>
          <p className="mt-1.5 text-[0.68rem] text-[var(--muted)]">
            <a href={profile.links.portfolio} target="_blank" rel="noopener" className="underline font-medium" style={{ color: "var(--accent)" }}>
              henrikfb.github.io/portfolio
            </a>
            {" · "}
            Recommendations available upon request
          </p>
        </div>

        <div className="space-y-5">
          {profile.workExperience.map((job) => (
            <div key={job.company}>
              <h3
                className="text-[0.78rem] font-bold uppercase tracking-wide"
                style={{ color: "var(--accent)" }}
              >
                {job.role}
              </h3>
              <p className="mt-[2px] text-[0.72rem] font-semibold">
                {job.company} — {job.period}
              </p>
              <ul className="mt-1.5 space-y-[3px]">
                {job.bullets.map((b, i) => (
                  <li key={i} className="text-[0.72rem] leading-snug text-[var(--muted)] pl-3.5 relative before:content-['–'] before:absolute before:left-0 before:text-[var(--border)]">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Acquisition of Professional Competences */}
        <h3
          className="mt-6 mb-3 text-[0.78rem] font-bold uppercase tracking-wide"
          style={{ color: "var(--accent)" }}
        >
          Acquisition of Professional Competences
        </h3>
        <ul className="space-y-[3px] text-[0.72rem] text-[var(--muted)]">
          <li className="font-medium">ML Course with CoCoders on Coursera</li>
          <li>
            <span className="font-medium">Itucation.dk ASP.NET MVC 5 (6 weeks)</span>
            <br />
            <span className="text-[0.66rem]">C# | SQL | Javascript | .Net Core | Fullstack .net</span>
          </li>
          <li>
            <a href="https://bonuscyberknowhow.dk/" target="_blank" rel="noopener" className="font-medium underline" style={{ color: "var(--accent)" }}>
              BonusCyberKnowHow (6 weeks)
            </a>
            <br />
            <span className="text-[0.66rem]">Cybersecurity, risk management, NIS2, D-mærket, Dansk Standard, beredskabskommunikation, Microsoft SC-900, cyber awareness, technical hands-on training</span>
          </li>
        </ul>

        {/* Personal Project */}
        <h3
          className="mt-6 mb-2 text-[0.78rem] font-bold uppercase tracking-wide"
          style={{ color: "var(--accent)" }}
        >
          Personal Project
        </h3>
        <p className="text-[0.72rem] leading-snug text-[var(--muted)]">
          {profile.personalProject}
        </p>

        {/* Collaborations */}
        <h3
          className="mt-6 mb-2 text-[0.78rem] font-bold uppercase tracking-wide"
          style={{ color: "var(--accent)" }}
        >
          Collaborations
        </h3>
        <ul className="space-y-[3px]">
          {profile.collaborations.map((c, i) => (
            <li key={i} className="text-[0.72rem] leading-snug text-[var(--muted)] pl-3.5 relative before:content-['–'] before:absolute before:left-0 before:text-[var(--border)]">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SidebarSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5">
      <h3 className="mb-1.5 text-[0.6rem] font-bold uppercase tracking-[0.1em] text-white/50">
        {title}
      </h3>
      {children}
    </div>
  );
}
