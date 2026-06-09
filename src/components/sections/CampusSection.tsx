import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";

const tabs = [
  {
    id: "campus",
    title: "State-of-the-Art Campus",
    content: "Explore our premier hub featuring international university standards, specialized innovation zones, and a layout optimized for academic excellence and student wellbeing.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "facilities",
    title: "World-Class Facilities",
    content: "PC Labs, Ethical Hacking Lab, VR/AR Room, Digital Media Studio, Media Loan Room, Tech-Powered Library, Interactive Lecture Halls, Massive Sports Fields, Outdoor & Indoor Gyms, Diverse Food Court, Inclusive Socializing Spaces.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "sports",
    title: "Sports & Recreation",
    content: "Our massive sports fields, outdoor & indoor gyms, and recreational facilities offer everything you need to stay active and engaged.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "clubs",
    title: "Student Clubs & Societies",
    content: "Learn from internationally experienced professors and industry experts who bring real-world insights, while connecting with diverse student clubs.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200&auto=format&fit=crop"
  }
];

export const CampusSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto-advance tabs
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveTab((current) => (current + 1) % tabs.length);
          return 0;
        }
        return prev + 1; // 100 steps over 5 seconds (50ms per step)
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  // Reset progress when manually clicking a tab
  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setProgress(0);
  };

  return (
    <section className="py-4xl px-l xl:px-[120px] w-full max-w-[1920px] mx-auto overflow-hidden">
      {/* Progress Bar (Slide Timer Indicator) */}
      <div className="w-full h-1 bg-surface-inactive-invert rounded-full mb-2xl overflow-hidden relative">
        <motion.div 
          className="absolute left-0 top-0 bottom-0 bg-surface-tkh-primary"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.05, ease: "linear" }}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-2xl">
        {/* Left Column: Text & Tabs */}
        <div className="w-full lg:w-[40%] flex flex-col gap-xl">
          <div className="flex flex-col gap-xs">
            <span className="text-body-2 font-bold text-text-tkh-primary uppercase tracking-wider">Experience TKH</span>
            <h2 className="text-h2 text-text-primary">Experience a World-Class Campus</h2>
          </div>

          <div className="flex flex-col gap-m mt-l">
            {tabs.map((tab, index) => {
              const isActive = index === activeTab;
              return (
                <div 
                  key={tab.id}
                  onClick={() => handleTabClick(index)}
                  className={`cursor-pointer transition-all duration-300 border-l-[3px] pl-m py-xs ${isActive ? 'border-surface-tkh-primary' : 'border-transparent hover:border-surface-inactive'}`}
                >
                  <h3 className={`text-h4 font-bold transition-colors ${isActive ? 'text-text-primary' : 'text-text-inactive'}`}>
                    {tab.title}
                  </h3>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: "16px" }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-body-2 text-text-secondary">
                          {tab.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="mt-xl">
            <Button variant="primary" size="desktop" className="w-full sm:w-auto justify-center">
              Know More About TKH
            </Button>
          </div>
        </div>

        {/* Right Column: Images & Stats grid */}
        <div className="w-full lg:w-[60%] relative">
          {/* Main Mask Group for Images */}
          <div className="w-full aspect-[4/3] rounded-[32px] overflow-hidden relative bg-surface-inactive-invert group">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeTab}
                src={tabs[activeTab].image}
                alt={tabs[activeTab].title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover absolute inset-0"
              />
            </AnimatePresence>
            
            {/* Overlay to ensure text readability of stats */}
            <div className="absolute inset-0 bg-surface-invert/20 z-10 pointer-events-none"></div>
            
            {/* Stats Badge inside Image */}
            <div className="absolute inset-0 z-20 p-xl flex flex-col justify-end items-start">
              <div className="bg-surface-primary/90 backdrop-blur-md rounded-[24px] px-2xl py-l flex flex-col gap-xs transform transition-transform hover:-translate-y-1">
                <span className="text-h2 text-text-tkh-primary font-bold">50k m²</span>
                <span className="text-button-1 text-text-primary">Campus Area</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
