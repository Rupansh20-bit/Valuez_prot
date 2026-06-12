import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, MessageCircle, HelpCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import WorkshopGallery from "@/components/WorkshopGallery";

export default function WorkshopsPage() {
  const workshopGallery = [
    {
      title: "Student Cyber Wellness Assembly",
      desc: "Interactive session addressing cyber-bullying and footprint permanent trails.",
      gradeRange: "Grades 5 - 8",
    },
    {
      title: "Teacher AI Co-Creation Masterclass",
      desc: "Equipping teachers with lesson planning prompts to decrease workload.",
      gradeRange: "For Educators",
    },
    {
      title: "Parent Healthy Boundaries Evening",
      desc: "Setting family screen contracts without breaking child-parent trust.",
      gradeRange: "For Parents",
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-brand-blue-dark text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto space-y-6 relative z-10 animate-fade-in-up">
          <span className="text-xs uppercase tracking-widest font-extrabold px-3.5 py-1.5 rounded-full bg-brand-yellow/15 border border-brand-yellow/20 text-brand-yellow-bright">
            Interactive Sessions
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Workshops & Training
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Empowering students, training educators, and guiding parents to align technology habits with human values.
          </p>
        </div>
      </section>

      {/* Main workshops wrapper */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tagline="Offerings"
            title="Browse Our Active Workshops"
            subtitle="Select the target audience to see duration, parameters, and core learning deliverables."
          />

          <WorkshopGallery />
        </div>
      </section>

      {/* Workshop Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tagline="Campus Events"
            title="Recent Workshop Snapshots"
            subtitle="A look at how we engage our partner schools in hands-on debate, training, and parent discussions."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workshopGallery.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300"
              >
                {/* Visual placeholder representating active classroom */}
                <div className="w-full aspect-video rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 mb-6 border shadow-inner">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-slate-400">
                    Workshop Scene {idx + 1}
                  </span>
                </div>
                <span className="text-[10px] uppercase font-bold text-brand-blue-navy tracking-wider block mb-1">
                  {item.gradeRange}
                </span>
                <h3 className="font-extrabold text-brand-blue-deep text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <SectionHeading
            tagline="Feedback"
            title="What Workshop Attendees Say"
            subtitle="Check out quotes from our recent parent-teacher cyber wellness discussions."
          />

          <div className="bg-slate-50 border rounded-3xl p-8 md:p-12 border-slate-150 text-left relative overflow-hidden">
            <span className="text-brand-yellow font-black text-6xl absolute top-4 left-6 opacity-30 select-none">
              “
            </span>
            <p className="text-slate-700 text-base md:text-lg italic leading-relaxed relative z-10 pl-6 mb-6">
              The parent workshop was an eye-opener. Instead of just scolding my child to put the phone down, I now have a solid framework to co-create healthy home screen contracts. It has brought peace to our home.
            </p>
            <div className="border-t border-slate-200/60 pt-5 pl-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-blue-navy text-brand-yellow flex items-center justify-center font-bold text-xs shrink-0">
                MK
              </div>
              <div>
                <h4 className="font-extrabold text-slate-800 text-sm md:text-base leading-tight">
                  Manish Kapoor
                </h4>
                <p className="text-slate-500 text-xs mt-0.5">
                  Parent of Grade 6 Student, Springdales School
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="py-20 bg-brand-blue-dark text-white text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">
            Ready to Schedule a Workshop for Your School?
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            We book workshops 2-3 months in advance. Schedule a quick planning call to reserve a date for the upcoming academic term.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/book-demo"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-yellow text-slate-900 font-bold hover:bg-brand-yellow-bright transition-all"
            >
              Inquire About Workshops
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
