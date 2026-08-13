import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <div className="mb-6">
              <span className="font-display text-2xl font-light tracking-widest text-white uppercase block" style={{letterSpacing:"0.25em"}}>South Star</span>
              <span className="font-display text-sm tracking-widest text-gold uppercase font-medium">Contracting</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Fully licensed general contractor specialized in luxury home buildings, additions, and structural work across South Florida.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-gold mb-6 font-medium">Navigation</p>
            <ul className="space-y-3">
              {[{href:"/",label:"Home"},{href:"/about",label:"About"},{href:"/services",label:"Services"},{href:"/contact",label:"Contact"}].map(link => (
                <li key={link.href}><Link href={link.href} className="text-white/40 hover:text-white text-sm transition-colors duration-200">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-gold mb-6 font-medium">The South Star Family</p>
            <ul className="space-y-3">
              <li><a href="https://south-star-group.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white text-sm transition-colors duration-200">South Star Group</a></li>
              <li><a href="https://southstarroofing.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white text-sm transition-colors duration-200">South Star Roofing</a></li>
            </ul>
            <div className="mt-10">
              <p className="text-xs tracking-widest uppercase text-gold mb-3 font-medium">Contact</p>
              <a href="mailto:info@south-star-contracting.com" className="text-white/40 hover:text-white text-sm transition-colors duration-200">info@south-star-contracting.com</a>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs tracking-wider">&copy; {new Date().getFullYear()} South Star Contracting. All rights reserved.</p>
          <p className="text-white/20 text-xs tracking-wider">A <a href="https://south-star-group.com" className="hover:text-white/40 transition-colors">South Star Group</a> Company</p>
        </div>
      </div>
    </footer>
  );
}
