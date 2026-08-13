import Link from "next/link";

export const metadata = {
  title: "About | South Star Contracting",
  description: "Learn about South Star Contracting — South Florida's trusted general contractor.",
};

export default function About() {
  return (
    <>
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-50 to-obsidian" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-gold/4 blur-[140px] rounded-full" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-8">
            <span className="gold-line" />
            <span className="text-gold text-xs uppercase font-medium" style={{letterSpacing:"0.25em"}}>Our Story</span>
          </div>
          <h1 className="font-display font-light text-5xl md:text-7xl text-white leading-tight mb-8 max-w-3xl">
            Built on <span className="gold-shimmer">Craftsmanship</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
            South Star Contracting was founded to fill a gap in South Florida&apos;s construction market — a general contractor that delivers premium quality without the premium overhead.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <p className="text-gold text-xs tracking-widest uppercase mb-6 font-medium">Who We Are</p>
            <h2 className="font-display text-4xl font-light text-white leading-tight mb-8">
              A contractor you can actually trust.
            </h2>
            <p className="text-white/50 leading-relaxed mb-6">
              South Star Contracting is a full-service general contractor and a proud member of the South Star Group family of companies. We handle residential remodels, new construction, commercial buildouts, and design-build projects across Miami-Dade, Broward, and Palm Beach counties.
            </p>
            <p className="text-white/50 leading-relaxed mb-6">
              We&apos;re fully licensed, bonded, and insured — and we pull every permit ourselves. No shortcuts, no subcontracted surprises.
            </p>
            <p className="text-white/50 leading-relaxed">
              Every project has a dedicated project manager who&apos;s your single point of contact from day one to punch list.
            </p>
          </div>
          <div className="space-y-6">
            {[
              { label: "License", value: "Florida CGC Licensed & Insured" },
              { label: "Service Area", value: "Miami-Dade, Broward, Palm Beach" },
              { label: "Project Types", value: "Residential, Commercial, Design-Build" },
              { label: "Parent Company", value: "South Star Group" },
            ].map(item => (
              <div key={item.label} className="flex items-start gap-6 border-b border-white/5 pb-6">
                <div className="gold-line mt-2 shrink-0" />
                <div>
                  <p className="text-white/30 text-xs tracking-widest uppercase mb-1">{item.label}</p>
                  <p className="text-white text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-obsidian-50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Transparency", desc: "Detailed scopes, clear contracts, and no change order surprises. You always know what you&apos;re paying for." },
              { title: "Quality", desc: "We use the same materials and subcontractors we&apos;d use on our own homes. No cutting corners." },
              { title: "Accountability", desc: "One project manager. One phone number. One team responsible start to finish." },
            ].map((v, i) => (
              <div key={v.title} className="luxury-card border border-white/10 p-8">
                <div className="font-display text-5xl font-light text-gold/20 mb-4">0{i+1}</div>
                <h3 className="font-display text-xl text-white mb-4">{v.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed" dangerouslySetInnerHTML={{__html: v.desc}} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-obsidian-50 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 text-center">
          <h2 className="font-display text-4xl font-light text-white mb-8">Ready to Start Your Project?</h2>
          <Link href="/contact" className="inline-block px-12 py-5 bg-gold text-obsidian text-xs tracking-widest uppercase font-semibold hover:bg-gold-light transition-colors duration-300">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
