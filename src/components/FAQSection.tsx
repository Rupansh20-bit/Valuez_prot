"use client";

import React, { useState } from "react";
import { FAQS } from "../data/mockData";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {FAQS.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`bg-white border rounded-2xl transition-all duration-300 ${
              isOpen
                ? "border-brand-blue-navy/25 shadow-md shadow-blue-900/5"
                : "border-slate-200 hover:border-slate-300"
            }`}
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center text-left p-6 gap-4 font-bold text-slate-800 hover:text-brand-blue-navy transition-colors"
            >
              <span className="flex items-center gap-3 text-sm md:text-base">
                <HelpCircle className="w-5 h-5 text-brand-blue shrink-0" />
                {faq.question}
              </span>
              {isOpen ? (
                <ChevronUp className="w-5 h-5 text-brand-blue shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
              )}
            </button>

            {/* Answer Panel */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-60 border-t border-slate-100" : "max-h-0"
              }`}
            >
              <div className="p-6 text-slate-600 text-sm md:text-base leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
