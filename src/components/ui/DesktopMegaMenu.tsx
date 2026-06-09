import { useState } from "react";
import { ChevronRight } from "lucide-react";
import NOVA from "../../assets/svg/menu-logo-nova.svg";
import COVENTRY from "../../assets/svg/menu-logo-coventry.svg";
import NovaMenuImg from "../../assets/media/menu-universities-nova.png";
import CoventryMenuImg from "../../assets/media/menu-universities-coventry.png";
import StudyMenuImg from "../../assets/media/menu-study.png";

interface DesktopMegaMenuProps {
  activeDropdown: string | null;
}

export const DesktopMegaMenu = ({ activeDropdown }: DesktopMegaMenuProps) => {
  const [activeUniversity, setActiveUniversity] = useState<"NOVA" | "COVENTRY">(
    "NOVA",
  );
  const [activeStudy, setActiveStudy] = useState<
    "UNDERGRAD" | "POSTGRAD" | "CONTINUING"
  >("UNDERGRAD");

  return (
    <div
      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
        activeDropdown
          ? "grid-rows-[1fr] opacity-100"
          : "grid-rows-[0fr] opacity-0"
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
                  className={`rounded-3xl gap-l flex items-center justify-between cursor-pointer transition-all duration-300 ${
                    activeUniversity === "NOVA"
                      ? "bg-neutral-50/60"
                      : "bg-transparent hover:bg-neutral-50/60"
                  }`}
                >
                  <div className="flex w-full px-xl py-l gap-m items-center">
                    <img
                      src={NOVA}
                      className="w-auto h-14 shrink-0"
                      alt="NOVA"
                    />
                    <p className="text-neutral-700 min-w-0 font-futura flex-1 text-[16px]">
                      Pursue world-class European education from top-ranked NOVA
                      Lisbon
                    </p>
                    <ChevronRight className="w-6 h-6 text-text-primary shrink-0 transition-opacity duration-300" />
                  </div>
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
                    <p className="text-neutral-700 w-auto text-[16px]">
                      Earn a UK degree in Engineering, Computing, Business, or
                      Design.
                    </p>
                    <ChevronRight className="w-6 h-6 text-text-primary shrink-0 transition-opacity duration-300" />
                  </div>
                </div>
              </ul>

              {/* Separator */}
              <div className="bg-stroke-primary/50 w-px self-stretch"></div>

              {/* Middle Column: Links */}
              <nav className="gap-s py-m flex flex-1 flex-col px-0">
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
              </nav>

              {/* Right Column: Image */}
              <div className="relative h-73.25 w-130 shrink-0">
                <div className="absolute inset-0 w-full h-full overflow-hidden rounded-xl">
                  <img
                    key={activeUniversity}
                    src={
                      activeUniversity === "NOVA"
                        ? NovaMenuImg
                        : CoventryMenuImg
                    }
                    alt={`${activeUniversity} Campus`}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </>
          )}

          {/* Other Dropdowns */}
          {activeDropdown === "Study" && (
            <div className="flex justify-between items-stretch gap-xl min-h-88 w-full">
              {/* Left Column: Study selection */}
              <ul className="gap-m flex w-150 shrink-0 flex-col">
                {/* Undergraduates Pill */}
                <div
                  onMouseEnter={() => setActiveStudy("UNDERGRAD")}
                  className={`rounded-3xl gap-l flex items-center justify-between cursor-pointer transition-all duration-300 ${
                    activeStudy === "UNDERGRAD"
                      ? "bg-neutral-50/60"
                      : "bg-transparent hover:bg-neutral-50/60"
                  }`}
                >
                  <div className="flex w-full px-xl py-m gap-m items-center justify-between">
                    <div className="flex flex-col gap-xs">
                      <p className="text-neutral-700 min-w-0 font-futura font-bold text-[16px]">
                        Undergraduates
                      </p>
                      <p className="text-text-secondary text-[14px]">
                        Explore 20+ programs in different majors
                      </p>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-text-primary shrink-0 transition-opacity duration-300 ${activeStudy === "UNDERGRAD" ? "opacity-100" : "opacity-0"}`} />
                  </div>
                </div>

                {/* Postgraduates Pill */}
                <div
                  onMouseEnter={() => setActiveStudy("POSTGRAD")}
                  className={`rounded-3xl gap-l flex items-center justify-between cursor-pointer transition-all duration-300 ${
                    activeStudy === "POSTGRAD"
                      ? "bg-neutral-50/60"
                      : "bg-transparent hover:bg-neutral-50/60"
                  }`}
                >
                  <div className="flex w-full px-xl py-m gap-m items-center justify-between">
                    <div className="flex flex-col gap-xs">
                      <p className="text-neutral-700 min-w-0 font-futura font-bold text-[16px]">
                        Postgraduates
                      </p>
                      <p className="text-text-secondary text-[14px]">
                        Explore 10+ programs in different majors
                      </p>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-text-primary shrink-0 transition-opacity duration-300 ${activeStudy === "POSTGRAD" ? "opacity-100" : "opacity-0"}`} />
                  </div>
                </div>

                {/* Continuing Education Pill */}
                <div
                  onMouseEnter={() => setActiveStudy("CONTINUING")}
                  className={`rounded-3xl gap-l flex items-center justify-between cursor-pointer transition-all duration-300 ${
                    activeStudy === "CONTINUING"
                      ? "bg-neutral-50/60"
                      : "bg-transparent hover:bg-neutral-50/60"
                  }`}
                >
                  <div className="flex w-full px-xl py-m gap-m items-center justify-between">
                    <div className="flex flex-col gap-xs">
                      <p className="text-neutral-700 min-w-0 font-futura font-bold text-[16px]">
                        Continuing Education
                      </p>
                      <p className="text-text-secondary text-[14px]">
                        Explore 15+ programs in different majors
                      </p>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-text-primary shrink-0 transition-opacity duration-300 ${activeStudy === "CONTINUING" ? "opacity-100" : "opacity-0"}`} />
                  </div>
                </div>
              </ul>

              {/* Middle Column: Links */}
              <nav className="gap-m py-l flex flex-1 flex-col px-0 justify-center pl-xl border-l border-stroke-primary/50">
                {[
                  "All Programs",
                  "Design & Media",
                  "Engineering",
                  "Physiotherapy",
                  "Psychology",
                  "Business",
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
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img
                    src={StudyMenuImg}
                    alt="Students studying"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          )}
          {activeDropdown === "Campus Life" && (
            <div className="py-xl flex flex-col gap-m w-full">
              <h3 className="text-h4 font-bold text-text-primary">
                Campus Life
              </h3>
              <p className="text-text-secondary max-w-md">
                Discover our vibrant student community, world-class facilities,
                clubs, and sports activities on campus.
              </p>
            </div>
          )}
          {activeDropdown === "Admissions" && (
            <div className="py-xl flex flex-col gap-m w-full">
              <h3 className="text-h4 font-bold text-text-primary">
                Admissions
              </h3>
              <p className="text-text-secondary max-w-md">
                Learn everything you need to know about our application process,
                requirements, and important deadlines.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
