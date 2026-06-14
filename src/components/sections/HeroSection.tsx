import { Button } from "../ui/Button";
import { useScreenSize } from "../../hooks/useScreenSize";
import videoPlayback from "../../assets/media/videoplayback.mp4";

export const HeroSection = () => {
  const screenSize = useScreenSize();

  return (
    <section className="relative w-full h-[calc(100vh-var(--spacing-xl))] min-h-150 flex items-end">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden mx-m rounded-4xl">
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-surface-invert/40 z-10 rounded-4xl"></div>
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
      <div className="relative z-20 w-full p-l lg:p-7xl flex flex-col lg:flex-row lg:flex-wrap lg:items-end gap-l">
        {/* Left Side: Headline */}
        <h1 className="text-h1 lg:min-w-125 font-bold lg:flex-1 text-text-invert">
          Your Gateway To
          <br />
          Global Education
        </h1>

        {/* Right Side: Description and CTAs */}
        <div className="gap-l flex flex-col lg:min-w-125 lg:flex-1">
          <p className="text-text-invert text-body-1">
            Earn a globally recognized degree from top-ranked partnered
            universities on our state-of-the-art campus located in Egypt.
          </p>

          <div className="flex flex-col xl:flex-row gap-m w-full">
            <Button
              variant="secondary"
              size={screenSize}
              className="w-full xl:w-auto justify-center"
            >
              Explore Programs
            </Button>
            <Button
              variant="outline"
              size={screenSize}
              className="w-full xl:w-auto justify-center"
              icon={false}
            >
              Start a Virtual Campus Tour
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
