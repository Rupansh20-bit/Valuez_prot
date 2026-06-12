import React from "react";
import { BookOpen, Heart, ShieldAlert, Cpu, Orbit } from "lucide-react";

interface PillarCardProps {
  index: number;
  title: string;
  points: string[];
  description: string;
}

const icons = [
  <BookOpen key="p1" className="w-6 h-6 text-brand-blue-navy" />,
  <Heart key="p2" className="w-6 h-6 text-rose-500" />,
  <ShieldAlert key="p3" className="w-6 h-6 text-amber-500" />,
  <Cpu key="p4" className="w-6 h-6 text-violet-500" />,
  <Orbit key="p5" className="w-6 h-6 text-indigo-500" />,
];

const iconBgs = [
  "bg-blue-100",
  "bg-rose-100",
  "bg-amber-100",
  "bg-violet-100",
  "bg-indigo-100",
];

export default function PillarCard({ index, title, points, description }: PillarCardProps) {
  const icon = icons[index % icons.length];
  const bg = iconBgs[index % iconBgs.length];

  return (
    <div className="group relative bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:border-brand-blue-navy/10 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-slate-50 group-hover:scale-150 transition-transform duration-500 -z-10" />

      <div>
        <div className="flex items-center gap-4 mb-5">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold shadow-sm ${bg}`}>
            {icon}
          </div>
          <div>
            <span className="text-[10px] tracking-wider uppercase font-bold text-slate-400">
              Pillar 0{index + 1}
            </span>
            <h3 className="font-extrabold text-lg md:text-xl text-brand-blue-deep group-hover:text-brand-blue-navy transition-colors">
              {title}
            </h3>
          </div>
        </div>

        <p className="text-slate-600 text-sm mb-6 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="border-t border-slate-100 pt-5 mt-auto">
        <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3">
          Key Topics Covered
        </h4>
        <ul className="space-y-2">
          {points.map((point) => (
            <li key={point} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
