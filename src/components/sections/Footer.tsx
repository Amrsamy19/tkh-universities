import { Search, Phone, MapPin, Mail } from "lucide-react";
import { Button } from "../ui/Button";
import { Logo } from "../../assets/svg/Logo";
import FacebookLogo from "../../assets/svg/FacebookLogo.svg";
import InstagramLogo from "../../assets/svg/InstagramLogo.svg";
import LinkedinLogo from "../../assets/svg/LinkedinLogo.svg";
import { useScreenSize } from "../../hooks/useScreenSize";

export const Footer = () => {
  const screenSize = useScreenSize();

  return (
    <footer className="w-[calc(100%+var(--spacing-m)*2)] -ml-m bg-[linear-gradient(116.841deg,#1E2749_18.073%,#101828_49.291%,#27202F_80.509%)] text-white pt-4xl pb-2xl px-m lg:px-l xl:px-30 mt-4xl relative z-20">
      <div className="max-w-480 mx-auto flex flex-col gap-4xl">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-2xl lg:gap-xl">
          {/* Col 1: Logo & text */}
          <div className="flex flex-col items-start max-w-95">
            <div className="text-white mb-m">
              <Logo />
            </div>
            <p className="text-body-2 text-white/90 leading-relaxed">
              Earn a globally recognized degree from top-ranked partnered
              universities on our state-of-the-art campus located in Egypt.
            </p>
          </div>

          {/* Col 2: Contact Us */}
          <div className="flex flex-col gap-s items-start">
            <h4 className="text-h6 font-bold mb-xs">Contact Us</h4>

            <div className="flex items-center gap-xs">
              <Phone className="w-4 h-4 shrink-0 text-white/80" />
              <a
                href="tel:19940"
                className="text-body-2 hover:text-brand-orange-200 transition-colors"
              >
                19940 , +20 123 456 789
              </a>
            </div>

            <div className="flex items-start gap-xs">
              <MapPin className="w-4 h-4 shrink-0 text-white/80 mt-1" />
              <p className="text-body-2 leading-tight">
                New Administrative Capital, Residential Area 7, R7,{" "}
                <br className="hidden sm:block" />
                Cairo Governorate
              </p>
            </div>

            <div className="flex items-center gap-xs">
              <Mail className="w-4 h-4 shrink-0 text-white/80" />
              <a
                href="mailto:hello@tkh.edu.eg"
                className="text-body-2 hover:text-brand-orange-200 transition-colors"
              >
                hello@tkh.edu.eg
              </a>
            </div>

            <Button
              variant="primary"
              size={screenSize}
              className="rounded-full mt-m self-start px-l"
            >
              Apply Now
            </Button>
          </div>

          {/* Col 3: Search & Social */}
          <div className="flex flex-col items-start w-full max-w-120">
            <h4 className="text-h6 font-bold mb-m">
              Can't find what you're looking for?
            </h4>
            <div className="flex items-center gap-s w-full">
              <div className="flex-1 bg-white rounded-full flex items-center px-m h-12">
                <Search className="w-5 h-5 text-stroke-primary mr-s shrink-0" />
                <input
                  type="text"
                  placeholder="Search for program, Fees, University.."
                  className="w-full bg-transparent outline-none text-body-2 text-text-primary placeholder:text-text-inactive"
                />
              </div>
              <Button
                variant="primary"
                icon={false}
                size={screenSize}
                className="rounded-full shrink-0 h-12 px-l"
              >
                Search
              </Button>
            </div>

            <div className="flex items-center gap-s mt-l">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[rgba(44,42,97,0.3)] flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <img src={FacebookLogo} alt="Facebook" className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[rgba(44,42,97,0.3)] flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <img src={InstagramLogo} alt="Instagram" className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[rgba(44,42,97,0.3)] flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <img src={LinkedinLogo} alt="LinkedIn" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-l gap-y-12 lg:gap-xl">
          <div className="flex flex-col gap-m">
            <h4 className="text-h6 font-bold mb-xs">Universities</h4>
            <a
              href="#"
              className="text-body-2 hover:text-brand-orange-200 transition-colors"
            >
              Coventry University
            </a>
            <a
              href="#"
              className="text-body-2 hover:text-brand-orange-200 transition-colors"
            >
              NOVA University
            </a>
          </div>

          <div className="flex flex-col gap-m">
            <h4 className="text-h6 font-bold mb-xs">Study</h4>
            <a
              href="#"
              className="text-body-2 hover:text-brand-orange-200 transition-colors"
            >
              Undergraduate
            </a>
            <a
              href="#"
              className="text-body-2 hover:text-brand-orange-200 transition-colors"
            >
              Postgraduate
            </a>
            <a
              href="#"
              className="text-body-2 hover:text-brand-orange-200 transition-colors"
            >
              Continuing Education
            </a>
          </div>

          <div className="flex flex-col gap-m">
            <h4 className="text-h6 font-bold mb-xs">Campus Life</h4>
            <a
              href="#"
              className="text-body-2 hover:text-brand-orange-200 transition-colors"
            >
              Student Life
            </a>
            <a
              href="#"
              className="text-body-2 hover:text-brand-orange-200 transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="text-body-2 hover:text-brand-orange-200 transition-colors"
            >
              Support
            </a>
          </div>

          <div className="flex flex-col gap-m">
            <h4 className="text-h6 font-bold mb-xs">Admissions</h4>
            <a
              href="#"
              className="text-body-2 hover:text-brand-orange-200 transition-colors"
            >
              Entry Criteria
            </a>
            <a
              href="#"
              className="text-body-2 hover:text-brand-orange-200 transition-colors"
            >
              Tuition Fees
            </a>
            <a
              href="#"
              className="text-body-2 hover:text-brand-orange-200 transition-colors"
            >
              How to Apply
            </a>
          </div>

          <div className="flex flex-col gap-m">
            <h4 className="text-h6 font-bold mb-xs">About TKH</h4>
            <a
              href="#"
              className="text-body-2 hover:text-brand-orange-200 transition-colors"
            >
              Overview
            </a>
            <a
              href="#"
              className="text-body-2 hover:text-brand-orange-200 transition-colors"
            >
              Board of Trustees
            </a>
            <a
              href="#"
              className="text-body-2 hover:text-brand-orange-200 transition-colors"
            >
              TKH Campus
            </a>
            <a
              href="#"
              className="text-body-2 hover:text-brand-orange-200 transition-colors"
            >
              Work With TKH
            </a>
            <a
              href="#"
              className="text-body-2 hover:text-brand-orange-200 transition-colors"
            >
              FAQs
            </a>
          </div>

          <div className="flex flex-col gap-m lg:border-l lg:border-white/20 lg:pl-xl lg:pt-0 pt-m">
            <a
              href="#"
              className="text-body-2 hover:text-brand-orange-200 transition-colors"
            >
              International Students
            </a>
            <a
              href="#"
              className="text-body-2 hover:text-brand-orange-200 transition-colors"
            >
              Policies & Regulations
            </a>
            <a
              href="#"
              className="text-body-2 hover:text-brand-orange-200 transition-colors"
            >
              Postgraduates
            </a>
            <a
              href="#"
              className="text-body-2 hover:text-brand-orange-200 transition-colors"
            >
              News
            </a>
            <a
              href="#"
              className="text-body-2 hover:text-brand-orange-200 transition-colors"
            >
              Events
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-2xl border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-l text-caption-1">
          <p>© 2024 TKH - The Knowledge Hub. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-l">
            <a
              href="#"
              className="hover:text-brand-orange-200 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-brand-orange-200 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-brand-orange-200 transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
