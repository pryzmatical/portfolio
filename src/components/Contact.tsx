import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-16 text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-accent">Get in touch</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">Let&apos;s talk</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted">
          Open to new opportunities in AI-agent development, backend, and full-stack roles.
          Reach out any time.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            <Mail size={16} />
            {site.email}
          </a>
        </div>
        <div className="mt-6 flex justify-center gap-4 text-muted">
          <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-foreground">
            <GithubIcon size={20} />
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-foreground">
            <LinkedinIcon size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
