"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-brand-blue-dark text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto space-y-6 relative z-10 animate-fade-in-up">
          <span className="text-xs uppercase tracking-widest font-extrabold px-3.5 py-1.5 rounded-full bg-brand-yellow/15 border border-brand-yellow/20 text-brand-yellow-bright">
            Get in Touch
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Contact Our Office
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Have questions about student reflection journals, licensing fees, or school presentations? Reach out below.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Side: Office Info & WhatsApp */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase font-extrabold text-brand-blue-navy tracking-widest block mb-1">
                Office Information
              </span>
              <h2 className="text-2xl md:text-3.5xl font-black text-brand-blue-deep leading-tight">
                Let's Start a Conversation
              </h2>
              <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                Our curriculum team is located in New Delhi, working closely with partner schools across India and Southeast Asia.
              </p>
            </div>

            {/* Office coordinates list */}
            <div className="space-y-6 text-sm text-slate-600">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800">New Delhi Headquarters</h4>
                  <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">
                    Valuez School Building, 4th Floor, Sector 62, Noida, NCR, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800">Email Correspondence</h4>
                  <p className="text-slate-500 text-xs mt-0.5">
                    General: contact@valuezschool.com<br />
                    Syllabus Trials: trial@valuezschool.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800">Phone Support</h4>
                  <p className="text-slate-500 text-xs mt-0.5">
                    Administrative Desk: +91 99999 99999 (Mon-Fri, 9:00 AM - 5:00 PM)
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="border-t border-slate-200/80 pt-8">
              <h4 className="text-xs uppercase font-extrabold text-slate-400 tracking-wider mb-4">
                Need an Immediate Response?
              </h4>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all active:scale-98"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp Now
              </a>
            </div>
          </div>

          {/* Right Side: Quick Contact Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-8 md:p-12 text-center shadow-lg space-y-4 animate-fade-in-up">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-black text-2xl text-brand-blue-deep">
                  Message Sent!
                </h3>
                <p className="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed">
                  Thank you for contacting Valuez School. A curriculum support representative will reply to <strong>{formData.email}</strong> shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="inline-flex items-center justify-center py-2.5 px-5 rounded-xl border border-brand-blue-navy text-brand-blue-navy text-xs font-bold hover:bg-brand-blue-navy hover:text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 md:p-10 shadow-lg">
                <h3 className="font-black text-xl md:text-2xl text-brand-blue-deep mb-6">
                  Send a Quick Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue"
                      placeholder="e.g. Principal Anjali"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue"
                      placeholder="e.g. principal@school.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue"
                      placeholder="e.g. Inquiry about syllabus pricing"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">
                      Your Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue"
                      placeholder="Type your message details here..."
                      required
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-brand-blue-navy text-white font-bold hover:bg-brand-blue transition-colors disabled:bg-slate-400"
                    >
                      {loading ? (
                        "Sending message parameters..."
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
