# Prompt: Cursor Context (til brug i Cursor chat)

Når du arbejder i dette projekt i Cursor, brug dette som kontekst:

---

## Projekt: Lokalt Job Application System

Next.js app til at generere og printe CV + motiveret ansøgning som PDF.

### Arkitektur

```
job-app/
├── src/data/profile.ts          ← mine faste data (erfaring, skills, projekter)
├── src/data/templates/          ← profilskabeloner (ai-automation, dotnet, fullstack, backend, m365-consultant)
├── src/data/types.ts            ← TypeScript interfaces
├── applications/[slug]/         ← alle ansøgninger i denne app (layout, struktur, referencer)
│   ├── config.ts                ← coverLetter: greeting, opening, quoteSnippets, sections, closing, illustration?
│   ├── job-beskrivelsen.md      ← jobopslag (brugerens kilde)
│   └── noter/                   ← brugerens noter, inputs, research
│       ├── Skabelsen.md, creation notes, osv.
│       ├── hjemmeside/sider.md  ← evt. kopi af virksomhedens side
│       └── Design/              ← evt. custom illustration (SVG)
├── past-applications/           ← brugeren indsætter manuelt gamle ansøgninger (før denne app) til reference
├── prompts/                     ← prompt templates
├── public/illustrations/        ← SVG-filer til ansøgninger
└── src/app/                     ← routes: /, /cv/[slug], /letter/[slug], /combined/[slug]
```

### Ansøgningsformat (coverLetter)

- **greeting** — "Hej [Firma],"
- **opening** — kort intro + rolle + forslag (pilotprojekt/praktik)
- **quoteSnippets** — badges med nøgleord fra jobbeskrivelsen
- **sections** — 3 lister: jobbeskrivelse+tech, domæne/ydelser, evt. andre stillinger
- **closing** — kort afslutning eller ""
- **illustration** — evt. `/illustrations/[slug].svg`

Ingen header/footer på brevet — kontaktinfo står i CV'et.

### Workflow for ny ansøgning

1. Læs `job-beskrivelsen.md` + brugerens noter i `noter/` (fx Skabelsen.md, creation notes)
2. Brug `applications/` til at forstå layout, struktur og få ideer fra eksisterende ansøgninger
3. Evt. søg `past-applications/` for lignende roller/domæner (brugerens manuelle referencer)
4. Vælg template fra `src/data/templates/`
5. Opret `applications/[ny-slug]/config.ts` med quoteSnippets, sections, osv.
6. Tilføj slug til `src/data/applications.ts` configs-map
7. Evt. tilføj illustration i `public/illustrations/` og reference i config
8. Preview på `/combined/[slug]` → Cmd+P → Print som PDF

**Opret ikke** filer i `past-applications/` — brugeren indsætter gamle ansøgninger manuelt. Opret ikke ekstra markdown-filer (fx job-description.md) — brug job-beskrivelsen.md og noter/ som input.

### Roller (templates)

Fungerer for alle typer: .NET udvikler, Full stack, Backend, AI/automation, IT-konsulent, M365, osv.

### Regler

- Motiveret ansøgning: dansk eller engelsk, direkte tone, kort og sektions-baseret
- Altid foreslå konkrete pilotprojekter målrettet firmaets domæne
- CV: to-kolonner, accent color fra firma
- Print: A4, `@media print`, page-break mellem letter og CV
- Ingen public deployment — kun lokalt
