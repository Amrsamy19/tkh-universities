import React, { useState } from "react";
import {
  Menu,
  X,
  Search,
  ChevronDown,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import { Button } from "./ui/Button";
import { Logo } from "../assets/svg/Logo";
import { Separator } from "./ui/Separator";
import { DesktopMegaMenu } from "./ui/DesktopMegaMenu";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isUniversitiesOpen, setIsUniversitiesOpen] = useState(false);

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
      <header className="hidden lg:block fixed inset-x-0 top-0 z-50 px-12 pt-10 pointer-events-none">
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
                  {index === 1 && <Separator orientation="vertical" className="h-4" />}
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
      <header className="lg:hidden fixed top-6 inset-x-6 z-50 pointer-events-none">
        <div className="bg-surface-primary/70 pointer-events-auto backdrop-blur-md rounded-full px-l py-m flex justify-between items-center shadow-lg border border-white/20">
          <Logo />
          <Button
            icon={false}
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-xs text-icon-primary hover:text-icon-tkh-primary bg-transparent hover:transparent transition-colors cursor-pointer focus:outline-none"
            aria-label="Open mobile menu"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </header>

      {/* --- Mobile Menu Overlay --- */}
      <div
        className={`fixed inset-0 bg-surface-invert/40 backdrop-blur-sm z-100 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-100 bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex-1 overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-center p-l border-b border-neutral-100">
              <Logo />
              <Button
                icon={false}
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-xs text-icon-inactive hover:text-icon-tkh-primary bg-transparent hover:transparent  transition-colors cursor-pointer rounded-full hover:bg-neutral-50"
                aria-label="Close mobile menu"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

            {/* Search */}
            <div className="p-l bg-neutral-50 border-b border-stroke-primary/30">
              <div className="flex items-center gap-s text-icon-inactive bg-white px-m py-s rounded-full border border-stroke-primary focus-within:border-stroke-tkh-primary focus-within:ring-2 focus-within:ring-surface-tkh-primary/20 transition-all">
                <Search className="w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent outline-none w-full text-body-2 placeholder:text-text-inactive"
                />
              </div>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col p-l gap-m">
              {/* Universities Accordion */}
              <div className="bg-neutral-50 rounded-l p-m border border-stroke-primary/30">
                <Button
                  icon={false}
                  className="w-full flex justify-between items-center text-button-2 font-medium text-text-primary focus:outline-none bg-transparent hover:transparent  cursor-pointer group"
                  onClick={() => setIsUniversitiesOpen(!isUniversitiesOpen)}
                >
                  Universities
                  <div className="p-xs rounded-full bg-white group-hover:bg-brand-orange-50 transition-colors shadow-sm">
                    {isUniversitiesOpen ? (
                      <ChevronUp className="w-4 h-4 text-icon-primary" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-icon-primary" />
                    )}
                  </div>
                </Button>

                {/* Accordion Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isUniversitiesOpen
                      ? "grid-rows-[1fr] opacity-100 mt-m"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden flex flex-col gap-s">
                    <a
                      href="#"
                      className="flex justify-between items-center bg-white p-m rounded-s shadow-sm border border-neutral-100 hover:border-brand-orange-200 group transition-all"
                    >
                      <div>
                        {/* TODO: Replace with actual NOVA SVG logo */}
                        <div className="font-bold text-h4 tracking-tighter text-black">
                          NOVA
                        </div>
                        <p className="text-caption-2 text-text-secondary mt-xs group-hover:text-text-primary transition-colors leading-tight">
                          Pursue world-class European education from top-ranked
                          NOVA Lisbon.
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-icon-inactive group-hover:text-icon-tkh-primary shrink-0 ml-m" />
                    </a>

                    <a
                      href="#"
                      className="flex justify-between items-center bg-white p-m rounded-s shadow-sm border border-neutral-100 hover:border-brand-orange-200 group transition-all"
                    >
                      <div>
                        {/* TODO: Replace with actual Coventry SVG logo */}
                        <div className="font-bold text-h5 text-[#006E9A] leading-tight">
                          Coventry
                          <br />
                          University
                        </div>
                        <p className="text-caption-2 text-text-secondary mt-xs group-hover:text-text-primary transition-colors leading-tight">
                          Earn a UK degree in Engineering, Computing, Business,
                          or Design.
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-icon-inactive group-hover:text-icon-tkh-primary shrink-0 ml-m" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Other Links */}
              <div className="flex flex-col px-xs">
                {mainLinks
                  .filter((l) => l.label !== "Universities")
                  .map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="flex justify-between items-center py-m text-button-2 text-text-primary border-b border-stroke-primary/30 last:border-0 hover:text-text-tkh-primary transition-colors group"
                    >
                      {link.label}
                      {link.hasDropdown && (
                        <ChevronDown className="w-5 h-5 text-icon-inactive group-hover:text-icon-tkh-primary transition-colors" />
                      )}
                    </a>
                  ))}
              </div>

              <div className="mt-l flex flex-col gap-m px-xs border-t border-stroke-primary/30 pt-l">
                <a
                  href="#"
                  className="text-body-2 text-text-secondary hover:text-text-tkh-primary transition-colors font-medium"
                >
                  Coventry University
                </a>
                <a
                  href="#"
                  className="text-body-2 text-text-secondary hover:text-text-tkh-primary transition-colors font-medium"
                >
                  NOVA University
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
