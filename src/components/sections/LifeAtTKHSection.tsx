import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export const LifeAtTKHSection = () => {
  const cards = [
    {
      id: "student-life",
      title: "Student Life",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "campus-life",
      title: "Campus Life",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-2xl w-full px-m bg-surface-primary overflow-hidden">
      <div className="flex flex-col mb-xl">
        <span className="text-body-2 font-bold text-text-tkh-primary uppercase tracking-wider mb-xs bg-surface-inactive/50 px-s py-xs rounded-full w-max">
          Life at TKH
        </span>
        <h2 className="text-h2 text-text-primary mb-xs">
          Discover the vibrant student life...
        </h2>
        <div className="mt-xs">
          <Button variant="secondary" size="tablet" className="w-auto px-xl">
            Explore All
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-m">
        {cards.map((card, i) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative w-full h-[280px] rounded-[32px] overflow-hidden"
          >
            <div className="absolute inset-0 z-0">
              <img 
                src={card.image} 
                alt={card.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-surface-invert/30"></div>
            </div>
            
            <div className="relative z-10 p-xl flex flex-col h-full justify-end">
              <div className="flex items-center justify-between">
                <h3 className="text-h3 font-bold text-text-invert">{card.title}</h3>
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-text-invert">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
