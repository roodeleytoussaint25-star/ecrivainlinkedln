import { Linkedin, Target, User, FileText, Zap, Check } from "lucide-react";

const methods = [
  {
    num: "01",
    name: "Positionnement™",
    tagline: "Définir exactement qui tu es et à qui tu parles",
    description:
      "Tu remplis un questionnaire. Je définis ta niche, j'analyse ton profil existant, je pose les fondations.",
    icon: Target,
    highlights: [
      "Niche définie",
      "Voix identifiée",
      "Cible précisée",
      "Angle de contenu posé",
    ],
  },
  {
    num: "02",
    name: "Profil™",
    tagline: "Un profil LinkedIn qui parle pour toi",
    description:
      "Tu reçois 3 versions de texte pour chaque section de ton profil. Tu choisis la meilleure. Je déploie.",
    icon: User,
    highlights: [
      "Titre optimisé",
      "Résumé réécrit",
      "3 versions au choix",
      "Profil convertisseur",
    ],
  },
  {
    num: "03",
    name: "Contenu™",
    tagline: "16 posts complets avec visuels, prêts à copier-coller",
    description:
      "Je crée tes 16 posts (4 par semaine) depuis ta niche et ton vécu. Visuels inclus. Prêts à publier sur 4 semaines.",
    icon: FileText,
    highlights: [
      "16 posts rédigés",
      "Visuels créés",
      "Prêts à publier",
      "Calendrier inclus",
    ],
  },
];

const VehicleSection = () => {
  return (
    <section id="vehicule" className="bg-navy paper-texture-dark py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="text-center mb-16 observe-section max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
            <Linkedin className="w-4 h-4 text-gold" />
            <span className="text-white/70 text-sm font-medium">Le Programme</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            3 livrables. 1 système. <span className="text-gold">30 jours.</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed">
            Sprint Visibilité en 3 étapes, tout créé à ta place.
          </p>
        </div>

        <div className="space-y-8 mb-12">
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
                  <div className="md:w-2/5 flex items-center justify-center p-6 sm:p-10">
                    <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex flex-col items-center justify-center gap-3">
                      <method.icon className="w-12 h-12 text-gold/60" />
                      <span className="text-white/40 text-xs font-medium uppercase tracking-wider">
                        Mockup à venir
                      </span>
                    </div>
                  </div>

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

        <div className="observe-section max-w-3xl mx-auto bg-gold/5 border border-gold/20 rounded-2xl p-6 sm:p-8 text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <Zap className="w-5 h-5 text-gold" />
            <span className="text-gold font-display font-semibold text-sm uppercase tracking-wider">Livraison express</span>
          </div>
          <p className="font-display text-lg sm:text-xl font-semibold text-white">
            Livraison en moins d'une semaine. Tout en async, sans appel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VehicleSection;
