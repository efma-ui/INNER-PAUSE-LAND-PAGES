import React, { useState } from "react";
import { Brain, HeartPulse, Scale, BookOpen, Shield, Sparkles, Check, ArrowRight } from "lucide-react";
import { DISTRESS_AREAS } from "../data/innerPauseData";

interface FeaturesBentoProps {
  onOpenCheckout: (tierId?: string) => void;
  onScrollToDemo: () => void;
}

export const FeaturesBento: React.FC<FeaturesBentoProps> = ({ onOpenCheckout, onScrollToDemo }) => {
  const [activeAreaTab, setActiveAreaTab] = useState(0);

  return (
    <section id="metodo" className="py-20 lg:py-28 bg-[#0b0f19] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-3">
            Diferenciación Exclusiva
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance">
            5 Funciones que Ninguna Otra Aplicación en el Mercado Posee
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
            Mientras las aplicaciones comerciales tradicionales te ofrecen simples audios de lluvia o relajación pasiva, INNER PAUSE te entrega herramientas clínicas y espirituales precisas para desarticular la crisis en el momento exacto en que ocurre.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Pillar 1: Desglose Mente (Spans 7 cols) */}
          <div className="lg:col-span-7 bg-slate-900/90 rounded-2xl p-7 sm:p-9 border border-slate-800 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400">
                    <Brain className="w-6 h-6" />
                  </span>
                  <div>
                    <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Pilar 01</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">Desglose Mente en 5 Áreas de Rumiación</h3>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                No todos los pensamientos ansiosos son iguales. INNER PAUSE analiza el origen neurológico exacto según el área donde tu mente quedó atrapada:
              </p>

              {/* Interactive Area Selector Tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {DISTRESS_AREAS.map((area, idx) => (
                  <button
                    key={area.id}
                    onClick={() => setActiveAreaTab(idx)}
                    className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      activeAreaTab === idx
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                        : "bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <span>{area.icon} {area.name}</span>
                  </button>
                ))}
              </div>

              {/* Active Area Showcase */}
              <div className="bg-slate-950/70 rounded-xl p-5 border border-slate-800/80">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wide mb-1">
                  Ejemplo en Área {DISTRESS_AREAS[activeAreaTab].name}
                </div>
                <div className="text-sm font-semibold text-white mb-2">
                  {DISTRESS_AREAS[activeAreaTab].desc}
                </div>
                <div className="text-xs text-slate-400 italic mb-4">
                  "{DISTRESS_AREAS[activeAreaTab].patterns[0]?.text}"
                </div>
                <div className="p-3.5 rounded-lg bg-indigo-950/50 border border-indigo-900/60 text-xs text-indigo-200">
                  <strong className="text-indigo-300 block mb-1">Observación Científica TCC / ACT:</strong>
                  {DISTRESS_AREAS[activeAreaTab].patterns[0]?.scienceObs}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Incluye más de 25 patrones cognitivos predefinidos</span>
              <button
                onClick={onScrollToDemo}
                className="text-indigo-400 hover:text-indigo-300 font-semibold cursor-pointer"
              >
                Probar en vivo →
              </button>
            </div>
          </div>

          {/* Pillar 2: Analizador Somático de Carga (Spans 5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 rounded-2xl p-7 sm:p-9 border border-slate-800 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <Scale className="w-6 h-6" />
                </span>
                <div>
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Pilar 02 · Exclusivo</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Auditoría de Carga Biológica</h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-5">
                ¿Tu ansiedad es emocional o tu cuerpo está biológicamente en crisis? INNER PAUSE audita las 4 fuentes somáticas críticas:
              </p>

              <div className="space-y-2.5">
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 flex items-start gap-3">
                  <span className="text-base">💧</span>
                  <div className="text-xs">
                    <strong className="text-white block font-semibold">Poca Agua:</strong>
                    <span className="text-slate-400">Reduce volumen sanguíneo y oxígeno cerebral, provocando taquicardias y mareo que simulan ataques de pánico.</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 flex items-start gap-3">
                  <span className="text-base">🍎</span>
                  <div className="text-xs">
                    <strong className="text-white block font-semibold">Comida Omitida:</strong>
                    <span className="text-slate-400">La hipoglucemia dispara descargas de cortisol y adrenalina idénticas al pánico.</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 flex items-start gap-3">
                  <span className="text-base">📱</span>
                  <div className="text-xs">
                    <strong className="text-white block font-semibold">Sobrecarga Digital:</strong>
                    <span className="text-slate-400">Bloquea el sistema nervioso en alerta continua de lucha o huida.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-emerald-400 font-medium">
              ✓ Algoritmo de diagnóstico combinatorio único en el mundo
            </div>
          </div>

          {/* Pillar 3: Pausa de Calma 4-2-6 con Bio-Mensajes (Spans 6 cols) */}
          <div className="lg:col-span-6 bg-slate-900/90 rounded-2xl p-7 sm:p-9 border border-slate-800 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400">
                  <HeartPulse className="w-6 h-6" />
                </span>
                <div>
                  <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Pilar 03</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Pausa 4-2-6 con Mensajes Dinámicos</h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-5">
                No es una animación circular estéril. Integra un ritmo vagal validado (Inhala 4s, Sostén 2s, Exhala 6s) con frases que cambian dinámicamente según el área que estás tratando:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-slate-950 border border-slate-800">
                  <img
                    src="/src/assets/images/somatic_breath_calm_1794427028298.jpg"
                    alt="Esquema artístico de respiración somática 4-2-6"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-3">
                  <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 text-xs">
                    <strong className="text-purple-300 block mb-0.5">Medición Pre y Post (1-10):</strong>
                    <span className="text-slate-400">Evalúa la intensidad inicial y final, mostrando la desensibilización alcanzada sin juicios de rendimiento.</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 text-xs">
                    <strong className="text-purple-300 block mb-0.5">Mensajes Fásicos:</strong>
                    <span className="text-slate-400">En la inhalación te ancla; al exhalar te guía para soltar el control y la urgencia de certezas inmediatas.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Duración óptima: 3 ciclos (menos de 60 segundos)</span>
              <button onClick={onScrollToDemo} className="text-purple-400 hover:text-purple-300 font-semibold cursor-pointer">
                Probar respiración →
              </button>
            </div>
          </div>

          {/* Pillar 4: Filtro de Verdad & Evidencia (Spans 6 cols) */}
          <div className="lg:col-span-6 bg-slate-900/90 rounded-2xl p-7 sm:p-9 border border-slate-800 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400">
                  <BookOpen className="w-6 h-6" />
                </span>
                <div>
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Pilar 04</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Filtro de Verdad y Cuaderno de Evidencia</h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-5">
                Separa en segundos la película dramática que inventa la mente del hecho observable y concreto:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-slate-950 border border-slate-800">
                  <img
                    src="/src/assets/images/truth_reflection_journal_1794427028723.jpg"
                    alt="Cuaderno minimalista de registro de evidencia y reflexión"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-3">
                  <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 text-xs">
                    <strong className="text-amber-300 block mb-0.5">Identifica la Función Oculta:</strong>
                    <span className="text-slate-400">¿Tu mente está intentando prevenir, buscar certeza, revisar compulsivamente o evitar equivocarse?</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 text-xs">
                    <strong className="text-amber-300 block mb-0.5">Respuesta Equilibrada:</strong>
                    <span className="text-slate-400">Construye una postura grounded que no niega la incertidumbre pero neutraliza el catastrofismo.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Basado en el protocolo de TCC de Beck y Terapia ACT</span>
              <button onClick={onScrollToDemo} className="text-amber-400 hover:text-amber-300 font-semibold cursor-pointer">
                Ver ejercicio →
              </button>
            </div>
          </div>

          {/* Pillar 5: Privacidad Local Total & Sin Suscripción (Spans 12 cols Full-Width) */}
          <div className="lg:col-span-12 bg-gradient-to-r from-slate-900 via-indigo-950/50 to-slate-900 rounded-2xl p-7 sm:p-9 border border-indigo-900/50 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4">
              <span className="p-3.5 rounded-2xl bg-emerald-500/20 text-emerald-400 shrink-0">
                <Shield className="w-8 h-8" />
              </span>
              <div>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Pilar 05 · Seguridad & Ética</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Tus Pensamientos Más Íntimos Nunca Van a un Servidor</h3>
                <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                  Las grandes plataformas monetizan datos de salud mental. INNER PAUSE utiliza arquitectura 100% LocalStorage: tus reflexiones, oraciones y notas quedan en tu navegador privado y jamás se transmiten a la nube.
                </p>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={() => onOpenCheckout("lifetime")}
                className="px-6 py-3.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Obtener Acceso Vitalicio ($17 USD)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
