import { TemplateProfile } from "../types";
import { aiAutomation } from "./ai-automation";
import { dotnetDeveloper } from "./dotnet-developer";
import { fullstack } from "./fullstack";
import { backend } from "./backend";
import { m365Consultant } from "./m365-consultant";

export const templates: Record<string, TemplateProfile> = {
  "ai-automation": aiAutomation,
  "dotnet-developer": dotnetDeveloper,
  fullstack,
  backend,
  "m365-consultant": m365Consultant,
};
