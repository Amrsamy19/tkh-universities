import React, { useState } from "react";
import { Search, ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import { Button } from "./ui/Button";
import { Logo } from "../assets/svg/Logo";
import { Separator } from "./ui/Separator";
import { DesktopMegaMenu } from "./ui/DesktopMegaMenu";
import NOVA from "../assets/svg/menu-logo-nova.svg";
import COVENTRY from "../assets/svg/menu-logo-coventry.svg";
import Menu from "../assets/svg/ArrowLineDownLeft.svg";
import Close from "../assets/svg/Close.svg";
import { studyPills, campusPills, admissionPills } from "../lib/menuData";
import { useScreenSize } from "../hooks/useScreenSize";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<
    string | null
  >(null);
  const screenSize = useScreenSize();

  const topLinks = [
    { label: "Coventry University", href: "#" },
    { label: "NOVA University", href: "#" },
    { label: "Alumni", href: "#" },
    { label: "News", href: "#" },
    { label: "Events", href: "#" },
  ];

  const mainLinks = [
    { label: "Universities", href: "#", hasDropdown: true },
    { label: "Study", href: "#", hasDropdown: true },
    { label: "Campus Life", href: "#", hasDropdown: true },
    { label: "Admissions", href: "#", hasDropdown: true },
    { label: "International Students", href: "#" },
    { label: "About TKH", href: "#" },
  ];

  return (
    <>
      {/* --- Desktop Navbar --- */}
      <header className="hidden xl:block fixed inset-x-0 top-0 z-50 px-12 pt-10 pointer-events-none">
        <nav className="pointer-events-auto flex flex-col w-full bg-surface-primary/70 backdrop-blur-md transition-all duration-300 rounded-4xl shadow-lg border border-white/20 overflow-hidden">
          {/* Top Bar */}
          <div className="flex justify-between items-center px-5xl py-s border-b border-stroke-primary">
            <div className="flex items-center gap-xl">
              {topLinks.map((link, index) => (
                <React.Fragment key={link.label}>
                  <a
                    href={link.href}
                    className="text-caption-1 font-futura font-normal text-text-primary hover:text-text-tkh-primary transition-colors"
                  >
                    {link.label}
                  </a>
                  {index === 1 && (
                    <Separator orientation="vertical" className="h-4" />
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-xs text-caption-1 font-normal text-text-primary hover:text-text-tkh-primary bg-transparent hover:bg-transparent transition-colors cursor-pointer">
                <Search className="size-4.5" />
                Search
              </span>
              <a
                href="#"
                className="text-caption-1 font-normal text-text-primary hover:text-text-tkh-primary transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Main Bar */}
          <div className="flex justify-between items-center ps-10 pe-6 py-s">
            {/* Logo Placeholder */}
            <Logo />

            {/* Links */}
            <div className="flex items-center gap-xl">
              {mainLinks.map((link) => (
                <div key={link.label} className="group relative">
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.hasDropdown) {
                        e.preventDefault();
                        setActiveDropdown(
                          activeDropdown === link.label ? null : link.label,
                        );
                      } else {
                        setActiveDropdown(null);
                      }
                    }}
                    className="flex items-center gap-xs text-button-2 font-medium text-text-primary hover:text-text-tkh-primary transition-colors py-m cursor-pointer"
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${activeDropdown === link.label ? "rotate-180" : ""}`}
                      />
                    )}
                  </a>
                </div>
              ))}
            </div>

            <Button variant="primary" size="desktop">
              Apply Now
            </Button>
          </div>

          {/* Desktop Mega Menu Dropdown */}
          <DesktopMegaMenu activeDropdown={activeDropdown} />
        </nav>
      </header>

      {/* --- Mobile/Tablet Navbar --- */}
      <header className="xl:hidden fixed top-8 inset-x-8 z-50 pointer-events-none">
        <div className="pointer-events-auto bg-surface-primary/70 backdrop-blur-md  rounded-full px-s py-xxs flex justify-between items-center shadow-lg border border-white/20">
          <Logo />
          <Button
            icon={false}
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-xs text-icon-primary bg-transparent hover:bg-transparent cursor-pointer focus:outline-none"
            aria-label="Open mobile menu"
          >
            <img
              src={Menu}
              alt="Open mobile menu"
              className="w-6 h-6 hover:text-text-tkh-primary transition-colors"
            />
          </Button>
        </div>
      </header>

      {/* --- Mobile Menu Overlay --- */}
      <div
        className={`fixed inset-0 bg-surface-invert/40 backdrop-blur-sm z-100 xl:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`absolute top-4 inset-x-4 bottom-4 bg-surface-primary/70 backdrop-blur-md border border-white/20 rounded-4xl overflow-hidden shadow-2xl flex flex-col transition-all duration-300 ease-out ${
            isMobileMenuOpen
              ? "translate-y-0 scale-100"
              : "translate-y-4 scale-95"
          }`}
        >
          <div className="flex-1 overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-center p-l">
              <Logo />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-xs text-icon-inactive hover:text-icon-tkh-primary transition-colors cursor-pointer rounded-full"
                aria-label="Close mobile menu"
              >
                <img src={Close} alt="Close mobile menu" className="w-6 h-6" />
              </button>
            </div>

            {/* Search */}
            <div className="px-0">
              <div className="flex items-center gap-s text-neutral-700 bg-surface-primary/70 px-s py-s border-b border-b-neutral-700 transition-all">
                <Search className="w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent outline-none w-full text-body-2 placeholder:text-neutral-700"
                />
              </div>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col p-l">
              {mainLinks.map((link) => {
                const isOpen = activeMobileDropdown === link.label;

                if (!link.hasDropdown) {
                  return (
                    <div className="transition-all duration-300 p-xs">
                      <a
                        key={link.label}
                        href={link.href}
                        className="flex justify-between items-center py-s px-xs text-button-2 font-medium text-text-primary"
                      >
                        {link.label}
                      </a>
                    </div>
                  );
                }

                return (
                  <div
                    key={link.label}
                    className={`transition-all duration-300 ${isOpen ? "bg-[rgba(239,241,244,0.7)] rounded-3xl p-s" : "p-xs"}`}
                  >
                    <button
                      className="w-full flex justify-between items-center py-s px-xs text-button-2 font-medium text-text-primary focus:outline-none bg-transparent cursor-pointer group"
                      onClick={() =>
                        setActiveMobileDropdown(isOpen ? null : link.label)
                      }
                    >
                      {link.label}
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-icon-primary" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-icon-primary" />
                      )}
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 mt-s"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden flex flex-col gap-s">
                        {link.label === "Universities" && (
                          <>
                            <a
                              href="#"
                              className="flex justify-between items-center p-m rounded-s group transition-all"
                            >
                              <div>
                                <img
                                  src={NOVA}
                                  alt="NOVA"
                                  className="h-6 w-auto mb-2"
                                />
                                <p className="text-sm text-text-secondary mt-xs group-hover:text-text-primary transition-colors leading-tight">
                                  Pursue world-class European education from
                                  top-ranked NOVA Lisbon.
                                </p>
                              </div>
                              <ChevronRight className="w-4 h-4 text-icon-inactive group-hover:text-icon-tkh-primary shrink-0 ml-m" />
                            </a>
                            <a
                              href="#"
                              className="flex justify-between items-center p-m rounded-s group transition-all"
                            >
                              <div>
                                <img
                                  src={COVENTRY}
                                  alt="Coventry"
                                  className="h-8 w-auto mb-2"
                                />
                                <p className="text-sm text-text-secondary mt-xs group-hover:text-text-primary transition-colors leading-tight">
                                  Earn a UK degree in Engineering, Computing,
                                  Business, or Design.
                                </p>
                              </div>
                              <ChevronRight className="w-4 h-4 text-icon-inactive group-hover:text-icon-tkh-primary shrink-0 ml-m" />
                            </a>
                          </>
                        )}
                        {link.label === "Study" &&
                          studyPills.map((pill) => (
                            <a
                              key={pill.id}
                              href="#"
                              className="flex justify-between items-center p-m rounded-s group transition-all"
                            >
                              <div>
                                <div className="font-medium text-button-2">
                                  {pill.title}
                                </div>
                                <p className="text-sm text-text-secondary mt-xs group-hover:text-text-primary transition-colors leading-tight">
                                  {pill.description}
                                </p>
                              </div>
                              <ChevronRight className="w-4 h-4 text-icon-inactive group-hover:text-icon-tkh-primary shrink-0 ml-m" />
                            </a>
                          ))}
                        {link.label === "Campus Life" &&
                          campusPills.map((pill) => (
                            <a
                              key={pill.id}
                              href="#"
                              className="flex justify-between items-center p-m rounded-s group transition-all"
                            >
                              <div>
                                <div className="font-medium text-button-2">
                                  {pill.title}
                                </div>
                                <p className="text-sm text-text-secondary mt-xs group-hover:text-text-primary transition-colors leading-tight">
                                  {pill.description}
                                </p>
                              </div>
                              <ChevronRight className="w-4 h-4 text-icon-inactive group-hover:text-icon-tkh-primary shrink-0 ml-m" />
                            </a>
                          ))}
                        {link.label === "Admissions" &&
                          admissionPills.map((pill) => (
                            <a
                              key={pill.id}
                              href="#"
                              className="flex justify-between items-center p-m rounded-s group transition-all"
                            >
                              <div>
                                <div className="font-medium text-button-2">
                                  {pill.title}
                                </div>
                                <p className="text-sm text-text-secondary mt-xs group-hover:text-text-primary transition-colors leading-tight">
                                  {pill.description}
                                </p>
                              </div>
                              <ChevronRight className="w-4 h-4 text-icon-inactive group-hover:text-icon-tkh-primary shrink-0 ml-m" />
                            </a>
                          ))}
                      </div>
                    </div>
                  </div>
                );
              })}

              <Separator
                orientation="horizontal"
                className="mt-m g-stroke-primary"
              />
              <div className="flex flex-col gap-m pt-m pb-l">
                <a
                  href="#"
                  className="text-button-2 font-medium text-text-primary hover:text-text-tkh-primary transition-colors pl-s"
                >
                  Coventry University
                </a>
                <a
                  href="#"
                  className="text-button-2 font-medium text-text-primary hover:text-text-tkh-primary transition-colors pl-s"
                >
                  NOVA University
                </a>
                <div className="flex gap-m pl-s">
                  <a
                    href="#"
                    className="text-button-2 font-medium text-text-primary hover:text-text-tkh-primary transition-colors"
                  >
                    Alumni
                  </a>
                  <a
                    href="#"
                    className="text-button-2 font-medium text-text-primary hover:text-text-tkh-primary transition-colors"
                  >
                    News
                  </a>
                  <a
                    href="#"
                    className="text-button-2 font-medium text-text-primary hover:text-text-tkh-primary transition-colors"
                  >
                    Events
                  </a>
                </div>
                <a
                  href="#"
                  className="text-button-2 font-medium text-text-primary hover:text-text-tkh-primary transition-colors pl-s"
                >
                  Contact Us
                </a>
                <div className="w-1/2">
                  <Button variant="primary" size={screenSize}>
                    Apply Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
