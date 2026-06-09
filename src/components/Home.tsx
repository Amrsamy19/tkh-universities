import { Navbar } from "./Navbar";
import { Button } from "./ui/Button";

import { CampusSection } from "./sections/CampusSection";
import { AboutSection } from "./sections/AboutSection";
import { PartnersSection } from "./sections/PartnersSection";
import { LifeAtTKHSection } from "./sections/LifeAtTKHSection";
import { ProgramsSection } from "./sections/ProgramsSection";
import { EventsSection } from "./sections/EventsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { AdmissionsSteps } from "./sections/AdmissionsSteps";
import { MarqueeSection } from "./sections/MarqueeSection";
import { NewsSection } from "./sections/NewsSection";
import { ContactSection } from "./sections/ContactSection";
import { Footer } from "./sections/Footer";

// Vite handles the static asset import for the video
import videoPlayback from "../assets/media/videoplayback.mp4";

export const Home = () => {
  return (
    <div className="min-h-full flex flex-col font-sans relative bg-surface-primary p-m">
      <div className="relative w-full flex-1 overflow-hidden flex rounded-[40px] flex-col">
        <Navbar />

        {/* Hero Section */}
        <section className="relative w-full h-[calc(100vh-var(--spacing-xl))] min-h-150 flex items-end">
          {/* Video Background */}
          <div className="absolute px-2 rounded-b-[40px] inset-0 w-full h-full overflow-hidden">
            {/* Overlay to ensure text readability */}
            <div className="absolute px-2 inset-0 bg-surface-invert/40 z-10"></div>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
              <source src={videoPlayback} type="video/mp4" />
            </video>
          </div>

          {/* Hero Content */}
          <div className="relative z-20 w-full max-w-480 mx-auto p-l xl:p-20 pt-30 xl:pt-30 flex flex-col lg:flex-row lg:justify-between gap-l">
            {/* Left Side: Headline */}
            <h1 className="text-h2 lg:text-h1 dt:whitespace-pre max-w-65.75 lg:max-w-none lg:min-w-200 font-bold lg:flex-1 text-text-invert">
              Your Gateway To
              <br />
              Global Education
            </h1>

            {/* Right Side: Description and CTAs */}
            <div className="gap-l dt:whitespace-pre flex flex-col lg:min-w-125 lg:flex-1">
              <p className="text-text-invert text-body-2 lg:text-body-1">
                Earn a globally recognized degree from top-ranked partnered
                universities on our state-of-the-art campus located in Egypt.
              </p>

              <div className="flex flex-col gap-m w-full">
                <Button
                  variant="secondary"
                  size="mobile"
                  className="w-full justify-center"
                >
                  Explore Programs
                </Button>
                <Button
                  variant="outline"
                  size="mobile"
                  className="w-full justify-center"
                  icon={false}
                >
                  Start a Virtual Campus Tour
                </Button>
              </div>
            </div>
          </div>
        </section>

        <main className="flex-1 w-full relative z-10 flex flex-col gap-3xl lg:gap-4xl pb-0">
          <div className="lg:hidden">
            <AboutSection />
          </div>
          <div className="hidden lg:block">
            <CampusSection />
          </div>
          <PartnersSection />
          <div className="lg:hidden">
            <LifeAtTKHSection />
          </div>
          <MarqueeSection />
          <ProgramsSection />
          <EventsSection />
          <TestimonialsSection />
          <AdmissionsSteps />
          <NewsSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
};
