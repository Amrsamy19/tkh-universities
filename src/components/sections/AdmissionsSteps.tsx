import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { useScreenSize } from "../../hooks/useScreenSize";

export const AdmissionsSteps = () => {
  const steps = [
    {
      num: "1",
      title: "Apply Online",
      desc: "Complete our simple online application form",
    },
    {
      num: "2",
      title: "Upload Docs",
      desc: "Upload your academic and identity documents",
    },
    {
      num: "3",
      title: "Screening & Interview",
      desc: "You'll be scheduled for an interview",
    },
    {
      num: "4",
      title: "Placement Test",
      desc: "You'll be invited to on-campus placement test",
    },
    {
      num: "5",
      title: "Acceptance Offer",
      desc: "You'll receive our final acceptance offer",
    },
  ];

  const screenSize = useScreenSize();

  return (
    <section className="py-4xl xl:py-[80px] px-s xl:px-[120px] w-full max-w-[1920px] mx-auto relative overflow-hidden bg-gradient-to-br from-[#F5F7FB] to-[#FDF1EE] mt-4xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2xl relative z-10 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="col-span-1 lg:col-span-5 flex flex-col items-start"
        >
          <div className="bg-surface-uni-secondary text-text-invert px-m py-s text-subtitle-1 tracking-[1px] font-bold mb-m uppercase">
            Take Action
          </div>

          <h2 className="text-h2 text-text-primary mb-s font-bold leading-tight">
            Your Journey
            <br />
            Starts Here!
          </h2>

          <p className="text-body-1 text-text-secondary mb-xl">
            Just a few steps to join TKH campus.
          </p>
          <Button
            variant="primary"
            size={screenSize}
            className="hidden lg:inline-flex"
          >
            Apply For 2026 Year
          </Button>
        </motion.div>

        {/* Right Column (Steps) */}
        <div className="col-span-1 lg:col-span-7 flex flex-col border-t border-stroke-primary">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col md:flex-row md:items-center py-l border-b border-stroke-primary px-0 gap-m"
            >
              <div className="w-10 h-10 rounded-full bg-surface-uni-secondary text-text-invert flex items-center justify-center text-button-1 font-bold shrink-0">
                {step.num}
              </div>

              <div className="flex-1 flex flex-col md:flex-row md:items-center gap-m">
                <h3 className="text-h5 font-bold text-text-primary w-auto md:w-[300px]">
                  {step.title}
                </h3>
                <p className="text-body-2 text-text-secondary">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <Button
          variant="primary"
          size={screenSize}
          className="lg:hidden w-1/2 mx-auto"
        >
          Apply For 2026 Year
        </Button>
      </div>
    </section>
  );
};
