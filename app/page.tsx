import Link from "next/link";

const serviceCards = [
  {
    title: "Custom Home Construction",
    description: "Ground-up luxury builds designed around you — raw land to move-in ready.",
  },
  {
    title: "Spec Homes",
    description: "Investment-grade builds designed to sell at the top of the market.",
  },
  {
    title: "Additions & Expansions",
    description: "Second stories, master suites, full structural extensions.",
  },
  {
    title: "Structural Work",
    description: "Load-bearing walls, foundations, complex framing — permitted and engineered.",
  },
  {
    title: "Pre-Construction Services",
    description: "Budgeting, scheduling, permitting strategy, and site analysis — before a single nail is driven.",
  },
  {
    title: "Construction Management",
    description: "Full oversight of your project — subcontractors, timelines, inspections, and delivery.",
  },
];

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "10+", label: "Years Experience" },
  { value: "CGC", label: "Florida Licensed" },
  { value: "5★", label: "Client Satisfaction" },
];

export default function Home() {
  return (
    <>
      {/* HERO — full bleed photo, text bottom-left */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{minHeight:"100dvh"}}>
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-obsidian/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4 mb-10">
              <span className="gold-line" />
              <span className="text-white/50 text-xs uppercase font-medium tracking-widest">South Florida General Contractor</span>
            </div>
            <h1 className="font-display font-light leading-none mb-10">
              <span className="block text-white text-5xl sm:text-6xl md:text-8xl lg:text-[110px]">Building Assets.</span>
              <span className="block text-gold text-5xl sm:text-6xl md:text-8xl lg:text-[110px]">Maximizing Value.</span>
            </h1>
            <p className="text-white/55 text-lg md:text-xl max-w-2xl leading-relaxed mb-12 font-light">
              From pre-construction to final inspection, we manage every phase of your build with a fully licensed team that pulls every permit and answers every call. South Florida&apos;s luxury market demands the best — we built our company around that standard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-block px-12 py-5 bg-gold text-obsidian text-xs tracking-widest uppercase font-semibold hover:bg-gold-light transition-colors duration-300">
                Request a Quote
              </Link>
              <Link href="/services" className="inline-block px-12 py-5 border border-white/25 text-white text-xs tracking-widest uppercase font-medium hover:border-white/60 transition-all duration-300">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS — cream strip */}
      <section className="bg-cream border-y border-cream-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-cream-dark">
            {stats.map(stat => (
              <div key={stat.label} className="text-center px-8">
                <div className="font-display text-4xl md:text-5xl font-light text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-500 text-xs tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES — clean cards */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-28">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-white/35 text-xs tracking-widest uppercase mb-4 font-medium">What We Build</p>
            <h2 className="font-display text-5xl md:text-6xl font-light text-white">Our Services</h2>
          </div>
          <Link href="/services" className="hidden md:inline-flex items-center gap-3 text-gold text-xs tracking-widest uppercase font-medium hover:gap-6 transition-all duration-300">
            View All <span>&#8594;</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((card, idx) => (
            <div key={card.title} className="luxury-card border border-white/10 bg-obsidian-100 p-8 flex flex-col justify-between" style={{minHeight:"280px"}}>
              <div>
                <span className="font-display text-4xl font-light text-gold/20 block mb-4">0{idx + 1}</span>
                <h3 className="font-display text-2xl font-light text-white mb-3">{card.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{card.description}</p>
              </div>
              <div className="gold-line mt-6" />
            </div>
          ))}
        </div>
      </section>

      {/* SPLIT — photo left, credentials right */}
      <section className="bg-cream border-y border-cream-dark">
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{minHeight:"640px"}}>
          <div className="relative overflow-hidden" style={{minHeight:"400px"}}>
            <img
              src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-10 lg:px-16 py-20">
            <div>
              <p className="text-gray-400 text-xs tracking-widest uppercase mb-6 font-medium">Why South Star</p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-8">
                The license.<br />The team.<br />The standard.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Fully licensed Florida CGC with deep expertise in luxury residential construction, structural work, and complex additions. Every permit pulled by us — no shortcuts, no subcontracted surprises.
              </p>
              <p className="text-gray-600 leading-relaxed mb-10">
                Part of the South Star Group family. The resources of a large firm. The accountability of a small team.
              </p>
              <div className="space-y-3 mb-10">
                {["Florida CGC #CGC1536437 — Licensed, Bonded & Insured", "Palm Beach County to Broward County, Florida", "Luxury Residential · Additions · Structural"].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="inline-flex items-center gap-3 text-xs tracking-widest uppercase font-semibold text-obsidian border-b border-obsidian pb-0.5 hover:text-gold hover:border-gold transition-all duration-300">
                Learn More <span>&#8594;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — dark dramatic */}
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-obsidian" style={{opacity:0.92}} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-36 text-center">
          <p className="text-white/35 text-xs tracking-widest uppercase mb-8 font-medium">Start Your Project</p>
          <h2 className="font-display text-6xl md:text-8xl font-light text-white mb-10 leading-none">
            Ready to Build?
          </h2>
          <p className="text-white/40 max-w-md mx-auto mb-14 leading-relaxed text-sm">
            Free consultation. Detailed quote. A dedicated project manager from day one.
          </p>
          <Link href="/contact" className="inline-block px-14 py-5 bg-gold text-obsidian text-xs tracking-widest uppercase font-semibold hover:bg-gold-light transition-colors duration-300">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
