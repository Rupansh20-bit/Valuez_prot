"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, MessageCircle, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="bg-brand-blue-dark text-slate-300 border-t border-slate-800">
      {/* Top CTA Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Ready to raise future-ready, ethical leaders?
            </h3>
            <p className="text-slate-400 text-sm md:text-base max-w-lg">
              Deliver a world-class values, safety, and technology curriculum without adding preparation hours for your teachers.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <Link
              href="/book-demo"
              className="px-6 py-3 rounded-xl bg-brand-yellow text-slate-900 font-bold hover:bg-brand-yellow-bright transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10 flex items-center gap-2"
            >
              Request School Presentation
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-brand-blue text-brand-yellow shadow-md">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Valuez<span className="text-brand-yellow">School</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Valuez School bridges India-rooted values and emerging AI technology. We help schools build good human beings who are emotionally strong, safe, ethical, and ready for tomorrow.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 hover:bg-emerald-600 hover:text-white transition-colors duration-300 text-emerald-400"
                title="Chat with us on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@valuezschool.com"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 hover:bg-brand-blue hover:text-white transition-colors duration-300 text-blue-400"
                title="Email Support"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Site Map */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-6">Program Tracks</h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link href="/curriculum" className="hover:text-white transition-colors">
                  Values & SEL Curriculum
                </Link>
              </li>
              <li>
                <Link href="/curriculum" className="hover:text-white transition-colors">
                  Child Safety & Consent
                </Link>
              </li>
              <li>
                <Link href="/ct-ai" className="hover:text-white transition-colors">
                  CT & Generative AI Ethics
                </Link>
              </li>
              <li>
                <Link href="/future-ready" className="hover:text-white transition-colors">
                  Future-Ready Explorations
                </Link>
              </li>
              <li>
                <Link href="/workshops" className="hover:text-white transition-colors">
                  School Workshops
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-6">Quick Links</h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link href="/why-valuez" className="hover:text-white transition-colors">
                  Why Valuez
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Curriculum Samples & Guides
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About the Founders
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Office
                </Link>
              </li>
              <li>
                <Link href="/book-demo" className="hover:text-white transition-colors">
                  Schedule Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Contact Info */}
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Stay Informed</h4>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                Receive our monthly curriculum digests and digital safety tips for schools.
              </p>
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-blue pr-12 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 rounded-lg bg-slate-800 text-brand-yellow hover:bg-brand-blue hover:text-white transition-all flex items-center justify-center"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              {subscribed && (
                <p className="text-brand-yellow text-xs mt-2 animate-pulse font-medium">
                  Thank you! You have subscribed.
                </p>
              )}
            </div>

            <div className="space-y-3 text-sm text-slate-400 border-t border-slate-800/80 pt-4">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-brand-yellow shrink-0 mt-0.5" />
                <span>Delhi & NCR, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4.5 h-4.5 text-brand-yellow shrink-0" />
                <span>contact@valuezschool.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4.5 h-4.5 text-brand-yellow shrink-0" />
                <span>+91 99999 99999</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="bg-black/30 border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Valuez School. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
