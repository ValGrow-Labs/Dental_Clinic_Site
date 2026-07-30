import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, ChevronRight, CheckCircle, ArrowRight } from "lucide-react";
import { Layout } from "../components/Layout";

export const Route = createFileRoute("/services")({
  component: Services,
});

const SERVICES = [
  { name: "Dental Implant", img: "https://binarabdentalcentre.com/assets/img/services/dentalimplant.png", desc: "Permanent, natural-looking replacement of missing teeth utilizing advanced titanium and zirconia biocompatible implant structures." },
  { name: "Cosmetic Denture", img: "https://binarabdentalcentre.com/assets/img/services/cosmetic%20denture.png", desc: "Custom-designed complete or partial dentures using lightweight, premium materials to restore natural chewing function and aesthetics." },
  { name: "Dental Emergency", img: "https://binarabdentalcentre.com/assets/img/services/dental%20emergency.png", desc: "Immediate, specialized response to acute dental pain, swelling, knocked-out teeth, broken crowns, or wisdom tooth flare-ups." },
  { name: "Invisalign", img: "https://binarabdentalcentre.com/assets/img/services/invisalign.png", desc: "Clear, removable aligner technology that straightens teeth gradually and virtually invisibly without metal brackets." },
  { name: "Child Oral Care", img: "https://binarabdentalcentre.com/assets/img/services/childoralcare.png", desc: "Comfortable and reassuring pediatric dental health visits, focusing on sealants, brushing education, and early cavity detection." },
  { name: "Dental Check Up", img: "https://binarabdentalcentre.com/assets/img/services/dentalcheckup.png", desc: "Routine detailed examinations, digital low-radiation diagnostics, scale and polish hygiene visits, and early oral cancer screening." },
  { name: "Aesthetic Dentistry", img: "https://binarabdentalcentre.com/assets/img/services/ceramicveneer.png", desc: "Cosmetic smiles redesigns involving hand-layered ceramic veneers, porcelain crowns, composite bonding, and gum recontouring." },
  { name: "Endodontics", img: "https://binarabdentalcentre.com/assets/img/services/DENTALRESTORATION.png", desc: "Microscopic root canal therapies and structural restorations aimed at resolving deep infections and preserving natural teeth." },
  { name: "Teeth Whitening", img: "https://binarabdentalcentre.com/assets/img/services/teethwhitening.png", desc: "Medical-grade laser teeth whitening and customized maintenance take-home trays to erase deep stains comfortably." },
  { name: "Tooth Extraction", img: "https://binarabdentalcentre.com/assets/img/services/toothextraction.png", desc: "Gentle surgical extractions of non-restorable teeth and precision impacted wisdom teeth removals under digital anesthesia." },
];

function Services() {
  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-[color:var(--color-ink)] overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(15,110,140,0.15),transparent)] z-0" />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative max-w-5xl mx-auto text-center px-6 z-20 py-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[color:var(--color-brand-2)]" /> Clinical Offerings
          </span>
          <h1 className="font-heading font-semibold text-white text-4xl sm:text-6xl leading-[1.1] tracking-tight">
            Our Dental Services in Dubai
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-white/80 text-base sm:text-lg font-light leading-relaxed">
            From essential hygiene routines to complex surgical smile rehabilitations, we offer specialized care tailored to your family's needs.
          </p>
        </div>
      </section>

      {/* SERVICE GRID SECTION */}
      <section className="py-24 bg-[color:var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
            {SERVICES.map((s, i) => (
              <a
                key={s.name}
                href={`#detail-${s.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="group card-soft p-4 h-[340px] flex flex-col items-center text-center cursor-pointer transition-transform duration-300"
                style={{ transitionDelay: `${(i % 5) * 60}ms` }}
              >
                <div className="w-full h-[220px] rounded-[12px] bg-white flex items-center justify-center overflow-hidden mb-4 shadow-sm border border-slate-100">
                  <img
                    src={s.img}
                    alt={s.name}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-[12px] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-heading font-semibold text-sm text-[color:var(--color-ink)] mt-auto leading-tight">
                  {s.name}
                </h3>
              </a>
            ))}
          </div>

          <hr className="border-slate-200/80 mb-24" />

          {/* DETAILED SERVICES DESCRIPTIONS */}
          <div className="space-y-16">
            <div className="max-w-3xl mb-12">
              <p className="text-[color:var(--color-brand)] font-medium tracking-widest uppercase text-xs mb-4">Treatment Breakdown</p>
              <h2 className="text-3xl lg:text-5xl font-heading font-semibold tracking-tight text-[color:var(--color-ink)]">
                Understanding Your Dental Care
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {SERVICES.map((s) => (
                <div
                  key={s.name}
                  id={`detail-${s.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col justify-between scroll-mt-24"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[color:var(--color-surface)] flex items-center justify-center overflow-hidden border border-slate-100 shrink-0">
                        <img src={s.img} alt={s.name} className="w-8 h-8 object-cover" />
                      </div>
                      <h4 className="font-heading font-semibold text-xl text-[color:var(--color-ink)]">{s.name}</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {s.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[color:var(--color-brand)]">
                    <CheckCircle className="w-4 h-4 text-[color:var(--color-brand)]" />
                    Specialist-delivered Treatment
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#0F6E8C,#39A9DB)" }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(255,255,255,0.15),transparent)]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h3 className="text-white text-3xl lg:text-4xl font-heading font-semibold leading-tight mb-4">
            Need Expert Advice or Treatment?
          </h3>
          <p className="text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto">
            Book an appointment online or contact our reception team to find the best slot. We accept various major insurance direct-billing options.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-[color:var(--color-brand)] font-semibold px-8 py-4 rounded-full hover:bg-white/95 transition shadow-lg hover:shadow-xl">
            Schedule Appointment <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
