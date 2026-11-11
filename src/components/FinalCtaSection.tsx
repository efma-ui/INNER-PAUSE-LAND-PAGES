import React from "react";
import { ArrowRight, ShieldCheck, Lock, Check } from "lucide-react";

interface FinalCtaSectionProps {
  onOpenCheckout: (tierId?: string) => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#090d16] text-white relative overflow-hidden border-b border-slate-900">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-800 text-xs font-bold text-indigo-300 uppercase tracking-wider mb-6">
          <span>Toma el Control de tu Mente Hoy</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight text-balance max-w-3xl mx-auto">
          No Permitas que Otro Día se Pierda en el Laberinto del Sobrepensamiento
        </h2>

        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed text-balance">
          Únete a cientos de personas que ya disfrutan de una herramienta honesta, basada en ciencia y anclaje de fe, sin mensualidades que aumenten tu estrés financiero.
        </p>

        {/* CTA Button */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenCheckout("lifetime")}
            className="w-full sm:w-auto px-9 py-4 bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-slate-950 font-extrabold text-base rounded-xl transition-all shadow-xl shadow-emerald-500/25 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Obtener Acceso Vitalicio ($17 USD)</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Trust bullets */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            $17 USD Vitalicio o $10 activo por 6 meses (termina Jul 2027)
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            Garantía de satisfacción de 7 días
          </span>
          <span className="flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
            Pago encriptado con seguridad bancaria SSL
          </span>
        </div>
      </div>
    </section>
  );
};
