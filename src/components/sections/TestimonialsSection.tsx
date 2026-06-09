import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Software Engineer at Vodafone, Egypt",
      text: "During my final year at TKH, the career services team helped me refine my CV, prepare for technical interviews, and connect with industry mentors. Through their guidance, I secured multiple interviews and landed my role shortly after graduation.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Ali Hassan",
      role: "Data Analyst at Orange, Egypt",
      text: "The hands-on projects and mentorship at TKH gave me real confidence. I built a portfolio that stood out, and the career team connected me directly with hiring partners before I even graduated.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Mona Khaled",
      role: "Product Designer at Instabug, Egypt",
      text: "TKH's studio culture pushed me to think like a professional. The interview prep and portfolio reviews were invaluable, and I landed a design role at a company I admired within weeks of finishing.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
    }
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-4xl px-l xl:px-[120px] w-full max-w-[1920px] mx-auto bg-surface-invert rounded-[48px] my-2xl overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-uni-secondary-light rounded-l-full opacity-10 transform translate-x-1/3"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row gap-2xl items-center lg:items-start">
        {/* Left side: Stats */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/3 flex flex-col gap-l text-text-invert"
        >
          <h2 className="text-h1 text-text-tkh-primary">98%</h2>
          <h3 className="text-h3">
            of our graduates are employed within 6 months of graduation.
          </h3>
          <p className="text-body-1 text-text-invert/80 mb-m">
            Our dedicated career services ensure you're ready for the professional world before you even leave campus.
          </p>
          <Button variant="secondary" className="self-start">
            Explore Our Career Services
          </Button>
        </motion.div>

        {/* Right side: Overlapping Carousel */}
        <div className="w-full lg:w-2/3 h-[500px] relative flex justify-center items-center">
          <div className="absolute inset-0 flex justify-center items-center">
            <AnimatePresence initial={false}>
              {testimonials.map((testimony, i) => {
                // Calculate position relative to current index
                let offset = i - currentIndex;
                if (offset < -1) offset += testimonials.length;
                if (offset > 1) offset -= testimonials.length;
                
                // Determine layout based on offset
                const isActive = offset === 0;
                const isLeft = offset === -1;
                const isRight = offset === 1;

                if (!isActive && !isLeft && !isRight) return null;

                return (
                  <motion.div
                    key={testimony.name}
                    initial={{ opacity: 0, scale: 0.8, x: offset * 100 }}
                    animate={{
                      opacity: isActive ? 1 : 0.6,
                      scale: isActive ? 1 : 0.85,
                      x: isActive ? "0%" : isLeft ? "-45%" : "45%",
                      zIndex: isActive ? 30 : 20,
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute w-full max-w-[450px] bg-surface-primary rounded-[32px] p-2xl flex flex-col gap-m shadow-2xl"
                  >
                    <div className="flex items-center gap-m">
                      <img src={testimony.image} alt={testimony.name} className="w-16 h-16 rounded-full object-cover border-2 border-stroke-tkh-primary" />
                      <div>
                        <h4 className="text-h6 text-text-primary">{testimony.name}</h4>
                        <p className="text-caption-2 text-text-tkh-primary">{testimony.role}</p>
                      </div>
                    </div>
                    <p className="text-body-2 text-text-secondary italic">
                      "{testimony.text}"
                    </p>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="absolute -bottom-xl flex gap-m z-40">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-stroke-primary bg-surface-primary text-text-primary flex items-center justify-center hover:bg-surface-inactive-invert transition-colors shadow-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-stroke-primary bg-surface-primary text-text-primary flex items-center justify-center hover:bg-surface-inactive-invert transition-colors shadow-md"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
