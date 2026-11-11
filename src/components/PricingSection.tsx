import React, { useState, useEffect } from "react";
import { Check, ShieldCheck, Zap, Sparkles, Clock, Lock, ArrowRight } from "lucide-react";
import { PRICING_TIERS } from "../data/innerPauseData";

interface PricingSectionProps {
  onOpenCheckout: (tierId?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenCheckout }) => {
  // Launch offer countdown timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 42,
    seconds: 19
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="precios" className="py-20 lg:py-28 bg-[#070b14] text-white border-b border-slate-900 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-3">
            Inversión Transparente Sin Trampas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance">
            Elige tu Plan y Comienza a Vivir sin el Ruido Mental Constante
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
            Precios justos inspirados en la libertad del usuario. Sin cobros automáticos sorpresivos a fin de mes.
          </p>

          {/* Launch countdown bar */}
          <div className="mt-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/90 border border-indigo-900/60 text-xs sm:text-sm text-indigo-200">
            <Clock className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Precio promocional de lanzamiento disponible por las próximas:</span>
            <span className="font-extrabold text-white bg-slate-800 px-2 py-0.5 rounded tabular-nums font-mono">
              {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}:{String(timeLeft.seconds).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-200 ${
                tier.highlight
                  ? "bg-gradient-to-b from-indigo-950/70 via-slate-900 to-slate-900 border-2 border-indigo-500 shadow-2xl shadow-indigo-600/25 lg:-translate-y-3"
                  : "bg-slate-900/80 border border-slate-800 hover:border-slate-700 shadow-lg"
              }`}
            >
              {/* Badge */}
              {tier.badge && (
                <div
                  className={`text-[11px] font-extrabold tracking-wider uppercase mb-4 px-3 py-1 rounded-full w-fit ${
                    tier.highlight
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                      : "bg-slate-800 text-slate-300"
                  }`}
                >
                  {tier.badge}
                </div>
              )}

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {tier.name}
                </h3>
                <div className="text-xs text-slate-400 mb-6">
                  {tier.billingText}
                </div>

                {/* Price block */}
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl sm:text-5xl font-black text-white tabular-nums">
                    ${tier.price}
                  </span>
                  <span className="text-sm font-semibold text-slate-400 uppercase">
                    USD
                  </span>
                  <span className="text-sm text-slate-500 line-through ml-2">
                    ${tier.originalPrice} USD
                  </span>
                </div>

                <div className="text-xs text-emerald-400 font-semibold mb-6">
                  {tier.savings}
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-6 border-t border-slate-800 text-xs sm:text-sm text-slate-300">
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${tier.highlight ? "text-indigo-400" : "text-emerald-400"}`} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-slate-800/80">
                <button
                  onClick={() => onOpenCheckout(tier.id)}
                  className={`w-full py-3.5 px-4 rounded-xl text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                    tier.highlight
                      ? "bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white shadow-indigo-600/30 transform hover:-translate-y-0.5"
                      : "bg-slate-800 hover:bg-slate-700 text-white"
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-center text-[11px] text-slate-400 mt-2.5 flex items-center justify-center gap-1.5">
                  <Lock className="w-3 h-3 text-slate-500" />
                  <span>Pago seguro 256-bit SSL · Entrega instantánea</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 7-Day Money-Back Guarantee Seal Card */}
        <div className="mt-16 max-w-3xl mx-auto bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col sm:flex-row items-center gap-6 shadow-xl">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
            <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>
          <div className="text-center sm:text-left">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
              Garantía Incondicional de 7 Días
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Pruébalo durante 7 días sin ningún riesgo financiero
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Si dentro de los primeros 7 días sientes que INNER PAUSE no te proporcionó el alivio, claridad y desarticulación mental prometida, escríbenos y te reembolsaremos el 100% de tu dinero de inmediato. Sin preguntas, sin condiciones ocultas y conservando tu agradecimiento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
