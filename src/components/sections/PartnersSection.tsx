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
      mobileRotation: 30,
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
      mobileRotation: -30,
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
      mobileRotation: 30,
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
      mobileRotation: -30,
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
        return "top-[-12%] left-[-35%] origin-center";
      case "top-right":
        return "top-[-12%] right-[-35%] origin-center";
      case "bottom-left":
        return "bottom-[-15%] left-[-35%] origin-center";
      case "bottom-right":
        return "bottom-[-15%] right-[-35%] origin-center";
      default:
        return "";
    }
  };

  const getHoveredClasses = (position: string) => {
    switch (position) {
      case "top-left":
        return "top-[2%] left-[5%] w-[60%] h-[58%]";
      case "top-right":
        return "top-[2%] right-[5%] w-[60%] h-[58%]";
      case "bottom-left":
        return "bottom-[2%] left-[5%] w-[60%] h-[58%]";
      case "bottom-right":
        return "bottom-[2%] right-[5%] w-[60%] h-[58%]";
      default:
        return "";
    }
  };

  return (
    <section className="py-2xl lg:py-4xl w-full px-m xl:px-30 max-w-480 mx-auto overflow-hidden bg-[linear-gradient(180deg,#FDF1EE_0%,#F5F7FB_100%)]">
      {/* Mobile Layout (Flex Column) */}
      <div className="lg:hidden flex flex-col gap-l">
        <div className="mx-auto flex w-full max-w-120 flex-col items-center gap-10 text-center lg:max-w-143">
          <span className="text-button-2 font-medium text-white bg-brand-blue-200 mb-xs px-m py-s">
            Partner with Excellence
          </span>
          <div className="flex flex-col gap-8">
            <h2 className="text-h2 text-text-primary font-bold">
              Study with The World’s Top Ranked Universities
            </h2>
            <p className="text-body-1 text-neutral-800 px-2xl">
              TKH partners with prestigious European and UK universities to
              bring their academic excellence to Egypt.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-m mt-m">
          {partners.map((p) => (
            <div
              key={p.id}
              className={`relative w-85 max-w-full aspect-square mx-auto rounded-3xl overflow-hidden shadow-lg ${p.mobileRotation > 0 ? `-rotate-2` : `rotate-2`}  transition-transform duration-500 ease-in-out`}
            >
              <img
                src={p.image}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-l flex flex-col justify-end">
                <img
                  src={p.logo}
                  className="absolute inset-s-6 bottom-24 h-auto object-contain w-50"
                  style={{ objectPosition: "left" }}
                />
                <Button variant="secondary" icon className="w-max">
                  Explore {p.name.split(" ")[0]}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout (Interactive Hover Expansion) */}
      <div className="hidden lg:block relative w-full h-225 mt-xl">
        {/* Center Text */}
        <motion.div
          animate={{ opacity: hoveredCard ? 0 : 1 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10"
        >
          <span className="text-subtitle-1 font-medium tracking-[1px] text-white bg-brand-blue-200 mb-m px-m py-s">
            Partner with Excellence
          </span>
          <h2 className="text-h2 text-text-primary mb-m max-w-125 text-center font-bold leading-tight">
            Study with The World’s Top Ranked Universities
          </h2>
          <p className="text-body-1 text-text-secondary max-w-100 text-center">
            TKH partners with prestigious European and UK universities to bring
            their academic excellence to Egypt.
          </p>
        </motion.div>

        {/* Interactive Cards */}
        {partners.map((p) => {
          const isHovered = hoveredCard === p.id;

          return (
            <motion.div
              key={p.id}
              layout
              onMouseEnter={() => setHoveredCard(p.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`absolute overflow-hidden cursor-pointer rounded-[40px] ${
                isHovered
                  ? `${getHoveredClasses(p.position)} z-50`
                  : `${getPositionClasses(p.position)} w-[60%] h-[58%] z-20`
              }`}
              animate={{
                rotate: isHovered ? 0 : p.rotation,
                scale: isHovered ? 1 : hoveredCard ? 0.77 : 1,
                x:
                  !isHovered && hoveredCard
                    ? p.position.includes("left")
                      ? -20
                      : 20
                    : 0,
                y:
                  !isHovered && hoveredCard
                    ? p.position.includes("top")
                      ? -20
                      : 20
                    : 0,
              }}
              transition={{
                layout: { type: "spring", stiffness: 250, damping: 30 },
                scale: { type: "spring", stiffness: 300, damping: 25 },
                x: { type: "spring", stiffness: 300, damping: 25 },
                y: { type: "spring", stiffness: 300, damping: 25 },
                opacity: { duration: 0.25 },
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
                className="absolute inset-0 bg-[linear-gradient(231deg,transparent_68%,rgba(0,0,0,0.6)_97%)]"
                animate={{ opacity: isHovered ? 1 : 0.85 }}
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
                      className={`h-16 lg:h-24 object-contain brightness-0 invert origin-left ${p.position.includes("right") ? "ml-0" : "ml-auto xl:ml-0"}`}
                      style={{
                        objectPosition: p.position.includes("right")
                          ? "left"
                          : "right",
                      }}
                    />
                    {/* Using motion.div wrapper to ensure button doesn't shrink awkwardly during layout animation */}
                    <motion.div layout className="w-max">
                      <Button
                        variant="secondary"
                        size="mobile"
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
                    className="flex gap-4 items-stretch bg-black/50 rounded-2xl p-4 backdrop-blur-md"
                  >
                    {p.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="flex flex-col gap-1 max-w-32 text-white"
                      >
                        <span className="text-[14px] leading-4 font-bold">
                          {stat.title}
                        </span>
                        <span className="text-[10px] leading-3 text-white/80">
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
