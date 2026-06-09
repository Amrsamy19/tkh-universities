import { useState } from "react";
import NOVA from "../../assets/svg/menu-logo-nova.svg";
import COVENTRY from "../../assets/svg/menu-logo-coventry.svg";
import { StudyMenuPill } from "./StudyMenuPill";
import { UniversityMenuPill } from "./UniversityMenuPill";
import { MenuLink } from "./MenuLink";
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

  const studyLinks: Record<string, string[]> = {
    UNDERGRAD: [],
    POSTGRAD: [
      "All Programs",
      "Design & Media",
      "Engineering",
      "Physiotherapy",
      "Psychology",
      "Business",
    ],
    CONTINUING: [
      "All Programs",
      "Design",
      "Engineering",
      "Business",
      "English",
    ],
  };

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
                <UniversityMenuPill
                  imageSrc={NOVA}
                  imageAlt="NOVA"
                  description="Pursue world-class European education from top-ranked NOVA Lisbon"
                  isActive={activeUniversity === "NOVA"}
                  onMouseEnter={() => setActiveUniversity("NOVA")}
                />

                {/* Coventry Pill */}
                <UniversityMenuPill
                  imageSrc={COVENTRY}
                  imageAlt="Coventry"
                  description="Earn a UK degree in Engineering, Computing, Business, or Design."
                  isActive={activeUniversity === "COVENTRY"}
                  onMouseEnter={() => setActiveUniversity("COVENTRY")}
                />
              </ul>

              {/* Separator */}
              <div className="bg-stroke-primary/50 w-px self-stretch"></div>

              {/* Middle Column: Links */}
              <nav className="gap-s py-m flex flex-col items-start justify-start px-0 w-64">
                {[
                  activeUniversity === "NOVA"
                    ? "About NOVA University"
                    : "About Coventry University",
                  "Tuition Fees",
                  "Admission Criteria",
                  "Schools and programs",
                ].map((link: string) => (
                  <MenuLink key={link}>{link}</MenuLink>
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
                <StudyMenuPill
                  title="Undergraduates"
                  description="Explore 20+ programs in different majors"
                  isActive={activeStudy === "UNDERGRAD"}
                  onMouseEnter={() => setActiveStudy("UNDERGRAD")}
                />

                {/* Postgraduates Pill */}
                <StudyMenuPill
                  title="Postgraduates"
                  description="Explore 10+ programs in different majors"
                  isActive={activeStudy === "POSTGRAD"}
                  onMouseEnter={() => setActiveStudy("POSTGRAD")}
                />

                {/* Continuing Education Pill */}
                <StudyMenuPill
                  title="Continuing Education"
                  description="Explore 15+ programs in different majors"
                  isActive={activeStudy === "CONTINUING"}
                  onMouseEnter={() => setActiveStudy("CONTINUING")}
                />
              </ul>

              {/* Middle Column: Links */}
              <nav className="gap-m py-l flex flex-col px-0 justify-start pl-xl border-l border-stroke-primary/50 w-64">
                {studyLinks[activeStudy].map((link: string) => (
                  <MenuLink key={link}>{link}</MenuLink>
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
