import React, { useState } from "react";
import { X, ShieldCheck, Lock, CheckCircle2, Copy, ArrowRight, Sparkles } from "lucide-react";
import { PRICING_TIERS } from "../data/innerPauseData";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTierId?: string;
  onLaunchAppWithCode?: (code: string) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  selectedTierId = "lifetime",
  onLaunchAppWithCode
}) => {
  const [currentTierId, setCurrentTierId] = useState(selectedTierId);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("•••• •••• •••• 4242");
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");
  const [copied, setCopied] = useState(false);

  // Sync state if selectedTierId prop changes
  React.useEffect(() => {
    if (selectedTierId) {
      setCurrentTierId(selectedTierId);
    }
  }, [selectedTierId]);

  if (!isOpen) return null;

  const activeTier = PRICING_TIERS.find((t) => t.id === currentTierId) || PRICING_TIERS[0];

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsProcessing(true);
    setTimeout(() => {
      // Pick a realistic generated access code
      const randomNum = Math.floor(Math.random() * 45) + 1;
      const code = `REFU-0${randomNum < 10 ? "0" + randomNum : randomNum}`;
      setGeneratedCode(code);
      setIsProcessing(false);
      setOrderCompleted(true);
    }, 1200);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden text-white">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">🌿</span>
            <span className="font-bold text-sm sm:text-base">Activación Segura de Licencia</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          {!orderCompleted ? (
            <form onSubmit={handleSubmitOrder} className="space-y-5">
              {/* Plan Selection Buttons */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Selecciona tu Licencia:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {PRICING_TIERS.map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setCurrentTierId(tier.id)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        currentTierId === tier.id
                          ? "bg-indigo-600/20 border-indigo-500 text-white shadow-md shadow-indigo-600/20"
                          : "bg-slate-800/60 border-slate-700/60 text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <div className="text-[11px] font-semibold truncate">{tier.name.split(" ")[0]}</div>
                      <div className="text-base font-extrabold text-white mt-0.5">${tier.price}</div>
                      <div className="text-[10px] text-emerald-400">
                        {tier.id === "lifetime" ? "Vitalicio" : tier.id === "semiannual" ? "c/6 Meses" : "2 Códigos"}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Order Summary box */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between items-center text-slate-300">
                  <span>{activeTier.name}:</span>
                  <span className="font-bold text-white text-sm">${activeTier.price}.00 USD</span>
                </div>
                <div className="flex justify-between items-center text-emerald-400 font-medium">
                  <span>Descuento de Lanzamiento aplicado:</span>
                  <span>-${activeTier.originalPrice - activeTier.price}.00 USD</span>
                </div>
                <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-white font-bold text-sm">
                  <span>Total a pagar hoy:</span>
                  <span className="text-emerald-400 text-base">${activeTier.price}.00 USD</span>
                </div>
              </div>

              {/* Customer Inputs */}
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Nombre Completo:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre y apellido"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Correo Electrónico (donde recibirás tu código):
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="tu-correo@ejemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Método de Pago Seguro (Simulador SSL):
                  </label>
                  <div className="p-3 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-between text-xs text-slate-300">
                    <span className="font-mono">{cardNumber}</span>
                    <span className="text-[11px] text-emerald-400 font-semibold">Cifrado Bancario</span>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-slate-950 font-extrabold text-sm sm:text-base rounded-xl transition-all shadow-xl shadow-emerald-500/25 cursor-pointer disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <span>Procesando activación y generando código...</span>
                ) : (
                  <>
                    <span>Confirmar y Activar Mi Licencia (${activeTier.price} USD)</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-2">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Garantía de reembolso de 7 días · Sin cobros ocultos</span>
              </div>
            </form>
          ) : (
            /* Order Success View */
            <div className="text-center space-y-6 py-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  ¡Felicidades, {name}!
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Tu orden ha sido confirmada con éxito. Hemos enviado una copia de tu recibo a <strong>{email}</strong>.
                </p>
              </div>

              {/* Access Code Display */}
              <div className="p-6 rounded-2xl bg-indigo-950/60 border border-indigo-800/80 space-y-3">
                <div className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
                  Tu Código de Acceso Personal e Intransferible
                </div>
                <div className="text-3xl sm:text-4xl font-black text-emerald-400 tracking-wider font-mono">
                  {generatedCode}
                </div>
                <p className="text-[11px] text-slate-400">
                  Válido durante tu período contratado (configurado con vigencia hasta Julio 2027). Guárdalo para ingresar en cualquiera de tus dispositivos.
                </p>

                <div className="pt-2">
                  <button
                    onClick={handleCopyCode}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-bold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? "¡Código Copiado!" : "Copiar Código"}</span>
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {onLaunchAppWithCode && (
                  <button
                    onClick={() => {
                      onLaunchAppWithCode(generatedCode);
                      onClose();
                    }}
                    className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-indigo-600/30 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Ingresar a INNER PAUSE Pro Ahora</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}

                <button
                  onClick={onClose}
                  className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs rounded-xl cursor-pointer"
                >
                  Volver a la Página de Ventas
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
