import { Hero } from "@/components/Hero";
import { CaseStudy } from "@/components/CaseStudy";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div id="about">
      <Hero />
      <CaseStudy />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}
