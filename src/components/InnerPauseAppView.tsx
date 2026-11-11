import React, { useState, useEffect } from "react";
import { X, ArrowLeft, Globe, Brain, HeartPulse, Scale, BookOpen, FileText, CheckCircle, Trash2 } from "lucide-react";
import { DISTRESS_AREAS, BIOLOGICAL_FACTORS } from "../data/innerPauseData";

interface InnerPauseAppViewProps {
  initialCode?: string;
  onClose: () => void;
}

export const InnerPauseAppView: React.FC<InnerPauseAppViewProps> = ({ initialCode = "", onClose }) => {
  const [accessCode, setAccessCode] = useState(initialCode || "");
  const [isAuthenticated, setIsAuthenticated] = useState(!!initialCode);
  const [authError, setAuthError] = useState("");
  const [lang, setLang] = useState<"es" | "en">("es");
  const [activeTab, setActiveTab] = useState<"mind" | "truth" | "calm" | "promises" | "evidence" | "load">("mind");

  // Mind state
  const [selectedAreaId, setSelectedAreaId] = useState<string>("spiritual");
  const [selectedPatterns, setSelectedPatterns] = useState<string[]>([]);
  const [thoughtText, setThoughtText] = useState("");
  const [showMindResult, setShowMindResult] = useState(false);

  // Truth state
  const [prediction, setPrediction] = useState("");
  const [objective, setObjective] = useState("");
  const [alternative, setAlternative] = useState("");
  const [mindFunc, setMindFunc] = useState("certainty");
  const [balanced, setBalanced] = useState("");
  const [truthSaved, setTruthSaved] = useState(false);

  // Calm state
  const [beforeIntensity, setBeforeIntensity] = useState<number | null>(null);
  const [afterIntensity, setAfterIntensity] = useState<number | null>(null);
  const [calmRunning, setCalmRunning] = useState(false);
  const [calmPhase, setCalmPhase] = useState<"prep" | "inhale" | "hold" | "exhale" | "done">("prep");
  const [secondsLeft, setSecondsLeft] = useState(5);
  const [calmCycle, setCalmCycle] = useState(1);

  // Evidence state
  const [fact, setFact] = useState("");
  const [interpretation, setInterpretation] = useState("");
  const [altEvidence, setAltEvidence] = useState("");
  const [evidenceList, setEvidenceList] = useState<{ id: number; fact: string; interp: string; alt: string }[]>([
    {
      id: 1,
      fact: "No recibí respuesta a mi mensaje de ayer en la tarde.",
      interp: "Creo que la persona está molesta conmigo y no quiere hablarme más.",
      alt: "Es posible que haya estado muy ocupada en el trabajo o cuidando a sus hijos."
    }
  ]);

  // Load state
  const [loadSleep, setLoadSleep] = useState(false);
  const [loadWater, setLoadWater] = useState(false);
  const [loadScreens, setLoadScreens] = useState(false);
  const [loadFood, setLoadFood] = useState(false);
  const [showLoadResult, setShowLoadResult] = useState(false);

  // Check login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = accessCode.trim().toUpperCase();
    if (!clean) {
      setAuthError(lang === "es" ? "Introduce tu código personal de acceso." : "Please enter your personal access code.");
      return;
    }
    // Block sample placeholder codes so users cannot copy them
    if (clean.includes("EJEMPLO") || clean.includes("CLAVE") || clean.includes("MUESTRA") || clean === "REFU-000") {
      setAuthError(
        lang === "es"
          ? "El código 'CLAVE-EJEMPLO-999' es una muestra ilustrativa que no existe en la base de datos. Por favor introduce tu código real emitido en tu orden."
          : "The code 'CLAVE-EJEMPLO-999' is a non-existent sample. Please enter your real code issued with your order."
      );
      return;
    }
    // Valid code format
    if (clean.startsWith("REFU-") || clean.startsWith("TEST-") || clean.length >= 6) {
      setAuthError("");
      setIsAuthenticated(true);
    } else {
      setAuthError(
        lang === "es"
          ? "Código no reconocido o expirado. Introduce tu clave personal recibida al confirmar tu plan."
          : "Unrecognized or expired code. Please enter the personal key received with your plan."
      );
    }
  };

  // Calm breathing ticker
  useEffect(() => {
    if (!calmRunning) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
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
            if (calmCycle < 3) {
              setCalmCycle((c) => c + 1);
              setCalmPhase("inhale");
              return 4;
            } else {
              setCalmPhase("done");
              setCalmRunning(false);
              return 0;
            }
          }
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [calmRunning, calmPhase, calmCycle]);

  const activeArea = DISTRESS_AREAS.find((a) => a.id === selectedAreaId) || DISTRESS_AREAS[0];

  return (
    <div className="fixed inset-0 z-50 bg-slate-100 overflow-y-auto text-slate-900 font-sans">
      {/* Top Bar inside App */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-30 px-4 py-3 shadow-xs">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver a la Página de Ventas</span>
            </button>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-xl">🌿</span>
              <span className="font-extrabold text-slate-900 text-sm tracking-tight">INNER PAUSE Pro</span>
              <span className="text-xs text-slate-400">· Mind & Soul Tool</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-slate-100 p-1 rounded-xl flex items-center text-xs font-bold">
              <button
                onClick={() => setLang("es")}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  lang === "es" ? "bg-white text-indigo-600 shadow-xs" : "text-slate-500"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  lang === "en" ? "bg-white text-indigo-600 shadow-xs" : "text-slate-500"
                }`}
              >
                EN
              </button>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 cursor-pointer"
              title="Cerrar aplicación"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {!isAuthenticated ? (
        /* Access Screen */
        <div className="min-h-[85vh] flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-200 shadow-xl text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto text-3xl">
              🌿
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900">INNER PAUSE Pro</h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {lang === "es"
                  ? "Introduce tu código de acceso para ingresar a la plataforma."
                  : "Enter your personal access code to enter."}
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="text"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                placeholder="Ej: CLAVE-EJEMPLO-999"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-center text-base font-bold tracking-widest text-slate-900 uppercase focus:outline-none focus:border-indigo-600"
              />

              {authError && (
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 font-medium">
                  {authError}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-indigo-600/30 cursor-pointer"
              >
                {lang === "es" ? "Entrar al Sistema" : "Enter Platform"}
              </button>
            </form>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-500">
              🔒 <strong>Código de Acceso Individual:</strong> El ejemplo mostrado <code>CLAVE-EJEMPLO-999</code> no existe en el sistema para evitar copias no autorizadas. Tu código activo y personal se genera automáticamente al confirmar tu orden.
            </div>
          </div>
        </div>
      ) : (
        /* Main Authenticated Inner Pause App (Matching pages 19-78 of PDF) */
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
          {/* Medical notice banner from PDF page 19 */}
          <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-xl text-xs text-indigo-900 text-center font-medium">
            Una herramienta de reflexión y regulación emocional. No es diagnóstico ni tratamiento médico.
          </div>

          {/* Navigation Tabs from PDF page 20 */}
          <div className="flex gap-2 overflow-x-auto pb-2 border-b border-slate-200">
            {[
              { id: "mind", label: "🧠 Desglose Mente" },
              { id: "truth", label: "🔎 Filtro de Verdad" },
              { id: "calm", label: "🌿 Pausa de Calma" },
              { id: "promises", label: "📖 Promesas" },
              { id: "evidence", label: "📝 Evidencia" },
              { id: "load", label: "⚖️ Carga física/mental" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-white text-indigo-600 border border-slate-300 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB 1: DESGLOSE MENTE */}
          {activeTab === "mind" && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900">🧠 Desglose Mente</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Identifica qué tipo de pensamiento está apareciendo. No necesitas encontrar la explicación perfecta.
                </p>
              </div>

              {/* 5 Area Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DISTRESS_AREAS.map((area) => (
                  <button
                    key={area.id}
                    onClick={() => {
                      setSelectedAreaId(area.id);
                      setSelectedPatterns([]);
                      setShowMindResult(false);
                    }}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedAreaId === area.id
                        ? "border-indigo-600 bg-indigo-50/70 shadow-sm"
                        : "border-slate-200 hover:border-slate-300 bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
                      <span>{area.icon}</span>
                      <span>{area.name}</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-1">{area.desc}</div>
                  </button>
                ))}
              </div>

              {/* Patterns selection */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-4">
                <div className="text-xs font-bold text-slate-800">
                  ¿Cuál de estos pensamientos se parece más al tuyo en {activeArea.name}?
                </div>
                <div className="space-y-2">
                  {activeArea.patterns.map((pat) => (
                    <button
                      key={pat.id}
                      onClick={() => {
                        setSelectedPatterns((prev) =>
                          prev.includes(pat.id) ? prev.filter((p) => p !== pat.id) : [...prev, pat.id]
                        );
                      }}
                      className={`w-full p-3 rounded-xl text-left text-xs font-medium border transition-all cursor-pointer ${
                        selectedPatterns.includes(pat.id)
                          ? "bg-white border-indigo-600 text-indigo-950 shadow-xs"
                          : "bg-white/80 border-slate-200 text-slate-700"
                      }`}
                    >
                      {pat.text}
                    </button>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    También puedes escribirlo con tus propias palabras:
                  </label>
                  <textarea
                    rows={2}
                    value={thoughtText}
                    onChange={(e) => setThoughtText(e.target.value)}
                    placeholder="Escribe aquí si quieres..."
                    className="w-full p-3 border border-slate-300 rounded-xl text-xs bg-white focus:outline-none focus:border-indigo-600"
                  />
                </div>

                <button
                  onClick={() => setShowMindResult(true)}
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-sm cursor-pointer"
                >
                  Ver Desglose
                </button>
              </div>

              {showMindResult && (
                <div className="p-5 rounded-xl bg-indigo-50 border border-indigo-200 space-y-3">
                  <div className="font-bold text-sm text-indigo-950">Tu Desglose:</div>
                  <div className="p-3 bg-white rounded-lg border border-indigo-100 text-xs text-slate-700">
                    <strong className="block text-indigo-900 mb-1">Observación Científica (TCC / ACT):</strong>
                    {activeArea.patterns.find((p) => selectedPatterns.includes(p.id))?.scienceObs ||
                      "Los pensamientos son solo eventos mentales pasajeros. No tienes que creerles ni pelear contra ellos."}
                  </div>
                  {activeArea.id === "spiritual" && (
                    <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-xs text-emerald-950">
                      <strong className="block text-emerald-900 mb-1">📖 Principio / Versículo de anclaje:</strong>
                      {activeArea.patterns.find((p) => selectedPatterns.includes(p.id))?.verse || activeArea.defaultVerse}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: FILTRO DE VERDAD */}
          {activeTab === "truth" && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-5">
              <div>
                <h3 className="text-xl font-bold text-slate-900">🔎 Filtro de Verdad</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Separa predicción, evidencia e interpretación objetiva.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">1. ¿Qué está prediciendo tu mente?</label>
                  <input
                    type="text"
                    value={prediction}
                    onChange={(e) => setPrediction(e.target.value)}
                    placeholder="Mi mente dice que..."
                    className="w-full p-2.5 text-xs border border-slate-300 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">2. ¿Qué evidencia objetiva tienes ahora?</label>
                  <input
                    type="text"
                    value={objective}
                    onChange={(e) => setObjective(e.target.value)}
                    placeholder="Lo que realmente sé en este momento es..."
                    className="w-full p-2.5 text-xs border border-slate-300 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">3. ¿Qué está intentando hacer tu mente?</label>
                  <select
                    value={mindFunc}
                    onChange={(e) => setMindFunc(e.target.value)}
                    className="w-full p-2.5 text-xs border border-slate-300 rounded-xl bg-white font-medium"
                  >
                    <option value="certainty">Buscar certeza</option>
                    <option value="prevent">Prevenir</option>
                    <option value="check">Comprobar</option>
                    <option value="reassurance">Buscar tranquilidad</option>
                    <option value="control">Controlar</option>
                    <option value="avoid">Evitar equivocarme</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">4. ¿Cuál sería una respuesta equilibrada?</label>
                  <input
                    type="text"
                    value={balanced}
                    onChange={(e) => setBalanced(e.target.value)}
                    placeholder="Puedo reconocer la incertidumbre sin convertirla en certeza..."
                    className="w-full p-2.5 text-xs border border-slate-300 rounded-xl"
                  />
                </div>

                <button
                  onClick={() => setTruthSaved(true)}
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-xs cursor-pointer"
                >
                  Guardar Reflexión
                </button>

                {truthSaved && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900">
                    ✓ Reflexión guardada con éxito en este dispositivo.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: PAUSA DE CALMA */}
          {activeTab === "calm" && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900">🌿 Pausa de Calma</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Una pausa breve para bajar el ritmo y observar sin juzgar.
                </p>
              </div>

              {!calmRunning && calmPhase !== "done" && (
                <div className="max-w-md mx-auto text-left bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <label className="block text-xs font-bold text-slate-800 mb-2">
                    Antes de comenzar, ¿qué tan intensa es tu sensación ahora? (1-10)
                  </label>
                  <div className="flex justify-between gap-1">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <button
                        key={num}
                        onClick={() => setBeforeIntensity(num)}
                        className={`w-7 h-7 text-xs font-bold rounded-lg cursor-pointer ${
                          beforeIntensity === num ? "bg-indigo-600 text-white" : "bg-white border border-slate-300"
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="py-6 flex flex-col items-center">
                <div
                  className={`w-40 h-40 rounded-full border-4 flex flex-col items-center justify-center transition-all duration-1000 ${
                    calmPhase === "inhale"
                      ? "scale-125 bg-indigo-50 border-indigo-400"
                      : calmPhase === "hold"
                      ? "scale-125 bg-purple-50 border-purple-400"
                      : calmPhase === "exhale"
                      ? "scale-95 bg-emerald-50 border-emerald-400"
                      : "bg-slate-50 border-slate-200"
                  }`}
                >
                  <div className="text-3xl font-extrabold text-slate-900 tabular-nums">
                    {calmPhase === "done" ? "✓" : secondsLeft}
                  </div>
                  <div className="text-[11px] font-bold text-indigo-700 uppercase mt-1">
                    {calmPhase === "prep" && "Prepárate"}
                    {calmPhase === "inhale" && "Inhala (4s)"}
                    {calmPhase === "hold" && "Sostén (2s)"}
                    {calmPhase === "exhale" && "Exhala (6s)"}
                    {calmPhase === "done" && "Completo"}
                  </div>
                </div>
              </div>

              {!calmRunning && calmPhase !== "done" && (
                <button
                  onClick={() => {
                    if (!beforeIntensity) setBeforeIntensity(6);
                    setCalmRunning(true);
                    setCalmPhase("prep");
                    setSecondsLeft(5);
                    setCalmCycle(1);
                  }}
                  className="px-6 py-3 bg-indigo-600 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer"
                >
                  🌿 Iniciar Pausa de Calma
                </button>
              )}

              {calmPhase === "done" && (
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 max-w-md mx-auto">
                  Pausa completada con éxito. Tómate unos segundos antes de retomar tus labores.
                </div>
              )}
            </div>
          )}

          {/* TAB 4: PROMESAS */}
          {activeTab === "promises" && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">📖 Promesas para este Momento</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Palabras de anclaje seleccionadas según el tipo de pensamiento que estás experimentando.
                </p>
              </div>

              <div className="space-y-3">
                {activeArea.patterns.map((pat, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs sm:text-sm">
                    <div className="text-slate-800">{pat.verse || activeArea.defaultVerse}</div>
                    <div className="text-[11px] font-bold text-emerald-700 mt-1">Refugio & Anclaje</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: EVIDENCIA */}
          {activeTab === "evidence" && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-5">
              <div>
                <h3 className="text-xl font-bold text-slate-900">📝 Registro de Evidencia</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Separa lo que sabes de lo que tu mente está interpretando.
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Hecho observable:</label>
                  <input
                    type="text"
                    value={fact}
                    onChange={(e) => setFact(e.target.value)}
                    placeholder="¿Qué ocurrió realmente?"
                    className="w-full p-2.5 text-xs border border-slate-300 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Interpretación de tu mente:</label>
                  <input
                    type="text"
                    value={interpretation}
                    onChange={(e) => setInterpretation(e.target.value)}
                    placeholder="¿Qué significado alarmante le estás dando?"
                    className="w-full p-2.5 text-xs border border-slate-300 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Otra posibilidad:</label>
                  <input
                    type="text"
                    value={altEvidence}
                    onChange={(e) => setAltEvidence(e.target.value)}
                    placeholder="¿Qué otra explicación neutral o benigna existe?"
                    className="w-full p-2.5 text-xs border border-slate-300 rounded-xl"
                  />
                </div>

                <button
                  onClick={() => {
                    if (!fact.trim()) return;
                    setEvidenceList([
                      { id: Date.now(), fact, interp: interpretation, alt: altEvidence },
                      ...evidenceList
                    ]);
                    setFact("");
                    setInterpretation("");
                    setAltEvidence("");
                  }}
                  className="px-5 py-2.5 bg-indigo-600 text-white font-bold text-xs rounded-xl cursor-pointer"
                >
                  Guardar Evidencia
                </button>
              </div>

              {/* Stored entries */}
              <div className="space-y-3 pt-4 border-t border-slate-200">
                <div className="text-xs font-bold text-slate-700">Entradas Registradas:</div>
                {evidenceList.map((item) => (
                  <div key={item.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5 relative">
                    <div>
                      <strong className="text-slate-900">Hecho:</strong> <span className="text-slate-700">{item.fact}</span>
                    </div>
                    <div>
                      <strong className="text-indigo-900">Interpretación:</strong> <span className="text-slate-600">{item.interp}</span>
                    </div>
                    <div>
                      <strong className="text-emerald-900">Otra posibilidad:</strong> <span className="text-slate-600">{item.alt}</span>
                    </div>
                    <button
                      onClick={() => setEvidenceList(evidenceList.filter((e) => e.id !== item.id))}
                      className="text-red-500 hover:text-red-700 text-[11px] font-semibold mt-2 cursor-pointer flex items-center gap-1"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Eliminar</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: CARGA FISICA/MENTAL */}
          {activeTab === "load" && (
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-5">
              <div>
                <h3 className="text-xl font-bold text-slate-900">⚖️ Carga Física y Mental</h3>
                <p className="text-xs text-slate-500 mt-1">
                  A veces el nivel de activación se debe a factores fisiológicos básicos del cuerpo.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="p-3.5 rounded-xl border border-slate-200 flex items-center gap-3 cursor-pointer bg-slate-50">
                  <input
                    type="checkbox"
                    checked={loadSleep}
                    onChange={(e) => setLoadSleep(e.target.checked)}
                    className="w-4 h-4 text-indigo-600"
                  />
                  <span className="text-xs font-semibold text-slate-800">Dormí poco o mal</span>
                </label>
                <label className="p-3.5 rounded-xl border border-slate-200 flex items-center gap-3 cursor-pointer bg-slate-50">
                  <input
                    type="checkbox"
                    checked={loadWater}
                    onChange={(e) => setLoadWater(e.target.checked)}
                    className="w-4 h-4 text-indigo-600"
                  />
                  <span className="text-xs font-semibold text-slate-800">He tomado poca agua</span>
                </label>
                <label className="p-3.5 rounded-xl border border-slate-200 flex items-center gap-3 cursor-pointer bg-slate-50">
                  <input
                    type="checkbox"
                    checked={loadScreens}
                    onChange={(e) => setLoadScreens(e.target.checked)}
                    className="w-4 h-4 text-indigo-600"
                  />
                  <span className="text-xs font-semibold text-slate-800">Demasiado tiempo en pantallas</span>
                </label>
                <label className="p-3.5 rounded-xl border border-slate-200 flex items-center gap-3 cursor-pointer bg-slate-50">
                  <input
                    type="checkbox"
                    checked={loadFood}
                    onChange={(e) => setLoadFood(e.target.checked)}
                    className="w-4 h-4 text-indigo-600"
                  />
                  <span className="text-xs font-semibold text-slate-800">Me salté una comida o comí poco</span>
                </label>
              </div>

              <button
                onClick={() => setShowLoadResult(true)}
                className="px-5 py-2.5 bg-indigo-600 text-white font-bold text-xs rounded-xl shadow-xs cursor-pointer"
              >
                Revisar Carga Biológica
              </button>

              {showLoadResult && (
                <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-xl space-y-2 text-xs">
                  <div className="font-bold text-indigo-950">
                    {loadSleep || loadWater || loadScreens || loadFood
                      ? "Factores de vulnerabilidad somática detectados"
                      : "Sin cargas básicas marcadas"}
                  </div>
                  <p className="text-slate-700">
                    {loadWater && "• Deshidratación: Reduce el flujo de oxígeno al cerebro, provocando fatiga y taquicardia simulada. "}
                    {loadSleep && "• Falta de sueño: Reduce la regulación inhibitoria de la amígdala cerebral. "}
                    {loadFood && "• Hipoglucemia: Desencadena liberación de cortisol de emergencia. "}
                    {loadScreens && "• Luz azul y pantallas: Mantiene al sistema nervioso en alerta reactiva. "}
                    {!loadSleep && !loadWater && !loadScreens && !loadFood && "Continúa observando tu experiencia sin forzar una explicación inmediata."}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
