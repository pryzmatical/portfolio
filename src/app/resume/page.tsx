import type { Metadata } from "next";
import { site } from "@/data/site";
import { skillGroups, experience, education, certifications } from "@/data/resume";
import { PrintButton } from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Resume — Shawn McGarvie",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="no-print mb-10 flex items-center justify-between">
        <p className="text-sm text-muted">A web version of my resume. References available on request.</p>
        <PrintButton />
      </div>

      <header className="border-b border-border pb-6">
        <h1 className="text-3xl font-bold tracking-tight">{site.name}</h1>
        <p className="mt-1 text-muted">{site.location} · {site.email}</p>
        <p className="text-muted">{site.linkedin.replace("https://", "")}</p>
      </header>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
          Professional Summary
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">{site.summary}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">Skills</h2>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="text-sm font-semibold">{group.label}</p>
              <p className="mt-1 text-sm text-muted">{group.items.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
          Professional Experience
        </h2>
        <div className="mt-3 flex flex-col gap-6">
          {experience.map((entry) => (
            <div key={entry.org}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <p className="font-semibold">
                  {entry.title} — {entry.org}
                </p>
                <p className="text-sm text-muted">{entry.dates}</p>
              </div>
              <p className="text-sm text-muted">{entry.location}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {entry.bullets.map((bullet) => (
                  <li key={bullet} className="text-sm leading-relaxed text-muted">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
          Education & Certifications
        </h2>
        <ul className="mt-3 space-y-1">
          {education.map((e) => (
            <li key={e.name} className="text-sm text-muted">
              {e.name} — {e.org} ({e.year})
            </li>
          ))}
          {certifications.map((c) => (
            <li key={c} className="text-sm text-muted">
              {c}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
