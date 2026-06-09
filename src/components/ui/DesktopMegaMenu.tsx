import { useState } from "react";
import NOVA from "../../assets/svg/menu-logo-nova.svg";
import COVENTRY from "../../assets/svg/menu-logo-coventry.svg";
import { StudyMenuPill } from "./StudyMenuPill";
import { UniversityMenuPill } from "./UniversityMenuPill";
import { MenuLink } from "./MenuLink";
import NovaMenuImg from "../../assets/media/menu-universities-nova.png";
import CoventryMenuImg from "../../assets/media/menu-universities-coventry.png";
import StudyMenuImg from "../../assets/media/menu-study.png";
import CampusLifeMenuImg from "../../assets/media/menu-campus-life.png";
import { Separator } from "./Separator";
import { studyPills, campusPills, admissionPills } from "../../lib/menuData";

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
  const [activeCampus, setActiveCampus] = useState<
    "STUDENT_LIFE" | "SERVICES" | "SUPPORT"
  >("STUDENT_LIFE");
  const [activeAdmission, setActiveAdmission] = useState<
    "ENTRY_CRITERIA" | "TUITION_FEES" | "HOW_TO_APPLY"
  >("ENTRY_CRITERIA");

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

  const campusLinks: Record<string, string[]> = {
    STUDENT_LIFE: [
      "Student Union",
      "Student Activities",
      "Development Programs",
      "Clubs & Societies",
      "Career Office",
      "Policy",
    ],
    SERVICES: ["Accomodation", "Transportation"],
    SUPPORT: ["Wellbeing", "Counseling", "IT Support", "Medical Support"],
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
                <li>
                  <UniversityMenuPill
                    imageSrc={NOVA}
                    imageAlt="NOVA"
                    description="Pursue world-class European education from top-ranked NOVA Lisbon"
                    isActive={activeUniversity === "NOVA"}
                    onMouseEnter={() => setActiveUniversity("NOVA")}
                  />
                </li>

                {/* Coventry Pill */}
                <li>
                  <UniversityMenuPill
                    imageSrc={COVENTRY}
                    imageAlt="Coventry"
                    description="Earn a UK degree in Engineering, Computing, Business, or Design."
                    isActive={activeUniversity === "COVENTRY"}
                    onMouseEnter={() => setActiveUniversity("COVENTRY")}
                  />
                </li>
              </ul>

              {/* Separator */}
              <Separator orientation="vertical" className="h-73.25" />

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
            <>
              {/* Left Column: Study selection */}
              <ul className="gap-m flex w-150 shrink-0 flex-col">
                {studyPills.map((pill) => (
                  <li>
                    <StudyMenuPill
                      key={pill.id}
                      title={pill.title}
                      description={pill.description}
                      isActive={activeStudy === pill.id}
                      onMouseEnter={() => setActiveStudy(pill.id)}
                    />
                  </li>
                ))}
              </ul>
              {/* Separator */}
              <Separator orientation="vertical" className="h-73.25" />

              {/* Middle Column: Links */}
              <nav className="gap-m py-m flex flex-1 flex-col px-0 justify-start">
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
            </>
          )}
          {activeDropdown === "Campus Life" && (
            <>
              {/* Left Column: Campus Life selection */}
              <ul className="gap-m flex w-150 shrink-0 flex-col">
                {campusPills.map((pill) => (
                  <li>
                    <StudyMenuPill
                      key={pill.id}
                      title={pill.title}
                      description={pill.description}
                      isActive={activeCampus === pill.id}
                      onMouseEnter={() => setActiveCampus(pill.id)}
                    />
                  </li>
                ))}
              </ul>

              {/* Separator */}
              <Separator orientation="vertical" className="h-73.25" />

              {/* Middle Column: Links */}
              <nav className="gap-m py-m flex flex-1 flex-col px-0 justify-start">
                {campusLinks[activeCampus].map((link: string) => (
                  <MenuLink key={link}>{link}</MenuLink>
                ))}
              </nav>

              {/* Right Column: Image */}
              <div className="relative h-73.25 w-130 shrink-0">
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img
                    src={CampusLifeMenuImg}
                    alt="Campus Life"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </>
          )}
          {activeDropdown === "Admissions" && (
            <>
              {/* Left Column: Admissions selection */}
              <ul className="gap-m flex w-150 shrink-0 flex-col">
                {admissionPills.map((pill) => (
                  <li>
                    <StudyMenuPill
                      key={pill.id}
                      title={pill.title}
                      description={pill.description}
                      isActive={activeAdmission === pill.id}
                      onMouseEnter={() => setActiveAdmission(pill.id)}
                    />
                  </li>
                ))}
              </ul>

              {/* Separator */}
              <Separator orientation="vertical" className="h-73.25" />

              {/* Right Column: Logos */}
              <div className="gap-xl px-2xl py-l flex flex-1 flex-col items-start">
                <img
                  src={NOVA}
                  alt="NOVA University"
                  className="h-14 w-auto cursor-pointer"
                />
                <img
                  src={COVENTRY}
                  alt="Coventry University"
                  className="h-14 w-auto cursor-pointer"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
