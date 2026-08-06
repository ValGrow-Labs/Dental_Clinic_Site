import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake, FileText, CheckCircle, HelpCircle, ChevronDown } from "lucide-react";
import { Layout } from "../components/Layout";

export const Route = createFileRoute("/insurance")({
  component: InsurancePage,
});

const INSURANCE_PARTNERS = [
  { name: "MetLife", type: "Direct Billing Partner" },
  { name: "NextCare", type: "Direct Billing Partner" },
  { name: "AXA (Gulf Insurance Group)", type: "Direct Billing Partner" },
  { name: "Cigna", type: "Direct Billing Partner" },
  { name: "Sukoon (Oman Insurance)", type: "Direct Billing Partner" },
  { name: "Daman (National Health)", type: "Direct Billing Partner" },
  { name: "Neuron", type: "Direct Billing Partner" },
  { name: "MedNet", type: "Direct Billing Partner" }
];

const FAQS = [
  { q: "Does the clinic offer direct billing for my treatment?", a: "Yes, we support direct billing for direct partners. Our team handles the claim submission and approvals on your behalf. You only pay your copay or deductible, depending on your plan specifications." },
  { q: "What should I bring to my first appointment?", a: "Please bring a copy of your valid Emirates ID and your digital or physical insurance card. Our receptionists will verify your network coverage and details immediately." },
  { q: "Are cosmetic treatments like veneers or whitening covered by insurance?", a: "Generally, basic cosmetic procedures (teeth whitening, ceramic veneers, orthodontic alignment for aesthetics only) are not covered by standard insurance policies as they are considered optional. However, restorative procedures (root canal, dental crowns for decay, restorative fillings, and emergency toothaches) are usually covered." },
  { q: "What happens if my insurance company is not listed in direct billing?", a: "If your insurance is out-of-network, you can pay for the treatment in-clinic, and we will provide you with all required documents (claim form signed by the doctor, medical report, and itemized invoice) so you can easily submit for reimbursement." }
];

function InsurancePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      {/* HERO BANNER */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-[color:var(--color-ink)] overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(15,110,140,0.15),transparent)] z-0" />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative max-w-5xl mx-auto text-center px-6 z-20 py-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[color:var(--color-brand-2)]" /> Payments & Insurance
          </span>
          <h1 className="font-heading font-semibold text-white text-4xl sm:text-6xl leading-[1.1] tracking-tight">
            Insurance & Coverage
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-white/80 text-base sm:text-lg font-light leading-relaxed">
            We work with leading regional and international insurance partners to ensure direct-billing options for your dental treatments.
          </p>
        </div>
      </section>

      {/* INSURANCE PARTNERS GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[color:var(--color-brand)] font-medium tracking-widest uppercase text-xs mb-4">Our Network</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-semibold tracking-tight text-[color:var(--color-ink)]">
              Direct Billing Partners
            </h2>
            <p className="text-slate-600 leading-relaxed mt-4">
              We process claims directly with the following insurance providers in Dubai:
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {INSURANCE_PARTNERS.map((partner) => (
              <div key={partner.name} className="card-soft p-8 text-center border border-slate-100 flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-xl bg-[color:var(--color-surface)] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-[color:var(--color-brand)]" />
                </div>
                <h4 className="font-heading font-semibold text-lg text-[color:var(--color-ink)] mb-1">{partner.name}</h4>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-medium">{partner.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE INFORMATION */}
      <section className="py-24 bg-[color:var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-[color:var(--color-brand)] font-medium tracking-widest uppercase text-xs mb-4">Direct billing</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-semibold tracking-tight text-[color:var(--color-ink)] mb-6">
              Dental Treatment Insurance Coverage
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Insurance coverage varies depending on your specific policy and employer agreement. Our in-house insurance experts coordinates directly with the providers to check pre-approvals and copayment percentages before treatment starts.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[color:var(--color-brand)] shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-[color:var(--color-ink)] text-sm">Covered (Typically)</h5>
                  <p className="text-xs text-slate-500">Preventative checkups, scaling/cleaning, digital X-rays, root canals, simple extractions, composite fillings.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-[color:var(--color-ink)] text-sm">Pre-Approval Required</h5>
                  <p className="text-xs text-slate-500">Crowns, complex surgical extractions, dental implants, select periodontal root-planing.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-[color:var(--color-ink)] text-sm">Usually Excluded</h5>
                  <p className="text-xs text-slate-500">Aesthetic veneers, tooth whitening procedures, cosmetic orthodontics/aligners (unless medical necessity is proven).</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden relative shadow-lg bg-white p-8 lg:p-12 border border-slate-100">
            <h4 className="font-heading font-semibold text-2xl text-[color:var(--color-ink)] mb-6">Reimbursement Support</h4>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              If your insurer is not part of our direct-billing network, we provide you with all documentation needed to claim reimbursement. This includes:
            </p>
            <ul className="space-y-3 mb-8 text-slate-700 text-xs font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4.5 h-4.5 text-[color:var(--color-brand)] shrink-0" />
                DHA-standard claim form signed by treating doctor
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4.5 h-4.5 text-[color:var(--color-brand)] shrink-0" />
                Low-radiation digital radiography images copy
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4.5 h-4.5 text-[color:var(--color-brand)] shrink-0" />
                Comprehensive medical justification report
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4.5 h-4.5 text-[color:var(--color-brand)] shrink-0" />
                Itemized invoice and transaction receipts
              </li>
            </ul>
            <Link to="/contact" hash="appointment" className="btn-primary text-xs w-full text-center">
              Request Reimbursement Form
            </Link>
          </div>
        </div>
      </section>

      {/* CLAIMS PROCESS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[color:var(--color-brand)] font-medium tracking-widest uppercase text-xs mb-4">Patient Workflow</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-semibold tracking-tight text-[color:var(--color-ink)]">
              Direct Billing Claims Process
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-soft p-8 text-center border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-[color:var(--color-surface)] flex items-center justify-center mx-auto mb-6">
                <HeartHandshake className="w-6 h-6 text-[color:var(--color-brand)]" />
              </div>
              <h4 className="font-heading font-semibold text-xl text-[color:var(--color-ink)] mb-3">1. Present Card</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Provide your Emirates ID and insurance card (physical or e-card via app) to our reception team upon check-in.
              </p>
            </div>
            <div className="card-soft p-8 text-center border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-[color:var(--color-surface)] flex items-center justify-center mx-auto mb-6">
                <FileText className="w-6 h-6 text-[color:var(--color-brand)]" />
              </div>
              <h4 className="font-heading font-semibold text-xl text-[color:var(--color-ink)] mb-3">2. Eligibility Check</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                We perform an instant check to verify coverage eligibility, deductible rules, copay percentages, and get approvals.
              </p>
            </div>
            <div className="card-soft p-8 text-center border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-[color:var(--color-surface)] flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-6 h-6 text-[color:var(--color-brand)]" />
              </div>
              <h4 className="font-heading font-semibold text-xl text-[color:var(--color-ink)] mb-3">3. Treatment & Copay</h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Receive your specialist care. Pay only your copay amount at check-out; we settle the remainder directly with the insurer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-[color:var(--color-surface)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[color:var(--color-brand)] font-medium tracking-widest uppercase text-xs mb-4">Insurance FAQs</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-semibold tracking-tight text-[color:var(--color-ink)]">
              Frequently Asked Questions
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
            Have Questions About Insurance Coverage?
          </h3>
          <p className="text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto">
            Send us your card details via email or schedule an appointment. Our insurance coordinators will check your exact eligibility specs instantly.
          </p>
          <Link to="/contact" hash="appointment" className="inline-flex items-center gap-2 bg-white text-[color:var(--color-brand)] font-semibold px-8 py-4 rounded-full hover:bg-white/95 transition shadow-lg hover:shadow-xl">
            Inquire Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
