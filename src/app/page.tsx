import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import TarifsPreview from "@/components/TarifsPreview";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark text-white font-sans selection:bg-gold/30 selection:text-navy overflow-x-clip">
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <TarifsPreview />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
