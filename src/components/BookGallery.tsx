"use client";

import React, { useState } from "react";
import { BOOKS, Book } from "../data/mockData";
import { BookOpen, X, Play, FileText, Sparkles, Check } from "lucide-react";

export default function BookGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const categories = [
    { id: "all", name: "All Programs" },
    { id: "values-sel", name: "Values & SEL" },
    { id: "child-safety", name: "Child Safety" },
    { id: "ct-ai", name: "CT & AI" },
    { id: "future-ready", name: "Future Ready" },
  ];

  const filteredBooks =
    activeCategory === "all"
      ? BOOKS
      : BOOKS.filter((book) => book.category === activeCategory);

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case "values-sel":
        return "Values & SEL";
      case "child-safety":
        return "Child Safety";
      case "ct-ai":
        return "CT & AI Curriculum";
      case "future-ready":
        return "Future Ready Program";
      default:
        return "";
    }
  };

  return (
    <div className="space-y-10">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 border-b border-slate-200 pb-5 max-w-2xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
              activeCategory === cat.id
                ? "bg-brand-blue-navy text-white shadow-md shadow-blue-900/10"
                : "text-slate-600 hover:text-brand-blue-navy hover:bg-slate-100"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="group flex flex-col justify-between bg-white border border-slate-200/80 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Book Spine / Cover Mockup */}
            <div className="mb-6 aspect-[3/4] relative rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300 flex">
              <div
                className={`w-full h-full bg-gradient-to-br ${book.coverStyle.bg} flex flex-col justify-between p-6 relative`}
              >
                {/* Book Spine border */}
                <div className="absolute top-0 left-0 w-3.5 h-full bg-black/15 border-r border-white/5" />

                <div className="pl-4">
                  <span
                    className={`inline-block border text-[9px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-md mb-4 ${book.coverStyle.accent}`}
                  >
                    {book.grades}
                  </span>
                  <h4 className="font-black text-xl md:text-2xl text-white leading-tight mt-2 drop-shadow-md">
                    {book.title}
                  </h4>
                </div>

                <div className="pl-4 flex items-center gap-2 mt-auto text-white/70 text-xs font-medium">
                  <BookOpen className="w-4 h-4 text-brand-yellow-bright shrink-0" />
                  <span>Valuez Curriculum</span>
                </div>
              </div>
            </div>

            {/* Book Info */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-brand-blue-navy tracking-wider block mb-1">
                  {getCategoryLabel(book.category)}
                </span>
                <h3 className="font-extrabold text-lg text-brand-blue-deep mb-2 group-hover:text-brand-blue transition-colors">
                  {book.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-4">
                  {book.description}
                </p>
              </div>

              <button
                onClick={() => setSelectedBook(book)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-brand-blue-navy text-brand-blue-navy font-bold text-sm hover:bg-brand-blue-navy hover:text-white transition-all active:scale-98"
              >
                <FileText className="w-4 h-4" />
                View Sample Chapters
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Reader Modal */}
      {selectedBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in-up">
          <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl border border-slate-100">
            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-slate-100 bg-slate-50">
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-16 bg-gradient-to-br ${selectedBook.coverStyle.bg} rounded-md shadow flex items-end p-1.5`}
                >
                  <BookOpen className="w-4 h-4 text-brand-yellow-bright" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    Interactive Sample Reader
                  </span>
                  <h3 className="font-extrabold text-xl text-brand-blue-deep leading-tight">
                    {selectedBook.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedBook(null)}
                className="p-2.5 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Close reader"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8">
              {/* Introduction */}
              <div>
                <span className="inline-block text-xs uppercase font-extrabold text-brand-blue-navy tracking-widest mb-2">
                  Sample Lesson Material
                </span>
                <h4 className="text-2xl font-black text-slate-800 mb-4">
                  {selectedBook.sampleChapter.title}
                </h4>
                <p className="text-slate-600 text-base md:text-lg italic leading-relaxed border-l-4 border-brand-yellow pl-4">
                  "{selectedBook.sampleChapter.introduction}"
                </p>
              </div>

              {/* Chapter Content Subsections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                {selectedBook.sampleChapter.subsections.map((sub, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                    <h5 className="font-extrabold text-brand-blue-navy text-base mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-blue-100 text-brand-blue flex items-center justify-center text-xs font-bold">
                        0{idx + 1}
                      </span>
                      {sub.title}
                    </h5>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {sub.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Classroom Activity box */}
              <div className="border border-yellow-200 bg-yellow-50/50 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-2.5 mb-4">
                  <Sparkles className="w-5 h-5 text-brand-amber animate-pulse" />
                  <h5 className="font-extrabold text-slate-800 text-lg">
                    {selectedBook.sampleChapter.activity.title}
                  </h5>
                </div>
                <ul className="space-y-3">
                  {selectedBook.sampleChapter.activity.instructions.map((inst, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm">
                      <Check className="w-4.5 h-4.5 text-brand-amber shrink-0 mt-0.5" />
                      <span>{inst}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-between items-center px-8 py-5 border-t border-slate-100 bg-slate-50">
              <span className="text-xs text-slate-400 font-medium">
                This is a mock sample chapter from the Valuez School curriculum portal.
              </span>
              <button
                onClick={() => setSelectedBook(null)}
                className="px-6 py-2.5 rounded-xl bg-brand-blue-navy text-white text-sm font-bold hover:bg-brand-blue transition-colors"
              >
                Close Sample
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
