import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight, Award, GraduationCap, Calendar, Heart } from "lucide-react";
import { Layout } from "../components/Layout";

export const Route = createFileRoute("/team")({
  component: TeamPage,
});

const DOCTORS = [
  {
    name: "Dr. Ibrahim Bin Arab",
    role: "CEO & Managing Director",
    desc: "A prominent name in regional prosthodontics. Over 20 years of specialist clinical experience, leading our clinic with dedicated precision.",
    img: "https://binarabdentalcentre.com/assets/img/doctors/dribrahim.png",
    degree: "PhD in Prosthodontics & Implantologist (Germany)",
    experience: "20+ Years",
    skills: ["Full Mouth Rehabilitation", "Implants Placement", "Bespoke Restorations"]
  },
  {
    name: "Dr. Tuba Buyukozer",
    role: "Senior General Dentist, DDS, PhD",
    desc: "Renowned general dental surgeon who specializes in aesthetic smile makeovers and certified clear alignment orthodontics.",
    img: "https://binarabdentalcentre.com/assets/img/doctors/drtuba.png",
    degree: "DDS, PhD in Aesthetic Dentistry",
    experience: "15+ Years",
    skills: ["Invisalign® Certified", "Aesthetic Restorations", "Smile Redesign"]
  },
  {
    name: "Dr. Hanadi Khamiri",
    role: "General Dentist, BDS",
    desc: "Passionate about preventive dental health, family oral hygiene routines, and ensuring a relaxing visit for anxious patients.",
    img: "https://binarabdentalcentre.com/assets/img/doctors/drhanadi.png",
    degree: "BDS in Dental Surgery",
    experience: "12+ Years",
    skills: ["Certified Invisalign Provider", "Preventative Care", "Scaling & Hygiene"]
  },
  {
    name: "Dr. Seda Ozyoney",
    role: "General Dentist, DDS, PhD",
    desc: "Specialist endodontic treatment expert, focused on resolving acute pain and preserving natural structures with rotary micro-instruments.",
    img: "https://binarabdentalcentre.com/assets/img/doctors/drseda.png",
    degree: "DDS, PhD in Endodontics",
    experience: "10+ Years",
    skills: ["Microscopic Root Canals", "Infection Control", "Re-treatment Care"]
  },
  {
    name: "Dr. Reem Bin Arab",
    role: "General Dentist",
    desc: "Certified practitioner in laser dentistry protocols. Specializes in advanced soft-tissue laser treatments and minimally invasive fills.",
    img: "https://binarabdentalcentre.com/assets/img/doctors/drreemsquare.png",
    degree: "BDS, Certified Laser Practitioner (AALZ)",
    experience: "8 Years",
    skills: ["Laser Dentistry", "Gum Contouring", "Biocompatible Fillings"]
  },
  {
    name: "Dr. Rayaheen Kilidar",
    role: "General Dentist",
    desc: "Dedicated to comprehensive smile whitening procedures, routine checkups, and gentle restorative treatments.",
    img: "https://binarabdentalcentre.com/assets/img/doctors/drreyahinsquare.png",
    degree: "BDS, General Dentist",
    experience: "7 Years",
    skills: ["Laser Whitening", "Aesthetic Restorations", "Oral Screenings"]
  }
];

function TeamPage() {
  return (
    <Layout>
      {/* HERO BANNER */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-[color:var(--color-ink)] overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(15,110,140,0.15),transparent)] z-0" />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative max-w-5xl mx-auto text-center px-6 z-20 py-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[color:var(--color-brand-2)]" /> Medical Team
          </span>
          <h1 className="font-heading font-semibold text-white text-4xl sm:text-6xl leading-[1.1] tracking-tight">
            Our Specialist Doctors
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-white/80 text-base sm:text-lg font-light leading-relaxed">
            Meet our highly qualified team of Emirati, Turkish, and international specialists committed to providing gentle and premium dental care in Dubai.
          </p>
        </div>
      </section>

      {/* DOCTORS GRID */}
      <section className="py-24 bg-[color:var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {DOCTORS.map((doc, i) => (
              <div
                key={doc.name}
                className="card-soft overflow-hidden border border-slate-100/60 bg-white flex flex-col sm:flex-row hover:shadow-lg transition-shadow"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Image Section */}
                <div className="w-full sm:w-[220px] h-[280px] shrink-0 bg-slate-50 relative overflow-hidden">
                  <img
                    src={doc.img}
                    alt={doc.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                </div>
                {/* Content Section */}
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[color:var(--color-brand)] text-xs font-semibold uppercase tracking-wider block mb-1">
                      {doc.role}
                    </span>
                    <h3 className="font-heading font-semibold text-2xl text-[color:var(--color-ink)] mb-3">
                      {doc.name}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed mb-4">
                      {doc.desc}
                    </p>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-slate-700 text-xs">
                        <GraduationCap className="w-4 h-4 text-[color:var(--color-brand)] shrink-0" />
                        <span>{doc.degree}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-700 text-xs">
                        <Calendar className="w-4 h-4 text-[color:var(--color-brand)] shrink-0" />
                        <span>Experience: {doc.experience}</span>
                      </div>
                    </div>
                  </div>

                  {/* Skills/Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-slate-100">
                    {doc.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-[color:var(--color-surface)] text-slate-600 border border-slate-200/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY / TRUST SECTION */}
      <section className="py-24 bg-white border-t border-slate-150">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[color:var(--color-brand)] font-medium tracking-widest uppercase text-xs mb-4">Our Clinical Care</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-semibold tracking-tight text-[color:var(--color-ink)] mb-6">
              Committed to Patient Comfort and Oral Well-being
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Our passion lies in collaborating directly with patients to enhance the health, function, and aesthetics of their smiles. We use digital preview smile designs and painless anesthesia to eliminate dental anxiety, making every visit a comfortable, positive experience.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[color:var(--color-surface)] flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4 text-[color:var(--color-brand)]" />
                </div>
                <span className="text-slate-700 text-xs font-semibold">Gentle Pediatric Care</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[color:var(--color-surface)] flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-[color:var(--color-brand)]" />
                </div>
                <span className="text-slate-700 text-xs font-semibold">Specialist Accreditation</span>
              </div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl bg-[color:var(--color-surface)] p-8 border border-slate-200/60">
            <h4 className="font-heading font-semibold text-xl text-[color:var(--color-ink)] mb-4">Clinical Accreditations</h4>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Every member of our team is fully licensed by the Dubai Health Authority (DHA) and undergoes continuous medical education, keeping up with global standards in clinical safety, prosthodontics, and microscopic endodontics.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-[color:var(--color-brand)] font-semibold text-sm hover:underline">
              Read Our Clinical Standards <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#0F6E8C,#39A9DB)" }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(255,255,255,0.15),transparent)]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h3 className="text-white text-3xl lg:text-4xl font-heading font-semibold leading-tight mb-4">
            Book an Appointment with a Specialist
          </h3>
          <p className="text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto">
            Choose your doctor and schedule your detailed smile consultation in Al Safa 1, Wasl Road, Dubai.
          </p>
          <Link to="/contact" hash="appointment" className="inline-flex items-center gap-2 bg-white text-[color:var(--color-brand)] font-semibold px-8 py-4 rounded-full hover:bg-white/95 transition shadow-lg hover:shadow-xl">
            Book Appointment <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
