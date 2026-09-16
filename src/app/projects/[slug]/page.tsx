import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — Shawn McGarvie`,
      description: project.tagline,
    },
    twitter: {
      title: `${project.title} — Shawn McGarvie`,
      description: project.tagline,
    },
  };
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft size={16} />
        Back to projects
      </Link>

      <header className="mt-6">
        <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
        <p className="mt-2 text-lg text-muted">{project.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
        >
          View on GitHub
          <ArrowUpRight size={16} />
        </a>
      </header>

      <section className="mt-10">
        <p className="text-base leading-relaxed text-muted">{project.description}</p>
      </section>

      <section className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
          Why this exists
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.problem}</p>
      </section>

      <section className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
          Architecture
        </h2>
        <ul className="mt-3 flex flex-col gap-3">
          {project.architecture.map((point) => (
            <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {point}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
          Highlights
        </h2>
        <ul className="mt-3 flex flex-col gap-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-sm leading-relaxed text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {h}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 rounded-2xl border border-border bg-surface p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
          Known limitations
        </h2>
        <p className="mt-2 text-xs text-muted">
          Documented rather than hidden — the same standard I hold production work to.
        </p>
        <ul className="mt-3 flex flex-col gap-2">
          {project.limitations.map((l) => (
            <li key={l} className="flex gap-2 text-sm leading-relaxed text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
              {l}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
