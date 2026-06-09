import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft, ArrowRight } from "lucide-react";

export const ProgramsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const programs = [
    { title: "Design & Media", count: "7 Programs", color: "text-text-tkh-primary", image: "https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=600&auto=format&fit=crop" },
    { title: "Engineering", count: "9 Programs", color: "text-text-uni-secondary", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop" },
    { title: "Psychology", count: "3 Programs", color: "text-[var(--color-partner-1)]", image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=600&auto=format&fit=crop" },
    { title: "Business", count: "5 Programs", color: "text-[var(--color-partner-2)]", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop" },
    { title: "Physiotherapy", count: "3 Programs", color: "text-text-primary", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop" }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 548 + 32; // card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-4xl px-l xl:px-[48px] w-full max-w-[1920px] mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-2xl gap-l">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-h2 text-text-primary">
            Discover Your Path Across<br/>5 Core Majors
          </h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-m"
        >
          <div className="flex gap-s">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-stroke-primary flex items-center justify-center text-text-primary hover:bg-surface-inactive-invert transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-stroke-primary flex items-center justify-center text-text-primary hover:bg-surface-inactive-invert transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <a href="#" className="hidden sm:flex items-center gap-xs text-button-2 text-text-tkh-primary hover:text-text-primary transition-colors ml-l">
            View All Programs <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-2xl overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-l"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {programs.map((prog, i) => (
          <motion.a
            href="#"
            key={prog.title}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`shrink-0 w-[85vw] sm:w-[400px] xl:w-[548px] relative overflow-hidden group flex flex-col justify-between p-2xl rounded-[40px] h-[400px] snap-start cursor-pointer transition-all hover:shadow-xl ${prog.color}`}
          >
            {/* Background color placeholder */}
            <div className="absolute inset-0 bg-surface-primary border border-stroke-primary z-0 transition-colors group-hover:border-transparent"></div>
            
            {/* Hover Image Background */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${prog.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-surface-invert/90 via-surface-invert/40 to-transparent"></div>
            </div>

            <div className={`relative z-10 p-m rounded-full self-start bg-surface-primary shadow-sm group-hover:bg-surface-primary/20 transition-colors ${prog.color}`}>
              {/* Icon placeholder */}
              <div className="w-10 h-10 rounded-full bg-current opacity-20 group-hover:text-text-invert group-hover:opacity-100"></div>
            </div>
            
            <div className="relative z-10 mt-auto pt-xl">
              <h3 className={`text-h3 font-bold mb-s group-hover:text-text-invert transition-colors ${prog.color}`}>{prog.title}</h3>
              <p className="text-body-1 text-text-secondary group-hover:text-text-invert/80 transition-colors">{prog.count}</p>
            </div>
          </motion.a>
        ))}
      </div>
      
      {/* Mobile only View All */}
      <a href="#" className="sm:hidden flex items-center justify-center gap-xs text-button-2 text-text-tkh-primary mt-l">
        View All Programs <ArrowRight className="w-5 h-5" />
      </a>
    </section>
  );
};
