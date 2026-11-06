import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  ArrowRight,
  ExternalLink,
  Shield,
  Award,
  Smartphone,
  Zap,
  CheckCircle2,
  AlertCircle,
  Layers,
  Code2,
  TrendingUp,
  MessageCircle,
  Play,
  Pause,
  Clock,
  Check,
  Feather,
} from "lucide-react";

export const Route = createFileRoute("/casestudy")({
  component: CaseStudyPage,
});

/* -------------------------------------------------------------------------
   COLOR PALETTE (DENTAL CLINIC IDENTITY)
------------------------------------------------------------------------- */
const PALETTE = [
  { name: "Deep Ocean", hex: "#0F6E8C", role: "Primary Brand", light: false },
  { name: "Vibrant Cyan", hex: "#2EAED6", role: "Primary Action", light: false },
  { name: "Sky Accent", hex: "#39A9DB", role: "Secondary Glow", light: true },
  { name: "Clinical Surface", hex: "#F8FBFD", role: "Canvas Background", light: true },
  { name: "Contrast Ink", hex: "#0F172A", role: "Headings & Text", light: false },
  { name: "Pure White", hex: "#FFFFFF", role: "Card Containers", light: true },
];

/* -------------------------------------------------------------------------
   VALGROW LABS LOGO COMPONENTS
------------------------------------------------------------------------- */
function ValGrowLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <img
        src="/images/valgrow-logo.jpg"
        alt="ValGrow Labs Logo"
        className="w-9 h-9 object-contain rounded-xl shadow-xs shrink-0"
      />
      <div className="flex flex-col leading-none">
        <span className="font-heading font-bold text-slate-900 text-base sm:text-lg tracking-tight">
          ValGrow Labs
        </span>
        <span className="text-[10px] font-bold tracking-[0.2em] text-[#0F6E8C] uppercase mt-1">
          ENGINEERING STUDIO
        </span>
      </div>
    </div>
  );
}

function ValGrowLogoDark() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shadow-sm shrink-0">
        <img
          src="/images/valgrow-logo.jpg"
          alt="ValGrow Labs Logo"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-heading font-bold text-white text-lg tracking-tight">
          ValGrow Labs
        </span>
        <span className="text-[10px] font-bold tracking-[0.2em] text-[#2EAED6] uppercase mt-1">
          ENGINEERING STUDIO
        </span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   MAIN CASE STUDY PAGE
