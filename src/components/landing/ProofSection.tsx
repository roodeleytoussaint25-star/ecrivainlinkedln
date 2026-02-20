import { Users, Target, TrendingUp, Search } from "lucide-react";

const stats = [
  { icon: Target, value: "5", label: "Premiers clients" },
  { icon: TrendingUp, value: "100%", label: "Actions quotidiennes" },
  { icon: Users, value: "5", label: "Bêta-testeurs recherchés" },
  { icon: Search, value: "20", label: "Jours intensifs" },
];

const ProofSection = () => {
  return (
    <section className="bg-navy-deep py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="observe-section">
            <span className="text-gold font-display text-sm font-semibold tracking-wider uppercase mb-4 block">
              La Preuve
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Mes 5 premiers clients sont venus de mes{" "}
              <span className="text-gold">actions quotidiennes</span>
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                Je n'ai pas attendu qu'ils viennent à moi. J'ai utilisé ce système — écriture quotidienne, 
                cohérence, et engagement authentique — pour atteindre mes 5 premiers coachés sur LinkedIn.
              </p>
              <p>
                Cette année, je transforme cette formule en offre structurée. C'est pour cela que{" "}
                <strong className="text-gold font-semibold">je recherche 5 bêta-testeurs motivés</strong>{" "}
                afin de co-construire cette offre ensemble et gagner en crédibilité mutuelle.
              </p>
            </div>
          </div>

          <div className="observe-section grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-gold/30 transition-colors"
              >
                <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="font-display text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-white/50 text-xs font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
