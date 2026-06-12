"use client";

import React, { useState } from "react";
import Link from "next/link";
import { WORKSHOPS, Workshop } from "../data/mockData";
import { Calendar, UserCheck, CheckCircle2, ArrowRight } from "lucide-react";

export default function WorkshopGallery() {
  const [activeAudience, setActiveAudience] = useState<string>("all");

  const filteredWorkshops =
    activeAudience === "all"
      ? WORKSHOPS
      : WORKSHOPS.filter((w) => w.audience === activeAudience);

  const getAudienceLabel = (aud: string) => {
    switch (aud) {
      case "student":
        return "Student Workshop";
      case "teacher":
        return "Teacher Empowerment";
      case "parent":
        return "Parent Digital Wellness";
      default:
        return "";
    }
  };

  const getAudienceColor = (aud: string) => {
    switch (aud) {
      case "student":
        return "bg-blue-50 text-brand-blue-navy border-blue-100";
      case "teacher":
        return "bg-violet-50 text-violet-700 border-violet-100";
      case "parent":
        return "bg-amber-50 text-amber-700 border-amber-100";
      default:
        return "bg-slate-50 text-slate-600";
    }
  };

  return (
    <div className="space-y-10">
      {/* Audience Filters */}
      <div className="flex flex-wrap justify-center gap-2 border-b border-slate-200 pb-5 max-w-xl mx-auto">
        <button
          onClick={() => setActiveAudience("all")}
          className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
            activeAudience === "all"
              ? "bg-brand-blue-navy text-white shadow-md shadow-blue-900/10"
              : "text-slate-600 hover:text-brand-blue-navy hover:bg-slate-100"
          }`}
        >
          All Workshops
        </button>
        <button
          onClick={() => setActiveAudience("student")}
          className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
            activeAudience === "student"
              ? "bg-blue-600 text-white shadow-md shadow-blue-600/10"
              : "text-slate-600 hover:text-blue-600 hover:bg-slate-100"
          }`}
        >
          For Students
        </button>
        <button
          onClick={() => setActiveAudience("teacher")}
          className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
            activeAudience === "teacher"
              ? "bg-violet-600 text-white shadow-md shadow-violet-600/10"
              : "text-slate-600 hover:text-violet-600 hover:bg-slate-100"
          }`}
        >
          For Teachers
        </button>
        <button
          onClick={() => setActiveAudience("parent")}
          className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
            activeAudience === "parent"
              ? "bg-amber-600 text-white shadow-md shadow-amber-600/10"
              : "text-slate-600 hover:text-amber-600 hover:bg-slate-100"
          }`}
        >
          For Parents
        </button>
      </div>

      {/* Workshops Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {filteredWorkshops.map((w) => (
          <div
            key={w.id}
            className="group flex flex-col justify-between bg-white border border-slate-200/80 rounded-3xl p-8 hover:shadow-xl hover:border-brand-blue-navy/10 transition-all duration-300"
          >
            <div>
              {/* Audience Badges */}
              <div className="flex justify-between items-center mb-6">
                <span
                  className={`inline-block border text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 rounded-full ${getAudienceColor(
                    w.audience
                  )}`}
                >
                  {getAudienceLabel(w.audience)}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold bg-slate-100 px-3 py-1 rounded-full">
                  <Calendar className="w-3.5 h-3.5" />
                  {w.duration}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-black text-brand-blue-deep mb-4 group-hover:text-brand-blue-navy transition-colors">
                {w.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {w.description}
              </p>

              {/* Outcomes list */}
              <div className="border-t border-slate-100 pt-5 mb-8">
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-3.5 flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-brand-blue" />
                  Workshop Deliverables
                </h4>
                <ul className="space-y-3">
                  {w.outcomes.map((out, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href="/book-demo"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-blue-navy text-white text-sm font-bold hover:bg-brand-blue transition-all group-hover:shadow-lg group-hover:shadow-blue-900/10 active:scale-98"
              >
                Inquire For Your School
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
