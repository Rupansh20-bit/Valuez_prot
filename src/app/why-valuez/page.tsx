import React from "react";
import Link from "next/link";
import { ArrowRight, Check, X, AlertTriangle, ShieldCheck, HelpCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";

export default function WhyValuezPage() {
  const comparisonData = [
    {
      feature: "Focus Area",
      traditional: "Basic moral stories, ignoring modern digital environments.",
      valuez: "Unified roots-to-tech mapping: Values + SEL + Cyber Safety + AI Ethics.",
      tradSuccess: false,
    },
    {
      feature: "Teacher Preparation",
      traditional: "High burden. Teachers must draft lesson plans and search for stories.",
      valuez: "Zero prep. Plug-and-play interactive slides, scripts, and evaluation guides.",
      tradSuccess: false,
    },
    {
      feature: "Student Engagement",
      traditional: "Passive listening. Dry textbook reads leading to student disinterest.",
      valuez: "Highly active. Roleplays, scenario choices, computational audits, and journaling.",
      tradSuccess: true,
    },
    {
      feature: "Child Safety Mandates",
      traditional: "Addressed reactively or in isolated, yearly guest seminars.",
      valuez: "Fulfill POSH / child safety rules programmatically across all grades.",
      tradSuccess: false,
    },
    {
      feature: "Parent Alignment",
      traditional: "Zero parent visibility. Disconnect between home rules and school rules.",
      valuez: "Guided reflection journals and dedicated parent workshops bridge the gap.",
      tradSuccess: false,
    },
    {
      feature: "Technological Ethics",
      traditional: "No guidance on screen addiction, digital footprint, or AI usage.",
      valuez: "Signature Techies with Ethics™ modules addressing responsible code/usage.",
      tradSuccess: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-brand-blue-dark text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto space-y-6 relative z-10 animate-fade-in-up">
          <span className="text-xs uppercase tracking-widest font-extrabold px-3.5 py-1.5 rounded-full bg-brand-yellow/15 border border-brand-yellow/20 text-brand-yellow-bright">
            Problem-Driven Storytelling
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Why Valuez Now?
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            The playground has shifted online. Traditional moral lessons must adapt to protect and prepare children in a screen-saturated, AI-powered world.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase font-bold text-brand-blue-navy tracking-widest block">
              The Digital Crisis in Education
            </span>
            <h2 className="text-2xl md:text-3.5xl font-extrabold text-brand-blue-deep leading-tight">
              We Are Raising the First Generation Co-Existing with Embodied AI.
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              When students spend average screen times exceeding 5 hours daily, the risks of cyberbullying, sleep deprivation, and isolation skyrocket. At the same time, schools are expected to guide kids on generative tools, plagiarism, and future careers.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Valuez School solves this by treating value systems not as a dry subject, but as a critical operating system for modern survival and technology design.
            </p>
            <div className="flex items-start gap-4 bg-slate-50 border border-slate-100 p-5 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-brand-blue-light text-brand-blue-navy flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-800 text-sm md:text-base">
                  A Complete Campus Solution
                </h4>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                  We integrate classrooms, teachers, and parent dialogue on digital wellness under one unified platform.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 bg-slate-50 border border-slate-100 rounded-3xl p-8 lg:p-10">
            <h3 className="font-black text-xl md:text-2xl text-brand-blue-deep mb-4">
              Three Crucial Pressures Schools Face Today:
            </h3>

            <div className="space-y-6">
              {[
                {
                  title: "Rising Behavioral Complaints",
                  desc: "Principals report increase in chat group bullying, peer fights, and loss of classroom focus due to gaming/screen fatigue."
                },
                {
                  title: "Fulfilling Government Mandates",
                  desc: "NEP 2020 dictates explicit focus on moral character, child safety (POSH guidance), and computational thinking."
                },
                {
                  title: "Anxious and Demanding Parents",
                  desc: "Parents want schools to teach coding but blame screens for behavioral decline. They expect values guidance."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-brand-yellow/20 text-brand-blue-navy flex items-center justify-center font-bold text-sm shrink-0">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-sm md:text-base">{item.title}</h4>
                    <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Grid Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tagline="Head-To-Head Comparison"
            title="Traditional Approach vs Valuez Unified Platform"
            subtitle="See how the Valuez platform addresses the systemic gaps of conventional character education models."
          />

          <div className="overflow-x-auto rounded-2xl border border-slate-200/80 shadow-md">
            <table className="w-full text-left bg-white border-collapse">
              <thead>
                <tr className="bg-brand-blue-dark text-white text-xs uppercase font-extrabold tracking-wider">
                  <th className="p-6">Feature Core</th>
                  <th className="p-6">Traditional Moral Science</th>
                  <th className="p-6 bg-slate-800 text-brand-yellow-bright">Valuez School Program</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="p-6 font-extrabold text-slate-800">{row.feature}</td>
                    <td className="p-6 text-slate-500 leading-relaxed">
                      <div className="flex items-start gap-2.5">
                        <X className="w-4.5 h-4.5 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="p-6 bg-blue-50/20 text-slate-700 leading-relaxed font-semibold">
                      <div className="flex items-start gap-2.5">
                        <Check className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{row.valuez}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tagline="Have Questions?"
            title="Common Inquiries From School Leaders"
            subtitle="Everything you need to know about timetable integration, teacher prep, and board compliance."
          />

          <FAQSection />
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-brand-blue-dark text-white text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-cover opacity-10 bg-[url('https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800')]" />
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <h2 className="text-2xl md:text-4xl font-extrabold">
            Equip Your School with Valuez Today
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Let us show you how partner schools have reduced cyberbullying incidents by 40% using our unified curriculum modules.
          </p>
          <div className="pt-4">
            <Link
              href="/book-demo"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-yellow text-slate-900 font-bold hover:bg-brand-yellow-bright transition-all"
            >
              Request Presentation & Case Studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
