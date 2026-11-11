import React from "react";
import { ArrowRight, ShieldCheck, Sparkles, CheckCircle2, Play, Lock } from "lucide-react";

interface HeroSectionProps {
  onOpenCheckout: (tierId?: string) => void;
  onScrollToDemo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCheckout, onScrollToDemo }) => {
  return (
    <section className="relative bg-[#070b14] text-white overflow-hidden pt-12 pb-20 lg:pt-18 lg:pb-28 border-b border-slate-900">
      {/* Subtle ambient lighting gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-indigo-600/15 via-emerald-600/10 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Unboxed clean metadata kicker (Zero-Pill Discipline) */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm font-semibold text-emerald-400 mb-6 tracking-wide uppercase">
          <span>Neurociencia Cognitiva (TCC / ACT)</span>
          <span className="text-slate-600">·</span>
          <span>Anclaje Espiritual & Bíblico</span>
          <span className="text-slate-600">·</span>
          <span>Regulación Somática 4-2-6</span>
        </div>

        {/* Marquee Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
            Desactiva la Rumiación Mental, la Culpa y el Sobrepensamiento en Menos de 3 Minutos
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto text-balance">
            La única herramienta de autorregulación emocional que separa la predicción catastrófica del hecho observable en <strong className="text-white font-semibold">5 áreas críticas</strong>: espiritualidad, salud, relaciones, futuro y trabajo.
          </p>

          {/* Social Proof & Trust Strip */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-400 font-medium">
            <span className="flex items-center gap-1.5 text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              Sin suscripciones mensuales
            </span>
            <span className="flex items-center gap-1.5 text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              100% Privado en tu dispositivo
            </span>
            <span className="flex items-center gap-1.5 text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              Garantía de reembolso de 7 días
            </span>
          </div>

          {/* Direct Response CTA Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenCheckout("lifetime")}
              className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-xl hover:from-indigo-500 hover:to-indigo-400 shadow-xl shadow-indigo-600/30 transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Obtener Acceso Vitalicio ($17 USD)</span>
              <ArrowRight className="w-5 h-5 shrink-0" />
            </button>

            <button
              onClick={onScrollToDemo}
              className="w-full sm:w-auto px-7 py-4 text-base font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4 text-indigo-400 fill-indigo-400 shrink-0" />
              <span>Probar Simulador Interactivo en Vivo</span>
            </button>
          </div>

          <p className="mt-3 text-xs text-slate-400 font-medium">
            $17 USD Vitalicio (un solo pago) o $10 USD activo por seis meses (la suscripción terminaría en Julio 2027) · Acceso inmediato
          </p>
        </div>

        {/* Visual Showcase Card with High-Res App Mockup */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="relative rounded-2xl p-2 sm:p-4 bg-gradient-to-b from-slate-800/80 to-slate-900/90 border border-slate-700/60 shadow-2xl shadow-indigo-950/50">
            <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-slate-950">
              <img
                src="/src/assets/images/inner_pause_real_ui_phone_1794428991012.jpg"
                alt="INNER PAUSE Pro - Portada en teléfono móvil mostrando la interfaz real con Desglose Mente, Espiritual, Salud y Relaciones"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating feature highlights */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-3 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2 font-semibold text-white">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <span>INNER PAUSE Pro v2.4</span>
                </div>
                <div className="flex items-center gap-4 text-xs font-medium">
                  <span>🧠 Desglose Cognitivo</span>
                  <span>⚖️ Carga Somática</span>
                  <span>🌿 Respiración 4-2-6</span>
                  <span className="hidden md:inline">📖 Anclajes Bíblicos</span>
                </div>
                <button
                  onClick={onScrollToDemo}
                  className="text-indigo-400 hover:text-indigo-300 font-semibold underline underline-offset-4 cursor-pointer"
                >
                  Probar funciones ahora →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Quick Stat Markers */}
        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">3 Min</div>
            <div className="text-xs text-slate-400 mt-1">Tiempo promedio de desensibilización</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">5 Áreas</div>
            <div className="text-xs text-slate-400 mt-1">Categorías precisas de rumiación</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400">$17 Vitalicio</div>
            <div className="text-xs text-slate-400 mt-1">O $10 activo cada 6 meses</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">100%</div>
            <div className="text-xs text-slate-400 mt-1">Privacidad local garantizada</div>
          </div>
        </div>
      </div>
    </section>
  );
};
