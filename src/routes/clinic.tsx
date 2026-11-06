import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Phone, Mail, MapPin, Clock, Menu, X, ChevronRight, Sparkles,
  Award, Shield, Smile, Stethoscope, Heart, Star, ArrowRight,
} from "lucide-react";
import { Layout } from "../components/Layout";

export const Route = createFileRoute("/clinic")({
  component: Index,
});

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Treatments", id: "treatments" },
  { label: "Team", id: "team" },
  { label: "Gallery", id: "gallery" },
  { label: "Insurance", id: "insurance" },
  { label: "Contact", id: "contact" },
];

const DOCTORS = [
  { name: "Dr. Ibrahim Bin Arab", role: "CEO & Managing Director", desc: "Emirati Specialist Prosthodontist · PhD Prosthodontics and Implantologist", img: "https://binarabdentalcentre.com/assets/img/doctors/dribrahim.png" },
  { name: "Dr. Tuba Buyukozer", role: "Senior General Dentist, DDS, PhD", desc: "Certified Invisalign Provider", img: "https://binarabdentalcentre.com/assets/img/doctors/drtuba.png" },
  { name: "Dr. Hanadi Khamiri", role: "General Dentist, BDS", desc: "Certified Invisalign Provider", img: "https://binarabdentalcentre.com/assets/img/doctors/drhanadi.png" },
  { name: "Dr. Seda Ozyoney", role: "General Dentist, DDS, PhD", desc: "", img: "https://binarabdentalcentre.com/assets/img/doctors/drseda.png" },
  { name: "Dr. Reem Bin Arab", role: "General Dentist", desc: "Specialist in Laser Dentistry", img: "https://binarabdentalcentre.com/assets/img/doctors/drreemsquare.png" },
  { name: "Dr. Rayaheen Kilidar", role: "General Dentist", desc: "", img: "https://binarabdentalcentre.com/assets/img/doctors/drreyahinsquare.png" },
];

const SERVICES = [
  { name: "Dental Implant", img: "https://binarabdentalcentre.com/assets/img/services/dentalimplant.png" },
  { name: "Cosmetic Denture", img: "https://binarabdentalcentre.com/assets/img/services/cosmetic%20denture.png" },
  { name: "Dental Emergency", img: "https://binarabdentalcentre.com/assets/img/services/dental%20emergency.png" },
  { name: "Invisalign", img: "https://binarabdentalcentre.com/assets/img/services/invisalign.png" },
  { name: "Child Oral Care", img: "https://binarabdentalcentre.com/assets/img/services/childoralcare.png" },
  { name: "Dental Check Up", img: "https://binarabdentalcentre.com/assets/img/services/dentalcheckup.png" },
  { name: "Aesthetic Dentistry", img: "https://binarabdentalcentre.com/assets/img/services/ceramicveneer.png" },
  { name: "Endodontics", img: "https://binarabdentalcentre.com/assets/img/services/DENTALRESTORATION.png" },
  { name: "Teeth Whitening", img: "https://binarabdentalcentre.com/assets/img/services/teethwhitening.png" },
  { name: "Tooth Extraction", img: "https://binarabdentalcentre.com/assets/img/services/toothextraction.png" },
];

const TREATMENTS = [
  { title: "Invisalign & Alignment", desc: "Discreet, clear aligners crafted for a confident, comfortable smile transformation.", icon: Smile },
  { title: "Dental Implants", desc: "Permanent, natural-looking implants placed by our specialist prosthodontist.", icon: Stethoscope },
  { title: "Teeth Whitening", desc: "Advanced whitening protocols for a brilliantly bright, radiant smile.", icon: Sparkles },
  { title: "Root Canal Treatment", desc: "Painless, precision endodontic care using the latest micro-instruments.", icon: Shield },
  { title: "Aesthetic Dentistry", desc: "Veneers, bonding and smile design tailored to your unique features.", icon: Heart },
  { title: "Child Oral Care", desc: "Gentle, family-friendly dentistry that helps children love their dental visits.", icon: Award },
];

