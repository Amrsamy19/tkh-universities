import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

import majors1 from "../../assets/media/majors-1.jpeg";
import majors2 from "../../assets/media/majors-2.jpeg";
import majors3 from "../../assets/media/majors-3.jpeg";
import majors4 from "../../assets/media/majors-4.jpeg";
import majors5 from "../../assets/media/majors-5.jpeg";

export const ProgramsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  }, []);

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, [updateScrollState]);

  const programs = [
    {
      title: "Design & Media",
      count: "3 Programs",
      image: majors1,
    },
    {
      title: "Engineering",
      count: "5 Programs",
      image: majors2,
    },
    {
      title: "Psychology",
      count: "3 Programs",
      image: majors3,
    },
    {
      title: "Business",
      count: "9 Programs",
      image: majors4,
    },
    {
      title: "Physiotherapy",
      count: "7 Programs",
      image: majors5,
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 420;
      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-2xl lg:py-4xl w-full max-w-480 mx-auto overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center mb-xl lg:mb-2xl px-m"
      >
        <span className="text-button-2 font-medium text-white bg-brand-blue-200 mb-m px-m py-s">
          Choose Your Future
        </span>
        <h2 className="text-h2 text-text-primary font-bold">
          Discover Your Path
          <br />
          Across 5 Core Majors
        </h2>
      </motion.div>

      {/* Cards Carousel */}
      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        className="flex gap-m lg:gap-xl overflow-x-auto scrollbar-hide pb-l px-xl"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {programs.map((prog) => (
          <motion.a
            href="#"
            key={prog.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="shrink-0 snap-start cursor-pointer group"
          >
            {/* Rotated card container */}
            <div className="w-70 h-70 lg:w-[548px] lg:h-[548px] relative overflow-hidden transition-transform duration-500 [clip-path:polygon(0_0,88.14%_0,100%_38.01%,100%_100%,11.86%_100%,0_61.99%)]">
              {/* Background Image */}
              <img
                src={prog.image}
                alt={prog.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_top,#101828_0%,#101828b5_30%,#1018286b_40%,transparent_52%)]" />

              {/* Card Content */}
              <div className="absolute inset-0 flex flex-col justify-end py-l lg:py-xl left-10 lg:left-18">
                <h3 className="text-h4 lg:text-h3 font-bold text-white mb-xxs">
                  {prog.title}
                </h3>
                <p className="text-body-2 lg:text-body-1 text-white/80">
                  {prog.count}
                </p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Navigation Arrows */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex justify-center gap-s mt-l"
      >
        <button
          onClick={() => scroll("left")}
          className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors ${
            canScrollLeft
              ? "border-brand-orange-200 text-brand-orange-200 hover:bg-brand-orange-200/15"
              : "border-stroke-primary text-text-inactive cursor-default"
          }`}
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={() => scroll("right")}
          className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors ${
            canScrollRight
              ? "border-brand-orange-200 text-brand-orange-200 hover:bg-brand-orange-200/15"
              : "border-stroke-primary text-text-inactive cursor-default"
          }`}
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </motion.div>
    </section>
  );
};
