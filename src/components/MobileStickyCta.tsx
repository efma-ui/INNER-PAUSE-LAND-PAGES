import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

interface MobileStickyCtaProps {
  onOpenCheckout: (tierId?: string) => void;
}

export const MobileStickyCta: React.FC<MobileStickyCtaProps> = ({ onOpenCheckout }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear after scrolling 400px down
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 px-4 shadow-2xl">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <div>
          <div className="text-xs font-bold text-white flex items-center gap-1">
            <span>🌿 INNER PAUSE</span>
            <span className="text-[10px] text-emerald-400 font-semibold">$17 Vitalicio</span>
          </div>
          <div className="text-[10px] text-slate-400">O $10 activo c/6 meses (Jul 2027)</div>
        </div>

        <button
          onClick={() => onOpenCheckout("lifetime")}
          className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
        >
          <span>Comenzar Ahora</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
