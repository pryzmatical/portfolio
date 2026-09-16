import { experience } from "@/data/resume";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
      <p className="text-sm font-medium uppercase tracking-wide text-accent">Background</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight">Experience</h2>
      <div className="mt-8 flex flex-col gap-10">
        {experience.map((entry) => (
          <div key={entry.org} className="grid gap-2 sm:grid-cols-[220px_1fr]">
            <div>
              <p className="font-semibold">{entry.org}</p>
              <p className="text-sm text-muted">{entry.dates}</p>
              <p className="text-sm text-muted">{entry.location}</p>
            </div>
            <div>
              <p className="font-medium text-foreground">{entry.title}</p>
              <ul className="mt-2 flex flex-col gap-2">
                {entry.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
