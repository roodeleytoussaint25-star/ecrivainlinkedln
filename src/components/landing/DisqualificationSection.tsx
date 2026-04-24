import { X } from "lucide-react";

const disqualifiers = [
  "Tu veux un coach qui t'appelle chaque semaine",
  "Tu cherches une garantie de clients en 30 jours",
  "Tu n'as pas de service ou d'expertise à montrer",
  "Tu refuses de valider les livrables et de publier",
  "Tu veux une formation avec des modules vidéo",
  "Tu attends des résultats sans fournir d'efforts",
];

const DisqualificationSection = () => {
  return (
    <section className="bg-navy-mid paper-texture-dark py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <div className="text-center mb-12 observe-section">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Sprint Visibilité n'est <span className="text-gold">PAS pour toi</span> si...
          </h2>
        </div>
        <div className="space-y-4">
          {disqualifiers.map((item, i) => (
            <div key={i} className="observe-section flex items-start gap-4 bg-white/8 border border-white/15 rounded-xl p-4 sm:p-5 hover:border-red-500/30 transition-colors">
              <div className="w-8 h-8 shrink-0 rounded-lg bg-red-500/10 flex items-center justify-center">
                <X className="w-4 h-4 text-red-400" />
              </div>
              <p className="text-white/80 text-sm sm:text-base">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DisqualificationSection;
