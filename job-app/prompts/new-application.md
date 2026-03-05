# Prompt: Ny Ansøgning

Brug dette prompt når du starter en ny ansøgning. Kopier det hele ind i en ny chat med Claude/AI.

---

## Kontekst om mig

Jeg er Henrik Fog Bunzel, software developer med kandidat + bachelor i IT-Produktudvikling fra Aarhus Universitet. Jeg er tværfaglig — fra brugerundersøgelser til deployment. Min niche er at foreslå konkrete pilotprojekter og gratis praktik for at vise værdi.

Min profil, skills, projekter, og erfaring ligger i: `job-app/src/data/profile.ts`
Mine template profiler (fokusområder): `job-app/src/data/templates/`
Mine gamle ansøgninger med tone, argumenter, og noter: `job-app/past-applications/`

## Instruktion

Jeg har en ny jobansøgning. Hjælp mig med at:

1. **Analysér jobopslaget** — hvad leder de efter? Hvad er nøgleord, krav, og tone?
2. **Find lignende gamle ansøgninger** — søg i `past-applications/` efter firmaer med lignende domæne, rolle, eller tech stack. Genbrug stærke argumenter og tilpas dem.
3. **Vælg template** — hvilken af mine templates passer bedst? (ai-automation, dotnet-developer, fullstack, backend, m365-consultant)
4. **Skriv motiveret ansøgning** (dansk eller engelsk afhængigt af opslaget):
   - Direkte, uformel tone — "jeg kommer og fikser det"
   - Foreslå 2-4 konkrete pilotprojekter målrettet deres domæne
   - Vis domænekendskab ved at referere til deres hjemmeside/produkter
   - Nævn relevant erfaring fra mine projekter
   - 1-2 sider max
5. **Generer config.ts** — klar til at putte i `applications/[slug]/config.ts`

## Input

### Jobbeskrivelse
(INDSÆT JOBOPSLAG HER)

### Virksomhedens hjemmeside
(INDSÆT URL HER)

### Ekstra noter
(evt. hvad du ved om firmaet, kontaktperson, eller specifik vinkel)

---

## Output format

Giv mig:
1. **Analyse** — kort opsummering af hvad de søger og min vinkel
2. **Motiveret ansøgning** — teksten som den skal stå
3. **config.ts** — komplet fil jeg kan kopiere ind
4. **past-application markdown** — fil til `past-applications/` så jeg har den næste gang
