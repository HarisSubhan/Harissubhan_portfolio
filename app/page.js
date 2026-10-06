import Hero3D from "./components/Hero3D";
import { Nav, Marquee, About, Projects, Services, Contact, Footer } from "./components/Site";

export default function Home() {
  return (
    <main className="grain">
      <Nav />
      <Hero3D />
      <Marquee />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
