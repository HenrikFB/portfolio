import Link from "next/link";
import { getAllApplications } from "@/data/applications";
import { FileText, Mail, Layers, ArrowRight, Archive } from "lucide-react";
import { promises as fs } from "fs";
import path from "path";

async function getPastApplications() {
  const dir = path.join(process.cwd(), "past-applications");
  try {
    const files = await fs.readdir(dir);
    const mdFiles = files.filter((f) => f.endsWith(".md") && f !== "README.md");

    const results = await Promise.all(
      mdFiles.map(async (file) => {
        const content = await fs.readFile(path.join(dir, file), "utf-8");
        const frontmatter = content.match(/^---\n([\s\S]*?)\n---/);
        if (!frontmatter) return null;

        const meta: Record<string, string> = {};
        frontmatter[1].split("\n").forEach((line) => {
          const [key, ...val] = line.split(": ");
          if (key && val.length) meta[key.trim()] = val.join(": ").trim();
        });

        return {
          file,
          company: meta.company || file,
          role: meta.role || "",
          date: meta.date || "",
          template: meta.template || "",
          outcome: meta.outcome || "",
          language: meta.language || "",
        };
      })
    );

    return results
      .filter(Boolean)
      .sort((a, b) => (b!.date || "").localeCompare(a!.date || ""));
  } catch {
    return [];
  }
}

export default async function Dashboard() {
  const apps = await getAllApplications();
  const pastApps = await getPastApplications();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      {/* Active applications */}
      <div className="mb-16">
        <h1 className="text-3xl font-bold tracking-tight">Ansøgninger</h1>
        <p className="mt-2 text-[var(--muted)]">
          Aktive ansøgninger — klik &quot;Samlet PDF&quot; for at printe begge
          dele.
        </p>

        <div className="mt-8 space-y-4">
          {apps.map((app) => (
            <div
              key={app.slug}
              className="group rounded-xl border border-[var(--border)] p-5 transition-all hover:border-[var(--accent)] hover:shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold">{app.companyName}</h2>
                  <p className="text-sm text-[var(--muted)]">{app.role}</p>
                  <p className="mt-1 text-xs text-[var(--muted)]">
                    {new Date(app.date).toLocaleDateString("da-DK", {
                      year: "numeric",
                      month: "long",
                    })}{" "}
                    · {app.template}
                  </p>
                </div>
                <ArrowRight
                  size={18}
                  className="mt-1 text-[var(--muted)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--accent)]"
                />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  href={`/combined/${app.slug}`}
                  className="flex items-center gap-1.5 rounded-lg bg-[var(--foreground)] px-3 py-1.5 text-xs font-medium text-white transition-opacity hover:opacity-80"
                >
                  <Layers size={13} /> Samlet PDF
                </Link>
                <Link
                  href={`/letter/${app.slug}`}
                  className="flex items-center gap-1.5 rounded-lg border border-[var(--border)] px-3 py-1.5 text-xs font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <Mail size={13} /> Ansøgning
                </Link>
                <Link
                  href={`/cv/${app.slug}`}
                  className="flex items-center gap-1.5 rounded-lg border border-[var(--border)] px-3 py-1.5 text-xs font-medium transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <FileText size={13} /> CV
                </Link>
              </div>
            </div>
          ))}

          {apps.length === 0 && (
            <p className="text-sm text-[var(--muted)]">
              Ingen aktive ansøgninger. Opret en i applications/ mappen.
            </p>
          )}
        </div>
      </div>

      {/* Past applications */}
      {pastApps.length > 0 && (
        <div>
          <div className="mb-6 flex items-center gap-2">
            <Archive size={18} className="text-[var(--muted)]" />
            <h2 className="text-xl font-bold tracking-tight">
              Gamle ansøgninger
            </h2>
          </div>
          <p className="mb-4 text-sm text-[var(--muted)]">
            Bruges som kontekst når du laver nye ansøgninger. Drop gamle PDF-tekster
            som .md filer i past-applications/.
          </p>

          <div className="space-y-2">
            {pastApps.map(
              (app) =>
                app && (
                  <div
                    key={app.file}
                    className="flex items-center justify-between rounded-lg border border-[var(--border)] px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-medium">{app.company}</p>
                      <p className="text-xs text-[var(--muted)]">
                        {app.role}
                        {app.date && ` · ${app.date}`}
                        {app.template && ` · ${app.template}`}
                      </p>
                    </div>
                    <span className="rounded-full border border-[var(--border)] px-2 py-0.5 text-[0.65rem] text-[var(--muted)]">
                      {app.outcome || "—"}
                    </span>
                  </div>
                )
            )}
          </div>
        </div>
      )}

      {/* Prompt hint */}
      <div className="mt-12 rounded-lg border border-dashed border-[var(--border)] p-4 text-center">
        <p className="text-sm text-[var(--muted)]">
          Ny ansøgning? Brug promptet i{" "}
          <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">
            prompts/new-application.md
          </code>
        </p>
      </div>
    </div>
  );
}
