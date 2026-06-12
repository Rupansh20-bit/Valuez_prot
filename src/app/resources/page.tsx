"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RESOURCES, Resource } from "@/data/mockData";
import { FileText, Download, BookOpen, FileCode, Search, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export default function ResourcesPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [downloadedId, setDownloadedId] = useState<string | null>(null);

  const filters = [
    { id: "all", name: "All Resources" },
    { id: "article", name: "Articles" },
    { id: "module", name: "Sample Modules" },
    { id: "bulletin", name: "Sample Bulletins" },
    { id: "download", name: "Downloads" },
  ];

  const filteredResources =
    activeFilter === "all"
      ? RESOURCES
      : RESOURCES.filter((res) => res.category === activeFilter);

  const handleDownload = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setDownloadedId(id);
    setTimeout(() => {
      setDownloadedId(null);
    }, 2500);
  };

  const getIcon = (cat: string) => {
    switch (cat) {
      case "article":
        return <BookOpen className="w-5 h-5 text-blue-500" />;
      case "module":
        return <FileText className="w-5 h-5 text-emerald-500" />;
      case "bulletin":
        return <FileCode className="w-5 h-5 text-violet-500" />;
      default:
        return <Download className="w-5 h-5 text-amber-500" />;
    }
  };

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case "article":
        return "Article";
      case "module":
        return "Classroom Module";
      case "bulletin":
        return "Future Bulletin";
      default:
        return "Guidebook PDF";
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-brand-blue-dark text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto space-y-6 relative z-10 animate-fade-in-up">
          <span className="text-xs uppercase tracking-widest font-extrabold px-3.5 py-1.5 rounded-full bg-brand-yellow/15 border border-brand-yellow/20 text-brand-yellow-bright">
            Knowledge Center
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Curriculum Resources & Downloads
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Access research articles, sample classroom activities, school guidelines, and printable bulletins.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Filters Bar */}
          <div className="flex flex-wrap justify-center gap-2 border-b border-slate-200 pb-6 mb-12 max-w-2xl mx-auto">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                  activeFilter === f.id
                    ? "bg-brand-blue-navy text-white shadow-md shadow-blue-900/10"
                    : "text-slate-600 hover:text-brand-blue-navy hover:bg-slate-100"
                }`}
              >
                {f.name}
              </button>
            ))}
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredResources.map((res) => (
              <div
                key={res.id}
                className="group flex flex-col justify-between bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-xl hover:bg-white hover:border-brand-blue-navy/15 transition-all duration-300"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 bg-white border px-3 py-1 rounded-full">
                      {res.topic}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">
                      {res.readTimeOrSize}
                    </span>
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border shadow-sm flex items-center justify-center shrink-0">
                      {getIcon(res.category)}
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-brand-blue-navy tracking-wider block mb-0.5">
                        {getCategoryLabel(res.category)}
                      </span>
                      <h3 className="font-extrabold text-brand-blue-deep text-lg md:text-xl group-hover:text-brand-blue transition-colors">
                        {res.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-8">
                    {res.summary}
                  </p>
                </div>

                <div className="mt-auto border-t border-slate-200/60 pt-5">
                  <button
                    onClick={(e) => handleDownload(res.id, e)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-brand-blue-navy text-brand-blue-navy hover:bg-brand-blue-navy hover:text-white font-bold text-sm transition-all active:scale-98"
                  >
                    {downloadedId === res.id ? (
                      <>
                        <CheckCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                        Download Started!
                      </>
                    ) : (
                      <>
                        <Download className="w-4.5 h-4.5" />
                        Download Sample PDF
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leads prompt */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <SectionHeading
            tagline="Custom Mapping"
            title="Need CBSE/ICSE Board Mapping Documents?"
            subtitle="Our curriculum directors have detailed spreadsheets mapping Valuez School topics to specific national/state education mandates."
          />
          <div>
            <Link
              href="/book-demo"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-blue-navy text-white font-bold hover:bg-brand-blue transition-all"
            >
              Request Custom Mapping Guide
              <Download className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
