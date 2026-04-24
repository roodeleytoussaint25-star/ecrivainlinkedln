import { Check, ArrowRight, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const included = [
  "Positionnement défini",
  "Profil LinkedIn réécrit (3 versions au choix)",
  "16 posts complets avec visuels",
  "Calendrier de publication recommandé",
  "Livraison en moins de 30 jours",
];

const InvestmentSection = () => {
  return (
    <section id="investissement" className="bg-navy-deep paper-texture-dark py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="text-center mb-12 observe-section">
          <span className="text-gold font-display text-sm font-semibold tracking-wider uppercase mb-4 block">L'Investissement</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2">Tout ce dont tu as besoin pour exister sur LinkedIn</h2>
          <p className="text-white/65">Un système clé-en-main, livré en 30 jours, sans appel.</p>
        </div>

        <div className="observe-section bg-white/8 backdrop-blur-sm border border-gold/20 rounded-3xl p-8 sm:p-12 max-w-2xl mx-auto mb-8">
          <div className="text-center mb-8">
            <div className="flex items-baseline justify-center gap-1">
              <span className="font-display text-6xl sm:text-7xl font-bold text-gold">197</span>
              <span className="font-display text-2xl font-bold text-gold">€</span>
            </div>
            <p className="text-white/50 text-sm mt-2">Paiement unique · Accès complet 30 jours</p>
          </div>

          <div className="mb-10">
            <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-3">Le programme</p>
            <div className="space-y-2.5">
              {included.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 shrink-0 rounded-full bg-gold/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-gold" />
                  </div>
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <Button asChild size="lg" className="w-full bg-gold text-navy-deep hover:bg-gold-hover font-display font-bold text-base py-6 rounded-full shadow-lg shadow-gold/20 transition-all hover:shadow-xl hover:shadow-gold/30 hover:scale-[1.02]">
            <a href="mailto:toussaint@example.com">
              Obtenir ma place
              <ArrowRight className="w-5 h-5 ml-1" />
            </a>
          </Button>
        </div>

        <div className="observe-section max-w-2xl mx-auto bg-gold/5 border border-gold/15 rounded-2xl p-6 sm:p-8">
          <div className="flex gap-4">
            <div className="shrink-0 w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mt-0.5">
              <AlertTriangle className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-white mb-2">Pourquoi 197€ ?</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                <span className="text-gold font-semibold">3 places disponibles</span> pour ce lancement. Prix qui augmente après.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
