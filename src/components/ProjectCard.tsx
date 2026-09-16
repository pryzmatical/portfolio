import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
        <ArrowUpRight
          size={18}
          className="mt-1 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
        />
      </div>
      <p className="mt-1 text-sm font-medium text-muted">{project.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
      <ul className="mt-4 flex flex-col gap-1.5">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2 text-xs leading-relaxed text-muted">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {h}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
