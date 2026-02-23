import { Video, FileText, Mail, UserCheck } from "lucide-react";

const logisticsCards = [
  {
    icon: Video,
    title: "100% en ligne",
    desc: "Coaching via Google Meet, sessions adaptées à votre emploi du temps",
  },
  {
    icon: FileText,
    title: "Documents partagés + suivi IA",
    desc: "Tous les prompts, templates et documents accessibles en temps réel",
  },
  {
    icon: Mail,
    title: "Email + Chat",
    desc: "Communication continue entre les sessions pour rester aligné",
  },
  {
    icon: UserCheck,
    title: "Suivi 20 jours",
    desc: "Correction individuelle post par post, landing page incluse",
  },
];

const LogisticsSection = () => {
  return (
    <section className="bg-grey-light paper-texture-light py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="text-center mb-14 observe-section">
          <span className="text-navy font-display text-sm font-semibold tracking-wider uppercase mb-4 block">
            Logistique & Accès
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
            Comment ça <span className="text-gold-hover">fonctionne</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {logisticsCards.map((card, i) => (
            <div
              key={i}
              className="observe-section bg-white rounded-2xl p-6 border border-grey text-center hover:shadow-lg hover:-translate-y-1 transition-all"
            >
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
