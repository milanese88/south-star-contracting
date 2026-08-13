"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-obsidian/95 backdrop-blur-sm border-b border-white/5" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-xl font-light tracking-widest text-white uppercase" style={{letterSpacing:"0.25em"}}>South Star</span>
          <span className="font-display text-xs tracking-widest text-gold uppercase font-medium">Contracting</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={`nav-link text-xs tracking-widest uppercase font-medium transition-colors duration-200 ${pathname === link.href ? "text-gold" : "text-white/70 hover:text-white"}`}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="ml-4 px-6 py-2 border border-gold text-gold text-xs tracking-widest uppercase font-medium hover:bg-gold hover:text-obsidian transition-all duration-300">
            Get a Quote
          </Link>
        </nav>
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-obsidian/98 border-t border-white/5 px-6 py-8 flex flex-col gap-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className={`text-sm tracking-widest uppercase font-medium ${pathname === link.href ? "text-gold" : "text-white/70"}`}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
