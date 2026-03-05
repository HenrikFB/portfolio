import { Badge } from "../shared/Badge";

interface ExperienceCardProps {
  title: string;
  category: string;
  description: string;
  highlights?: string[];
  tags: string[];
}

export function ExperienceCard({
  title,
  category,
  description,
  highlights,
  tags,
}: ExperienceCardProps) {
  return (
    <div className="avoid-break mb-5 last:mb-0">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-[0.92rem] font-semibold">{title}</h3>
        <span className="shrink-0 text-[0.65rem] uppercase tracking-wide text-[var(--muted)]">
          {category}
        </span>
      </div>
      <p className="mt-1 text-[0.8rem] leading-relaxed text-[var(--muted)]">
        {description}
      </p>
      {highlights && highlights.length > 0 && (
        <ul className="mt-1.5 space-y-0.5">
          {highlights.map((h, i) => (
            <li
              key={i}
              className="text-[0.78rem] leading-snug text-[var(--muted)] before:mr-1.5 before:text-[var(--accent)] before:content-['–']"
            >
              {h}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-2 flex flex-wrap gap-1">
        {tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </div>
  );
}
