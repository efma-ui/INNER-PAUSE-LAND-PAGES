import React from "react";
import { ShieldAlert } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌿</span>
            <span className="font-extrabold text-white text-base tracking-tight">INNER PAUSE Pro</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-400 text-xs">Mind & Soul Tool</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 font-medium">
            <a href="#problema" className="hover:text-white transition-colors">El Conflicto</a>
            <a href="#metodo" className="hover:text-white transition-colors">El Método</a>
            <a href="#simulador" className="hover:text-white transition-colors">Simulador</a>
            <a href="#comparativa" className="hover:text-white transition-colors">Comparativa</a>
            <a href="#precios" className="hover:text-white transition-colors">Precios</a>
            <a href="#faq" className="hover:text-white transition-colors">Preguntas Frecuentes</a>
          </div>
        </div>

        {/* Official Medical & Therapeutic Disclaimer from PDF */}
        <div className="max-w-4xl mx-auto p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 text-center leading-relaxed flex items-center justify-center gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-500/80 shrink-0 hidden sm:inline" />
          <p className="text-[11px] sm:text-xs">
            <strong>Descargo de Responsabilidad:</strong> INNER PAUSE es una herramienta de reflexión, observación y regulación emocional personal. No proporciona diagnóstico psiquiátrico, psicoterapia clínica ni tratamiento médico formal, ni garantiza resultados específicos. En situaciones de crisis severa o riesgo personal, consulte siempre a un profesional de la salud calificado.
          </p>
        </div>

        <div className="text-center text-slate-600 text-[11px] flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <span>© {new Date().getFullYear()} INNER PAUSE Pro. Todos los derechos reservados.</span>
          <div className="flex gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Términos de Servicio</span>
            <span>·</span>
            <span className="hover:text-slate-400 cursor-pointer">Política de Privacidad</span>
            <span>·</span>
            <span className="hover:text-slate-400 cursor-pointer">Soporte Técnico</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
