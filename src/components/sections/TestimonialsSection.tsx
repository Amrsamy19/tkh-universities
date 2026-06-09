import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export const TestimonialsSection = () => {
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

  return (
    <section className="py-4xl px-l lg:px-2xl w-full max-w-[1920px] mx-auto bg-brand-blue-400 rounded-[48px] my-2xl overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue-300 rounded-l-full opacity-20 transform translate-x-1/3"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row gap-2xl items-center lg:items-start">
        {/* Left side: Stats */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/3 flex flex-col gap-l text-white"
        >
          <h2 className="text-h1 text-brand-orange-200">98%</h2>
          <h3 className="text-h3">
            of our graduates are employed within 6 months of graduation.
          </h3>
          <p className="text-body-1 text-white/80 mb-m">
            Our dedicated career services ensure you're ready for the professional world before you even leave campus.
          </p>
          <Button variant="secondary" className="self-start">
            Explore Our Career Services
          </Button>
        </motion.div>

        {/* Right side: Cards */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-l lg:gap-xl">
          {testimonials.map((testimony, i) => (
            <motion.div 
              key={testimony.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white rounded-[32px] p-xl flex flex-col gap-m shadow-xl relative"
              style={i === 2 ? { gridColumn: "1 / -1" } : {}} // span full width for the 3rd item to balance the grid
            >
              <div className="flex items-center gap-m">
                <img src={testimony.image} alt={testimony.name} className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <h4 className="text-h6 text-brand-blue-400">{testimony.name}</h4>
                  <p className="text-caption-2 text-brand-orange-200">{testimony.role}</p>
                </div>
              </div>
              <p className="text-body-2 text-neutral-600 italic">
                "{testimony.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
