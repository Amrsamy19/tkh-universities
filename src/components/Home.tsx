import { Navbar } from "./Navbar";
import { Button } from "./ui/Button";

// Vite handles the static asset import for the video
import videoPlayback from "../assets/media/videoplayback.mp4";

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans relative bg-[#F3E8FF] p-m lg:p-xl">
      <div className="relative w-full flex-1 rounded-[32px] overflow-hidden bg-white shadow-2xl flex flex-col">
        <Navbar />

        {/* Hero Section */}
        <section className="relative w-full h-[calc(100vh-var(--spacing-xl)*2)] min-h-[600px] flex items-end lg:pb-5xl pb-4xl pt-[120px]">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-neutral-900/40 z-10"></div>
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
          {/* Using standard spacing classes and custom text classes from index.css */}
          <div className="relative z-20 w-full max-w-[1920px] mx-auto px-l lg:px-2xl flex flex-col lg:flex-row lg:justify-between lg:items-end gap-2xl">
            {/* Left Side: Headline */}
            <div className="lg:max-w-[50%]">
              <h1 className="text-white text-h3 md:text-h2 2xl:text-h1 mb-0 pb-0">
                Your Gateway To
                <br />
                Global Education
              </h1>
            </div>

            {/* Right Side: Description and CTAs */}
            <div className="lg:max-w-[40%] flex flex-col gap-l">
              <p className="text-white text-body-1">
                Earn a globally recognized degree from top-ranked partnered
                universities on our state-of-the-art campus located in Egypt.
              </p>

              <div className="flex flex-col sm:flex-row gap-m w-full">
                {/* Explore Programs uses secondary variant (white background, orange text/icon) */}
                <Button
                  variant="secondary"
                  size="desktop"
                  className="w-full sm:w-auto justify-center"
                >
                  Explore Programs
                </Button>
                {/* Start Virtual Campus Tour uses outline variant with no icon */}
                <Button
                  variant="outline"
                  size="desktop"
                  className="w-full sm:w-auto justify-center"
                  icon={false}
                >
                  Start a Virtual Campus Tour
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Future sections will be added here */}
      <main className="flex-1 w-full relative z-10 bg-white rounded-b-[32px]">
        {/* Empty container for now to ensure page can grow */}
      </main>
      </div>
    </div>
  );
};
