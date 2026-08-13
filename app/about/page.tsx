import Link from "next/link";

export const metadata = {
  title: "About | South Star Contracting",
  description: "South Star Contracting — a fully licensed general contractor specialized in luxury home buildings, additions, and structural work across South Florida.",
};

export default function About() {
  return (
    <>
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-50 to-obsidian" />
        <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-gold/5 blur-[140px] rounded-full" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-8">
            <span className="gold-line" />
            <span className="text-slate-400 text-xs uppercase font-medium" style={{letterSpacing:"0.25em"}}>Our Story</span>
          </div>
          <h1 className="font-display font-light text-5xl md:text-7xl text-white leading-tight mb-8 max-w-3xl">
            Built on <span className="gold-shimmer">Craftsmanship</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
            South Star Contracting was founded to deliver what South Florida&apos;s luxury market demands — a fully licensed general contractor with real structural expertise and zero shortcuts.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <p className="text-slate-400 text-xs tracking-widest uppercase mb-6 font-medium">Who We Are</p>
            <h2 className="font-display text-4xl font-light text-white leading-tight mb-8">
              Specialized in the work that matters most.
            </h2>
            <p className="text-white/50 leading-relaxed mb-6">
              South Star Contracting is a fully licensed Florida CGC (Certified General Contractor) #CGC1536437, specialized in luxury home buildings, additions, and structural work. We&apos;re a proud member of the South Star Group family of companies, serving Palm Beach County to Broward County, Florida.
            </p>
            <p className="text-white/50 leading-relaxed mb-6">
              We pull every permit ourselves. We&apos;re fully bonded and insured. Whether it&apos;s a ground-up custom home, a second-story addition, or complex structural reinforcement — we have the license, the team, and the expertise to do it right.
            </p>
            <p className="text-white/50 leading-relaxed">
              Every project has a dedicated project manager who is your single point of contact from day one to punch list.
            </p>
          </div>
          <div className="space-y-6">
            {[
              { label: "License", value: "CGC1536437 — Fully Licensed, Bonded & Insured" },
              { label: "Specialization", value: "Luxury Home Buildings, Additions, Structural Work" },
              { label: "Service Area", value: "Palm Beach County to Broward County, Florida" },
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

      <section className="bg-cream border-y border-cream-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Transparency", desc: "Detailed scopes, clear contracts, and no change-order surprises. You always know what you&apos;re paying for." },
              { title: "Quality", desc: "We use the same materials and subcontractors we&apos;d use on our own homes. No cutting corners, no exceptions." },
              { title: "Accountability", desc: "One project manager. One phone number. One team responsible from foundation to finish." },
            ].map((v, i) => (
              <div key={v.title} className="luxury-card border border-gray-200 p-8">
                <div className="font-display text-5xl font-light text-gold/20 mb-4">0{i+1}</div>
                <h3 className="font-display text-xl text-gray-900 mb-4">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed" dangerouslySetInnerHTML={{__html: v.desc}} />
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