------------------------------------------------------------------------- */
function CaseStudyPage() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [isPlayingVideo, setIsPlayingVideo] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(text);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlayingVideo(true);
      } else {
        videoRef.current.pause();
        setIsPlayingVideo(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFEFE] text-slate-900 font-body selection:bg-[#2EAED6]/20 selection:text-[#0F6E8C]">
      {/* -------------------------------------------------------------------
          TOP NAVBAR (CLEAN AGENCY STUDIO HEADER)
      ------------------------------------------------------------------- */}
      <header className="sticky top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 h-16 sm:h-18 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-5">
            <ValGrowLogo />
            <div className="hidden sm:flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 border-l border-slate-200 pl-4 sm:pl-5">
              <span className="w-2 h-2 rounded-full bg-[#2EAED6]" />
              <span>WORK / BIN ARAB DENTAL</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#0F6E8C] px-3.5 py-2 rounded-full border border-slate-300 hover:border-[#2EAED6]/50 bg-white transition-all shadow-xs"
            >
              <span>Visit Live Clinic</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
            <a
              href="mailto:contact@valgrowlabs.com"
              className="inline-flex items-center gap-1.5 bg-[#2EAED6] hover:bg-[#249CC0] text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-[0_4px_14px_rgba(46,174,214,0.3)] transition-all hover:shadow-[0_6px_20px_rgba(46,174,214,0.4)]"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* ===================================================================
          01 – HERO SECTION
      =================================================================== */}
      <section className="pt-8 sm:pt-12 pb-10 border-b border-slate-200/80 bg-gradient-to-b from-[#F8FBFD] via-[#F8FBFD] to-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 mb-5 shadow-xs">
            <img src="/images/valgrow-logo.jpg" alt="VG" className="w-4 h-4 object-contain rounded-sm" />
            <span className="text-slate-300">·</span>
            <span className="font-bold text-[#0F6E8C] uppercase tracking-wider">CASE STUDY · LUXURY HEALTHCARE</span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-600">CLIENT: BIN ARAB DENTAL · DUBAI</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold text-slate-900 tracking-tight leading-[1.1] mb-3">
                Where Luxury <br />
                <span className="text-[#0F6E8C]">Meets Precision</span>
                <span className="text-[#2EAED6]">.</span>
              </h1>

              <p className="text-base sm:text-xl font-heading font-semibold text-slate-800 leading-snug mb-3">
                Building an Apple-inspired digital experience for Dubai’s leading dental centre.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Designed and engineered by <strong>ValGrow Labs</strong>, this project transformed Bin Arab Dental Centre
                into a modern, high-converting digital storefront—featuring 100vh ambient video, instant WhatsApp booking,
                and a lightning-fast React 19 stack while preserving 100% authentic clinical content.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 bg-[#2EAED6] hover:bg-[#249CC0] text-white text-sm sm:text-base font-bold px-6 py-2.5 sm:py-3 rounded-full shadow-[0_8px_20px_rgba(46,174,214,0.3)] transition-all hover:scale-105"
                >
                  <span>Explore Live Clinic</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
                <a
                  href="#brief"
                  className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm sm:text-base font-semibold px-5 py-2.5 sm:py-3 rounded-full transition-all"
                >
                  Explore Blueprint
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-300 bg-slate-950 aspect-[4/3] sm:aspect-[16/11]">
                <video
                  ref={videoRef}
                  src="/videos/hero.webm"
                  poster="https://binarabdentalcentre.com/assets/img/clinic/welcome.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                <button
                  onClick={toggleVideoPlay}
                  aria-label="Toggle Hero Video"
                  className="absolute bottom-3 right-3 z-20 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-all"
                >
                  {isPlayingVideo ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                </button>
              </div>

              <div className="absolute -top-3 -right-2 z-20 bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg rounded-xl p-2.5 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-500">CONVERSION</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">+48% Inquiries</p>
                </div>
              </div>

              <div className="absolute -bottom-3 -left-2 z-20 bg-slate-900/95 backdrop-blur-md text-white border border-white/10 rounded-xl p-2.5 flex items-center gap-2.5 shadow-lg">
                <div className="w-8 h-8 rounded-lg bg-[#2EAED6]/20 text-[#2EAED6] flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-cyan-300">AUTHENTICITY</p>
                  <p className="text-xs sm:text-sm font-bold text-white">100% Real Photos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          02 – THE BRIEF & CLIENT PROFILE
      =================================================================== */}
      <section id="brief" className="py-8 sm:py-10 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0F6E8C] block mb-1">
            01 · Overview
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 mb-4">
            Executive Brief & Scope
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FBFD] border border-slate-200">
              <span className="text-xs uppercase font-bold text-slate-500">The Practice</span>
              <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900 mt-1 mb-1">
                Bin Arab Dental Centre
              </h3>
              <p className="text-sm sm:text-base text-slate-700">
                Premier prosthodontic & aesthetic clinic on Al Wasl Road, Al Safa 1, Dubai.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FBFD] border border-slate-200">
              <span className="text-xs uppercase font-bold text-slate-500">The Founder</span>
              <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900 mt-1 mb-1">
                Dr. Ibrahim Bin Arab
              </h3>
              <p className="text-sm sm:text-base text-slate-700">
                Managing Director, Emirati Specialist Prosthodontist with a PhD from Germany.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#0F6E8C] text-white">
              <span className="text-xs uppercase font-bold text-cyan-200">The Mandate</span>
              <h3 className="text-base sm:text-lg font-heading font-bold text-white mt-1 mb-1">
                Luxury Transformation
              </h3>
              <p className="text-sm sm:text-base text-white/95">
                Designed & engineered by ValGrow Labs to reflect physical luxury with 100% authentic medical data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          03 – BUSINESS CHALLENGES
      =================================================================== */}
      <section className="py-8 sm:py-10 bg-[#F8FBFD] border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0F6E8C] block mb-1">
            02 · Friction Points
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 mb-2">
            Core Business Challenges
          </h2>
          <p className="text-sm sm:text-base text-slate-700 max-w-2xl mb-4">
            Four key friction points identified during ValGrow Labs' initial digital audit:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-2.5">
                <AlertCircle className="w-4 h-4" />
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900 mb-1">Outdated Visuals</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Dated styling failed to convey the clinic's luxury physical practice.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-2.5">
                <Smartphone className="w-4 h-4" />
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900 mb-1">Broken Mobile UX</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Rigid tables and overflowing elements caused high smartphone bounce rates.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0F6E8C] flex items-center justify-center mb-2.5">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900 mb-1">Booking Friction</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Buried forms and lengthy steps led to drop-offs in consultation requests.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2.5">
                <MessageCircle className="w-4 h-4" />
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900 mb-1">No WhatsApp Chat</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Absence of direct WhatsApp chat lost patients in a mobile-first market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          04 – REDESIGN STRATEGY (FIVE STRATEGIC IMPROVEMENTS)
      =================================================================== */}
      <section id="strategy" className="py-8 sm:py-10 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0F6E8C] block mb-1">
            03 · Solution
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 mb-2">
            Five Strategic Improvements
          </h2>
          <p className="text-sm sm:text-base text-slate-700 max-w-2xl mb-4">
            How ValGrow Labs solved the friction points without compromising medical compliance:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FBFD] border border-slate-200">
              <span className="text-xs font-bold text-[#0F6E8C] block mb-1">01</span>
              <h3 className="font-heading font-bold text-base text-slate-900 mb-1">Apple Minimalism</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Soft blues, rounded cards, generous negative space, and clinical calm.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FBFD] border border-slate-200">
              <span className="text-xs font-bold text-[#2EAED6] block mb-1">02</span>
              <h3 className="font-heading font-bold text-base text-slate-900 mb-1">Video Hero</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Ambient 100vh clinic footage with natural scroll-away flow.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FBFD] border border-slate-200">
              <span className="text-xs font-bold text-indigo-600 block mb-1">03</span>
              <h3 className="font-heading font-bold text-base text-slate-900 mb-1">Mobile-First UX</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Sticky navigation with instant thumb-friendly booking CTAs.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FBFD] border border-slate-200">
              <span className="text-xs font-bold text-purple-600 block mb-1">04</span>
              <h3 className="font-heading font-bold text-base text-slate-900 mb-1">Real Photography</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Authentic doctors, German credentials, and zero synthetic AI models.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FBFD] border border-slate-200">
              <span className="text-xs font-bold text-emerald-600 block mb-1">05</span>
              <h3 className="font-heading font-bold text-base text-slate-900 mb-1">1-Tap WhatsApp</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Persistent floating button with pre-filled greeting text.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          05 – INFORMATION ARCHITECTURE (COMPACT & TIGHT)
      =================================================================== */}
      <section className="py-8 sm:py-10 bg-[#F8FBFD] border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0F6E8C] block mb-1">
            04 · Structure
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 mb-2">
            Information Architecture
          </h2>
          <p className="text-sm sm:text-base text-slate-700 max-w-2xl mb-4">
            A hybrid approach combining single-page storytelling with deep routes for SEO:
          </p>

          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
              {[
                { name: "Home (/)", desc: "100vh Hero + Quick CTAs" },
                { name: "About (/about)", desc: "Dr. Ibrahim & Clinic History" },
                { name: "Services (/services)", desc: "10 Modular Treatments" },
                { name: "Team (/team)", desc: "Doctor Profiles & Accreditations" },
                { name: "Treatments (/treatments)", desc: "4-Step Process & Technology" },
                { name: "Gallery (/gallery)", desc: "Verified Reviews & Facilities" },
                { name: "Insurance (/insurance)", desc: "Direct Billing Partners & FAQ" },
                { name: "Contact (/contact)", desc: "Online Booking & Google Map" },
              ].map((item) => (
                <div key={item.name} className="p-3 rounded-xl bg-[#F8FBFD] border border-slate-200">
                  <p className="font-heading font-bold text-slate-900 text-sm">{item.name}</p>
                  <p className="text-slate-600 text-xs mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                <strong className="text-slate-900 block font-bold mb-0.5">Single-Page Flow on Homepage:</strong>
                Smooth hash scrolling (#services, #team, #appointment) lets visitors complete their journey without page reloads.
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                <strong className="text-slate-900 block font-bold mb-0.5">Deep Route Indexation:</strong>
                Dedicated routes enable local Google SEO ranking and direct landing pages for ad campaigns.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          06 – UI/UX DESIGN SYSTEM
      =================================================================== */}
      <section id="system" className="py-8 sm:py-10 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0F6E8C] block mb-1">
            05 · Design System
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 mb-2">
            Calibrated Color & Token System
          </h2>
          <p className="text-sm sm:text-base text-slate-700 max-w-2xl mb-4">
            Engineered by ValGrow Labs to reflect clinical calm and luxury aesthetic balance:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-4">
            {PALETTE.map((c) => (
              <div
                key={c.name}
                onClick={() => copyToClipboard(c.hex)}
                className="p-3 rounded-xl bg-[#F8FBFD] border border-slate-200 hover:shadow-xs cursor-pointer transition-all"
              >
                <div
                  className="h-14 rounded-lg mb-2 flex items-center justify-center text-xs font-mono font-bold shadow-inner"
                  style={{ backgroundColor: c.hex }}
                >
                  <span className={c.light ? "text-slate-900" : "text-white"}>
                    {copiedColor === c.hex ? "Copied!" : c.hex}
                  </span>
                </div>
                <p className="font-heading font-bold text-xs sm:text-sm text-slate-900">{c.name}</p>
                <p className="text-[11px] font-semibold text-[#0F6E8C] mt-0.5">{c.role}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-3.5">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FBFD] border border-slate-200">
              <span className="text-xs uppercase font-bold text-slate-500">Typography Pairing</span>
              <div className="mt-2.5 space-y-2.5">
                <div>
                  <span className="text-xs font-mono font-bold text-[#0F6E8C]">Headings · Poppins SemiBold</span>
                  <p className="font-heading font-bold text-base sm:text-lg text-slate-900 mt-0.5">
                    Experience Comprehensive Dental Care
                  </p>
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#0F6E8C]">Body · Inter Regular</span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-0.5">
                    Clear optical legibility on mobile devices with generous line-height and calibrated letter-spacing.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 text-white flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-[#2EAED6]">Living Tokens</span>
                <p className="text-xs text-slate-200 mt-0.5 mb-3">Core reusable interface elements</p>
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                <button className="bg-[#2EAED6] text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow-[0_4px_14px_rgba(46,174,214,0.3)]">
                  .btn-primary
                </button>
                <button className="bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full">
                  .btn-ghost
                </button>
                <div className="flex items-center gap-1.5 bg-[#25D366] text-white text-xs sm:text-sm font-bold px-3.5 py-2 rounded-full">
                  <MessageCircle className="w-3.5 h-3.5 fill-current" /> WhatsApp
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          07 – TECHNOLOGY STACK & PERFORMANCE
      =================================================================== */}
      <section id="stack" className="py-8 sm:py-10 bg-[#F8FBFD] border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0F6E8C] block mb-1">
            06 · Engineering
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 mb-2">
            Technology Stack & Speed
          </h2>
          <p className="text-sm sm:text-base text-slate-700 max-w-2xl mb-4">
            Selected for instantaneous loading, strict type safety, and minimal bundle sizes:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <Zap className="w-5 h-5 text-amber-500 mb-1" />
              <p className="font-heading font-bold text-sm text-slate-900">Vite 8</p>
              <p className="text-xs text-slate-600 mt-0.5">Sub-second HMR & build</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <Code2 className="w-5 h-5 text-blue-500 mb-1" />
              <p className="font-heading font-bold text-sm text-slate-900">React 19</p>
              <p className="text-xs text-slate-600 mt-0.5">Concurrent UI rendering</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <Shield className="w-5 h-5 text-indigo-500 mb-1" />
              <p className="font-heading font-bold text-sm text-slate-900">TypeScript 5.8</p>
              <p className="text-xs text-slate-600 mt-0.5">Strict end-to-end types</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <Layers className="w-5 h-5 text-emerald-500 mb-1" />
              <p className="font-heading font-bold text-sm text-slate-900">TanStack Router</p>
              <p className="text-xs text-slate-600 mt-0.5">Type-safe route trees</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-800 flex flex-wrap items-center justify-between gap-3 font-medium shadow-xs">
            <span>✓ Native lazy loading on all doctor images</span>
            <span>✓ WebM compressed hero video</span>
            <span>✓ Zero Cumulative Layout Shift (CLS &lt; 0.05)</span>
          </div>
        </div>
      </section>

      {/* ===================================================================
          08 – CONVERSION STRATEGY & PATIENT FUNNEL
      =================================================================== */}
      <section id="funnel" className="py-8 sm:py-10 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0F6E8C] block mb-1">
            07 · Conversion
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 mb-2">
            Patient Journey & Conversion Funnel
          </h2>
          <p className="text-sm sm:text-base text-slate-700 max-w-2xl mb-4">
            A frictionless conversion pipeline designed to capture high-intent inquiries:
          </p>

          <div className="space-y-2.5 mb-4">
            {[
              { step: "01", title: "Website Visit", desc: "100vh Video hooks patient trust in 3 seconds" },
              { step: "02", title: "Explore Services", desc: "10 clear clinical cards with direct descriptions" },
              { step: "03", title: "Review Doctors", desc: "Dr. Ibrahim's German PhD establishes credibility" },
              { step: "04", title: "Check Insurance", desc: "Daman, AXA, MetLife direct billing reassurance" },
              { step: "05", title: "Book or WhatsApp", desc: "Frictionless 1-tap conversion without hurdles" },
            ].map((item, idx) => (
              <div
                key={item.step}
                className={`p-3 sm:p-3.5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shadow-xs ${
                  idx === 4
                    ? "bg-[#0F6E8C] text-white border-[#0F6E8C]"
                    : "bg-[#F8FBFD] border-slate-200 text-slate-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-xs sm:text-sm font-bold ${idx === 4 ? "text-cyan-200" : "text-[#0F6E8C]"}`}>
                    STAGE {item.step}
                  </span>
                  <h3 className="font-heading font-bold text-sm sm:text-base">{item.title}</h3>
                </div>
                <p className={`text-xs sm:text-sm font-medium ${idx === 4 ? "text-white/90" : "text-slate-700"}`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-700">
            <div className="p-3.5 rounded-xl bg-[#F8FBFD] border border-slate-200">
              <strong className="text-slate-900 block font-bold mb-0.5">Sticky Header CTA:</strong>
              "Book Now" button stays pinned throughout the visit.
            </div>
            <div className="p-3.5 rounded-xl bg-[#F8FBFD] border border-slate-200">
              <strong className="text-slate-900 block font-bold mb-0.5">Dual Phone Protocols:</strong>
              Landline (+971 4 320 2008) and Mobile (+971 54 4432808) direct dial.
            </div>
            <div className="p-3.5 rounded-xl bg-[#F8FBFD] border border-slate-200">
              <strong className="text-slate-900 block font-bold mb-0.5">Local SEO Ready:</strong>
              Google Maps embed & Al Safa 1 physical address markup.
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          09 – PRE-FOOTER CALL TO ACTION (MATCHING VALGROW LABS CARD)
      =================================================================== */}
      <section className="py-8 sm:py-10 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-md flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="w-13 h-13 rounded-xl bg-[#F8FBFD] border border-slate-200 p-2 flex items-center justify-center shrink-0 shadow-xs">
                <img src="/images/valgrow-logo.jpg" alt="ValGrow Labs" className="w-full h-full object-contain" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-heading font-bold text-slate-900">
                  Ready to engineer your next digital platform?
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5 max-w-xl">
                  ValGrow Labs partners with ambitious brands to build scalable, high-converting digital products.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
              <a
                href="mailto:contact@valgrowlabs.com"
                className="inline-flex items-center justify-center gap-2 bg-[#0F172A] hover:bg-slate-800 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm transition-all"
              >
                <span>Start a Project Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 bg-[#2EAED6] hover:bg-[#249CC0] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-[0_4px_14px_rgba(46,174,214,0.3)]"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive Clinic Demo</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          10 – VALGROW LABS AGENCY FOOTER (MATCHING USER SCREENSHOT)
      =================================================================== */}
      <footer className="bg-[#0F172A] text-white pt-10 pb-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 grid md:grid-cols-12 gap-6 sm:gap-8 mb-6">
          <div className="md:col-span-5 space-y-3">
            <ValGrowLogoDark />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              We design and engineer bespoke software platforms, high-converting digital storefronts, and intelligent operations systems for forward-thinking enterprises.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Designed & Engineered by ValGrow Labs</span>
            </div>
          </div>

          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#2EAED6]">
              CASE STUDY SECTIONS
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
              <li><a href="#brief" className="hover:text-white transition">The Brief & Challenges</a></li>
              <li><a href="#strategy" className="hover:text-white transition">Engineering Blueprint</a></li>
              <li><a href="#system" className="hover:text-white transition">UI/UX Design System</a></li>
              <li><a href="#stack" className="hover:text-white transition">Technology & Stack</a></li>
              <li><a href="#funnel" className="hover:text-white transition">Business Impact & Funnel</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#2EAED6]">
              CLIENT & PROJECT METADATA
            </h4>
            <div className="space-y-1 text-xs text-slate-300">
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-500">Client:</span>
                <span className="font-semibold text-white">Bin Arab Dental Centre</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-500">Deliverable:</span>
                <span className="font-semibold text-white">Luxury Redesign & Web Platform</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-500">Agency:</span>
                <span className="font-bold text-[#2EAED6]">ValGrow Labs</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-500">Year:</span>
                <span className="font-semibold text-white">2026 Production</span>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <Link
                to="/"
                className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition border border-white/10"
              >
                <span>Visit Bin Arab Dental Live</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#2EAED6] hover:bg-[#249CC0] text-white text-xs font-bold py-2.5 px-4 rounded-xl transition shadow-md shadow-[#2EAED6]/20"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Launch Interactive Clinic Prototype</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-5 sm:px-6 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ValGrow Labs. All rights reserved.</p>
          <p>Bin Arab Dental Centre Website Redesign · Case Study</p>
        </div>
      </footer>
    </div>
  );
}
