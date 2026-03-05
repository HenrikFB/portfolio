import { readFileSync } from "fs";
import { join } from "path";

export async function loadIllustrationSvg(
  illustrationPath: string | undefined
): Promise<string | null> {
  if (!illustrationPath || !illustrationPath.startsWith("/")) return null;
  try {
    const filePath = join(process.cwd(), "public", illustrationPath.slice(1));
    return readFileSync(filePath, "utf-8");
  } catch {
    return null;
  }
}
