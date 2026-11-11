import React, { useState, useEffect } from "react";
import { ShieldCheck, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenCheckout: (tierId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 text-indigo-200 text-xs py-1.5 px-4 text-center border-b border-indigo-800/40">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>$17 USD Vitalicio (pago único) o $10 USD activo por 6 meses (termina Jul 2027) · Garantía de 7 días</span>
        </div>
      </div>

      {/* Main Header adhering to Frontend Design Constitution §2 */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          scrolled
            ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20"
            : "bg-slate-950 border-b border-slate-900"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-lg md:text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-indigo-300 transition-colors"
          >
            🌿 INNER PAUSE
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a
              href="#problema"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              El Conflicto
            </a>
            <a
              href="#metodo"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              El Método
            </a>
            <a
              href="#simulador"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Demo en Vivo
            </a>
            <a
              href="#comparativa"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Comparativa
            </a>
            <a
              href="#precios"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Precios & Licencias
            </a>
            <a
              href="#testimonios"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Testimonios
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenCheckout("lifetime")}
              className="px-4 py-2 text-xs md:text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 active:scale-98 transition-all shadow-md shadow-indigo-600/30 whitespace-nowrap shrink-0 cursor-pointer"
            >
              Vitalicio ($17 USD)
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-5 space-y-2 text-sm font-medium text-slate-300">
            <a
              href="#problema"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-white"
            >
              El Conflicto Mental
            </a>
            <a
              href="#metodo"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-white"
            >
              Los 5 Pilares Exclusivos
            </a>
            <a
              href="#simulador"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-indigo-400 hover:text-indigo-300"
            >
              Probar Demo en Vivo
            </a>
            <a
              href="#comparativa"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-white"
            >
              Comparativa de Mercado
            </a>
            <a
              href="#precios"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-white"
            >
              Planes y Precios Oficiales
            </a>
            <a
              href="#testimonios"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-white"
            >
              Historias Reales
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 hover:text-white"
            >
              Preguntas Frecuentes
            </a>
          </div>
        )}
      </header>
    </>
  );
};
