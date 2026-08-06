import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  Sparkles, ChevronRight, CheckCircle, ArrowRight, Award, Shield,
  Smile, Heart, Users, DollarSign, Activity, UserCheck, Laptop, Stethoscope
} from "lucide-react";
import { Layout } from "../components/Layout";

export const Route = createFileRoute("/offers")({
  component: Offers,
});

const OFFERS_LIST = [
  {
    title: "Teeth Whitening – Up to 20% Off",
    discount: "Up to 20% Off",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop",
    desc: "Brighten your smile dramatically with our advanced clinical in-office whitening procedure. Quick, completely safe, and highly effective for lifting stubborn stains.",
  },
  {
    title: "Invisalign Consultation",
    discount: "Free Consultation",
    img: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=600&auto=format&fit=crop",
    desc: "Meet our certified Invisalign providers for a detailed assessment of your alignment. Get a custom 3D smile projection and treatment planning.",
  },
  {
    title: "Dental Implants Offer",
    discount: "Special Pricing",
    img: "https://binarabdentalcentre.com/assets/img/services/dentalimplant.png",
    desc: "Permanent and natural-looking tooth replacement solution. Implants are designed and placed by our highly experienced specialist Emirati prosthodontists.",
  },
  {
    title: "Veneers Consultation",
    discount: "Free Consultation",
    img: "https://images.unsplash.com/photo-1513412583790-264b73060b85?q=80&w=600&auto=format&fit=crop",
    desc: "Map out your custom smile makeover. Consult with our cosmetic specialists to select the perfect shape, shade, and alignment for custom hand-layered ceramic veneers.",
  },
  {
    title: "Family Dental Check-up",
    discount: "Family Package",
    img: "https://images.unsplash.com/photo-1484665729137-f46e52b99505?q=80&w=600&auto=format&fit=crop",
    desc: "Ensure comprehensive oral hygiene for everyone. Package includes complete routine check-up, digital diagnostic low-radiation X-rays, and standard scale & polish.",
  },
  {
    title: "Children's Dental Care",
    discount: "15% Kid's Discount",
    img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600&auto=format&fit=crop",
    desc: "A warm, positive introduction to oral hygiene for kids. Includes child-friendly routine check-ups, tooth-brushing instruction, and preventive fluoride applications.",
  },
];

const WHY_CHOOSE_US = [
  {
    title: "Experienced Specialists",
    icon: Users,
    desc: "Our clinical team consists of highly experienced Emirati, Turkish, and international specialists collaborating on dental implants, veneers, and prosthodontics.",
  },
  {
    title: "Modern Technology",
    icon: Activity,
    desc: "Our Al Safa clinic is equipped with advanced low-radiation digital imaging, digital intraoral 3D scanners, and computer-guided surgery software.",
  },
  {
    title: "Affordable Pricing",
    icon: DollarSign,
    desc: "Access premium specialist dental care at highly competitive rates, supported by flexible treatment payment options and active direct-billing networks.",
  },
  {
    title: "Digital Dentistry",
    icon: Laptop,
    desc: "Every smile restoration is digitally planned, allowing highly predictable results, seamless prosthetics, and maximum physical comfort during treatment.",
  },
  {
    title: "Personalized Treatment",
    icon: UserCheck,
    desc: "No two smiles are identical. We curate custom-tailored dental treatment plans based on your specific facial structure, medical history, and goals.",
  },
  {
    title: "Comfortable Environment",
    icon: Smile,
    desc: "Our clinical space is designed to reduce patient anxiety. Enjoy warm hospitality, calming music, and a tranquil atmosphere at every visit.",
  },
];

