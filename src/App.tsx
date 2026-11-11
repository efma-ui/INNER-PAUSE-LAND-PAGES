/**
 * INNER PAUSE Pro - Official Sales Landing Page & Web Platform
 * High-Converting Direct Response Architecture with Montserrat Typography
 */

import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProblemSection } from "./components/ProblemSection";
import { FeaturesBento } from "./components/FeaturesBento";
import { InteractiveAppDemo } from "./components/InteractiveAppDemo";
import { ComparisonTable } from "./components/ComparisonTable";
import { SavingsCalculator } from "./components/SavingsCalculator";
import { PricingSection } from "./components/PricingSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FaqSection } from "./components/FaqSection";
import { FinalCtaSection } from "./components/FinalCtaSection";
import { Footer } from "./components/Footer";
import { CheckoutModal } from "./components/CheckoutModal";
import { MobileStickyCta } from "./components/MobileStickyCta";
import { InnerPauseAppView } from "./components/InnerPauseAppView";

export default function App() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string>("semiannual");
  const [appModalOpen, setAppModalOpen] = useState(false);
  const [appCode, setAppCode] = useState("");

  const handleOpenCheckout = (tierId: string = "semiannual") => {
    setSelectedTier(tierId);
    setCheckoutOpen(true);
  };

  const handleScrollToDemo = () => {
    const el = document.getElementById("simulador");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLaunchAppWithCode = (code: string) => {
    setAppCode(code);
    setAppModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* 1. Header / Navigation */}
      <Navbar onOpenCheckout={handleOpenCheckout} />

      {/* Main Content Sections with Strategic Contrast Flow */}
      <main className="flex-1">
        {/* Section 1: Hero (Fondo Oscuro Premium) */}
        <HeroSection
          onOpenCheckout={handleOpenCheckout}
          onScrollToDemo={handleScrollToDemo}
        />

        {/* Section 2: El Conflicto Mental (Fondo Claro Neutral) */}
        <ProblemSection />

        {/* Section 3: Los 5 Pilares Exclusivos (Fondo Muted Slate / Dark Contrast) */}
        <FeaturesBento
          onOpenCheckout={handleOpenCheckout}
          onScrollToDemo={handleScrollToDemo}
        />

        {/* Section 4: Simulador Interactivo en Vivo (Fondo Claro) */}
        <InteractiveAppDemo onOpenCheckout={handleOpenCheckout} />

        {/* Section 5: Comparativa de Mercado y Precios Públicos (Fondo Blanco) */}
        <ComparisonTable onOpenCheckout={handleOpenCheckout} />

        {/* Section 6: Calculadora de Ahorro Neto (Fondo Neutral Soft) */}
        <SavingsCalculator onOpenCheckout={handleOpenCheckout} />

        {/* Section 7: Planes Oficiales y Oferta de Lanzamiento (Fondo Oscuro de Alta Conversión) */}
        <PricingSection onOpenCheckout={handleOpenCheckout} />

        {/* Section 8: Historias de Transformación y Testimonios (Fondo Blanco) */}
        <TestimonialsSection />

        {/* Section 9: Preguntas Frecuentes (Fondo Claro Neutral) */}
        <FaqSection />

        {/* Section 10: Llamado Final a la Acción (Fondo Oscuro) */}
        <FinalCtaSection onOpenCheckout={handleOpenCheckout} />
      </main>

      {/* Footer with Medical & Psychological Disclaimer */}
      <Footer />

      {/* Mobile Floating Sticky CTA Bar (Respects 15% Viewport Cap) */}
      <MobileStickyCta onOpenCheckout={handleOpenCheckout} />

      {/* Simulated Checkout Modal with Instant Access Code Generation */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        selectedTierId={selectedTier}
        onLaunchAppWithCode={handleLaunchAppWithCode}
      />

      {/* Standalone Full App View Simulator (Accessible with code REFU-XXX or after purchase) */}
      {appModalOpen && (
        <InnerPauseAppView
          initialCode={appCode}
          onClose={() => setAppModalOpen(false)}
        />
      )}
    </div>
  );
}
