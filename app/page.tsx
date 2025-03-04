import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/floating-navbar";

export default function Home()
{
  return (
    <div className="space-y-12">
      <FloatingNav

      />
      <Hero />
      <Skills />
      <Projects />
      <Testimonials />
      <Footer />
    </div>
  );
}
