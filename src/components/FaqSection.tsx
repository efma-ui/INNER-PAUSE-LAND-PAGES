import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_ITEMS } from "../data/innerPauseData";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#f8fafc] text-slate-900 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="text-xs font-bold tracking-widest text-indigo-600 uppercase mb-3">
            Claridad Total
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Preguntas Frecuentes
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto text-balance">
            Todo lo que necesitas saber antes de adquirir tu licencia de INNER PAUSE Pro.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-indigo-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
