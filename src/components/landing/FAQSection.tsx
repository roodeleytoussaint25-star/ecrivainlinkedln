import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Combien de temps dure le programme ?",
    a: "Exactement 20 jours. Chaque jour, vous recevez un exercice à faire et un feedback personnalisé sur votre travail. C'est intensif mais structuré pour que vous puissiez avancer à votre rythme.",
  },
  {
    q: "Quel est le format du coaching ?",
    a: "Le coaching est 100% en ligne et en 1:1. On communique quotidiennement par messagerie pour les exercices et feedbacks, avec des sessions vidéo planifiées selon vos besoins.",
  },
  {
    q: "Faut-il déjà avoir un profil LinkedIn actif ?",
    a: "Non. Le programme commence par la Méthode Fondation™ qui construit votre profil de zéro. Que vous ayez 0 ou 5 000 abonnés, on part de vos fondations.",
  },
  {
    q: "Est-ce que l'IA va écrire mes posts à ma place ?",
    a: "Non, et c'est tout l'intérêt. L'IA est votre assistant, pas votre remplaçant. Vous apprenez à utiliser l'IA pour structurer, améliorer et accélérer — mais la voix et les idées restent les vôtres.",
  },
  {
    q: "Pourquoi le prix est-il si bas ?",
    a: "C'est un lancement en version test. Je veux affiner la méthode avec les premiers participants avant d'augmenter le prix. Les premiers bêta-testeurs bénéficient d'un tarif qui sera multiplié par 150 une fois le programme validé.",
  },
  {
    q: "Que se passe-t-il après les 20 jours ?",
    a: "Vous repartez avec un plan d'autonomie complet : tous les frameworks, templates et prompts sont à vous. Vous saurez exactement quoi publier, comment et quand — sans dépendre de personne.",
  },
  {
    q: "Et si je ne suis pas satisfait ?",
    a: "Si après 5 jours vous estimez que le programme ne vous convient pas, on en discute ensemble. Mon objectif est votre transformation, pas juste une vente.",
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
              className="border border-navy/10 rounded-2xl overflow-hidden bg-white px-6 hover:border-gold/30 transition-colors"
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
