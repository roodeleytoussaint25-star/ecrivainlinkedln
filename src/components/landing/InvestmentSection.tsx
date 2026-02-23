import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const included = [
  "20 jours de coaching 1:1 intensif",
  "Profil LinkedIn optimisé de A à Z",
  "20 posts engageants créés et corrigés",
  "Landing page opérationnelle incluse",
  "Suivi complet IA + feedback quotidien",
  "Offre personnalisée structurée",
  "Prompts IA personnalisés (50+ prompts)",
  "Accès aux templates et frameworks",
  "Plan post-20 jours pour autonomie",
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
          <p className="text-white/65">pour transformer votre présence LinkedIn en 20 jours</p>
        </div>

        <div className="observe-section bg-white/8 backdrop-blur-sm border border-gold/20 rounded-3xl p-8 sm:p-12 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-baseline justify-center gap-1">
              <span className="font-display text-6xl sm:text-7xl font-bold text-gold">100</span>
              <span className="font-display text-2xl font-bold text-gold">€</span>
            </div>
            <p className="text-white/50 text-sm mt-2">Paiement unique · Accès complet 20 jours</p>
          </div>

          <div className="space-y-3 mb-10">
            {included.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 shrink-0 rounded-full bg-gold/20 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-gold" />
                </div>
                <span className="text-white/80 text-sm">{item}</span>
              </div>
            ))}
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
      </div>
    </section>
  );
};

export default InvestmentSection;
