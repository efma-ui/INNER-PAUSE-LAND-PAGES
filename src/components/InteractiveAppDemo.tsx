import React, { useState, useEffect, useRef } from "react";
import { Brain, HeartPulse, Scale, BookOpen, ShieldCheck, Play, RotateCcw, CheckCircle, ArrowRight, Lock, AlertCircle, Sparkles } from "lucide-react";
import { DISTRESS_AREAS, BIOLOGICAL_FACTORS } from "../data/innerPauseData";

interface InteractiveAppDemoProps {
  onOpenCheckout: (tierId?: string) => void;
}

const UNLOCKED_DEMO_AREAS = ["spiritual"];

export const InteractiveAppDemo: React.FC<InteractiveAppDemoProps> = ({ onOpenCheckout }) => {
  const [activeTab, setActiveTab] = useState<"mind" | "truth" | "calm" | "load">("mind");

  // State for Mind Breakdown
  const [selectedAreaId, setSelectedAreaId] = useState<string>("spiritual");
  const [selectedPatternIds, setSelectedPatternIds] = useState<string[]>(["spiritual_doubt"]);
  const [customThought, setCustomThought] = useState("");
  const [mindAnalyzed, setMindAnalyzed] = useState(false);

  // State for Truth Filter
  const [tfPrediction, setTfPrediction] = useState("Mi mente dice que si no tengo certeza absoluta sobre este síntoma o decisión, ocurrirá lo peor.");
  const [tfObjective, setTfObjective] = useState("En este momento estoy sentado/a, respirando y no hay una emergencia médica real frente a mí.");
  const [tfAlternative, setTfAlternative] = useState("Podría ser simplemente tensión muscular acumulada y cansancio del día.");
  const [tfFunction, setTfFunction] = useState("certainty");
  const [tfBalanced, setTfBalanced] = useState("Puedo tolerar no saberlo todo en este instante sin convertir la duda en un desastre inminente.");
  const [tfSaved, setTfSaved] = useState(false);

  // State for Calm 4-2-6
  const [beforeIntensity, setBeforeIntensity] = useState<number | null>(7);
  const [afterIntensity, setAfterIntensity] = useState<number | null>(null);
  const [calmRunning, setCalmRunning] = useState(false);
  const [calmPhase, setCalmPhase] = useState<"prep" | "inhale" | "hold" | "exhale" | "done">("prep");
  const [calmSeconds, setCalmSeconds] = useState(5);
  const [currentCycle, setCurrentCycle] = useState(1);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // State for Biological Load
  const [loadFactors, setLoadFactors] = useState<{ [key: string]: boolean }>({
    sleep: true,
    water: true,
    screens: false,
    food: false
  });
  const [loadAnalyzed, setLoadAnalyzed] = useState(false);

  const selectedArea = DISTRESS_AREAS.find((a) => a.id === selectedAreaId) || DISTRESS_AREAS[0];

  // Calm Phase runner
  useEffect(() => {
    if (!calmRunning) return;

    timerRef.current = setInterval(() => {
      setCalmSeconds((prev) => {
        if (prev <= 1) {
          // Transition to next phase
          if (calmPhase === "prep") {
            setCalmPhase("inhale");
            return 4;
          } else if (calmPhase === "inhale") {
            setCalmPhase("hold");
            return 2;
          } else if (calmPhase === "hold") {
            setCalmPhase("exhale");
            return 6;
          } else if (calmPhase === "exhale") {
            // Limited Demo: 1 solo ciclo de muestra
            setCalmPhase("done");
            setCalmRunning(false);
            return 0;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [calmRunning, calmPhase, currentCycle]);

  const handleStartCalm = () => {
    if (!beforeIntensity) return;
    setAfterIntensity(null);
    setCalmRunning(true);
    setCalmPhase("prep");
    setCalmSeconds(5);
    setCurrentCycle(1);
  };

  const handleResetCalm = () => {
    setCalmRunning(false);
    setCalmPhase("prep");
    setCalmSeconds(5);
    setCurrentCycle(1);
    setAfterIntensity(null);
  };

  const togglePattern = (patternId: string) => {
    setSelectedPatternIds((prev) =>
      prev.includes(patternId) ? prev.filter((id) => id !== patternId) : [...prev, patternId]
    );
  };

  // Biological Load calculation logic from PDF
  const getLoadDiagnosis = () => {
    const active = Object.keys(loadFactors).filter((k) => loadFactors[k]);
    if (active.length === 0) {
      return {
        title: "Sin factores físicos marcados",
        body: "No indicaste cargas biológicas elementales. Recuerda que la ansiedad también puede surgir de rumiación o sobrecarga cognitiva.",
        action: "Observa tus pensamientos sin forzar una explicación inmediata."
      };
    }
    if (active.length === 1) {
      const single = active[0];
      if (single === "sleep") {
        return {
          title: "Sueño insuficiente o de mala calidad",
          body: "Dormir poco reduce la regulación de la amígdala cerebral, lo que dispara la sensibilidad al estrés y pensamientos intrusivos.",
          action: "Prioriza un espacio de descanso y evita exigirle a tu mente resolver problemas complejos hoy."
        };
      }
      if (single === "water") {
        return {
          title: "Poca hidratación (Deshidratación leve)",
          body: "Reduce el volumen sanguíneo y la concentración de oxígeno en el cerebro, generando fatiga mental, confusión y taquicardias que simulan ataques de pánico.",
          action: "Bebe un vaso de agua fresca lentamente y espera 15 minutos antes de tomar decisiones."
        };
      }
      if (single === "screens") {
        return {
          title: "Alta exposición a pantallas",
          body: "El flujo continuo de estímulos digitales mantiene al sistema nervioso en alerta de lucha o huida, saturando la memoria de trabajo.",
          action: "Apaga pantallas, aparta el dispositivo y descansa la vista mirando un punto lejano por 5 minutos."
        };
      }
      return {
        title: "Comida insuficiente o saltada",
        body: "La hipoglucemia en sangre activa hormonas de estrés (cortisol y adrenalina), lo que se siente idéntico a la angustia o desesperanza.",
        action: "Consume un alimento nutritivo o snack saludable y deja que tu glucosa se estabilice."
      };
    }
    if (active.length === 2) {
      if (active.includes("sleep") && active.includes("food")) {
        return {
          title: "Comida insuficiente + Sueño insuficiente",
          body: "La falta de glucosa y de descanso profundo colapsan el sistema de reserva energética del cerebro, disparando pensamientos catastróficos y extrema vulnerabilidad emocional.",
          action: "Ingiere algún alimento y busca un espacio para recostarte. No intentes analizar tus problemas en este estado."
        };
      }
      if (active.includes("screens") && active.includes("sleep")) {
        return {
          title: "Sueño insuficiente + Exceso de pantallas",
          body: "El cerebro cansado recibe sobrecarga lumínica e informacional, impidiendo que el sistema nervioso se relaje y generando mareo cognitivo.",
          action: "Pon tu dispositivo en modo 'no molestar' y realiza respiraciones lentas a oscuras o con luz tenue."
        };
      }
      if (active.includes("water") && active.includes("food")) {
        return {
          title: "Comida insuficiente + Poca hidratación",
          body: "Tu metabolismo celular opera con reservas mínimas. Esto causa mareos leves, temblores internos y estado agudo de alarma física.",
          action: "Toma agua inmediatamente y come algo ligero. Espera 15 minutos antes de evaluar cómo te sientes."
        };
      }
      return {
        title: "Combinación de dos factores biológicos",
        body: "Tu sistema nervioso está respondiendo a una sobrecarga física real combinada.",
        action: "Bebe agua, descansa la vista y atiende a tu cuerpo antes de resolver temas mentales."
      };
    }
    return {
      title: "Múltiples factores críticos de carga presentes",
      body: "Tu organismo se encuentra en un estado de agotamiento multifactorial. Tu sistema nervioso está disparando respuestas de supervivencia, haciendo biológicamente imposible procesar pensamientos con calma y objetividad.",
      action: "No intentes resolver ningún dilema de vida hoy. Tu única prioridad absoluta es hidratarte, comer algo nutritivo, apagar pantallas y acostarte a descansar."
    };
  };

  return (
    <section id="simulador" className="py-20 lg:py-28 bg-[#f8fafc] text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-xs font-bold tracking-widest text-indigo-600 uppercase mb-3">
            Demostración en Tiempo Real
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Prueba el Simulador Interactivo de INNER PAUSE Aquí Mismo
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Experimenta en primera persona cómo la aplicación desarticula el sobrepensamiento. Selecciona una de las 4 herramientas clave y pruébala sin costo:
          </p>
        </div>

        {/* Simulator Device Frame Container */}
        {/* Simulator Device Frame Container */}
        <div className="mt-12 max-w-4xl mx-auto bg-white rounded-3xl border border-slate-300 shadow-2xl overflow-hidden">
          {/* Top Bar of the Interactive Tool */}
          <div className="bg-slate-900 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 text-lg">🌿</span>
              <span className="font-bold tracking-tight text-sm sm:text-base">INNER PAUSE</span>
              <span className="text-[10px] font-extrabold text-amber-300 bg-amber-400/10 border border-amber-400/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                <Lock className="w-2.5 h-2.5" />
                Simulador de Muestra
              </span>
            </div>
            <div className="text-xs text-slate-400 flex items-center gap-1.5">
              <span>Uso diario ilimitado en versión con licencia</span>
            </div>
          </div>

          {/* Micro Demo Notice Bar */}
          <div className="bg-amber-50 border-b border-amber-200 px-4 py-2.5 text-center text-xs text-amber-900 flex items-center justify-center gap-2">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>
              <strong>Vista previa limitada:</strong> Diseñada para probar el método. 4 áreas clínicas, diario personal y sesiones continuas están reservados para usuarios con licencia.
            </span>
          </div>

          {/* Module Selector Navigation Tabs */}
          <div className="bg-slate-100 border-b border-slate-200 px-4 py-2 flex flex-wrap gap-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab("mind")}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                activeTab === "mind"
                  ? "bg-white text-indigo-600 shadow-sm border border-slate-200"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              🧠 Desglose Mente
            </button>
            <button
              onClick={() => setActiveTab("truth")}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                activeTab === "truth"
                  ? "bg-white text-indigo-600 shadow-sm border border-slate-200"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              🔎 Filtro de Verdad <span className="text-[10px] text-amber-700 bg-amber-100 px-1 py-0.5 rounded ml-1 font-bold">Muestra</span>
            </button>
            <button
              onClick={() => setActiveTab("calm")}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                activeTab === "calm"
                  ? "bg-white text-indigo-600 shadow-sm border border-slate-200"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              🌿 Pausa de Calma <span className="text-[10px] text-slate-500 bg-slate-200 px-1 py-0.5 rounded ml-1 font-bold">1 Ciclo</span>
            </button>
            <button
              onClick={() => setActiveTab("load")}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                activeTab === "load"
                  ? "bg-white text-indigo-600 shadow-sm border border-slate-200"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              ⚖️ Carga Somática <span className="text-[10px] text-indigo-700 bg-indigo-100 px-1 py-0.5 rounded ml-1 font-bold">Preview</span>
            </button>
          </div>

          {/* Main Interactive Screen Body */}
          <div className="p-6 sm:p-8">
            {/* TAB 1: DESGLOSE MENTE */}
            {activeTab === "mind" && (
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-bold text-slate-900 mb-1">
                      🧠 Desglose Mente
                    </h4>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                      Módulo de Demostración
                    </span>
                  </div>
                  <p className="text-sm text-slate-500">
                    Experimenta cómo se desarticula un pensamiento intrusivo en el área de muestra:
                  </p>
                </div>

                {/* 5 Area Buttons with Pro lock badges */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  {DISTRESS_AREAS.map((area) => {
                    const isUnlocked = UNLOCKED_DEMO_AREAS.includes(area.id);
                    return (
                      <button
                        key={area.id}
                        onClick={() => {
                          setSelectedAreaId(area.id);
                          if (isUnlocked) {
                            setSelectedPatternIds([area.patterns[0]?.id || ""]);
                            setMindAnalyzed(false);
                          }
                        }}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer relative ${
                          selectedAreaId === area.id
                            ? "border-indigo-600 bg-indigo-50/70 shadow-sm"
                            : "border-slate-200 hover:border-slate-300 bg-white"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xl">{area.icon}</span>
                          {!isUnlocked ? (
                            <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-slate-900 text-amber-300 border border-amber-400/30 flex items-center gap-0.5">
                              <Lock className="w-2.5 h-2.5" />
                              PRO
                            </span>
                          ) : (
                            <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                              Demo
                            </span>
                          )}
                        </div>
                        <div className="font-bold text-xs text-slate-900">{area.name}</div>
                      </button>
                    );
                  })}
                </div>

                {/* Check if Selected Area is Locked */}
                {!UNLOCKED_DEMO_AREAS.includes(selectedAreaId) ? (
                  <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white border border-indigo-800/80 text-center space-y-4 shadow-xl animate-fade-in">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-amber-400 mx-auto">
                      <Lock className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-300 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-600/40">
                        Área Exclusiva en INNER PAUSE Pro
                      </span>
                      <h5 className="text-lg sm:text-xl font-bold mt-2.5 text-white">
                        El módulo “{selectedArea.name}” está reservado para la versión completa
                      </h5>
                      <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mt-2 leading-relaxed">
                        {selectedArea.longDesc} Desbloquea sus {selectedArea.patterns.length} patrones clínicos específicos, el desmantelamiento quirúrgico TCC/ACT y las promesas de paz interior.
                      </p>
                    </div>

                    <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 max-w-md mx-auto text-left text-xs text-slate-300 space-y-2">
                      <div className="font-semibold text-white text-[11px] uppercase tracking-wider text-indigo-300">
                        Disponible al activar tu licencia:
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-emerald-400">✓</span>
                        <span>Las 5 áreas clínicas completas sin restricciones</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-emerald-400">✓</span>
                        <span>Historial y registro de evidencia privado e ilimitado</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-emerald-400">✓</span>
                        <span>Sin cuotas sorpresa ni cobros mensuales</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => onOpenCheckout("lifetime")}
                        className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-emerald-500/25 cursor-pointer inline-flex items-center justify-center gap-2"
                      >
                        <span>Desbloquear las 5 Áreas ($17 USD Vitalicio)</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Pattern Selection for Unlocked Demo Area */
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                    <div className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-1">
                      Patrones de muestra en {selectedArea.name}
                    </div>
                    <div className="text-xs text-slate-500 mb-3">
                      Selecciona un pensamiento de prueba para ver el desmantelamiento:
                    </div>

                    <div className="space-y-2">
                      {selectedArea.patterns.map((pat) => (
                        <button
                          key={pat.id}
                          onClick={() => togglePattern(pat.id)}
                          className={`w-full p-3 rounded-xl text-left text-xs sm:text-sm font-medium border transition-all cursor-pointer flex items-center justify-between ${
                            selectedPatternIds.includes(pat.id)
                              ? "bg-white border-indigo-600 text-indigo-950 shadow-sm"
                              : "bg-white/80 border-slate-200 text-slate-700 hover:border-slate-300"
                          }`}
                        >
                          <span>{pat.text}</span>
                          {selectedPatternIds.includes(pat.id) && (
                            <span className="w-4 h-4 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs shrink-0 ml-2">✓</span>
                          )}
                        </button>
                      ))}
                    </div>

                    {/* Custom thought input */}
                    <div className="mt-4">
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        O escribe tu pensamiento en tus propias palabras:
                      </label>
                      <input
                        type="text"
                        value={customThought}
                        onChange={(e) => setCustomThought(e.target.value)}
                        placeholder="Ej: Siento culpa recurrente por no tener certeza absoluta..."
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl bg-white focus:outline-none focus:border-indigo-600"
                      />
                    </div>

                    <div className="mt-5">
                      <button
                        onClick={() => setMindAnalyzed(true)}
                        className="px-6 py-3 bg-indigo-600 text-white font-bold text-sm rounded-xl hover:bg-indigo-700 active:scale-98 transition-all shadow-md shadow-indigo-600/30 cursor-pointer"
                      >
                        Ver Desglose Clínico de Muestra
                      </button>
                    </div>
                  </div>
                )}

                {/* Result Box */}
                {UNLOCKED_DEMO_AREAS.includes(selectedAreaId) && mindAnalyzed && (
                  <div className="bg-white rounded-2xl p-6 border-2 border-indigo-200 shadow-md space-y-4 animate-fade-in">
                    <div className="flex items-center gap-2 text-indigo-900 font-bold text-base">
                      <Brain className="w-5 h-5 text-indigo-600" />
                      <span>Análisis Clínico para Área {selectedArea.name}</span>
                    </div>

                    <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100 text-sm text-indigo-950 leading-relaxed">
                      <strong className="block font-bold text-indigo-900 mb-1">
                        Observación Basada en Evidencia (TCC / ACT):
                      </strong>
                      {selectedArea.patterns.find((p) => selectedPatternIds.includes(p.id))?.scienceObs ||
                        "Escribir lo que piensas no busca 'arreglarlo' de inmediato, sino crear espacio. Ver tus pensamientos en palabras te ayuda a recordar que tú eres quien observa, no el pensamiento mismo."}
                    </div>

                    {/* Spiritual anchor */}
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-sm text-emerald-950 leading-relaxed">
                      <strong className="block font-bold text-emerald-900 mb-1">
                        📖 Principio & Versículo de Anclaje:
                      </strong>
                      {selectedArea.patterns.find((p) => selectedPatternIds.includes(p.id))?.verse || selectedArea.defaultVerse}
                    </div>

                    {/* Pro Conversion Callout */}
                    <div className="p-3.5 rounded-xl bg-slate-900 text-white text-xs flex flex-col sm:flex-row items-center justify-between gap-3 border border-slate-800">
                      <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-amber-400 shrink-0" />
                        <span className="text-slate-300">
                          <strong>Límite del simulador:</strong> Para guardar desgloses en tu historial privado y desbloquear las otras 4 áreas vitales, adquiere tu licencia Pro.
                        </span>
                      </div>
                      <button
                        onClick={() => onOpenCheckout("lifetime")}
                        className="px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-lg text-xs whitespace-nowrap cursor-pointer shrink-0"
                      >
                        Desbloquear Todo ($17 USD)
                      </button>
                    </div>

                    <div className="pt-2 flex flex-wrap gap-3">
                      <button
                        onClick={() => setActiveTab("truth")}
                        className="px-4 py-2 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg transition-colors cursor-pointer"
                      >
                        Probar Filtro de Verdad →
                      </button>
                      <button
                        onClick={() => setActiveTab("calm")}
                        className="px-4 py-2 text-xs font-semibold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg transition-colors cursor-pointer"
                      >
                        Probar 1 Ciclo de Calma →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: FILTRO DE VERDAD */}
            {activeTab === "truth" && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">
                    🔎 Filtro de Verdad
                  </h4>
                  <p className="text-sm text-slate-500">
                    No intenta convencerte de que todo estará bien. Te ayuda a separar predicción, evidencia e interpretación objetiva.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      1. ¿Qué está prediciendo exactamente tu mente?
                    </label>
                    <textarea
                      rows={2}
                      value={tfPrediction}
                      onChange={(e) => setTfPrediction(e.target.value)}
                      className="w-full p-3 text-xs sm:text-sm border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:border-indigo-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      2. ¿Qué evidencia objetiva y comprobable tienes en este segundo?
                    </label>
                    <textarea
                      rows={2}
                      value={tfObjective}
                      onChange={(e) => setTfObjective(e.target.value)}
                      className="w-full p-3 text-xs sm:text-sm border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:border-indigo-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      3. ¿Qué está intentando hacer tu mente en segundo plano?
                    </label>
                    <select
                      value={tfFunction}
                      onChange={(e) => setTfFunction(e.target.value)}
                      className="w-full p-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl bg-white focus:outline-none focus:border-indigo-600 font-medium"
                    >
                      <option value="certainty">Buscar certeza absoluta imposible</option>
                      <option value="prevent">Prevenir un dolor o error imaginario</option>
                      <option value="check">Comprobar o palpar repetidamente</option>
                      <option value="reassurance">Buscar tranquilidad externa momentánea</option>
                      <option value="control">Controlar lo que no depende de mí</option>
                      <option value="avoid">Evitar equivocarme a toda costa</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      4. ¿Cuál sería una respuesta grounded y equilibrada?
                    </label>
                    <textarea
                      rows={2}
                      value={tfBalanced}
                      onChange={(e) => setTfBalanced(e.target.value)}
                      className="w-full p-3 text-xs sm:text-sm border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:border-indigo-600"
                    />
                  </div>

                  <button
                    onClick={() => setTfSaved(true)}
                    className="px-6 py-3 bg-indigo-600 text-white font-bold text-sm rounded-xl hover:bg-indigo-700 active:scale-98 transition-all shadow-md shadow-indigo-600/30 cursor-pointer flex items-center gap-2"
                  >
                    <span>Guardar y Consolidar Reflexión</span>
                    <Lock className="w-4 h-4 text-amber-300" />
                  </button>

                  {tfSaved && (
                    <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-white space-y-3 animate-fade-in shadow-xl">
                      <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                        <Lock className="w-4 h-4" />
                        <span>Guardado Permanente Exclusivo de INNER PAUSE Pro</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        Has experimentado cómo opera el Filtro de Verdad. En este simulador público <strong>no se almacena tu historial privado</strong> para proteger tus datos íntimos de terceros. Con tu código de licencia Pro obtienes diario ilimitado, encriptado local y seguimiento diario.
                      </p>
                      <button
                        onClick={() => onOpenCheckout("lifetime")}
                        className="w-full sm:w-auto px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-emerald-500/20 cursor-pointer inline-flex items-center justify-center gap-2"
                      >
                        <span>Obtener Licencia y Guardar Ilimitado ($17 USD)</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 3: PAUSA DE CALMA */}
            {activeTab === "calm" && (
              <div className="space-y-6 text-center">
                <div className="max-w-md mx-auto">
                  <h4 className="text-xl font-bold text-slate-900 mb-1">
                    🌿 Pausa de Calma (Ritmo Somático 4-2-6)
                  </h4>
                  <p className="text-sm text-slate-500">
                    Pausa de muestra (1 ciclo guiado) para bajar el ritmo cardíaco y experimentar la descompresión física.
                  </p>
                </div>

                {/* Pre-scale intensity */}
                {!calmRunning && calmPhase !== "done" && (
                  <div className="max-w-md mx-auto bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left">
                    <label className="block text-xs font-bold text-slate-800 mb-2">
                      Antes de comenzar: ¿Qué tan intensa es tu sensación ahora? (1 a 10)
                    </label>
                    <div className="flex justify-between gap-1">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => (
                        <button
                          key={val}
                          onClick={() => setBeforeIntensity(val)}
                          className={`w-8 h-8 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            beforeIntensity === val
                              ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                              : "bg-white text-slate-700 border border-slate-300 hover:border-slate-400"
                          }`}
                        >
                          {val}
                        </button>
                      ))}
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1.5">
                      <span>1 = muy baja</span>
                      <span>10 = muy intensa</span>
                    </div>
                  </div>
                )}

                {/* The Somatic Circle */}
                <div className="py-8 flex flex-col items-center justify-center">
                  <div
                    className={`w-48 h-48 rounded-full border-4 flex flex-col items-center justify-center transition-all duration-1000 ${
                      calmPhase === "inhale"
                        ? "scale-125 bg-indigo-50 border-indigo-400 shadow-2xl shadow-indigo-500/20"
                        : calmPhase === "hold"
                        ? "scale-125 bg-purple-50 border-purple-400 shadow-2xl shadow-purple-500/20"
                        : calmPhase === "exhale"
                        ? "scale-100 bg-emerald-50 border-emerald-400 shadow-md"
                        : "scale-100 bg-slate-50 border-slate-300"
                    }`}
                  >
                    <div className="text-4xl font-extrabold text-slate-900 tabular-nums">
                      {calmPhase === "done" ? "✓" : calmSeconds}
                    </div>
                    <div className="text-xs font-bold text-indigo-700 uppercase tracking-wider mt-1">
                      {calmPhase === "prep" && "Prepárate"}
                      {calmPhase === "inhale" && "Inhala lentamente (4s)"}
                      {calmPhase === "hold" && "Sostén suave (2s)"}
                      {calmPhase === "exhale" && "Exhala despacio (6s)"}
                      {calmPhase === "done" && "Pausa de Muestra Completa"}
                    </div>
                    {calmRunning && (
                      <div className="text-[11px] text-slate-400 mt-1">
                        Ciclo 1 de 1 (Muestra de Demostración)
                      </div>
                    )}
                  </div>

                  {/* Adaptive guidance message */}
                  <div className="mt-6 max-w-sm mx-auto text-xs sm:text-sm text-slate-600 italic">
                    {calmPhase === "prep" && "Suelta los hombros y apoya los dos pies firmes sobre el suelo."}
                    {calmPhase === "inhale" && "“Inhala compasión por tu cuerpo y tus procesos actuales.”"}
                    {calmPhase === "hold" && "“Permanece en el presente; el futuro puede esperar.”"}
                    {calmPhase === "exhale" && "“Exhala la urgencia de controlarlo todo en este instante.”"}
                    {calmPhase === "done" && "Tómate unos segundos antes de volver a tus actividades cotidianas."}
                  </div>
                </div>

                {/* Control Action Buttons */}
                {!calmRunning && calmPhase !== "done" && (
                  <button
                    onClick={handleStartCalm}
                    className="px-8 py-3.5 bg-indigo-600 text-white font-bold text-sm rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-600/30 cursor-pointer"
                  >
                    🌿 Iniciar Pausa de Muestra (1 Ciclo)
                  </button>
                )}

                {calmPhase === "done" && (
                  <div className="max-w-md mx-auto space-y-4">
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left">
                      <label className="block text-xs font-bold text-slate-800 mb-2">
                        Después de la pausa: ¿Qué tan intensa es tu sensación ahora?
                      </label>
                      <div className="flex justify-between gap-1">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => (
                          <button
                            key={val}
                            onClick={() => setAfterIntensity(val)}
                            className={`w-8 h-8 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                              afterIntensity === val
                                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                                : "bg-white text-slate-700 border border-slate-300"
                            }`}
                          >
                            {val}
                          </button>
                        ))}
                      </div>
                    </div>

                    {afterIntensity && (
                      <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 text-left">
                        <strong>Resultado de la sesión:</strong> Tu intensidad pasó de {beforeIntensity}/10 a {afterIntensity}/10 (reducción de {Math.max(0, (beforeIntensity || 0) - afterIntensity)} puntos). Puedes observar este cambio sin forzarlo como una garantía para el futuro.
                      </div>
                    )}

                    {/* Pro limitation callout */}
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-white space-y-3 text-left">
                      <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider">
                        <Lock className="w-4 h-4 text-amber-400" />
                        <span>Demostración de 1 Ciclo Finalizada</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300">
                        Has completado el ciclo de prueba. La versión Pro incluye <strong>sesiones completas continuas (3 a 5 ciclos)</strong>, biofeedback somático pre/post guardado en tu historial personal y frases adaptadas dinámicamente a tu nivel de angustia.
                      </p>
                      <button
                        onClick={() => onOpenCheckout("lifetime")}
                        className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Desbloquear Sesiones Completas ($17 USD)</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={handleResetCalm}
                      className="px-5 py-2 text-xs font-semibold text-slate-600 bg-slate-200 hover:bg-slate-300 rounded-lg cursor-pointer"
                    >
                      Repetir Ciclo de Muestra
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* TAB 4: CARGA FISICA Y MENTAL */}
            {activeTab === "load" && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">
                    ⚖️ Carga Física y Mental
                  </h4>
                  <p className="text-sm text-slate-500">
                    A veces el nivel de alarma cerebral no es un problema psicológico, sino factores biológicos básicos del cuerpo y del ritmo diario.
                  </p>
                </div>

                {/* 4 Checkboxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {BIOLOGICAL_FACTORS.map((fact) => (
                    <label
                      key={fact.id}
                      className={`p-4 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                        loadFactors[fact.id]
                          ? "border-indigo-600 bg-indigo-50/60 shadow-sm"
                          : "border-slate-200 bg-white hover:border-slate-300"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={!!loadFactors[fact.id]}
                        onChange={(e) => {
                          setLoadFactors({ ...loadFactors, [fact.id]: e.target.checked });
                          setLoadAnalyzed(false);
                        }}
                        className="mt-1 w-4 h-4 text-indigo-600 rounded cursor-pointer"
                      />
                      <div>
                        <div className="font-bold text-sm text-slate-900">{fact.label}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{fact.scientificImpact}</div>
                      </div>
                    </label>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setLoadAnalyzed(true)}
                    className="px-6 py-3 bg-indigo-600 text-white font-bold text-sm rounded-xl hover:bg-indigo-700 active:scale-98 transition-all shadow-md shadow-indigo-600/30 cursor-pointer"
                  >
                    Revisar Diagnóstico Biológico de Prueba
                  </button>
                </div>

                {loadAnalyzed && (
                  <div className="bg-white rounded-2xl p-6 border-2 border-indigo-200 shadow-md space-y-4 animate-fade-in">
                    <div className="font-bold text-base text-indigo-900">
                      {getLoadDiagnosis().title}
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {getLoadDiagnosis().body}
                    </p>
                    <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950 font-medium">
                      <strong>Sugerencia de acción inmediata:</strong> {getLoadDiagnosis().action}
                    </div>

                    {/* Pro Protocol Lock */}
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-white flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="text-xs text-slate-300">
                        <div className="flex items-center gap-1.5 text-amber-400 font-bold uppercase tracking-wider text-[11px] mb-1">
                          <Lock className="w-3.5 h-3.5" />
                          <span>Protocolo de Rescate Biológico Completo</span>
                        </div>
                        Las guías paso a paso de compensación celular (recuperación de sueño, rehidratación osmótica y estabilización glucémica) están disponibles en la versión Pro.
                      </div>
                      <button
                        onClick={() => onOpenCheckout("lifetime")}
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl whitespace-nowrap cursor-pointer flex items-center gap-1.5 shrink-0"
                      >
                        <span>Ver Protocolos Completos</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Bottom Banner of Interactive Simulator */}
          <div className="bg-slate-900 border-t border-slate-800 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
            <div>
              <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" />
                <span>¿Deseas usar INNER PAUSE a diario y sin restricciones?</span>
              </div>
              <div className="text-xs text-slate-300 mt-0.5">
                Desbloquea las 5 áreas completas, el diario privado ilimitado y el analizador somático avanzado.
              </div>
            </div>
            <button
              onClick={() => onOpenCheckout("lifetime")}
              className="px-5 py-2.5 text-xs sm:text-sm font-extrabold text-slate-950 bg-emerald-500 hover:bg-emerald-400 rounded-xl transition-all shadow-lg shadow-emerald-500/20 whitespace-nowrap cursor-pointer flex items-center gap-1.5"
            >
              <span>Obtener Acceso Vitalicio ($17 USD)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
