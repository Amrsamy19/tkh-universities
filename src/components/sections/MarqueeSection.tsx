import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import CoventryLogo from "../../assets/svg/menu-logo-coventry.svg";
import NOVALogo from "../../assets/svg/menu-logo-nova.svg";

export const MarqueeSection = () => {
  const repeatCount = 12;
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="w-[calc(100%+var(--spacing-m)*2)] -ml-m overflow-hidden py-4xl lg:py-9xl relative"
    >
      <div className="flex flex-col gap-xl lg:gap-2xl">
        {/* Row 1: Coventry University logos (blue) — slides from left */}
        <motion.div
          className="-rotate-3 scale-150 origin-center"
          initial={{ x: "-40%" }}
          animate={isInView ? { x: "0%" } : { x: "-40%" }}
          transition={{
            ease: "easeOut",
            duration: 2.5,
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{
              ease: "easeOut",
              delay: 0.2,
            }}
            className="w-full flex items-center whitespace-nowrap py-4 lg:py-6 gap-[clamp(2rem,5.2vw,6.25rem)]"
            style={{ backgroundColor: "var(--color-partner-1)" }}
          >
            {Array.from({ length: repeatCount }).map((_, i) => (
              <div
                key={`coventry-${i}`}
                className="flex items-center shrink-0 -mx-2 lg:-mx-4"
              >
                <img
                  src={CoventryLogo}
                  alt="Coventry University"
                  loading="lazy"
                  className="h-10 lg:h-18 w-auto object-contain brightness-0 invert"
                />
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Row 2: NOVA University logos (green) — slides from right */}
        <motion.div
          className="rotate-3 scale-150 origin-center"
          initial={{ x: "40%" }}
          animate={isInView ? { x: "0%" } : { x: "40%" }}
          transition={{
            ease: "easeOut",
            duration: 2.5,
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{
              ease: "easeOut",
              delay: 0.2,
            }}
            className="w-full flex items-center whitespace-nowrap py-4 lg:py-6"
            style={{ backgroundColor: "var(--color-partner-2)" }}
          >
            {Array.from({ length: repeatCount }).map((_, i) => (
              <div
                key={`nova-${i}`}
                className="flex items-center shrink-0 -mx-3 lg:-mx-5"
              >
                <img
                  src={NOVALogo}
                  alt="NOVA University"
                  loading="lazy"
                  className="h-10 lg:h-18 w-auto object-contain brightness-0 invert"
                />
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Row 3: "NEW PARTNERSHIPS SOON" text (gray) — slides from left */}
        <motion.div
          className="-rotate-3 scale-150 origin-center"
          initial={{ x: "-35%" }}
          animate={isInView ? { x: "0%" } : { x: "-35%" }}
          transition={{
            ease: "easeOut",
            duration: 2.5,
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{
              ease: "easeOut",
              delay: 0.2,
            }}
            className="w-full flex items-center whitespace-nowrap py-6 lg:py-10 gap-[clamp(2rem,5.2vw,6.25rem)] bg-neutral-500"
          >
            {Array.from({ length: repeatCount }).map((_, i) => (
              <span
                key={`text-${i}`}
                className="text-h4 lg:text-h1 font-bold text-white whitespace-nowrap uppercase tracking-[0.01em] shrink-0 -mx-1 lg:-mx-3"
              >
                New Partnerships Soon
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
