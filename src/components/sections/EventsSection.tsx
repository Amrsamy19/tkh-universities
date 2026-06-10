import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/Button";

import eventsImg1 from "../../assets/media/events-slide-image-v2.jpeg";
import eventsImg2 from "../../assets/media/events-slide-image-1-v2.jpeg";

export const EventsSection = () => {
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

  const events = [
    {
      title: "NOVA Open Day!",
      description:
        "Join us for an Open Day! Discover opportunities and meet our campus. Explore your future with us!",
      day: "23",
      month: "April",
      year: "2026",
      image: eventsImg1,
    },
    {
      title: "Cairo Innovation Hub",
      description: "Visit our Campus! Learn about programs and meet campus.",
      day: "23",
      month: "April",
      year: "2026",
      image: eventsImg2,
    },
    {
      title: "Design & Media Summit",
      description:
        "A day of talks, portfolios, and studios. Meet faculty and current students.",
      day: "23",
      month: "April",
      year: "2026",
      image: eventsImg1,
    },
    {
      title: "Scholarship Info Day",
      description:
        "Learn about funding, eligibility, and how to apply for the 2026 intake.",
      day: "15",
      month: "May",
      year: "2026",
      image: eventsImg2,
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

  return (
    <section className="py-2xl lg:py-4xl w-full max-w-[1920px] mx-auto overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center mb-xl lg:mb-2xl px-m"
      >
        <span className="text-button-2 font-medium text-white bg-brand-blue-200 mb-m px-m py-s">
          Events
        </span>
        <h2 className="text-h2 text-text-primary font-bold">
          Don't Miss Our
          <br />
          Upcoming Events!
        </h2>
      </motion.div>

      {/* Cards Carousel */}
      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        className="flex gap-m lg:gap-l overflow-x-auto scrollbar-hide pb-l px-m lg:px-l xl:px-[48px]"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {events.map((evt, i) => (
          <motion.div
            key={`${evt.title}-${i}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="shrink-0 w-[85vw] sm:w-[380px] lg:w-[460px] flex flex-col snap-start group cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative w-full aspect-[4/3] overflow-hidden [clip-path:polygon(11.9%_0,100%_0,100%_54.1%,88.1%_100%,0_100%,0_45.9%)]">
              <img
                src={evt.image}
                alt={evt.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Date Badge */}
              <div className="absolute top-0 right-0 bg-brand-orange-200 text-white w-20 h-20 lg:w-24 lg:h-24 flex flex-col items-center justify-evenly [clip-path:polygon(11.9%_0,100%_0,100%_54.1%,88.1%_100%,0_100%,0_45.9%)]">
                <span className="text-h4 font-bold">{evt.day}</span>
                <span className="text-body-2 text-center leading-none">
                  {evt.month} {evt.year}
                </span>
              </div>

              {/* Text Content on Image */}
              <div className="absolute inset-x-0 bottom-0 p-l lg:p-xl pb-xl lg:pb-2xl">
                <h3 className="text-h3 font-bold text-white mb-xs">
                  {evt.title}
                </h3>
                <p className="text-body-2 text-white/80 pr-m">
                  {evt.description}
                </p>
              </div>
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
        className="flex flex-col lg:flex-row items-center justify-between gap-m lg:gap-0 mt-l px-m lg:px-l xl:px-[100px]"
      >
        {/* Nav Arrows */}
        <div className="flex gap-s">
          <button
            onClick={() => scroll("left")}
            className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors ${
              canScrollLeft
                ? "border-brand-orange-200 text-brand-orange-200 hover:bg-brand-orange-200 hover:text-white"
                : "border-stroke-primary text-text-inactive cursor-default"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className={`w-12 h-12 rounded-full border flex items-center justify-center transition-colors ${
              canScrollRight
                ? "border-brand-orange-200 text-brand-orange-200 hover:bg-brand-orange-200 hover:text-white"
                : "border-stroke-primary text-text-inactive cursor-default"
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Explore Button */}
        <Button variant="primary" size="mobile">
          Explore Our All Events
        </Button>
      </motion.div>
    </section>
  );
};
