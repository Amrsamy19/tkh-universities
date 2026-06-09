import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export const ContactSection = () => {
  return (
    <section className="py-4xl px-l xl:px-[120px] w-full max-w-[1920px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4xl relative z-10 items-start">
        {/* Left Column: Intro */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-l pt-xl"
        >
          <div className="flex flex-col gap-xs">
            <span className="text-body-2 font-bold text-text-tkh-primary uppercase tracking-wider">Reach Out</span>
            <h2 className="text-h2 text-text-primary">Get In Touch!</h2>
          </div>
          
          <p className="text-body-1 text-text-secondary max-w-md mb-l">
            Have questions about our programs, admissions, or campus life? We're here to help. Send us a message and our team will get back to you shortly.
          </p>
        </motion.div>

        {/* Right Column: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col w-full max-w-xl lg:ml-auto"
        >
          <form className="flex flex-col gap-xl" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-s">
              <label htmlFor="name" className="text-subtitle-1 font-bold text-text-primary">Full Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="John Doe" 
                className="w-full bg-transparent border-b border-stroke-primary py-s text-body-1 text-text-primary placeholder:text-text-inactive focus:outline-none focus:border-stroke-tkh-primary transition-colors"
              />
            </div>

            <div className="flex flex-col gap-s">
              <label htmlFor="email" className="text-subtitle-1 font-bold text-text-primary">Email Address</label>
              <input 
                type="email" 
                id="email" 
                placeholder="john@example.com" 
                className="w-full bg-transparent border-b border-stroke-primary py-s text-body-1 text-text-primary placeholder:text-text-inactive focus:outline-none focus:border-stroke-tkh-primary transition-colors"
              />
            </div>

            <div className="flex flex-col gap-s">
              <label htmlFor="message" className="text-subtitle-1 font-bold text-text-primary">Your Message</label>
              <textarea 
                id="message" 
                rows={1}
                placeholder="How can we help you?" 
                className="w-full bg-transparent border-b border-stroke-primary py-s text-body-1 text-text-primary placeholder:text-text-inactive focus:outline-none focus:border-stroke-tkh-primary transition-colors resize-none overflow-hidden h-12"
              ></textarea>
            </div>

            <div className="mt-l">
              <Button variant="primary" size="desktop" className="w-full sm:w-auto justify-center">
                Send Message
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
