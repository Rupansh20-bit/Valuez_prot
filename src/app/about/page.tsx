import React from "react";
import Link from "next/link";
import { ArrowRight, Eye, Target, Sparkles, BookOpen, ShieldCheck, Cpu } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export default function AboutPage() {
  const values = [
    {
      title: "Pedagogical Excellence",
      desc: "Every story and scenario in our journals is peer-reviewed by school child psychologists and moral science veteran teachers.",
      icon: <BookOpen className="w-5 h-5 text-blue-500" />
    },
    {
      title: "Ethical Technology",
      desc: "We believe code is an expression of human intent. Technology must serve human goodness, not simply drive commercial clicks.",
      icon: <Cpu className="w-5 h-5 text-violet-500" />
    },
    {
      title: "Preventative Safety",
      desc: "We proactively equip students with consent and boundaries knowledge rather than reactively dealing with cyber threats.",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />
    }
  ];

  const founders = [
    {
      name: "Dr. Sudhir Sharma",
      role: "Pedagogical Lead & Co-Founder",
      desc: "Former academic coordinator with 18+ years of curriculum design experience in national CBSE/ICSE institutions. Holds a doctorate in Education Philosophy."
    },
    {
      name: "Rohan Varma",
      role: "Technology Lead & Co-Founder",
      desc: "Full-stack software engineer and former tech lead at prominent AI startups. Dedicated to building ethical tech curricula for middle schoolers."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-brand-blue-dark text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto space-y-6 relative z-10 animate-fade-in-up">
          <span className="text-xs uppercase tracking-widest font-extrabold px-3.5 py-1.5 rounded-full bg-brand-yellow/15 border border-brand-yellow/20 text-brand-yellow-bright">
            Our Mission
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            About Valuez School
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Bridging values and technology to help schools build good, safe, and future-ready human beings.
          </p>
        </div>
      </section>

      {/* Story Narrative */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <span className="text-xs uppercase font-extrabold text-brand-blue-navy tracking-widest block text-center">
            How We Started
          </span>
          <h2 className="text-2xl md:text-3.5xl font-black text-brand-blue-deep leading-tight text-center max-w-2xl mx-auto">
            The Story Behind Bridging Values & Technology
          </h2>

          <div className="space-y-6 text-slate-600 text-sm md:text-base leading-relaxed">
            <p>
              In 2022, as schools resumed physical classes post-pandemic, our founders noticed a major behavioral shift. Teachers reported rising incidents of cyber-bullying, screen addiction, lack of class concentration, and growing peer friction. The standard moral science textbooks felt dry, disconnected, and ineffective.
            </p>
            <p>
              At the same time, the sudden generative AI boom meant children were using tools to draft homework essays and search online without checking data safety, plagiarism rules, or algorithmic biases.
            </p>
            <p>
              We realized that teaching coding syntax is not enough. We must teach the character guidelines and technology ethics that determine how code is used. Valuez School was born to combine India-rooted moral values with modern AI safety rules in one unified curriculum platform.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission boxes */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white border rounded-3xl p-8 md:p-10 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-brand-blue-deep text-xl md:text-2xl mb-4">
              Our Vision
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              To see every Indian school student leading technology with high character, self-awareness, and a sense of duty toward their community and families.
            </p>
          </div>

          <div className="bg-white border rounded-3xl p-8 md:p-10 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-yellow-50 text-brand-yellow flex items-center justify-center mb-6">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-brand-blue-deep text-xl md:text-2xl mb-4">
              Our Mission
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              To equip 1,000+ partner schools with easy, zero-prep values and safety curriculum slides, student reflection journals, and parent engagement templates by 2028.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Profile Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tagline="Our Leaders"
            title="Meet the Founders"
            subtitle="Bridging pedagogical expertise and tech safety under one vision."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((lead, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-lg transition-all duration-300"
              >
                {/* Profile Avatar Placeholder */}
                <div className="w-20 h-20 rounded-2xl bg-slate-200 flex items-center justify-center text-slate-400 mb-6 font-bold shadow-inner">
                  {lead.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="font-extrabold text-brand-blue-deep text-lg md:text-xl leading-tight">
                  {lead.name}
                </h3>
                <span className="text-xs text-brand-blue-navy uppercase font-extrabold tracking-widest block mt-1.5 mb-4">
                  {lead.role}
                </span>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {lead.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead capture */}
      <section className="py-20 bg-brand-blue-dark text-white text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">
            Partner with Valuez School
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Let us show you how we align with your school's vision of character building and modern academic preparedness.
          </p>
          <div className="pt-4">
            <Link
              href="/book-demo"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-yellow text-slate-900 font-bold hover:bg-brand-yellow-bright transition-all"
            >
              Book School Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
