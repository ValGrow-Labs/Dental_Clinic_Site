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
   VALGROW LABS LOGO COMPONENTS (RESPONSIVE RWD)
------------------------------------------------------------------------- */
function ValGrowLogo() {
  return (
    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
      <img
        src="/images/valgrow-logo.jpg"
        alt="ValGrow Labs Logo"
        className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-lg sm:rounded-xl shadow-xs shrink-0"
      />
      <div className="flex flex-col leading-tight">
        <span className="font-heading font-bold text-slate-900 text-base sm:text-xl tracking-tight">
          ValGrow Labs
        </span>
        <span className="text-[9px] sm:text-[11px] font-bold tracking-[0.16em] sm:tracking-[0.2em] text-[#0F6E8C] uppercase">
          ENGINEERING STUDIO
        </span>
      </div>
    </div>
  );
}

function ValGrowLogoDark() {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
      <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-white p-1 flex items-center justify-center shadow-sm shrink-0">
        <img
          src="/images/valgrow-logo.jpg"
          alt="ValGrow Labs Logo"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col leading-tight">
        <span className="font-heading font-bold text-white text-lg sm:text-xl tracking-tight">
          ValGrow Labs
        </span>
        <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] sm:tracking-[0.2em] text-[#2EAED6] uppercase">
          ENGINEERING STUDIO
        </span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
   MAIN CASE STUDY PAGE (FULL MOBILE RWD FORMAT)
------------------------------------------------------------------------- */
function CaseStudyPage() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [isPlayingVideo, setIsPlayingVideo] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.title = "Bin Arab Dental Centre — Case Study | ValGrow Labs";
    return () => {
      document.title = "Bin Arab Dental Centre — Leading Dental Clinic in Dubai";
    };
  }, []);

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
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#FDFEFE] text-slate-900 font-body selection:bg-[#2EAED6]/20 selection:text-[#0F6E8C]">
      {/* -------------------------------------------------------------------
          TOP NAVBAR (MOBILE-ADAPTIVE RWD STUDIO HEADER)
      ------------------------------------------------------------------- */}
      <header className="sticky top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-6xl mx-auto px-3.5 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-2">
          <div className="flex items-center gap-3 sm:gap-6 min-w-0">
            <ValGrowLogo />
            <div className="hidden md:flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600 border-l border-slate-200 pl-4 sm:pl-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2EAED6]" />
              <span>WORK / BIN ARAB DENTAL</span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link
              to="/"
              className="inline-flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-semibold text-slate-800 hover:text-[#0F6E8C] px-3 sm:px-4 py-2 sm:py-2.5 rounded-full border border-slate-300 hover:border-[#2EAED6] bg-white transition-all shadow-xs"
            >
              <span className="hidden xs:inline">Visit Live Clinic</span>
              <span className="xs:hidden">Live Clinic</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
            <a
              href="mailto:contact@valgrowlabs.com"
              className="inline-flex items-center gap-1 sm:gap-1.5 bg-[#2EAED6] hover:bg-[#249CC0] text-white text-xs sm:text-sm font-bold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-[0_4px_14px_rgba(46,174,214,0.3)] transition-all hover:shadow-[0_6px_20px_rgba(46,174,214,0.4)]"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* ===================================================================
          01 – HERO SECTION (RWD FLUID MOBILE LAYOUT)
      =================================================================== */}
      <section className="pt-6 sm:pt-12 pb-8 sm:pb-10 border-b border-slate-200/80 bg-gradient-to-b from-[#F8FBFD] via-[#F8FBFD] to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Metadata pill badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800 mb-4 sm:mb-6 shadow-xs max-w-full">
            <img src="/images/valgrow-logo.jpg" alt="VG" className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain rounded-sm" />
            <span className="text-slate-300">·</span>
            <span className="font-bold text-[#0F6E8C] uppercase tracking-wider text-[11px] sm:text-xs">
              CASE STUDY · LUXURY HEALTHCARE
            </span>
            <span className="hidden sm:inline text-slate-300">·</span>
            <span className="hidden sm:inline text-slate-700 font-medium text-xs sm:text-sm">
              CLIENT: BIN ARAB DENTAL · DUBAI
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
            {/* Hero Copy */}
            <div className="lg:col-span-7">
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-heading font-black text-slate-900 tracking-tight leading-[1.1] mb-3 sm:mb-4">
                Where Luxury <br />
                <span className="text-[#0F6E8C]">Meets Precision</span>
                <span className="text-[#2EAED6]">.</span>
              </h1>

              <p className="text-base sm:text-xl lg:text-2xl font-heading font-bold text-slate-800 leading-snug mb-2 sm:mb-3">
                Building an Apple-inspired digital experience for Dubai’s leading dental centre.
              </p>

              <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed mb-5 sm:mb-6">
                Designed and engineered by <strong>ValGrow Labs</strong>, this project transformed Bin Arab Dental Centre
                into a modern, high-converting digital storefront—featuring 100vh ambient video, instant WhatsApp booking,
                and a lightning-fast React 19 stack while preserving 100% authentic clinical content.
              </p>

              {/* Call to action buttons (Full width stack on mobile, inline on tablet/desktop) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 bg-[#2EAED6] hover:bg-[#249CC0] text-white text-sm sm:text-base font-bold px-6 py-3 rounded-full shadow-[0_8px_20px_rgba(46,174,214,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98] text-center"
                >
                  <span>Explore Live Clinic</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
                <a
                  href="#brief"
                  className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm sm:text-base font-semibold px-5 py-3 rounded-full transition-all text-center"
                >
                  Explore Blueprint
                </a>
              </div>
            </div>

            {/* Hero Video & Metric Badges (Safe mobile overflow) */}
            <div className="lg:col-span-5 relative mt-2 sm:mt-0">
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
                  className="absolute bottom-3 right-3 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-all shadow-sm"
                >
                  {isPlayingVideo ? <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5" />}
                </button>
              </div>

              {/* Floating conversion chip */}
              <div className="absolute -top-2.5 right-1 sm:-top-3 sm:-right-2 z-20 bg-white/95 backdrop-blur-md border border-slate-200 shadow-md rounded-xl p-2 sm:p-2.5 flex items-center gap-2 sm:gap-2.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] uppercase font-extrabold text-slate-500">CONVERSION</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">+48% Inquiries</p>
                </div>
              </div>

              {/* Floating authenticity chip */}
              <div className="absolute -bottom-2.5 left-1 sm:-bottom-3 sm:-left-2 z-20 bg-slate-900/95 backdrop-blur-md text-white border border-white/10 rounded-xl p-2 sm:p-2.5 flex items-center gap-2 sm:gap-2.5 shadow-md">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#2EAED6]/20 text-[#2EAED6] flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] uppercase font-extrabold text-cyan-300">AUTHENTICITY</p>
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
      <section id="brief" className="py-7 sm:py-10 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0F6E8C] block mb-1">
            01 · Overview
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-4">
            Executive Brief & Scope
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
            <div className="group p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#F8FBFD] hover:bg-[#0F6E8C] border border-slate-200 hover:border-[#0F6E8C] transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md">
              <span className="text-xs sm:text-sm uppercase font-extrabold text-slate-500 group-hover:text-cyan-200 transition-colors">
                The Practice
              </span>
              <h3 className="text-base sm:text-xl font-heading font-bold text-slate-900 group-hover:text-white transition-colors mt-1 mb-1">
                Bin Arab Dental Centre
              </h3>
              <p className="text-sm sm:text-base text-slate-700 group-hover:text-white/95 leading-relaxed transition-colors">
                Premier prosthodontic & aesthetic clinic on Al Wasl Road, Al Safa 1, Dubai.
              </p>
            </div>

            <div className="group p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#F8FBFD] hover:bg-[#0F6E8C] border border-slate-200 hover:border-[#0F6E8C] transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md">
              <span className="text-xs sm:text-sm uppercase font-extrabold text-slate-500 group-hover:text-cyan-200 transition-colors">
                The Founder
              </span>
              <h3 className="text-base sm:text-xl font-heading font-bold text-slate-900 group-hover:text-white transition-colors mt-1 mb-1">
                Dr. Ibrahim Bin Arab
              </h3>
              <p className="text-sm sm:text-base text-slate-700 group-hover:text-white/95 leading-relaxed transition-colors">
                Managing Director, Emirati Specialist Prosthodontist with a PhD from Germany.
              </p>
            </div>

            <div className="group p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#F8FBFD] hover:bg-[#0F6E8C] border border-slate-200 hover:border-[#0F6E8C] transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md">
              <span className="text-xs sm:text-sm uppercase font-extrabold text-slate-500 group-hover:text-cyan-200 transition-colors">
                The Mandate
              </span>
              <h3 className="text-base sm:text-xl font-heading font-bold text-slate-900 group-hover:text-white transition-colors mt-1 mb-1">
                Luxury Transformation
              </h3>
              <p className="text-sm sm:text-base text-slate-700 group-hover:text-white/95 leading-relaxed transition-colors">
                Designed & engineered by ValGrow Labs to reflect physical luxury with 100% authentic medical data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          03 – BUSINESS CHALLENGES
      =================================================================== */}
      <section className="py-7 sm:py-10 bg-[#F8FBFD] border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0F6E8C] block mb-1">
            02 · Friction Points
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-2">
            Core Business Challenges
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-700 font-medium max-w-2xl mb-4">
            Four key friction points identified during ValGrow Labs' initial digital audit:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            <div className="group p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white hover:bg-[#0F6E8C] border border-slate-200 hover:border-[#0F6E8C] transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-red-50 group-hover:bg-white/20 text-red-600 group-hover:text-white flex items-center justify-center mb-2.5 transition-colors">
                <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 group-hover:text-white transition-colors mb-1">
                Outdated Visuals
              </h3>
              <p className="text-sm sm:text-base text-slate-700 group-hover:text-white/95 leading-relaxed transition-colors">
                Dated styling failed to convey the clinic's luxury physical practice.
              </p>
            </div>

            <div className="group p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white hover:bg-[#0F6E8C] border border-slate-200 hover:border-[#0F6E8C] transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-amber-50 group-hover:bg-white/20 text-amber-600 group-hover:text-white flex items-center justify-center mb-2.5 transition-colors">
                <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 group-hover:text-white transition-colors mb-1">
                Broken Mobile UX
              </h3>
              <p className="text-sm sm:text-base text-slate-700 group-hover:text-white/95 leading-relaxed transition-colors">
                Rigid tables and overflowing elements caused high smartphone bounce rates.
              </p>
            </div>

            <div className="group p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white hover:bg-[#0F6E8C] border border-slate-200 hover:border-[#0F6E8C] transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-blue-50 group-hover:bg-white/20 text-[#0F6E8C] group-hover:text-white flex items-center justify-center mb-2.5 transition-colors">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 group-hover:text-white transition-colors mb-1">
                Booking Friction
              </h3>
              <p className="text-sm sm:text-base text-slate-700 group-hover:text-white/95 leading-relaxed transition-colors">
                Buried forms and lengthy steps led to drop-offs in consultation requests.
              </p>
            </div>

            <div className="group p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white hover:bg-[#0F6E8C] border border-slate-200 hover:border-[#0F6E8C] transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-50 group-hover:bg-white/20 text-emerald-600 group-hover:text-white flex items-center justify-center mb-2.5 transition-colors">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 group-hover:text-white transition-colors mb-1">
                No WhatsApp Chat
              </h3>
              <p className="text-sm sm:text-base text-slate-700 group-hover:text-white/95 leading-relaxed transition-colors">
                Absence of direct WhatsApp chat lost patients in a mobile-first market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          04 – REDESIGN STRATEGY (FIVE STRATEGIC IMPROVEMENTS)
      =================================================================== */}
      <section id="strategy" className="py-7 sm:py-10 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0F6E8C] block mb-1">
            03 · Solution
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-2">
            Five Strategic Improvements
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-700 font-medium max-w-2xl mb-4">
            How ValGrow Labs solved the friction points without compromising medical compliance:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-3.5">
            <div className="group p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#F8FBFD] hover:bg-[#0F6E8C] border border-slate-200 hover:border-[#0F6E8C] transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md">
              <span className="text-xs sm:text-sm font-black text-[#0F6E8C] group-hover:text-cyan-200 transition-colors block mb-1">
                01
              </span>
              <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 group-hover:text-white transition-colors mb-1">
                Apple Minimalism
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-slate-700 group-hover:text-white/95 leading-relaxed transition-colors">
                Soft blues, rounded cards, generous negative space, and clinical calm.
              </p>
            </div>

            <div className="group p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#F8FBFD] hover:bg-[#0F6E8C] border border-slate-200 hover:border-[#0F6E8C] transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md">
              <span className="text-xs sm:text-sm font-black text-[#2EAED6] group-hover:text-cyan-200 transition-colors block mb-1">
                02
              </span>
              <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 group-hover:text-white transition-colors mb-1">
                Video Hero
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-slate-700 group-hover:text-white/95 leading-relaxed transition-colors">
                Ambient 100vh clinic footage with natural scroll-away flow.
              </p>
            </div>

            <div className="group p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#F8FBFD] hover:bg-[#0F6E8C] border border-slate-200 hover:border-[#0F6E8C] transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md">
              <span className="text-xs sm:text-sm font-black text-indigo-600 group-hover:text-cyan-200 transition-colors block mb-1">
                03
              </span>
              <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 group-hover:text-white transition-colors mb-1">
                Mobile-First UX
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-slate-700 group-hover:text-white/95 leading-relaxed transition-colors">
                Sticky navigation with instant thumb-friendly booking CTAs.
              </p>
            </div>

            <div className="group p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#F8FBFD] hover:bg-[#0F6E8C] border border-slate-200 hover:border-[#0F6E8C] transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md">
              <span className="text-xs sm:text-sm font-black text-purple-600 group-hover:text-cyan-200 transition-colors block mb-1">
                04
              </span>
              <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 group-hover:text-white transition-colors mb-1">
                Real Photography
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-slate-700 group-hover:text-white/95 leading-relaxed transition-colors">
                Authentic doctors, German credentials, and zero synthetic AI models.
              </p>
            </div>

            <div className="group p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#F8FBFD] hover:bg-[#0F6E8C] border border-slate-200 hover:border-[#0F6E8C] transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md">
              <span className="text-xs sm:text-sm font-black text-emerald-600 group-hover:text-cyan-200 transition-colors block mb-1">
                05
              </span>
              <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 group-hover:text-white transition-colors mb-1">
                1-Tap WhatsApp
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-slate-700 group-hover:text-white/95 leading-relaxed transition-colors">
                Persistent floating button with pre-filled greeting text.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          05 – INFORMATION ARCHITECTURE (RWD RESPONSIVE ROUTE GRID)
      =================================================================== */}
      <section className="py-7 sm:py-10 bg-[#F8FBFD] border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0F6E8C] block mb-1">
            04 · Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-2">
            Information Architecture
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-700 font-medium max-w-2xl mb-4">
            A hybrid setup combining continuous homepage storytelling with dedicated deep routes:
          </p>

          <div className="p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
            {/* Responsive grid: 1 col on mobile, 2 col on tablet, 4 col on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 mb-4">
              {[
                { name: "Home (/)", desc: "100vh Hero + Quick CTAs" },
                { name: "About (/about)", desc: "Dr. Ibrahim & Clinic History" },
                { name: "Services (/services)", desc: "10 Modular Treatments" },
                { name: "Team (/team)", desc: "Doctor Profiles & Accreditations" },
                { name: "Treatments (/treatments)", desc: "4-Step Process & Tech" },
                { name: "Gallery (/gallery)", desc: "Verified Reviews & Facilities" },
                { name: "Insurance (/insurance)", desc: "Direct Billing Partners & FAQ" },
                { name: "Contact (/contact)", desc: "Online Booking & Google Map" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="group p-3 sm:p-3.5 rounded-xl bg-[#F8FBFD] hover:bg-[#0F6E8C] border border-slate-200 hover:border-[#0F6E8C] transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md"
                >
                  <p className="font-heading font-bold text-slate-900 group-hover:text-white text-base sm:text-lg transition-colors">
                    {item.name}
                  </p>
                  <p className="text-slate-700 group-hover:text-white/95 text-xs sm:text-sm font-medium mt-0.5 leading-snug transition-colors">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 text-sm sm:text-base text-slate-700">
              <div className="group p-3.5 sm:p-4 rounded-xl bg-slate-50 hover:bg-[#0F6E8C] border border-slate-200/80 hover:border-[#0F6E8C] transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md">
                <strong className="text-slate-900 group-hover:text-white block font-bold text-sm sm:text-base lg:text-lg mb-1 transition-colors">
                  Single-Page Flow on Homepage:
                </strong>
                <p className="text-slate-700 group-hover:text-white/95 text-xs sm:text-sm lg:text-base leading-relaxed transition-colors">
                  Smooth hash scrolling (#services, #team, #appointment) lets visitors complete their journey without page reloads.
                </p>
              </div>
              <div className="group p-3.5 sm:p-4 rounded-xl bg-slate-50 hover:bg-[#0F6E8C] border border-slate-200/80 hover:border-[#0F6E8C] transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md">
                <strong className="text-slate-900 group-hover:text-white block font-bold text-sm sm:text-base lg:text-lg mb-1 transition-colors">
                  Deep Route Indexation:
                </strong>
                <p className="text-slate-700 group-hover:text-white/95 text-xs sm:text-sm lg:text-base leading-relaxed transition-colors">
                  Dedicated routes enable local Google SEO ranking and direct landing pages for ad campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          06 – UI/UX DESIGN SYSTEM (RESPONSIVE COLOR GRID & LIVING TOKENS)
      =================================================================== */}
      <section id="system" className="py-7 sm:py-10 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0F6E8C] block mb-1">
            05 · Design System
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-2">
            Calibrated Color & Token System
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-700 font-medium max-w-2xl mb-4">
            Engineered by ValGrow Labs to reflect clinical calm and luxury aesthetic balance:
          </p>

          {/* Color palette: 2 cols on mobile, 3 on tablet, 6 on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3.5 mb-4">
            {PALETTE.map((c) => (
              <div
                key={c.name}
                onClick={() => copyToClipboard(c.hex)}
                className="p-3 sm:p-3.5 rounded-xl bg-[#F8FBFD] border border-slate-200 hover:shadow-xs cursor-pointer transition-all"
              >
                <div
                  className="h-12 sm:h-16 rounded-lg mb-2 flex items-center justify-center text-xs sm:text-sm font-mono font-black shadow-inner"
                  style={{ backgroundColor: c.hex }}
                >
                  <span className={c.light ? "text-slate-900" : "text-white"}>
                    {copiedColor === c.hex ? "Copied!" : c.hex}
                  </span>
                </div>
                <p className="font-heading font-bold text-xs sm:text-base text-slate-900">{c.name}</p>
                <p className="text-[10px] sm:text-xs font-bold text-[#0F6E8C] mt-0.5">{c.role}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FBFD] border border-slate-200">
              <span className="text-xs sm:text-sm uppercase font-extrabold text-slate-500">Typography Pairing</span>
              <div className="mt-2.5 sm:mt-3 space-y-2.5 sm:space-y-3">
                <div>
                  <span className="text-xs sm:text-sm font-mono font-bold text-[#0F6E8C]">Headings · Poppins SemiBold</span>
                  <p className="font-heading font-bold text-lg sm:text-2xl text-slate-900 mt-0.5">
                    Experience Comprehensive Dental Care
                  </p>
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-mono font-bold text-[#0F6E8C]">Body · Inter Regular</span>
                  <p className="text-xs sm:text-base text-slate-700 leading-relaxed mt-0.5">
                    Clear optical legibility on mobile devices with generous line-height and calibrated letter-spacing.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 text-white flex flex-col justify-between">
              <div>
                <span className="text-xs sm:text-sm uppercase font-extrabold text-[#2EAED6]">Living Tokens</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 mb-3">Core reusable interface elements</p>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <button className="bg-[#2EAED6] text-white text-xs sm:text-sm font-bold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-[0_4px_14px_rgba(46,174,214,0.3)]">
                  .btn-primary
                </button>
                <button className="bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-bold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full">
                  .btn-ghost
                </button>
                <div className="flex items-center gap-1.5 bg-[#25D366] text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-2 rounded-full">
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
      <section id="stack" className="py-7 sm:py-10 bg-[#F8FBFD] border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0F6E8C] block mb-1">
            06 · Engineering
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-2">
            Technology Stack & Speed
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-700 font-medium max-w-2xl mb-4">
            Selected for instantaneous loading, strict type safety, and minimal bundle sizes:
          </p>

          {/* Tech cards: 2 cols on mobile, 4 on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 mb-4">
            <div className="group p-3.5 sm:p-4 rounded-xl bg-white hover:bg-[#0F6E8C] border border-slate-200 hover:border-[#0F6E8C] transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500 group-hover:text-amber-300 mb-1 transition-colors" />
              <p className="font-heading font-bold text-sm sm:text-lg text-slate-900 group-hover:text-white transition-colors">
                Vite 8
              </p>
              <p className="text-xs sm:text-sm text-slate-700 group-hover:text-white/95 mt-0.5 transition-colors">
                Sub-second HMR
              </p>
            </div>
            <div className="group p-3.5 sm:p-4 rounded-xl bg-white hover:bg-[#0F6E8C] border border-slate-200 hover:border-[#0F6E8C] transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md">
              <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 group-hover:text-cyan-300 mb-1 transition-colors" />
              <p className="font-heading font-bold text-sm sm:text-lg text-slate-900 group-hover:text-white transition-colors">
                React 19
              </p>
              <p className="text-xs sm:text-sm text-slate-700 group-hover:text-white/95 mt-0.5 transition-colors">
                Concurrent UI
              </p>
            </div>
            <div className="group p-3.5 sm:p-4 rounded-xl bg-white hover:bg-[#0F6E8C] border border-slate-200 hover:border-[#0F6E8C] transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-500 group-hover:text-indigo-200 mb-1 transition-colors" />
              <p className="font-heading font-bold text-sm sm:text-lg text-slate-900 group-hover:text-white transition-colors">
                TypeScript 5.8
              </p>
              <p className="text-xs sm:text-sm text-slate-700 group-hover:text-white/95 mt-0.5 transition-colors">
                Strict type safety
              </p>
            </div>
            <div className="group p-3.5 sm:p-4 rounded-xl bg-white hover:bg-[#0F6E8C] border border-slate-200 hover:border-[#0F6E8C] transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md">
              <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500 group-hover:text-emerald-300 mb-1 transition-colors" />
              <p className="font-heading font-bold text-sm sm:text-lg text-slate-900 group-hover:text-white transition-colors">
                TanStack Router
              </p>
              <p className="text-xs sm:text-sm text-slate-700 group-hover:text-white/95 mt-0.5 transition-colors">
                Type-safe routes
              </p>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm lg:text-base text-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 font-semibold shadow-xs">
            <span className="flex items-center gap-1.5">✓ Native lazy loading on all doctor images</span>
            <span className="flex items-center gap-1.5">✓ WebM compressed hero video</span>
            <span className="flex items-center gap-1.5">✓ Zero Cumulative Layout Shift (CLS &lt; 0.05)</span>
          </div>
        </div>
      </section>

      {/* ===================================================================
          08 – CONVERSION STRATEGY & PATIENT FUNNEL
      =================================================================== */}
      <section id="funnel" className="py-7 sm:py-10 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0F6E8C] block mb-1">
            07 · Conversion
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-2">
            Patient Journey & Conversion Funnel
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-700 font-medium max-w-2xl mb-4">
            A frictionless conversion pipeline designed to capture high-intent inquiries:
          </p>

          <div className="space-y-2.5 sm:space-y-3 mb-4">
            {[
              { step: "01", title: "Website Visit", desc: "100vh Video hooks patient trust in 3 seconds" },
              { step: "02", title: "Explore Services", desc: "10 clear clinical cards with direct descriptions" },
              { step: "03", title: "Review Doctors", desc: "Dr. Ibrahim's German PhD establishes credibility" },
              { step: "04", title: "Check Insurance", desc: "Daman, AXA, MetLife direct billing reassurance" },
              { step: "05", title: "Book or WhatsApp", desc: "Frictionless 1-tap conversion without hurdles" },
            ].map((item) => (
              <div
                key={item.step}
                className="group p-3 sm:p-4 rounded-xl border border-slate-200 bg-[#F8FBFD] hover:bg-[#0F6E8C] hover:border-[#0F6E8C] text-slate-900 hover:text-white transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 shadow-xs hover:shadow-md cursor-pointer"
              >
                <div className="flex items-center gap-2.5 sm:gap-3.5">
                  <span className="text-xs sm:text-sm font-black text-[#0F6E8C] group-hover:text-cyan-200 transition-colors shrink-0">
                    STAGE {item.step}
                  </span>
                  <h3 className="font-heading font-bold text-sm sm:text-base lg:text-lg text-slate-900 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm lg:text-base font-medium text-slate-700 group-hover:text-white/95 transition-colors sm:text-right">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5 text-xs sm:text-sm lg:text-base text-slate-700">
            <div className="group p-3.5 sm:p-4 rounded-xl bg-[#F8FBFD] hover:bg-[#0F6E8C] border border-slate-200 hover:border-[#0F6E8C] transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md">
              <strong className="text-slate-900 group-hover:text-white block font-bold text-sm sm:text-base lg:text-lg mb-0.5 sm:mb-1 transition-colors">
                Sticky Header CTA:
              </strong>
              <p className="text-slate-700 group-hover:text-white/95 leading-relaxed transition-colors">
                "Book Now" button stays pinned throughout the visit.
              </p>
            </div>
            <div className="group p-3.5 sm:p-4 rounded-xl bg-[#F8FBFD] hover:bg-[#0F6E8C] border border-slate-200 hover:border-[#0F6E8C] transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md">
              <strong className="text-slate-900 group-hover:text-white block font-bold text-sm sm:text-base lg:text-lg mb-0.5 sm:mb-1 transition-colors">
                Dual Phone Protocols:
              </strong>
              <p className="text-slate-700 group-hover:text-white/95 leading-relaxed transition-colors">
                Landline (+971 4 320 2008) and Mobile (+971 54 4432808) direct dial.
              </p>
            </div>
            <div className="group p-3.5 sm:p-4 rounded-xl bg-[#F8FBFD] hover:bg-[#0F6E8C] border border-slate-200 hover:border-[#0F6E8C] transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md">
              <strong className="text-slate-900 group-hover:text-white block font-bold text-sm sm:text-base lg:text-lg mb-0.5 sm:mb-1 transition-colors">
                Local SEO Ready:
              </strong>
              <p className="text-slate-700 group-hover:text-white/95 leading-relaxed transition-colors">
                Google Maps embed & Al Safa 1 physical address markup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          09 – PRE-FOOTER CALL TO ACTION (MATCHING VALGROW LABS CARD)
      =================================================================== */}
      <section className="py-7 sm:py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="p-5 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-md flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6">
            <div className="flex items-center gap-3.5 sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#F8FBFD] border border-slate-200 p-2 flex items-center justify-center shrink-0 shadow-xs">
                <img src="/images/valgrow-logo.jpg" alt="ValGrow Labs" className="w-full h-full object-contain" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-slate-900">
                  Ready to engineer your next digital platform?
                </h2>
                <p className="text-xs sm:text-sm lg:text-base text-slate-600 mt-0.5 sm:mt-1 max-w-xl">
                  ValGrow Labs partners with ambitious brands to build scalable, high-converting digital products.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 shrink-0 w-full lg:w-auto">
              <a
                href="mailto:contact@valgrowlabs.com"
                className="inline-flex items-center justify-center gap-2 bg-[#0F172A] hover:bg-slate-800 text-white text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-sm transition-all text-center"
              >
                <span>Start a Project Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 bg-[#2EAED6] hover:bg-[#249CC0] text-white text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all shadow-[0_4px_14px_rgba(46,174,214,0.3)] text-center"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive Clinic Demo</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          10 – VALGROW LABS AGENCY FOOTER
      =================================================================== */}
      <footer className="bg-[#0F172A] text-white pt-8 sm:pt-10 pb-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 mb-6">
          <div className="md:col-span-5 space-y-3">
            <ValGrowLogoDark />
            <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed max-w-sm">
              We design and engineer bespoke software platforms, high-converting digital storefronts, and intelligent operations systems for forward-thinking enterprises.
            </p>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-400">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span>Designed & Engineered by ValGrow Labs</span>
            </div>
          </div>

          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#2EAED6]">
              CASE STUDY SECTIONS
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm lg:text-base text-slate-200">
              <li><a href="#brief" className="hover:text-white transition">The Brief & Challenges</a></li>
              <li><a href="#strategy" className="hover:text-white transition">Engineering Blueprint</a></li>
              <li><a href="#system" className="hover:text-white transition">UI/UX Design System</a></li>
              <li><a href="#stack" className="hover:text-white transition">Technology & Stack</a></li>
              <li><a href="#funnel" className="hover:text-white transition">Business Impact & Funnel</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#2EAED6]">
              CLIENT & PROJECT METADATA
            </h4>
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-200">
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Client:</span>
                <span className="font-semibold text-white">Bin Arab Dental Centre</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Deliverable:</span>
                <span className="font-semibold text-white">Luxury Redesign & Web Platform</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Agency:</span>
                <span className="font-bold text-[#2EAED6]">ValGrow Labs</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">Year:</span>
                <span className="font-semibold text-white">2026 Production</span>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <Link
                to="/"
                className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold py-2.5 sm:py-3 px-4 rounded-xl transition border border-white/10 text-center"
              >
                <span>Visit Bin Arab Dental Live</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#2EAED6] hover:bg-[#249CC0] text-white text-xs sm:text-sm font-bold py-2.5 sm:py-3 px-4 rounded-xl transition shadow-md shadow-[#2EAED6]/20 text-center"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Launch Interactive Clinic Prototype</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs sm:text-sm text-slate-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} ValGrow Labs. All rights reserved.</p>
          <p>Bin Arab Dental Centre Website Redesign · Case Study</p>
        </div>
      </footer>
    </div>
  );
}
