import { Linkedin, Target, PenTool, TrendingUp, Gift, Check } from "lucide-react";

const methods = [
  {
    num: "01",
    name: "La Méthode Fondation™",
    tagline: "Clarifier qui vous êtes et à qui vous parlez",
    description:
      "Avant d'écrire, on clarifie votre voix, votre niche et votre offre. Fini la confusion : vous saurez exactement quoi dire, à qui, et pourquoi.",
    icon: Target,
    highlights: [
      "Niche creusée en profondeur",
      "Voix unique définie",
      "Profil LinkedIn qui convertit",
      "Offre alignée avec votre expertise",
    ],
  },
  {
    num: "02",
    name: "La Méthode Écriture™",
    tagline: "Créer du contenu engageant sans perdre votre authenticité",
    description:
      "L'IA devient votre assistant, pas votre remplaçant. Vous apprenez à structurer, écrire et publier des posts qui vous ressemblent, avec un feedback quotidien.",
    icon: PenTool,
    highlights: [
      "20 posts écrits et corrigés",
      "L'IA au service de votre voix",
      "Accroches qui captent l'attention",
      "Feedback personnalisé chaque jour",
    ],
  },
  {
    num: "03",
    name: "La Méthode Croissance™",
    tagline: "Transformer votre audience en clients",
    description:
      "Vos posts attirent les bonnes personnes ? On transforme l'attention en conversations et en ventes : prospection, tunnel de vente, landing page.",
    icon: TrendingUp,
    highlights: [
      "Prospection stratégique",
      "Landing page opérationnelle",
      "Messages de vente authentiques",
      "Plan d'autonomie post-20 jours",
    ],
  },
];

const bonuses = [
  "50+ prompts IA personnalisés pour l'écriture",
  "Templates d'accroches et fins de posts",
  "Framework de copywriting avancé",
  "Guide de commentaires stratégiques",
  "Checklist d'optimisation de profil",
  "Modèles de messages de prospection",
  "Template de lead magnet",
  "Guide Lightroom + InCollage pour visuels",
];

const VehicleSection = () => {
  return (
    <section id="vehicule" className="bg-navy paper-texture-dark py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16 observe-section max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
            <Linkedin className="w-4 h-4 text-gold" />
            <span className="text-white/70 text-sm font-medium">Le Programme</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            3 méthodes propriétaires pour{" "}
            <span className="text-gold">retrouver votre voix et attirer vos clients</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed">
            Un coaching 1:1 structuré pour passer de zéro à une présence LinkedIn authentique qui génère des opportunités — en 20 jours.
          </p>
        </div>

        {/* Methods */}
        <div className="space-y-8 mb-20">
          {methods.map((method, index) => (
            <div
              key={method.num}
              className="observe-section group relative rounded-3xl p-[1px] transition-all hover:-translate-y-1 hover:shadow-2xl"
              style={{
                background:
                  "linear-gradient(160deg, hsla(270, 60%, 50%, 0.3), hsla(224, 76%, 33%, 0.2), hsla(48, 97%, 55%, 0.15))",
              }}
            >
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  background:
                    "linear-gradient(170deg, hsla(224, 76%, 18%, 0.97) 0%, hsla(224, 60%, 22%, 0.97) 100%)",
                }}
              >
                <div className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-6 md:gap-0`}>
                  {/* Mockup placeholder */}
                  <div className="md:w-2/5 flex items-center justify-center p-6 sm:p-10">
                    <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex flex-col items-center justify-center gap-3">
                      <method.icon className="w-12 h-12 text-gold/60" />
                      <span className="text-white/40 text-xs font-medium uppercase tracking-wider">
                        Mockup à venir
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:w-3/5 p-6 pt-0 md:pt-6 sm:p-10 flex flex-col justify-center">
                    <span className="font-display text-5xl font-bold text-gold/20 mb-2">
                      {method.num}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">
                      {method.name}
                    </h3>
                    <p className="text-gold/80 text-sm font-medium mb-4">{method.tagline}</p>
                    <p className="text-white/60 text-sm leading-relaxed mb-6">
                      {method.description}
                    </p>
                    <ul className="space-y-2">
                      {method.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-sm">
                          <div className="w-5 h-5 shrink-0 rounded-full bg-gold/15 flex items-center justify-center">
                            <Check className="w-3 h-3 text-gold" />
                          </div>
                          <span className="text-white/80">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bonuses */}
        <div className="observe-section">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-4">
              <Gift className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-semibold">Bonus inclus</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Les frameworks et ressources offerts
            </h3>
            <p className="text-white/50 text-sm mt-2">
              En plus du coaching, vous repartez avec tout ça
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {bonuses.map((bonus, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:border-gold/20 transition-colors"
              >
                <span className="text-gold text-sm">✦</span>
                <span className="text-white/75 text-sm">{bonus}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleSection;
