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
    imageLabel: "Campus Area",
    badgeText: "50k m²",
  },
  {
    id: "facilities",
    title: "World-Class Facilities",
    content:
      "Access industry-standard Academic, Computing, and Engineering labs, alongside our comprehensive library, modern clinics, and dedicated student success spaces.",
    image: experienceImg3,
    imageLabel: "Modern Labs",
    badgeText: "20+",
  },
  {
    id: "sports",
    title: "Sports & Recreation",
    content:
      "Stay active with our high-end athletic facilities, including a professional football, basketball and padel courts, and a fully equipped gym.",
    image: experienceImg4,
    imageLabel: "Facilities",
    badgeText: "15+",
  },
  {
    id: "clubs",
    title: "Student Clubs & Societies",
    content:
      "Join a vibrant community to lead activities, join societies, and participate in global programs like Student Ambassador.",
    image: experienceImg5,
    imageLabel: "Students",
    badgeText: "20k+",
  },
];

export const CampusSection = () => {
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState(1);

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
        let next = prev + step;
        if (next >= 100) next = 0;
        
        const currentTab = Math.min(Math.floor((prev / 100) * tabs.length), tabs.length - 1);
        const nextTab = Math.min(Math.floor((next / 100) * tabs.length), tabs.length - 1);
        
        if (currentTab !== nextTab) {
          setDirection(1); // Auto-play always goes forward
        }
        
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);
  
  const handleTabClick = (index: number) => {
    if (index === activeTab) return;
    setDirection(index > activeTab ? 1 : -1);
    setProgress((index / tabs.length) * 100);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      y: dir > 0 ? "100%" : "-100%",
    }),
    center: {
      zIndex: 1,
      y: 0,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      y: dir > 0 ? "-100%" : "100%",
    }),
  };

  return (
    <section className="py-4xl px-l xl:px-30 w-full max-w-480 mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-2xl lg:items-center">
        {/* Left Column: Text */}
        <div className="w-full lg:w-[45%] flex flex-col gap-xs">
          <div className="flex flex-col gap-m items-start lg:pl-l">
            <span className="bg-surface-uni-secondary text-white text-subtitle-1 font-medium px-m py-xs mb-l w-max">
              Experience TKH
            </span>
            <h2 className="text-h2 max-w-165 font-bold">
              Experience a World-Class Campus
            </h2>
          </div>

          <div className="flex flex-col mt-l relative lg:pl-l min-h-37.5">
            {/* Decorative vertical line (background track) */}
            <div className="absolute left-0 top-0 bottom-0 w-2 rounded-full bg-stroke-primary/30 block" />
            <motion.div
              className="absolute left-0 top-0 w-2 rounded-full bg-linear-to-b from-[#EF602D] to-[#1F2B6C] z-10 block"
              style={{ height: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.1, ease: "linear" }}
            />

            {tabs.map((tab, index) => {
              const isActive = index === activeTab;

              return (
                <div
                  key={tab.id}
                  className="relative lg:pl-l py-s cursor-pointer mx-xl lg:mx-0"
                  onClick={() => handleTabClick(index)}
                >
                  <h3
                    className={`text-h4 font-bold mb-xs transition-colors ${
                      isActive ? "text-text-primary" : "text-text-secondary/50"
                    }`}
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
                        <p className="text-body-1 text-text-secondary leading-relaxed pt-xs pb-s">
                          {tab.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="mt-l lg:pl-l">
            <Button
              variant="primary"
              size="desktop"
              className="w-full sm:w-auto justify-center"
            >
              Know More About TKH
            </Button>
          </div>
        </div>

        {/* Right Column: Single Image & Badge */}
        <div className="w-full lg:w-[55%] relative flex items-center justify-end overflow-hidden mt-xl lg:mt-0">
          <div className="w-[90%] lg:w-[85%] aspect-4/3 lg:aspect-square relative overflow-hidden">
            <AnimatePresence custom={direction}>
              <motion.div
                key={activeTab}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <div
                  className="w-full h-full overflow-hidden relative"
                  style={{
                    clipPath:
                      "polygon(0 0,87.97% 0,100% 37.84%,100% 100%,11.77% 100%,0 61.52%)",
                  }}
                >
                  <img
                    src={tabs[activeTab].image}
                    alt={tabs[activeTab].title}
                    loading="lazy"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  {/* Image Label Text */}
                  <div className="absolute top-m left-m lg:top-xl lg:left-xl z-10 text-white font-bold text-subtitle-1">
                    {tabs[activeTab].imageLabel}
                  </div>
                </div>

                {/* Badge overlapping the image */}
                <div className="absolute bottom-0 left-7.5 lg:left-14 z-20">
                  <div
                    className="bg-surface-uni-secondary text-white w-32 h-32 lg:w-42.5 lg:h-42.5 flex items-end justify-start"
                    style={{
                      clipPath:
                        "polygon(0 0,87.97% 0,100% 37.84%,100% 100%,11.77% 100%,0 61.52%)",
                    }}
                  >
                    <span className="text-content-invert rtl:font-body ps-[15%] lg:ps-[10%] pb-[20%] lg:pb-[14%] font-futura text-4xl lg:text-5xl font-semibold whitespace-nowrap">
                      {tabs[activeTab].badgeText}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
