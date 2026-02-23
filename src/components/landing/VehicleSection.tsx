import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const phases = [
  {
    num: "01",
    title: "Travail en Amont",
    subtitle: "Trouver la bonne stratégie et poser les fondations",
    items: [
      "Niche profonde — Creuser en profondeur votre niche pour générer des idées de contenu qui résonnent avec votre cible",
      "Histoire de fondation — Structurer votre histoire personnelle pour créer un lien authentique avec votre audience",
      "Intention d'écriture — Définir une direction claire pour ne jamais manquer d'inspiration",
      "Optimisation profil — Optimiser bannière, bio et photo pour convertir chaque visiteur en abonné",
      "Inspirations et concurrents — Identifier vos références pour accélérer votre courbe d'apprentissage",
      "Grandes idées — Extraire de votre vécu les idées uniques que personne d'autre ne peut copier",
      "Méthodes — Inventorier vos compétences pour transformer votre expertise en système",
      "Offre — Assembler vos méthodes en une offre personnalisée prête à vendre",
      "Landing page — Construire une page de vente efficace sans coder",
    ],
  },
  {
    num: "02",
    title: "Travail Pratique",
    subtitle: "Créer et publier du contenu qui attire vos clients",
    items: [
      "Lean writing — Écrire des posts percutants et les transformer en carrousels engageants",
      "Idées de contenu — Puiser dans votre quotidien pour ne jamais être à court d'idées",
      "Accroches — Maîtriser 14 types d'accroches pour capter l'attention dès la première ligne",
      "Fins de posts — Utiliser 11 techniques de clôture pour maximiser l'engagement",
      "Développement — Structurer vos idées en listes, stories et frameworks clairs",
      "Crédibilité — Trouver votre angle d'expert pour asseoir votre autorité",
      "Carrousels — Exploiter les outils IA pour créer des visuels qui arrêtent le scroll",
      "Photos — Produire des visuels pro avec Lightroom, InCollage et ChatGPT",
      "Cut the fluff — Éliminer le superflu pour rendre chaque mot impactant",
      "Commentaires — Commenter stratégiquement pour attirer de nouveaux abonnés qualifiés",
      "Copywriting avancé — Maîtriser les séries, l'imitation créatrice et la répétition stratégique",
    ],
  },
  {
    num: "03",
    title: "Travail en Aval",
    subtitle: "Monétiser votre audience et scaler votre activité",
    items: [
      "Prospection — Analyser et contacter vos prospects avec des messages qui convertissent",
      "Analyse de métriques — Décoder vos statistiques pour doubler ce qui fonctionne",
      "Lead magnet — Créer un mini-cours gratuit qui attire des prospects qualifiés automatiquement",
      "Tunnel de vente — Construire un parcours de vente qui convertit en autopilote",
      "Newsletter — Lancer et alimenter une newsletter qui fidélise votre audience",
      "Appels de vente — Préparer vos appels pour closer avec confiance",
      "Livraison du service — Systématiser votre délivrable pour satisfaire chaque client",
      "Landing page et offre — Affiner votre page et votre offre pour maximiser vos conversions",
    ],
  },
];

const VehicleSection = () => {
  return (
    <section className="bg-navy paper-texture-dark py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="text-center mb-14 observe-section max-w-2xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            L'écriture est au <span className="text-gold">centre de tout</span>
          </h2>
          <p className="text-white/70 mt-4 text-base sm:text-lg leading-relaxed">
            Pour réussir ici, il faut considérer l'écriture comme le centre de tout. J'identifie 3 types de travail pour y arriver, avec l'écriture comme point central.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {phases.map((phase) => (
            <AccordionItem
              key={phase.num}
              value={phase.num}
              className="observe-section border border-white/15 rounded-2xl overflow-hidden bg-white/8 backdrop-blur-sm px-6 hover:border-gold/20 transition-colors"
            >
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-4 text-left">
                  <span className="font-display text-3xl font-bold text-gold/40">{phase.num}</span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">{phase.title}</h3>
                    <p className="text-white/60 text-sm">{phase.subtitle}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="grid sm:grid-cols-2 gap-2 pb-4">
                  {phase.items.map((item, i) => {
                    const parts = item.split(" — ");
                    return (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-gold mt-0.5 shrink-0">✦</span>
                        <span>
                          <span className="text-white font-medium">{parts[0]}</span>
                          {parts[1] && <span className="text-white/55"> — {parts[1]}</span>}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-10 observe-section">
          <span className="inline-flex items-center gap-2 text-gold/80 font-display text-sm font-semibold tracking-wide">
            <span className="text-gold text-lg">✦</span>
            28 méthodes et frameworks inclus
          </span>
        </div>
      </div>
    </section>
  );
};

export default VehicleSection;
