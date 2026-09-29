import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CredentialStrip from "@/components/CredentialStrip";
import About from "@/components/About";
import Services from "@/components/Services";
import Why from "@/components/Why";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <span id="top" />
        <Hero />
        <CredentialStrip />
        <About />
        <Services />
        <Why />
        <Results />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
