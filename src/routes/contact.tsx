import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Layout } from "../components/Layout";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

const SERVICES = [
  "Dental Implant",
  "Cosmetic Denture",
  "Dental Emergency",
  "Invisalign",
  "Child Oral Care",
  "Dental Check Up",
  "Aesthetic Dentistry",
  "Endodontics",
  "Teeth Whitening",
  "Tooth Extraction"
];

function ContactPage() {
  return (
    <Layout>
      {/* HERO BANNER */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-[color:var(--color-ink)] overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(15,110,140,0.15),transparent)] z-0" />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative max-w-5xl mx-auto text-center px-6 z-20 py-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[color:var(--color-brand-2)]" /> Get In Touch
          </span>
          <h1 className="font-heading font-semibold text-white text-4xl sm:text-6xl leading-[1.1] tracking-tight">
            Contact & Appointments
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-white/80 text-base sm:text-lg font-light leading-relaxed">
            Reserve your appointment with our specialist medical team, find our clinical location, or connect directly with our emergency support.
          </p>
        </div>
      </section>

      {/* CONTACT FORM & INFO SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Booking Form */}
          <div id="appointment" className="card-soft p-8 lg:p-12 border border-slate-100/60 bg-white scroll-mt-24">
            <p className="text-[color:var(--color-brand)] font-medium tracking-widest uppercase text-xs mb-4">Book Appointment</p>
            <h2 className="text-3xl font-heading font-semibold tracking-tight text-[color:var(--color-ink)] mb-6">
              Where the Smile Begins
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-8">
              Fill in your details below and submit to request your preferred clinical time. Our coordinators will contact you within 2 working hours.
            </p>
            <form
              className="grid sm:grid-cols-2 gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "https://binarabdentalcentre.com/book.php";
              }}
            >
              <input
                required
                placeholder="Full name"
                className="col-span-2 sm:col-span-1 rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:border-[color:var(--color-brand)] transition text-sm"
              />
              <input
                required
                placeholder="Phone"
                className="col-span-2 sm:col-span-1 rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:border-[color:var(--color-brand)] transition text-sm"
              />
              <input
                type="email"
                required
                placeholder="Email"
                className="col-span-2 rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:border-[color:var(--color-brand)] transition text-sm"
              />
              <select
                className="col-span-2 rounded-xl border border-slate-200 px-4 py-3 bg-white focus:outline-none focus:border-[color:var(--color-brand)] transition text-sm text-slate-700"
                defaultValue="Select a service"
              >
                <option disabled>Select a service</option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <textarea
                placeholder="Notes or clinical concerns (optional)"
                rows={4}
                className="col-span-2 rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:border-[color:var(--color-brand)] transition text-sm"
              />
              <button
                type="submit"
                className="btn-primary col-span-2 mt-2 py-3.5 text-sm"
              >
                Request Appointment <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-between">
            <div className="card-soft p-8 lg:p-10 h-full border border-slate-100/60 bg-white">
              <h3 className="text-2xl font-heading font-semibold text-[color:var(--color-ink)] mb-6">Clinic Contact Info</h3>
              <div className="space-y-6">
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
                    <p className="text-slate-500 text-sm">Landline Desk</p>
                  </div>
                </a>

                <a href="tel:+971544432808" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(15,110,140,0.08)" }}>
                    <Phone className="w-5 h-5 text-[color:var(--color-brand)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[color:var(--color-ink)] mb-1 group-hover:text-[color:var(--color-brand)] transition">+971 54 4432808</p>
                    <p className="text-slate-500 text-sm">Mobile / WhatsApp Support</p>
                  </div>
                </a>

                <a href="mailto:info@benarab.com" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(15,110,140,0.08)" }}>
                    <Mail className="w-5 h-5 text-[color:var(--color-brand)]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[color:var(--color-ink)] mb-1 group-hover:text-[color:var(--color-brand)] transition">info@benarab.com</p>
                    <p className="text-slate-500 text-sm">Email Address</p>
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

              {/* Direct call options */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3 border-t border-slate-100 pt-6">
                <a href="tel:+97143202008" className="btn-primary flex-1 !py-3">
                  <Phone className="w-4 h-4" /> Call Desk
                </a>
                <a href="https://wa.me/971544432808?text=Hello%20Bin%20Arab%20Dental%20Centre%2C%20I%20need%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer" className="btn-ghost flex-1 !py-3 text-center justify-center">
                  Chat WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAPS EMBED */}
      <section className="py-12 bg-[color:var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12">
            <p className="text-[color:var(--color-brand)] font-medium tracking-widest uppercase text-xs mb-4">Location Map</p>
            <h2 className="text-3xl font-heading font-semibold tracking-tight text-[color:var(--color-ink)]">
              Find Our Clinic in Dubai
            </h2>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-md bg-white border border-slate-100 p-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.82682977462!2d55.2323381!3d25.1787163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6a27e7d7a5b3%3A0xe5a3637e1a3cc8be!2sBin%20Arab%20Dental%20Centre!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: "20px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map showing Bin Arab Dental Centre location in Al Safa 1, Dubai"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
