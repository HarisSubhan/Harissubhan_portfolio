import { Navbar } from "./components/Navbar";
import { Body } from "./components/Body";
import { Experience } from "./components/Experience";
import { Whychoose } from "./components/Whychoose";
import { AllProject } from "./components/AllProject";
import ContactSection from "./components/ContactSection";
import ProfessionalSkills from "./components/ProfessionalSkills";
import PortfolioGrid from "./components/PortfolioGrid";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="home" className="pt-20 ">
        <Body />
        <Whychoose />
      </section>

      <section id="porject" className="pt-20">
        <PortfolioGrid />
      </section>
      <section id="about" className="pt-20">
        <ProfessionalSkills />
        <Experience />
      </section>

      <section id="contact" className="pt-20">
        <ContactSection />
      </section>
    </main>
  );
}
