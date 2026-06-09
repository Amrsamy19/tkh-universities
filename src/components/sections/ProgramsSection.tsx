import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export const ProgramsSection = () => {
  const programs = [
    { title: "Design & Media", count: "7 Programs", color: "bg-brand-orange-100 text-brand-orange-200", image: "https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=600&auto=format&fit=crop" },
    { title: "Engineering", count: "9 Programs", color: "bg-brand-blue-100/20 text-brand-blue-200", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop" },
    { title: "Psychology", count: "3 Programs", color: "bg-[#E6F2FD] text-[#2F67A2]", image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=600&auto=format&fit=crop" },
    { title: "Business", count: "5 Programs", color: "bg-[#EBF3EC] text-[#348141]", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop" },
    { title: "Physiotherapy", count: "3 Programs", color: "bg-purple-100 text-purple-700", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop" }
  ];

  return (
    <section className="py-2xl px-l lg:px-2xl w-full max-w-[1920px] mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-2xl gap-l">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-h2 text-brand-blue-400">
            Explore Programs<br/>by Field of Study
          </h2>
        </motion.div>
        
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-xs text-button-2 text-brand-orange-200 hover:text-brand-orange-100 transition-colors"
        >
          View All Programs <ChevronRight className="w-5 h-5" />
        </motion.a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-l">
        {programs.map((prog, i) => (
          <motion.a
            href="#"
            key={prog.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative overflow-hidden group flex flex-col justify-between p-xl rounded-[24px] h-[300px] cursor-pointer transition-all hover:-translate-y-2 hover:shadow-lg ${prog.color.split(' ')[0]}`}
          >
            {/* Hover Image Background */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${prog.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent"></div>
            </div>

            <div className={`relative z-10 p-s rounded-full self-start bg-white/60 group-hover:bg-white/20 transition-colors ${prog.color.split(' ')[1]}`}>
              {/* Icon placeholder */}
              <div className="w-8 h-8 rounded-full bg-current opacity-20 group-hover:text-white group-hover:opacity-100"></div>
            </div>
            
            <div className="relative z-10 mt-auto pt-l">
              <h3 className={`text-h4 font-bold mb-xs group-hover:text-white transition-colors ${prog.color.split(' ')[1]}`}>{prog.title}</h3>
              <p className="text-caption-1 text-neutral-600 opacity-80 group-hover:text-white/80 transition-colors">{prog.count}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
