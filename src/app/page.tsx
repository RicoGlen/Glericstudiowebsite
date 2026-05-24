import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Trust } from "@/components/site/Trust";
import { Services } from "@/components/site/Services";
import { Industries } from "@/components/site/Industries";
import { Process } from "@/components/site/Process";
import { CarePlus } from "@/components/site/CarePlus";
import { Showcase } from "@/components/site/Showcase";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";
import { MobileMenu } from "@/components/site/MobileMenu";

export default function Home() {
  return (
    <>
      <Navbar />
      <MobileMenu />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Industries />
        <Process />
        <CarePlus />
        <Showcase />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
