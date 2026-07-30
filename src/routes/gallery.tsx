import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Layout } from "../components/Layout";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
});

const GALLERY_CATEGORIES = ["All", "Clinic", "Treatment Rooms", "Equipment", "Patient Experience"];

const GALLERY_IMAGES = [
  {
    title: "Luxurious Waiting Lounge",
    category: "Clinic",
    url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    desc: "A warm, premium reception space designed to reduce dental anxiety and ensure comfort."
  },
  {
    title: "Clinical Specialist Team",
    category: "Patient Experience",
    url: "https://binarabdentalcentre.com/assets/img/clinic/treatment-group.png",
    desc: "Our dental specialists and nursing staff in Al Safa 1, Dubai."
  },
  {
    title: "State-of-the-Art Treatment Suite",
    category: "Treatment Rooms",
    url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    desc: "Equipped with specialized day-light lighting for precise color matching."
  },
  {
    title: "3D Digital Intraoral Scanner",
    category: "Equipment",
    url: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800",
    desc: "Enables comfortable digital impressions without traditional sticky molds."
  },
  {
    title: "Preventative Patient Examination",
    category: "Patient Experience",
    url: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&q=80&w=800",
    desc: "Routine screening and digital panoramic review to ensure long-term health."
  },
  {
    title: "Advanced Sterilization Zone",
    category: "Equipment",
    category2: "Clinic",
    url: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800",
    desc: "Class-B autoclaves executing multi-stage sterile cycles for patient safety."
  },
  {
    title: "Premium Cosmetic Suite",
    category: "Treatment Rooms",
    url: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&q=80&w=800",
    desc: "Where veneers, teeth whitening, and custom prosthodontics are planned."
  },
  {
    title: "Digital Cephalometric Radiology",
    category: "Equipment",
    url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    desc: "Low-radiation 3D diagnostic scans mapping detailed bone structural layers."
  }
];

function GalleryPage() {
  const [selectedCat, setSelectedCat] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = selectedCat === "All"
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === selectedCat || img.category2 === selectedCat);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev !== null && prev > 0 ? prev - 1 : filteredImages.length - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => (prev !== null && prev < filteredImages.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <Layout>
      {/* HERO BANNER */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-[color:var(--color-ink)] overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(15,110,140,0.15),transparent)] z-0" />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative max-w-5xl mx-auto text-center px-6 z-20 py-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[color:var(--color-brand-2)]" /> Photo Gallery
          </span>
          <h1 className="font-heading font-semibold text-white text-4xl sm:text-6xl leading-[1.1] tracking-tight">
            Explore Our Centre
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-white/80 text-base sm:text-lg font-light leading-relaxed">
            Take a visual tour of our private suites, digital diagnosis tech, patient spaces, and clinical sterilization areas.
          </p>
        </div>
      </section>

      {/* FILTER CONTROLS */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap gap-3 justify-center">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition border ${
                selectedCat === cat
                  ? "bg-[color:var(--color-brand)] border-[color:var(--color-brand)] text-white shadow-md"
                  : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* MASONRY/GRID GALLERY */}
      <section className="py-24 bg-[color:var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((img, idx) => (
              <div
                key={img.title}
                onClick={() => setLightboxIndex(idx)}
                className="group card-soft overflow-hidden bg-white border border-slate-100/60 cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="w-full aspect-[4/3] bg-slate-150 relative overflow-hidden shrink-0">
                  <img
                    src={img.url}
                    alt={img.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-md">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-[color:var(--color-brand)] text-[10px] font-semibold uppercase tracking-wider block mb-1">
                    {img.category}
                  </span>
                  <h4 className="font-heading font-semibold text-base text-[color:var(--color-ink)] mb-1 leading-snug">
                    {img.title}
                  </h4>
                  <p className="text-slate-500 text-xs leading-normal line-clamp-2">
                    {img.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX OVERLAY */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-6 select-none"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Header */}
          <div className="flex justify-between items-center text-white relative z-10">
            <div className="text-left">
              <span className="text-[color:var(--color-brand-2)] text-xs font-semibold uppercase tracking-wider">
                {filteredImages[lightboxIndex].category}
              </span>
              <h3 className="font-heading text-xl font-semibold mt-1">
                {filteredImages[lightboxIndex].title}
              </h3>
            </div>
            <button
              onClick={() => setLightboxIndex(null)}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white hover:scale-105 transition"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Body (Main View) */}
          <div className="relative flex-grow flex items-center justify-center my-6">
            <button
              onClick={handlePrev}
              className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white hover:scale-105 transition z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div
              className="relative max-w-5xl max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[lightboxIndex].url}
                alt={filteredImages[lightboxIndex].title}
                className="w-full max-h-[70vh] object-contain"
              />
            </div>

            <button
              onClick={handleNext}
              className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white hover:scale-105 transition z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Footer Info */}
          <div className="text-center text-white/70 text-sm max-w-xl mx-auto mb-4 relative z-10">
            <p className="leading-relaxed">
              {filteredImages[lightboxIndex].desc}
            </p>
            <span className="text-xs text-white/40 mt-3 block">
              Image {lightboxIndex + 1} of {filteredImages.length}
            </span>
          </div>
        </div>
      )}
    </Layout>
  );
}
