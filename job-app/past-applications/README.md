# Past Applications

Drop old applications here as markdown files. They serve as context when generating new applications.

## Structure

```
past-applications/
├── README.md
├── YYYY-MM-company-role.md      ← one file per old application
├── 2025-06-digi-tal-outbound.md
├── 2025-08-contoso-dotnet.md
└── ...
```

## File format

Each file follows this template:

```markdown
---
company: Company Name
role: Job Title
date: YYYY-MM-DD
template: ai-automation | dotnet-developer | fullstack | backend | m365-consultant
outcome: applied | interview | rejected | hired | withdrawn
language: da | en
---

## Job Description
(paste the original job posting here)

## My Application
(paste your motiveret ansøgning / cover letter text)

## Project Proposals
(if you proposed pilot projects, paste them here)

## Notes
(anything you learned, feedback, what worked/didn't)
```

These files are read by the prompt system in `prompts/` to find similar past applications and reuse strong arguments.
