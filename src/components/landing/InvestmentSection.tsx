import { Check, ArrowRight, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const included = [
  "20 jours de coaching 1:1 intensif",
   "Méthode Fondation™ : stratégie + profil optimisé",
   "Méthode Écriture™ : 20 posts créés et corrigés",
   "Méthode Croissance™ : prospection + tunnel de vente",
  "Landing page opérationnelle incluse",
  "Suivi quotidien + feedback personnalisé",
  "Plan d'autonomie post-20 jours",
];

const bonuses = [
  "50+ prompts IA personnalisés",
  "Templates accroches & fins de posts",
  "Framework copywriting avancé",
  "Guide visuels pro (Lightroom + IA)",
  "Modèles de messages de prospection",
];

const InvestmentSection = () => {
  return (
    <section id="investissement" className="bg-gradient-to-b from-navy-deep to-navy-mid paper-texture-dark py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="text-center mb-12 observe-section">
          <span className="text-gold font-display text-sm font-semibold tracking-wider uppercase mb-4 block">
            L'Investissement
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-white/65">pour passer de zéro à une voix LinkedIn unique qui attire vos premiers clients en 20 jours</p>
        </div>

        {/* Price card */}
        <div className="observe-section bg-white/8 backdrop-blur-sm border border-gold/20 rounded-3xl p-8 sm:p-12 max-w-2xl mx-auto mb-8">
          <div className="text-center mb-8">
            <div className="flex items-baseline justify-center gap-1">
              <span className="font-display text-6xl sm:text-7xl font-bold text-gold">100</span>
              <span className="font-display text-2xl font-bold text-gold">€</span>
            </div>
            <p className="text-white/50 text-sm mt-2">Paiement unique · Accès complet 20 jours</p>
          </div>

          {/* Included */}
          <div className="mb-6">
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

          {/* Bonuses */}
          <div className="mb-10 border-t border-white/10 pt-6">
            <p className="text-gold/70 text-xs font-semibold uppercase tracking-wider mb-3">+ Bonus offerts</p>
            <div className="space-y-2">
              {bonuses.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-gold text-sm mt-0.5 shrink-0">✦</span>
                  <span className="text-white/65 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <Button
            asChild
            size="lg"
            className="w-full bg-gold text-navy-deep hover:bg-gold-hover font-display font-bold text-base py-6 rounded-full shadow-lg shadow-gold/20 transition-all hover:shadow-xl hover:shadow-gold/30 hover:scale-[1.02]"
          >
            <a href="mailto:toussaint@example.com">
              Réservez votre place maintenant
              <ArrowRight className="w-5 h-5 ml-1" />
            </a>
          </Button>
        </div>

        {/* Why so cheap */}
        <div className="observe-section max-w-2xl mx-auto bg-gold/5 border border-gold/15 rounded-2xl p-6 sm:p-8">
          <div className="flex gap-4">
            <div className="shrink-0 w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mt-0.5">
              <AlertTriangle className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-white mb-2">
                Pourquoi seulement 100€ ?
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Ce prix est temporaire. Je lance ce programme en version test pour affiner la méthode avec les premiers participants. 
                Une fois validé, le prix sera <span className="text-gold font-semibold">multiplié par 150</span>. 
                Si vous lisez cette page, c'est que vous faites partie des premiers — profitez-en avant que le prix change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
