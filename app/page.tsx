import Link from "next/link";

const serviceCards = [
  {
    title: "Custom Home Construction",
    description: "Ground-up luxury builds designed around you — raw land to move-in ready.",
    icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
  },
  {
    title: "Spec Homes",
    description: "Investment-grade builds designed to sell at the top of the market.",
    icon: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
  },
  {
    title: "Additions & Expansions",
    description: "Second stories, master suites, full structural extensions.",
    icon: "M12 4.5v15m7.5-7.5h-15",
  },
  {
    title: "Structural Work",
    description: "Load-bearing walls, foundations, complex framing — permitted and engineered.",
    icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
  },
  {
    title: "Pre-Construction Services",
    description: "Budgeting, scheduling, permitting strategy — before a single nail is driven.",
    icon: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z",
  },
  {
    title: "Construction Management",
    description: "Full oversight — subcontractors, timelines, inspections, and delivery.",
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  },
];

const tickerItems = [
  { text: "500+ Projects Delivered", highlight: true },
  { text: "Luxury Home Construction", highlight: false },
  { text: "CGC Licensed #CGC1536437", highlight: true },
  { text: "Spec Homes", highlight: false },
  { text: "40+ Years Experience", highlight: true },
  { text: "Additions & Expansions", highlight: false },
  { text: "5★ Client Satisfaction", highlight: true },
  { text: "Structural Work", highlight: false },
  { text: "Palm Beach to Broward", highlight: true },
  { text: "Pre-Construction Services", highlight: false },
  { text: "Fully Licensed & Insured", highlight: true },
  { text: "Construction Management", highlight: false },
];

const whyChecklist = [
  "Florida CGC #CGC1536437 — Licensed, Bonded & Insured",
  "Every permit pulled in-house — no shortcuts",
  "Dedicated project manager on every project",
  "Palm Beach County to Broward County",
  "Part of the South Star Group family",
  "Free consultation & quote within 24 hours",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{minHeight:"100dvh"}}>
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-obsidian/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4 mb-8">
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

      {/* TICKER BAND */}
      <section className="relative bg-obsidian-50 border-y border-white/8 overflow-hidden py-4">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{background:"linear-gradient(to right, #161618, transparent)"}} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{background:"linear-gradient(to left, #161618, transparent)"}} />
        <div className="ticker-track">
          {[0, 1].map(copy => (
            <div key={copy} className="flex items-center">
              {tickerItems.map((item, i) => (
                <div key={i} className="flex items-center flex-shrink-0">
                  <span className={`text-xs uppercase tracking-[0.2em] font-medium px-8 ${item.highlight ? "text-gold" : "text-white/40"}`}>
                    {item.text}
                  </span>
                  <span className="text-gold/30 text-xs">◆</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES — icon cards */}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {serviceCards.map((card) => (
            <div key={card.title} className="luxury-card bg-obsidian-100 p-8 flex flex-col justify-between group hover:bg-obsidian-200 transition-colors duration-300" style={{minHeight:"260px"}}>
              <div>
                {/* Icon */}
                <div className="w-11 h-11 bg-gold/10 border border-gold/25 flex items-center justify-center mb-6 group-hover:bg-gold/15 group-hover:border-gold/40 transition-all duration-300">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={card.icon} />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-light text-white mb-3">{card.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{card.description}</p>
              </div>
              <div className="gold-line mt-8" />
            </div>
          ))}
        </div>
      </section>

      {/* WHY SOUTH STAR — photo grid + checklist */}
      <section className="bg-cream border-y border-cream-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — text */}
            <div>
              <p className="text-gray-400 text-xs tracking-widest uppercase mb-6 font-medium">Why South Star</p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-8">
                Why Choose<br /><em>South Star</em><br />Contracting
              </h2>
              <p className="text-gray-600 leading-relaxed mb-10">
                South Florida&apos;s luxury market requires more than a contractor — it requires a licensed partner who understands the stakes. We built South Star Contracting to be exactly that.
              </p>
              <div className="space-y-4 mb-10">
                {whyChecklist.map(item => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="w-5 h-5 bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="inline-block px-10 py-4 bg-obsidian text-white text-xs tracking-widest uppercase font-semibold hover:bg-obsidian-50 transition-colors duration-300">
                Schedule a Consultation
              </Link>
            </div>
            {/* Right — photo grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 overflow-hidden" style={{height:"320px"}}>
                <img
                  src="https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=900&q=80"
                  alt=""
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden" style={{height:"200px"}}>
                <img
                  src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&q=80"
                  alt=""
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden" style={{height:"200px"}}>
                <img
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80"
                  alt=""
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
