import { Button } from "../ui/Button";
import { useScreenSize } from "../../hooks/useScreenSize";
import videoPlayback from "../../assets/media/videoplayback.mp4";

export const HeroSection = () => {
  const screenSize = useScreenSize();

  return (
    <section className="relative w-full h-[calc(100vh-var(--spacing-xl))] min-h-150 flex items-end">
      {/* Video Background */}
      <div className="absolute px-2 rounded-[40px] inset-0 w-full h-full overflow-hidden">
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
      <div className="relative z-20 w-full max-w-480 mx-auto p-l xl:p-20 pt-30 xl:pt-30 flex flex-col xl:flex-row xl:justify-between gap-l">
        {/* Left Side: Headline */}
        <h1 className="text-h1 dt:whitespace-pre max-w-70 xl:max-w-none xl:min-w-200 font-bold xl:flex-1 text-text-invert">
          Your Gateway To
          <br />
          Global Education
        </h1>

        {/* Right Side: Description and CTAs */}
        <div className="gap-l dt:whitespace-pre flex flex-col xl:min-w-125 xl:flex-1">
          <p className="text-text-invert text-body-2 xl:text-body-1">
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
