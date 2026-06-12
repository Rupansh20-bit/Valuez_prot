import React from "react";
import Link from "next/link";
import {
  Orbit,
  Cpu,
  Compass,
  Zap,
  Activity,
  ArrowRight,
  TrendingUp,
  FileText,
  Sparkles
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export default function FutureReadyPage() {
  const bulletins = [
    {
      title: "Space Settlement & Martian Agriculture",
      category: "Space Technology",
      desc: "Investigating hydroponics, closed-loop oxygen ecosystems, and radiation shields required to build functional settlements on Mars.",
      icon: <Orbit className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "Co-Living with Embodied Humanoid Robots",
      category: "Humanoid Robotics",
      desc: "Analyzing visual sensor networks, gait correction mechanics, and the ethical parameters of home-care companion robots.",
      icon: <Cpu className="w-5 h-5 text-violet-400" />
    },
    {
      title: "Quantum Encryption & Post-Quantum Security",
      category: "Quantum Computing",
      desc: "Demystifying qubit superposition and how quantum security shields will safeguard finance and data pipelines from supercomputer attacks.",
      icon: <Compass className="w-5 h-5 text-amber-400" />
    },
    {
      title: "Grid Decarbonization & Fusion Tech",
      category: "Climate Technology",
      desc: "Exploring carbon capture scrubbing, lithium-sulfur density storage, and the promise of nuclear fusion energy grids.",
      icon: <Zap className="w-5 h-5 text-emerald-400" />
    },
    {
      title: "CRISPR Therapeutics & Nanomedicine",
      category: "Healthcare Innovation",
      desc: "Examining targeted gene repair, biosensor drug delivery implants, and computational modeling of protein folding.",
      icon: <Activity className="w-5 h-5 text-rose-400" />
    }
  ];

  const futureCareers = [
    { name: "Space Traffic Manager", sector: "Aerospace Logistics", trend: "High Growth" },
    { name: "Responsible AI Auditor", sector: "Legal Tech & Policy", trend: "Critical Demand" },
    { name: "Humanoid Interface Engineer", sector: "Industrial Automation", trend: "Emerging" },
    { name: "Quantum Cryptographer", sector: "Information Security", trend: "High Growth" },
    { name: "Synthetic Biologist", sector: "Therapeutics & Genomics", trend: "Exponential" },
    { name: "Carbon Asset Manager", sector: "Finance & Sustainability", trend: "Steady" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-white">
      {/* Page Hero */}
      <section className="relative overflow-hidden py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-3xl animate-pulse-slow" />

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10 animate-fade-in-up">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            Curriculum for 2035
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
            Future Ready <span className="text-brand-yellow">Program</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Exposing students to space systems, robotic companions, quantum structures, and the emerging career paths of tomorrow.
          </p>
        </div>
      </section>

      {/* Bulletins Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tagline="Future Bulletins"
            title="Weekly Future Ready Bulletins"
            subtitle="Our students receive weekly briefings tracking cutting-edge developments, designed to spark critical questioning."
            dark={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {bulletins.map((bul, idx) => (
              <div
                key={idx}
                className="bg-slate-900/40 border border-slate-900 rounded-3xl p-8 hover:bg-slate-900 hover:border-cyan-500/25 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider">
                      {bul.category}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-slate-800/80 flex items-center justify-center border border-slate-700">
                      {bul.icon}
                    </div>
                  </div>

                  <h3 className="font-extrabold text-white text-lg md:text-xl mb-3">
                    {bul.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {bul.desc}
                  </p>
                </div>

                <div className="border-t border-slate-800/80 pt-5 mt-8 flex justify-between items-center text-[10px] font-bold text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    Read Bulletin
                  </span>
                  <span>Bulletin No. 0{idx + 12}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Spotlight Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30 border-t border-b border-slate-900">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tagline="Career Roadmap"
            title="Career Forecast: 2035 Careers Spotlight"
            subtitle="We map student capabilities directly to high-demand careers, teaching them the digital skills and ethics required to thrive."
            dark={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {futureCareers.map((car, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex justify-between items-center hover:border-slate-700 transition-colors"
              >
                <div>
                  <h4 className="font-extrabold text-white text-base md:text-lg">
                    {car.name}
                  </h4>
                  <p className="text-slate-500 text-xs mt-0.5 font-semibold">
                    {car.sector}
                  </p>
                </div>

                <span className="flex items-center gap-1 text-[9px] uppercase font-bold text-brand-yellow-bright bg-brand-yellow/10 border border-brand-yellow/10 px-2 py-0.5 rounded-full">
                  <TrendingUp className="w-3 h-3" />
                  {car.trend}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Futuristic CTA */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-black text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">
            Access a Sample Future Ready Bulletin Pack
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Get an instant download of our bulletins covering humanoid safety rules and asteroid mining logic.
          </p>
          <div className="pt-4">
            <Link
              href="/book-demo"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-yellow text-slate-900 font-bold hover:bg-brand-yellow-bright transition-all"
            >
              Request Sample Bulletin Pack
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
