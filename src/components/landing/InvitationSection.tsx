const SketchX = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 8L24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M24 8L8 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 10C7 9 9 7 10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M22 6C23 7 25 9 26 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const SketchForbidden = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 8L24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 17C5.5 16.5 5 15.5 5 15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M27 15C26.5 15.5 27 16.5 27 17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const SketchBrain = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 28V18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M16 18C16 14 12 12 10 13C8 14 8 17 10 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 18C16 14 20 12 22 13C24 14 24 17 22 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 13C9 11 10 8 13 7C14 6.5 15 6 16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 13C23 11 22 8 19 7C18 6.5 17 6 16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="13" cy="10" r="1" fill="currentColor" />
    <circle cx="19" cy="10" r="1" fill="currentColor" />
  </svg>
);

const cards = [
  {
    icon: SketchX,
    title: "Tu ne sais pas",
    highlight: "quoi raconter",
    text: "C'est normal de ne pas savoir par où commencer. Pourtant, ton quotidien regorge d'expériences intéressantes à documenter !",
  },
  {
    icon: SketchForbidden,
    title: "Tu ne te sens pas",
    highlight: "légitime",
    text: "Personne ne se sent 100% légitime. C'est un sentiment universel et tous les créateurs ont douté avant de démarrer. Rassure-toi, c'est normal !",
  },
  {
    icon: SketchBrain,
    title: "L'IA comme",
    highlight: "assistant",
    text: "Vous souhaitez utiliser l'IA pour vous mettre en valeur, pour transformer votre histoire en quelque chose de désirable, et ne pas au contraire la laisser détruire votre marque.",
  },
];

const InvitationSection = () => {
  return (
    <section className="relative bg-navy py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(224_76%_40%/0.3),transparent_60%)]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-5xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white text-center mb-14 observe-section">
          Ce qui te bloque{" "}
          <span className="text-gold italic">aujourd'hui</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`observe-section bg-gold rounded-3xl p-7 sm:p-8 transition-all hover:-translate-y-1 hover:shadow-2xl shadow-lg ${
                i === 2
                  ? "md:col-span-2 md:max-w-[calc(50%-12px)] md:mx-auto"
                  : ""
              }`}
            >
              <div className="w-14 h-14 rounded-xl bg-navy-deep/10 flex items-center justify-center mb-5 text-navy-deep">
                <card.icon />
              </div>
              <h3 className="font-display text-lg font-semibold text-navy-deep mb-2">
                {card.title}{" "}
                <span className="relative text-navy-deep">
                  {card.highlight}
                  <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-navy-deep/60 rounded-full" />
                </span>
              </h3>
              <p className="text-navy-deep/70 text-sm leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        <div className="observe-section mt-14 bg-gold/10 border border-gold/20 rounded-2xl p-6 sm:p-8 text-center max-w-2xl mx-auto">
          <p className="font-display text-lg sm:text-xl font-semibold text-gold">
            Votre impact réel vient de l'écriture quotidienne, pas des
            impressions ou likes superficiels.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvitationSection;
