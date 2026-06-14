import { Navbar } from "./Navbar";

import { CampusSection } from "./sections/CampusSection";
import { PartnersSection } from "./sections/PartnersSection";
import { ProgramsSection } from "./sections/ProgramsSection";
import { EventsSection } from "./sections/EventsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { AdmissionsSteps } from "./sections/AdmissionsSteps";
import { MarqueeSection } from "./sections/MarqueeSection";
import { NewsSection } from "./sections/NewsSection";
import { ContactSection } from "./sections/ContactSection";
import { Footer } from "./sections/Footer";
import { HeroSection } from "./sections/HeroSection";

export const Home = () => {
  return (
    <div className="min-h-full flex flex-col font-sans relative bg-surface-primary">
      <div className="relative w-full flex-1 overflow-hidden flex rounded-t-[40px] flex-col p-m pb-0">
        <Navbar />
        <HeroSection />
        <CampusSection />
        <PartnersSection />
        <MarqueeSection />
        <ProgramsSection />
        <EventsSection />
        <TestimonialsSection />
        <AdmissionsSteps />
        <NewsSection />
        <ContactSection />

        <Footer />
      </div>
    </div>
  );
};
