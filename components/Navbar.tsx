"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-cream-dark transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-24">
        <Link href="/" className="shrink-0">
          <Image src="/logo-black.png" alt="South Star Contracting" width={489} height={193} style={{height:"64px", width:"auto"}} className="object-contain" unoptimized priority />
        </Link>
        <nav className="hidden md:flex items-center justify-center gap-12 lg:gap-16 flex-1 px-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={`nav-link text-xs tracking-widest uppercase font-medium transition-colors duration-200 ${pathname === link.href ? "text-obsidian font-semibold" : "text-gray-700 hover:text-black"}`}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center shrink-0">
          <Link href="/contact" className="px-6 py-2.5 border border-obsidian text-obsidian text-xs tracking-widest uppercase font-medium hover:bg-obsidian hover:text-cream transition-all duration-300">
            Get a Quote
          </Link>
        </div>
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`block w-6 h-px bg-obsidian transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-obsidian transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-obsidian transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-cream-dark px-6 py-8 flex flex-col gap-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className={`text-sm tracking-widest uppercase font-medium ${pathname === link.href ? "text-obsidian font-semibold" : "text-gray-700"}`}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
