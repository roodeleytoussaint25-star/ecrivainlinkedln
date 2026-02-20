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
    subtitle: "Fondations & stratégie",
    items: [
      "Niche profonde — prompts pour creuser votre intention d'écriture",
      "Histoire de fondation — framework pour écrire votre histoire",
      "Intention d'écriture — clarifier votre direction",
      "Optimisation profil — bannière, bio, photo, sélection",
      "Liste d'inspirations et concurrents",
      "Grandes idées — extraites de votre histoire personnelle",
      "Méthodes — inventaire et questionnaire",
      "Offre — rassembler vos méthodes en offre personnalisée",
      "Landing page — guide ultime no-code",
    ],
  },
  {
    num: "02",
    title: "Travail Pratique",
    subtitle: "Création & publication",
    items: [
      "Lean writing — transformer en carrousel",
      "Idées de contenu — extraire du quotidien",
      "Accroches — 10 types + 4 types avancés",
      "Fins de posts — 8 types de fins + 3 types d'augmentation",
      "Développement — listes, story, framework",
      "Crédibilité — trouver votre chapeau d'expert",
      "Carrousels — outils IA et méthodes",
      "Photos — Lightroom, InCollage, Meme Generator, ChatGPT",
      "Cut the fluff — prompts d'édition",
      "Commentaires — 5 prompts stratégiques",
      "Copywriting, séries, imitation puis innovation, répétition",
    ],
  },
  {
    num: "03",
    title: "Travail en Aval",
    subtitle: "Monétisation & croissance",
    items: [
      "Prospection — prompts pour analyser et générer des messages",
      "Analyse de métriques — prompts d'analyse",
      "Lead magnet — système de prompts pour créer un cours",
      "Tunnel de vente — système de prompts",
      "Newsletter — templates et prompts",
      "Appels de vente — prompts de préparation",
      "Livraison du service — prompts d'identification",
      "Landing page et offre — guides complets",
    ],
  },
];

const VehicleSection = () => {
  return (
    <section className="bg-navy py-20 sm:py-28">
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
