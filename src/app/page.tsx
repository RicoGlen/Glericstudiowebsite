import { Hero }           from "@/components/site/Hero";
import { Trust }          from "@/components/site/Trust";
import { Services }       from "@/components/site/Services";
import { Industries }     from "@/components/site/Industries";
import { Process }        from "@/components/site/Process";
import { CarePlus }       from "@/components/site/CarePlus";
import { Showcase }       from "@/components/site/Showcase";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer }         from "@/components/site/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Trust />
      <Services />
      <Industries />
      <Process />
      <CarePlus />
      <Showcase />
      <ContactSection />
      <Footer />
    </main>
  );
}
