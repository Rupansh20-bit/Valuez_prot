import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Heart,
  ShieldAlert,
  Layers,
  FileText,
  Video,
  ClipboardList,
  Sparkles,
  ShieldCheck
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export default function CurriculumPage() {
  const coreDeliverables = [
    {
      title: "Student Reflection Journals",
      desc: "Beautifully printed, age-appropriate physical journals that replace rote worksheets. Contains guided moral stories, perspective checklists, self-evaluation charts, and parent discussion triggers.",
      icon: <FileText className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Interactive Classroom Slides & Videos",
      desc: "Zero teacher prep required. Teachers open the Valuez portal and play story videos, scenario prompts, and group debate frameworks that get children talking and listening.",
      icon: <Video className="w-6 h-6 text-violet-600" />
    },
    {
      title: "Comprehensive Teacher Guides",
      desc: "Step-by-step scripts, conversation starters, behavioral pointers, and conflict resolution templates for home-room teachers or values educators.",
      icon: <BookOpen className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Behavioral Assessment Rubrics",
      desc: "Objective evaluation guidelines, feedback trackers, and character self-assessment matrixes to map behavioral progression across terms.",
      icon: <ClipboardList className="w-6 h-6 text-rose-600" />
    }
  ];

  const curriculumFocusAreas = [
    {
      title: "India-Rooted Values",
      category: "Values Core",
      desc: "Focuses on the civic roots and cultural strengths of character.",
      topics: ["Aadar (Respect for elders/peers)", "Sahanubhuti (Active Empathy)", "Kritagyata (Gratitude practices)", "Nagrikta (Civic responsibility)", "Charitra (Personal truthfulness)"]
    },
    {
      title: "Social Emotional Learning (SEL)",
      category: "Emotional Core",
      desc: "Builds emotional resilience, focus, and collaboration habits.",
      topics: ["Self-Awareness & self-talk", "Relationship management", "Emotion regulation & triggers", "Responsible decision making", "Cooperative problem solving"]
    },
    {
      title: "Child Safety & Consent",
      category: "Protection Core",
      desc: "Equips students with physical boundaries and protection rights.",
      topics: ["Body Boundaries (Safe/Unsafe Touch)", "Saying 'No' & Consent rules", "Bullying spotting & prevention", "Digital boundaries & privacy lockups"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-brand-blue-dark text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto space-y-6 relative z-10 animate-fade-in-up">
          <span className="text-xs uppercase tracking-widest font-extrabold px-3.5 py-1.5 rounded-full bg-brand-yellow/15 border border-brand-yellow/20 text-brand-yellow-bright">
            Core Curriculum
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Values, SEL & Child Safety
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            A research-backed, classroom-ready pedagogy designed to raise emotionally strong, morally resilient, and boundary-aware students.
          </p>
        </div>
      </section>

      {/* Curriculum Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tagline="Curriculum Focus"
            title="Syllabus Highlights by Grade Groups"
            subtitle="Explore how the curriculum naturally progresses from foundation rules to complex ethical scenarios."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {curriculumFocusAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-xl hover:border-brand-blue-navy/15 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] uppercase font-extrabold tracking-wider bg-white px-3 py-1 rounded-full border border-slate-200 text-slate-500 block w-max mb-6">
                    {area.category}
                  </span>
                  <h3 className="text-2xl font-black text-brand-blue-deep mb-3">
                    {area.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-6">
                    {area.desc}
                  </p>
                </div>

                <div className="border-t border-slate-200/60 pt-6 mt-auto">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                    Core Learning Modules
                  </h4>
                  <ul className="space-y-3">
                    {area.topics.map((t, index) => (
                      <li key={index} className="flex items-center gap-2.5 text-sm text-slate-700 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Deliverables Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tagline="School Infrastructure"
            title="The Unified Platform Deliverables"
            subtitle="We provide everything required to deliver and evaluate the curriculum with complete transparency."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreDeliverables.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 flex gap-6"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 border flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-extrabold text-brand-blue-deep text-lg md:text-xl">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LMS & Parent Portal Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase font-extrabold text-brand-blue-navy tracking-widest block">
              Valuez Learning Management System
            </span>
            <h2 className="text-2xl md:text-3.5xl font-black text-brand-blue-deep leading-tight">
              A Complete Dashboard for School Management.
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Administrators and academic coordinators can track curriculum completion, access lesson slides, configure school calendars, and review behavioral assessment matrices across all sections and grades.
            </p>
            <div className="space-y-3.5 text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                <span>Board Alignment Trackers (CBSE / ICSE / NEP)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                <span>Print-ready Assessment Report Cards</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                <span>Instant parent communication logs</span>
              </div>
            </div>
          </div>

          <div className="relative p-8 rounded-3xl bg-brand-blue-dark text-white border border-slate-800 shadow-xl overflow-hidden glass-panel-dark glow-blue">
            <h3 className="font-black text-lg text-white mb-6 border-b border-slate-800 pb-3 flex justify-between items-center">
              <span>LMS Coordinator View</span>
              <span className="text-[10px] uppercase bg-brand-blue/30 px-2 py-0.5 rounded border border-brand-blue/40 font-bold">
                Live Console
              </span>
            </h3>

            <div className="space-y-4 text-xs">
              <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 flex justify-between items-center">
                <div>
                  <h4 className="font-extrabold text-white">Grade 4: Gratitude (Journal Module 2)</h4>
                  <p className="text-slate-400 text-[10px] mt-0.5">Assigned to Section A, B & C</p>
                </div>
                <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  92% Completed
                </span>
              </div>

              <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 flex justify-between items-center">
                <div>
                  <h4 className="font-extrabold text-white">Grade 6: Digital Footprints (Safety Module 4)</h4>
                  <p className="text-slate-400 text-[10px] mt-0.5">Assigned to Section A & B</p>
                </div>
                <span className="text-yellow-400 font-bold bg-yellow-500/10 px-2 py-0.5 rounded border border-yellow-500/20">
                  In Progress
                </span>
              </div>

              <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 flex justify-between items-center">
                <div>
                  <h4 className="font-extrabold text-white">Annual Assessment Completion</h4>
                  <p className="text-slate-400 text-[10px] mt-0.5">All grades compilation</p>
                </div>
                <span className="text-slate-400 font-bold bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                  Pending Term-2
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Demo CTA */}
      <section className="py-20 bg-brand-blue-dark text-white text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">
            See the Complete Physical Reflection Journals
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            We can mail a sample set of curriculum journals and teacher guides to your school address for review.
          </p>
          <div className="pt-4">
            <Link
              href="/book-demo"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-yellow text-slate-900 font-bold hover:bg-brand-yellow-bright transition-all"
            >
              Request Sample Journals by Post
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
