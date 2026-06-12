import React from "react";

interface SectionHeadingProps {
  tagline?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
}

export default function SectionHeading({
  tagline,
  title,
  subtitle,
  centered = true,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 max-w-3xl ${centered ? "mx-auto text-center" : "text-left"}`}>
      {tagline && (
        <span
          className={`inline-block text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full mb-3.5 ${
            dark ? "bg-slate-800 text-brand-yellow" : "bg-brand-blue-light text-brand-blue-navy"
          }`}
        >
          {tagline}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-extrabold tracking-tight mb-4 ${
          dark ? "text-white" : "text-brand-blue-deep"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg leading-relaxed ${dark ? "text-slate-400" : "text-slate-600"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
