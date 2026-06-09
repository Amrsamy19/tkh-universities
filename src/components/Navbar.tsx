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
      <nav
        className="hidden fixed inset-x-0 px-10 pt-4 lg:top-0 lg:px-12 lg:pt-xl top-6 lg:flex flex-col w-[calc(100%-var(--spacing-xl)*2)] mt-14 bg-white/70 backdrop-blur-md absolute top-0 z-50 transition-all duration-300 rounded-xl overflow-hidden"
        onMouseLeave={() => setActiveDropdown(null)}
      >
        {/* Top Bar */} 
        <div className="flex justify-between items-center py-s px-2xl border-b border-neutral-200/50">
          <div className="flex items-center gap-l">
            {topLinks.map((link, index) => (
              <React.Fragment key={link.label}>
                <a
                  href={link.href}
                  className="text-[16px] font-normal text-neutral-700 hover:text-brand-orange-200 transition-colors"
                >
                  {link.label}
                </a>
                {index === 1 && <span className="text-neutral-300">|</span>}
              </React.Fragment>
            ))}
          </div>
          <div className="flex items-center gap-l">
            <button className="flex items-center gap-xs text-[16px] font-normal text-neutral-700 hover:text-brand-orange-200 transition-colors cursor-pointer">
              <Search className="w-[14px] h-[14px]" />
              Search
            </button>
            <a
              href="#"
              className="text-[16px] font-normal text-neutral-700 hover:text-brand-orange-200 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Main Bar */}
        <div className="flex justify-between items-center ps-10 pe-6">
          {/* Logo Placeholder */}
          <Logo />

          {/* Links */}
          <div className="flex items-center gap-xl">
            {mainLinks.map((link) => (
              <div key={link.label} className="group relative">
                <a
                  href={link.href}
                  onMouseEnter={() => {
                    if (link.hasDropdown) {
                      setActiveDropdown(link.label);
                    } else {
                      setActiveDropdown(null);
                    }
                  }}
                  onClick={(e) => {
                    if (link.hasDropdown) {
                      e.preventDefault();
                    }
                  }}
                  className="flex items-center gap-xs text-[16px] font-normal text-brand-blue-400 hover:text-brand-orange-200 transition-colors py-m cursor-pointer"
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown
                      className={`w-[16px] h-[16px] transition-transform ${activeDropdown === link.label ? "rotate-180" : "group-hover:rotate-180"}`}
                    />
                  )}
                </a>
              </div>
            ))}
          </div>

          <div>
            <Button variant="primary" size="desktop">
              Apply Now
            </Button>
          </div>
        </div>

        {/* Desktop Mega Menu Dropdown */}
        {activeDropdown === "Universities" && (
          <div className="px-2xl pb-2xl pt-m border-t border-neutral-200/50 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="grid grid-cols-12 gap-xl items-stretch">
              {/* Left Column: Universities selection */}
              <div className="col-span-5 flex flex-col gap-m pr-xl">
                {/* NOVA Pill */}
                <div className="bg-white rounded-[24px] p-l shadow-sm flex items-center justify-between cursor-pointer border border-neutral-100 group transition-all">
                  <div className="flex gap-l items-center">
                    <div className="w-[120px] shrink-0 font-bold text-3xl tracking-tighter flex items-center">
                      N<span className="text-green-500">O</span>VA
                    </div>
                    <p className="text-caption-2 text-neutral-500 leading-snug">
                      Pursue world-class European education from top-ranked NOVA
                      Lisbon
                    </p>
                  </div>
                  <ChevronRight className="w-[20px] h-[20px] text-neutral-400 group-hover:text-brand-orange-200 transition-colors shrink-0" />
                </div>

                {/* Coventry Pill */}
                <div className="rounded-[24px] p-l flex items-center justify-between cursor-pointer hover:bg-white/50 border border-transparent transition-all group">
                  <div className="flex gap-l items-center">
                    <div className="w-[120px] shrink-0 text-[#005596] font-bold text-xl leading-tight">
                      Coventry
                      <br />
                      University
                    </div>
                    <p className="text-caption-2 text-neutral-500 leading-snug">
                      Earn a UK degree in Engineering, Computing, Business, or
                      Design.
                    </p>
                  </div>
                  <ChevronRight className="w-[20px] h-[20px] text-neutral-400 group-hover:text-brand-orange-200 transition-colors shrink-0" />
                </div>
              </div>

              {/* Middle Column: Links */}
              <div className="col-span-3 flex flex-col justify-center gap-l pl-xl border-l border-neutral-200/50">
                {[
                  "About NOVA University",
                  "Tuition Fees",
                  "Admission Criteria",
                  "Schools and programs",
                ].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-button-2 font-medium text-neutral-700 hover:text-brand-orange-200 transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>

              {/* Right Column: Image */}
              <div className="col-span-4 relative min-h-[250px]">
                <div
                  className="absolute inset-0 bg-neutral-200 overflow-hidden"
                  style={{
                    clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
                  }}
                >
                  {/* Placeholder image resembling campus */}
                  <img
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop"
                    alt="NOVA University Campus"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* --- Mobile/Tablet Floating Navbar --- */}
      <nav className="lg:hidden absolute top-xl left-xl right-xl z-50">
        <div className="bg-white/70 backdrop-blur-md rounded-full px-l py-m flex justify-between items-center shadow-lg border border-white/20">
          <Logo />
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-xs text-brand-blue-400 hover:text-brand-orange-200 transition-colors cursor-pointer focus:outline-none"
            aria-label="Open mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* --- Mobile Menu Overlay --- */}
      <div
        className={`fixed inset-0 bg-neutral-900/40 backdrop-blur-sm z-100 lg:hidden transition-opacity duration-300 ${
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
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-xs text-neutral-500 hover:text-brand-orange-200 transition-colors cursor-pointer rounded-full hover:bg-neutral-50"
                aria-label="Close mobile menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Search */}
            <div className="p-l bg-neutral-50 border-b border-neutral-100">
              <div className="flex items-center gap-s text-neutral-500 bg-white px-m py-s rounded-full border border-neutral-200 focus-within:border-brand-orange-200 focus-within:ring-2 focus-within:ring-brand-orange-100 transition-all">
                <Search className="w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent outline-none w-full text-body-2 placeholder:text-neutral-400"
                />
              </div>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col p-l gap-m">
              {/* Universities Accordion */}
              <div className="bg-neutral-50 rounded-l p-m border border-neutral-100">
                <button
                  className="w-full flex justify-between items-center text-button-2 text-brand-blue-400 focus:outline-none cursor-pointer group"
                  onClick={() => setIsUniversitiesOpen(!isUniversitiesOpen)}
                >
                  Universities
                  <div className="p-xs rounded-full bg-white group-hover:bg-brand-orange-50 transition-colors shadow-sm">
                    {isUniversitiesOpen ? (
                      <ChevronUp className="w-4 h-4 text-brand-blue-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-brand-blue-400" />
                    )}
                  </div>
                </button>

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
                        <p className="text-caption-2 text-neutral-500 mt-xs group-hover:text-brand-blue-400 transition-colors leading-tight">
                          Pursue world-class European education from top-ranked
                          NOVA Lisbon.
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-neutral-300 group-hover:text-brand-orange-200 shrink-0 ml-m" />
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
                        <p className="text-caption-2 text-neutral-500 mt-xs group-hover:text-brand-blue-400 transition-colors leading-tight">
                          Earn a UK degree in Engineering, Computing, Business,
                          or Design.
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-neutral-300 group-hover:text-brand-orange-200 shrink-0 ml-m" />
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
                      className="flex justify-between items-center py-m text-button-2 text-brand-blue-400 border-b border-neutral-100 last:border-0 hover:text-brand-orange-200 transition-colors group"
                    >
                      {link.label}
                      {link.hasDropdown && (
                        <ChevronDown className="w-5 h-5 text-neutral-300 group-hover:text-brand-orange-200 transition-colors" />
                      )}
                    </a>
                  ))}
              </div>

              <div className="mt-l flex flex-col gap-m px-xs border-t border-neutral-100 pt-l">
                <a
                  href="#"
                  className="text-body-2 text-neutral-700 hover:text-brand-orange-200 transition-colors font-medium"
                >
                  Coventry University
                </a>
                <a
                  href="#"
                  className="text-body-2 text-neutral-700 hover:text-brand-orange-200 transition-colors font-medium"
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
