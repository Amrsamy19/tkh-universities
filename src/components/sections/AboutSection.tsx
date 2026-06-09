import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export const AboutSection = () => {
  return (
    <section className="py-2xl lg:py-4xl px-m lg:px-xl xl:px-[120px] w-full max-w-[1920px] mx-auto overflow-hidden bg-surface-primary">
      <div className="flex flex-col gap-xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-m"
        >
          <span className="text-body-2 font-bold text-text-tkh-primary uppercase tracking-wider bg-surface-inactive/50 w-max px-s py-xs rounded-full">
            Our Campuses
          </span>
          <h2 className="text-h2 lg:text-[56px] leading-[1.1] font-bold text-text-primary">
            A higher Education institute for Global Universities
          </h2>
          <p className="text-body-1 text-text-secondary mt-xs">
            A higher education institution that hosts branches of world-class universities in Egypt. Each university operates in TKH with its own independent programs...
          </p>
          <div className="mt-xs">
            <Button variant="secondary" size="tablet" className="w-auto px-xl">
              Read More about us
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full aspect-square sm:aspect-video rounded-[32px] overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop" 
            alt="TKH Campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-surface-invert/10"></div>
          
          <div className="absolute bottom-l left-l bg-surface-primary/90 backdrop-blur-md rounded-[24px] px-xl py-m">
            <span className="text-h3 lg:text-h2 text-text-tkh-primary font-bold">50k m²</span>
            <span className="text-button-2 lg:text-button-1 text-text-primary block mt-xs">Campus Area</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
