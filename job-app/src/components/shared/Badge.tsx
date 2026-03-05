import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border px-2.5 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide",
        "border-[var(--border)] text-[var(--muted)]",
        className
      )}
    >
      {children}
    </span>
  );
}
