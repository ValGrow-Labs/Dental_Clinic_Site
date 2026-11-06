import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronRight, Facebook, Instagram, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";

const HEADER_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services", hasDropdown: true },
  { label: "Our Team", path: "/team" },
  { label: "Gallery", path: "/gallery" },
  { label: "Offers", path: "/offers" },
];

const FOOTER_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Team", path: "/team" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const SERVICES_LIST = [
  { name: "Dental Implant" },
  { name: "Cosmetic Denture" },
  { name: "Dental Emergency" },
  { name: "Invisalign" },
  { name: "Child Oral Care" },
  { name: "Dental Check Up" },
  { name: "Aesthetic Dentistry" },
  { name: "Endodontics" },
  { name: "Teeth Whitening" },
  { name: "Tooth Extraction" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const activePath = location.pathname;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    
    // Check if there is a hash in the path
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Let component mount first before scrolling
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
        return () => {
          clearTimeout(timer);
          window.removeEventListener("scroll", onScroll);
        };
      }
    } else {
      window.scrollTo({ top: 0, behavior: "instant" as any });
    }
    
    return () => window.removeEventListener("scroll", onScroll);
  }, [activePath, location.hash]);

  return (
    <div className="min-h-screen bg-white text-[color:var(--color-ink)] flex flex-col">
      {/* NAV */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-slate-100 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-10 lg:px-[50px] h-[85px] flex items-center justify-between w-full">
          <Link to="/" className="flex items-center shrink-0 z-10">
            <Logo scrolled={scrolled} />
          </Link>

          {/* Centered Desktop Nav */}
          <nav className="hidden lg:flex items-center justify-center gap-7 lg:gap-[32px] flex-1 z-10">
            {HEADER_LINKS.map((l) => {
              const isActive = activePath === l.path;
              if (l.hasDropdown) {
                return (
                  <div key={l.path} className="relative group py-2">
                    <Link
                      to={l.path}
                      className={`relative text-[17px] font-medium transition-colors flex items-center gap-1 text-slate-700 hover:text-[color:var(--color-brand)] ${isActive ? "!text-[color:var(--color-brand)]" : ""}`}
                    >
                      {l.label}
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[color:var(--color-brand)]" />
                      )}
                    </Link>
                    
                    {/* Services Hover Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-white shadow-xl border border-slate-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 transform origin-top-left scale-95 group-hover:scale-100 animate-in fade-in slide-in-from-top-2 duration-150">
                      {SERVICES_LIST.map((service) => (
                        <Link
                          key={service.name}
                          to="/services"
                          hash={`detail-${service.name.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[color:var(--color-brand)] transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={l.path}
                  to={l.path}
                  className={`relative text-[17px] font-medium transition-colors text-slate-700 hover:text-[color:var(--color-brand)] ${isActive ? "!text-[color:var(--color-brand)]" : ""}`}
                >
                  {l.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-[color:var(--color-brand)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Green Book Now Button on desktop */}
          <div className="hidden lg:flex items-center shrink-0 z-10">
            <Link to="/contact" hash="appointment" className="bg-[#2EAED6] hover:bg-[#249CC0] text-white font-semibold py-2.5 px-6 rounded-full transition shadow-[0_8px_20px_rgba(46,174,214,0.25)] hover:shadow-[0_8px_20px_rgba(46,174,214,0.4)] text-sm whitespace-nowrap">
              Book Now
            </Link>
          </div>

          <button
            className="lg:hidden text-slate-800"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
            <div className="px-6 py-4 flex flex-col gap-3">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="font-bold text-sm py-2 text-[#0F6E8C] flex items-center gap-1 border-b border-slate-100 mb-1"
              >
                ← Back to Case Study Presentation
              </Link>
              {HEADER_LINKS.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  onClick={() => setMenuOpen(false)}
                  className={`font-medium py-2 ${activePath === l.path ? "text-[color:var(--color-brand)]" : "text-slate-700"}`}
                >
                  {l.label}
                </Link>
              ))}
              <Link to="/contact" hash="appointment" onClick={() => setMenuOpen(false)} className="bg-[#2EAED6] hover:bg-[#249CC0] text-white text-center font-semibold py-2.5 rounded-full transition mt-2 shadow-[0_8px_20px_rgba(46,174,214,0.25)] hover:shadow-[0_8px_20px_rgba(46,174,214,0.4)]">
                Book Now
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* PAGE CONTENT */}
      <main className="flex-grow">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-[color:var(--color-ink)] text-white/80 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/images/logo.png"
                alt="Bin Arab Dental Centre"
                className="w-[180px] md:w-[220px] h-10 md:h-12 object-contain bg-white rounded-lg p-1.5"
              />
              <span className="text-white font-heading font-semibold text-lg">Bin Arab Dental Centre</span>
            </div>
            <p className="text-white/60 leading-relaxed max-w-md text-sm">
              A leading dental clinic in Dubai committed to excellence in dentistry — combining advanced technology with an experienced Emirati and Turkish specialist team.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-white/70 hover:text-white transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Embedded Footer Google Map */}
            <div className="mt-6 w-full max-w-[340px] h-[220px] rounded-xl overflow-hidden shadow-md border border-white/10 bg-white/5">
              <iframe
                src="https://maps.google.com/maps?q=25.178887,55.234786&hl=en&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bin Arab Dental Centre Footer Map"
              />
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li className="font-semibold text-white text-base">Bin Arab Dental Centre</li>
              <li>Office 109, Al Ferdous 4</li>
              <li>Al Wasl Road, Al Safa 1, Dubai</li>
              <li><a href="tel:+97143202008" className="hover:text-white transition">+971 4 320 2008</a></li>
              <li><a href="tel:+971544432808" className="hover:text-white transition">+971 54 4432808</a></li>
              <li><a href="mailto:info@benarab.com" className="hover:text-white transition">info@benarab.com</a></li>
            </ul>
            
            {/* Social Media Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/971544432808"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97-1.861-1.868-4.339-2.897-6.97-2.899-5.437 0-9.862 4.37-9.866 9.8-.001 1.762.463 3.483 1.343 5.012l-.995 3.634 3.737-.978zm11.233-6.84c-.11-.18-.405-.29-.85-.515-.445-.225-2.633-1.302-3.033-1.448-.4-.147-.693-.22-.99.225-.296.45-1.15 1.448-1.408 1.74-.257.29-.515.327-.96.1-.445-.225-1.884-.695-3.587-2.216-1.325-1.183-2.218-2.645-2.478-3.095-.26-.45-.028-.693.197-.917.202-.202.445-.515.668-.773.225-.258.3-.445.45-.744.15-.3.075-.56-.037-.785-.11-.225-.99-2.39-1.358-3.284-.36-.874-.724-.755-.99-.768-.256-.013-.55-.015-.844-.015-.294 0-.773.11-1.177.55-.404.44-1.54 1.51-1.54 3.682s1.586 4.264 1.81 4.563c.224.3 3.12 4.767 7.558 6.685 1.056.457 1.88.73 2.525.935 1.062.338 2.03.29 2.793.176.852-.127 2.634-.11 3.034-1.448.4-1.302.4-2.422.28-2.645-.12-.224-.412-.33-.858-.556z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Bin Arab Dental Centre. All rights reserved.</p>
          <p>Al Wasl Road, Al Safa 1, Dubai, UAE</p>
        </div>
      </footer>

      {/* WhatsApp floating */}
      <a
        href="https://wa.me/971544432808?text=Hello%20Bin%20Arab%20Dental%20Centre%2C%20I%20want%20to%20book%20an%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Bin Arab Dental Centre on WhatsApp"
        className="whatsapp-official text-white"
      >
        <svg viewBox="0 0 448 512" className="w-[30px] h-[30px] fill-white">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L32 503l138.9-36.4c32.7 17.8 69.3 27.2 106.8 27.2 122.4 0 222-99.6 222-222 0-59.3-23.2-115-65.1-157C305.8 45.4 250.2 32 192 32zm0 0M224 416c-33.3 0-66-9-94.2-26l-6.8-4-70.1 18.4 18.7-68.4-4.4-7c-18.7-29.8-28.6-64.2-28.6-99.6 0-104.8 85.2-190 190-190 50.8 0 98.5 19.8 134.4 55.7 35.8 35.8 55.6 83.5 55.6 134.3 0 104.8-85.2 190-190 190zm101.3-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.4-8.6-44.6-27.5-16.5-14.7-27.6-32.8-30.8-38.3-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.5-6.5 8.3-9.8 2.8-3.3 3.7-5.6 5.5-9.3 1.9-3.7.9-6.9-.5-9.8-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.8 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.3 5.7 23.6 9.2 31.7 11.8 13.3 4.2 25.5 3.6 35.2 2.2 10.8-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      </a>
    </div>
  );
}
