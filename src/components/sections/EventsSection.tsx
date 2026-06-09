import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

export const EventsSection = () => {
  const events = [
    {
      title: "NOVA Open Day!",
      description: "Join us for an Open Day! Discover opportunities and meet our campus. Explore your future with us!",
      date: "Jan 15, 2026",
      location: "TKH Campus",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Cairo Innovation Hub",
      description: "Visit our Campus! Learn about programs and meet campus.",
      date: "Feb 02, 2026",
      location: "Innovation Zone",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Design & Media Summit",
      description: "A day of talks, portfolios, and studios. Meet faculty and current students.",
      date: "Feb 20, 2026",
      location: "Media Studio",
      image: "https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Scholarship Info Day",
      description: "Learn about funding, eligibility, and how to apply for the 2026 intake.",
      date: "Mar 10, 2026",
      location: "Main Auditorium",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-4xl px-l lg:px-2xl w-full max-w-[1920px] mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-2xl gap-l">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-h2 text-brand-blue-400">Upcoming Events</h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Button variant="outline">Explore All Events</Button>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-l">
        {events.map((evt, i) => (
          <motion.div 
            key={evt.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="group flex flex-col bg-white rounded-[24px] overflow-hidden border border-neutral-100 hover:shadow-xl transition-all h-full"
          >
            <div className="relative h-[200px] overflow-hidden">
              <img 
                src={evt.image} 
                alt={evt.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-m left-m bg-white/90 backdrop-blur-sm px-m py-xs rounded-full flex items-center gap-xs">
                <Calendar className="w-4 h-4 text-brand-orange-200" />
                <span className="text-caption-1 text-brand-blue-400">{evt.date}</span>
              </div>
            </div>
            
            <div className="p-xl flex flex-col flex-1">
              <div className="flex items-center gap-xs text-caption-2 text-neutral-500 mb-s">
                <MapPin className="w-4 h-4" />
                {evt.location}
              </div>
              <h3 className="text-h5 text-brand-blue-400 mb-s group-hover:text-brand-orange-200 transition-colors">
                {evt.title}
              </h3>
              <p className="text-body-2 text-neutral-600 mb-xl flex-1">
                {evt.description}
              </p>
              
              <a href="#" className="mt-auto flex items-center gap-xs text-button-2 text-brand-blue-400 group-hover:text-brand-orange-200 transition-colors">
                Know More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
