"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Award,
  Users,
  Compass,
  AlertTriangle,
  Zap,
  CheckCircle,
  Sparkles,
  ShieldCheck,
  Cpu,
  Bookmark
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PillarCard from "@/components/PillarCard";
import ProgramCard from "@/components/ProgramCard";
import BookGallery from "@/components/BookGallery";
import WorkshopGallery from "@/components/WorkshopGallery";
import TestimonialCard from "@/components/TestimonialCard";
import { TESTIMONIALS } from "@/data/mockData";

export default function HomePage() {
  const challenges = [
    { title: "Bullying & Exclusion", desc: "Spreading both offline and in unmonitored digital chat groups." },
    { title: "Screen Addiction", desc: "Dopamine-driven design reducing attention spans and physical play." },
    { title: "Poor Empathy", desc: "Lacking face-to-face interactions, leading to rising peer conflicts." },
    { title: "AI Confusion", desc: "Students using generative tools without understanding bias or plagiarism." },
    { title: "Child Safety Risks", desc: "Exposure to inappropriate online content and grooming hazards." },
    { title: "Teacher Workload", desc: "Overburdened educators struggling to prepare values/safety curricula." },
    { title: "Parent Expectations", desc: "Demanding values-focused guidance combined with cutting-edge tech preparedness." },
    { title: "NEP 2020 Requirements", desc: "Mandates on socio-emotional learning, safety, and coding." },
  ];

  const pillars = [
    {
      title: "India Rooted Values",
      description: "Instilling deep-seated civic consciousness, respect, gratitude, and moral strength tailored for Indian classrooms.",
      points: ["Respect (Aadar)", "Empathy (Sahanubhuti)", "Gratitude (Kritagyata)", "Citizenship (Nagrikta)", "Character (Charitra)"]
    },
    {
      title: "Social Emotional Learning",
      description: "Developing self-regulation, healthy relationships, and responsible decision-making to build emotional resilience.",
      points: ["Self Awareness", "Relationship Skills", "Responsible Decision Making"]
    },
    {
      title: "Child Safety",
      description: "Equipping children with critical knowledge to identify risks, set physical boundaries, and speak up against abuse.",
      points: ["Body Boundaries", "Consent Principles", "Bullying Prevention", "Digital Safety"]
    },
    {
      title: "Responsible AI & Tech",
      description: "Teaching student co-creators to use AI tools ethically, check computational biases, and protect digital footprints.",
      points: ["AI Literacy", "Algorithm Ethics", "Digital Citizenship", "Responsible Usage"]
    },
    {
      title: "Future Ready Awareness",
      description: "Igniting curiosity about emerging technologies and future careers while cultivating an agile innovation mindset.",
      points: ["Emerging Technologies", "Innovation Mindset", "Career Awareness"]
    }
  ];

  const stats = [
    { value: "15,000+", label: "Active Learners", icon: <Users className="w-5 h-5 text-brand-blue-navy" /> },
    { value: "40+", label: "Partner Schools", icon: <Award className="w-5 h-5 text-brand-amber" /> },
    { value: "100+", label: "Learning Modules", icon: <Bookmark className="w-5 h-5 text-blue-600" /> },
    { value: "10", label: "Grades Covered", icon: <TrendingUp className="w-5 h-5 text-rose-500" /> },
  ];

  const programTracks = [
    {
      title: "Values & SEL",
      description: "Cultivating character, respect, emotional regulation, and ethical decision-making through classroom storytelling and reflection journals.",
      link: "/curriculum",
      tag: "Character Core",
      bgGrad: "from-blue-500 to-indigo-600"
    },
    {
      title: "Child Safety & Consent",
      description: "Age-appropriate lessons covering body safety, physical boundaries, anti-bullying defenses, and digital protection for every age group.",
      link: "/curriculum",
      tag: "Protection",
      bgGrad: "from-emerald-500 to-teal-600"
    },
    {
      title: "CT & AI Curriculum",
      description: "Introducing computational thinking, generative AI literacy, prompting workflows, and critical algorithmic ethics for future tech leaders.",
      link: "/ct-ai",
      tag: "Next-Gen Tech",
      bgGrad: "from-violet-500 to-purple-600"
    },
    {
      title: "Future Ready Program",
      description: "Exploring humanoid robotics, space technology settlements, green tech innovations, and emerging careers of the 2030s.",
      link: "/future-ready",
      tag: "Exploration",
      bgGrad: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-brand-blue-dark text-white py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        {/* Animated ambient background shapes */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-brand-blue opacity-10 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-brand-yellow opacity-10 blur-3xl animate-pulse-slow" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 text-brand-yellow-bright text-xs font-bold uppercase tracking-wider border border-white/10">
              <Sparkles className="w-4 h-4 text-brand-yellow-bright" />
              Bridging Values and Technology
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Bridging Values <br className="hidden sm:inline" />
              and <span className="text-brand-yellow">Technology</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Helping schools raise good human beings who are emotionally strong, safe, ethical, and future-ready in an AI-powered world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/book-demo"
                className="px-8 py-4 rounded-2xl bg-brand-yellow text-slate-900 font-extrabold text-base hover:bg-brand-yellow-bright transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10 flex items-center justify-center gap-2"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#programs"
                className="px-8 py-4 rounded-2xl bg-white/10 text-white font-extrabold text-base hover:bg-white/20 transition-all border border-white/20 flex items-center justify-center gap-2"
              >
                Explore Programs
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            {/* Visual representation card */}
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl bg-slate-800/60 border border-slate-700/80 p-8 flex flex-col justify-between overflow-hidden shadow-2xl glass-panel-dark glow-blue">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-500" />
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-500" />
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500" />
                </div>
                <span className="text-[10px] text-brand-yellow-bright font-bold uppercase tracking-widest bg-brand-yellow/15 border border-brand-yellow/20 px-2.5 py-1 rounded-full">
                  AI + Values Portal
                </span>
              </div>

              <div className="my-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-white shadow">
                    V
                  </div>
                  <div className="bg-slate-700/50 rounded-2xl p-4 text-xs text-slate-200 border border-slate-700 max-w-[80%]">
                    How can I explain generative AI ethics to Grade 6 children?
                  </div>
                </div>
                <div className="flex items-start gap-4 flex-row-reverse">
                  <div className="w-10 h-10 rounded-xl bg-brand-yellow flex items-center justify-center font-bold text-slate-900 shadow">
                    AI
                  </div>
                  <div className="bg-brand-blue-navy/70 rounded-2xl p-4 text-xs text-white border border-brand-blue/30 max-w-[80%]">
                    Explain AI as a "Co-Creator" with a moral compass. Teach them to prompt with accountability and identify training biases.
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-700/80 pt-4 flex justify-between items-center text-[10px] text-slate-400 font-bold">
                <span>Modules Active: 100+</span>
                <span>NEP Aligned 2020</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE CHALLENGE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tagline="The Current Reality"
            title="Raising Children Today Is Harder Than Ever"
            subtitle="Modern school ecosystems face multifaceted challenges that impact students, parents, and teachers simultaneously. Traditional moral science curricula are no longer enough."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {challenges.map((c, i) => (
              <div
                key={i}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-md hover:border-brand-blue-navy/15 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 border border-amber-100">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-brand-blue-deep text-lg mb-2">
                  {c.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center bg-slate-900 text-white rounded-3xl p-8 max-w-4xl mx-auto border border-slate-800 glow-yellow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-2xl" />
            <h4 className="text-lg md:text-xl font-bold mb-2">
              Valuez School bridges this gap.
            </h4>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto">
              We integrate core character roots with technology safety rules to make value systems active, engaging, and ready for an automated era.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — VALUEZ FRAMEWORK */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tagline="Our Pedagogy"
            title="The 5 Pillars of Valuez"
            subtitle="Our unified curriculum is organized into five foundational pillars designed to prepare the whole child for life and technology."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {pillars.map((pillar, idx) => (
              <PillarCard
                key={idx}
                index={idx}
                title={pillar.title}
                description={pillar.description}
                points={pillar.points}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — IMPACT STATS */}
      <section className="py-16 bg-brand-blue-dark text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/5 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <h4 className="text-3xl md:text-4xl font-black text-brand-yellow-bright mb-1">
                  {stat.value}
                </h4>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — PROGRAM TRACKS */}
      <section id="programs" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tagline="Core Programs"
            title="Comprehensive Curriculum Offerings"
            subtitle="Valuez provides pre-prepared lessons and reflection journals mapped to specific safety mandates, character guidelines, and technology pathways."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programTracks.map((prog, idx) => (
              <ProgramCard
                key={idx}
                title={prog.title}
                description={prog.description}
                link={prog.link}
                tag={prog.tag}
                bgGrad={prog.bgGrad}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — TECHIES WITH ETHICS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white relative overflow-hidden border-t border-b border-slate-800">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl -z-10" />
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <span className="inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full bg-brand-yellow/15 border border-brand-yellow/20 text-brand-yellow-bright text-xs font-extrabold uppercase tracking-wider">
            Signature Brand Program
          </span>
          <h2 className="text-3xl md:text-5xl font-black max-w-3xl mx-auto leading-tight">
            Technology Is Powerful.<br />
            <span className="text-brand-yellow">Character Determines</span> How It Is Used.
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Introducing <strong className="text-white">Techies with Ethics™</strong>—our special module series that challenges kids to pair computational knowledge with critical moral choices.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            {[
              { title: "AI with Responsibility", desc: "Verifying bias, citation checks, and acknowledging co-creation limits." },
              { title: "Innovation with Empathy", desc: "Building accessibility features and assessing societal consequences." },
              { title: "Creativity with Integrity", desc: "Respecting digital artwork rights and rejecting plagiarism." },
              { title: "Tech with Human Values", desc: "Understanding the priority of human empathy and real relationships over algorithms." }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-800/40 border border-slate-800 rounded-2xl p-6 text-left hover:bg-slate-800/80 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-blue/20 text-brand-yellow-bright flex items-center justify-center font-black mb-4">
                  0{idx + 1}
                </div>
                <h4 className="font-extrabold text-white text-base mb-2">{item.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — BOOK LIBRARY */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tagline="Curriculum Library"
            title="Explore Our Classroom Books"
            subtitle="Browse and preview sample chapters from our core values, safety, and technology student readers."
          />

          <BookGallery />
        </div>
      </section>

      {/* SECTION 8 — WORKSHOPS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tagline="Empowerment Sessions"
            title="School Workshops"
            subtitle="We deliver immersive, practical training workshops for students, parents, and teachers to build campus-wide alignment."
          />

          <WorkshopGallery />

          {/* Testimonial Gallery Snippet */}
          <div className="mt-20 border-t border-slate-200/80 pt-16">
            <h4 className="text-center font-bold text-xs uppercase text-slate-400 tracking-wider mb-8">
              Trusted by Leading Principals & Coordinators
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((test) => (
                <TestimonialCard
                  key={test.id}
                  quote={test.quote}
                  author={test.author}
                  designation={test.designation}
                  school={test.school}
                  avatar={test.avatar}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — FINAL CTA */}
      <section className="py-24 bg-brand-blue-dark text-white px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Build Future-Ready Students Without <br className="hidden md:inline" />
            Adding More Burden on Teachers.
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Schedule a virtual walkthrough of our materials, platform demo, and alignment mapping templates with our curriculum experts today.
          </p>
          <div>
            <Link
              href="/book-demo"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-brand-yellow text-slate-900 font-extrabold text-base hover:bg-brand-yellow-bright transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10"
            >
              Book School Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