const TREATMENT_CATEGORIES = [
  {
    title: "Teeth Whitening",
    icon: Sparkles,
    desc: "Clinical bleaching options using advanced medical-grade light and customized maintenance trays to lift years of dark stains and yellowing.",
  },
  {
    title: "Dental Implants",
    icon: Stethoscope,
    desc: "Replacement of missing teeth using biocompatible titanium or ceramic roots and hand-crafted porcelain crowns to restore complete chewing and aesthetics.",
  },
  {
    title: "Invisalign",
    icon: Smile,
    desc: "State-of-the-art clear aligners that move teeth gradually and discreetly into alignment. Enjoy a metal-free, comfortable orthodontic treatment.",
  },
  {
    title: "Veneers",
    icon: Heart,
    desc: "Ultra-thin, custom ceramic shells bonded to the front of teeth to correct spacing, chips, misalignment, and build a beautiful, bright smile.",
  },
  {
    title: "Root Canal",
    icon: Shield,
    desc: "Precision endodontic therapies designed to treat nerve infection under microscopic magnification, ensuring you save your natural tooth painlessly.",
  },
  {
    title: "General Dentistry",
    icon: Award,
    desc: "Comprehensive check-ups, dental cleanings, preventative care, cosmetic composites, and early detection diagnostics for healthy teeth.",
  },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Offers() {
  useReveal();

  return (
    <Layout>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[color:var(--color-ink)] overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop"
            alt="Bin Arab Dental Centre modern dental clinic"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)] via-[color:var(--color-ink)]/50 to-transparent z-10" />
        </div>
        <div className="relative max-w-5xl mx-auto text-center px-6 z-20 py-24">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[color:var(--color-brand-2)]" /> Special Offers & Packages
          </span>
          <h1 className="font-heading font-semibold text-white text-4xl sm:text-6xl leading-[1.1] tracking-tight">
            Exclusive Dental Offers <br />in Dubai
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-white/80 text-base sm:text-lg font-light leading-relaxed">
            Affordable, premium dental care with limited-time offers at Bin Arab Dental Centre.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              hash="appointment"
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4 shadow-lg hover:shadow-xl transition"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* 2. FEATURED OFFERS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <p className="text-[color:var(--color-brand)] font-medium tracking-widest uppercase text-xs mb-4">Limited-Time Packages</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-semibold leading-tight tracking-tight text-[color:var(--color-ink)]">
              Our Featured Dental Offers
            </h2>
            <div className="h-1 w-20 bg-[color:var(--color-brand)] mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {OFFERS_LIST.map((offer, i) => (
              <div
                key={offer.title}
                className="group card-soft overflow-hidden border border-slate-100 flex flex-col justify-between h-full bg-white transition-transform duration-300 hover:-translate-y-1.5 reveal"
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                <div className="relative h-56 w-full overflow-hidden bg-slate-100 shrink-0">
                  <img
                    src={offer.img}
                    alt={offer.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-[color:var(--color-brand)] text-white text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                    {offer.discount}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-heading font-semibold text-xl text-[color:var(--color-ink)] mb-3 group-hover:text-[color:var(--color-brand)] transition-colors">
                    {offer.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                    {offer.desc}
                  </p>
                  <Link
                    to="/contact"
                    hash="appointment"
                    className="btn-primary w-full text-center mt-auto shadow-md"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="py-24 bg-[color:var(--color-surface)] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <p className="text-[color:var(--color-brand)] font-medium tracking-widest uppercase text-xs mb-4">Redefining Oral Health</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-semibold leading-tight tracking-tight text-[color:var(--color-ink)]">
              Why Choose Bin Arab Dental Centre
            </h2>
            <div className="h-1 w-20 bg-[color:var(--color-brand)] mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="card-soft p-8 bg-white border border-slate-100 flex flex-col items-start transition-transform duration-300 hover:-translate-y-1 reveal"
                  style={{ transitionDelay: `${(i % 3) * 60}ms` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-[#2EAED6]/30"
                    style={{ background: "rgba(46,174,214,0.06)" }}
                  >
                    <Icon className="w-6 h-6 text-[color:var(--color-brand)]" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-[color:var(--color-ink)] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. BEFORE & AFTER */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal">
              <div className="card-soft overflow-hidden border border-slate-100">
                <div className="grid grid-cols-2 relative bg-[color:var(--color-surface)]">
                  <div className="relative">
                    <img
                      src="https://binarabdentalcentre.com/assets/img/services/ceramicveneer.png"
                      alt="Dental structure before Veneers"
                      className="w-full h-64 object-contain opacity-75 p-6"
                    />
                    <span className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider font-semibold shadow-sm">
                      Before
                    </span>
                  </div>
                  <div className="relative border-l border-slate-200">
                    <img
                      src="https://binarabdentalcentre.com/assets/img/services/ceramicveneer.png"
                      alt="Smiling face after Veneers"
                      className="w-full h-64 object-contain p-6"
                    />
                    <span className="absolute bottom-4 left-4 bg-[color:var(--color-brand)] text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider font-semibold shadow-sm">
                      After
                    </span>
                  </div>
                </div>
                <div className="p-6 text-center bg-slate-50 border-t border-slate-100">
                  <h4 className="font-heading font-semibold text-lg text-[color:var(--color-ink)]">Aesthetic Smile Makeover</h4>
                  <p className="text-slate-500 text-xs mt-1">Stunning veneer treatment results addressing chip damage, surface stains, and minor tooth alignment gaps.</p>
                </div>
              </div>
            </div>

            <div className="reveal" style={{ transitionDelay: "150ms" }}>
              <p className="text-[color:var(--color-brand)] font-medium tracking-widest uppercase text-xs mb-4">Patient Transformations</p>
              <h2 className="text-3xl lg:text-5xl font-heading font-semibold leading-tight tracking-tight text-[color:var(--color-ink)] mb-6">
                A Smile You'll Be Proud to Share
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our patients experience life-changing aesthetic improvements. By choosing custom digital diagnostics, laser dentistry, and state-of-the-art ceramic restorative materials, we help patients lift deep staining, close spacing gaps, and correct misalignment smoothly.
              </p>
              <Link
                to="/services"
                className="btn-ghost inline-flex items-center gap-2 group shadow-sm"
              >
                Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TREATMENT CATEGORIES */}
      <section className="py-24 bg-[color:var(--color-surface)] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <p className="text-[color:var(--color-brand)] font-medium tracking-widest uppercase text-xs mb-4">Treatment Options</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-semibold leading-tight tracking-tight text-[color:var(--color-ink)]">
              Explore Our Dental Procedures
            </h2>
            <div className="h-1 w-20 bg-[color:var(--color-brand)] mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TREATMENT_CATEGORIES.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="card-soft p-8 bg-white border border-slate-100 flex flex-col justify-between items-start transition-transform duration-300 hover:-translate-y-1 reveal"
                  style={{ transitionDelay: `${(i % 3) * 60}ms` }}
                >
                  <div className="w-full">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 shadow-sm"
                      style={{ background: "rgba(46,174,214,0.06)" }}
                    >
                      <Icon className="w-5.5 h-5.5 text-[color:var(--color-brand)]" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-[color:var(--color-ink)] mb-3">
                      {cat.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      {cat.desc}
                    </p>
                  </div>
                  <Link
                    to="/services"
                    className="text-[color:var(--color-brand)] hover:text-[#249CC0] hover:underline inline-flex items-center gap-1 mt-2 text-sm font-semibold transition-colors group"
                  >
                    View Details <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#2EAED6,#39A9DB)" }}>
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <h3 className="text-3xl lg:text-4xl font-heading font-semibold text-white mb-6">Ready to Transform Your Smile?</h3>
          <p className="text-white/90 max-w-xl mx-auto mb-10 text-sm lg:text-base font-light leading-relaxed">
            Book your consultation today and discover our latest dental offers.
          </p>
          <Link
            to="/contact"
            hash="appointment"
            className="inline-flex items-center gap-2 bg-white text-[color:var(--color-brand)] font-semibold px-8 py-4 rounded-full hover:bg-white/95 transition shadow-lg hover:shadow-xl"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </Layout>
  );
}

