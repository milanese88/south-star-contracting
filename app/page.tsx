import Link from "next/link";

const services = [
  { title: "Luxury Home Construction", description: "Ground-up custom home builds for discerning clients — from raw land to move-in ready. We manage every phase with precision and craftsmanship.", icon: "🏛" },
  { title: "Additions & Expansions", description: "Seamlessly expand your home with expert additions — master suites, second stories, garage conversions, and full structural extensions.", icon: "🔩" },
  { title: "Structural Work", description: "Foundation repair, load-bearing wall removal, structural reinforcement, and complex framing — handled by a fully licensed GC with deep structural expertise.", icon: "⚙️" },
  { title: "Design-Build", description: "One team, one contract, one point of accountability. From architectural concept to final punch list — design and build under one roof.", icon: "📐" },
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
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-obsidian-50 to-obsidian-100" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cobalt/10 blur-[100px] rounded-full" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="gold-line" />
            <span className="text-gold text-xs uppercase font-medium" style={{letterSpacing:"0.25em"}}>A South Star Group Company</span>
            <span className="gold-line" />
          </div>
          <h1 className="font-display font-light leading-tight mb-8">
            <span className="block text-white text-5xl md:text-7xl lg:text-8xl tracking-wide">Built to</span>
            <span className="block gold-shimmer text-6xl md:text-8xl lg:text-9xl tracking-wide font-medium">Last</span>
          </h1>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-14 font-light">
            South Star Contracting is a fully licensed general contractor specialized in luxury home buildings, additions, and structural work across South Florida.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/services" className="px-10 py-4 bg-gold text-obsidian text-xs tracking-widest uppercase font-semibold hover:bg-gold-light transition-colors duration-300">
              Our Services
            </Link>
            <Link href="/contact" className="px-10 py-4 border border-white/20 text-white text-xs tracking-widest uppercase font-medium hover:border-gold hover:text-gold transition-all duration-300">
              Get a Quote
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs tracking-widest uppercase text-white">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/5 bg-obsidian-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/5">
            {stats.map(stat => (
              <div key={stat.label} className="text-center px-8">
                <div className="font-display text-4xl md:text-5xl font-light text-gold mb-2">{stat.value}</div>
                <div className="text-white/40 text-xs tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="text-center mb-20">
          <p className="text-gold text-xs tracking-widest uppercase mb-6 font-medium">What We Build</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white">Our Core Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(svc => (
            <div key={svc.title} className="luxury-card border border-white/10 p-10">
              <div className="text-3xl mb-6">{svc.icon}</div>
              <h3 className="font-display text-2xl font-light text-white mb-4">{svc.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{svc.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/services" className="inline-flex items-center gap-3 text-gold text-xs tracking-widest uppercase font-medium hover:gap-5 transition-all duration-300">
            View All Services <span>&#8594;</span>
          </Link>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-obsidian-50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-gold text-xs tracking-widest uppercase mb-6 font-medium">Why South Star</p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-tight mb-8">
                The License, The Team, <span className="gold-shimmer">The Standard</span>
              </h2>
              <p className="text-white/50 leading-relaxed mb-6">
                We&apos;re a fully licensed Florida CGC (Certified General Contractor) with deep expertise in luxury residential construction, structural work, and complex additions. Every permit is pulled by us — no shortcuts.
              </p>
              <p className="text-white/50 leading-relaxed mb-10">
                As part of the South Star Group family, we bring the resources of a large firm with the accountability of a small team. Your project has a dedicated manager from day one to punch list.
              </p>
              <Link href="/about" className="inline-flex items-center gap-3 text-gold text-xs tracking-widest uppercase font-medium hover:gap-5 transition-all duration-300">
                About Us <span>&#8594;</span>
              </Link>
            </div>
            <div className="border border-white/10 p-10 relative">
              <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-gold" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-gold" />
              <p className="font-display text-2xl font-light text-white/80 leading-relaxed italic">
                &ldquo;We build what we promise — on time, on budget, and to a standard we&apos;re proud to put our name on.&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="gold-line" />
                <div>
                  <p className="text-white text-sm font-medium">Dominic Milanese</p>
                  <p className="text-white/40 text-xs tracking-wider">Founder, South Star Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center">
        <p className="text-gold text-xs tracking-widest uppercase mb-6 font-medium">Start Your Project</p>
        <h2 className="font-display text-4xl md:text-6xl font-light text-white mb-8 leading-tight">
          Ready to <span className="gold-shimmer">Build?</span>
        </h2>
        <p className="text-white/40 max-w-xl mx-auto mb-12 leading-relaxed">
          Tell us about your project and we&apos;ll get back to you with a consultation and quote within 24 hours.
        </p>
        <Link href="/contact" className="inline-block px-12 py-5 bg-gold text-obsidian text-xs tracking-widest uppercase font-semibold hover:bg-gold-light transition-colors duration-300">
          Request a Quote
        </Link>
      </section>
    </>
  );
}
