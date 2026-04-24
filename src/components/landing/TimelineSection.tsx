import { ClipboardList, User, FileText, Layers, CheckCircle2 } from "lucide-react";

const steps = [
  { days: "Jours 1-3", icon: ClipboardList, title: "Questionnaire de positionnement", desc: "Tu réponds, j'analyse. Ta niche est définie." },
  { days: "Jours 4-7", icon: User, title: "Profil optimisé", desc: "3 versions livrées pour chaque section. Tu choisis." },
  { days: "Jours 8-14", icon: FileText, title: "8 premiers posts", desc: "Posts rédigés avec visuels, prêts à publier." },
  { days: "Jours 15-21", icon: Layers, title: "8 posts suivants", desc: "Contenu complémentaire et calendrier de publication." },
  { days: "Jours 22-30", icon: CheckCircle2, title: "Livraison finale", desc: "Vérification complète. Tu es prêt à publier." },
];

const TimelineSection = () => {
  return (
    <section className="bg-grey-light paper-texture-light py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="text-center mb-14 observe-section">
          <span className="text-navy font-display text-sm font-semibold tracking-wider uppercase mb-4 block">Le déroulé</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
            Ton programme sur <span className="text-gold-hover">30 jours</span>
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-navy/10" />
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="observe-section relative flex items-start gap-6 pl-2">
                <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-navy flex items-center justify-center shadow-lg shadow-navy/20">
                  <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                </div>
                <div className="bg-white rounded-2xl p-5 sm:p-6 flex-1 border border-grey shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-gold-hover font-display text-xs font-bold tracking-wider uppercase">{step.days}</span>
                  <h3 className="font-display text-lg font-semibold text-navy mt-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
