import { CompanyConfig } from "@/data/types";

export const config: CompanyConfig = {
  slug: "auxo-ai-automation",
  companyName: "Auxo",
  role: "AI & Automations Specialist",
  accentColor: "#059669",
  accentLight: "#d1fae5",
  template: "ai-automation",
  date: "2026-03-05",
  language: "da",
  contactEmail: "job@auxo.dk",
  coverLetter: {
    greeting: "Hej Auxo,",
    opening:
      "Jeg skriver angående stillingen som AI & Automations Specialist. Jeg har praktisk erfaring med præcis de værktøjer og systemer I efterspørger — n8n, OpenAI API, workflow-automatisering og skalerbar systemarkitektur — og jeg finder jeres domæne oplagt til AI-drevet optimering.",
    body: `Som uddannet i IT-Produktudvikling (kandidat + bachelor, Aarhus Universitet) arbejder jeg helhedsorienteret: jeg forstår ikke bare teknologien, men også de forretningsprocesser den skal effektivisere. Det er præcis den tankegang I beskriver — sammenhængende systemer, ikke enkeltstående opgaver.

Min relevante erfaring:

— Bygget RAG-baseret chatbot med semantisk og hybrid søgning, OpenAI API, Supabase, og streaming UX. Inkl. voice capabilities med ElevenLabs og Twilio.
— Data pipeline der udtrækker struktureret JSON fra ustrukturerede dokumenter (PDF/billeder) via LLama Parse og GPT — relevant for automatisering af dokumenthåndtering.
— Automatiseret hentning af skattedata fra offentlige systemer — erstattet en hel manuel compliance-proces med en pålidelig pipeline.
— Enterprise compliance chatbot på Azure OpenAI med governance-krav.
— Regnskabsplatform med automatiseret kvitteringshentning fra email og AI-assisteret bogføring.

Jeg arbejder struktureret, selvstændigt og analytisk. Jeg holder mig proaktivt opdateret — jeg eksperimenterer løbende med nye AI-modeller, agent-frameworks, og automation patterns (MCP, Agent2Agent, LangGraph).

Jeg taler og skriver flydende dansk og engelsk.`,
    projectProposals: `Hvad jeg konkret kan bidrage med hos Auxo — forslag til pilotprojekter:

1. n8n workflows til automatisering af kundeopsætning og onboarding — med 8.000+ kunder er der et stort potentiale i at standardisere og automatisere de gentagne processer.

2. AI-assisteret SEO og content — automatisere dele af den analyse og rapportering I laver for kunder indenfor digital markedsføring.

3. Automatiseret kundekommunikation — intelligente email-flows og chatbot-support der aflaster jeres team.

4. Dashboards og monitoring — n8n dashboards der giver overblik over automatiserede workflows på tværs af organisationen.

Jeg foreslår gerne et selvstændigt pilotprojekt for at demonstrere værdien inden for de første uger.`,
    closing:
      "Jeg ser frem til at høre fra jer. Jeg er klar til at starte hurtigt og er fleksibel ift. on-site i Esbjerg.",
  },
};
