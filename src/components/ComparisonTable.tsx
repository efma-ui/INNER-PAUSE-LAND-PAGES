import React from "react";
import { Check, X, ShieldAlert, Sparkles, ArrowRight } from "lucide-react";
import { COMPETITOR_COMPARISON } from "../data/innerPauseData";

interface ComparisonTableProps {
  onOpenCheckout: (tierId?: string) => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onOpenCheckout }) => {
  return (
    <section id="comparativa" className="py-20 lg:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-xs font-bold tracking-widest text-indigo-600 uppercase mb-3">
            Análisis de Mercado & Precios Públicos
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            ¿Cómo se Compara INNER PAUSE con las Aplicaciones Comerciales?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Analizamos los registros públicos de precios y funcionalidades de las principales plataformas del sector de bienestar emocional y meditación:
          </p>
        </div>

        {/* Public Benchmark Table */}
        <div className="mt-14 overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden border border-slate-200 rounded-2xl shadow-sm">
              <table className="min-w-full divide-y divide-slate-200 text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-50">
                    <th scope="col" className="py-4 px-4 sm:px-6 font-bold text-slate-900 w-1/4">
                      Criterio de Evaluación
                    </th>
                    <th scope="col" className="py-4 px-4 sm:px-6 font-bold text-indigo-700 bg-indigo-50/80 border-x border-indigo-100 w-1/4">
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-indigo-600" />
                        <span>INNER PAUSE Pro</span>
                      </div>
                      <div className="text-[11px] font-normal text-indigo-900 mt-0.5">$17 Vitalicio o $10 / 6 meses</div>
                    </th>
                    <th scope="col" className="py-4 px-3 sm:px-4 font-semibold text-slate-700 w-1/6">
                      Apps Comerciales de Relajación
                      <div className="text-[11px] font-normal text-slate-500 mt-0.5">Plataformas masivas</div>
                    </th>
                    <th scope="col" className="py-4 px-3 sm:px-4 font-semibold text-slate-700 w-1/6">
                      Apps Tradicionales de Mindfulness
                      <div className="text-[11px] font-normal text-slate-500 mt-0.5">Planes con cobro mensual</div>
                    </th>
                    <th scope="col" className="py-4 px-3 sm:px-4 font-semibold text-slate-700 w-1/6">
                      Apps Religiosas y Devocionales
                      <div className="text-[11px] font-normal text-slate-500 mt-0.5">Contenido litúrgico estándar</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {COMPETITOR_COMPARISON.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="py-4 px-4 sm:px-6 font-semibold text-slate-900">
                        {row.feature}
                      </td>
                      <td className="py-4 px-4 sm:px-6 font-bold text-indigo-950 bg-indigo-50/40 border-x border-indigo-100">
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{row.innerPause}</span>
                        </div>
                      </td>
                      <td className="py-4 px-3 sm:px-4 text-slate-600">
                        <div className="flex items-start gap-1.5">
                          {row.calm.startsWith("No") ? (
                            <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                          ) : (
                            <span className="w-4 h-4 text-slate-400 shrink-0 mt-0.5">·</span>
                          )}
                          <span>{row.calm}</span>
                        </div>
                      </td>
                      <td className="py-4 px-3 sm:px-4 text-slate-600">
                        <div className="flex items-start gap-1.5">
                          {row.headspace.startsWith("No") ? (
                            <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                          ) : (
                            <span className="w-4 h-4 text-slate-400 shrink-0 mt-0.5">·</span>
                          )}
                          <span>{row.headspace}</span>
                        </div>
                      </td>
                      <td className="py-4 px-3 sm:px-4 text-slate-600">
                        <div className="flex items-start gap-1.5">
                          {row.hallow.startsWith("No") ? (
                            <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                          ) : (
                            <span className="w-4 h-4 text-slate-400 shrink-0 mt-0.5">·</span>
                          )}
                          <span>{row.hallow}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Financial Transparency Callout Box */}
        <div className="mt-12 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
              Comparativa de Costo Real
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Paga solo lo justo: Ahorra más del 80% frente a los cobros mensuales del mercado
            </h3>
            <p className="mt-2 text-sm text-slate-300 max-w-2xl">
              La mayoría de usuarios en el mercado terminan pagando entre <strong className="text-white font-semibold">$13 y $15 USD al mes</strong> ($78 a $90 USD cada 6 meses). Con INNER PAUSE puedes elegir <strong className="text-emerald-400 font-semibold">$17 USD Vitalicio</strong> (un solo pago de por vida) o <strong className="text-emerald-400 font-semibold">$10 USD activo por seis meses</strong> (la suscripción terminaría en Julio de 2027 en este caso, apenas $1.66 USD al mes).
            </p>
          </div>

          <button
            onClick={() => onOpenCheckout("lifetime")}
            className="w-full md:w-auto px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md shadow-emerald-500/20 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Obtener Acceso Vitalicio ($17 USD)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
