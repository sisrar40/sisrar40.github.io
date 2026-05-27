import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import SectionReveal from '../components/SectionReveal';
import { CONTAINER_X, SECTION_X } from '../constants/layout';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={`text-white ${SECTION_X}`}>
        <div className={CONTAINER_X}>
          <Hero />
          <SectionReveal>
            <About />
          </SectionReveal>
          <Experience />
          <SectionReveal>
            <Skills />
          </SectionReveal>
          <SectionReveal>
            <Projects />
          </SectionReveal>
          <SectionReveal>
            <Education />
          </SectionReveal>
          <SectionReveal>
            <Contact />
          </SectionReveal>
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </>
  );
}
