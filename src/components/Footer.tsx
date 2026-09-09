import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mx-auto max-w-5xl px-6 py-8 text-center text-xs text-muted">
      © {new Date().getFullYear()} {site.name}. Built with Next.js and Tailwind CSS.
    </footer>
  );
}
