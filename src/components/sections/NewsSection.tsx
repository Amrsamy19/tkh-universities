import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export const NewsSection = () => {
  const news = [
    {
      id: 1,
      category: "Academics",
      title: "TKH Partners with Leading Global Tech Firm for New Lab",
      date: "May 20, 2026",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      category: "Student Life",
      title: "Annual Design Week Showcases Incredible Student Projects",
      date: "Jun 02, 2026",
      image: "https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      category: "Research",
      title: "Engineering Students Win National Robotics Competition",
      date: "Jun 15, 2026",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 4,
      category: "Admissions",
      title: "Early Action Deadline Extended for Fall 2026",
      date: "Jul 01, 2026",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-4xl px-l xl:px-[48px] w-full max-w-[1920px] mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-2xl gap-l">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-h2 text-text-primary">Proud News!</h2>
        </motion.div>
        
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-xs text-button-2 text-text-tkh-primary hover:text-text-primary transition-colors"
        >
          View All News <ChevronRight className="w-5 h-5" />
        </motion.a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-l">
        {news.map((item, i) => (
          <motion.a
            href="#"
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="group flex flex-col bg-surface-primary rounded-[32px] overflow-hidden border border-stroke-primary hover:shadow-xl transition-all h-full"
          >
            <div className="relative h-[240px] overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-m left-m bg-surface-primary/90 backdrop-blur-sm px-m py-xs rounded-full">
                <span className="text-caption-1 font-bold text-text-uni-secondary uppercase tracking-wider">{item.category}</span>
              </div>
            </div>
            
            <div className="p-xl flex flex-col flex-1">
              <span className="text-caption-2 text-text-inactive mb-s">
                {item.date}
              </span>
              <h3 className="text-h5 text-text-primary mb-xl group-hover:text-text-tkh-primary transition-colors line-clamp-3">
                {item.title}
              </h3>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
