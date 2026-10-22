
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Industries from "../components/Industries";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import WhyChooseUs from "../components/WhyChooseUs";
import HowWeWork from "../components/HowWeWork";
import Testimonials from "../components/Testimonials";
import ServiceAreas from "../components/ServiceAreas";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <HowWeWork />

        <Industries />
        <Projects />
        <Clients />
        <Testimonials />
        <ServiceAreas />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
