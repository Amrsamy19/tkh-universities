import { useState } from "react";
import { ChevronRight } from "lucide-react";
import NOVA from "../../assets/svg/menu-logo-nova.svg";
import COVENTRY from "../../assets/svg/menu-logo-coventry.svg";
import NovaMenuImg from "../../assets/media/menu-universities-nova.png";
import CoventryMenuImg from "../../assets/media/menu-universities-coventry.png";

interface DesktopMegaMenuProps {
  activeDropdown: string | null;
}

export const DesktopMegaMenu = ({ activeDropdown }: DesktopMegaMenuProps) => {
  const [activeUniversity, setActiveUniversity] = useState<"NOVA" | "COVENTRY">("NOVA");

  return (
    <div
      className={`border-t border-stroke-primary/50 grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
        activeDropdown ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="min-h-0 overflow-hidden">
        <div className="gap-4xl p-2xl flex items-start justify-center">
          {activeDropdown === "Universities" && (
            <>
              {/* Left Column: Universities selection */}
              <ul className="gap-m flex w-150 shrink-0 flex-col">
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
                    <img src={NOVA} className="w-auto h-14 shrink-0" alt="NOVA" />
                    <p className="text-content-secondary min-w-0 flex-1 text-[16px]">
                      Pursue world-class European education from top-ranked NOVA Lisbon
                    </p>
                  </div>

                  <ChevronRight className={`w-6 h-6 text-text-primary shrink-0 transition-opacity duration-300 ${activeUniversity === "NOVA" ? "opacity-100" : "opacity-0"}`} />
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
                    <img src={COVENTRY} className="w-auto h-14 shrink-0" alt="Coventry" />
                    <p className="text-body-2 text-text-secondary leading-snug">
                      Earn a UK degree in Engineering, Computing, Business, or Design.
                    </p>
                  </div>
                  <ChevronRight className={`w-6 h-6 text-text-primary shrink-0 transition-opacity duration-300 ${activeUniversity === "COVENTRY" ? "opacity-100" : "opacity-0"}`} />
                </div>
              </ul>

              {/* Separator */}
              <div className="bg-stroke-primary/50 w-px self-stretch"></div>

              {/* Middle Column: Links */}
              <nav className="gap-s py-m flex flex-1 flex-col px-0">
                {[
                  activeUniversity === "NOVA" ? "About NOVA University" : "About Coventry University",
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
              </nav>

              {/* Right Column: Image */}
              <div className="relative h-73.25 w-130 shrink-0">
                <div className="absolute inset-0 w-full h-full overflow-hidden rounded-xl">
                  <img
                    key={activeUniversity}
                    src={activeUniversity === "NOVA" ? NovaMenuImg : CoventryMenuImg}
                    alt={`${activeUniversity} Campus`}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </>
          )}

          {/* Other Dropdowns */}
          {activeDropdown === "Study" && (
            <div className="py-xl flex flex-col gap-m w-full">
              <h3 className="text-h4 font-bold text-text-primary">Study at TKH</h3>
              <p className="text-text-secondary max-w-md">
                Explore our wide range of undergraduate and postgraduate programs designed to prepare you for a global career.
              </p>
            </div>
          )}
          {activeDropdown === "Campus Life" && (
            <div className="py-xl flex flex-col gap-m w-full">
              <h3 className="text-h4 font-bold text-text-primary">Campus Life</h3>
              <p className="text-text-secondary max-w-md">
                Discover our vibrant student community, world-class facilities, clubs, and sports activities on campus.
              </p>
            </div>
          )}
          {activeDropdown === "Admissions" && (
            <div className="py-xl flex flex-col gap-m w-full">
              <h3 className="text-h4 font-bold text-text-primary">Admissions</h3>
              <p className="text-text-secondary max-w-md">
                Learn everything you need to know about our application process, requirements, and important deadlines.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