const TESTIMONIALS = [
  "https://binarabdentalcentre.com/assets/img/testimonials/testimonial.png",
  "https://binarabdentalcentre.com/assets/img/testimonials/testimonial1.png",
  "https://binarabdentalcentre.com/assets/img/testimonials/testimonial2.png",
  "https://binarabdentalcentre.com/assets/img/testimonials/testimonial3.png",
  "https://binarabdentalcentre.com/assets/img/testimonials/testimonial4.png",
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

function Index() {
  const heroTextRef = useRef<HTMLDivElement>(null);

  useReveal();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (heroTextRef.current) {
        const vh = window.innerHeight;
        const p = Math.max(0, Math.min(1, y / (vh * 0.7)));
        heroTextRef.current.style.opacity = String(1 - p);
        heroTextRef.current.style.transform = `translateY(${p * -30}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Layout>

      {/* HERO */}
      <section id="home" className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/videos/hero.webm"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 z-10 bg-black/35" />

        <div ref={heroTextRef} className="hero-fade absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-medium tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Leading Dental Clinic in Dubai
          </span>
          <h1 className="font-heading font-semibold text-white text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.02] tracking-tight max-w-5xl">
            Experience Comprehensive<br />Dental Care
          </h1>
          <p className="mt-6 max-w-2xl text-white/85 text-base sm:text-lg font-light leading-relaxed">
            Experience the allure of advanced, state-of-the-art dental solutions for you and your loved ones at our prestigious dental clinic in Dubai.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-3">
            <Link to="/contact" hash="appointment" className="btn-primary">
              Book Appointment <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="#services" onClick={scrollTo("services")} className="btn-ghost">
              Explore Services
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/70 text-xs tracking-widest uppercase animate-pulse">
          Scroll to discover
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://binarabdentalcentre.com/assets/img/clinic/welcome.jpg"
                alt="Bin Arab Dental Centre dental clinic in Dubai"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="reveal">
            <p className="text-[color:var(--color-brand)] font-medium tracking-widest uppercase text-xs mb-4">About Bin Arab Dental Centre</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-semibold leading-tight tracking-tight mb-6">
              A leading dental clinic in Dubai, founded by <span className="text-[color:var(--color-brand)]">Dr. Ibrahim Bin Arab</span>.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Bin Arab Dental Centre is a leading dental clinic in Dubai founded by Dr. Ibrahim Bin Arab. Our experienced dental team provides high-quality treatments including Invisalign, teeth whitening, dental implants, root canal treatment, child oral care, and general dentistry using advanced dental technology.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our team is wholly devoted to the well-being of our patients, diligently addressing their needs and concerns while delivering the highest standard of dental care. We harness state-of-the-art technology, including a 3D Scanner, Panoramic and Digital X-rays, and Digital Anesthesia, to ensure the quality of our services.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our passion lies in collaborating with patients to enhance the health and aesthetics of their teeth, gums, and overall smiles. Thankfully, modern dentistry empowers us to incorporate advanced techniques to tailor ideal solutions for each patient.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Whether you require services such as Root Canal Treatment, Re-treatments, Teeth Alignment, Teeth Whitening, Tooth Extraction, Wisdom Tooth Extraction, Implants, Veneers, or Gum treatments, our team is here to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 lg:py-32 bg-[color:var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <p className="text-[color:var(--color-brand)] font-medium tracking-widest uppercase text-xs mb-4">Our Services</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-semibold tracking-tight mb-5">Our Dental Treatments in Dubai</h2>
            <p className="text-slate-600 leading-relaxed">
              Step into the world of Bin Arab Dental Centre, where we present a spectrum of exquisite dental services meticulously designed to cater to your every oral health requirement. Our offerings span from the foundational check-ups and rejuvenating cleanings to the intricate artistry of root canals and dental restoration.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {SERVICES.map((s, i) => (
              <div
                key={s.name}
                className="group card-soft p-4 h-[340px] flex flex-col items-center reveal"
                style={{ transitionDelay: `${(i % 5) * 60}ms` }}
              >
                <div className="w-full h-[220px] rounded-[12px] bg-[color:var(--color-surface)] flex items-center justify-center overflow-hidden mb-4">
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
              </div>
            ))}
          </div>
          <div className="text-center mt-14 reveal">
            <Link to="/contact" hash="appointment" className="btn-primary">
              Book Appointment <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section id="treatments" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-16 reveal">
            <p className="text-[color:var(--color-brand)] font-medium tracking-widest uppercase text-xs mb-4">Our Dental Philosophy</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-semibold tracking-tight mb-5">
              Signature treatments, delivered with quiet precision.
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Bin Arab Dental Centre stands as Dubai's most acclaimed clinic, celebrated for our expertise and our aesthetically captivating setting. Our core ethos revolves around a dedicated commitment to your well-being.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TREATMENTS.map((t, i) => {
              const Icon = t.icon;
              return (
                <div key={t.title} className="card-soft p-8 reveal" style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "linear-gradient(135deg,#0F6E8C,#39A9DB)" }}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">{t.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{t.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-20 rounded-3xl overflow-hidden relative reveal" style={{ background: "linear-gradient(135deg,#0F6E8C,#39A9DB)" }}>
            <div className="grid lg:grid-cols-2 gap-8 items-center p-10 lg:p-16">
              <div>
                <h3 className="text-white text-3xl lg:text-4xl font-heading font-semibold leading-tight mb-4">
                  Consult with the Best Turkish and Emirati Dentist in Dubai for Diagnosis and Treatment
                </h3>
                <p className="text-white/85 leading-relaxed mb-6">
                  We pursue excellence using the latest, cutting-edge solutions, ensuring that every patient receives the radiant smile they rightfully deserve.
                </p>
                <Link to="/contact" hash="appointment" className="inline-flex items-center gap-2 bg-white text-[color:var(--color-brand)] font-semibold px-6 py-3 rounded-full hover:bg-white/95 transition">
                  Book Consultation <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://binarabdentalcentre.com/assets/img/clinic/treatment-group.png"
                  alt="Bin Arab Dental Centre treatment team in Dubai"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-24 lg:py-32 bg-[color:var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <p className="text-[color:var(--color-brand)] font-medium tracking-widest uppercase text-xs mb-4">Our Dentist Doctors</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-semibold tracking-tight mb-5">
              Meet the specialists behind every smile.
            </h2>
            <p className="text-slate-600 leading-relaxed">
              At the core of our practice lies a team of highly specialized medical professionals, each with their unique areas of expertise. Whether working individually or collaboratively, they craft tailored treatment programs for each patient.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {DOCTORS.map((d, i) => (
              <div key={d.name} className="card-soft overflow-hidden reveal" style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
                <div className="aspect-[4/5] overflow-hidden bg-[color:var(--color-surface)]">
                  <img src={d.img} alt={`${d.name} at Bin Arab Dental Centre Dubai`} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-xl mb-1">{d.name}</h3>
                  <p className="text-[color:var(--color-brand)] font-medium text-sm mb-1">{d.role}</p>
                  {d.desc && <p className="text-slate-500 text-sm mb-4">{d.desc}</p>}
                  <a href="#appointment" onClick={scrollTo("appointment")} className="inline-flex items-center gap-1 text-sm font-medium text-[color:var(--color-brand)] hover:gap-2 transition-all">
                    Book Now <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY (testimonials images) */}
      <section id="gallery" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <p className="text-[color:var(--color-brand)] font-medium tracking-widest uppercase text-xs mb-4">Testimonials</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-semibold tracking-tight mb-5">Patients Feedback</h2>
            <div className="flex items-center justify-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="rounded-2xl overflow-hidden card-soft reveal" style={{ transitionDelay: `${(i % 5) * 60}ms` }}>
                <img src={t} alt="Patient testimonial for Bin Arab Dental Centre Dubai" loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="text-center mt-14 reveal">
            <a href="#appointment" onClick={scrollTo("appointment")} className="btn-ghost">Learn More</a>
          </div>
        </div>
      </section>

      {/* INSURANCE */}
      <section id="insurance" className="py-24 lg:py-32 bg-[color:var(--color-surface)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center reveal">
          <p className="text-[color:var(--color-brand)] font-medium tracking-widest uppercase text-xs mb-4">Insurance</p>
          <h2 className="text-3xl lg:text-5xl font-heading font-semibold tracking-tight mb-5">
            We gladly accept insurance plans from widely recognized providers.
          </h2>
          <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Contact our reception team to confirm your provider coverage before your visit — we will handle the paperwork so you can focus on your smile.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["Daman", "AXA", "Neuron", "Nextcare", "MetLife", "Oman Insurance"].map((n) => (
              <div key={n} className="px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-medium text-sm shadow-sm">{n}</div>
            ))}
          </div>
        </div>
      </section>

      {/* APPOINTMENT / CONTACT */}
      <section id="appointment" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
          <div className="reveal">
            <p className="text-[color:var(--color-brand)] font-medium tracking-widest uppercase text-xs mb-4">Book Appointment</p>
            <h2 className="text-3xl lg:text-5xl font-heading font-semibold tracking-tight mb-6">Where the Smiles Begins.</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Reserve your visit with our specialist team. Share a few details and we will confirm your preferred time.
            </p>
            <form
              className="grid sm:grid-cols-2 gap-4"
              onSubmit={(e) => { e.preventDefault(); window.location.href = "https://binarabdentalcentre.com/book.php"; }}
            >
              <input required placeholder="Full name" className="col-span-2 sm:col-span-1 rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:border-[color:var(--color-brand)] transition" />
              <input required placeholder="Phone" className="col-span-2 sm:col-span-1 rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:border-[color:var(--color-brand)] transition" />
              <input type="email" required placeholder="Email" className="col-span-2 rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:border-[color:var(--color-brand)] transition" />
              <select className="col-span-2 rounded-xl border border-slate-200 px-4 py-3 bg-white focus:outline-none focus:border-[color:var(--color-brand)] transition">
                <option>Select a service</option>
                {SERVICES.map((s) => <option key={s.name}>{s.name}</option>)}
              </select>
              <textarea placeholder="Notes (optional)" rows={4} className="col-span-2 rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:border-[color:var(--color-brand)] transition" />
              <button type="submit" className="btn-primary col-span-2">Book Now <ArrowRight className="w-4 h-4" /></button>
            </form>
          </div>
          <div id="contact" className="reveal">
            <div className="card-soft p-8 lg:p-10 h-full">
              <h3 className="text-2xl font-heading font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(15,110,140,0.08)" }}>
                    <MapPin className="w-5 h-5 text-[color:var(--color-brand)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[color:var(--color-ink)] mb-1">Bin Arab Dental Centre</p>
                    <p className="text-slate-600 text-sm">Al Ferdous 4, Office 109,<br />Al Wasl road, Al Safa 1, Dubai</p>
                  </div>
                </div>
                <a href="tel:+97143202008" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(15,110,140,0.08)" }}>
                    <Phone className="w-5 h-5 text-[color:var(--color-brand)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[color:var(--color-ink)] mb-1 group-hover:text-[color:var(--color-brand)] transition">+971 4 320 2008</p>
                    <p className="text-slate-500 text-sm">Landline</p>
                  </div>
                </a>
                <a href="tel:+971544432808" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(15,110,140,0.08)" }}>
                    <Phone className="w-5 h-5 text-[color:var(--color-brand)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[color:var(--color-ink)] mb-1 group-hover:text-[color:var(--color-brand)] transition">+971 54 4432808</p>
                    <p className="text-slate-500 text-sm">Mobile / WhatsApp</p>
                  </div>
                </a>
                <a href="mailto:info@benarab.com" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(15,110,140,0.08)" }}>
                    <Mail className="w-5 h-5 text-[color:var(--color-brand)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[color:var(--color-ink)] mb-1 group-hover:text-[color:var(--color-brand)] transition">info@benarab.com</p>
                    <p className="text-slate-500 text-sm">Email us anytime</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(15,110,140,0.08)" }}>
                    <Clock className="w-5 h-5 text-[color:var(--color-brand)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[color:var(--color-ink)] mb-1">Working Hours</p>
                    <p className="text-slate-600 text-sm">Saturday – Thursday: 9:00 AM – 9:00 PM<br />Friday: Closed</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex gap-3">
                <a href="tel:+97143202008" className="btn-primary flex-1 !py-3">
                  <Phone className="w-4 h-4" /> Call
                </a>
                <a href="mailto:info@benarab.com" className="btn-ghost flex-1 !py-3">
                  <Mail className="w-4 h-4" /> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
