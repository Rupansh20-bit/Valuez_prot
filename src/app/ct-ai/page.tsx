import React from "react";
import Link from "next/link";
import {
  Cpu,
  Brain,
  Code,
  ShieldAlert,
  Terminal,
  Globe,
  Sparkles,
  ArrowRight,
  Scale
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export default function CTAIPage() {
  const topics = [
    {
      title: "Computational Thinking",
      desc: "Moving beyond basic coding syntax to master problem decomposition, pattern recognition, and algorithm design.",
      icon: <Terminal className="w-5 h-5 text-indigo-500" />
    },
    {
      title: "Generative AI Literacy",
      desc: "Understanding Large Language Models, image generation weights, and neural networks without the complex jargon.",
      icon: <Brain className="w-5 h-5 text-violet-500" />
    },
    {
      title: "Prompt Engineering & Control",
      desc: "Learning context drafting, parameters restriction, and output verification to treat AI as a productive co-creator.",
      icon: <Sparkles className="w-5 h-5 text-amber-500" />
    },
    {
      title: "Algorithmic Bias & Fairness",
      desc: "Auditing training data sets to spot gender, racial, and geographic representation skew in modern search and recommendation models.",
      icon: <Scale className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Responsible AI & Footprints",
      desc: "Grasping data privacy terms, copyright issues of generative art, and the resource-heavy energy usage of training AI engines.",
      icon: <ShieldAlert className="w-5 h-5 text-cyan-500" />
    }
  ];

  const projects = [
    {
      title: "Project: Audit the Recruiter",
      grade: "Grade 7-8",
      difficulty: "Intermediate",
      desc: "Students build a simple scoring rules model, inject biased criteria (e.g., scoring candidates down for distance gaps), analyze how bias amplifies, and retrain the model for fairness.",
      tag: "Algorithmic Bias"
    },
    {
      title: "Project: The Chatbot Ethics Guard",
      grade: "Grade 6-8",
      difficulty: "Beginner",
      desc: "Students use prompt instructions to build a virtual school tutor chatbot that is programmed to refuse writing homework answers but guides students step-by-step using questions.",
      tag: "Responsible Prompting"
    },
    {
      title: "Project: Carbon Cost Calculator",
      grade: "Grade 5-7",
      difficulty: "Intermediate",
      desc: "Students compute the physical carbon/energy cost of running 100 image prompts versus a simple web search, comparing tech convenience to ecological outcomes.",
      tag: "Green Technology"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* High-Tech Hero */}
      <section className="bg-slate-950 text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden border-b border-slate-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto space-y-8 relative z-10 animate-fade-in-up">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest">
            <Cpu className="w-4 h-4 text-indigo-400 animate-pulse" />
            Techies with Ethics™
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
            CT & Generative AI <span className="text-brand-yellow">Curriculum</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Where coding meets moral clarity. We prepare students to code powerful technologies and build them with empathy, safety, and responsibility.
          </p>
        </div>
      </section>

      {/* Topics list */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tagline="Curriculum Focus"
            title="Computational Thinking + Ethics"
            subtitle="Our modules go beyond standard coding blocks to explore how algorithms impact society and human choices."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-20">
            {topics.map((t, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-xl hover:border-brand-blue-navy/15 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-5 border shadow-sm shrink-0">
                    {t.icon}
                  </div>
                  <h3 className="font-extrabold text-brand-blue-deep text-lg mb-3">
                    {t.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Core Signature Callout */}
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white border border-slate-800 text-center max-w-4xl mx-auto glow-yellow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-yellow/5 rounded-full blur-3xl" />
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-brand-yellow mb-3">
              The Philosophy
            </h4>
            <h3 className="text-2xl md:text-3.5xl font-black tracking-tight mb-4">
              Technology + Ethics + Humanity
            </h3>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              We teach kids that AI is a tool, not a substitute for human intelligence or emotional empathy. Code is powerful—but it requires an anchor of human values to build a positive future.
            </p>
          </div>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tagline="Student Innovations"
            title="Ethics-in-Tech Project Showcase"
            subtitle="See the practical, reflective projects middle schoolers build during their Valuez CT & AI classes."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between bg-white border border-slate-200/80 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-slate-100 text-slate-500">
                      {proj.tag}
                    </span>
                    <span className="text-xs text-slate-400 font-bold">
                      {proj.grade}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-black text-brand-blue-deep group-hover:text-brand-blue-navy transition-colors mb-4">
                    {proj.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-8">
                    {proj.desc}
                  </p>
                </div>

                <div className="mt-auto border-t border-slate-100 pt-5 flex justify-between items-center text-xs font-bold text-slate-400">
                  <span>Level: {proj.difficulty}</span>
                  <span className="text-brand-blue-navy">Valuez Core Project</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Demo Book CTA */}
      <section className="py-20 bg-brand-blue-dark text-white text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">
            Schedule a Virtual CT & AI Syllabus Demo
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Let us walk your computer science department through our lesson slides, projects, and assessment keys.
          </p>
          <div className="pt-4">
            <Link
              href="/book-demo"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-yellow text-slate-900 font-bold hover:bg-brand-yellow-bright transition-all"
            >
              Book Technology Curriculum Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
