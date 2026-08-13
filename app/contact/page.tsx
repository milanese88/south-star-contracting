"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name:"", email:"", phone:"", projectType:"", budget:"", message:"" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
          subject: `New Quote Request — ${formData.projectType} — South Star Contracting`,
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          project_type: formData.projectType,
          budget: formData.budget || "Not specified",
          message: formData.message,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setError("Connection error. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-50 to-obsidian" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-gold/4 blur-[140px] rounded-full" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-8">
            <span className="gold-line" />
            <span className="text-slate-400 text-xs uppercase font-medium" style={{letterSpacing:"0.25em"}}>Free Consultation</span>
          </div>
          <h1 className="font-display font-light text-5xl md:text-7xl text-white leading-tight mb-8 max-w-3xl">
            Let&apos;s Talk About <span className="gold-shimmer">Your Project</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
            Fill out the form below and a project manager will reach out within 24 hours with a free consultation and quote.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            {submitted ? (
              <div className="border border-gold/30 p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-gold text-2xl">&#10003;</span>
                </div>
                <h3 className="font-display text-2xl text-white font-light mb-4">Request Received</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  Thank you! A South Star Contracting project manager will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-white/40 mb-2">Full Name *</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full bg-obsidian-100 border border-white/10 text-white text-sm px-4 py-3.5 focus:outline-none focus:border-gold transition-colors duration-200 placeholder-white/20" placeholder="John Smith" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-white/40 mb-2">Email *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-obsidian-100 border border-white/10 text-white text-sm px-4 py-3.5 focus:outline-none focus:border-gold transition-colors duration-200 placeholder-white/20" placeholder="john@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-white/40 mb-2">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-obsidian-100 border border-white/10 text-white text-sm px-4 py-3.5 focus:outline-none focus:border-gold transition-colors duration-200 placeholder-white/20" placeholder="(305) 000-0000" />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-white/40 mb-2">Project Type *</label>
                  <select name="projectType" required value={formData.projectType} onChange={handleChange} className="w-full bg-obsidian-100 border border-white/10 text-white text-sm px-4 py-3.5 focus:outline-none focus:border-gold transition-colors duration-200 appearance-none cursor-pointer">
                    <option value="" disabled className="bg-obsidian-100">Select one...</option>
                    <option value="Custom Home Construction" className="bg-obsidian-100">Custom Home Construction</option>
                    <option value="Spec Home" className="bg-obsidian-100">Spec Home</option>
                    <option value="Addition & Expansion" className="bg-obsidian-100">Addition &amp; Expansion</option>
                    <option value="Structural Work" className="bg-obsidian-100">Structural Work</option>
                    <option value="Pre-Construction Services" className="bg-obsidian-100">Pre-Construction Services</option>
                    <option value="Construction Management" className="bg-obsidian-100">Construction Management</option>
                    <option value="Other" className="bg-obsidian-100">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-white/40 mb-2">Estimated Budget</label>
                  <select name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-obsidian-100 border border-white/10 text-white text-sm px-4 py-3.5 focus:outline-none focus:border-gold transition-colors duration-200 appearance-none cursor-pointer">
                    <option value="" disabled className="bg-obsidian-100">Select range...</option>
                    <option value="Under $100,000" className="bg-obsidian-100">Under $100,000</option>
                    <option value="$100,000 – $500,000" className="bg-obsidian-100">$100,000 – $500,000</option>
                    <option value="$500,000 – $1,000,000" className="bg-obsidian-100">$500,000 – $1,000,000</option>
                    <option value="$1,000,000+" className="bg-obsidian-100">$1,000,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-white/40 mb-2">Project Details *</label>
                  <textarea name="message" required rows={5} value={formData.message} onChange={handleChange} className="w-full bg-obsidian-100 border border-white/10 text-white text-sm px-4 py-3.5 focus:outline-none focus:border-gold transition-colors duration-200 resize-none placeholder-white/20" placeholder="Describe your project — location, scope, timeline..." />
                </div>

                {error && (
                  <p className="text-red-400 text-sm border border-red-400/20 px-4 py-3">{error}</p>
                )}

                <button type="submit" disabled={loading} className="w-full py-5 bg-gold text-obsidian text-xs tracking-widest uppercase font-semibold hover:bg-gold-light transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed">
                  {loading ? "Sending..." : "Submit Quote Request"}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-12">
            <div>
              <p className="text-slate-400 text-xs tracking-widest uppercase mb-6 font-medium">Direct Contact</p>
              <a href="mailto:info@south-star-contracting.com" className="font-display text-2xl text-white font-light hover:text-gold transition-colors duration-200">info@south-star-contracting.com</a>
            </div>
            <div>
              <p className="text-slate-400 text-xs tracking-widest uppercase mb-6 font-medium">Service Area</p>
              <p className="text-white/50 leading-relaxed">Palm Beach County to Broward County, Florida</p>
            </div>
            <div>
              <p className="text-slate-400 text-xs tracking-widest uppercase mb-6 font-medium">Part of the South Star Family</p>
              <div className="space-y-3">
                <a href="https://south-star-group.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border border-white/10 px-6 py-4 hover:border-gold/40 transition-colors duration-200 group">
                  <span className="text-white/60 text-sm group-hover:text-white transition-colors">South Star Group</span>
                  <span className="text-gold text-lg">&#8599;</span>
                </a>
                <a href="https://southstarroofing.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border border-white/10 px-6 py-4 hover:border-gold/40 transition-colors duration-200 group">
                  <span className="text-white/60 text-sm group-hover:text-white transition-colors">South Star Roofing</span>
                  <span className="text-gold text-lg">&#8599;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
