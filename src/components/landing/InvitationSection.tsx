import { AlertTriangle, Zap, Brain } from "lucide-react";

const cards = [
  {
    icon: AlertTriangle,
    title: "Manque de méthode",
    text: "Vous essayez LinkedIn à moitié et échouez par manque de méthode et de régularité.",
  },
  {
    icon: Zap,
    title: "Algorithme 360 Brew",
    text: "Le nouvel algorithme de LinkedIn exige cohérence et régularité. Publier une fois par semaine ne suffit plus.",
  },
  {
    icon: Brain,
    title: "L'IA est votre assistant",
    text: "L'IA n'est pas votre remplaçant — valorisez VOTRE histoire et vos expériences quotidiennes.",
  },
];

const InvitationSection = () => {
  return (
    <section className="relative bg-navy py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(224_76%_40%/0.3),transparent_60%)]" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-5xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white text-center mb-4 observe-section">
          Pourquoi <span className="text-gold">maintenant</span> ?
        </h2>
        <p className="text-white/50 text-center mb-14 max-w-xl mx-auto">
          Ce programme est pour ceux qui veulent utiliser l'IA comme assistant pour mettre en valeur leur histoire. Il exige discipline, action quotidienne et réflexion.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="observe-section bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:border-gold/30 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                <card.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="observe-section mt-14 bg-gold/10 border border-gold/20 rounded-2xl p-6 sm:p-8 text-center max-w-2xl mx-auto">
          <p className="font-display text-lg sm:text-xl font-semibold text-gold">
            💡 Votre impact réel vient de l'écriture quotidienne, pas des impressions ou likes superficiels.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvitationSection;
