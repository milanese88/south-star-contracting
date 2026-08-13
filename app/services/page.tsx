import Link from "next/link";

export const metadata = {
  title: "Services | South Star Contracting",
  description: "Full-service general contracting — new construction, renovations, commercial buildouts, and design-build across South Florida.",
};

const services = [
  {
    id: "01",
    title: "New Construction",
    description: "From raw land to move-in ready, we manage every phase of ground-up residential and commercial construction. Our team handles permitting, site work, framing, MEP, finishes, and final inspections.",
    includes: ["Custom Homes", "Spec Homes", "Commercial Buildings", "Multi-Family"],
  },
  {
    id: "02",
    title: "Renovations & Remodels",
    description: "Kitchen and bath remodels, whole-home renovations, additions, and exterior upgrades. We respect your home and deliver results that add lasting value.",
    includes: ["Kitchen Remodels", "Bathroom Remodels", "Room Additions", "Full Home Renovations"],
  },
  {
    id: "03",
    title: "Design-Build",
    description: "One team, one contract, one point of accountability. Our design-build approach eliminates the friction between design and construction — saving you time and money.",
    includes: ["Architectural Design", "Interior Design", "Permitting", "Construction"],
  },
  {
    id: "04",
    title: "Commercial Buildouts",
    description: "Tenant improvements and commercial fit-outs for retail, office, medical, and hospitality clients. We work around your schedule to minimize disruption.",
    includes: ["Retail Fit-outs", "Office Buildouts", "Medical Offices", "Restaurant Build-outs"],
  },
  {
    id: "05",
    title: "Roofing & Exterior",
    description: "Working alongside our sister company South Star Roofing, we offer complete exterior packages — roofing, siding, windows, doors, and waterproofing.",
    includes: ["Roof Replacement", "Siding", "Windows & Doors", "Waterproofing"],
  },
  {
    id: "06",
    title: "Project Management",
    description: "Already have a GC but need oversight? We offer standalone project management and owner&apos;s rep services to keep your project on track.",
    includes: ["Schedule Management", "Budget Oversight", "Subcontractor Coordination", "Quality Control"],
  },
];

export default function Services() {
  return (
    <>
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-50 to-obsidian" />
        <div className="absolute top-20 left-0 w-96 h-96 bg-gold/4 blur-[140px] rounded-full" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-8">
            <span className="gold-line" />
            <span className="text-gold text-xs uppercase font-medium" style={{letterSpacing:"0.25em"}}>What We Build</span>
          </div>
          <h1 className="font-display font-light text-5xl md:text-7xl text-white leading-tight mb-8 max-w-3xl">
            Full-Service <span className="gold-shimmer">Contracting</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
            From single-room remodels to ground-up commercial construction — we have the team, the license, and the track record to get it done right.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map(svc => (
            <div key={svc.id} className="luxury-card border border-white/10 p-10">
              <span className="font-display text-6xl font-light text-gold/15 block mb-6">{svc.id}</span>
              <h3 className="font-display text-2xl font-light text-white mb-4">{svc.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-8" dangerouslySetInnerHTML={{__html: svc.description}} />
              <div className="flex flex-wrap gap-2">
                {svc.includes.map(item => (
                  <span key={item} className="text-xs text-gold border border-gold/20 px-3 py-1 tracking-wider">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-obsidian-50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 text-center">
          <p className="text-gold text-xs tracking-widest uppercase mb-6 font-medium">Get Started</p>
          <h2 className="font-display text-4xl font-light text-white mb-8">Tell Us About Your Project</h2>
          <p className="text-white/40 max-w-lg mx-auto mb-12 text-sm leading-relaxed">
            We offer free consultations and detailed quotes. Reach out and a project manager will contact you within 24 hours.
          </p>
          <Link href="/contact" className="inline-block px-12 py-5 bg-gold text-obsidian text-xs tracking-widest uppercase font-semibold hover:bg-gold-light transition-colors duration-300">
            Request a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
