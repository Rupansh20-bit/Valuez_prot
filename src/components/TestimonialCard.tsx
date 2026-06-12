import React from "react";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  designation: string;
  school: string;
  avatar: string;
}

export default function TestimonialCard({
  quote,
  author,
  designation,
  school,
  avatar,
}: TestimonialCardProps) {
  return (
    <div className="relative bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Decorative Quote Icon */}
      <div className="absolute right-6 top-6 text-brand-blue-light/50">
        <Quote className="w-10 h-10 text-brand-blue/10 rotate-180" />
      </div>

      <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-8 relative z-10 italic">
        "{quote}"
      </p>

      <div className="flex items-center gap-4 border-t border-slate-200/60 pt-6 mt-auto">
        <div className="w-12 h-12 rounded-full bg-brand-blue-navy text-brand-yellow-bright flex items-center justify-center font-bold text-sm tracking-wide shadow-sm shrink-0">
          {avatar}
        </div>
        <div>
          <h4 className="font-extrabold text-brand-blue-deep text-sm md:text-base leading-tight">
            {author}
          </h4>
          <p className="text-slate-500 text-xs mt-0.5 font-medium">
            {designation}, <span className="text-brand-blue-navy">{school}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
