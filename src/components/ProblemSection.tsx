import React from "react";
import { AlertCircle, Brain, Ban, Check, Zap, BatteryLow } from "lucide-react";

export const ProblemSection: React.FC = () => {
  return (
    <section id="problema" className="py-20 lg:py-28 bg-[#f8fafc] text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-xs font-bold tracking-widest text-indigo-600 uppercase mb-3">
            El Origen de la Rumiación
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Por qué las aplicaciones tradicionales de meditación no detienen una mente en espiral
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Cuando te invade un pensamiento intrusivo de culpa, una duda sobre tu salud o el temor al rechazo en tus relaciones, intentar "poner la mente en blanco" solo amplifica la alarma cerebral.
          </p>
        </div>

        {/* 2-Column Comparison Split: La Trampa Habitual vs El Método INNER PAUSE */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: La Trampa Habitual */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-red-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-red-600 font-bold text-lg mb-4">
                <Ban className="w-6 h-6 shrink-0" />
                <h3>La Trampa Habitual de la Ansiedad</h3>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                La mayoría de personas intentan tres salidas erróneas que la neurociencia ha demostrado que aumentan la obsesión:
              </p>

              <ul className="space-y-4 text-sm sm:text-base text-slate-700">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✕</div>
                  <div>
                    <strong className="text-slate-900 font-semibold">Búsqueda compulsiva de certeza:</strong> Buscar síntomas en Google, preguntar repetidamente "¿estás molesto conmigo?" o buscar señales sobrenaturales. Alivia 10 segundos, pero refuerza la duda para siempre.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✕</div>
                  <div>
                    <strong className="text-slate-900 font-semibold">Pelear contra el pensamiento:</strong> Forzarte a "pensar en positivo" o reprimir el miedo. La mente interpreta la lucha como confirmación de que hay una amenaza real inminente.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✕</div>
                  <div>
                    <strong className="text-slate-900 font-semibold">Ignorar el colapso biológico:</strong> Intentar resolver dilemas existenciales o laborales cuando tu cuerpo está deshidratado, con sueño deficiente o con hipoglucemia reactiva.
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 text-xs font-medium text-slate-500">
              Resultado: Agotamiento crónico, hipervigilancia y sensación de pérdida de control.
            </div>
          </div>

          {/* Card 2: El Enfoque INNER PAUSE */}
          <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-emerald-400 font-bold text-lg mb-4">
                <Check className="w-6 h-6 shrink-0" />
                <h3>La Solución Práctica de INNER PAUSE</h3>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                INNER PAUSE no te pide fe ciega ni horas de meditación compleja. Te entrega un camino directo para recuperar tu paz interior:
              </p>

              <ul className="space-y-4 text-sm sm:text-base text-slate-200">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</div>
                  <div>
                    <strong className="text-white font-semibold">Claridad Mental Inmediata:</strong> Desarma el sobrepensamiento y las preocupaciones recurrentes, ayudándote a entender qué está experimentando tu mente con serenidad y sin culpas.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</div>
                  <div>
                    <strong className="text-white font-semibold">Reconexión con la Realidad:</strong> Te ayuda a separar los miedos imaginarios de lo que verdaderamente está pasando, devolviéndote la tranquilidad y una perspectiva equilibrada.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</div>
                  <div>
                    <strong className="text-white font-semibold">Alivio Integral (Mente y Cuerpo):</strong> Combina pausas de respiración relajante con una mirada consciente a tus hábitos del día, aliviando la tensión física y emocional en pocos minutos.
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 text-xs font-medium text-emerald-400">
              Resultado: Calma profunda, perspectiva renovada y descanso mental genuino.
            </div>
          </div>
        </div>

        {/* 5 Distinct Distress Situations (Concise & Direct) */}
        <div className="mt-12">
          <div className="text-center mb-6 text-xs font-bold text-slate-500 uppercase tracking-wider">
            Diseñado para los 5 disparadores de sobrepensamiento más comunes:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {/* 1. Espiritual */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-indigo-300 transition-colors">
              <div>
                <div className="text-indigo-600 font-bold text-xs uppercase tracking-wide mb-2 flex items-center gap-1.5">
                  <span>🙏</span>
                  <span>Culpa o fe</span>
                </div>
                <p className="text-slate-700 text-xs sm:text-sm font-medium italic leading-snug">
                  "¿Y si cometí un error espiritual o Dios se apartó de mí?"
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                <span>✓</span>
                <span>Anclaje en gracia y paz interior</span>
              </div>
            </div>

            {/* 2. Salud / Cuerpo */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-indigo-300 transition-colors">
              <div>
                <div className="text-indigo-600 font-bold text-xs uppercase tracking-wide mb-2 flex items-center gap-1.5">
                  <span>❤️</span>
                  <span>Salud y síntomas</span>
                </div>
                <p className="text-slate-700 text-xs sm:text-sm font-medium italic leading-snug">
                  "Siento una molestia rara y mi mente va al peor diagnóstico."
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                <span>✓</span>
                <span>Frena la alarma física y cibercondría</span>
              </div>
            </div>

            {/* 3. Relaciones */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-indigo-300 transition-colors">
              <div>
                <div className="text-indigo-600 font-bold text-xs uppercase tracking-wide mb-2 flex items-center gap-1.5">
                  <span>🤝</span>
                  <span>Relaciones</span>
                </div>
                <p className="text-slate-700 text-xs sm:text-sm font-medium italic leading-snug">
                  "Un mensaje frío me hace temer rechazo o abandono."
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                <span>✓</span>
                <span>Confianza sin pedir confirmación continua</span>
              </div>
            </div>

            {/* 4. Futuro */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-indigo-300 transition-colors">
              <div>
                <div className="text-indigo-600 font-bold text-xs uppercase tracking-wide mb-2 flex items-center gap-1.5">
                  <span>🧭</span>
                  <span>Incertidumbre</span>
                </div>
                <p className="text-slate-700 text-xs sm:text-sm font-medium italic leading-snug">
                  "Atrapado/a en escenarios de '¿y qué tal si todo sale mal?'"
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                <span>✓</span>
                <span>Sal del laberinto mental y vuelve al hoy</span>
              </div>
            </div>

            {/* 5. Trabajo */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-indigo-300 transition-colors">
              <div>
                <div className="text-indigo-600 font-bold text-xs uppercase tracking-wide mb-2 flex items-center gap-1.5">
                  <span>💼</span>
                  <span>Exigencia laboral</span>
                </div>
                <p className="text-slate-700 text-xs sm:text-sm font-medium italic leading-snug">
                  "Reviso todo cuatro veces por miedo a no ser suficiente."
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                <span>✓</span>
                <span>Desactiva el perfeccionismo paralizante</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
