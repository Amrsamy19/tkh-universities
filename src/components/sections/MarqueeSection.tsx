import { motion } from "framer-motion";

export const MarqueeSection = () => {
  // Placeholder logos since we don't have SVGs yet
  const partners = [
    { name: "Coventry University", color: "text-text-uni-secondary" },
    { name: "NOVA University", color: "text-[var(--color-surface-nova)]" },
    { name: "Pearson", color: "text-text-primary" },
    { name: "British Council", color: "text-text-primary" },
    { name: "AMBA", color: "text-text-primary" },
    { name: "EFMD", color: "text-text-primary" },
    { name: "QAA", color: "text-text-primary" },
    { name: "Cisco", color: "text-text-primary" }
  ];

  // Double the array for seamless looping
  const marqueeItems = [...partners, ...partners];

  return (
    <section className="py-2xl w-full max-w-[1920px] mx-auto overflow-hidden bg-surface-primary border-y border-stroke-primary">
      <div className="relative flex overflow-x-hidden group">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // Adjust speed here
          }}
        >
          {marqueeItems.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex items-center justify-center px-4xl min-w-[200px]"
            >
              {/* This acts as a placeholder for the actual logo image */}
              <span className={`text-h4 font-bold opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all ${partner.color}`}>
                {partner.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
