import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Blog from "@/components/sections/Blogs";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="blog">
        <Blog />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
