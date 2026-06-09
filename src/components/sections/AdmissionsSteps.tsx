import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export const AdmissionsSteps = () => {
  const steps = [
    { num: "01", title: "Apply Online", desc: "Complete our simple online application form" },
    { num: "02", title: "Upload Docs", desc: "Upload your academic and identity documents" },
    { num: "03", title: "Screening & Interview", desc: "You'll be scheduled for an interview" },
    { num: "04", title: "Placement Test", desc: "You'll be invited to on-campus placement test" },
    { num: "05", title: "Acceptance Offer", desc: "You'll receive our final acceptance offer" }
  ];

  return (
    <section className="py-4xl px-l lg:px-2xl w-full max-w-[1920px] mx-auto relative overflow-hidden bg-[#FFF9F8] mt-4xl rounded-[48px]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2xl relative z-10 items-center">
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="col-span-1 lg:col-span-5 flex flex-col items-start"
        >
          <div className="bg-[#273480] text-white px-m py-xs text-caption-1 font-bold mb-m tracking-wider uppercase">
            Take Action
          </div>
          
          <h2 className="text-h2 text-brand-blue-400 mb-s font-bold leading-tight">
            Your Journey<br/>Starts Here!
          </h2>
          
          <p className="text-body-1 text-neutral-600 mb-xl">
            Just a few steps to join TKH campus.
          </p>
          
          <Button variant="primary">
            Apply For 2026 Year
          </Button>
        </motion.div>

        {/* Right Column (Steps) */}
        <div className="col-span-1 lg:col-span-7 flex flex-col border-t border-neutral-300">
          {steps.map((step, i) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center py-l border-b border-neutral-300 group hover:bg-white/50 transition-colors px-s"
            >
              <div className="w-12 h-12 rounded-full bg-[#273480] text-white flex items-center justify-center text-button-2 font-bold shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                {step.num}
              </div>
              
              <div className="ml-l flex-1 grid grid-cols-1 md:grid-cols-2 gap-m items-center">
                <h3 className="text-button-1 font-bold text-brand-blue-400">
                  {step.title}
                </h3>
                <p className="text-caption-2 text-neutral-600 text-left md:text-left">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative center-bottom button if needed (like "Stay Updated" in the screenshot) */}
      <div className="mt-4xl flex justify-center">
        <div className="bg-[#273480] text-white px-xl py-s text-button-2 cursor-pointer hover:bg-brand-blue-400 transition-colors shadow-md">
          Stay Updated
        </div>
      </div>
    </section>
  );
};
