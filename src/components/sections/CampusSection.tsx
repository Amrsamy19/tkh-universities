import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export const CampusSection = () => {
  return (
    <section className="py-4xl px-l lg:px-2xl w-full max-w-[1920px] mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-2xl">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <div className="rounded-[32px] overflow-hidden aspect-[4/3] bg-neutral-200 shadow-xl relative group">
             <img 
               src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop" 
               alt="TKH Campus" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
             />
             <div className="absolute inset-0 bg-neutral-900/10"></div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 flex flex-col items-start gap-l"
        >
          <h2 className="text-h2 text-brand-blue-400">
            Experience a<br/>
            World-Class Campus
          </h2>
          <p className="text-body-1 text-neutral-500">
            Explore our premier hub featuring international university standards, specialized innovation zones, and a layout optimized for academic excellence and student wellbeing.
          </p>
          <Button variant="primary" size="desktop" className="mt-m">
            Know More About TKH
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
