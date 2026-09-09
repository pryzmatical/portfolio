import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-6 px-6 pb-20 pt-16 sm:pt-24">
      {site.openToWork && (
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Open to new opportunities
        </span>
      )}
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{site.name}</h1>
      <p className="text-xl text-muted">{site.tagline} · {site.location}</p>
      <p className="max-w-2xl text-base leading-relaxed text-muted">{site.summary}</p>
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <a
          href="#projects"
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          View Projects
        </a>
        <a
          href="/resume"
          className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          Resume
        </a>
        <div className="ml-1 flex items-center gap-3 text-muted">
          <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-foreground">
            <GithubIcon size={20} />
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-foreground">
            <LinkedinIcon size={20} />
          </a>
          <a href={`mailto:${site.email}`} aria-label="Email" className="transition-colors hover:text-foreground">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
