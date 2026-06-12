"use client";

import React, { useState } from "react";
import { ArrowRight, ShieldCheck, Mail, BookOpen, Clock, Loader2, Sparkles, Check } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export default function BookDemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    schoolName: "",
    designation: "",
    city: "",
    email: "",
    phone: "",
    program: "all",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [leadId, setLeadId] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Client validation
    if (
      !formData.name ||
      !formData.schoolName ||
      !formData.designation ||
      !formData.city ||
      !formData.email ||
      !formData.phone
    ) {
      setErrorMsg("Please fill out all required fields.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/demo-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setLeadId(data.data?.id || "lead-1002");
      } else {
        setErrorMsg(data.error || "An error occurred. Please try again.");
      }
    } catch (err) {
      setErrorMsg("Failed to connect to the backend mock API server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-brand-blue-dark text-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-4 relative z-10 animate-fade-in-up">
          <span className="text-xs uppercase tracking-widest font-extrabold px-3 py-1 rounded-full bg-brand-yellow/15 border border-brand-yellow/20 text-brand-yellow-bright">
            Presentation Request
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Book a School Demo
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
            Schedule a virtual overview or request physical sample curriculum packs sent to your campus.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white flex-grow">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Side: Trust points */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div>
              <span className="text-xs uppercase font-extrabold text-brand-blue-navy tracking-widest block mb-1">
                Why partner with us
              </span>
              <h2 className="text-2xl md:text-3.5xl font-black text-brand-blue-deep leading-tight">
                What Happens Next?
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "1. 15-Minute Alignment Call",
                  desc: "We will check your current timetabling hours, board regulations (CBSE/ICSE/NEP), and grade requirements.",
                  icon: <Clock className="w-5 h-5 text-blue-500" />
                },
                {
                  title: "2. Sample Journal Package Post",
                  desc: "We will mail physical student reflection journals and teacher manuals to your school office free of charge.",
                  icon: <BookOpen className="w-5 h-5 text-emerald-500" />
                },
                {
                  title: "3. Complete Platform Trial",
                  desc: "Access the Valuez school LMS dashboard for a 14-day trial period to review lesson slides with computer and homeroom teachers.",
                  icon: <ShieldCheck className="w-5 h-5 text-violet-500" />
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-sm md:text-base">{item.title}</h4>
                    <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-200/85 pt-8 bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <p className="text-slate-600 text-xs italic leading-relaxed">
                "Valuez School has completely streamlined our child safety compliance requirements. We didn't have to write any guidelines; their platform solved it."
              </p>
              <h4 className="font-bold text-xs text-slate-800 mt-3.5">
                Dr. Anjali Sen, School Principal
              </h4>
            </div>
          </div>

          {/* Right Side: Lead Form or Success Block */}
          <div className="lg:col-span-7">
            {success ? (
              <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-8 md:p-12 text-center shadow-lg space-y-6 animate-fade-in-up">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <Check className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    Lead Registration Code: {leadId}
                  </span>
                  <h3 className="font-black text-2xl md:text-3.5xl text-brand-blue-deep">
                    Demo Booked Successfully!
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-brand-blue-navy">{formData.name}</strong>. We have registered your request for <strong className="text-slate-800">{formData.schoolName}</strong>.
                  </p>
                </div>

                <div className="border-t border-b border-slate-200/80 py-6 my-6 text-left max-w-md mx-auto space-y-4 text-xs font-semibold text-slate-600">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-500" />
                    <span>Demo confirmation sent to: {formData.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-500" />
                    <span>WhatsApp scheduling text sent to: {formData.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-500" />
                    <span>Free sample journal packages allocated for mailing.</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSuccess(false);
                      setFormData({
                        name: "",
                        schoolName: "",
                        designation: "",
                        city: "",
                        email: "",
                        phone: "",
                        program: "all",
                        message: "",
                      });
                    }}
                    className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-brand-blue-navy text-white font-bold text-sm hover:bg-brand-blue transition-colors"
                  >
                    Register Another School
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 md:p-10 shadow-lg">
                <h3 className="font-black text-xl md:text-2xl text-brand-blue-deep mb-6">
                  Schedule Free Presentation
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMsg && (
                    <div className="bg-rose-50 border border-rose-100 rounded-xl p-4 text-rose-600 text-xs font-bold">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                        Designation <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue"
                        placeholder="e.g. Principal / Director"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">
                        School Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="schoolName"
                        value={formData.schoolName}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue"
                        placeholder="e.g. Gyan Mandir School"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">
                        City Location <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue"
                        placeholder="e.g. New Delhi"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue"
                        placeholder="e.g. +91 99999 99999"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">
                      Interested Curriculum Program
                    </label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue"
                    >
                      <option value="all">Full Unified Curriculum (Values + Safety + Tech)</option>
                      <option value="values-sel">Values & SEL Curriculum</option>
                      <option value="child-safety">Child Safety & Consent</option>
                      <option value="ct-ai">CT & AI Ethics Curriculum</option>
                      <option value="future-ready">Future Ready Program</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wide mb-1.5">
                      Additional Message or Requirements
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue"
                      placeholder="Share details about your preferred timing, number of students, or custom constraints."
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-brand-blue-navy text-white font-bold hover:bg-brand-blue transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed text-base shadow"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting lead parameters...
                        </>
                      ) : (
                        <>
                          Book School Demo
                          <ArrowRight className="w-5 h-5" />
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
