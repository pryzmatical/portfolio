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
      <div className="reveal">
        <CaseStudy />
      </div>
      <div className="reveal">
        <Projects />
      </div>
      <div className="reveal">
        <Skills />
      </div>
      <div className="reveal">
        <Experience />
      </div>
      <div className="reveal">
        <Contact />
      </div>
    </div>
  );
}
