import { profile } from "@/data/profile";
import { Mail, MapPin, Globe, Github, Linkedin } from "lucide-react";

export function CVHeader({ profileTitle }: { profileTitle: string }) {
  return (
    <header className="mb-8">
      <div
        className="mb-6 h-[3px] w-16 rounded-full"
        style={{ background: "var(--accent)" }}
      />
      <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
      <p
        className="mt-1 text-base font-medium"
        style={{ color: "var(--accent)" }}
      >
        {profileTitle}
      </p>
      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-[0.78rem] text-[var(--muted)]">
        <span className="flex items-center gap-1.5">
          <Mail size={13} />
          {profile.email}
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin size={13} />
          {profile.location}
        </span>
        <a
          href={profile.links.github}
          className="flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors"
        >
          <Github size={13} />
          GitHub
        </a>
        <a
          href={profile.links.linkedin}
          className="flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors"
        >
          <Linkedin size={13} />
          LinkedIn
        </a>
        <a
          href={profile.links.portfolio}
          className="flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors"
        >
          <Globe size={13} />
          Portfolio
        </a>
      </div>
    </header>
  );
}
