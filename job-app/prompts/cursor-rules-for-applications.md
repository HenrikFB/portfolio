# Prompt: Cursor Context (til brug i Cursor chat)

Når du arbejder i dette projekt i Cursor, brug dette som kontekst:

---

## Projekt: Lokalt Job Application System

Next.js app til at generere og printe CV + motiveret ansøgning som PDF.

### Arkitektur

```
job-app/
├── src/data/profile.ts          ← mine faste data (erfaring, skills, projekter)
├── src/data/templates/          ← profilskabeloner (ai-automation, dotnet, fullstack, etc.)
├── src/data/types.ts            ← TypeScript interfaces
├── applications/[slug]/         ← aktive ansøgninger med config.ts + job-description.md
├── past-applications/           ← gamle ansøgninger som markdown (søgbar kontekst)
├── prompts/                     ← prompt templates til at generere nye ansøgninger
├── src/components/layouts/      ← CVLayout, CoverLetterLayout
└── src/app/                     ← routes: /, /cv/[slug], /letter/[slug], /combined/[slug]
```

### Workflow for ny ansøgning

1. Læs jobopslag + virksomhedens hjemmeside
2. Søg `past-applications/` for lignende roller/domæner
3. Vælg template fra `src/data/templates/`
4. Opret `applications/[ny-slug]/config.ts` med coverLetter inkl. projectProposals
5. Tilføj slug til `src/data/applications.ts` configs-map
6. Preview på `/combined/[slug]` → Cmd+P → Print som PDF
7. Gem en kopi i `past-applications/` til næste gang

### Regler

- Motiveret ansøgning: dansk eller engelsk, direkte tone, max 1-2 sider
- Altid foreslå konkrete pilotprojekter målrettet firmaets domæne
- CV: to-kolonner, accent color fra firma, sidebar + main content
- Print: A4, `@media print` styles, `page-break` mellem letter og CV
- Ingen public deployment — kun lokalt
