import Link from "next/link";

export const metadata = {
  title: "Services | South Star Contracting",
  description: "Luxury home buildings, additions, structural work, and full-service general contracting across South Florida.",
};

const services = [
  {
    id: "01",
    title: "Custom Home Construction",
    description: "From raw land to move-in ready, we manage every phase of ground-up luxury residential construction. Our team handles permitting, site work, framing, MEP, finishes, and final inspections — to a standard that reflects the value of your investment.",
    includes: ["Custom Floor Plans", "Site & Foundation Work", "Full Permitting", "Luxury Finishes"],
  },
  {
    id: "02",
    title: "Spec Homes",
    description: "We build investment-grade spec homes designed to sell at the top of the market. From acquisition to listing-ready, we deliver the finishes, layout, and curb appeal that South Florida buyers expect at the luxury price point.",
    includes: ["Market-Optimized Design", "Turnkey Delivery", "Luxury Finishes", "Investor-Ready Timelines"],
  },
  {
    id: "03",
    title: "Additions & Expansions",
    description: "Seamlessly expand your home while preserving its character. We specialize in second-story additions, master suite expansions, garage conversions, and full structural extensions — all engineered and permitted by us.",
    includes: ["Second Story Additions", "Master Suite Expansions", "Room Additions", "Garage Conversions"],
  },
  {
    id: "04",
    title: "Structural Work",
    description: "Complex structural projects require a licensed GC with real expertise. We handle load-bearing wall removal, foundation repair, structural reinforcement, and framing — all backed by engineering and proper permits.",
    includes: ["Load-Bearing Wall Removal", "Foundation Repair", "Structural Reinforcement", "Complex Framing"],
  },
  {
    id: "05",
    title: "Pre-Construction Services",
    description: "What happens before construction determines how well construction goes. We handle budgeting, value engineering, permitting strategy, site analysis, and scheduling — so your project starts on the right foundation.",
    includes: ["Feasibility & Budgeting", "Permitting Strategy", "Site Analysis", "Project Scheduling"],
  },
  {
    id: "06",
    title: "Construction Management",
    description: "Already have a design team or an owner's rep? We step in as the construction manager — coordinating subcontractors, managing timelines, controlling costs, and delivering the project to spec.",
    includes: ["Subcontractor Coordination", "Schedule & Budget Management", "Quality Control", "Final Inspections"],
  },
];

export default function Services() {
  return (
    <>
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-50 to-obsidian" />
        <div className="absolute top-20 left-0 w-96 h-96 bg-gold/5 blur-[140px] rounded-full" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-8">
            <span className="gold-line" />
            <span className="text-slate-400 text-xs uppercase font-medium" style={{letterSpacing:"0.25em"}}>What We Build</span>
          </div>
          <h1 className="font-display font-light text-5xl md:text-7xl text-white leading-tight mb-8 max-w-3xl">
            Specialized <span className="gold-shimmer">Contracting</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
            Fully licensed and specialized in luxury home buildings, additions, and structural work — with the team and expertise to execute at the highest level.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {services.map(svc => (
            <div key={svc.id} className="group relative overflow-hidden" style={{minHeight:"320px"}}>
              <div className="absolute inset-0 bg-obsidian-100" />
              <div className="relative z-10 p-10 h-full flex flex-col justify-between border border-white/8 hover:border-gold/30 transition-colors duration-300" style={{minHeight:"320px"}}>
                <div>
                  <span className="font-display text-5xl font-light text-gold/20 block mb-6">{svc.id}</span>
                  <h3 className="font-display text-2xl font-light text-white mb-4">{svc.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-8">{svc.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {svc.includes.map(item => (
                    <span key={item} className="text-xs text-white/40 border border-white/10 px-3 py-1 tracking-wider">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-obsidian-50 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28 text-center">
          <p className="text-white/35 text-xs tracking-widest uppercase mb-6 font-medium">Get Started</p>
          <h2 className="font-display text-5xl font-light text-white mb-8">Tell Us About Your Project</h2>
          <p className="text-white/40 max-w-lg mx-auto mb-12 text-sm leading-relaxed">
            Free consultation and detailed quote within 24 hours.
          </p>
          <Link href="/contact" className="inline-block px-12 py-5 bg-gold text-obsidian text-xs tracking-widest uppercase font-semibold hover:bg-gold-light transition-colors duration-300">
            Request a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
