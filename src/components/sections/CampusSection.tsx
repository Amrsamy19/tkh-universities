import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";

import experienceImg2 from "../../assets/media/experience-img-2.jpeg";
import experienceImg3 from "../../assets/media/experience-img-3.jpeg";
import experienceImg4 from "../../assets/media/experience-img-4.jpeg";
import experienceImg5 from "../../assets/media/experience-img-5.jpeg";

const tabs = [
  {
    id: "campus",
    title: "State-of-the-Art Campus",
    content:
      "Explore our premier hub featuring international university standards, specialized innovation zones, and a layout optimized for academic excellence and student wellbeing.",
    image: experienceImg2,
    stat: "50k m²",
  },
  {
    id: "facilities",
    title: "World-Class Facilities",
    content:
      "Access industry-standard Academic, Computing, and Engineering labs, alongside our comprehensive library, modern clinics, and dedicated student success spaces.",
    image: experienceImg3,
    stat: "20+",
  },
  {
    id: "sports",
    title: "Sports & Recreation",
    content:
      "Stay active with our high-end athletic facilities, including a professional football, basketball and padel courts, and a fully equipped gym.",
    image: experienceImg4,
    stat: "15+",
  },
  {
    id: "clubs",
    title: "Student Clubs & Societies",
    content:
      "Join a vibrant community to lead activities, join societies, and participate in global programs like Student Ambassador.",
    image: experienceImg5,
    stat: "20k+",
  },
];

export const CampusSection = () => {
  const [progress, setProgress] = useState(0);

  // Derive active tab from progress (0-100)
  const activeTab = Math.min(
    Math.floor((progress / 100) * tabs.length),
    tabs.length - 1,
  );

  // Auto-advance progress
  useEffect(() => {
    const interval = 50; // Update every 50ms
    const totalDuration = 20000; // 20 seconds for all tabs (5s per tab)
    const step = (interval / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + step >= 100) return 0;
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Set progress based on clicked tab
  const handleTabClick = (index: number) => {
    setProgress((index / tabs.length) * 100);
  };

  return (
    <section className="py-4xl px-l xl:px-30 w-full max-w-480 mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-2xl items-center">
        {/* Left Column: Text & Tabs */}
        <div className="w-full lg:w-[45%] flex flex-col gap-xs">
          <div className="flex flex-col gap-m items-start pl-l">
            <span className="bg-surface-uni-secondary text-white text-subtitle-1 font-medium px-m py-xs mb-l w-max">
              Experience TKH
            </span>
            <h2 className="text-h2 max-w-165 font-bold">
              Experience a World-Class Campus
            </h2>
          </div>

          <div className="flex flex-col mt-l relative">
            {/* Continuous background line */}
            <div className="absolute left-0 top-0 bottom-0 w-2 rounded-full bg-stroke-primary/30" />

            {/* Overall Progress Line */}
            <motion.div
              className="absolute left-0 top-0 w-2 rounded-full bg-linear-to-b from-[#EF602D] to-[#1F2B6C] z-10"
              style={{ height: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.1, ease: "linear" }}
            />

            {tabs.map((tab, index) => {
              const isActive = index === activeTab;
              return (
                <div
                  key={tab.id}
                  onClick={() => handleTabClick(index)}
                  className={`cursor-pointer transition-all duration-300 relative pl-l py-m`}
                >
                  <h3
                    className={`text-h4 font-bold transition-colors cursor-pointer py-xs ${isActive ? "text-text-primary" : "text-text-secondary/70 hover:text-text-primary"}`}
                  >
                    {tab.title}
                  </h3>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-body-2 pt-l text-neutral-900 leading-normal">
                          {tab.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="mt-l">
            <Button
              variant="primary"
              size="desktop"
              className="w-full sm:w-auto justify-center"
            >
              Know More About TKH
            </Button>
          </div>
        </div>

        {/* Right Column: Images & Stats grid */}
        <div className="w-full lg:w-[55%] relative flex items-center justify-end overflow-hidden">
          {/* Invisible placeholder to maintain layout height */}
          <div className="w-[90%] aspect-4/3 lg:aspect-square invisible relative" />

          <AnimatePresence>
            <motion.div
              key={activeTab}
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0 flex items-center justify-end"
            >
              {/* Main Mask Group for Images */}
              <div
                className="w-[90%] aspect-4/3 lg:aspect-square overflow-hidden relative group"
                style={{
                  clipPath:
                    "polygon(0 0,87.97% 0,100% 37.84%,100% 100%,11.77% 100%,0 61.52%)",
                }}
              >
                <img
                  src={tabs[activeTab].image}
                  alt={tabs[activeTab].title}
                  className="w-full h-full object-cover absolute inset-0"
                />

                {/* Top Left Tag inside Image */}
                <span className="text-subtitle-1 text-white absolute inset-s-[3.2%] top-[5.6%]">
                  {tabs[activeTab].title}
                </span>
              </div>

              {/* Stats Badge overlapping the image */}
              <div className="absolute bottom-0 left-20 lg:left-21 xl:left-34.5 z-20">
                <div
                  onClick={() => handleTabClick((activeTab + 1) % tabs.length)}
                  className="bg-surface-uni-secondary text-white w-35 h-35 lg:w-42.5 lg:h-42.5 flex items-end justify-start cursor-pointer hover:bg-surface-uni-secondary/90 transition-colors pointer-events-auto"
                  style={{
                    clipPath:
                      "polygon(0 0,87.97% 0,100% 37.84%,100% 100%,11.77% 100%,0 61.52%)",
                  }}
                >
                  <span className="text-content-invert rtl:font-body ps-[7%] pb-[14%] font-futura text-5xl font-semibold whitespace-nowrap">
                    {tabs[activeTab].stat}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
