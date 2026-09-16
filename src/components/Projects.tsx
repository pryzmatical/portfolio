import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
      <p className="text-sm font-medium uppercase tracking-wide text-accent">Open source</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight">Project showcase</h2>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        Six self-contained repos, each built to show a different stack or pattern rather than
        repeating the same architecture six times.
      </p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
