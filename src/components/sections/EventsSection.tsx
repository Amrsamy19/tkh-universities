import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";

export const EventsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const events = [
    {
      title: "NOVA Open Day!",
      description: "Join us for an Open Day! Discover opportunities and meet our campus. Explore your future with us!",
      day: "15",
      month: "Jan",
      year: "2026",
      location: "TKH Campus",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Cairo Innovation Hub",
      description: "Visit our Campus! Learn about programs and meet campus.",
      day: "02",
      month: "Feb",
      year: "2026",
      location: "Innovation Zone",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Design & Media Summit",
      description: "A day of talks, portfolios, and studios. Meet faculty and current students.",
      day: "20",
      month: "Feb",
      year: "2026",
      location: "Media Studio",
      image: "https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Scholarship Info Day",
      description: "Learn about funding, eligibility, and how to apply for the 2026 intake.",
      day: "10",
      month: "Mar",
      year: "2026",
      location: "Main Auditorium",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 960 + 32; // card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-2xl lg:py-4xl px-0 lg:px-l xl:px-[48px] w-full max-w-[1920px] mx-auto overflow-hidden bg-surface-primary">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-xl lg:mb-2xl gap-m px-m lg:px-0">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-h2 text-text-primary">Upcoming Events</h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-m"
        >
          <div className="hidden sm:flex gap-s mr-m">
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
          <Button variant="outline">Explore All Events</Button>
        </motion.div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-m lg:gap-2xl overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-l px-m lg:px-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {events.map((evt, i) => (
          <motion.div 
            key={evt.title}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group shrink-0 w-[85vw] lg:w-[960px] flex flex-col md:flex-row bg-surface-primary rounded-[32px] overflow-hidden border border-stroke-primary hover:shadow-xl transition-all h-auto md:h-[400px] snap-start"
          >
            <div className="relative w-full md:w-[45%] h-[240px] md:h-full overflow-hidden">
              <img 
                src={evt.image} 
                alt={evt.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Numbered date badge */}
              <div className="absolute top-m left-m bg-surface-primary shadow-lg rounded-[16px] px-m py-xs flex flex-col items-center justify-center min-w-[72px]">
                <span className="text-h4 font-bold text-text-tkh-primary leading-none mb-1">{evt.day}</span>
                <span className="text-caption-1 font-bold text-text-primary uppercase leading-none">{evt.month}</span>
              </div>
            </div>
            
            <div className="p-xl lg:p-3xl flex flex-col flex-1 justify-center w-full md:w-[55%]">
              <div className="flex items-center gap-xs text-caption-1 font-bold text-text-inactive mb-m uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                {evt.location}
              </div>
              
              <h3 className="text-h3 text-text-primary mb-m group-hover:text-text-tkh-primary transition-colors line-clamp-2">
                {evt.title}
              </h3>
              
              <p className="text-body-1 text-text-secondary mb-2xl line-clamp-3">
                {evt.description}
              </p>
              
              <div className="mt-auto">
                <Button variant="secondary" size="tablet" className="w-full sm:w-auto justify-center">
                  Know More
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
