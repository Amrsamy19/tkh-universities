import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export const PartnersSection = () => {
  const partners = [
    {
      id: "nova",
      name: "NOVA University",
      image: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=1200&auto=format&fit=crop",
      stats: [
        { title: "5 stars", desc: "Overall Rating & Internationalization QS Stars University Ratings" },
        { title: "Queen's Award", desc: "For Enterprise International Trade 2022" },
        { title: "12th on world", desc: "for international outlook The Young University Rankings 2024" }
      ],
      link: "#"
    },
    {
      id: "coventry",
      name: "Coventry University",
      image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1200&auto=format&fit=crop",
      stats: [
        { title: "5 stars", desc: "Overall Rating & Internationalization QS Stars University Ratings" },
        { title: "Queen's Award", desc: "For Enterprise International Trade 2022" },
        { title: "12th on world", desc: "for international outlook The Young University Rankings 2024" }
      ],
      link: "#"
    }
  ];

  return (
    <section className="py-4xl w-full px-m xl:px-[120px]">
      <div className="flex flex-col items-center text-center mb-3xl px-m lg:px-xl">
        <span className="text-body-2 font-bold text-text-tkh-primary uppercase tracking-wider mb-xs">
          Partner with Excellence
        </span>
        <h2 className="text-h2 text-text-primary mb-m max-w-3xl">
          Study with The World’s Top Ranked Universities
        </h2>
        <p className="text-body-1 text-text-secondary max-w-2xl mx-auto">
          TKH partners with prestigious European and UK universities to bring their academic excellence to Egypt.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl px-m lg:px-xl">
        {partners.map((partner, index) => (
          <motion.div 
            key={partner.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-surface-primary rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full border border-stroke-primary group"
          >
            {/* Top Banner Image */}
            <div className="w-full h-[240px] overflow-hidden relative">
              <img 
                src={partner.image} 
                alt={partner.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-surface-invert/10"></div>
            </div>
            
            <div className="p-xl flex flex-col flex-1">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-m mb-xl">
                <h3 className="text-h3 font-bold text-text-primary uppercase tracking-tight">{partner.name}</h3>
                <Button variant="outline" size="tablet" className="shrink-0" icon={true}>
                  Explore {partner.name.split(' ')[0]}
                </Button>
              </div>
              
              <div className="flex flex-col gap-m border-t border-stroke-primary pt-xl flex-1">
                {partner.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-xs sm:gap-m border-b border-stroke-primary/50 pb-m last:border-0 last:pb-0">
                    <span className="text-button-1 text-text-tkh-primary whitespace-nowrap min-w-[140px]">{stat.title}</span>
                    <span className="text-body-2 text-text-secondary">{stat.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
