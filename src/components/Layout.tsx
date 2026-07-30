import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Phone, Mail, Clock, Menu, X, ChevronRight } from "lucide-react";

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
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg,#0F6E8C,#39A9DB)" }}>
              <span className="text-white font-bold font-heading">B</span>
            </div>
            <span className={`font-heading font-semibold text-lg tracking-tight transition-colors duration-500 ${scrolled ? "text-[color:var(--color-ink)]" : "text-white drop-shadow"}`}>
              Bin Arab Dental
            </span>
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
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg,#0F6E8C,#39A9DB)" }}>
                <span className="text-white font-bold font-heading">B</span>
              </div>
              <span className="text-white font-heading font-semibold text-lg">Bin Arab Dental Centre</span>
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
        className="whatsapp-premium text-white"
      >
        <svg viewBox="0 0 32 32" className="w-[28px] h-[28px] md:w-[30px] md:h-[30px] fill-current">
          <path d="M19.11 17.28c-.28-.14-1.65-.81-1.9-.9-.26-.09-.44-.14-.63.14-.19.28-.72.9-.88 1.09-.16.19-.32.21-.6.07-.28-.14-1.18-.44-2.24-1.39-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.63-1.51-.86-2.07-.23-.55-.46-.47-.63-.48-.16 0-.35-.01-.53-.01-.19 0-.49.07-.75.35-.26.28-.98.96-.98 2.33s1 2.71 1.14 2.89c.14.19 1.97 3.01 4.78 4.22.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33zM16.02 27C10.5 27 6 22.51 6 17c0-5.51 4.5-10 10.02-10s10.02 4.49 10.02 10c0 5.51-4.5 10-10.02 10zM16 5C9.37 5 4 10.37 4 17c0 2.11.56 4.09 1.54 5.8L4 28l5.34-1.4A11.94 11.94 0 0 0 16 29c6.63 0 12-5.37 12-12S22.63 5 16 5z" />
        </svg>
      </a>
    </div>
  );
}
