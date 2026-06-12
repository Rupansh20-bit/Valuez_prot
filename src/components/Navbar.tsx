"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Why Valuez", href: "/why-valuez" },
    { name: "Curriculum", href: "/curriculum" },
    { name: "CT & AI", href: "/ct-ai" },
    { name: "Future Ready", href: "/future-ready" },
    { name: "Workshops", href: "/workshops" },
    { name: "Resources", href: "/resources" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname !== "/") return false;
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-slate-200/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-brand-blue-navy text-brand-yellow-bright shadow-md group-hover:scale-105 transition-transform duration-300">
              <ShieldCheck className="w-6 h-6" />
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-brand-yellow-bright border-2 border-white animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-brand-blue-deep">
                Valuez<span className="text-brand-yellow">School</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">
                Values & Technology
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "bg-brand-blue-light text-brand-blue-navy"
                    : "text-slate-600 hover:text-brand-blue-navy hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/book-demo"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-blue-navy text-white text-sm font-semibold hover:bg-brand-blue transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Book Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-brand-blue-navy hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="lg:hidden animate-fade-in-up border-t border-slate-200 bg-white shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 py-4 space-y-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                  isActive(link.href)
                    ? "bg-brand-blue-light text-brand-blue-navy"
                    : "text-slate-600 hover:text-brand-blue-navy hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/book-demo"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-brand-blue-navy text-white text-base font-bold shadow-md hover:bg-brand-blue transition-colors"
              >
                Book Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
