import Header from "@/components/Header";
import { clinic } from "@/lib/clinic";
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: clinic.nameFull,
  url: clinic.siteUrl,
  image: `${clinic.siteUrl}/dr-shahnoor.png`,
  telephone: clinic.phone,
  medicalSpecialty: ["Dermatology", "Dermatosurgery", "Cosmetology"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "16-4-766/2, Near Bank of Baroda, Subedar Ameer Ali Khan Road, New Malakpet",
    addressLocality: "Malakpet, Hyderabad",
    postalCode: "500036",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "17:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "11:00",
      closes: "13:00",
    },
  ],
  founder: {
    "@type": "Physician",
    name: clinic.doctor,
    honorificSuffix: clinic.degrees,
    jobTitle: clinic.doctorTitles,
    medicalSpecialty: "Dermatology",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
