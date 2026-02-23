import { UserCheck, Pencil, FileText, Rocket, BarChart3, Trophy } from "lucide-react";

const steps = [
  {
    days: "Jours 1-2",
    icon: UserCheck,
    title: "Audit & Fondations",
    desc: "Audit complet profil + définition niche + grande idée",
  },
  {
    days: "Jours 3-5",
    icon: Pencil,
    title: "Premiers posts tests",
    desc: "3 posts tests avec feedback immédiat et corrections",
  },
  {
    days: "Jours 6-10",
    icon: FileText,
    title: "Construction",
    desc: "7 posts construits avec correction individuelle",
  },
  {
    days: "Jours 11-15",
    icon: Rocket,
    title: "Offre & Landing Page",
    desc: "5 posts + création de votre offre + landing page draft",
  },
  {
    days: "Jours 16-19",
    icon: BarChart3,
    title: "Optimisation",
    desc: "5 posts + optimisation landing page + CTA stratégiques",
  },
  {
    days: "Jour 20",
    icon: Trophy,
    title: "Revue finale",
    desc: "Corrections, check métriques + plan post-20 jours pour autonomie",
  },
];

const TimelineSection = () => {
  return (
    <section className="bg-grey-light paper-texture-light py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="text-center mb-14 observe-section">
          <span className="text-navy font-display text-sm font-semibold tracking-wider uppercase mb-4 block">
            La Granularité
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
            Votre parcours <span className="text-gold-hover">jour par jour</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-navy/10" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="observe-section relative flex items-start gap-6 pl-2">
                <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-navy flex items-center justify-center shadow-lg shadow-navy/20">
                  <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                </div>
                <div className="bg-white rounded-2xl p-5 sm:p-6 flex-1 border border-grey shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-gold-hover font-display text-xs font-bold tracking-wider uppercase">
                    {step.days}
                  </span>
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
