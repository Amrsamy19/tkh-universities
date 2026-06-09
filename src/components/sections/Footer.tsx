export const Footer = () => {
  return (
    <footer className="w-full bg-brand-blue-400 text-white py-4xl px-l lg:px-2xl rounded-t-[48px] mt-4xl relative z-20">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2xl">
        {/* Brand & Contact */}
        <div className="lg:col-span-2 flex flex-col gap-l">
          <div className="text-h2 text-brand-orange-200 tracking-tighter font-bold">TKH</div>
          <p className="text-body-2 text-neutral-300 max-w-sm">
            Earn a globally recognized degree from top-ranked partnered universities on our state-of-the-art campus located in Egypt.
          </p>
          <div className="flex flex-col gap-s mt-m">
            <h4 className="text-h6">Contact Us</h4>
            <a href="tel:19940" className="text-button-2 text-brand-orange-200 hover:text-white transition-colors">19940 , +20 123 456 789</a>
            <p className="text-caption-2 text-neutral-400">New Administrative Capital, Residential Area 7, R7, Cairo Governorate</p>
            <a href="mailto:hello@tkh.edu.eg" className="text-button-2 text-brand-orange-200 hover:text-white transition-colors">hello@tkh.edu.eg</a>
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="flex flex-col gap-m">
          <h4 className="text-h6 text-white mb-s">Universities</h4>
          <a href="#" className="text-body-2 text-neutral-400 hover:text-brand-orange-200 transition-colors">Coventry University</a>
          <a href="#" className="text-body-2 text-neutral-400 hover:text-brand-orange-200 transition-colors">NOVA University</a>
          
          <h4 className="text-h6 text-white mb-s mt-l">Study</h4>
          <a href="#" className="text-body-2 text-neutral-400 hover:text-brand-orange-200 transition-colors">Undergraduate</a>
          <a href="#" className="text-body-2 text-neutral-400 hover:text-brand-orange-200 transition-colors">Postgraduate</a>
          <a href="#" className="text-body-2 text-neutral-400 hover:text-brand-orange-200 transition-colors">Continuing Education</a>
        </div>

        {/* Links Column 2 */}
        <div className="flex flex-col gap-m">
          <h4 className="text-h6 text-white mb-s">Campus Life</h4>
          <a href="#" className="text-body-2 text-neutral-400 hover:text-brand-orange-200 transition-colors">Student Life</a>
          <a href="#" className="text-body-2 text-neutral-400 hover:text-brand-orange-200 transition-colors">Services</a>
          <a href="#" className="text-body-2 text-neutral-400 hover:text-brand-orange-200 transition-colors">Support</a>

          <h4 className="text-h6 text-white mb-s mt-l">Admissions</h4>
          <a href="#" className="text-body-2 text-neutral-400 hover:text-brand-orange-200 transition-colors">Entry Criteria</a>
          <a href="#" className="text-body-2 text-neutral-400 hover:text-brand-orange-200 transition-colors">Tuition Fees</a>
          <a href="#" className="text-body-2 text-neutral-400 hover:text-brand-orange-200 transition-colors">How to Apply</a>
        </div>

        {/* Links Column 3 */}
        <div className="flex flex-col gap-m">
          <h4 className="text-h6 text-white mb-s">About TKH</h4>
          <a href="#" className="text-body-2 text-neutral-400 hover:text-brand-orange-200 transition-colors">Overview</a>
          <a href="#" className="text-body-2 text-neutral-400 hover:text-brand-orange-200 transition-colors">Board of Trustees</a>
          <a href="#" className="text-body-2 text-neutral-400 hover:text-brand-orange-200 transition-colors">TKH Campus</a>
          <a href="#" className="text-body-2 text-neutral-400 hover:text-brand-orange-200 transition-colors">Work With TKH</a>
          <a href="#" className="text-body-2 text-neutral-400 hover:text-brand-orange-200 transition-colors">FAQs</a>
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto mt-4xl pt-2xl border-t border-brand-blue-300 flex flex-col md:flex-row justify-between items-center gap-l text-caption-2 text-neutral-400">
        <p>© 2024 TKH - The Knowledge Hub. All rights reserved.</p>
        <div className="flex gap-l">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};
