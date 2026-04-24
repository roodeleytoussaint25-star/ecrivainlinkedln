import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Combien de temps dure Sprint Visibilité ?", a: "30 jours. En pratique, tu reçois tous les livrables en moins de 2 semaines. Le reste du temps, tu publies et tu observes." },
  { q: "Vais-je avoir des appels avec Roodeley ?", a: "Non. Tout est async. Tu remplis le questionnaire, je travaille, tu valides. Pas besoin d'aligner les agendas." },
  { q: "Dois-je déjà avoir un profil LinkedIn ?", a: "Non. Sprint Visibilité peut partir de zéro. Le questionnaire de positionnement définit ton angle même si tu n'as jamais publié." },
  { q: "Pourquoi 197€ ?", a: "C'est un lancement avec 3 places seulement. L'objectif est de valider le système sur de nouveaux profils. Le prix augmentera après." },
  { q: "Que se passe-t-il après les 30 jours ?", a: "Tu as ton profil, tes 16 posts et ton calendrier. Tu publies. Si tu veux aller plus loin, LWAI 90 est l'étape suivante : système de conversion, DMs, second cerveau." },
  { q: "Et si les livrables ne me conviennent pas ?", a: "Si les livrables ne correspondent pas au questionnaire que tu as rempli, on retravaille jusqu'à ce que ce soit juste." },
];

const FAQSection = () => {
  return (
    <section className="bg-grey-light paper-texture-light py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <div className="text-center mb-12 observe-section">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-deep mb-2">Questions fréquentes</h2>
          <p className="text-navy/60 text-sm">Tout ce que tu dois savoir avant de réserver ta place</p>
        </div>
        <Accordion type="single" collapsible className="space-y-3 observe-section">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-navy/10 rounded-2xl overflow-hidden bg-white px-4 sm:px-6 hover:border-gold/30 transition-colors">
              <AccordionTrigger className="hover:no-underline py-5 text-left">
                <span className="font-display text-base font-semibold text-navy-deep">{faq.q}</span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-navy/70 text-sm leading-relaxed pb-2">{faq.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
