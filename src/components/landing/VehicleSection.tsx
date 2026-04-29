import { Linkedin, Target, User, FileText, Zap, Check } from "lucide-react";
import mockupPositionnement from "@/assets/mockup-positionnement.png";
import mockupProfil from "@/assets/mockup-profil.png";
import mockupContenu from "@/assets/mockup-contenu.png";

const methods = [
  {
    num: "01",
    name: "Positionnement™",
    tagline: "Définir exactement qui tu es et à qui tu parles",
    description:
      "Tu remplis un questionnaire interactif. Je définis ta niche, j'analyse ton profil existant et je pose les fondations.",
    icon: Target,
    image: mockupPositionnement,
    imageAlt: "Mockup livrable Positionnement",
    highlights: [
      "Niche définie",
      "Histoire de fondation identifiée",
      "Cible précisée",
      "Angle de contenu posé",
    ],
  },
  {
    num: "02",
    name: "Profil™",
    tagline: "Un profil LinkedIn qui parle pour toi",
    description:
      "Tu reçois 3 versions de texte pour chaque section de ton profil. Tu choisis la meilleure. Et tu déploies.",
    icon: User,
    image: mockupProfil,
    imageAlt: "Mockup livrable Profil LinkedIn",
    highlights: [
      "Titre optimisé",
      "Résumé réécrit",
      "3 versions au choix",
      "Profil transformé en landing page",
    ],
  },
  {
    num: "03",
    name: "Contenu™",
    tagline: "16 posts complets avec visuels, prêts à copier-coller",
    description:
      "Je crée tes 16 posts (4 par semaine) depuis ta niche et ton vécu. Visuels inclus. Prêts à publier sur 4 semaines.",
    icon: FileText,
    image: mockupContenu,
    imageAlt: "Mockup livrable Contenu et Posts",
    highlights: [
      "16 posts rédigés",
      "Visuels et carrousels créés",
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
                  <div className="md:w-1/2 flex items-center justify-center p-3 sm:p-5">
                    <div className="w-full aspect-square rounded-2xl overflow-hidden flex items-center justify-center">
                      <img
                        src={method.image}
                        alt={method.imageAlt}
                        className="w-full h-full object-cover scale-110"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="md:w-1/2 p-6 pt-0 md:pt-6 sm:p-10 flex flex-col justify-center">
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
          <p className="font-display text-lg sm:text-xl font-semibold text-white mb-6">
            Livraison en moins d'une semaine. Tout en async, sans appel.
          </p>
          <a
            href="https://wa.me/message/FE33Z6D3JW7OI1?text=Bonjour%20Toussaint%2C%20je%20souhaite%20r%C3%A9server%20ma%20place%20pour%20le%20Sprint%20Visibilit%C3%A9."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-navy-deep hover:bg-gold-hover font-display font-bold text-sm sm:text-base px-8 py-3 rounded-full shadow-lg shadow-gold/20 transition-all hover:shadow-xl hover:shadow-gold/30 hover:scale-105"
          >
            Obtenir ma place
          </a>
        </div>
      </div>
    </section>
  );
};

export default VehicleSection;
