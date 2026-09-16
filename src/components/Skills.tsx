import { skillGroups } from "@/data/resume";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-y border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-medium uppercase tracking-wide text-accent">Toolkit</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">Skills</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="text-sm font-semibold text-foreground">{group.label}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
