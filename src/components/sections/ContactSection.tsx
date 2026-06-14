import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { useScreenSize } from "../../hooks/useScreenSize";

export const ContactSection = () => {
  const screenSize = useScreenSize();

  return (
    <section className="py-2xl lg:py-4xl w-[calc(100%+var(--spacing-s)*2)] -ml-s overflow-hidden relative">
      <div className="flex flex-col lg:flex-row gap-2xl lg:gap-xl p-m lg:p-4xl lg:py-20 justify-between items-start rounded-[40px] relative z-10 w-full max-w-375 mx-auto">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start text-left lg:max-w-md w-full"
        >
          <span className="text-button-2 font-medium text-white bg-brand-blue-200 mb-m px-m py-xs">
            Take Action
          </span>
          <h2 className="text-h2 font-bold text-text-primary my-s">
            Get In Touch!
          </h2>
          <p className="text-body-1 text-text-secondary mb-l">
            Have a question on mind? Leave us a message and we will contact you
            shortly.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col w-full lg:max-w-225"
        >
          <form
            id="contact-form"
            className="flex flex-col gap-2xl w-full"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Phone Input with Floating Label */}
            <div className="relative border-b border-stroke-primary pb-xs pt-m">
              <input
                type="text"
                id="phone"
                placeholder=" "
                className="peer w-full bg-transparent outline-none text-body-1 text-text-primary"
              />
              <label
                htmlFor="phone"
                className="absolute left-0 top-1/2 -translate-y-1/2 text-body-1 text-text-secondary/80 transition-all duration-200 peer-focus:top-0 peer-focus:text-caption-1 peer-focus:-translate-y-full peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-caption-1 peer-[:not(:placeholder-shown)]:-translate-y-full cursor-text"
              >
                Your Phone Number <span className="text-brand-orange-200">*</span>
              </label>
            </div>

            {/* Email Input with Floating Label */}
            <div className="relative border-b border-stroke-primary pb-xs pt-m">
              <input
                type="email"
                id="email"
                placeholder=" "
                className="peer w-full bg-transparent outline-none text-body-1 text-text-primary"
              />
              <label
                htmlFor="email"
                className="absolute left-0 top-1/2 -translate-y-1/2 text-body-1 text-text-secondary/80 transition-all duration-200 peer-focus:top-0 peer-focus:text-caption-1 peer-focus:-translate-y-full peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-caption-1 peer-[:not(:placeholder-shown)]:-translate-y-full cursor-text"
              >
                Your Email <span className="text-brand-orange-200">*</span>
              </label>
            </div>

            {/* Message Input with Floating Label */}
            <div className="relative border-b border-stroke-primary pb-xs pt-m">
              <textarea
                id="message"
                rows={1}
                placeholder=" "
                className="peer w-full bg-transparent outline-none text-body-1 text-text-primary resize-none"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-0 top-1/2 -translate-y-1/2 text-body-1 text-text-secondary/80 transition-all duration-200 peer-focus:top-0 peer-focus:text-caption-1 peer-focus:-translate-y-full peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-caption-1 peer-[:not(:placeholder-shown)]:-translate-y-full cursor-text"
              >
                Your Message <span className="text-brand-orange-200">*</span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="mt-l w-1/2 lg:w-full flex justify-start lg:justify-end">
              <Button
                variant="primary"
                size={screenSize}
                className="w-full sm:w-auto"
              >
                Send Message
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
