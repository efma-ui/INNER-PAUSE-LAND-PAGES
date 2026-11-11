import React from "react";
import { Star, Quote, CheckCircle2, Moon, Brain, ShieldCheck } from "lucide-react";
import { TESTIMONIALS } from "../data/innerPauseData";

export const TestimonialsSection: React.FC = () => {
  const testimonial = TESTIMONIALS[0];

  return (
    <section id="testimonios" className="py-20 lg:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-xs font-bold tracking-widest text-indigo-600 uppercase mb-3">
            Testimonio Real
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            Lo que Sucede Cuando Encuentras Herramientas Reales
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Una experiencia auténtica de quien logró ordenar sus pensamientos, entender sus emociones y recuperar la estabilidad para conciliar el sueño:
          </p>
        </div>

        {/* Featured Editorial Story Card */}
        <div className="mt-14 max-w-5xl mx-auto bg-slate-900 text-white rounded-3xl overflow-hidden border border-slate-800 shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full">
            <img
              src="/src/assets/images/mind_clarity_peace_1794427028821.jpg"
              alt="Momento de estabilidad mental y descanso sereno"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:hidden" />
          </div>

          <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
            <div>
              {/* 5 Stars Rating */}
              <div className="flex items-center gap-1.5 text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
                <span className="text-xs font-bold text-slate-300 ml-2 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700">
                  5.0 / 5.0 Estrellas · Verificado
                </span>
              </div>

              {/* Quote */}
              <blockquote className="text-lg sm:text-xl lg:text-2xl text-slate-100 leading-relaxed font-normal italic relative">
                <Quote className="w-8 h-8 text-indigo-500/30 absolute -top-3 -left-2 -z-0 pointer-events-none" />
                <span className="relative z-10">
                  “{testimonial.quote}”
                </span>
              </blockquote>
            </div>

            {/* Author Profile */}
            <div className="mt-10 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="font-extrabold text-white text-lg flex items-center gap-2">
                  <span>{testimonial.name}</span>
                  <span className="text-xs font-normal text-slate-400">({testimonial.role})</span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800">
                    <CheckCircle2 className="w-3 h-3" />
                    Verificado
                  </span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {testimonial.location}
                </div>
              </div>

              <div className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-indigo-900/60 text-indigo-300 border border-indigo-700/50">
                {testimonial.area}
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars Derived from Rose's Experience */}
        <div className="mt-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-slate-900">Ordenar Pensamientos</div>
              <div className="text-xs text-slate-600 mt-1">Estrategias cognitivas para frenar el caos mental justo cuando lo necesitas.</div>
            </div>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-slate-900">Entender tus Emociones</div>
              <div className="text-xs text-slate-600 mt-1">Descubrir por qué te sientes como te sientes sin juzgarte ni entrar en pánico.</div>
            </div>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Moon className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-slate-900">Conciliar el Sueño</div>
              <div className="text-xs text-slate-600 mt-1">Momentos de estabilidad somática que permiten descansar profundamente.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
