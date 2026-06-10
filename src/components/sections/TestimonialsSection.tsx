import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/Button";

// Assets
import grad1 from "../../assets/media/graduates-slide-image-1.jpeg";
import grad2 from "../../assets/media/graduates-slide-image-2.jpeg";
import grad3 from "../../assets/media/graduates-slide-image-4.jpeg";

import badge2024 from "../../assets/media/2024 Grad.png";
import badge2025 from "../../assets/media/2025 Grad.png";

import CoventryLogo from "../../assets/media/Vector2.png";
import NOVALogo from "../../assets/media/Vector.png";

import avatar1 from "../../assets/media/graduates-rectangle-8.jpeg";
import { useScreenSize } from "../../hooks/useScreenSize";

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Software Engineer at Vodafone",
      text: "During my final year at TKH, the career services team helped me refine my CV and prepare for technical interviews. Through their guidance, I secured multiple interviews and landed my role shortly after graduation.",
      image: grad1,
      badge: badge2025,
      logo: CoventryLogo,
      avatar: avatar1,
    },
    {
      name: "Ali Hassan",
      role: "Data Analyst at Orange, Egypt",
      text: "The hands-on projects and mentorship at TKH gave me real confidence. I built a portfolio that stood out, and the career team connected me directly with hiring partners before I even graduated.",
      image: grad2,
      badge: badge2024,
      logo: CoventryLogo,
      avatar: avatar1,
    },
    {
      name: "Mona Khaled",
      role: "Product Designer at Instabug",
      text: "TKH's studio culture pushed me to think like a professional. The interview prep and portfolio reviews were invaluable, and I landed a design role at a company I admired within weeks of finishing.",
      image: grad3,
      badge: badge2025,
      logo: NOVALogo,
      avatar: avatar1,
    },
    {
      name: "Omar Tarek",
      role: "Financial Analyst at CIB",
      text: "The network I built during my time at the business school opened doors I didn't know existed. The career fairs directly led to my internship which converted into my full-time job.",
      image: grad1,
      badge: badge2024,
      logo: CoventryLogo,
      avatar: avatar1,
    },
    {
      name: "Salma Yasser",
      role: "Mechanical Engineer at Orascom",
      text: "The state-of-the-art labs and practical approach to engineering meant I was productive from day one at my job. Employers specifically seek out TKH graduates because of this.",
      image: grad2,
      badge: badge2024,
      logo: NOVALogo,
      avatar: avatar1,
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const screenSize = useScreenSize();

  return (
    <section className="py-2xl lg:py-4xl w-[calc(100%+var(--spacing-m)*2)] -ml-m overflow-hidden flex flex-col items-center">
      {/* Header */}
      <span className="text-button-2 font-medium text-white bg-brand-blue-200 mb-m px-m py-xs">
        Build Your Career
      </span>
      <h2 className="text-h2 text-text-primary font-bold mb-s text-center">
        Success Career Journeys of
        <br />
        Our Graduates
      </h2>
      <p className="text-body-1 text-text-secondary mb-3xl text-center">
        98% of our graduates are employed within 6
        <br />
        months of graduation.
      </p>

      {/* Carousel Container */}
      <div className="relative w-full max-w-[1200px] h-[550px] flex justify-center items-center my-l">
        {/* Nav Buttons (Hidden on small mobile, visible on sm and up) */}
        <button
          onClick={prev}
          className="hidden sm:flex absolute left-0 lg:left-10 z-40 w-12 h-12 rounded-full border border-brand-orange-200 text-brand-orange-200 hover:bg-brand-orange-200 hover:text-white items-center justify-center transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="hidden sm:flex absolute right-0 lg:right-10 z-40 w-12 h-12 rounded-full border border-brand-orange-200 text-brand-orange-200 hover:bg-brand-orange-200 hover:text-white items-center justify-center transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Cards Wrapper */}
        <div className="relative w-[340px] lg:w-[400px] h-[480px] lg:h-[540px]">
          <AnimatePresence initial={false}>
            {testimonials.map((testimony, i) => {
              // Calculate relative offset for infinite carousel
              let offset = i - currentIndex;
              const total = testimonials.length;
              // Normalize offset to be between -2 and 2 (for 5 items)
              if (offset > Math.floor(total / 2)) offset -= total;
              if (offset < -Math.floor(total / 2)) offset += total;

              // Do not render cards that are too far away (though with 5 items, all are rendered)
              if (Math.abs(offset) > 2) return null;
              const zIndex = 10 - Math.abs(offset);

              // Calculate positions for the fanned out "deck" effect
              // Base spread on mobile vs desktop
              const spreadX =
                typeof window !== "undefined" && window.innerWidth < 1024
                  ? 80
                  : 160;

              const x = offset * spreadX;
              const y = Math.abs(offset) * 30; // Push down the sides to create an arc
              const rotate = offset * 8; // Rotate based on offset (e.g. -16deg, -8deg, 0, 8deg, 16deg)
              const scale = 1 - Math.abs(offset) * 0.1; // Scale down the sides (1, 0.9, 0.8)

              return (
                <motion.div
                  key={testimony.name}
                  animate={{
                    x: x,
                    y: y,
                    rotate: rotate,
                    scale: scale,
                    zIndex: zIndex,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "circOut",
                  }}
                  className="absolute top-0 left-0 w-full h-full border-[6px] lg:border-[8px] border-white shadow-2xl flex flex-col bg-[linear-gradient(101.46deg,#1e2749_18.07%,#101828_49.29%,#27202f_80.51%)]"
                >
                  {/* Card Image Area */}
                  <div className="relative w-full h-[55%] shrink-0 p-2">
                    <div className="w-full h-full [clip-path:polygon(0_0,88%_0,100%_37%,100%_100%,12%_100%,0_62%)]">
                      <img
                        src={testimony.image}
                        alt={testimony.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Gradient Overlay for logo readability */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2" />

                    {/* Grad Badge Overlay */}
                    <img
                      src={testimony.badge}
                      alt="Graduation Year"
                      className="absolute top-4 right-2 w-24 lg:w-30 h-auto object-contain"
                    />

                    {/* Uni Logo */}
                    <div className="absolute bottom-s left-m w-22 lg:w-28">
                      <img
                        src={testimony.logo}
                        alt="University Logo"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>

                  {/* Card Text Area */}
                  <div className="flex-1 p-m lg:p-l flex items-start gap-s text-left text-white">
                    <img
                      src={testimony.avatar}
                      alt={testimony.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shrink-0 mt-1"
                    />
                    <div className="min-w-0 flex flex-col">
                      <h4 className="text-button-1 font-bold truncate text-white">
                        {testimony.name}
                      </h4>
                      <p className="text-subtitle-2 text-white/90 truncate mb-s">
                        {testimony.role}
                      </p>
                      <p className="text-caption-2 lg:text-body-2 text-white/90 line-clamp-4 pr-1">
                        {testimony.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Nav Arrows (Visible only on small screens below carousel) */}
      <div className="flex sm:hidden gap-m mt-l">
        <button
          onClick={prev}
          className="w-12 h-12 rounded-full border border-brand-orange-200 text-brand-orange-200 hover:bg-brand-orange-200/15 hover:text-white flex items-center justify-center transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="w-12 h-12 rounded-full border border-brand-orange-200 text-brand-orange-200 hover:bg-brand-orange-200/15 hover:text-white flex items-center justify-center transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Explore Button */}
      <Button variant="primary" size={screenSize} className="mt-l">
        Explore Our Career Services
      </Button>
    </section>
  );
};
