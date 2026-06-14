import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

import eventsImg1 from "../../assets/media/events-slide-image-v2.jpeg";
import eventsImg2 from "../../assets/media/events-slide-image-1-v2.jpeg";
import { useScreenSize } from "../../hooks/useScreenSize";

export const NewsSection = () => {
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

  const news = [
    {
      category: "NOVA UNIVERSITY",
      categoryColor: "text-[#348141]", // partner-2 (green)
      title: "Communication University of China (CUC) Delegation Visits TKH",
      date: "December 17, 2025",
      image: eventsImg1,
    },
    {
      category: "DESIGN & MEDIA",
      categoryColor: "text-[#2F67A2]", // partner-1 (blue)
      title:
        "Cultivating Empathy Through Learning: NOVA SBE Students Explore Diversity, Equity & Inclusion",
      date: "December 2, 2025",
      image: eventsImg2,
    },
    {
      category: "School of Continuing Education",
      categoryColor: "text-brand-blue-200", // brand blue
      title:
        "H.E. Prof. Khaled El-Enany, TKH Board Member, Appointed as Director-General of UNESCO",
      date: "October 7, 2025",
      image: eventsImg1,
    },
    {
      category: "NOVA UNIVERSITY",
      categoryColor: "text-[#348141]",
      title: "Communication University of China (CUC) Delegation Visits TKH",
      date: "December 17, 2025",
      image: eventsImg1,
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 500;
      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const screenSize = useScreenSize();

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
        <span className="text-button-2 font-medium text-white bg-brand-blue-200 mb-m px-m py-xs">
          Stay Updated
        </span>
        <h2 className="text-h2 text-text-primary font-bold">Proud News!</h2>
        <p className="text-body-1 text-text-secondary mt-m max-w-150">
          Discover the latest achievements, partnerships, and news shaping the
          future of education at TKH.
        </p>
      </motion.div>

      {/* Cards Carousel */}
      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        className="flex gap-m lg:gap-l overflow-x-auto scrollbar-hide pb-l px-m lg:px-l xl:px-4xl"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {news.map((item, i) => (
          <motion.div
            key={`${item.title}-${i}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="shrink-0 w-[85vw] sm:w-87.5 lg:w-135 px- flex flex-col snap-start group cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative w-full aspect-4/3 overflow-hidden [clip-path:polygon(11.9%_0,100%_0,100%_54.1%,88.1%_100%,0_100%,0_45.9%)] mb-m">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-xs pr-m">
              <span className={`text-body-2 ${item.categoryColor}`}>
                {item.category}
              </span>
              <h3 className="text-h5 font-bold text-text-primary group-hover:text-text-tkh-primary transition-colors line-clamp-3 leading-tight">
                {item.title}
              </h3>
              <span className="text-body-2 text-text-inactive mt-xs">
                {item.date}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Row: Nav Arrows (left) + Explore Button (right) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col lg:flex-row items-center justify-between gap-m lg:gap-0 mt-l px-m lg:px-l xl:px-30"
      >
        {/* Nav Arrows */}
        <div className="flex gap-s">
          <button
            onClick={() => scroll("left")}
            className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full border flex items-center justify-center transition-colors ${
              canScrollLeft
                ? "border-brand-orange-200 text-brand-orange-200 hover:bg-brand-orange-200/15"
                : "border-stroke-primary text-text-inactive cursor-default"
            }`}
          >
            <ArrowLeft className="w-7 h-7" />
          </button>
          <button
            onClick={() => scroll("right")}
            className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full border flex items-center justify-center transition-colors ${
              canScrollRight
                ? "border-brand-orange-200 text-brand-orange-200 hover:bg-brand-orange-200/15"
                : "border-stroke-primary text-text-inactive cursor-default"
            }`}
          >
            <ArrowRight className="w-7 h-7" />
          </button>
        </div>

        {/* Explore Button */}
        <Button variant="primary" size={screenSize}>
          Explore Our All News
        </Button>
      </motion.div>
    </section>
  );
};
