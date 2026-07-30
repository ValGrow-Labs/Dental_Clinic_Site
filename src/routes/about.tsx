import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Shield, Heart, Sparkles, CheckCircle, Clock, MapPin, Smile, ArrowRight } from "lucide-react";
import { Layout } from "../components/Layout";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <Layout>
      {/* HERO BANNER */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-[color:var(--color-ink)] overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(15,110,140,0.15),transparent)] z-0" />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative max-w-5xl mx-auto text-center px-6 z-20 py-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[color:var(--color-brand-2)]" /> About Our Centre
          </span>
          <h1 className="font-heading font-semibold text-white text-4xl sm:text-6xl leading-[1.1] tracking-tight">
            Pioneering Dental Excellence <br />in Dubai
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-white/80 text-base sm:text-lg font-light leading-relaxed">
            Founded by Dr. Ibrahim Bin Arab, we combine advanced digital diagnostic technology with custom prosthodontics and premium care.
          </p>
        </div>
      </section>

      {/* CLINIC STORY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-[color:var(--color-brand)] font-medium tracking-widest uppercase text-xs mb-4">Our History</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-semibold leading-tight tracking-tight mb-6">
              A Legacy of Trust and Digital Precision
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                Bin Arab Dental Centre is a premier state-of-the-art facility located in Al Safa 1, Wasl Road, Dubai. Under the visionary leadership of CEO and Managing Director <strong className="text-[color:var(--color-ink)]">Dr. Ibrahim Bin Arab</strong>, our clinic has established itself as a benchmark for professional dentistry in the region.
              </p>
              <p>
                Dr. Ibrahim Bin Arab, an Emirati Specialist Prosthodontist holding a PhD in Prosthodontics and Implantology, founded the clinic with a single mission: to deliver quiet precision and unmatched clinical excellence in a warm, welcoming environment.
              </p>
              <p>
                Today, our highly experienced Emirati, Turkish, and international dental specialists collaborate daily to design individual smiles. We leverage digital workflows—including intraoral 3D scanners, panoramic X-rays, and computer-guided anesthesia—to guarantee maximum comfort and predictable results for every patient.
              </p>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-square">
            <img
              src="https://binarabdentalcentre.com/assets/img/clinic/treatment-group.png"
              alt="Bin Arab Dental Centre medical team in Dubai"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-[color:var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-8">
          <div className="card-soft p-8 lg:p-12 border-t-4 border-[color:var(--color-brand)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background: "rgba(15,110,140,0.08)" }}>
                <Heart className="w-6 h-6 text-[color:var(--color-brand)]" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-heading font-semibold text-[color:var(--color-ink)] mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                To provide patient-centered dental care of the highest international standards. We are dedicated to restoring health, enhancing natural aesthetics, and ensuring comfort through digital diagnostics, customized prosthodontics, and a compassionate specialist team.
              </p>
            </div>
          </div>
          <div className="card-soft p-8 lg:p-12 border-t-4 border-[color:var(--color-brand-2)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background: "rgba(57,169,219,0.08)" }}>
                <Shield className="w-6 h-6 text-[color:var(--color-brand-2)]" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-heading font-semibold text-[color:var(--color-ink)] mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                To remain the most trusted dental center in Dubai for local and international families. We strive to pioneer the integration of digital dentistry workflows, bringing state-of-the-art global innovations to our clinic to redefine patient experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[color:var(--color-brand)] font-medium tracking-widest uppercase text-xs mb-4">Why Choose Us</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-semibold tracking-tight">What Sets Our Clinic Apart</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-soft p-8">
              <span className="text-xs font-semibold text-[color:var(--color-brand)] uppercase tracking-wider block mb-2">01</span>
              <h4 className="text-lg font-bold text-[color:var(--color-ink)] mb-3">Emirati & Turkish Specialists</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Expert Prosthodontists, General Dentists, and certified Invisalign providers trained globally to deliver exceptional clinical results.
              </p>
            </div>
            <div className="card-soft p-8">
              <span className="text-xs font-semibold text-[color:var(--color-brand)] uppercase tracking-wider block mb-2">02</span>
              <h4 className="text-lg font-bold text-[color:var(--color-ink)] mb-3">Fully Digital Workflow</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Advanced 3D scanners, digital panoramic and cephalometric radiology, and computer-controlled anesthesia for pain-free treatment.
              </p>
            </div>
            <div className="card-soft p-8">
              <span className="text-xs font-semibold text-[color:var(--color-brand)] uppercase tracking-wider block mb-2">03</span>
              <h4 className="text-lg font-bold text-[color:var(--color-ink)] mb-3">Personalized Consultation</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                No rushed procedures. We spend time diagnostic-planning and discussing treatment choices so you feel confident in your care path.
              </p>
            </div>
            <div className="card-soft p-8">
              <span className="text-xs font-semibold text-[color:var(--color-brand)] uppercase tracking-wider block mb-2">04</span>
              <h4 className="text-lg font-bold text-[color:var(--color-ink)] mb-3">Luxurious Environment</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                A warm, state-of-the-art clinic design featuring private suites, dedicated lighting, and premium layout spaces in Al Safa 1.
              </p>
            </div>
            <div className="card-soft p-8">
              <span className="text-xs font-semibold text-[color:var(--color-brand)] uppercase tracking-wider block mb-2">05</span>
              <h4 className="text-lg font-bold text-[color:var(--color-ink)] mb-3">Flexible Direct Billing</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Direct billing integration with leading insurance companies, allowing hassle-free coverage check and claim approvals.
              </p>
            </div>
            <div className="card-soft p-8">
              <span className="text-xs font-semibold text-[color:var(--color-brand)] uppercase tracking-wider block mb-2">06</span>
              <h4 className="text-lg font-bold text-[color:var(--color-ink)] mb-3">Comprehensive Care</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                From pediatric preventative checkups to full mouth dental implants and aesthetic root canal therapy—all under one roof.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FACILITIES & CERTIFICATIONS */}
      <section className="py-24 bg-[color:var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[color:var(--color-brand)] font-medium tracking-widest uppercase text-xs mb-4">Clinical Standards</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-semibold tracking-tight mb-6">
              Certified Facilities & Advanced Dental Equipment
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              To remain a leading clinic in Dubai, our treatment rooms are equipped with specialized lighting that mimics natural day-light for highly accurate color matching during veneer, crowns, and composite bonding placements. We adhere to rigorous sterilization standards to ensure client safety.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle className="w-5 h-5 text-[color:var(--color-brand)] shrink-0" />
                Dubai Health Authority (DHA) Approved & Certified Facility
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle className="w-5 h-5 text-[color:var(--color-brand)] shrink-0" />
                High-definition Intraoral 3D Digital Scanner
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle className="w-5 h-5 text-[color:var(--color-brand)] shrink-0" />
                Digital Radiography & Low-radiation CBCT Scans
              </li>
              <li className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle className="w-5 h-5 text-[color:var(--color-brand)] shrink-0" />
                Computerized Wand System for painless anesthesia delivery
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
              <Award className="w-10 h-10 text-[color:var(--color-brand)] mx-auto mb-3" />
              <h5 className="font-bold text-[color:var(--color-ink)] text-sm mb-1">DHA Certified</h5>
              <p className="text-xs text-slate-500">Regulatory standards compliance</p>
            </div>
            <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
              <Shield className="w-10 h-10 text-[color:var(--color-brand)] mx-auto mb-3" />
              <h5 className="font-bold text-[color:var(--color-ink)] text-sm mb-1">100% Sterile</h5>
              <p className="text-xs text-slate-500">Class-B autoclave sterilization</p>
            </div>
            <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
              <Smile className="w-10 h-10 text-[color:var(--color-brand)] mx-auto mb-3" />
              <h5 className="font-bold text-[color:var(--color-ink)] text-sm mb-1">10k+ Smiles</h5>
              <p className="text-xs text-slate-500">Redesigned and restored</p>
            </div>
            <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
              <Clock className="w-10 h-10 text-[color:var(--color-brand)] mx-auto mb-3" />
              <h5 className="font-bold text-[color:var(--color-ink)] text-sm mb-1">Flexible Hours</h5>
              <p className="text-xs text-slate-500">Open late until 9:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#0F6E8C,#39A9DB)" }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(255,255,255,0.15),transparent)]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h3 className="text-white text-3xl lg:text-4xl font-heading font-semibold leading-tight mb-4">
            Ready to Experience Digital Dental Care?
          </h3>
          <p className="text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto">
            Book an appointment today with our specialist team of prosthodontists and general dentists in Al Safa 1, Wasl Road, Dubai.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-[color:var(--color-brand)] font-semibold px-8 py-4 rounded-full hover:bg-white/95 transition shadow-lg hover:shadow-xl">
            Book Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
