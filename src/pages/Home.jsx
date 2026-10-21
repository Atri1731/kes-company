
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Industries from "../components/Industries";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <Projects />
        <Clients />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
