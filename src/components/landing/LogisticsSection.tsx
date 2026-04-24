import { Zap, Calendar, Trello, Package } from "lucide-react";

const logisticsCards = [
  { icon: Zap, title: "100% async", desc: "Tout se passe via un espace partagé. Pas d'agenda à aligner, pas de Google Meet." },
  { icon: Calendar, title: "30 jours, livrables rapides", desc: "Questionnaire initial, livraison progressive, validation par écrit." },
  { icon: Trello, title: "Trello ou Notion", desc: "Espace partagé pour tous les livrables. Tu commentes, je corrige." },
  { icon: Package, title: "Ce qui est inclus", desc: "Questionnaire, profil (3 versions), 16 posts + visuels, calendrier." },
];

const LogisticsSection = () => {
  return (
    <section className="bg-grey-light paper-texture-light py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="text-center mb-14 observe-section">
          <span className="text-navy font-display text-sm font-semibold tracking-wider uppercase mb-4 block">Logistique & Accès</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
            Comment ça <span className="text-gold-hover">fonctionne</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {logisticsCards.map((card, i) => (
            <div key={i} className="observe-section bg-white rounded-2xl p-6 border border-grey text-center hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center mx-auto mb-4">
                <card.icon className="w-7 h-7 text-navy" />
              </div>
              <h3 className="font-display text-base font-semibold text-navy mb-2">{card.title}</h3>
              <p className="text-muted-foreground text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogisticsSection;
