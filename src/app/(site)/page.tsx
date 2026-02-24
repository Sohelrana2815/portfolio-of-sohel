import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Blog from "@/components/sections/Blog";

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="portfolio">
        <Projects />
      </section>
      <section id="blog">
        <Blog />
      </section>

      <section id="contact" >
        <Contact />
      </section>
    </>
  );
}
