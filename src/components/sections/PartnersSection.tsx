import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

import imgNova from "../../assets/media/universities-university-image.jpeg";
import NOVALogo from "../../assets/media/image 29.png";
import CoventryLogo from "../../assets/media/image 30.png";
import imgCoventry from "../../assets/media/universities-university-image-1.jpeg";

export const PartnersSection = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const partners = [
    {
      id: "coventry-1",
      name: "Coventry University",
      logo: CoventryLogo,
      image: imgCoventry,
      rotation: 5,
      position: "top-left",
      smallOverlayType: "stats",
      stats: [
        {
          title: "5 stars",
          desc: "Overall Rating & Internationalization QS Stars University Ratings",
        },
        {
          title: "Queen's Award",
          desc: "For Enterprise International Trade 2022",
        },
        {
          title: "12th on world",
          desc: "for international outlook The Young University Rankings 2024",
        },
      ],
      link: "#",
    },
    {
      id: "nova",
      name: "NOVA University",
      logo: NOVALogo,
      image: imgNova,
      rotation: -5,
      position: "top-right",
      smallOverlayType: "logo",
      stats: [
        { title: "Top 10", desc: "Best Young Universities in Europe" },
        { title: "Triple Crown", desc: "Accreditation for Business School" },
        { title: "Global Reach", desc: "Extensive international network" },
      ],
      link: "#",
    },
    {
      id: "coventry-2",
      name: "Coventry University",
      logo: NOVALogo,
      image: imgNova,
      rotation: -5,
      position: "bottom-left",
      smallOverlayType: "stats",
      stats: [
        {
          title: "5 stars",
          desc: "Overall Rating & Internationalization QS Stars University Ratings",
        },
        {
          title: "Queen's Award",
          desc: "For Enterprise International Trade 2022",
        },
        {
          title: "12th on world",
          desc: "for international outlook The Young University Rankings 2024",
        },
      ],
      link: "#",
    },
    {
      id: "coventry-3",
      name: "Coventry University",
      logo: CoventryLogo,
      image: imgCoventry,
      rotation: 5,
      position: "bottom-right",
      smallOverlayType: "logo",
      stats: [
        {
          title: "5 stars",
          desc: "Overall Rating & Internationalization QS Stars University Ratings",
        },
        {
          title: "Queen's Award",
          desc: "For Enterprise International Trade 2022",
        },
        {
          title: "12th on world",
          desc: "for international outlook The Young University Rankings 2024",
        },
      ],
      link: "#",
    },
  ];

  const getPositionClasses = (position: string) => {
    switch (position) {
      case "top-left":
        return "top-0 left-0 origin-center";
      case "top-right":
        return "top-[8%] right-0 origin-center";
      case "bottom-left":
        return "bottom-[8%] left-0 origin-center";
      case "bottom-right":
        return "bottom-0 right-0 origin-center";
      default:
        return "";
    }
  };

  return (
    <section className="py-2xl lg:py-4xl w-full px-m xl:px-30 max-w-480 mx-auto bg-surface-primary overflow-hidden">
      {/* Mobile Layout (Flex Column) */}
      <div className="lg:hidden flex flex-col gap-l">
        <div className="flex flex-col items-center text-center">
          <span className="text-button-2 font-bold text-white bg-brand-blue-200 mb-xs px-s py-xs">
            Partner with Excellence
          </span>
          <h2 className="text-h2 text-text-primary mb-xs font-bold">
            Study with The World’s Top Ranked Universities
          </h2>
          <p className="text-body-2 text-text-secondary">
            TKH partners with prestigious European and UK universities to bring
            their academic excellence to Egypt.
          </p>
        </div>

        <div className="flex flex-col gap-m mt-m">
          {partners.map((p) => (
            <div
              key={p.id}
              className="relative w-full h-100 rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src={p.image}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-l flex flex-col justify-end">
                <img
                  src={p.logo}
                  className="h-16 object-contain mb-m origin-left brightness-0 invert"
                  style={{ objectPosition: "left" }}
                />
                <Button variant="primary" icon className="w-max">
                  Explore {p.name.split(" ")[0]}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout (Interactive Hover Expansion) */}
      <div className="flex flex-col lg:block relative w-full h-175 mt-xl">
        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
          <span className="text-button-2 font-bold text-white bg-brand-blue-200 mb-m px-m py-s rounded-sm shadow-sm">
            Partner with Excellence
          </span>
          <h2 className="text-h2 text-text-primary mb-m max-w-125 text-center font-extrabold leading-tight">
            Study with The World’s Top Ranked Universities
          </h2>
          <p className="text-body-1 text-text-secondary max-w-100 text-center">
            TKH partners with prestigious European and UK universities to bring
            their academic excellence to Egypt.
          </p>
        </div>

        {/* Interactive Cards */}
        {partners.map((p) => {
          const isHovered = hoveredCard === p.id;
          const isAnyHovered = hoveredCard !== null;

          return (
            <motion.div
              key={p.id}
              layout
              onMouseEnter={() => setHoveredCard(p.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`absolute overflow-hidden shadow-2xl cursor-pointer rounded-[40px] ${
                isHovered
                  ? "inset-0 z-50"
                  : `${getPositionClasses(p.position)} w-80 xl:w-150 h-55 xl:h-65 z-20`
              }`}
              style={{
                rotate: isHovered ? 0 : p.rotation,
              }}
              transition={{
                layout: { type: "spring", stiffness: 250, damping: 30 },
              }}
            >
              {/* Background Image (Counter-rotated when small to keep buildings straight) */}
              <motion.img
                layout
                src={p.image}
                className="absolute inset-0 w-full h-full object-cover origin-center"
                animate={{
                  rotate: isHovered ? 0 : -p.rotation,
                  scale: isHovered ? 1 : 1.25,
                }}
                transition={{ type: "spring", stiffness: 250, damping: 30 }}
              />

              {/* Dark Gradient Overlay */}
              <motion.div
                className="absolute inset-0 bg-linear-to-t from-[#1F1916]/80 via-[#1F1916]/30 to-transparent"
                animate={{ opacity: isHovered ? 0.9 : 0.6 }}
              />

              {/* Card Content */}
              <motion.div
                layout
                className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10 z-30"
              >
                <div className="flex justify-between items-end w-full">
                  {/* Logo & Button (Left Side) */}
                  <motion.div
                    animate={{
                      opacity:
                        isHovered || p.smallOverlayType === "logo" ? 1 : 0,
                    }}
                    className="flex flex-col gap-6 items-start"
                  >
                    <img
                      src={p.logo}
                      className="h-16 lg:h-24 object-contain brightness-0 invert origin-left"
                      style={{ objectPosition: "left" }}
                    />
                    {/* Using motion.div wrapper to ensure button doesn't shrink awkwardly during layout animation */}
                    <motion.div layout className="w-max">
                      <Button
                        variant="primary"
                        size="desktop"
                        className="rounded-full shadow-lg"
                        icon
                      >
                        Explore {p.name.split(" ")[0]}
                      </Button>
                    </motion.div>
                  </motion.div>

                  {/* Stats (Right Side) */}
                  <motion.div
                    animate={{
                      opacity:
                        isHovered || p.smallOverlayType === "stats" ? 1 : 0,
                    }}
                    className="flex gap-6 lg:gap-10 bg-black/20 backdrop-blur-md p-l rounded-3xl border border-white/10"
                  >
                    {p.stats.map((stat, i) => (
                      <div key={i} className="flex flex-col gap-1 max-w-35">
                        <span className="text-white font-bold text-h6 lg:text-h5 leading-tight">
                          {stat.title}
                        </span>
                        <span className="text-white/80 text-cap-1 lg:text-body-2 leading-snug">
                          {stat.desc}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
