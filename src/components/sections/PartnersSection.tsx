import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import NOVALogo from "../../assets/svg/menu-logo-nova.svg";
import CoventryLogo from "../../assets/svg/menu-logo-coventry.svg";

export const PartnersSection = () => {
  const partners = [
    {
      id: "nova",
      name: "NOVA University",
      logo: NOVALogo,
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
      logo: CoventryLogo,
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
    <section className="py-2xl lg:py-4xl w-full px-m lg:px-m xl:px-[120px] bg-surface-primary">
      <div className="flex flex-col items-center text-center mb-xl lg:mb-3xl px-0 lg:px-xl">
        <span className="hidden lg:block text-body-2 font-bold text-text-tkh-primary uppercase tracking-wider mb-xs">
          Partner with Excellence
        </span>
        <span className="lg:hidden text-body-2 font-bold text-text-tkh-primary uppercase tracking-wider mb-xs bg-surface-inactive/50 px-s py-xs rounded-full">
          Study With Us
        </span>
        
        <h2 className="hidden lg:block text-h2 text-text-primary mb-m max-w-3xl">
          Study with The World’s Top Ranked Universities
        </h2>
        <h2 className="lg:hidden text-h2 text-text-primary mb-xs">
          Find your path
        </h2>
        
        <p className="hidden lg:block text-body-1 text-text-secondary max-w-2xl mx-auto">
          TKH partners with prestigious European and UK universities to bring their academic excellence to Egypt.
        </p>
        <p className="lg:hidden text-body-1 text-text-secondary max-w-xs mx-auto">
          from 20+ programs across our partner universities
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-m lg:gap-xl px-0 lg:px-xl">
        {partners.map((partner, index) => (
          <motion.div 
            key={partner.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-surface-primary rounded-[32px] lg:rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow flex flex-col h-[400px] lg:h-full border border-stroke-primary group relative"
          >
            {/* Desktop Top Banner Image */}
            <div className="hidden lg:block w-full h-[240px] overflow-hidden relative">
              <img 
                src={partner.image} 
                alt={partner.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-surface-invert/10"></div>
            </div>

            {/* Mobile Full Background Image */}
            <div className="lg:hidden absolute inset-0 z-0">
              <img 
                src={partner.image} 
                alt={partner.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-invert/90 via-surface-invert/20 to-transparent"></div>
            </div>
            
            {/* Mobile Card Content */}
            <div className="lg:hidden relative z-10 flex flex-col h-full justify-between p-xl">
              <div className="bg-surface-primary/90 backdrop-blur-sm w-16 h-16 rounded-[16px] flex items-center justify-center p-2 shadow-md">
                <img src={partner.logo} alt={partner.name} className="w-full h-auto" />
              </div>
              <div className="flex justify-between items-end">
                <div className="bg-surface-primary rounded-full px-m py-s flex items-center shadow-md">
                  <span className="text-button-2 font-bold text-text-primary">Learn More</span>
                </div>
                <div className="w-12 h-12 bg-surface-primary rounded-full flex items-center justify-center shadow-md text-text-tkh-primary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </div>
              </div>
            </div>
            
            {/* Desktop Card Content */}
            <div className="hidden lg:flex p-xl flex-col flex-1 relative z-10 bg-surface-primary">
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
