import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Combien de temps dure le programme ?",
    a: "Exactement 20 jours. Chaque jour, vous recevez un exercice concret et un feedback personnalisé. C'est intensif mais structuré pour que vous trouviez votre voix unique rapidement.",
  },
  {
    q: "Quel est le format du coaching ?",
    a: "Le coaching est 100% en ligne et en 1:1. On communique quotidiennement par messagerie pour les exercices et feedbacks, avec des sessions vidéo planifiées selon vos besoins.",
  },
  {
    q: "Faut-il déjà avoir un profil LinkedIn actif ?",
    a: "Non. Le programme commence par la Méthode Fondation™ qui clarifie votre voix et votre niche. Que vous ayez 0 ou 5 000 abonnés, on part de vos fondations.",
  },
  {
    q: "Est-ce que l'IA va écrire mes posts à ma place ?",
    a: "Non, et c'est tout l'intérêt. L'IA est votre assistant, pas votre remplaçant. Vous apprenez à l'utiliser pour structurer et améliorer — mais votre voix, vos idées et votre authenticité restent au centre.",
  },
  {
    q: "Pourquoi le prix est-il si bas ?",
    a: "C'est un lancement en version test avec seulement 5 premières places. Je veux affiner la méthode avec les premiers participants avant d'augmenter le prix. Si vous lisez cette page, profitez-en.",
  },
  {
    q: "Que se passe-t-il après les 20 jours ?",
    a: "Vous repartez avec un plan d'autonomie complet : tous les frameworks, templates et prompts sont à vous. Vous saurez exactement comment attirer des clients avec votre voix unique — sans dépendre de personne.",
  },
  {
    q: "J'ai peur de me montrer vulnérable en ligne…",
    a: "C'est normal, et c'est justement ce qu'on travaille ensemble. L'authenticité ne veut pas dire tout révéler — c'est trouver le juste équilibre entre votre vécu et votre expertise. Je vous accompagne pas à pas.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-grey-light paper-texture-light py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <div className="text-center mb-12 observe-section">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-deep mb-2">
            Questions fréquentes
          </h2>
          <p className="text-navy/60 text-sm">
            Tout ce que vous devez savoir avant de rejoindre le programme
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3 observe-section">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-navy/10 rounded-2xl overflow-hidden bg-white px-4 sm:px-6 hover:border-gold/30 transition-colors"
            >
              <AccordionTrigger className="hover:no-underline py-5 text-left">
                <span className="font-display text-base font-semibold text-navy-deep">
                  {faq.q}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-navy/70 text-sm leading-relaxed pb-2">
                  {faq.a}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
