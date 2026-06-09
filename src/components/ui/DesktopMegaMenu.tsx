import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Separator } from "./Separator";
import NOVA from "../../assets/svg/menu-logo-nova.svg";
import COVENTRY from "../../assets/svg/menu-logo-coventry.svg";
import NovaMenuImg from "../../assets/media/menu-universities-nova.png";
import CoventryMenuImg from "../../assets/media/menu-universities-coventry.png";

interface DesktopMegaMenuProps {
  activeDropdown: string | null;
}

export const DesktopMegaMenu = ({ activeDropdown }: DesktopMegaMenuProps) => {
  const [activeUniversity, setActiveUniversity] = useState<"NOVA" | "COVENTRY">(
    "NOVA",
  );

  return (
    <AnimatePresence>
      {activeDropdown && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          className="border-t border-stroke-primary/50 overflow-hidden"
        >
          <div className="px-2xl pb-2xl pt-m">
            {activeDropdown === "Universities" && (
              <div className="grid grid-cols-13 gap-xl items-center min-h-88">
                {/* Left Column: Universities selection */}
                <ul className="col-span-6 gap-m flex w-150 shrink-0 flex-col">
                  {/* NOVA Pill */}
                  <div
                    onMouseEnter={() => setActiveUniversity("NOVA")}
                    className={`rounded-3xl px-xl py-l gap-l flex items-center justify-between cursor-pointer transition-all duration-300 ${
                      activeUniversity === "NOVA"
                        ? "bg-neutral-50/60"
                        : "bg-transparent hover:bg-neutral-50/60"
                    }`}
                  >
                    <div className="flex gap-l items-center">
                      <img
                        src={NOVA}
                        className="w-auto h-14 shrink-0"
                        alt="NOVA"
                      />
                      <p className="text-content-secondary min-w-0 flex-1 text-[16px]">
                        Pursue world-class European education from top-ranked
                        NOVA Lisbon
                      </p>
                    </div>

                    <ChevronRight className="w-6 h-6 text-text-primary shrink-0 animate-in fade-in slide-in-from-left-2 duration-300" />
                  </div>

                  {/* Coventry Pill */}
                  <div
                    onMouseEnter={() => setActiveUniversity("COVENTRY")}
                    className={`rounded-3xl px-xl py-l gap-l flex items-center justify-between cursor-pointer transition-all duration-300 ${
                      activeUniversity === "COVENTRY"
                        ? "bg-neutral-50/60"
                        : "bg-transparent hover:bg-neutral-50/60"
                    }`}
                  >
                    <div className="flex gap-l items-center">
                      <img
                        src={COVENTRY}
                        className="w-auto h-14 shrink-0"
                        alt="Coventry"
                      />
                      <p className="text-body-2 text-text-secondary leading-snug">
                        Earn a UK degree in Engineering, Computing, Business, or
                        Design.
                      </p>
                    </div>
                    {activeUniversity === "COVENTRY" && (
                      <ChevronRight className="w-6 h-6 text-text-primary shrink-0 animate-in fade-in slide-in-from-left-2 duration-300" />
                    )}
                  </div>
                </ul>

                {/* Middle Column: Links */}
                <div className="col-span-2 flex flex-col justify-start gap-l pl-s relative">
                  <Separator
                    orientation="vertical"
                    gradient
                    className="absolute -left-6 top-2 bottom-8 h-full w-3px bg-amber-900"
                  />
                  {[
                    activeUniversity === "NOVA"
                      ? "About NOVA University"
                      : "About Coventry University",
                    "Tuition Fees",
                    "Admission Criteria",
                    "Schools and programs",
                  ].map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-button-2 font-medium text-text-primary hover:text-text-tkh-primary transition-colors py-xs"
                    >
                      {link}
                    </a>
                  ))}
                </div>

                {/* Right Column: Image */}
                <div className="col-span-4 relative h-73.25 w-130 shrink-0">
                  <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <img
                      key={activeUniversity}
                      src={
                        activeUniversity === "NOVA"
                          ? NovaMenuImg
                          : CoventryMenuImg
                      }
                      alt={`${activeUniversity} Campus`}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Other Dropdowns */}
            {activeDropdown === "Study" && (
              <div className="py-xl flex flex-col gap-m">
                <h3 className="text-h4 font-bold text-text-primary">
                  Study at TKH
                </h3>
                <p className="text-text-secondary max-w-md">
                  Explore our wide range of undergraduate and postgraduate
                  programs designed to prepare you for a global career.
                </p>
              </div>
            )}
            {activeDropdown === "Campus Life" && (
              <div className="py-xl flex flex-col gap-m">
                <h3 className="text-h4 font-bold text-text-primary">
                  Campus Life
                </h3>
                <p className="text-text-secondary max-w-md">
                  Discover our vibrant student community, world-class
                  facilities, clubs, and sports activities on campus.
                </p>
              </div>
            )}
            {activeDropdown === "Admissions" && (
              <div className="py-xl flex flex-col gap-m">
                <h3 className="text-h4 font-bold text-text-primary">
                  Admissions
                </h3>
                <p className="text-text-secondary max-w-md">
                  Learn everything you need to know about our application
                  process, requirements, and important deadlines.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
