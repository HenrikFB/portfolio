import { profile } from "@/data/profile";
import { Badge } from "../shared/Badge";

const skillLabels: Record<string, string> = {
  ai: "AI & ML",
  automation: "Automation",
  backend: "Backend",
  frontend: "Frontend",
  mobile: "Mobile",
  cloud: "Cloud & DevOps",
  hardware: "Hardware & IoT",
  compliance: "Compliance",
};

export function SkillGrid({
  highlightCategories,
}: {
  highlightCategories: string[];
}) {
  const skills = profile.skills as Record<string, string[]>;
  const ordered = [
    ...highlightCategories,
    ...Object.keys(skills).filter((k) => !highlightCategories.includes(k)),
  ];

  return (
    <div className="space-y-3">
      {ordered.map((key) => {
        const items = skills[key];
        if (!items) return null;
        const isHighlighted = highlightCategories.includes(key);
        return (
          <div key={key} className="avoid-break">
            <h4
              className={`mb-1 text-[0.72rem] font-semibold uppercase tracking-wide ${
                isHighlighted ? "text-[var(--accent)]" : "text-[var(--muted)]"
              }`}
            >
              {skillLabels[key] || key}
            </h4>
            <div className="flex flex-wrap gap-1">
              {items.map((skill) => (
                <Badge
                  key={skill}
                  className={
                    isHighlighted
                      ? "border-[var(--accent)] text-[var(--foreground)]"
                      : ""
                  }
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
