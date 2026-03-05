# Prompt: Ny Ansøgning

Brug dette prompt når du starter en ny ansøgning. Kopier det hele ind i en ny chat med Claude/AI.

---

## Kontekst om mig

Jeg er Henrik Fog Bunzel, software developer med kandidat + bachelor i IT-Produktudvikling fra Aarhus Universitet. Jeg er tværfaglig — fra brugerundersøgelser til deployment. Min niche er at foreslå konkrete pilotprojekter og gratis praktik for at vise værdi.

Min profil, skills, projekter, og erfaring ligger i: `job-app/src/data/profile.ts`
Mine template profiler (fokusområder): `job-app/src/data/templates/` — ai-automation, dotnet-developer, fullstack, backend, m365-consultant
Mine gamle ansøgninger med tone, argumenter, og noter: `job-app/past-applications/`
Eksempel på fuld struktur: `job-app/applications/auxo-ai-automation/`

## Ansøgningsformat (altid samme struktur)

Brevet er kort og sektions-baseret: greeting + opening + badges (quoteSnippets) + 3 sektioner med bullet-lister + evt. closing + evt. illustration.
Ingen header/footer med kontaktinfo — det står i CV'et.

## Instruktion

Jeg har en ny jobansøgning. Hjælp mig med at:

1. **Analysér jobopslaget** — hvad leder de efter? Nøgleord, krav, tone, tech stack.
2. **Find lignende gamle ansøgninger** — søg i `past-applications/` efter lignende rolle, domæne eller tech. Genbrug stærke argumenter.
3. **Vælg template** — passer til rollen (.NET, Full stack, AI/automation, Backend, M365, IT-konsulent osv.).
4. **Skriv motiveret ansøgning** i det nye format (dansk eller engelsk):
   - **greeting:** "Hej [Firma]," / "Dear [Company],"
   - **opening:** 1–2 sætninger — rolle + forslog pilotprojekt/praktik
   - **quoteSnippets:** 5–8 korte nøgleord fra jobbeskrivelsen (badges)
   - **sections:** 3 lister:
     - "Fra jobbeskrivelsen + tech stack" — konkrete punkter direkte fra opslaget
     - "[Rolle/domæne] på [Firmas] domæne/ydelser" — pilotprojekt-ideer målrettet deres virksomhed
     - "Ideer til andre stillinger/karriere" — hvis de har andre åbne stillinger, ellers bredere værdi
   - **closing:** evt. kort afslutning — eller tom string
   - **illustration:** evt. `/illustrations/[slug].svg` hvis der er custom, ellers udelad
5. **Generer config.ts** med coverLetter: greeting, opening, quoteSnippets, sections, closing, illustration?
6. **Foreslå noter-struktur** — `applications/[slug]/noter/creation of [firma] notes.md` + evt. `hjemmeside/sider.md`, `Design/` til illustration

## Input

### Jobbeskrivelse
(INDSÆT JOBOPSLAG HER)

### Virksomhedens hjemmeside
(INDSÆT URL HER)

### Rolletype (evt.)
(.NET udvikler / Full stack / AI Engineering / Backend / IT-konsulent / M365 / osv.)

### Ekstra noter
(evt. hvad du ved om firmaet, kontaktperson, eller specifik vinkel)

---

## Output format

Giv mig:
1. **Analyse** — kort opsummering af hvad de søger og min vinkel
2. **config.ts** — komplet fil til `applications/[slug]/config.ts` med quoteSnippets, sections, osv.
3. **creation notes** — udkast til `noter/creation of [firma] notes.md` (research, gamle ansøgninger, domæne)
4. **past-application markdown** — fil til `past-applications/` til næste gang
