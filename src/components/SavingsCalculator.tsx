import React, { useState } from "react";
import { DollarSign, TrendingDown, ArrowRight, Check } from "lucide-react";

interface SavingsCalculatorProps {
  onOpenCheckout: (tierId?: string) => void;
}

export const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({ onOpenCheckout }) => {
  const [semesters, setSemesters] = useState<number>(2); // 1 to 4 semesters
  const [innerPausePlan, setInnerPausePlan] = useState<"lifetime" | "semiannual">("lifetime");
  const [comparisonType, setComparisonType] = useState<"monthlyApp" | "quarterlyApp" | "therapy">("monthlyApp");

  // Real calculations based on what users actually pay in the market
  const monthlyAppRatePerSemester = 14 * 6; // ~$84 cada 6 meses
  const quarterlyAppRatePerSemester = 45 * 2; // ~$90 cada 6 meses
  const therapyCostPerSemester = 70 * 4; // $280 por 4 sesiones

  let otherCost = 0;
  let otherLabel = "";

  if (comparisonType === "monthlyApp") {
    otherCost = monthlyAppRatePerSemester * semesters;
    otherLabel = `Cobros Mensuales Habituales ($14 USD/mes × ${semesters * 6} meses)`;
  } else if (comparisonType === "quarterlyApp") {
    otherCost = quarterlyAppRatePerSemester * semesters;
    otherLabel = `Plataformas con Cobro Trimestral recurrente (${semesters} semestres)`;
  } else {
    otherCost = therapyCostPerSemester * semesters;
    otherLabel = `Acompañamiento Ocasional (${semesters} semestres)`;
  }

  // $17 Vitalicio (un solo pago de por vida) o $10 activo por seis meses (suscripción termina en julio 2027)
  const innerPauseCost = innerPausePlan === "lifetime" ? 17 : 10 * semesters;
  const netSavings = Math.max(0, otherCost - innerPauseCost);

  return (
    <section className="py-20 bg-[#f1f5f9] text-slate-900 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold tracking-widest text-emerald-700 uppercase mb-2">
            Calculadora de Ahorro Real
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Calcula Cuánto Dinero Conservas Frente a los Cobros Mensuales del Mercado
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Compara lo que realmente paga la gente en aplicaciones masivas ($13 a $15 USD mensuales) contra $17 Vitalicio o $10 activo por seis meses.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                1. Selecciona la opción de INNER PAUSE:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setInnerPausePlan("lifetime")}
                  className={`p-3 rounded-xl text-xs font-semibold border transition-all text-left cursor-pointer ${
                    innerPausePlan === "lifetime"
                      ? "bg-indigo-50 border-indigo-600 text-indigo-950 shadow-sm"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                  }`}
                >
                  <div className="font-bold flex items-center justify-between">
                    <span>Plan Vitalicio</span>
                    <span className="text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded text-[10px]">Recomendado</span>
                  </div>
                  <div className="text-[11px] text-slate-600 mt-0.5">$17 USD un solo pago de por vida</div>
                </button>
                <button
                  type="button"
                  onClick={() => setInnerPausePlan("semiannual")}
                  className={`p-3 rounded-xl text-xs font-semibold border transition-all text-left cursor-pointer ${
                    innerPausePlan === "semiannual"
                      ? "bg-indigo-50 border-indigo-600 text-indigo-950 shadow-sm"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                  }`}
                >
                  <div className="font-bold">Plan Semestral Activo</div>
                  <div className="text-[11px] text-slate-600 mt-0.5">$10 USD / 6 meses (termina Jul 2027)</div>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                2. ¿Contra qué tipo de cobro del mercado deseas comparar?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button
                  onClick={() => setComparisonType("monthlyApp")}
                  className={`p-3 rounded-xl text-xs font-semibold border transition-all text-left cursor-pointer ${
                    comparisonType === "monthlyApp"
                      ? "bg-indigo-50 border-indigo-600 text-indigo-900 shadow-sm"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                  }`}
                >
                  <div className="font-bold">Pago Mensual Común</div>
                  <div className="text-[11px] text-slate-500">~$14 USD / mes ($84 sem.)</div>
                </button>
                <button
                  onClick={() => setComparisonType("quarterlyApp")}
                  className={`p-3 rounded-xl text-xs font-semibold border transition-all text-left cursor-pointer ${
                    comparisonType === "quarterlyApp"
                      ? "bg-indigo-50 border-indigo-600 text-indigo-900 shadow-sm"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                  }`}
                >
                  <div className="font-bold">Planes en Cuotas</div>
                  <div className="text-[11px] text-slate-500">~$45 USD trimestral</div>
                </button>
                <button
                  onClick={() => setComparisonType("therapy")}
                  className={`p-3 rounded-xl text-xs font-semibold border transition-all text-left cursor-pointer ${
                    comparisonType === "therapy"
                      ? "bg-indigo-50 border-indigo-600 text-indigo-900 shadow-sm"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                  }`}
                >
                  <div className="font-bold">Sesiones Privadas</div>
                  <div className="text-[11px] text-slate-500">$70 por sesión</div>
                </button>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  2. Período de tiempo considerado:
                </label>
                <span className="text-sm font-extrabold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                  {semesters === 1 ? "6 meses (1 semestre)" : `${semesters * 6} meses (${semesters} semestres)`}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="4"
                step="1"
                value={semesters}
                onChange={(e) => setSemesters(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-medium">
                <span>6 meses</span>
                <span>12 meses</span>
                <span>18 meses</span>
                <span>24 meses</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {innerPausePlan === "lifetime"
                    ? "Plan Vitalicio: Un solo pago de $17 USD de por vida sin cuotas nunca más."
                    : "Plan Semestral: $10 USD activo por 6 meses (suscripción termina en Julio 2027, $1.66/mes)."}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Garantía incondicional de reembolso de 7 días.</span>
              </div>
            </div>
          </div>

          {/* Results Display Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-lg">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3">
              Resumen de Ahorro Neto
            </div>

            <div className="space-y-3 pb-4 border-b border-slate-800 text-xs sm:text-sm">
              <div className="flex justify-between text-slate-400">
                <span>Costo habitual de mercado:</span>
                <span className="font-bold text-slate-200 line-through">${otherCost.toFixed(2)} USD</span>
              </div>
              <div className="flex justify-between text-emerald-400 font-semibold">
                <span>
                  {innerPausePlan === "lifetime"
                    ? "INNER PAUSE Vitalicio (Pago único):"
                    : `INNER PAUSE Semestral ($10 × ${semesters} sem.):`}
                </span>
                <span className="font-extrabold text-white text-base">${innerPauseCost}.00 USD</span>
              </div>
            </div>

            <div className="pt-4">
              <div className="text-xs text-slate-400 font-medium">Dinero total que conservas en tu cuenta:</div>
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 mt-1 tabular-nums">
                +${netSavings.toFixed(2)} USD
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                Ahorras más del {Math.round((netSavings / otherCost) * 100)}% en comparación con los pagos recurrentes del mercado.
              </div>
            </div>

            <button
              onClick={() => onOpenCheckout(innerPausePlan)}
              className="mt-6 w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>
                {innerPausePlan === "lifetime"
                  ? "Obtener Acceso Vitalicio ($17 USD)"
                  : "Comenzar Plan Semestral ($10 USD)"}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
