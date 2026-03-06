import { profile } from "@/data/profile";
import { TemplateProfile } from "@/data/types";
import { Badge } from "../shared/Badge";

export function CVPage2({ template }: { template: TemplateProfile }) {
  const highlighted = profile.projects.filter((p) =>
    template.highlightProjects.includes(p.slug)
  );

  return (
    <div className="page flex">
      {/* ── SIDEBAR (Services + skills) ── */}
      <div
        className="w-[68mm] shrink-0 flex flex-col px-5 pt-10 pb-8 text-white"
        style={{ background: "var(--accent)" }}
      >
        <SidebarSection title="Services & Technologies">
          <ServiceBlock
            title="AI Engineering"
            desc="Agent workflows, context/data handling. Document extraction, unstructured→structured. Semantic search, graph DBs. MCP, LangGraph."
            tags={["RAG", "LangChain", "LlamaIndex", "Azure AI", "n8n", "MCP", "LangGraph", "Vector DBs"]}
          />
          <ServiceBlock
            title="Automation"
            desc="Business automation, workflows, cross-system integration."
            tags={["n8n", "UiPath", "Power Automate", "Python", "API integrations", "RPA"]}
          />
          <ServiceBlock
            title="Software Development"
            desc="Backend: .NET, Nest.js, Python. Frontend: Next.js, Angular, Blazor. Native: Android, WinUI3."
            tags={[".NET", "Nest.js", "Python", "Next.js", "Angular", "Blazor", "Android", "WinUI3"]}
          />
          <ServiceBlock
            title="MVPs & Go-to-Market"
            desc="Idea to market. Discovery, validation, milestones, demonstrable progress."
            tags={["Rapid Prototyping", "A/B Testing", "Analytics"]}
          />
          <ServiceBlock
            title="Hardware, IoT & Cloud"
            desc="Sensors, circuits, components. Distributed systems, Web of Things, security, Azure."
            tags={["Arduino", "Raspberry Pi", "MQTT", "Azure", "Distributed Systems"]}
          />
          <ServiceBlock
            title="IT Compliance & Security"
            desc="Cybersecurity, NIS2, D-mærket, SC-900. Emergency communication, cyber awareness. BonusCyberKnowHow (6 weeks)."
            tags={["NIS2", "D-mærket", "SC-900", "GDPR", "Risk Management"]}
          />
          <ServiceBlock
            title="Deep Learning & Computer Vision"
            desc="PyTorch, transfer learning, CNN, image analysis. Supervised & unsupervised."
            tags={["PyTorch", "CNN", "Transfer Learning", "Computer Vision"]}
          />
        </SidebarSection>
        <div className="mt-auto flex items-end justify-center pb-4">
          <div className="text-center">
            <div className="mx-auto h-[1.5px] w-10 bg-white/25 mb-3" />
            <p className="text-[0.55rem] uppercase tracking-[0.15em] text-white/35">
              {profile.name}
            </p>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="flex-1 px-7 pt-10 pb-8">
        {/* Education */}
        <h2
          className="mb-4 pb-1.5 text-[1.1rem] font-bold tracking-tight border-b-[2.5px]"
          style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
        >
          Education
        </h2>
        <div className="space-y-2.5">
          {profile.education.degrees.map((d) => (
            <div key={d.title}>
              <p className="text-[0.76rem] font-semibold">{d.title}</p>
              <p className="text-[0.68rem] text-[var(--muted)]">
                {d.institution} · {d.period}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-2 text-[0.6rem] text-[var(--muted)] leading-snug">
          Subjects and formal projects on LinkedIn. Key courses:{" "}
          {profile.education.courses.slice(0, 10).join(", ")}, and more.
        </p>

        {/* Selected Projects */}
        <h2
          className="mt-7 mb-4 pb-1.5 text-[1.1rem] font-bold tracking-tight border-b-[2.5px]"
          style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
        >
          Selected Projects
        </h2>
        <div className="space-y-4">
          {highlighted.map((p) => (
            <div key={p.slug}>
              <p className="text-[0.76rem] font-semibold">{p.title}</p>
              <p className="mt-[2px] text-[0.68rem] leading-snug text-[var(--muted)]">
                {p.description}
              </p>
              <div className="mt-1.5 flex flex-wrap gap-1">
                {p.tags.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Previous Jobs & Voluntary */}
        <h2
          className="mt-7 mb-4 pb-1.5 text-[1.1rem] font-bold tracking-tight border-b-[2.5px]"
          style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
        >
          Previous Jobs & Voluntary Work
        </h2>
        <p className="text-[0.72rem] leading-snug text-[var(--muted)] mb-2">
          Jobs: {profile.previousJobs}
        </p>
        <p className="text-[0.72rem] leading-snug text-[var(--muted)]">
          Voluntary work: {profile.voluntaryWork}
        </p>
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
    <div className="mb-4">
      <h3 className="mb-2 text-[0.6rem] font-bold uppercase tracking-[0.1em] text-white/50">
        {title}
      </h3>
      {children}
    </div>
  );
}

function ServiceBlock({
  title,
  desc,
  tags,
}: {
  title: string;
  desc: string;
  tags: string[];
}) {
  return (
    <div className="mb-2">
      <span className="text-[0.56rem] font-semibold text-white/90 block">{title}</span>
      <p className="text-[0.5rem] leading-snug text-white/70 mt-0.5 mb-1">{desc}</p>
      <div className="flex flex-wrap gap-[3px]">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/30 bg-white/10 px-[5px] py-[1px] text-[0.48rem] text-white/85"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
