import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Smile, Stethoscope, Sparkles, Shield, Heart, Award, ArrowRight, Check, HelpCircle, ChevronDown } from "lucide-react";
import { Layout } from "../components/Layout";

export const Route = createFileRoute("/treatments")({
  component: TreatmentsPage,
});

const TREATMENTS_DETAILS = [
  {
    title: "Invisalign & Alignment",
    desc: "Achieve a straight, healthy smile discreetly using clear aligners customized to your tooth structure. No metal wires, fully removable, and highly predictable.",
    bullets: ["3D intraoral digital planning", "Removable & easy to clean", "Fewer dental checkup visits", "Virtually invisible aesthetics"],
    icon: Smile
  },
  {
    title: "Dental Implants",
    desc: "Restore missing teeth permanently. Implants function, feel, and look exactly like natural teeth, placed with digital precision by our Prosthodontist.",
    bullets: ["High grade biocompatible titanium", "Restores speech and chewing", "Prevents bone loss in the jaw", "Lifelong tooth replacement solution"],
    icon: Stethoscope
  },
  {
    title: "Teeth Whitening",
    desc: "Safely lift stains and brighten your smile with medical-grade laser treatment, yielding dramatic results in under an hour without enamel damage.",
    bullets: ["Up to 8 shades lighter in 1 visit", "Enamel-safe laser activation", "Custom desensitizing treatments", "Take-home maintenance kits included"],
    icon: Sparkles
  },
  {
    title: "Root Canal Treatment",
    desc: "Relieve tooth pain and save your natural tooth. Our specialists use advanced digital apex locators and micro-rotary instruments for comfortable, quiet precision.",
    bullets: ["Pain-free digital anesthesia", "98% treatment success rate", "Quiet micro-rotary instruments", "Completed in 1 or 2 visits"],
    icon: Shield
  },
  {
    title: "Aesthetic Dentistry",
    desc: "Transform your smile with porcelain veneers, ceramic crowns, or composite bonding customized to fit your natural facial symmetry.",
    bullets: ["Natural translucency veneers", "Digital smile preview design", "Minimally invasive preparation", "Expert color matching under day-light"],
    icon: Heart
  },
  {
    title: "Child Oral Care",
    desc: "Gentle preventative dental care for infants, children, and teenagers to build a positive lifelong perspective on dental hygiene.",
    bullets: ["Friendly, non-intimidating space", "Dental sealants & fluoride protection", "Habit counseling & guidance", "Painless pediatric procedures"],
    icon: Award
  }
];

const PROCESS_STEPS = [
  { step: "01", title: "Consultation & Scan", text: "We perform a thorough exam, take digital low-radiation X-rays, and map your teeth using our high-definition 3D intraoral scanner." },
  { step: "02", title: "Smile Plan & Preview", text: "Our specialist team designs your custom plan, showing you a digital preview of your final smile design before starting any procedure." },
  { step: "03", title: "Comfortable Treatment", text: "We execute your treatment with quiet precision, utilizing digital painless anesthesia and high-standard sterile workflows." },
  { step: "04", title: "Reveal & Care support", text: "Reveal your healthy, beautiful smile. We provide complete maintenance plans and hygiene support to keep it looking perfect." }
];

const FAQS = [
  { q: "How long does a typical Invisalign treatment take?", a: "Most Invisalign treatments last between 6 to 18 months, depending on the complexity of your alignment needs. You will receive a series of custom aligners to switch every 1 to 2 weeks." },
  { q: "Is the dental implant procedure painful?", a: "No, patients report minimal to no discomfort. The procedure is performed under digital local anesthesia to completely numb the area. Post-procedure soreness is easily managed with standard mild analgesics." },
  { q: "What is the difference between veneers and crowns?", a: "Veneers are thin porcelain shells bonded only to the front surface of the tooth, ideal for minor chips, gaps, or staining. Crowns wrap around the entire tooth structure to restore strength to heavily decayed or broken teeth." },
  { q: "How often should I book a professional hygiene scaling?", a: "We recommend a professional checkup and hygiene scale and polish every 6 months to prevent plaque buildup, keep gums healthy, and spot any potential concerns early." }
];

function TreatmentsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      {/* HERO BANNER */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-[color:var(--color-ink)] overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(15,110,140,0.15),transparent)] z-0" />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative max-w-5xl mx-auto text-center px-6 z-20 py-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[color:var(--color-brand-2)]" /> Clinical Specialties
          </span>
          <h1 className="font-heading font-semibold text-white text-4xl sm:text-6xl leading-[1.1] tracking-tight">
            Specialist Treatments
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-white/80 text-base sm:text-lg font-light leading-relaxed">
            Delivering signature dental treatments with quiet precision, utilizing cutting-edge dental technology for predictable, beautiful outcomes.
          </p>
        </div>
      </section>

      {/* DETAILED TREATMENT CARDS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TREATMENTS_DETAILS.map((t, i) => {
              const Icon = t.icon;
              return (
                <div key={t.title} className="card-soft p-8 border border-slate-100 flex flex-col justify-between" style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
                  <div>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background: "linear-gradient(135deg,#0F6E8C,#39A9DB)" }}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-semibold mb-4 text-[color:var(--color-ink)]">{t.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{t.desc}</p>
                    <ul className="space-y-2 mb-8">
                      {t.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-slate-700 text-xs font-medium">
                          <Check className="w-4 h-4 text-[color:var(--color-brand)] shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/contact" hash="appointment" className="inline-flex items-center gap-2 text-[color:var(--color-brand)] font-semibold text-sm hover:underline">
                    Inquire Treatment <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TREATMENT PROCESS */}
      <section className="py-24 bg-[color:var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-16">
            <p className="text-[color:var(--color-brand)] font-medium tracking-widest uppercase text-xs mb-4">Patient Journey</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-semibold tracking-tight text-[color:var(--color-ink)]">
              Our Precise Treatment Process
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((s) => (
              <div key={s.step} className="bg-white rounded-3xl p-8 border border-slate-100 relative shadow-sm">
                <span className="text-5xl font-heading font-bold text-slate-100 absolute top-6 right-6 select-none">{s.step}</span>
                <h4 className="font-heading font-semibold text-lg text-[color:var(--color-ink)] mb-3 relative z-10">{s.title}</h4>
                <p className="text-slate-600 text-xs leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[color:var(--color-brand)] font-medium tracking-widest uppercase text-xs mb-4">Transformations</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-semibold tracking-tight text-[color:var(--color-ink)]">
              Smile Transformations
            </h2>
            <p className="text-slate-600 leading-relaxed mt-4">
              Explore actual results of smile restorations designed by Dr. Ibrahim Bin Arab and our specialist team.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-soft overflow-hidden border border-slate-100">
              <div className="grid grid-cols-2 relative bg-[color:var(--color-surface)]">
                <div className="relative">
                  <img
                    src="https://binarabdentalcentre.com/assets/img/services/ceramicveneer.png"
                    alt="Dental structure before Veneers"
                    className="w-full h-48 object-contain opacity-70 p-4"
                  />
                  <span className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold">Before</span>
                </div>
                <div className="relative border-l border-slate-200">
                  <img
                    src="https://binarabdentalcentre.com/assets/img/services/ceramicveneer.png"
                    alt="Smiling face after Veneers"
                    className="w-full h-48 object-contain p-4"
                  />
                  <span className="absolute bottom-3 left-3 bg-[color:var(--color-brand)] text-white text-xs px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold">After</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h4 className="font-heading font-semibold text-lg text-[color:var(--color-ink)] mb-2">Aesthetic Smile Redesign</h4>
                <p className="text-slate-500 text-xs">Composite veneers placement to address surface chips and alignment gaps.</p>
              </div>
            </div>

            <div className="card-soft overflow-hidden border border-slate-100">
              <div className="grid grid-cols-2 relative bg-[color:var(--color-surface)]">
                <div className="relative">
                  <img
                    src="https://binarabdentalcentre.com/assets/img/services/teethwhitening.png"
                    alt="Teeth color before whitening"
                    className="w-full h-48 object-contain opacity-70 p-4"
                  />
                  <span className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold">Before</span>
                </div>
                <div className="relative border-l border-slate-200">
                  <img
                    src="https://binarabdentalcentre.com/assets/img/services/teethwhitening.png"
                    alt="Whitened teeth result"
                    className="w-full h-48 object-contain p-4"
                  />
                  <span className="absolute bottom-3 left-3 bg-[color:var(--color-brand)] text-white text-xs px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold">After</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h4 className="font-heading font-semibold text-lg text-[color:var(--color-ink)] mb-2">Laser Teeth Whitening</h4>
                <p className="text-slate-500 text-xs">Clinical in-office whitening procedure to lift dark stains and yellow shading.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-[color:var(--color-surface)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[color:var(--color-brand)] font-medium tracking-widest uppercase text-xs mb-4">Common Questions</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-semibold tracking-tight text-[color:var(--color-ink)]">
              Treatment FAQs
            </h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((f, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={f.q} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="font-heading font-semibold text-base sm:text-lg text-[color:var(--color-ink)] flex items-start gap-3">
                      <HelpCircle className="w-5.5 h-5.5 text-[color:var(--color-brand)] shrink-0 mt-0.5" />
                      {f.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ml-4 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-slate-600 border-t border-slate-50 leading-relaxed pl-14">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#0F6E8C,#39A9DB)" }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(255,255,255,0.15),transparent)]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h3 className="text-white text-3xl lg:text-4xl font-heading font-semibold leading-tight mb-4">
            Schedule a Treatment Consultation
          </h3>
          <p className="text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto">
            Discuss your clinical goals with Dr. Ibrahim Bin Arab and our specialist team. We design bespoke smiles with predictability and precision.
          </p>
          <Link to="/contact" hash="appointment" className="inline-flex items-center gap-2 bg-white text-[color:var(--color-brand)] font-semibold px-8 py-4 rounded-full hover:bg-white/95 transition shadow-lg hover:shadow-xl">
            Book Appointment <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
