import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Phone, Mail, Clock, Menu, X, ChevronRight } from "lucide-react";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Treatments", path: "/treatments" },
  { label: "Team", path: "/team" },
  { label: "Gallery", path: "/gallery" },
  { label: "Insurance", path: "/insurance" },
  { label: "Contact", path: "/contact" },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-nav" : "glass-nav-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo scrolled={scrolled} />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) => {
              const isActive = activePath === l.path;
              return (
                <Link
                  key={l.path}
                  to={l.path}
                  className={`relative text-sm font-medium transition-colors ${
                    scrolled ? "text-slate-700 hover:text-[color:var(--color-brand)]" : "text-white/90 hover:text-white"
                  } ${isActive ? (scrolled ? "!text-[color:var(--color-brand)]" : "!text-white") : ""}`}
                >
                  {l.label}
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                      style={{ background: scrolled ? "var(--color-brand)" : "rgba(255,255,255,0.9)" }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+97143202008" className={`text-sm font-medium flex items-center gap-2 transition-colors duration-500 ${scrolled ? "text-slate-700" : "text-white/90"}`}>
              <Phone className="w-4 h-4" /> +971 4 320 2008
            </a>
            <Link to="/contact" hash="appointment" className="btn-primary text-sm !py-2.5 !px-5">
              Book Appointment
            </Link>
          </div>

          <button
            className={`lg:hidden transition-colors duration-500 ${scrolled ? "text-slate-800" : "text-white"}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden glass-nav border-t border-slate-100">
            <div className="px-6 py-4 flex flex-col gap-3">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  onClick={() => setMenuOpen(false)}
                  className={`font-medium py-2 ${activePath === l.path ? "text-[color:var(--color-brand)]" : "text-slate-700"}`}
                >
                  {l.label}
                </Link>
              ))}
              <Link to="/contact" hash="appointment" onClick={() => setMenuOpen(false)} className="btn-primary text-sm mt-2">
                Book Appointment
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
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="mb-5">
              <Logo isFooter={true} />
            </div>
            <p className="text-white/60 leading-relaxed max-w-md text-sm">
              A leading dental clinic in Dubai committed to excellence in dentistry — combining advanced technology with an experienced Emirati and Turkish specialist team.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-white/70 hover:text-white transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Al Ferdous 4, Office 109, Al Wasl road, Al Safa 1, Dubai</li>
              <li><a href="tel:+97143202008" className="hover:text-white">+971 4 320 2008</a></li>
              <li><a href="tel:+971544432808" className="hover:text-white">+971 54 4432808</a></li>
              <li><a href="mailto:info@benarab.com" className="hover:text-white">info@benarab.com</a></li>
            </ul>
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
