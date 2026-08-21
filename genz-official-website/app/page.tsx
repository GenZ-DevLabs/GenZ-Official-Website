import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TechStack } from "@/components/sections/TechStack";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <Projects />
        <WhyChooseUs />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
