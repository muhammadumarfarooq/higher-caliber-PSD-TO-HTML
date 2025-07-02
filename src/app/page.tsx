import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PlatformSection } from "@/components/PlatformSection";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";
import { ClientLogos } from "@/components/ClientLogos";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PlatformSection />
      <Portfolio />
      <Services />
      <ContactForm />
      <ClientLogos />
      <Footer />
    </>
  );
}
