import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, ShieldCheck, Cpu, Sparkles } from "lucide-react";

interface ProgramCardProps {
  title: string;
  description: string;
  link: string;
  tag: string;
  bgGrad: string;
}

export default function ProgramCard({ title, description, link, tag, bgGrad }: ProgramCardProps) {
  // Select icon based on title
  const getIcon = () => {
    if (title.includes("Values")) return <BookOpen className="w-8 h-8 text-blue-600" />;
    if (title.includes("Safety")) return <ShieldCheck className="w-8 h-8 text-emerald-600" />;
    if (title.includes("CT")) return <Cpu className="w-8 h-8 text-violet-600" />;
    return <Sparkles className="w-8 h-8 text-amber-600" />;
  };

  return (
    <div className="group relative bg-white border border-slate-200/80 rounded-2xl p-8 hover:shadow-2xl hover:border-brand-blue-navy/15 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Visual background gradient glow */}
      <div className={`absolute top-0 right-0 w-24 h-24 rounded-full bg-gradient-to-br ${bgGrad} opacity-10 group-hover:scale-[3.5] transition-transform duration-500 blur-xl`} />

      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
            {getIcon()}
          </div>
          <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-slate-100 text-slate-500">
            {tag}
          </span>
        </div>

        <h3 className="text-2xl font-black text-brand-blue-deep group-hover:text-brand-blue-navy transition-colors mb-4">
          {title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-8">
          {description}
        </p>
      </div>

      <div className="mt-auto border-t border-slate-100 pt-6">
        <Link
          href={link}
          className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue-navy hover:text-brand-blue group-hover:translate-x-1 transition-all"
        >
          Explore Curriculum
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
