import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export const PartnersSection = () => {
  const partners = [
    {
      id: "coventry",
      name: "Coventry University",
      description: "Earn a UK degree in Engineering, Computing, Business, or Design.",
      color: "brand-blue-200",
      stats: [
        { title: "5 stars", desc: "Overall Rating & Internationalization QS Stars University Ratings" },
        { title: "Queen's Award", desc: "For Enterprise International Trade 2022" },
        { title: "12th on world", desc: "for international outlook The Young University Rankings 2024" }
      ],
      link: "#"
    },
    {
      id: "nova",
      name: "NOVA University",
      description: "Pursue world-class European education from top-ranked NOVA Lisbon.",
      color: "brand-orange-200",
      stats: [
        { title: "5 stars", desc: "Overall Rating & Internationalization QS Stars University Ratings" },
        { title: "Queen's Award", desc: "For Enterprise International Trade 2022" },
        { title: "12th on world", desc: "for international outlook The Young University Rankings 2024" }
      ],
      link: "#"
    }
  ];

  return (
    <section className="py-4xl px-l lg:px-2xl w-full max-w-[1920px] mx-auto bg-neutral-50 rounded-[48px] my-2xl">
      <div className="flex flex-col items-center text-center mb-2xl">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-h2 text-brand-blue-400 mb-m flex flex-col leading-tight font-bold"
        >
          <span>The</span>
          <span>World's</span>
          <span>Top</span>
          <span>Ranked</span>
          <span>Universities</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-body-1 text-neutral-500 flex flex-col text-sm max-w-[150px] mx-auto leading-relaxed"
        >
          <span>TKH</span>
          <span>partners</span>
          <span>with</span>
          <span>prestigious</span>
          <span>European</span>
          <span>and</span>
          <span>UK</span>
          <span>universities</span>
          <span>to</span>
          <span>bring</span>
          <span>their</span>
          <span>academic</span>
          <span>excellence</span>
          <span>to</span>
          <span>Egypt.</span>
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
        {partners.map((partner, index) => (
          <motion.div 
            key={partner.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-[32px] p-2xl shadow-sm border border-neutral-100 hover:shadow-xl transition-shadow flex flex-col h-full group"
          >
            <div className={`text-${partner.color} mb-l`}>
              {/* Using text logo representation for now */}
              <h3 className="text-h3 font-bold uppercase tracking-tight">{partner.name}</h3>
            </div>
            
            <p className="text-body-2 text-neutral-600 mb-xl flex-1">
              {partner.description}
            </p>
            
            <div className="flex flex-col gap-m mb-2xl border-t border-neutral-100 pt-xl">
              {partner.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-button-1 text-brand-blue-400">{stat.title}</span>
                  <span className="text-caption-2 text-neutral-500">{stat.desc}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-auto">
              <Button variant="outline" className="w-full justify-center group-hover:bg-brand-blue-400 group-hover:text-white transition-colors">
                Explore {partner.name.split(' ')[0]}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
